
> Diese Seite bei [https://calliope-net.github.io/fernsteuerung-cb2-e41/](https://calliope-net.github.io/fernsteuerung-cb2-e41/) öffnen

### Bedienung Calli:bot 2 ohne Fernbedienung

* nach dem Einschalten wird die Funkgruppe, Typ und Batterie Spannung angezeigt
* Funkgruppe 1; Typ 4 (Calli:bot 2 ohne Encoder); 3,8 Volt

![](png/f1_cb2a_v38.png)

* nur wenn B aus ist: **A geklickt**
  * schaltet *Hindernis ausweichen* an und aus (Ultraschall Sensor)
  * Calli:bot fährt geradeaus und lenkt vor einem Hindernis rückwärts
* nur wenn A aus ist: **B geklickt**
  * schaltet *Spur folgen* an und aus (2 Spur Sensoren)
  * fährt bis zu einer schwarzen Linie (etwa 2 cm breit) dann auf der Linie
  * mit A kann Ultraschall Sensor dazu geschaltet werden (gelbe LED)
  * hält dann auf der Line bei Hindernis an (wenn mehrere Calli:bot fahren)
* **A+B geklickt** fährt 6 Strecken
  * Ultraschall Sensor aktiv, bei Hindernis Abbruch und nächste Strecke
  * Strecken können mit Blöcken selbst geändert werden
  1. nach rechts fahren und lenken
  2. selbe Strecke zurück
  3. geradeaus
  4. Kreis nach links
  5. Kreis nach rechts
  6. gerade zurück

### Bedienung Calli:bot 2 mit Fernbedienung

> Bei Sender und Empfänger muss die selbe Funkgruppe eingestellt sein.

Das Ändern der Funkgruppe funktioniert beim Calli:bot und der Fernbedienung gleich mit lange Drücken (etwa 4 Sekunden).
Die Funkgruppe wird im Flash gespeichert und beim nächsten Einschalten oder Reset wieder hergestellt. 

* **Funkgruppe 1-8** ist die Anzahl der roten LED in den 2 linken Spalten im Display
  *  **A halten** (-1)
  *  **B halten** (+1)

![](png/f1.png) ![](png/f2.png) ![](png/f3.png) ![](png/f4.png) ![](png/f5.png) ![](png/f6.png) ![](png/f7.png) ![](png/f8.png)

Beim Sender kann **nach** der Funkgruppe das Modell geändert werden, welches mit der Fernbedienung gesteuert werden soll.
Das Modell wird als Bild angezeigt. 

![](png/m_callibot.png) ![](png/m_sensoren.png) ![](png/m_gabelstapler.png) ![](png/m_kran.png) ![](png/m_car4.png)

Calli:Bot ist das erste Bild. Das Modell und die Funkgruppe werden beim Einschalten der Fernbedienung (Sender) angezeigt.
Wird nicht das Calli:bot Bild angezeigt, kann es mit **A geklickt** (kurz drücken) wieder eingestellt werden.

> Sind mehrere Fernbedienungen im Einsatz, reagiert ein Calli:bot immer nur auf die Fernbedienung, die zuerst da war.
> (Von der das erste Bluetooth Datenpaket empfangen wurde.)

* **A+B geklickt** startet die Bluetooth Funkverbindung. Calli:Bot blinkt blau.
* jetzt kann mit dem Joystick ferngesteuert werden *Funktion Fahren und lenken*
  * **A geklickt** schaltet Ultraschall Sensor an und aus (gelbe LED links)
  * **B geklickt** schaltet Spur Sensor an und aus (weiße LEDs)
  * **auf den Joystick drücken** hupen (nur wenn Hupe an Calli:Bot angebaut ist)

* **A+B geklickt** schaltet auf die nächste *Funktion Programm fenstarten*
  * **A geklickt** schaltet *Hindernis ausweichen* an und aus
  * **B geklickt** schaltet *Spur folgen* an und aus
  * funktioniert wie oben beschrieben, nur mit der Fernbedienung
  * laufendes Programm kann jederzeit mit der Fernbedienung unterbrochen werden
  * so kann Calli:Bot befreit werden, wenn er stecken geblieben ist, ohne ihn anzufassen

* **A+B geklickt** schaltet auf die nächste *Fahren Strecke*
  * **A geklickt** fährt 5 Strecken wie oben ohne 2. Kreis
    * mit Fernsteuerung können nur 5 Strecken zusammen übertragen werden
  * **B geklickt** fährt geradeaus und viertel Drehung 8 mal hintereinander
    * mit drehen auf der Stelle soll ein Quadrat zweimal gefahren werden
    * drehen nach Zeit ist ungenau und von der Batterie Spannung abhängig
    * genauer geht das mit Encoder, der 450 Impulse pro Rad Umdrehung zählt
  * *Fahren Strecke* kann nicht mit der Fernbedienung unterbrochen werden (LED grün)
  * Strecken können mit Blöcken selbst geändert werden (beim Sender)

* **A+B geklickt** schaltet zurück auf *Funktion Fahren und lenken*
  * dabei wird zur Kontrolle kurz das Modell Bild angezeigt
  * jetzt kann wieder mit dem Joystick ferngesteuert werden

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

