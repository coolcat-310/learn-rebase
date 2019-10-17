let o = {
    set value(val) {
        this.anotherValue = val;
    }
};

o.value = 5;

console.log(o.anotherValue);

let p = {};

Object.defineProperty(p, 'value', {
   set: function (val) {
       this.anotherValue = val;
   }
});

p.value = 5;
console.log(p.value); //undefined
console.log(p.anotherValue); //5

Object.defineProperty(p, 'valueArr', {
   set: function (val) {
       this.grades = val;
   }
});

p.valueArr = [1, 2, 3];
console.log(p.valueArr);
console.log(p.grades);