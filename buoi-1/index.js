// const obj = { foo: 1 };
// // truy xuất tới thuộc tinh
// obj["bar"] = 2;
// console.log(obj["bar"]);

// const str = "Đẹp trai";
// console.log(`Doraemon ${str}`);


// console.log([..."DORAEMON"]);
const obj = {
    name: "MindX"
}
const sayHello = (x) => {
    let { name } = x
    x.name = "khoa"
    name = "Code Intensive"
}
sayHello({ ...obj });
console.log(obj);