function abstand_A_deaktiviert (abstand_Stop: boolean) {
    if (abstand_Knopf_A) {
        btf.reset_timer()
        if (abstand_Stop) {
            if (Math.randomBoolean()) {
                cb2.writeMotor128Servo16(64, randint(1, 9))
            } else {
                cb2.writeMotor128Servo16(64, randint(23, 31))
            }
        } else {
            basic.pause(1000)
            cb2.writeMotor128Servo16(255, 16)
        }
    }
}
input.onButtonEvent(Button.AB, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    btf.set_timeoutDisbled(true)
    abstand_Knopf_A = !(abstand_Knopf_A)
    if (abstand_Knopf_A) {
        cb2.writeMotor128Servo16(192, 16)
    } else {
        cb2.writeMotorenStop()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
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
    abstand_Knopf_A = false
    dauerhaft_Knopf_B = false
    dauerhaft_Spurfolger = cb2.set_dauerhaft_Spurfolger(btf.btf_receivedBuffer19(), btf.e3aktiviert.mc)
    dauerhaft_Ausweichen = cb2.set_AbstandAusweichen(btf.btf_receivedBuffer19(), btf.e3aktiviert.md)
    cb2.fahreJoystick(btf.btf_receivedBuffer19(), 50)
    cb2.fahrplanBuffer5Strecken(btf.btf_receivedBuffer19(), btf.e3aktiviert.m1)
    cb2.fahrplanBuffer2x2Motoren(btf.btf_receivedBuffer19(), btf.e3aktiviert.ma)
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff, true, true)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
    pins.pinDigitalWrite(pins.pins_eDigitalPins(pins.eDigitalPins.C16), !(btf.getSchalter(receivedData, btf.e0Schalter.b0)))
})
cb2.onStopEvent(function (abstand_Stop, cm) {
    cb2.dauerhaft_AbstandAusweichen(dauerhaft_Ausweichen, abstand_Stop, btf.btf_receivedBuffer19())
    cb2.beispielAbstandAusweichen(
    abstand_Knopf_A,
    abstand_Stop,
    255,
    16,
    64,
    cb2.zufallServo16(1, 5, 27, 31),
    cb2.cb2_zehntelsekunden(btf.ePause.s1)
    )
})
function dauerhaft_Knopf_B_Spurfolger () {
    if (dauerhaft_Knopf_B && !(btf.timeout(60000, true))) {
        cb2.beispielSpurfolger16(
        192,
        160,
        31,
        0,
        dauerhaft_Wiederholung,
        true,
        20,
        cb2.eI2C.x22
        )
        dauerhaft_Wiederholung = true
    } else if (dauerhaft_Wiederholung) {
        dauerhaft_Knopf_B = false
        dauerhaft_Wiederholung = false
        cb2.writeMotorenStop()
    }
}
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
let dauerhaft_Wiederholung = false
let dauerhaft_Ausweichen = false
let dauerhaft_Spurfolger = false
let dauerhaft_Knopf_B = false
let abstand_Knopf_A = false
cb2.beimStart()
btf.zeigeBIN(cb2.readVersionArray()[1], btf.ePlot.bin, 2)
btf.zeigeBIN(cb2.readSpannung(), btf.ePlot.bcd, 4)
abstand_Knopf_A = false
basic.forever(function () {
    cb2.dauerhaft_SpurfolgerBuffer(dauerhaft_Spurfolger, btf.btf_receivedBuffer19(), cb2.eI2C.x21)
    cb2.raiseAbstandEvent(abstand_Knopf_A || dauerhaft_Ausweichen, 40, 45)
    dauerhaft_Knopf_B_Spurfolger()
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
