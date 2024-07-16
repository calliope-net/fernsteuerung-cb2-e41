input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, sender.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.plus)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.set_localProgram(true)
    dauerhaft_1 = !(dauerhaft_1)
})
function fahrenJoystick () {
    if (true && (btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.m0, btf.eBufferOffset.b0_Motor) > 128 && cb2.readUltraschallAbstand() < btf.getAbstand(btf.btf_receivedBuffer19()))) {
        cb2.writeMotorenStop()
    } else {
        cb2.writeMotor128Servo16(btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.m0, btf.eBufferOffset.b0_Motor), btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.m0, btf.eBufferOffset.b1_Servo), 45)
    }
}
input.onButtonEvent(Button.A, sender.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.minus)
})
btf.onReceivedData(function (receivedData) {
    dauerhaft_1 = btf.isBetriebsart(btf.btf_receivedBuffer19(), btf.e0Betriebsart.p1) && (btf.getaktiviert(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc) && btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b1_Servo) == 1)
    if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p0) && btf.getaktiviert(receivedData, btf.e3aktiviert.m0)) {
        cb2.fahreJoystick(btf.btf_receivedBuffer19(), 50)
    } else if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p2)) {
        cb2.fahreBuffer19(btf.btf_receivedBuffer19())
    }
    receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
})
let bWiederholung = false
let dauerhaft_1 = false
cb2.beimStart()
basic.forever(function () {
    if (dauerhaft_1 && !(btf.timeout(1000))) {
        cb2.beispielSpurfolger16(
        192,
        50,
        31,
        0,
        bWiederholung,
        true,
        20,
        cb2.eI2C.x21
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
