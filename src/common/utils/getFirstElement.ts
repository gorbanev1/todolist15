/*
const getFirstElement = <T>(array: T[]) => {
  return array[0]
}

// Пример 1: Массив чисел
const numbers = [1, 2, 3, 4, 5]
console.log(getFirstElement(numbers)) // 1

// Пример 2: Массив строк
const words = ["hello", "world", "typescript"]
console.log(getFirstElement(words)) // 'hello'

const filterArray = <T>(array: T[], funct: (item:T)=>boolean):T[] => {
  const arr2: T[] =[]
  for (let i = 0; i < array.length; i++) {
    if (funct(array[i]) ) {
      arr2.push(array[i])
    }
  }
  return arr2
}

// Пример 1: Фильтрация чисел
const numbers = [1, 2, 3, 4, 5]
const isEven = (num: number) => num % 2 === 0

console.log(filterArray(numbers, isEven)) // [2, 4]

// Пример 2: Фильтрация строк
const words = ['hello', 'world', 'typescript']
const startsWithT = (word: string) => word.startsWith('t')

console.log(filterArray(words, startsWithT)) // ["typescript"]*/

const mapArray = <T,F>(arr: T[], f:(item:T)=>F)=> {
  const arr2: F[] = []
  for (let i = 0; i < arr.length; i++) {
      arr2[i]=f(arr[i])
  }
  return arr2
}

// Пример 1: Преобразование чисел в строки
const numbers = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`

console.log(mapArray(numbers, transformNumberToString)) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]

// Пример 2: Преобразование строк в их длины
const words = ['hello', 'world', 'typescript']
const getLength = (word: string) => word.length

console.log(mapArray(words, getLength)) // [5, 5, 10]

// Пример 3: Преобразование объектов в строки
type Person = { name: string; age: number }
const people: Person[] = [
  { name: 'Agnes', age: 25 },
  { name: 'Robert', age: 30 },
]
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`

console.log(mapArray(people, toDescription)) // ["Agnes is 25 years old", "Robert is 30 years old"]
