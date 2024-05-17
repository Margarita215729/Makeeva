
let user = {
  name: "Джон",
  age: 30,

  sayHi() {
    alert(this.name);
  }
};

user.sayHi(); 

let customer = {
  name: "Алексей",
  age: 45,
  email: "alexey@example.com",
  phone: "+1234567890",
  address: "ул. Ленина, д. 5, кв. 10",
  membership: "Gold"
};

console.log(customer.name);    
console.log(customer.age);     
console.log(customer.email);  

let users = [
  { id: 1, name: "Иван", age: 25 },
  { id: 2, name: "Мария", age: 32 },
  { id: 3, name: "Петр", age: 28 }
];

let orders = [
  { id: 1, userId: 1, item: "Пицца", price: 500 },
  { id: 2, userId: 2, item: "Суши", price: 700 },
  { id: 3, userId: 3, item: "Бургер", price: 300 }
];

let restaurants = [
  { id: 1, name: "Итальянский дворик" },
  { id: 2, name: "Японская кухня" },
  { id: 3, name: "Бургерная" }
];

console.log(users[0]);         
console.log(orders[1]);        
console.log(restaurants[2]); 

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user1 = new User("Вася");

alert(user1.name); 
alert(user1.isAdmin); 

function Student(name) {
  this.name = name;

  this.sayHi = function() {
    alert("Меня зовут: " + this.name);
  };
}

let studentList = [
  "Искандар", "Дарья", "Иван", "Арман", "Алиса", 
  "Дмитрий", "Илья", "Ольга", "Аркадий", "Сергей", 
  "Маргарита", "Алексей", "Михаил", "Анастасия", 
  "Александр", "Азамат", "Никита", "Александр", 
  "Надежда", "Юлия", "Кирилл", "Дарья", "Марина", 
  "Амир", "Георгий"
];

let students = studentList.map(name => new Student(name));

students[0].sayHi(); 
