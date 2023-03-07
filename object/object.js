/**
 * membuat object menggunakan {}
 * menyimpan nilai dengan format key : value
 */
const user = {
  name: "Muhamad Al Fajri",
  age: 20,
  major: "Teknik Informatika",
};

/**
 * mengakses nilai object menggunakan key
 * cara akses-bisa menggunakan dot atau braket
 */
console.log(`Nama ${user.name} Umur ${user["age"]} jurusan ${user.major}`);
console.log(user.name, user["age"]);
