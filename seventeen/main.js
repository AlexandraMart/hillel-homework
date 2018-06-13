//напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:

var characters = [
{ 'name': 'barney', 'age': 36 },
{ 'name': 'fred', 'age': 40 }
];

function pluck(characters, name){
    var newArr = [];
    var resArr = characters.forEach(function(item){
     for(var key in item){
        if(key == name){
            newArr.push(item[key]);
        }
    }
});

    return newArr;

}

console.log(pluck(characters, 'name'));


//напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.
var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; }

function filterArr(arr, funcCall){
  return arr.filter(funcCall);
}
console.log(filterArr(input, isEven));

//Напиши функцию count(), считающую число свойств в объекте. Функция должна хранится в прототипе всех обьеков

var obj = {
    name: "Vasya",
    age: "18",
    d1 : {
        f: "s",
        f2: "v"
    },
    name2: "Vasya",
    age2: "18",
    d2 : {
        f1: "s",
        f12: "v",
        f13: "b"
    }
}


Object.prototype.count = function(){
    var counter = 0;
    for(var key in this){
        if(this.hasOwnProperty(key)){
            counter++;
        }
    }

    return counter;
}

console.log(obj.count());