function 평상시온도측정 () {
    평상시온도 = input.temperature()
}
function 강한열감_남쪽대피 () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 온도세기분류 () {
    온도측정()
    if (온도변화 == 0) {
        온도세기 = 0
    } else if (온도변화 != 0 && 온도변화 <= 2) {
        온도세기 = 1
    } else {
        온도세기 = 2
    }
}
function 기기표시 () {
    if (온도세기 == 0) {
        열감없음()
    } else if (온도세기 == 1) {
        약한열감()
    } else {
        강한열감_남쪽대피()
    }
}
function 열감없음 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 온도측정 () {
    온도변화 = Math.abs(input.temperature() - 평상시온도)
    basic.showNumber(온도변화)
}
function 약한열감 () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
let 온도세기 = 0
let 온도변화 = 0
let 평상시온도 = 0
평상시온도측정()
basic.forever(function () {
    온도세기분류()
    기기표시()
})
