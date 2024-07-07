input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    receiver.fahreSchritt(190, 31, 50)
    receiver.fahreSchritt(190, 1, 50)
})
radio.onReceivedData(function (receivedData) {
    if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0)) {
        if (radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor) > 128 && cb2.readUltraschallEntfernung(cb2.eDist.cm) < 25) {
            cb2.writeMotor128Servo16(128, 16)
        } else {
            cb2.writeMotor128Servo16(radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor), radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b1_Servo))
        }
    }
    receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
    radio.zeige5x5Buffer(receivedData)
    radio.zeige5x5Joystick(receivedData)
})
receiver.beimStart(
receiver.eHardware.calli2bot,
90,
true,
65
)
