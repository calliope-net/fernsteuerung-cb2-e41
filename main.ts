input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    cb2.fahreSchritt(190, 31, 50)
    cb2.fahreSchritt(190, 1, 50)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    while (cb2.seite9Linienfolger(100, 50, 10)) {
    	
    }
})
radio.onReceivedData(function (receivedData) {
    if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0)) {
        if (radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor) > 128 && cb2.readUltraschallAbstand() < 25) {
            cb2.writeMotor128Servo16(128, 16)
        } else {
            cb2.writeMotor128Servo16(radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor), radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b1_Servo))
        }
    }
    receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
    radio.zeige5x5Buffer(receivedData)
    radio.zeige5x5Joystick(receivedData)
})
let l = 0
cb2.beimStart(
true,
180
)
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
loops.everyInterval(500, function () {
    l = cb2.readEncoderValues()[0]
    _4digit.point(l < 0)
    _4digit.show(l)
})
