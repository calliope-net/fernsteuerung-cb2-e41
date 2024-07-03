input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    r_callibot.resetEncoder(r_callibot.eMotor.beide)
    receiver.c2Motor255(150)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(l)
})
radio.onReceivedData(function (receivedData) {
    if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0)) {
        receiver.c2Motor255(radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor))
        receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
        radio.zeige5x5Buffer(receivedData)
        radio.zeige5x5Joystick(receivedData)
    }
})
let list: number[] = []
let l = 0
receiver.beimStart(
receiver.eModell.calli2bot,
90,
true,
65,
175
)
loops.everyInterval(200, function () {
    list = r_callibot.encoderValue()
    l = list[0]
    if (l > 50 * 31.25) {
        receiver.c2Motor255(128)
    }
})
