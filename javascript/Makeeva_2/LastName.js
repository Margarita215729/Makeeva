let lastName = prompt("Введите вашу фамилию:");

lastName = lastName.replace(/\s/g, '');

lastName = lastName.toLowerCase();

let reversedLastName = '';

for (let i = lastName.length - 1; i >= 0; i--) {
    reversedLastName += lastName[i];
}

if (lastName === reversedLastName) {
    alert("Ваша фамилия является палиндромом!");
} else {
    alert("Ваша фамилия не является палиндромом.");
}
