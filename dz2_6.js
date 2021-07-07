  
function message(name, age) {
    let maturity;
    if (age < 18) {
        maturity = "ребенок";
    }
    else if (age < 31) {
        maturity = "молодой";
    }
    else if (age < 56) {
        maturity = "зрелый";
    }
    else {
        maturity = "старый";
    }
    console.log(name + " имеет возраст " + age + " и он " + maturity);
}

let name = "Иван";
let age = "44";
message(name, age);