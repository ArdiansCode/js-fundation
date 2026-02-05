// tugas 1
/*
tampilkan nama produk yang  memiliki harga lebih dari 10000 dan stok lebih dari 0
*/
function getAvailableExpensiveProducts(products) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 10000 && products[i].stock > 0) {
            result.push(products[i].name)
        }
    }
    return result;
} 

const product = [
    { name: "Pensil", price: 2000, stock: 10 },
    { name: "Buku", price: 12000, stock: 5 },
    { name: "Pulpen", price: 8000, stock: 0 },
    { name: "Penghapus", price: 3000, stock: 20 },
    { name: "Tas", price: 75000, stock: 3 }
]

console.log(getAvailableExpensiveProducts(product));



// tugas 2
/*
cari angka ganjil di array tersebut, lalu jumlahkan angka ganjil tersebut
*/
function sumOddNumbers(numbers) {
    const result = [];
    let end_result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 1) {
            result.push(numbers[i]);
        }
    }

    for (let r = 0; r < result.length; r++) {
        end_result += result[r];
    }

    return end_result;
}

const number = [1, 4, 7, 10, 13, 18];
console.log(sumOddNumbers(number));


// tugas 3
/*
tampilkan nama user yang berumur lebih dari 20 tahun
*/
function getAdultUsers(users) {
    let result = [];
    for (let u = 0; u < users.length; u++) {
        if (users[u].age > 20)  {
            result.push(users[u].name);
        }
    }
    return result;
}
const user = [
    { name: "Andi", age: 17 },
    { name: "Budi", age: 21 },
    { name: "Citra", age: 25 }
];

console.log(getAdultUsers(user));