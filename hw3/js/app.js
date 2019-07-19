/* Домашнее задание: 
Создать класс User у которого будут поля name, age, achivments
Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
Создать класс Achivement в котором будут следующие поля type, heroical, description
Поместить данные класс в неймспейс SuperHero

Создать инстансты классов - SpiderMan и IronMan
+ Создать базовые интерфейсы для классов User и Achivement. */

let SuperHero;
(function (SuperHero) {
let User = (function(){
    function User(){
        this.achievements = [];
    };
    User.prototype.AddYearOfLife = function(age) {
        this.age = age;
    };
    User.prototype.AddAchievement = function(achievement) {
        this.achievements.push(achievement)
};
    return User;
}());
SuperHero.User = User;

let Achievement = (function (){
    function Achievement(){
    };
    return Achievement;
}());
SuperHero.Achievement = Achievement;
})(SuperHero || (SuperHero = {}));

let achievement1 = {
    type: "spider",
    heroical: true,
    description:"can climb walls"
}

let achievement2 = {
    type: "speed",
    heroical: true,
    description:"can move with high speed"
}

let achievement3 = {
    type: "superPower",
    heroical: true,
    description: "have/has the super power"
}

let achievement4 = {
    type: "flying",
    heroical: true,
    description: "can fly"
}

let SpiderMan = new SuperHero.User(26);
SpiderMan.name = "SpiderMan";
SpiderMan.age = 26;
SpiderMan.AddYearOfLife(SpiderMan.age);
SpiderMan.AddAchievement(achievement1);
SpiderMan.AddAchievement(achievement3);
console.log(SpiderMan);

let IronMan = new SuperHero.User(33);
IronMan.name = "IronMan";
IronMan.age = 33;
IronMan.AddYearOfLife(IronMan.age);
IronMan.AddAchievement(achievement2);
IronMan.AddAchievement(achievement3);
IronMan.AddAchievement(achievement4);
console.log(IronMan);