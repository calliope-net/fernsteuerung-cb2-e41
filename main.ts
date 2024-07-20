input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.set_timeoutDisbled(true)
    dauerhaft_Knopf_B = !(dauerhaft_Knopf_B)
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.setFunkgruppeButton(btf.eFunkgruppeButton.plus)
})
btf.onReceivedData(function (receivedData) {
    dauerhaft_Knopf_B = false
    dauerhaft_Beispiel_1 = btf.isBetriebsart(btf.btf_receivedBuffer19(), btf.e0Betriebsart.p1Lokal) && btf.getaktiviert(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc)
    if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p0Fahren) && btf.getaktiviert(receivedData, btf.e3aktiviert.m0)) {
        cb2.fahreJoystick(receivedData, 40)
    } else if (btf.isBetriebsart(receivedData, btf.e0Betriebsart.p2Fahrplan)) {
        cb2.fahreBuffer19(receivedData)
    }
    receiver.rgbLEDs(receiver.eRGBled.a, 0x0000ff, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
    receiver.digitalWritePin(receiver.eDigitalPins.C16, !(btf.getSchalter(receivedData, btf.e0Schalter.b0)))
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
        cb2.beispielSpurfolger16(
        btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.mc, btf.eBufferOffset.b0_Motor),
        btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.md, btf.eBufferOffset.b0_Motor),
        btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.mc, btf.eBufferOffset.b1_Servo),
        btf.getByte(btf.btf_receivedBuffer19(), btf.eBufferPointer.mc, btf.eBufferOffset.b2_Fahrstrecke),
        bWiederholung,
        btf.getSensor(btf.btf_receivedBuffer19(), btf.eBufferPointer.mc, btf.eSensor.b6Abstand),
        btf.getAbstand(btf.btf_receivedBuffer19()),
        cb2.eI2C.x22
        )
        bWiederholung = true
    } else if (dauerhaft_Knopf_B && !(btf.timeout(30000, false))) {
        cb2.beispielSpurfolger16(
        192,
        160,
        31,
        0,
        bWiederholung,
        true,
        20,
        cb2.eI2C.x22
        )
        bWiederholung = true
    } else if (bWiederholung) {
        dauerhaft_Knopf_B = false
        bWiederholung = false
        cb2.writeMotorenStop()
    }
})
loops.everyInterval(700, function () {
    if (btf.timeout(1000)) {
        cb2.writeMotorenStop()
    }
    if (btf.getReceivedBufferError(2000)) {
        receiver.rgbLEDs(receiver.eRGBled.a, 0x00ff00, true)
    } else if (btf.timeout(1000)) {
        receiver.rgbLEDs(receiver.eRGBled.a, 0xff0000, true)
    } else if (btf.timeout(1000, true)) {
        receiver.rgbLEDs(receiver.eRGBled.a, 0xff00ff, false)
    }
})
