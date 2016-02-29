Node-RED PCD8544 Raspberry-Pi
=============================

A node for Node-RED to communicate with the LCD screen PCD8544 for Raspberry Pi.


Hardware
--------

I used the PCD8544 from www.sunfounder.com, designed to be mounted on the GPIO ports of a Raspberry-Pi:

![](/images/pcd8544_mounted.png)

This Node.js module uses the predefined pin layout, and is not configurable for now:

![](/images/pcd8544_layout.png)


Installation
------------

**Install wiringPi driver**

This package makes use of WiringPI-library of Gordon Henderson (https://projects.drogon.net/raspberry-pi/wiringpi/).

``` bash
$ cd /home
$ git clone git://git.drogon.net/wiringPi
$ cd wiringPi
$ sudo ./build
```

**Install the package from the repository**

``` bash
$ sudo npm install -g https://github.com/pevandenburie/node-red-contrib-pcd8544-rpi.git
```


Example using Node-RED
----------------------

Once installed, the new PCD8544 box is available in Node-RED palette:

![](/images/node-red-pcd8544-box.png)

Create a simple flow with an injection box, and a function box:

![](/images/node-red-pcd8544-flow.png)

Configure the function box as follow to fill the 4 lines of text. The lines must be prefixed with "1:", "2:", "3:", "4:", to indicate the corresponding line:

![](/images/node-red-pcd8544-function.png)


Deploy, then press the injection button: the 4 lines must appear on the screen.
