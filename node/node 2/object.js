

const student = {
    name: "sanket",
    email: "sanket@gmail.com",
    phoneNo: 9807654321
}

// convert into object to json
const stjson = JSON.stringify(student)

// convert into json to object
const ori = JSON.parse(stjson)


console.log(student);
console.log(stjson);
console.log(ori);

