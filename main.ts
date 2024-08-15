input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    abstand_Knopf_A = !(abstand_Knopf_A)
    btf.set_timeoutDisbled(abstand_Knopf_A)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    btf.set_timeoutDisbled(true)
    cb2.fahreStrecke(192, 31, 40)
    cb2.fahreStrecke(64, 31, 40)
    cb2.fahreStrecke(255, 16, 20)
    cb2.fahreStrecke(192, 2, 150)
    cb2.fahreStrecke(192, 30, 150)
    cb2.fahreStrecke(1, 16, 20)
})
cb2.onAbstandEvent(function (abstand_Stop, cm) {
    cb2.buffer_Hindernis_ausweichen(Hindernis_ausweichen, abstand_Stop, btf.btf_receivedBuffer19())
    cb2.event_Hindernis_ausweichen(
    abstand_Knopf_A && !(spur_Knopf_B),
    abstand_Stop,
    255,
    16,
    64,
    0,
    cb2.cb2_zehntelsekunden(btf.ePause.s1)
    )
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    spur_Knopf_B = !(spur_Knopf_B)
    btf.set_timeoutDisbled(spur_Knopf_B)
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
btf.onReceivedDataChanged(function (receivedData, changed) {
    abstand_Knopf_A = false
    spur_Knopf_B = false
    Spur_folgen = cb2.set_Spur_folgen(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc)
    Hindernis_ausweichen = cb2.set_Hindernis_ausweichen(btf.btf_receivedBuffer19(), btf.e3aktiviert.md)
    cb2.fahreJoystick(btf.btf_receivedBuffer19(), 50)
    cb2.fahrplanBuffer5Strecken(btf.btf_receivedBuffer19(), btf.e3aktiviert.m1)
    cb2.fahrplanBuffer2x2Motoren(btf.btf_receivedBuffer19(), btf.e3aktiviert.ma)
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff, true, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
    pins.pinDigitalWrite(pins.pins_eDigitalPins(pins.eDigitalPins.C16), !(btf.getSchalter(receivedData, btf.e0Schalter.b0)))
})
cb2.onSensorEvent(function (links_hell, rechts_hell, abstand_Stop, cm) {
    cb2.buffer_Spur_folgen(Spur_folgen, links_hell, rechts_hell, abstand_Stop, btf.btf_receivedBuffer19())
    cb2.event_Spur_folgen(
    spur_Knopf_B,
    links_hell,
    rechts_hell,
    abstand_Stop,
    192,
    160,
    31,
    0,
    abstand_Knopf_A,
    30
    )
})
function dauerhaft_Knopf_B_Spurfolger () {
    if (spur_Knopf_B) {
        cb2.beispielSpurfolger16(
        192,
        160,
        31,
        0,
        spur_gestartet,
        !(abstand_Knopf_A),
        20,
        cb2.eI2C.x22
        )
        spur_gestartet = true
    } else if (spur_gestartet) {
        spur_Knopf_B = false
        spur_gestartet = false
        cb2.writeMotorenStop()
    }
}
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
let spur_gestartet = false
let Spur_folgen = false
let spur_Knopf_B = false
let Hindernis_ausweichen = false
let abstand_Knopf_A = false
cb2.beimStart()
btf.zeigeBIN(cb2.readVersionArray()[1], btf.ePlot.bin, 2)
btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
abstand_Knopf_A = false
basic.forever(function () {
    cb2.raiseAbstandEvent(abstand_Knopf_A || Hindernis_ausweichen, 40, 45)
    cb2.raiseSpurEvent(spur_Knopf_B || Spur_folgen)
})
loops.everyInterval(700, function () {
    if (btf.timeout(30000, true)) {
        cb2.writeMotorenStop()
        control.reset()
    } else if (btf.timeout(1000)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0xff0000, true, true)
    } else if (btf.timeout(1000, true)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x00ff00)
    }
})
