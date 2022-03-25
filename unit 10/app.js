function askName() {
    var name = prompt("Enter your name:")
    return name
}

alert (askName ())       //invoke

function greeting(a) { //paramertr
    alert(`welcome back, ${a}.`)
}

greeting(askName()) // argument 

var a = "building"

function somethingElse() {
    alert(a)
}

function something() {
    alert(a)
    var a = "house"
}

function temperature() {
    var temperature = prompt("what is the temperature")
    alert(`The temperature is 20C ${temperature}.`) 
} 

var someMath = -32 *5 /9 

