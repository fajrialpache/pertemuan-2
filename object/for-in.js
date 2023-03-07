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
 * looping object menggunkan looping
 * mengakses nilai menggunakan cara braket
 */
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
