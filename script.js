//!Don#t reapet yourselfe
//Todo пишим функцию которая записивает строки в файл
//? How is it working
function power(value, p) {
  console.log(value ** p);
}
power(12, 2);
power(13, 3);
power(5, 4);
//! функция выводит в консоль -> console.log
//!функция возвращает значение -> return


//! найти гипотенузу по сторонам прямоугольного триугольника

//! a^2 + b^2 = c^2
function power(value, p) {
  return value ** p;
}
const a = 4;
const b = 3;

const a_sq = power(a, 2);
const b_sq = power(b, 2);

const hyp = power(a_sq + b_sq, 0.5);
console.log(hyp);


// !создать функцию check, которая получает в качестве аргумента
// !число и возвращает true если оно положительное и false если отрицательное

function check(number) {
  if(number> 0)
    return true 
  else{ return false} 
}
console.log(check(12));
console.log(check(-12));


//! то же можно сделать с помощью statement-ов
function check(number) {
  return number > 0 ? true : false
}
console.log(check(12));
console.log((check(-12)));


function check(number) {
  return number > 0 
}
console.log(check(12));
console.log((check(-12)));


//! написать функцию если первий аргумент фунции больше 
function compage(x,y) {
  return x > y ? x : y
}
console.log(compage(23, 56));

console.log(compage(-56, 23));


//! написать функцию, start и end аргументами, 
//! вивести в консоль массив значний-> start -> end-1


function range(start, end) {
    const arr = [];
    for (let i = start; i < end; i++){
      arr.push(i);
    }
    return arr
}
console.log(range(23, 56));

// !на основе массива words используя метод map 
//!сформируйте массив из длин слов
// ![9, 6, 7, 4, 6]
const words = ['велосипед', 'ролики', 'самокат', 'лыжи', 'коньки'];

result = words.map(function (item) {
  console.log(item);
  return item.length
});
console.log(result);

//!вывести в консоль числа, котоыре меньше 20
const numbers = [12, 5, 32, 6, 4, 7, 43, 12];
/*
function returnNumber(numbers) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < 20) {
      return newArr.push(numbers[i])
    }
  }
}

console.log(returnNumber);
*/
numbers.forEach(function (item) {
  if (item < 20) {
    console.log(item);
  }
});

//!
/*const result = numbers.filter(function (el) {
  if(el<20){
  return
  }
})*/

console.log(...numbers.filter(el => el > 20));
//!/вывести в консоль числа, котоыре меньше 20
// !сформирйте новый массив на основе numbers где все отрицательные числа
//! изменены на положительные -5 -> 5
const numbers1 = [12, 5, -32, 6, -4, 7, -43, 12];

const result1=numbers1.map(function (item){
  if (item < 0) {
    return item *-1;
  } else {
    return item
  }
    
})
console.log(result1)

//!

const result2 = numbers1.map(item => item < 0 ? -item : item);
console.log(result2)

//!сформировать массив из значений value

const numbers2 = [
  {id: 1, value: 52},
  {id: 2, value: 42},
  {id: 3, value: 32},
  {id: 4, value: 22},
  {id: 5, value: 12},
];

const result3 = numbers2.map( el=> {
  return el.value;
});

console.log(result3);
//!


const result4 = numbers2.map( el=> el.value);

console.log(result4);

//!


















