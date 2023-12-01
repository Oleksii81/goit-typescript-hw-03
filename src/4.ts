  class Key {
    private key: number;
  
    constructor() {
      this.key = Math.floor(Math.random() * 1000); 
    }
  
    getKey(): number {
      return this.key;
    }
  }
  
  class MyHouse {
    private doorKey: Key;
  
    constructor(key: Key) {
      this.doorKey = key;
    }
  
    openDoor(keyToUse: Key) {
      if (keyToUse.getKey() === this.doorKey.getKey()) {
        console.log('The door is open.');
      } else {
        console.log('You do not have the correct key.');
      }
    }
  
    comeIn(person: Person) {
      console.log(`${person.getName()} has entered the house.`);
    }
  }
  
  class Person {
    private personKey: Key;
    private name: string;
  
    constructor(name: string) {
      this.personKey = new Key(); 
      this.name = name;
    }
  
    getKey(): Key {
      return this.personKey;
    }
  
    getName(): string {
      return this.name;
    }
  }
  
const houseKey = new Key();
const house = new MyHouse(houseKey);
const person = new Person('John');
  
house.openDoor(person.getKey()); 
  
house.comeIn(person); 
  
export {};
  