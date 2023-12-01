let a, b, c, d;
a = 10
b = 20
c = 30
d = 40
var val = 23
if (val >= 18 && val <= 23) {
    console.log("pass", "1")
}
else if (val == 20) {
    console.log(b, "2")
}
else if (val == 30) {
    console.log(c, "3")
}
else {
    console.log(d, "4")

}

// function
// function ageChecker() {
//    var age =document.getElementById("exampleCheck1").value
//    console.log(age,"years")
//    let minAge, maxAge;
//    minAge=16
//    maxAge=30
//    if (age >=minAge && age<=maxAge) {
//     alert("pass")
//    }
//    else{
//    alert("fail")
//    }

// }

function ageChecker() {
    var age = document.getElementById("exampleCheck1").value
    console.log(age, "years")
    var notification = document.getElementById("alert")
    let minAge, maxAge;
    minAge = 16
    maxAge = 30
    if (age >= minAge && age <= maxAge) {

        notification.innerHTML = `
            <div class="alert alert-success" role="alert">
           Passable!
          </div>
      `
    }
    else {
        if (age < minAge) {
            notification.innerHTML = `
            <div class="alert alert-danger" role="alert">
           Under age!
          </div>
      `
        }
        else {
            notification.innerHTML = `
            <div class="alert alert-danger" role="alert">
           Over age!
          </div>
      `
        }
    }

}



