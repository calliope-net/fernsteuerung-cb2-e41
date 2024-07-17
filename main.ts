input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.set_localProgram(true)
    dauerhaft_Knopf_B = !(dauerhaft_Knopf_B)
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.plus)
})
btf.onReceivedData(function (receivedData) {
    dauerhaft_Beispiel_1 = btf.isBetriebsart(btf.btf_receivedBuffer19(), btf.e0Betriebsart.p1) && (btf.getaktiviert(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc) && btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b1_Servo) == 1)
    if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p0) && btf.getaktiviert(receivedData, btf.e3aktiviert.m0)) {
        cb2.fahreJoystick(receivedData, 40)
    } else if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p2)) {
        cb2.fahreBuffer19(receivedData)
    }
    receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.minus)
})
let bWiederholung = false
let dauerhaft_Beispiel_1 = false
let dauerhaft_Knopf_B = false
cb2.beimStart()
basic.forever(function () {
    if (dauerhaft_Beispiel_1 && !(btf.timeout(1000))) {
        dauerhaft_Knopf_B = false
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
    } else if (dauerhaft_Knopf_B && !(btf.timeout(30000, true))) {
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
