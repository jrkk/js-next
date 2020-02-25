'use strict';

// next generation javascript prototype

class Birds {
    name = '';
    legs = 2;
    wings = 2;
    getInfo = () => {
        console.log(this);
    }
}

class Hen extends Birds {
    init = () => {
        this.name = 'hen';
        return this;
    }
}

const hen = new Hen();
hen.init().getInfo();