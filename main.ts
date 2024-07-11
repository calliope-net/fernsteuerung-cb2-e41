input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    cb2.fahreStrecke(radio.speedPicker(85), radio.protractorPicker(90), 100)
    cb2.fahreStrecke(radio.speedPicker(30), radio.protractorPicker(10), 30)
    cb2.fahreStrecke(radio.speedPicker(-60), radio.protractorPicker(170), 30)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    while (cb2.beispielSpurfolger(radio.speedPicker(100), radio.speedPicker(50), 10)) {
    	
    }
})
function fahrenJoystick () {
    if (radio.getSensor(radio.radio_receivedBuffer19(), radio.eBufferPointer.m0, radio.eSensor.b6) && (radio.getByte(radio.radio_receivedBuffer19(), radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor) > 128 && cb2.readUltraschallAbstand() < radio.getAbstand(radio.radio_receivedBuffer19()))) {
        cb2.writeMotor128Servo16(128, 16)
    } else {
        cb2.writeMotor128Servo16(radio.getByte(radio.radio_receivedBuffer19(), radio.eBufferPointer.m0, radio.eBufferOffset.b0_Motor), radio.getByte(radio.radio_receivedBuffer19(), radio.eBufferPointer.m0, radio.eBufferOffset.b1_Servo), 45)
    }
}
radio.onReceivedData(function (receivedData) {
    if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0) && radio.getaktiviert(receivedData, radio.e3aktiviert.m0)) {
        fahrenJoystick()
    } else if (radio.isBetriebsart(receivedData, radio.e0Betriebsart.p0) && radio.getaktiviert(receivedData, radio.e3aktiviert.mc)) {
        if (radio.getByte(receivedData, radio.eBufferPointer.md, radio.eBufferOffset.b1_Servo) == 2) {
            if (cb2.beispielSpurfolger(radio.getByte(receivedData, radio.eBufferPointer.mc, radio.eBufferOffset.b0_Motor), radio.getByte(receivedData, radio.eBufferPointer.md, radio.eBufferOffset.b0_Motor), radio.getAbstand(receivedData))) {
            	
            }
        }
    }
    receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
    radio.zeige5x5Buffer(receivedData)
    radio.zeige5x5Joystick(receivedData)
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    radio.setFunkgruppeButton(radio.eFunkgruppeButton.minus)
    storage.putNumber(StorageSlots.s1, cb2.storageBufferGet())
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    radio.setFunkgruppeButton(radio.eFunkgruppeButton.plus)
    storage.putNumber(StorageSlots.s1, cb2.storageBufferGet())
})
cb2.beimStart(
true,
storage.getNumber(StorageSlots.s1)
)
storage.putNumber(StorageSlots.s1, cb2.storageBufferGet())
cb2.writeReset()
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
