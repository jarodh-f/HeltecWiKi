---
sidebar_position: 4
title: Frequently Asked Questions
---
# WiFi LoRa 32 Frequently Asked Questions


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/styles.module.css';
import DocCard from '@theme/DocCard';

This page contains the most frequently questions from user. If this page's detail can't solve your problem, you can also discuss our forum: [community.heltec.cn](http://community.heltec.cn/)

## Can't Download Firmware

- Use a better USB cable, or change a USB socket.
- Check and make sure the CP210x drive had been correctly installed, users can refer to this document: [Establish Serial Connection](https://heltec-automation-docs.readthedocs.io/en/latest/general/establish_serial_connection.html).
- Press "PRG" button before upload.

## Orange LED Blink Problem

Annoying orange LED lights are always flashing? It's because the battery management chip MCP73831. with the following control logic:

- Blink -- Power on
- Light -- Charging
- Turn OFF -- Battery filled

Change this capacitor to 220nF to temporarily correct this problem.

![](img/frequently_asked_questions/replcae.png)

We had use the TP4054 to replace MCP73831, the orange LED have new control logic:

- Dim -- Power on
- Light -- Charging
- Turn OFF -- Battery filled

## Another Communication Bus Usage Example

- **[SPI0 / SPI1 / SPI2 / SPI3](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/tree/master/esp32/libraries/SPI/examples/SPI_Multiple_Buses)**
- **[I2C0 / I2C1](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/I2C1_Scanner/I2C1_Scanner.ino)**
- **[UART0 / UART1](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/Serial2/Serial2.ino)**

## Heltec v3 Keeps Rebootingh

![](img/frequently_asked_questions/resetallthetime.png)

According to the situation we have collected so far, the most likely to cause a constant reset problem may have three reasons:

- Insufficient Power Supply Current The board may reboot intermittently if the connected USB power source cannot deliver adequate current. Ensure your power supply provides at least 600 mA of stable 5V DC output.
- Wi-Fi spring Antenna Damaged or Compressed by Enclosure Recommend removing the enclosure and testing the board in open air. If using a case, verify that no part of the plastic or metal structure presses against or covers the antenna area (typically near the ESP32 module edge).

![](img/frequently_asked_questions/v3.png)

- Incorrect or Incompatible Firmware Flashed to LoRa 32 V3 Please flash firmware compiled or verified for LoRa 32 V3. Double-check board selection in your IDE. If unsure, reflash the official factory demo or the latest stable firmware from the manufacturer’s GitHub repository.

## About WiFi LoRa 32(V2) Sleep Current Test

Use the battery to power the development board, and connect an ammeter to the positive pole of the battery. Download this [Example Code](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/Low_Power/Low_Power.ino)

This video is the test effect:[Test Video](https://v.youku.com/v_show/id_XNDI2NTE1NTQ3Ng==.html?spm=a2h3j.8428770.3416059.1)

## Node to node communication

On the premise of no hardware problem, LoRa nodes can communicate with each other node-to-node. The key to success node-to-node communication need make sure the following 7 points the same:

1.  The same sending and listening frequency: `LoRa.setFrequency(frequency)`.
2.  The same bandwidth: `LoRa.setSignalBandwidth(signalBandwidth)`.
3.  The same coding rate: `LoRa.setCodingRate4(codingRateDenominator)`.
4.  The same preamble length: `LoRa.setPreambleLength(preambleLength)`.
5.  The same sync word: `LoRa.setSyncWord(syncWord)`.
6.  The status of `LORA_IQ_INVERSION` is the same.
7.  the same `SPREADING FACTOR`.

Know more information about LoRa node-to-node communication, please refer to LoRa basic library APIs: `https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/src/lora/API.md`.

## Vext control

The `Vext` is a power source for external devices. Refer from the schematic diagram, It's controlled by GPIO21:

`GPIO 21 --> LOW --> Vext(3.3V/250mA) ON`

`GPIO 21 --> HIGH --> Vext(3.3V/250mA) OFF`

![](img/frequently_asked_questions/03.png)
