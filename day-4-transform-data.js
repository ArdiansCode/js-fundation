let product = [
  { name: "Pensil", price: 2000, stock: 10 },
  { name: "Buku", price: 12000, stock: 5 },
  { name: "Tas", price: 75000, stock: 3 }
];

//tugas 1
/*
ubah data:
output yang diharapkan adalah array seperti ini:
[
  { name: "Pensil", status: "available" },
  { name: "Buku", status: "available" },
  { name: "Tas", status: "available" }
]

Kriteria:
status = "available" jika stock > 0
selain itu "out of stock"
*/
function transformProducts(products) {
    let result = [];
    let status = "";
    
    for (let i = 0;  i < products.length; i++) {
        if (product[i].stock > 0) {
            status = "available";
        }
        else {
            status = "out of stock";
        }
        result.push({name: products[i].name, status: status});
    }

    return result;
}

console.log(transformProducts(product));


// tugas 2
/*
TUGAS:
jumlahkan price * stock
return 1 angka total
*/

function calculateTotalPrice(products) {
    let result_one_product = 0;
    let result_all_product = 0;
    let array_result_one_product = [];
    let array_result_all_product = [];
    let final_result = {
        details: array_result_one_product,
        totalPrice: array_result_all_product
    };

    for (let i = 0; i < products.length; i++) { 
        result_one_product = products[i].price * products[i].stock;
        result_all_product = result_all_product + result_one_product;
        array_result_one_product.push({name: products[i].name, totalPrice: result_one_product});
    }

    array_result_all_product.push({totalPriceAllProduct: result_all_product});
    return final_result;
}

console.log(calculateTotalPrice(product));

// tugas 3
/*
normalize user data!
output yang diharapkan adalah array seperti ini:
[
  { name: "Andi", isAdult: false },
  { name: "Budi", isAdult: true },
  { name: "Citra", isAdult: true }
]
*/
let user = [
  { name: "andi", age: 17 },
  { name: "BUDI", age: 21 },
  { name: "CiTrA", age: 25 }
];

function normalizeUsers(users) {
    let isAdult = null;
    let result = [];

    for (let i= 0; i < users.length; i++) {
        if (users[i].age > 20) {
            isAdult = true;
        } else {
            isAdult = false;
        }
        result.push({name: users[i].name, isAdult: isAdult});
    }

    return result;
}

console.log(normalizeUsers(user));