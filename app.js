customers = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Dave",
    age: 40,
    city: "Los Angeles",
  },
  {
    name: "Mary",
    age: 50,
    city: "Miami",
  },
  {
    name: "Anna",
    age: 30,
    city: "Washington",
  },
];

function getNameCustomers(customerArr) {
  let customersName = [];
  for (let i = 0; i < customerArr.length; i++) {
    customersName.push(customerArr[i].name);
  }
  console.log(customersName);
}
getNameCustomers(customers);

// ====================================================

function sumCustomersAge(customerArr) {
  let sumAgesOfCustomer = 0;
  for (let i = 0; i < customerArr.length; i++) {
    sumAgesOfCustomer += customerArr[i].age;
  }
  console.log(`Sum of ages all customers: ${sumAgesOfCustomer}`);
}
sumCustomersAge(customers);

// or

function getAges(customerArr) {
  let ageArr = [];
  for (let i = 0; i < customerArr.length; i++) {
    ageArr.push(customerArr[i].age);
  }
  let countAgesByReduce = ageArr.reduce(function (previousValue, item) {
    return item + previousValue;
  }, 0);
  console.log(`Count ages by reduce is similar: ${countAgesByReduce}`);
}
getAges(customers);

// ====================================================

function getCityOfCustomerByAge(customerArr) {
  for (let i = 0; i < customerArr.length; i++) {
    if (customerArr[i].name.includes("A")) {
      console.log(
        `Customer age: "${customerArr[i].age}" and city: "${customerArr[i].city}"`
      );
    }
  }
}

getCityOfCustomerByAge(customers);

// ====================================================

function newCustomer(name, age, city) {
  let newCustomer = {
    name,
    age,
    city,
  };
  customers.push(newCustomer);
}
newCustomer("Jack", 18, "California");
console.log(customers);
