input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    btf.set_timeoutDisbled(true)
    cb2.fahreStrecke(192, 31, 40)
    cb2.fahreStrecke(64, 31, 40)
    cb2.fahreStrecke(255, 16, 20)
    cb2.fahreStrecke(192, 1, 150)
    cb2.fahreStrecke(1, 16, 20)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    btf.set_timeoutDisbled(true)
    dauerhaft_Knopf_B = !(dauerhaft_Knopf_B)
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
btf.onReceivedDataChanged(function (receivedData, changed) {
    dauerhaft_Knopf_B = false
    dauerhaft_Spurfolger = cb2.set_dauerhaft_Spurfolger(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc)
    cb2.fahreJoystick(btf.btf_receivedBuffer19(), 50)
    cb2.fahrplanBuffer5Strecken(btf.btf_receivedBuffer19(), btf.e3aktiviert.m1)
    cb2.fahrplanBuffer2x2Motoren(btf.btf_receivedBuffer19(), btf.e3aktiviert.ma)
    receiver.setLedColors(receiver.eRGBled.a, 0x0000ff, true, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
    receiver.digitalWritePin(receiver.eDigitalPins.C16, !(btf.getSchalter(receivedData, btf.e0Schalter.b0)))
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
let bWiederholung = false
let dauerhaft_Spurfolger = false
let dauerhaft_Knopf_B = false
cb2.beimStart()
btf.zeigeBIN(cb2.readVersionArray()[1], btf.ePlot.bin, 2)
btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
basic.forever(function () {
    if (dauerhaft_Spurfolger && !(btf.timeout(1000))) {
        cb2.spurfolgerBuffer(btf.btf_receivedBuffer19(), bWiederholung, cb2.eI2C.x21)
        bWiederholung = true
    } else if (dauerhaft_Knopf_B && !(btf.timeout(30000, true))) {
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
    if (btf.timeout(1000)) {
        receiver.setLedColors(receiver.eRGBled.a, 0xff0000, true, true)
    } else if (btf.timeout(1000, true)) {
        receiver.setLedColors(receiver.eRGBled.a, 0x00ff00, true)
    }
})
