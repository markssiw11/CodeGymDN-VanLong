function Remote(code) {
    this.changeChanelTv = function(tv,change) {
        tv.changeChanel(change);
    }
    this.decreaseVolumeTv = function(tv) {
        tv.decreaseVolume();
    }
    this.increaseVolumeTv = function(tv) {
        tv.increaseVolume();
    }
    this.turnOffTv= function(tv) {
        tv.turnOff();
    }
    this.turnOnTv = function(tv) {
        tv.turnOn();
    }
}