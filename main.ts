radio.onReceivedData(function (receivedData) {
    if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0)) {
        receiver.c2Motor255(radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor))
        receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
        radio.zeige5x5Buffer(receivedData)
        radio.zeige5x5Joystick(receivedData)
    }
})
receiver.beimStart(
receiver.eModell.calli2bot,
90,
true,
65,
175
)
