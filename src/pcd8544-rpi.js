const lcd = require('pcd8544_rpi');

module.exports = function(RED) {
    function PCD8544RpiNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        lcd.init();
        lcd.clear();

        this.on('input', function(msg) {
          this.log("LCD screen received " + msg.payload);

          if (msg.payload.startsWith("1:")) {
            lcd.drawstring(0, 0, msg.payload);
          }
          else if (msg.payload.startsWith("2:")) {
            lcd.drawstring(0, 8, msg.payload);
          }
          else if (msg.payload.startsWith("3:")) {
            lcd.drawstring(0, 16, msg.payload);
          }
          else if (msg.payload.startsWith("4:")) {
            lcd.drawstring(0, 24, msg.payload);
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
