const isLeapYear = function (year){
    if (typeof(year) != 'number')
        return alert("please only enter numbers");
    else {
        if (year<0)
            return alert("year's number unacceptable");
        else {
            if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0 )
                return true;
            else {
                if (year%4 ===0 && year%100 != 0)
                    return true;
                else
                    return false;
                }
            }
        }
}

isLeapYear(1997); // false
isLeapYear(1996); // true
isLeapYear(1900); // false
isLeapYear(2000); // true