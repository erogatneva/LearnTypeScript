var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TypeScript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
// ещё один способ задания массива - generic-типы
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TypeScript'];
// Tuple
var contact = ['Name', 123456];
// Any
// Если задать переменную одного типа
//и потом попытаться присвоить ей значение другого типа, получится:
//variable = 'New String' <- не сработает, будет ошибка. Нужно:
var variable = 42;
function sayMyName(name) {
    console.log(name);
}
sayMyName('Name');
// Never
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
