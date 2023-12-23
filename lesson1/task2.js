let cooks = new Map();

cooks.set("Victor", "Pizza");
cooks.set("Olga", "Sushi");
cooks.set("Louie", "Desserts");

let orders = new Map();
let alexei = { name: "Alexei" };
let alexeiOrder = new Set();
alexeiOrder.add([
  "'Pepperoni' pizza - cook: Victor",
  " Tiramisu - cook: Louie",
]);

let maria = { name: "Maria" };
let mariaOrder = new Set();
mariaOrder.add([
  "'California' sushi - cook: Olga",
  " 'Margherita' pizza - cook: Victor",
]);

let irina = { name: "Irina" };
let irinaOrder = new Set();
irinaOrder.add(["Cheesecake - cook: Louie"]);

orders.set(alexei, alexeiOrder);
orders.set(maria, mariaOrder);
orders.set(irina, irinaOrder);

for (let [key, value] of cooks) {
  console.log(`${key} specializes in ${value}`);
}

for (let [key, value] of orders) {
  console.log(`Client ${key.name} ordered: ${new Array(...value).join(" ")}`);
}
