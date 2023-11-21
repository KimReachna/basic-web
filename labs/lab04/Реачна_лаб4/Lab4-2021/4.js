function ex8(){
    var number = window.prompt("Введите число")
    let strNumber = String(number);
    if (strNumber[0] == 1 || strNumber[0] == 2 || strNumber[0] == 3) {
        alert('Да');
    } else {
        alert('Нет');
    }
    document.getElementById('ans8').innerHTML = 'Ответ:' + strNumber
    console.log(strNumber)
}

function ex21(length,width){
    var number_of_square = 0, reminder = 0;
    if(length < width){
        let temp = length;
        length = width;
        width = temp;
    }
    while(width > 0){
        number_of_square += parseInt(length / width);
        let reminder = length % width;
        length = width;
        width = reminder;
    }
    return number_of_square;
}

function ex9() {
    var arr = new Array(new Array("Один", "Два", "Три"), new Array("Четыре", "Пять", "Шесть"))
    var res = arr.splice('')
    alert(res);
    document.getElementById('ans9').innerHTML = 'Ответ:' + res
}

function insertAt(array, index, element){
    array.splice(index, 0, element);
    console.log('Array after insertion ' + element + ' is ' + array);
}
function ex16() {
    var num = [1, 2, 3, 4];
    console.log('Initial array '+ num);
    insertAt(num, 2, 9);
}


function ex1(num) {
    //const num = 11
    const thePrime = (num) => {
        let sqrtnum = Math.floor(Math.sqrt(num));
        let prime = num !== 1;
        for (let i = 2; i < sqrtnum + 1; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            };
        };
        return prime;
    }
    const nextPrime = (num = 1) => {
        while (!thePrime(++num)) {
        };
        return num;
    };
    return nextPrime(num);
}

function ex11(num) {
    if (num % 2 === 0 || num < 3 || !Number.isSafeInteger(num)) {
        return num === 2;
    } else {
        const sqrt = Math.floor(Math.sqrt(num));
        for (let i = 3; i <= sqrt; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
}
