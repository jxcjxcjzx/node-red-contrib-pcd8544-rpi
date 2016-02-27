const lcd = require('pcd8544_rpi');

module.exports = function(RED) {
    function PCD8544RpiNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        lcd.init();
        lcd.clear();

        this.on('input', function(msg) {
          this.log("LCD screen received " + msg.payload);

          if ("1:" == msg.payload.substr(0, 2)) {
            lcd.drawstring(0, 0, msg.payload.substr(2));
          }
          else if ("2:" == msg.payload.substr(0, 2)) {
            lcd.drawstring(0, 8, msg.payload.substr(2));
          }
          else if ("3:" == msg.payload.substr(0, 2)) {
            lcd.drawstring(0, 16, msg.payload.substr(2));
          }
          else if ("4:" == msg.payload.substr(0, 2)) {
            lcd.drawstring(0, 24, msg.payload.substr(2));
          }
          else {
            lcd.drawstring(0, 0, msg.payload);
          }
          lcd.display();
        });

        this.on('close', function() {
          // nothing to do
        });
    }
    RED.nodes.registerType("pcd8544-rpi", PCD8544RpiNode);
}
