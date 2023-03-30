bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    bluetooth.uartWriteString("done")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
bluetooth.startButtonService()
bluetooth.startLEDService()
bluetooth.startUartService()
bluetooth.startTemperatureService()
basic.forever(function () {
	
})
