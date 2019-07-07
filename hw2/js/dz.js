class ToBinary{
    // let num;

    constructor(num){
        this.num = num;
    }

    toSystem(){
        //dec - > binary (в бинарное число)
        return this.num.toString(2);
        }


    fromSystem(){
        //string Binary -> dec (в десятичное)
        return parseInt(this.num, 2);
    }
}

class ToHexal {
    // num: any;

    constructor(num){
        this.num = num;
    }

    toSystem(){
        //decimal - > hex (в восьмиричное)
        return  this.num.toString(8);
    }

    fromSystem(){
        //hex -> decimal
        return parseInt(this.num, 8);
    }
}

class ToHexidecimal {

    constructor(num){
        this.num = num;
    }

    toSystem(){
        //decimal - > hexdec (в 16-ричное)
        return this.num.toString(16);
    }

    fromSystem(){
        //hexdec -> decimal
        return parseInt(this.num, 16);
    }
}

const numDecToBin = new ToBinary(10);
const numBinary = numDecToBin.toSystem();
console.log(numBinary);
const numBin = new ToBinary(numBinary)
const numDecFromBin = numBin.fromSystem();
console.log(numDecFromBin);

const numDecToHex = new ToHexal(12);
const numHexal = numDecToHex.toSystem();
console.log(numHexal);
const numHex = new ToHexal(numHexal)
const numDecFromHexal = numHex.fromSystem();
console.log(numDecFromHexal);

const numDecToHexDec = new ToHexidecimal(25);
const numHexDecimal = numDecToHexDec.toSystem();
console.log(numHexDecimal);
const numHexDec = new ToHexidecimal(numHexDecimal)
const numDecFromHexDec = numHexDec.fromSystem();
console.log(numDecFromHexDec);