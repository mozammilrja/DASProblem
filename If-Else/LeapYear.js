function cheakLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100)) {
        document.write(year + ' leap year')
    }
    else{
        document.write("not leap year " + year)
    }
}

// take input
const year = prompt('Enter a year:');

cheakLeapYear(year);