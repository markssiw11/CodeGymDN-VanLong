function Tv() {
    this.volume=0;
    this.channel = null;
    this.status=false
    this.getChanel = function () {
        console.log("this is chanel "+this.channel);
        return this.channel;
    }
    this.getVolume = function () {
        console.log("volume: "+this.volume);
        return this.volume;
    }
    this.turnOn = function () {
        this.status=true;
        console.log("wellcom to Tv");
    }
    this.turnOff = function() {
        this.status =false;
        console.log("..............");
    }
    this.changeChanel = function (channel) {
        this.channel = channel;
    }
    this.decreaseVolume = function () {
        this.volume--;
    }
    this.increaseVolume = function () {
        this.volume++;
    }
}