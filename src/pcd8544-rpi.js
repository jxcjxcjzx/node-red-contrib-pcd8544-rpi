const lcd = require('pcd8544_rpi');

module.exports = function(RED) {
    function PCD8544RpiNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.on('input', function(msg) {
          this.log("LCD screen received " + msg);
            //msg.payload = msg.payload.toLowerCase();
            //node.send(msg);
          lcd.init();
          lcd.clear();
          lcd.drawstring(0, 0, msg.payload);
          lcd.display();
        });

        this.on('close', function() {
          // nothing to do
        });
    }
    RED.nodes.registerType("pcd8544-rpi", PCD8544RpiNode);
}
