input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    cb2.fahreStrecke(btf.speedPicker(85), btf.protractorPicker(90), 100)
    cb2.fahreStrecke(btf.speedPicker(30), btf.protractorPicker(10), 30)
    cb2.fahreStrecke(btf.speedPicker(-60), btf.protractorPicker(170), 30)
})
input.onButtonEvent(Button.B, sender.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.plus)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.set_localProgram(true)
    d1 = !(d1)
})
function fahrenJoystick () {
    if (btf.getSensor(btf.btf_receivedBuffer19(), btf.eBufferPointer.m0, btf.eSensor.b6) && (btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.m0, btf.eBufferOffset.b0_Motor) > 128 && cb2.readUltraschallAbstand() < btf.getAbstand(btf.btf_receivedBuffer19()))) {
        cb2.writeMotorenStop()
    } else {
        cb2.writeMotor128Servo16(btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.m0, btf.eBufferOffset.b0_Motor), btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.m0, btf.eBufferOffset.b1_Servo), 45)
    }
}
input.onButtonEvent(Button.A, sender.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.minus)
})
btf.onReceivedData(function (receivedData) {
    if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p0) && btf.getaktiviert(receivedData, btf.e3aktiviert.m0)) {
        fahrenJoystick()
    } else if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p0) && btf.getaktiviert(receivedData, btf.e3aktiviert.mc)) {
        btf.comment(btf.btf_text("dauerhaft"))
    }
    d1 = btf.isBetriebsart(btf.btf_receivedBuffer19(), btf.e0Betriebsart.p1) && (btf.getaktiviert(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc) && btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b1_Servo) == 1)
    d2 = btf.isBetriebsart(btf.btf_receivedBuffer19(), btf.e0Betriebsart.p0) && (btf.getaktiviert(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc) && btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b1_Servo) == 2)
    receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
})
let bWiederholung = false
let d2 = false
let d1 = false
cb2.beimStart(true)
basic.forever(function () {
    if (d2 && !(btf.timeout(1000))) {
        bWiederholung = true
        cb2.beispielSpurfolger(btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.mc, btf.eBufferOffset.b0_Motor), btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b0_Motor), btf.getSensor(btf.btf_receivedBuffer19(), btf.eBufferPointer.mc, btf.eSensor.b6), btf.getAbstand(btf.btf_receivedBuffer19()))
    } else if (d1 && !(btf.timeout(1000))) {
        cb2.beispielSpurfolger16(
        192,
        31,
        bWiederholung,
        btf.getAbstand(btf.btf_receivedBuffer19())
        )
        bWiederholung = true
    } else if (bWiederholung) {
        bWiederholung = false
        cb2.writeMotorenStop()
    }
})
loops.everyInterval(700, function () {
    if (btf.timeout(1000)) {
        cb2.writeMotorenStop()
        receiver.rgbLEDs(receiver.eRGBled.a, 0xff0000, true)
    }
})
