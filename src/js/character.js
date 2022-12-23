export class Character {
  static types = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type, health = 100, level = 1, attack = undefined, defence = undefined) {
    if (!name || name.length < 2 || name.length > 10) {
      throw new Error('Incorrect name');
    }

    if (!Character.types.includes(type)) {
      throw new Error('Incorrect type');
    }

    this.name = name;
    this.type = type;

    this.health = health;
    this.level = level;

    this.attack = attack;
    this.defence = defence;
  }
}
