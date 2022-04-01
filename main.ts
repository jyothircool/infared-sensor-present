basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 100) {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
    }
})
