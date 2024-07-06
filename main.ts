input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    receiver.fahreSchritt(190, 31, 50)
    receiver.fahreSchritt(190, 1, 50)
})
radio.onReceivedData(function (receivedData) {
    if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0)) {
        receiver.c2motor128lenken16(radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor), radio.getByte(receivedData, radio.eBufferPointer.m0, radio.eBufferOffset.b1_Servo))
        receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
        radio.zeige5x5Buffer(receivedData)
        radio.zeige5x5Joystick(receivedData)
    }
})
let l = 0
let list: number[] = []
receiver.beimStart(
receiver.eHardware.calli2bot,
90,
true,
65
)
loops.everyInterval(200, function () {
    if (radio.isBetriebsart(radio.radio_receivedBuffer19(), radio.e0Betriebsart.p2)) {
        list = r_callibot.encoderValue()
        l = list[0]
        if (l > 50 * 31.25) {
        	
        }
    }
})
