/* =========== Making Method =========== */

/* ---------------------- toCapital() ---------------------- */

// capital -> Capital
// String'ni 1-harfini bosh harfga o'tkazib beruvchi metod:
String.prototype.toCapital = function () {
  return this.replace(this[0], this[0].toUpperCase())
}
// ? Not Working ?
// String.prototype.toCapital = () => this.replace(this[0], this[0].toUpperCase())

// console.log('capital'.toCapital()


/* ---------------------- toWaveCase() ---------------------- */

// HELLO world -> hElLo wOrLd
// String'ni juft harflarini katta, toq harflarini kichik harflarga o'tkazib beruvchi metod:
String.prototype.toWaveCase = function () {
  const str = [...this]
  const res = []
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0)
      res.push(str[i].toLowerCase())
    else
      res.push(str[i].toUpperCase())
  }

  return res
}
// ? Not Working ?
// function toWaveCase(s) {
//   const str = [...s]
//   str.map(i => i % 2 !== 0 ? str[i].toLowerCase() : str[i].toUpperCase())

//   return str
// }

// console.log(toWaveCase('sALOm dUnYO'))
// console.log(toWaveCase('HELLO world'))


/* ---------------------- sumAll() ---------------------- */

// Arrayni elementlarini bir-biriga + - * / beruvchi metod:
__proto__.sumAll = function (...arg) {
  const character = arg[1]
  const numbers = arg[0].concat(arg[2])
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    switch (character) {
      case '+':
        sum += numbers[i]
        break
      case '-':
        sum -= numbers[i]
        break
      case '*':
        sum = (sum + 1) * numbers[i]
        break
      case '/':
        sum = (sum + 1) / numbers[i]
        break
    }
  }

  return sum
}

// console.log( sumAll([1,2,3,], '+', [4,5,6]) )
// todo: [[1,2,3,], '+', [4,5,6]].sulAll() - Array.prototype.sumAll


/* ---------------------- multiplyTo() ---------------------- */

// Arrayni elementlarini berilgan son darajasiga oshirib beruvchi metod:
Array.prototype.multiplyTo = function (num) {
  const nums = [...this]
  const res = []

    nums.forEach(n => {
    res.push(n *= num)
  })

  return res
}

// console.log( [1,2,3,4].multiplyTo(3) )


/* ---------------------- powerTo() ---------------------- */

// Arrayni elementlarini berilgan son darajasiga oshirib beruvchi metod:
Array.prototype.powerTo = function (num) {
  const nums = [...this]
  const res = []

    nums.forEach(n => {
    res.push(Math.pow(n, num))
  })

  return res
}

// console.log( [1,2,3,4].powerTo(3) )