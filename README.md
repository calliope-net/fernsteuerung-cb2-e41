
> Diese Seite bei [https://calliope-net.github.io/fernsteuerung-cb2-e41/](https://calliope-net.github.io/fernsteuerung-cb2-e41/) öffnen

### Bedienung Calli:bot 2 ohne Fernsteuerung

* nach dem Einschalten wird die Funkgruppe, Version und Batterie Spannung angezeigt

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

### Bedienung Calli:bot 2 mit Fernsteuerung

> Bei Sender und Empfänger muss die selbe Funkgruppe eingestellt sein.

Das Ändern der Funkgruppe funktioniert beim Calli:bot und der Fernsteuerung gleich mit lange Drücken (etwa 4 Sekunden).
Die Funkgruppe wird im Flash gespeichert und beim nächsten Einschalten oder Reset wieder hergestellt. 

* **Funkgruppe 1-8** ist die Anzahl der roten LED in den 2 linken Spalten im Display
  *  **A halten** (-1)
  *  **B halten** (+1)

![](funkgruppe_callibot.png)
![](modell_callibot.png)

Beim Sender kann **nach** der Funkgruppe das Modell geändert werden. Das Modell wird als Bild angezeigt. 
Calli:Bot ist das erste Bild. Das Modell und die Funkgruppe werden beim Einschalten der Fernsteuerung (Sender) angezeigt.
Wird nicht das Calli:bot Bild angezeigt, kann es mit **A geklickt** (kurz drücken) wieder eingestellt werden.

* **A+B geklickt** startet die Bluetooth Funkverbindung. Calli:bot blinkt blau.
* jetzt kann mit dem Joystick ferngesteuert werden *Funktion fahren und lenken*
  * **A geklickt** schaltet Ultraschall Sensor an und aus (gelbe LED links)
  * **B geklickt** schaltet Spur Sensor an und aus (weiße LEDs)
  * **auf den Joystick drücken** hupen (nur wenn Hupe an Calli:Bot angebaut ist)




## Dieses Projekt bearbeiten ![Build status badge](https://github.com/calliope-net/fernsteuerung-cb2-e41/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **calliope-net/fernsteuerung-cb2-e41** ein und klicke auf Importieren

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/calliope-net/fernsteuerung-cb2-e41/raw/master/.github/makecode/blocks.png)

