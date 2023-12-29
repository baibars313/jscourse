let persons = [
    {
        name: "Asim1",
        Age: 23,
        height: 5.7,
        married: false
    }, {
        name: "Asim2",
        Age: 23,
        height: 5.7,
        married: false
    },
    {
        name: "Asim3",
        Age: 23,
        height: 5.7,
        married: false
    }, {
        name: "Asim4",
        Age: 23,
        height: 5.7,
        married: false
    }





]

let person = {
    name: "Asim",
    Age: 23,
    height: 5.7,
    married: false
}
// person.name
// person.height
// person.Age
// person.married


document.getElementById("name").innerText += person.name
document.getElementById("age").innerText += person.Age
document.getElementById("height").innerText += person.height
document.getElementById("married").innerText += person.married



for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    document.getElementById("person").innerHTML += `
            <p id="name">Name: ${element.name}</p>
            <p id="age">Age: ${element.Age}</p>
            <p id="height">Height: ${element.height}</p>
            <p id="married">Married: ${element.married}</p>
            <hr>
    `
}
