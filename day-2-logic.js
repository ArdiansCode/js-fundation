// tugas 1
/*
tampilkan nama produk yang  memiliki harga lebih dari 10000 dan stok lebih dari 0
*/
const product = [
    { name: "Pensil", price: 2000, stock: 10 },
    { name: "Buku", price: 12000, stock: 5 },
    { name: "Pulpen", price: 8000, stock: 0 },
    { name: "Penghapus", price: 3000, stock: 20 },
    { name: "Tas", price: 75000, stock: 3 }
]

for (let i = 0; i < product.length; i++) {
    if (product[i].price > 10000 && product[i].stock > 0) {
        console.log(product[i]. name);
    }
}


// tugas 2
/*
cari angka ganjil di array tersebut, lalu jumlahkan angka ganjil tersebut
*/
const numbers = [1, 4, 7, 10, 13, 18];
const result = [];
let end_result = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 1) {
        result.push(numbers[i]++);
    }
}

for (let r = 0; r < result.length; r++) {
    end_result += result[r];
    console.log(end_result);
}


// tugas 3
/*
tampilkan nama user yang berumur lebih dari 20 tahun
*/
const users = [
  { name: "Andi", age: 17 },
  { name: "Budi", age: 21 },
  { name: "Citra", age: 25 }
];

for (let u = 0; u < users.length; u++) {
    if (users[u].age > 20)  {
        console.log(users[u].name);
    }
}