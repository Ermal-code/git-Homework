/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const myInfo = {
    name: "Ermal",
    surname: "Asllani",
    email: "ermal.aa@live.com",
    age: 26,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

myInfo.drivingLicense = true;

/* EXERCISE 4
Remove from the previously created object the age
*/

delete myInfo.age;

console.log(myInfo);
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const myInfo2 = {
    name: "Lum",
    surname: "Asllani",
    email: 22,
}

console.log("Different email adress:", myInfo.email !== myInfo2.email);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalShoppingCart = 60;

shippingCost = (totalShoppingCart > 50 ? 0 : 10);

let totalCost = totalShoppingCart + shippingCost;

console.log("Total Cost:", totalCost);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

const blackFriday = 0.2;

let totalShopping = totalCost * (1 - blackFriday);

console.log("Total Shopping Cost with discount:", totalShopping);

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const car = {
    brand: "Audi",
    model: "A6",
    licensePlate: "01-222-AA",
}
console.log(car);

const car1 = {};
Object.assign(car1, car);
car1.licensePlate = "01-222-AB";
console.log(car1);

const car2 = {};
Object.assign(car2, car);
car2.licensePlate = "01-222-AC";
console.log(car2);

const car3 = {};
Object.assign(car3, car);
car3.licensePlate = "01-222-AD";
console.log(car1);

const car4 = {};
Object.assign(car4, car);
car4.licensePlate = "01-222-AE";
console.log(car4);

// I know this probably wasn't the way to do the exercise but I wanted to try it so I will leave it here. I hope it's not a problem :D! 

const cars = [];
for (i = 0; i < 5; i++) {
    cars[i] = {
        brand: "Audi",
        model: "A6",
        licensePlate: "01-222-AA",
    }

}
cars[1].licensePlate = "01-222-AB";
cars[2].licensePlate = "01-222-AC";
cars[3].licensePlate = "01-222-AD";
cars[4].licensePlate = "01-222-AE";
console.log(cars)

///////////////////////////////////////////////////////////////////////////



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = [car, car1, car2, car3, car4];

// I will leave this here also !!!

/*const carsForRent = [];
Object.assign(carsForRent, cars)
console.log(carsForRent);*/

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.splice(0, 1);


/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log("Datatype:", typeof carsForRent[2].brand);
console.log("Datatype:", typeof carsForRent[2].model);
console.log("Datatype:", typeof carsForRent[2].licensePlate);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

const carsForSale = [];

Object.assign(carsForSale, carsForRent);

carsForSale.totalCars = carsForRent.length + carsForSale.length;

console.log(carsForSale);
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for (i = 0; i < carsForSale.length; i++) {

    console.log("carsForSale", [i], carsForSale[i]);
}

// Same thing different method 

for (let el of carsForSale) {
    console.log("carsForSale", el)
}
/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT
*/


