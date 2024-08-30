
> Diese Seite bei [https://calliope-net.github.io/fernsteuerung-cb2-e41/](https://calliope-net.github.io/fernsteuerung-cb2-e41/) öffnen.

### Bedienung Calli:bot 2 ohne Fernbedienung

* nach dem Einschalten wird die Funkgruppe, Typ und Batterie Spannung angezeigt
* Beispiel 1: Funkgruppe 1; Typ 4 (Calli:bot 2 ohne Encoder); 3,8 Volt
* Beispiel 2: Funkgruppe 3; Typ 3 (Calli:bot 2 E mit Encoder); 4,5 Volt

![](png/f1_cb2a_v38.png) ![](png/f3_cb2e_v45.png)

* nur wenn B aus ist: **A geklickt**
  * schaltet *Hindernis ausweichen* an und aus (Ultraschall Sensor)
  * Calli:bot fährt geradeaus und lenkt vor einem Hindernis rückwärts
* nur wenn A aus ist: **B geklickt**
  * schaltet *Spur folgen* an und aus (2 Spur Sensoren)
  * fährt bis zu einer schwarzen Linie (etwa 2 cm breit) dann auf der Linie
  * mit A kann Ultraschall Sensor dazu geschaltet werden (gelbe LED)
  * hält dann auf der Line bei Hindernis an (wenn mehrere Calli:bot fahren)
* **A+B geklickt**
  * fährt 6 Strecken (mit Encoder zentimetergenau)
  * wenn A und B aus war: Ultraschall Sensor nicht aktiv
  * wenn *Hindernis ausweichen* gestartet war: Ultraschall Sensor aktiv
    * bei Hindernis: Abbruch und weiter mit der nächsten Strecke
  * endet, wenn alle Strecken gefahren sind; kann nur mit Reset unterbrochen werden
  * Strecken können mit Blöcken selbst programmiert werden
  * die Länge wird mit Encoder in cm und ohne Encoder in Zehntelsekunden angegeben
  1. nach rechts fahren und lenken
  2. die selbe Strecke zurück
  3. geradeaus
  4. Kreis nach links
  5. Kreis nach rechts
  6. gerade zurück
* **RGB-LED** (Calliope)
  * rot blinken: keine Bluetooth Verbindung
  * grün: lokales Programm gestartet mit **A geklickt**, **B geklickt**, **A+B geklickt**
  * blau blinken: Fernbedienung mit gleicher Funkgruppe verbunden
* **Timeout**
  * rot blinken: nach 30 Sekunden *zurücksetzen*
  * grün: nach 30 Sekunden ohne Sensor-Ereignis *zurücksetzen*
  * blau blinken: kein Timeout (Calli:bot ist ferngesteuert)
  * aus schalten per Software wird beim Calli:bot nicht unterstützt
  * *zurücksetzen* kann auch von der Fernbedienung gesendet werden

> Timeout sorgt dafür, dass Calli:bot stehen bleibt wenn beim fernsteuern die Bluetooth Verbindung unterbrochen ist
> oder wenn er beim alleine fahren stecken bleibt.

### Bedienung Calli:bot 2 mit Fernbedienung

> Bei Sender und Empfänger muss die selbe Funkgruppe eingestellt sein.

Das Ändern der Funkgruppe funktioniert beim Calli:bot und der Fernbedienung gleich. **Knopf A** oder **Knopf B** muss so lange gedrückt werden, 
bis sich die Anzeige ändert (etwa 4 Sekunden). Ändern der Funkgruppe ist in jedem Zustand möglich.

* **Funkgruppe 1-8** ist die Anzahl der roten LED in den 2 linken Spalten im Display
  *  **A halten** (-1)
  *  **B halten** (+1)

![](png/f1.png) ![](png/f2.png) ![](png/f3.png) ![](png/f4.png) ![](png/f5.png) ![](png/f6.png) ![](png/f7.png) ![](png/f8.png)

Beim Sender kann **nach** der Funkgruppe das Modell geändert werden, welches mit der Fernbedienung gesteuert werden soll.
Das Modell wird als Bild angezeigt. 

![](png/m_callibot.png) ![](png/m_sensoren.png) ![](png/m_gabelstapler.png) ![](png/m_kran.png) ![](png/m_car4.png)

Calli:Bot ist das erste Bild. Das Modell und die Funkgruppe werden beim Einschalten der Fernbedienung (Sender) aus dem Flash wieder hergestellt und angezeigt.
Wird nicht das Calli:bot Bild angezeigt, kann es mit **A geklickt** (kurz drücken) wieder eingestellt werden.

> Sind mehrere Fernbedienungen im Einsatz, reagiert ein Calli:bot immer nur auf die Fernbedienung, die zuerst da war.
> (Von der das erste Bluetooth Datenpaket empfangen wurde.) Nach Reset wird neu entschieden.

#### 00 Fahren und Lenken (eine Fernbedienung mit Joystick - ein Modell)

![](png/b00.png) 

In der Betriebsart *Fahren und Lenken* ist immer eine Fernbedienung mit Joystick erforderlich und eine aktive Bluetooth Funkverbindung.

* **A+B geklickt** startet die Bluetooth Funkverbindung; RGB-LED blinkt blau
  * während der Verbindung zeigen Sender und Empfänger die gleichen Daten an
  * in Joystick Ruhestellung leuchten rechts oben 2 LED (Binärzahl 16)[1]
  * dieser Binär-Wert wird vorwärts größer[2] und rückwärts kleiner[3]
  * beim Lenken wird der Wert rechts größer[4] und links kleiner[5]

1![1](png/f1m0jj.png) 2![2](png/j255j.png) 3![3](png/j1j.png) 4![4](png/jj31.png) 5![5](png/jj1.png)

* jetzt kann mit dem Joystick ferngesteuert werden *Fahren und Lenken*
  * **A geklickt** schaltet Ultraschall Sensor an und aus (gelbe LED links)
    * fährt bei Hindernis (rot) nicht mehr vorwärts; muss rückwärts fahren
  * **B geklickt** schaltet Spur Sensor an und aus (weiße LEDs)
    * bleibt auf einer schwarzen Linie stehen; aus schalten mit **B geklickt**
    * hier kann aber auch auf die Funktion *Spur folgen* umgeschaltet werden
  * **auf den Joystick drücken** hupen (nur wenn Hupe an Calli:Bot angebaut ist)

#### 10 Programm fernstarten (eine Fernbedienung - mehrere verschiedene Modelle)

![](png/b10.png) 

* **A+B geklickt** schaltet auf *Programm fernstarten*

In der Betriebsart *Programm fernstarten* wird der Joystick nicht benutzt. Es ist aber sinnvoll das Modell vorher mit *Fahren und Lenken* an die
Position zu fahren, wo das Programm gestartet werden soll. 

Die Programme *Hindernis ausweichen* oder *Spur folgen* werden mit der Fernbedienung auf dem verbundenen Calli:bot gestartet und laufen dann dauerhaft weiter,
bis sie wieder mit der Fernbedienung beendet werden.

Die Fernbedienung kann die Funkgruppe ändern und den nächsten Call:bot (oder ein anderes Modell) fernsteuern.
Währenddessen fahren die gestarteten Modelle allein weiter (leuchten grün). Die Funkgruppe kann jederzeit auf ein Modell zurück geschaltet werden.
Den Zustand jedes Modells hat sich die Fernbedienung gemerkt, so dass dieses weiter fährt, blau blinkt und mit den Tasten gesteuert werden kann.

> Um ein stecken gebliebenes Modell mit dem Joystick zu fahren, kann jederzeit auf *Fahren und Lenken* umgeschaltet werden. Mehrere Modelle,
> nicht nur Calli:bot, können - ohne sie anzufassen - mit einer einzigen Fernbedinung gesteuert werden.

* nur wenn B aus ist: **A geklickt**
  * schaltet Programm *Hindernis ausweichen* an und aus (Ultraschall Sensor)
  * Calli:bot fährt geradeaus und lenkt vor einem Hindernis rückwärts
* nur wenn A aus ist: **B geklickt**
  * schaltet Programm *Spur folgen* an und aus (2 Spur Sensoren)
  * fährt bis zu einer schwarzen Linie (etwa 2 cm breit) dann auf der Linie
  * mit A kann Ultraschall Sensor dazu geschaltet werden (gelbe LED)
  * hält dann auf der Line bei Hindernis an (wenn mehrere Calli:bot fahren)

#### 20 Strecke senden

![](png/b20.png) 

* **A+B geklickt** schaltet auf *Strecke senden*
  * **A geklickt** fährt 5 Strecken wie oben ohne 2. Kreis
    * mit Fernsteuerung können nur 5 Strecken zusammen übertragen werden
  * **B geklickt** fährt geradeaus und viertel Drehung 8 mal hintereinander
    * mit drehen auf der Stelle soll ein Quadrat zweimal gefahren werden
    * drehen nach Zeit ist ungenau und von der Batterie Spannung abhängig
    * genauer geht das mit Encoder, der 450 Impulse pro Rad Umdrehung zählt
  * *Fahren Strecke* kann nicht mit der Fernbedienung unterbrochen werden (LED grün)
  * Strecken können mit Blöcken selbst geändert werden (beim Sender)

#### 00 Fahren und Lenken

![](png/b00.png) 

* **A+B geklickt** schaltet zurück auf *Fahren und lenken*
  * dabei wird zur Kontrolle kurz das Modell Bild angezeigt
  * jetzt kann wieder mit dem Joystick ferngesteuert werden

#### Reset zum Modell senden

* **A+B halten** sendet Reset zum Calli:bot und seinem Calliope
  * die Fernsteuerung ist wieder bei der Auswahl des Modells (Bilder)


## Dieses Projekt bearbeiten ![Build status badge](https://github.com/calliope-net/fernsteuerung-cb2-e41/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **calliope-net/fernsteuerung-cb2-e41** ein und klicke auf Importieren

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/calliope-net/fernsteuerung-cb2-e41/raw/master/.github/makecode/blocks.png)

