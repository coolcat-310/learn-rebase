const add = x => y => x +y;

async function firstAsync() {
    let x = 4
    let adding = add(x);
    x= 10;
    return adding;
}

firstAsync().then(alert => {

    console.log(alert(5));
});

async function promise1(x) {
    return x;
}

async function parallel() {
    const wait1 = promise1(50);

    const wait2 = promise1(50);

    await wait1;

    await wait2;

    return "done";
}

parallel().then(alert=>{
    console.log(alert);
});