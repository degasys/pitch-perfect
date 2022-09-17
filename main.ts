function refreshScreen () {
	
}
OLED.init(64, 128)
OLED.showString("Pitch Perfect")
OLED.showString("Press A to Start")
let score = 0
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        OLED.init(64, 128)
        OLED.showString("You have guess which pitch it is by pressing the correct key")
        basic.pause(5000)
        OLED.init(64, 128)
        OLED.showString("This is C.")
        OLED.showString("The left blue button.")
        basic.showLeds(`
            . . # # .
            . # . . .
            . # . . .
            . # . . .
            . . # # .
            `)
        music.playTone(262, music.beat(BeatFraction.Breve))
        basic.pause(1000)
        OLED.init(64, 128)
        OLED.showString("This is D")
        OLED.showString("The middle blue button.")
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
        music.playTone(294, music.beat(BeatFraction.Breve))
        basic.pause(1000)
        OLED.init(64, 128)
        OLED.showString("This is E")
        OLED.showString("The right blue button.")
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        music.playTone(330, music.beat(BeatFraction.Breve))
        basic.pause(1000)
        OLED.init(64, 128)
        OLED.showString("Ready?")
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(1)
        basic.pause(1000)
        score = 0
        basic.showIcon(IconNames.Heart)
        OLED.init(64, 128)
        OLED.showString("Key #1")
        music.playTone(262, music.beat(BeatFraction.Breve))
        if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1)) {
            score += 1
            basic.showIcon(IconNames.Yes)
        } else {
            score += 0
            basic.showIcon(IconNames.No)
        }
        basic.showIcon(IconNames.Heart)
        OLED.init(64, 128)
        OLED.showString("Key #2")
        music.playTone(294, music.beat(BeatFraction.Double))
        if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1)) {
            score += 1
            basic.showIcon(IconNames.Yes)
        } else {
            score += 0
            basic.showIcon(IconNames.No)
        }
        basic.pause(3000)
        basic.showIcon(IconNames.Heart)
        OLED.init(64, 128)
        OLED.showString("Key #3")
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.pause(3000)
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1)) {
            score += 1
            basic.showIcon(IconNames.Yes)
        } else {
            score += 0
            basic.showIcon(IconNames.No)
        }
        basic.pause(3000)
        basic.showIcon(IconNames.Heart)
        OLED.init(64, 128)
        OLED.showString("Key #4")
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(3000)
        if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1)) {
            score += 1
            basic.showIcon(IconNames.Yes)
        } else {
            score += 0
            basic.showIcon(IconNames.No)
        }
        basic.pause(3000)
        basic.showIcon(IconNames.Heart)
        OLED.init(64, 128)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
        OLED.showString("Your score is:")
        OLED.showNumber(score)
    }
})
