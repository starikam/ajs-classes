export default class Character {
  #types = [
    'Bowerman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie',
  ];

  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Неверная длинна имени. Имя должно быть от 2 до 10 символов.');
    }

    if (this.#types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Неверный тип персонажа. Тип может быть только: ${this.#types.split(',')}`);
    }

    this.health = 100;
    this.level = 1;
  }
}
