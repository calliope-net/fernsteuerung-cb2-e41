input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (receiver.isFunktion(receiver.eFunktion.ng)) {
        Stop = 40
        receiver.setFunktion(receiver.eFunktion.hindernis_ausweichen)
    } else if (receiver.isFunktion(receiver.eFunktion.hindernis_ausweichen)) {
        receiver.setFunktion(receiver.eFunktion.ng)
    } else if (receiver.isFunktion(receiver.eFunktion.spur_folgen)) {
        Ultraschall_Sensor_Knopf_A = !(Ultraschall_Sensor_Knopf_A)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (receiver.isFunktion(receiver.eFunktion.ng) && cb2.writeEncoderReset()) {
        Ultraschall_Sensor_Knopf_A = false
        receiver.setFunktion(receiver.eFunktion.fahrplan)
        for (let Index = 0; Index <= 3; Index++) {
            cb2.fahre2MotorenEncoder(
            240,
            240,
            30,
            30,
            false
            )
            cb2.fahre2MotorenEncoder(
            160,
            96,
            198,
            198,
            true
            )
        }
        receiver.setFunktion(receiver.eFunktion.ng)
    } else if (receiver.isFunktion(receiver.eFunktion.ng) || receiver.isFunktion(receiver.eFunktion.hindernis_ausweichen)) {
        Ultraschall_Sensor_Knopf_A = receiver.isFunktion(receiver.eFunktion.hindernis_ausweichen)
        receiver.setFunktion(receiver.eFunktion.fahrplan)
        cb2.fahreStrecke(192, 31, 40, Ultraschall_Sensor_Knopf_A)
        cb2.fahreStrecke(64, 31, 40, false)
        cb2.fahreStrecke(255, 16, 20, Ultraschall_Sensor_Knopf_A)
        cb2.fahreStrecke(192, 2, 150, Ultraschall_Sensor_Knopf_A)
        cb2.fahreStrecke(192, 30, 150, Ultraschall_Sensor_Knopf_A)
        cb2.fahreStrecke(1, 16, 20, false)
        receiver.setFunktion(receiver.eFunktion.ng)
    }
})
cb2.onAbstandEvent(function (abstand_Sensor, abstand_Stop, cm) {
    cb2.buffer_Hindernis_ausweichen(btf.btf_receivedBuffer19(), abstand_Stop)
    cb2.event_Hindernis_ausweichen(
    receiver.isFunktion(receiver.eFunktion.hindernis_ausweichen),
    abstand_Stop,
    255,
    16,
    64,
    0,
    cb2.cb2_zehntelsekunden(btf.ePause.s1)
    )
    if (abstand_Stop) {
        cb2.writecb2RgbLed(cb2.eRgbLed.lh, 0xff0000, true)
    } else {
        cb2.writecb2RgbLed(cb2.eRgbLed.lh, 0xffff00, abstand_Sensor)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (receiver.isFunktion(receiver.eFunktion.ng)) {
        Stop = 20
        Ultraschall_Sensor_Knopf_A = true
        receiver.setFunktion(receiver.eFunktion.spur_folgen)
    } else if (receiver.isFunktion(receiver.eFunktion.spur_folgen)) {
        Ultraschall_Sensor_Knopf_A = false
        receiver.setFunktion(receiver.eFunktion.ng)
    }
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
btf.onReceivedDataChanged(function (receivedData, changed) {
    if (changed) {
        cb2.writeMotorenStop()
        cb2.writecb2RgbLeds(0x000000, false)
    }
    receiver.setFunktion(receiver.eFunktion.ng, receiver.eTimeoutDisable.nicht)
    Ultraschall_Sensor_Knopf_A = false
    cb2.fahreJoystick(btf.btf_receivedBuffer19(), 50)
    cb2.fahrplanBuffer5Strecken(btf.btf_receivedBuffer19(), btf.e3aktiviert.m1)
    cb2.fahrplanBuffer2x2Motoren(btf.btf_receivedBuffer19(), btf.e3aktiviert.ma)
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff, true, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
    pins.pinDigitalWrite(pins.pins_eDigitalPins(pins.eDigitalPins.C16), !(btf.getSchalter(receivedData, btf.e0Schalter.b0)))
})
function Konfiguration () {
    btf.comment(btf.btf_text("GitHub: calliope-net/fernsteuerung-cb2-e41"))
    btf.comment(btf.btf_text("Erweiterung: calliope-net/fernsteuerung"))
    btf.comment(btf.btf_text(",\"yotta\":{\"config\":{\"microbit-dal\":{\"bluetooth\":{\"pairing_mode\":0,\"partial_flashing\":0}}}}"))
}
cb2.onSpurEvent(function (links_hell, rechts_hell, abstand_Stop) {
    cb2.buffer_Spur_folgen(btf.btf_receivedBuffer19(), links_hell, rechts_hell, abstand_Stop)
    cb2.event_Spur_folgen(
    receiver.isFunktion(receiver.eFunktion.spur_folgen),
    links_hell,
    rechts_hell,
    192,
    160,
    31,
    0,
    abstand_Stop,
    randint(5, 50)
    )
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
let Ultraschall_Sensor_Knopf_A = false
let Stop = 0
cb2.beimStart()
btf.zeigeBIN(cb2.readVersionArray()[1], btf.ePlot.bin, 2)
btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
basic.forever(function () {
    cb2.buffer_raiseAbstandEvent(btf.btf_receivedBuffer19())
    cb2.buffer_raiseSpurEvent(btf.btf_receivedBuffer19())
    cb2.raiseAbstandEvent(receiver.isFunktion(receiver.eFunktion.hindernis_ausweichen) || Ultraschall_Sensor_Knopf_A, Stop, Stop + 5)
    cb2.raiseSpurEvent(receiver.isFunktion(receiver.eFunktion.spur_folgen))
})
loops.everyInterval(700, function () {
    if (btf.timeout(30000, true)) {
        cb2.writeMotorenStop()
        control.reset()
    } else if (btf.timeout(1000)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0xff0000, true, true)
        cb2.writeMotorenStop()
        cb2.writecb2RgbLeds(0x000000, false)
    } else if (btf.timeout(1000, true)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x00ff00)
    }
})
