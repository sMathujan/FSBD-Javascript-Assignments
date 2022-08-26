// 1. Write a program to find whether a given year is a leap year or not.

function is_leapyear(in_year) {
    if (in_year%4 === 0) {
        console.log('Leap Year')
    }
    else {
        console.log('Not a Leap Year')
    }
}

is_leapyear(2020)

// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function Celsius_to_fahrenheit(temp_cel) {
    f = ((9 * temp_cel) + 160) / 5
    console.log(f)
}
Celsius_to_fahrenheit(60)

function Fahrenheit_to_celsius(temp_fah) {
    c = ((5 * temp_fah) - 160) / 9
    console.log(c)
}
Fahrenheit_to_celsius(45)

// 3. Write a program to find the factorial of a number.

function factorial(n) {
    if (n == 0 || n == 1) {
        console.log(1)
    }
    else {
        let a = 1
        for(i = 1; i <= n; i++) {
            a = a*i
        }
        r = a
        console.log(r)
    }
}

factorial(4)