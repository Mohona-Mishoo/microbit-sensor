radio.onReceivedString(function (receivedString) {
    if (false) {
        robobit.driveMilliseconds(0, 1000)
        basic.showIcon(IconNames.No)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . . . . #
                . . . # #
                . . # . #
                . . . . #
                . . . . #
                `)
            robobit.move(RBMotor.Right, RBDirection.Forward, 50)
            robobit.move(RBMotor.Left, RBDirection.Forward, 0)
        } else {
            if (input.buttonIsPressed(Button.A)) {
                basic.showLeds(`
                    # . . . .
                    # # . . .
                    # . # . .
                    # . . . .
                    # . . . .
                    `)
                robobit.move(RBMotor.Left, RBDirection.Forward, 50)
                robobit.move(RBMotor.Right, RBDirection.Forward, 0)
            } else {
                if (input.buttonIsPressed(Button.AB)) {
                    basic.showLeds(`
                        . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
                        `)
                    robobit.go(RBDirection.Forward, 50)
                } else {
                    if (input.isGesture(Gesture.ScreenDown)) {
                        robobit.setLedColor(0xFF0000)
                        robobit.stop(RBStopMode.Brake)
                    } else {
                        if (input.isGesture(Gesture.LogoDown)) {
                            basic.showLeds(`
                                . . # . .
                                . . # . .
                                # . # . #
                                . # # # .
                                . . # . .
                                `)
                            robobit.go(RBDirection.Reverse, 50)
                        }
                    }
                }
            }
        }
    }
})
let set_distance_to = 0
radio.setGroup(5)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    set_distance_to = robobit.sonar(RBPingUnit.Inches)
    if (set_distance_to < 0.5) {
        robobit.setLedColor(0xFF0000)
        robobit.stop(RBStopMode.Brake)
        basic.pause(100)
        robobit.drive(-500)
    } else {
        if (set_distance_to > 0.5) {
            robobit.drive(500)
        }
    }
})
