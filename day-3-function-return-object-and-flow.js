// tugas 1
/*
buatlah function!
Function ini mengembalikan object:
{
  totalProducts: 5,
  availableProducts: 3,
  expensiveProducts: 2
}

Kriteria:
totalProducts → panjang array
availableProducts → stock > 0
expensiveProducts → price > 10000
*/
function getProductSummary(products) {
    let totalProducts = products.length;
    let availableProducts = 0;
    let expensiveProducts = 0;

    for (let s = 0; s < products.length; s++) {
        if (products[s].stock > 0) {
            availableProducts++;
        }
        if (products[s].price > 10000) {
            expensiveProducts++;
        }
    }

    let objectSummary = {
        totalproducts : totalProducts,
        availableProducts : availableProducts,
        expensiveProducts : expensiveProducts
    };

    return objectSummary;
}

const product = [
    { name: "Pensil", price: 2000, stock: 10 },
    { name: "Buku", price: 12000, stock: 5 },
    { name: "Pulpen", price: 8000, stock: 0 },
    { name: "Penghapus", price: 3000, stock: 20 },
    { name: "Tas", price: 75000, stock: 3 }
]

console.log(getProductSummary(product));

// tugas 2
/*
analisis nilai!

output yang diharapkan adalah object seperti ini:
{
  average: 70,
  highest: 90,
  lowest: 50
}
*/
const score = [80, 60, 90, 70, 50];

function analyzeScores(scores) {
    let total = 0;
    let highest = scores[0];
    let lowest = scores[0];

    for (let s = 0; s < scores.length; s++) {
        total += scores[s];
        if (scores[s] > highest) {
            highest = scores[s];
        }
        if (scores[s] < lowest) {
            lowest = scores[s];
        }
    }
    let average = total / scores.length;
    let result = {
        average : average,
        highest : highest,
        lowest : lowest
    }

    return result;
}

console.log(analyzeScores(score));


// tugas 3
/*
user check!
output yang diharapkan adalah object seperti ini:
{
  totalUsers: 3,
  adultUsers: 2,
  underageUsers: 1
}
*/

const user = [
    { name: "Andi", age: 17 },
    { name: "Budi", age: 21 },
    { name: "Citra", age: 25 }
];

function checkUserStatus(users) {
    let totalUsers = 0;
    let adultUsers = 0;
    let underageUsers = 0;

    for (let u = 0; u < users.length; u++) {
        totalUsers++;
        if (users[u].age > 20) {
            adultUsers++;
        }
        if (users[u].age < 20) {
            underageUsers++;
        }
    }

    let result = {
        totalUsers: totalUsers,
        adultUsers: adultUsers,
        underageUsers: underageUsers
    }

    return result;
}

console.log(checkUserStatus(user));