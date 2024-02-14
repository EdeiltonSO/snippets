// https://www.arduino.cc/reference/en/libraries/irremote/

#include <IRremote.hpp>

const int RECEIVER_PIN = 7;
IRrecv irrecv(RECEIVER_PIN);

void setup() {
    Serial.begin(9600);
    irrecv.enableIRIn();
    irrecv.blink13(true);
}

void loop() {
    if (irrecv.decode()){
        Serial.println(irrecv.decodedIRData.command, BIN);
        irrecv.resume();
    }
}