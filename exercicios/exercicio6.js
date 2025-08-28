function HaUmParEntreNos(x, y, z) {
  if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
    return true;
  }
  return false;
}

console.log(HaUmParEntreNos(2, 7, 9));
console.log(HaUmParEntreNos(3, 7, 9));
console.log(HaUmParEntreNos(2, 8, 12));
console.log(HaUmParEntreNos(37, 13, 15));
