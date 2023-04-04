input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(45)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    radio.sendValue("y", joystickbit.getRockerValue(joystickbit.rockerType.X) / 8)
    basic.pause(100)
    radio.sendValue("x", joystickbit.getRockerValue(joystickbit.rockerType.Y) / 8)
    basic.pause(100)
})
