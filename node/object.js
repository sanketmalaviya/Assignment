

const student = {
    name: "sanket",
    email: "sanket@gmail.com",
    phoneNo: 9807654321
}

const stjson = JSON.stringify(student)

const ori = JSON.parse(stjson)
console.log(student);
console.log(stjson);
console.log(ori);

