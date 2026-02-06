let product = [
  { name: "Pensil", price: 2000, stock: 10 },
  { name: "Buku", price: 12000, stock: 5 },
  { name: "Tas", price: 75000, stock: 3 }
];

// SOAL 1 — TRANSFORM PRODUCTS (MAP)
/*
output yang diharapkan adalah array seperti ini:
[
  { name: "Pensil", status: "available" },
  { name: "Buku", status: "available" },
  { name: "Tas", status: "available" }
]
*/
function transformProducts(products) {
    let result = products.map(item => {
        if (item.stock > 0) {
           return {name: item.name, status: "available"};
        } else {
           return {name: item.name, status: "out of stock"};
        }
    })
    return result;
}

console.log(transformProducts(product));

// SOAL 2 — TOTAL PRICE (REDUCE)
function calculateTotalPrice(products) {
    let result = products.reduce((x, y) => {
      let total_one_product = y.price * y.stock;
      let total_all_product = x + total_one_product;
      return total_all_product;
    }, 0);
    
    return result;
}

console.log(calculateTotalPrice(product));

// tugas 3 — FILTER ADULT USERS
/*
Output:
["Budi", "Citra"]
*/
let user = [
    { name: "andi", age: 17 },
    { name: "BUDI", age: 21 },
    { name: "CiTrA", age: 25 }
];

function getAdultUsers(users) {
    let result = users.filter(item => item.age > 20).map(item => {
        if (item.age > 20) {
        let result_name = item.name.toLowerCase();
        return result_name.charAt(0).toUpperCase() + result_name.slice(1);
        }
    })
    
    return result;
}

console.log(getAdultUsers(user));