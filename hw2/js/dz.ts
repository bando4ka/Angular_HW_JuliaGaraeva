interface Converter{
    toSystem(): void;
    fromSystem(): void;
}

//будет имплементироваться 3 классами
class ToBinary implements Converter{
    num: any;

    constructor(num:number){
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

class ToHexal implements Converter{
    num: any;

    constructor(num:number){
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

class ToHexidecimal{
    num: any;

    constructor(num:number){
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

const numDecToBin: ToBinary = new ToBinary(10);
const numBinary = numDecToBin.toSystem();
console.log(numBinary);
const numBin: ToBinary = new ToBinary(numBinary)
const numDecFromBin = numBin.fromSystem();
console.log(numDecFromBin);

const numDecToHex: ToHexal = new ToHexal(12);
const numHexal = numDecToHex.toSystem();
console.log(numHexal);
const numHex: ToHexal = new ToHexal(numHexal)
const numDecFromHexal = numHex.fromSystem();
console.log(numDecFromHexal);

const numDecToHexDec: ToHexidecimal = new ToHexidecimal(25);
const numHexDecimal = numDecToHexDec.toSystem();
console.log(numHexDecimal);
const numHexDec: ToHexidecimal = new ToHexidecimal(numHexDecimal)
const numDecFromHexDec = numHexDec.fromSystem();
console.log(numDecFromHexDec);