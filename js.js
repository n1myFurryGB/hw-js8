/*
В змейке можно использовать использовать замыкания в проверки еды(Приверка и создание)
*/


if (!("a" in window)) {
    var a = 1;
}

alert(a); // Возращает undefined т.к a не определена




var b = function a(x) {
    x && a(--x);
};
alert(a); // Возращает undefined т.к a не определена


function a(x) {
    return x * 2;
}

var a;

alert(a); // Возращает функцию a в виде строки т.к переменная a не определена, а функция есть


function b(x, y, a) {
    arguments[2] = 10; // тут 3 аргументу присваивается 10
    alert(a);
}

b(1, 2, 3); // Будет 10


function a() {
    alert(this);
}

a.call(null); // Вернет объект window
