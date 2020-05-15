const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
// ещё один способ задания массива - generic-типы
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: string[] = ['Hello', 'TypeScript']

// Tuple
const contact: [string, number] = ['Name', 123456]

// Any
// Если задать переменную одного типа
//и потом попытаться присвоить ей значение другого типа, получится:
//variable = 'New String' <- не сработает, будет ошибка. Нужно:
let variable: any = 42

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Name')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

// Type - alias`ы позволяют создавать
// собственные типы данных на основе примитивных типов данных
type Login = string
const login: Login = 'admin'
type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined
