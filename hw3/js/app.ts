/* Домашнее задание: 
Создать класс User у которого будут поля name, age, achivments
Клaссу User добавить следующее методы AddYearOfLife(), AddAchvement(achevemnt);
Создать класс Achivement в котором будут следующие поля type, heroical, description
Поместить данные класс в неймспейс SuperHero

Создать инстансты классов - SpiderMan и IronMan
+ Создать базовые интерфейсы для классов User и Achivement. */

namespace SuperHero{

    export interface AchievementInterface {
        type: string,
        heroical: boolean,
        description: string
    }
    export class Achievement implements AchievementInterface{
        description: string;
        heroical: boolean;
        type: string;

    }
    export interface UserInterface {
        name: string,
        age: number,
        achievements: AchievementInterface[],
        AddYearOfLife(): any,
        AddAchievement(achievement: AchievementInterface):any
    }
    export class User implements UserInterface {
        public name: string;
        public age: number;
        public achievements: AchievementInterface[] = [];

        AddYearOfLife():any {
            this.age;
        }
        AddAchievement(achievement: AchievementInterface):any {
            this.achievements.push(achievement);
        }
    }

}

let achievement1: SuperHero.Achievement = {
    type: "spider",
    heroical: true,
    description:"can climb walls"
}

let achievement2: SuperHero.Achievement = {
    type: "speed",
    heroical: true,
    description:"can move with high speed"
}

let achievement3: SuperHero.Achievement = {
    type: "superPower",
    heroical: true,
    description: "have/has the super power"
}

let achievement4: SuperHero.Achievement = {
    type: "flying",
    heroical: true,
    description: "can fly"
}

let SpiderMan = new SuperHero.User();
SpiderMan.name = "SpiderMan";
SpiderMan.age = 26;
SpiderMan.AddYearOfLife();
SpiderMan.AddAchievement(achievement1);
SpiderMan.AddAchievement(achievement3);
console.log(SpiderMan);

let IronMan = new SuperHero.User();
IronMan.name = "IronMan";
IronMan.age = 33;
IronMan.AddYearOfLife();
IronMan.AddAchievement(achievement2);
IronMan.AddAchievement(achievement3);
IronMan.AddAchievement(achievement4);
console.log(IronMan);