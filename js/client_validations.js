function validDate(dateField) {
    var ds = dateField.value;
    var fmt = "6";

    var n = 10;
    var today = new Date();
    var err = 0;
    var month = "";
    var d;
    var m;
    var y;
    var p1 = 0;
    var p2 = 0;
    var dd = 0;
    var mm = 0;
    var yy = (today.getYear() < 1900) ? today.getYear() + 1900 : today.getYear();

    var e = "Invalid date! Please re-enter using MM/DD/YYYY format.";

    if (ds == "") {
        alert(e);
        dateField.select();
        dateField.focus();
        return false;
    }

    while (ds.charAt(0) == " ") {
        ds = ds.substring(1, ds.length);
        dateField.value = ds;
    }
    while (ds.charAt(ds.length - 1) == " ") {
        ds = ds.substring(0, ds.length - 1);
        dateField.value = ds;
    }

    if (ds == "t" || ds == "today" || ds == "0") {
        dd = today.getDate();
        mm = today.getMonth() + 1;
        ds = mm + "/" + dd + "/" + yy;
    } else if (ds.length < 3 && isNum(ds)) {
        if (parseInt(ds) < 32) {
            dd = ds;
            mm = today.getMonth() + 1;
            ds = mm + "/" + dd + "/" + yy;
        }
    } else if (ds.length == 3 && monthToNum(ds) > 0) {
        dd = 1;
        mm = monthToNum(ds);
        ds = mm + "/" + dd + "/" + yy;
    } else if (ds.length == 4 && isNum(ds)) {
        if (parseInt(ds) > 1231) {
            dd = 1;
            mm = 1;
            yy = ds;
            ds = mm + "/" + dd + "/" + yy;
        } else {
            dd = ds.substring(2);
            mm = ds.substring(0, 2);
            ds = mm + "/" + dd + "/" + yy;
        }
    } else if (ds.length > 4 && ds.length < 7 && monthToNum(ds.substring(0, 3)) > 0 && ds.indexOf(" ", 0) > 0) {
        p1 = ds.indexOf(" ");
        dd = ds.substring(p1 + 1, ds.length);
        mm = monthToNum(ds.substring(0, 3));
        ds = mm + "/" + dd + "/" + yy;
    } else if (ds.length > 2 && ds.length < 6 && ds.indexOf("/", 0) > 0 && ds.indexOf("/", 0) == ds.lastIndexOf("/")) {
        p1 = ds.indexOf("/");
        mm = ds.substring(0, p1);
        dd = ds.substring(p1 + 1, p1 + 3);
        if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
        if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
        ds = mm + "/" + dd + "/" + yy;
    } else if (ds.length > 2 && ds.length < 6 && ds.indexOf(" ", 0) > 0 && ds.indexOf(" ", 0) == ds.lastIndexOf(" ")) {
        p1 = ds.indexOf(" ");
        mm = ds.substring(0, p1);
        dd = ds.substring(p1 + 1, p1 + 3);
        if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
        if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
        ds = mm + "/" + dd + "/" + yy;
    } else if (ds.length > 2 && ds.length < 6 && ds.indexOf("-", 0) > 0 && ds.indexOf("-", 0) == ds.lastIndexOf("-")) {
        p1 = ds.indexOf("-");
        dd = ds.substring(0, p1);
        mm = ds.substring(p1 + 1, ds.length);
        if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
        if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
        ds = mm + "/" + dd + "/" + yy;
    }

    if (ds.indexOf("-", 0) > 0 && ds.indexOf("-", 0) < 3) {
        if (ds.length == 11 && ds.indexOf("-", 0) == 2 && ds.lastIndexOf("-") == 6) {
            dd = ds.substring(0, 2);
            mm = monthToNum(ds.substring(3, 6));
            yy = ds.substring(7, 11);
            if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
            if (isNum(mm + dd + yy)) {
                ds = mm + "/" + dd + "/" + yy;
            } else {
                mm = 0;
                dd = 0;
                yy = 0;
            }
        } else if (ds.length == 9 && ds.indexOf("-", 0) == 2 && ds.lastIndexOf("-") == 6) {
            dd = ds.substring(0, 2);
            mm = monthToNum(ds.substring(3, 6));
            yy = (parseInt(ds.substring(7, 9)) < n) ? ("20" + ds.substring(7, 9)) : ("19" + ds.substring(7, 9));
            if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
            if (isNum(mm + dd + yy)) {
                ds = mm + "/" + dd + "/" + yy;
            } else {
                mm = 0;
                dd = 0;
                yy = 0;
            }
        } else {
            p1 = ds.indexOf("-");
            dd = ds.substring(0, p1);
            p2 = ds.lastIndexOf("-"); 
            mm = ds.substring(p1 + 1, p2);
            yy = ds.substring(p2 + 1, ds.length);
            if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
            if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
            if (yy.length > 4) yy = yy.substring(0, 4);
            if (dd == 0 || mm == 0) {
                mm = 0;
                dd = 0;
                yy = 0;
            } else {
                if (yy == "0" || yy == "00" || yy == "000") yy = "2000";
                while (yy.substring(0, 1) == "0") {
                    yy = yy.substring(1, yy.length); 
                }
                if (yy == "") yy = (today.getYear() < 1900) ? today.getYear() + 1900 : today.getYear();
                if (isNum(mm + dd + yy)) {
                    if (yy > 0 && yy < 100) {
                        yy = (yy < n) ? (2000 + parseInt(yy)) : (1900 + parseInt(yy));
                    }
                    ds = mm + "/" + dd + "/" + yy;
                } else {
                    mm = 0;
                    dd = 0;
                    yy = 0;
                }
            }
        }
    }

    else if (ds.length == 6 && isNum(ds)) {
        dd = ds.substring(2, 4);
        mm = ds.substring(0, 2);
        yy = ds.substring(4, 6);
        if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
        if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
        if (yy.charAt(0) == "0") yy = yy.substring(1, 2);
        if (yy == "0" || yy == "00") yy = "2000";
        if (yy > 0 && yy < 100) {
            yy = (yy < n) ? (2000 + parseInt(yy)) : (1900 + parseInt(yy));
        }
        ds = mm + "/" + dd + "/" + yy;
    }

    else if (ds.length == 8 && isNum(ds)) {
        dd = ds.substring(2, 4);
        mm = ds.substring(0, 2);
        yy = ds.substring(4, 8);
        if (yy == "0" || yy == "00" || yy == "000") yy = "2000";
        if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
        if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
        ds = mm + "/" + dd + "/" + yy;
    }

    else if (ds.indexOf("/", 0) > 0 && (ds.length - ds.lastIndexOf("/")) < 6) {
        p1 = ds.indexOf("/"); 
        mm = ds.substring(0, p1);
        p2 = ds.lastIndexOf("/"); 
        dd = ds.substring(p1 + 1, p2);
        yy = ds.substring(p2 + 1, ds.length);
        if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
        if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
        if (yy.length > 4) yy = yy.substring(0, 4);
        if (yy == "0" || yy == "00" || yy == "000") yy = "2000";
        while (yy.substring(0, 1) == "0") {
            yy = yy.substring(1, yy.length); 
        }
        if (yy == "") yy = (today.getYear() < 1900) ? today.getYear() + 1900 : today.getYear();
        if (isNum(mm + dd + yy)) {
            if (yy > 0 && yy < 100) {
                yy = (yy < n) ? (2000 + parseInt(yy)) : (1900 + parseInt(yy));
            }
            ds = mm + "/" + dd + "/" + yy;
        } else {
            mm = 0;
            dd = 0;
            yy = 0;
        }
    }

    else if (ds.indexOf(".", 0) > 0 && (ds.length - ds.lastIndexOf(".")) < 6) {
        p1 = ds.indexOf("."); 
        mm = ds.substring(0, p1);
        p2 = ds.lastIndexOf("."); 
        dd = ds.substring(p1 + 1, p2);
        yy = ds.substring(p2 + 1, ds.length);
        if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
        if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
        if (yy.length > 4) yy = yy.substring(0, 4);
        if (yy == "0" || yy == "00" || yy == "000") yy = "2000";
        while (yy.substring(0, 1) == "0") {
            yy = yy.substring(1, yy.length); 
        }
        if (yy == "") yy = (today.getYear() < 1900) ? today.getYear() + 1900 : today.getYear();
        if (isNum(mm + dd + yy)) {
            if (yy > 0 && yy < 100) {
                yy = (yy < n) ? (2000 + parseInt(yy)) : (1900 + parseInt(yy));
            }
            ds = mm + "/" + dd + "/" + yy;
        } else {
            mm = 0;
            dd = 0;
            yy = 0;
        }
    }

    else if (ds.indexOf(" ", 0) > 0 && (ds.length - ds.lastIndexOf(" ")) < 6) {
        if (ds.indexOf(",", 0) > 0) {
            p1 = ds.indexOf(" "); 
            mm = monthToNum(ds.substring(0, 3));
            dd = ds.substring(p1 + 1, ds.indexOf(",", 0));
            p2 = ds.lastIndexOf(" "); 
            yy = ds.substring(p2 + 1, ds.length);
            if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
            if (yy.length > 4) yy = yy.substring(0, 4);
            if (yy == "0" || yy == "00" || yy == "000") yy = "2000";
            while (yy.substring(0, 1) == "0") {
                yy = yy.substring(1, yy.length); 
            }
            if (yy == "") yy = (today.getYear() < 1900) ? today.getYear() + 1900 : today.getYear();
            if (isNum(mm + dd + yy)) {
                if (yy > 0 && yy < 100) {
                    yy = (yy < n) ? (2000 + parseInt(yy)) : (1900 + parseInt(yy));
                }
                ds = mm + "/" + dd + "/" + yy;
            } else {
                mm = 0;
                dd = 0;
                yy = 0;
            }
        } else if (monthToNum(ds.substring(ds.indexOf(" ") + 1, ds.indexOf(" ") + 4)) > 0) {
            // validate 'dd mmm[...] yy[yy]' type formats
            p1 = ds.indexOf(" "); // position of first space
            dd = ds.substring(0, p1);
            if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
            p2 = ds.lastIndexOf(" "); // position of last space
            mm = monthToNum(ds.substring(p1 + 1, p1 + 4)); // extract 3 bytes for month
            yy = ds.substring(p2 + 1, ds.length);
            if (yy.length > 4) yy = yy.substring(0, 4);
            if (yy == "0" || yy == "00" || yy == "000") yy = "2000";
            while (yy.substring(0, 1) == "0") {
                yy = yy.substring(1, yy.length); // remove leading zeroes
            }
            if (yy == "") yy = (today.getYear() < 1900) ? today.getYear() + 1900 : today.getYear();
            if (isNum(mm + dd + yy)) {
                if (yy > 0 && yy < 100) {
                    yy = (yy < n) ? (2000 + parseInt(yy)) : (1900 + parseInt(yy));
                }
                ds = mm + "/" + dd + "/" + yy;
            } else {
                mm = 0;
                dd = 0;
                yy = 0;
            }
        }

        // validate 'MM DD YY[YY]' formats
        else {
            p1 = ds.indexOf(" "); // position of first space
            mm = ds.substring(0, p1);
            p2 = ds.lastIndexOf(" "); // position of last space
            dd = ds.substring(p1 + 1, p2);
            yy = ds.substring(p2 + 1, ds.length);
            if (dd.charAt(0) == "0") dd = dd.substring(1, 2);
            if (mm.charAt(0) == "0") mm = mm.substring(1, 2);
            if (yy.length > 4) yy = yy.substring(0, 4);
            if (yy == "0" || yy == "00" || yy == "000") yy = "2000";
            while (yy.substring(0, 1) == "0") {
                yy = yy.substring(1, yy.length); // remove leading zeroes
            }
            if (yy == "") yy = (today.getYear() < 1900) ? today.getYear() + 1900 : today.getYear();
            if (isNum(mm + dd + yy)) {
                if (yy > 0 && yy < 100) {
                    yy = (yy < n) ? (2000 + parseInt(yy)) : (1900 + parseInt(yy));
                }
                ds = mm + "/" + dd + "/" + yy;
            } else {
                mm = 0;
                dd = 0;
                yy = 0;
            }
        }
    }

    // attempt to parse any other dates with valid IETF formats
    if (dd == 0 && mm == 0 && yy == 0) {
        d = new Date(Date.parse(ds));
        dd = d.getDate();
        mm = (d.getMonth() + 1);
        // Netscape returns last 2 digits of years 1900-1999,
        // and the full year (4 char) string for dates > 2000 or < 1900;
        // IE returns 1900 minus the current year in all cases,
        // <duh> except IE3, when the year is earlier than 1970 </duh>
        if (d.getYear() > 2000) {
            yy = d.getYear(); // Netscape
        } else if (d.getYear() < 1900 && d.getYear() > 200) {
            yy = d.getYear(); // Netscape, date prior to 1900
        } else {
            yy = d.getYear() + 1900;
        }
        if (dd == 31 && mm == 12 && yy == 1969) {
            // IE's start-epoch date
            mm = 0;
            dd = 0;
            yy = 0;
        }
        ds = mm + "/" + dd + "/" + yy;
    }

    // verify the date components
    if (parseInt(dd) > 0 && parseInt(mm) > 0 && parseInt(yy) + 1 > 0) {
        if (mm < 1 || mm > 12) err = 1;
        if (dd < 1 || dd > 31) err = 1;
        if (yy < 1000 || yy > 9999) err = 1;

        // check the months with 30 days
        if (mm == 4 || mm == 6 || mm == 9 || mm == 11) {
            if (dd == 31) {
                dd = 1; // flick it forward a day
                mm = mm + 1;
            }
        }
        // check February and leap years
        if (mm == 2) {
            if (dd > 29) err = 1;
            if (dd == 29 && ((yy / 4) != parseInt(yy / 4))) {
                dd = 1; // flick it forward a day
                mm = 3;
            }
        }
    }

    // finally, test whether the input string can be Date.parsed
    d = new Date(Date.parse(ds));
    if (!d.getDate()) err = 1;

    if (err == 1 || dd == 0 || mm == 0) {
        alert(e);
        dateField.select();
        dateField.focus();
        return false;
    }

    // we have a valid IETF date, so convert it to
    // the specified standard format for database entry
    if (parseInt(dd) < 10 && (fmt < 4 || fmt > 6))
        dd = "0" + dd; // add leading zero to days 1-9

    // convert month numeric to string
    if (mm == 1)
        month = "Jan";
    else if (mm == 2)
        month = "Feb";
    else if (mm == 3)
        month = "Mar";
    else if (mm == 4)
        month = "Apr";
    else if (mm == 5)
        month = "May";
    else if (mm == 6)
        month = "Jun";
    else if (mm == 7)
        month = "Jul";
    else if (mm == 8)
        month = "Aug";
    else if (mm == 9)
        month = "Sep";
    else if (mm == 10)
        month = "Oct";
    else if (mm == 11)
        month = "Nov";
    else if (mm == 12)
        month = "Dec";
    else month == "";
    // add leading zero to months 1-9 for mm formats
    if (fmt > 6 && mm < 10) mm = "0" + mm;

    // trim for yy formats
    if ((yy > 99) && (fmt == 0 || fmt == 2 || fmt == 5 || fmt == 7 || fmt == 9)) {
        yy = yy - (parseInt(yy / 100) * 100);
        if (yy < 10) yy = "0" + yy;
    }

    // re-test the date components
    if (dd == 0 || dd == "" || month == "" || mm == 0 || mm == "" || yy == "") {
        alert(e);
        dateField.select();
        dateField.focus();
        return false;
    }

    // redraw the date input field per format parameter:
    /*  0 = "dd mmm yy"     e.g. 27 Jan 99
        1 = "dd mmm yyyy"   e.g. 27 Jan 1999
        2 = "dd-mmm-yy"     e.g. 05-Aug-98
        3 = "dd-mmm-yyyy"   e.g. 05-Aug-1998
        4 = "mmm d, yyyy"   e.g. Aug 5, 1999
        5 = "m/d/yy"        e.g. 8/5/98
        6 = "m/d/yyyy"      e.g. 8/5/1998
        7 = "mm/dd/yy"      e.g. 09/21/56
        8 = "mm/dd/yyyy"    e.g. 08/05/1998
        9 = "mm dd yy"      e.g. 08 15 98
        10 = "mm dd yyyy"   e.g. 21 09 1956  */

    if (fmt == 1)
        dateField.value = dd + " " + month + " " + yy;
    else if (fmt == 2)
        dateField.value = dd + "-" + month + "-" + yy;
    else if (fmt == 3)
        dateField.value = dd + "-" + month + "-" + yy;
    else if (fmt == 4)
        dateField.value = month + " " + dd + ", " + yy;
    else if (fmt == 5)
        dateField.value = mm + "/" + dd + "/" + yy;
    else if (fmt == 6)
        dateField.value = mm + "/" + dd + "/" + yy;
    else if (fmt == 7)
        dateField.value = mm + "/" + dd + "/" + yy;
    else if (fmt == 8)
        dateField.value = mm + "/" + dd + "/" + yy;
    else if (fmt == 9)
        dateField.value = mm + " " + dd + " " + yy;
    else if (fmt == 10)
        dateField.value = mm + " " + dd + " " + yy;
    else
        dateField.value = dd + " " + month + " " + yy;

    return true;

}

//Validates a sql server date range field
//Parameter: datetime - Date to check sql server range.
function ValidateSqlDateRange(datetime) {
    var endDate = new Date(datetime);
    var startDate = new Date("1/1/1753");
    var difference = endDate.getTime() - startDate.getTime();

    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    if (daysDifference < 0) {
        return false;
    }
    return true;

}

function ValidateDateTime(datetime) {
    //RegEx will match SQL Server datetime values, allowing date only, allowing zero padded digits in month, day and hour, and will match leap years from 1901 up until 2099
    var re = /^((((((0?[13578])|(1[02]))[\-\/\s]((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]((0?[1-9])|([1-2][0-9]))))[\-\/\s](\d{2})?(([02468][048])|([13579][26])))|(((((0?[13578])|(1[02]))[\-\/\s]((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]((0?[1-9])|(1[0-9])|(2[0-8]))))[\-\/\s](\d{2})?(([02468][1235679])|([13579][01345789]))))(\s(((0?[1-9])|(1[0-2]))\:([0-5][0-9])((\s)|(\:([0-5][0-9])\s))([AM|PM|am|pm]{2,2})))?$/;

    if (!re.test(datetime)) {
        return false;
    }
    return true;

    /* REGEX DESCRIPTION
    /^
    (
        (
            //Leap year
            (
                (
                    //31 day month
                    (
                        (0?[13578])
                        |
                        (1[02])
                    )
                    [\-\/\s]  // -, /, or space
                    (
                        //Allow 1-31 days, optionally with leading zero
                        (0?[1-9])
                        |
                        ([1-2][0-9])
                        |
                        (3[01])
                    )
                )
                |
                (
                    //30 day month
                    (
                        (0?[469])
                        |
                        (11)
                    )
                    [\-\/\s] // -, /, or space
                    (
                        //Allow 1-31 days, optionally with leading zero
                        (0?[1-9])
                        |
                        ([1-2][0-9])
                        |
                        (30)
                    )
                )
                |
                (
                    //February
                    0?2 //Allow optional leading 0
                    [\-\/\s] // -, /, or space
                    (
                        //Allow 1-29 days, optionally with leading zero
                        (0?[1-9])
                        |
                        ([1-2][0-9])
                    )
                )
            )
            [\-\/\s] // -, /, or space
            \d{2}? //Optional 2 digit year prefix
            (
                //Leap years
                ([02468][048])
                |
                ([13579][26])
            )
        )
        |
        (
            //Non leap year
            (
                (
                    //31 day month
                    (
                        (0?[13578])
                        |
                        (1[02])
                    )
                    [\-\/\s] // -, /, or space
                    (
                        //Allow 1-31 days, optionally with leading zero
                        (0?[1-9])
                        |
                        ([1-2][0-9])
                        |
                        (3[01])
                    )
                )
                |
                (
                    //30 day month
                    (
                        (0?[469])
                        |
                        (11)
                    )
                    [\-\/\s] // -, /, or space
                    (
                        //Allow 1-30 days, optionally with leading zero
                        (0?[1-9])
                        |
                        ([1-2][0-9])
                        |
                        (30)
                    )
                )
                |
                (
                    //February - non leap year
                    0?2 //Allow optional leading zero
                    [\-\/\s] // -, /, or space
                    (
                        //Allow 1-28 days, optionally with leading zero
                        (0?[1-9])
                        |
                        (1[0-9])
                        |
                        (2[0-8])
                    )
                )
            )
            [\-\/\s] // -, /, or space
            \d{2}? //Optional 2 digit year prefix
            (
                //Non leap years
                ([02468][1235679])
                |
                ([13579][01345789])
            )
        )
    )
    (
        \s //Space
        (
            (
                //Allow 0-12 hours
                (0?[1-9])
                |
                (1[0-2]
                )
            )
            \:([0-5][0-9]) // Allow 0-59 minutes
            (
                //Allow either a space or 0-59 seconds and a space
                (\s)
                |
                (\:([0-5][0-9])\s)
            )
            ([AM|PM|am|pm]{2,2}) //AM or PM
        )
    )? //Time component is optional
    $/;
    */
}



// Internal function to test whether argument is a number
function isNum(arg) {
    if (arg == "")
        return false;
    for (i = 0; i < arg.length; i++) {
        if (arg.charAt(i) < "0" || arg.charAt(i) > "9") {
            return false;
        }
    }
    return true;
}

// Internal function to convert a month string to numeric 1-12
function monthToNum(monthStr) {
    if (monthStr == "")
        return false;
    var m = monthStr;
    if (monthStr.length > 3)
        var m = monthStr.substring(0, 2);
    if (m == "jan" || m == "Jan" || m == "JAN")
        return 1;
    else if (m == "feb" || m == "Feb" || m == "FEB")
        return 2;
    else if (m == "mar" || m == "Mar" || m == "MAR")
        return 3;
    else if (m == "apr" || m == "Apr" || m == "APR")
        return 4;
    else if (m == "may" || m == "May" || m == "MAY")
        return 5;
    else if (m == "jun" || m == "Jun" || m == "JUN")
        return 6;
    else if (m == "jul" || m == "Jul" || m == "JUL")
        return 7;
    else if (m == "aug" || m == "Aug" || m == "AUG")
        return 8;
    else if (m == "sep" || m == "Sep" || m == "SEP")
        return 9;
    else if (m == "oct" || m == "Oct" || m == "OCT")
        return 10;
    else if (m == "nov" || m == "Nov" || m == "NOV")
        return 11;
    else if (m == "dec" || m == "Dec" || m == "DEC")
        return 12;
    else
        return 0;
}

//Validates a date text field
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateDateField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure the date is valid
    if (!ValidateDateTime(oElement.value)) {
        alert("Please enter a valid date for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //Make sure the sql server date range is valid
    if (!ValidateSqlDateRange(oElement.value)) {
        alert("The entered value is outside of the acceptable range of values for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a string text field
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateStringField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all of the characters are valid
    if (!ValidateStringChars(oElement.value)) {
        alert("This website does not accept foreign and certain special characters. Please enter a valid characters for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a string text field, allowing HTML characters
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateStringFieldAllowHTML(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all of the characters are valid
    if (!ValidateStringCharsAllowHTML(oElement.value)) {
        alert("This website does not accept special characters. Please enter a valid characters for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a money text field, not allowing a negative value
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateMoneyField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all of the characters are valid
    var checkOK = "0123456789.";
    if (!ValidateChars(oElement.value, checkOK)) {
        alert("Please enter a valid monetary value for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //Make sure there are no more than 2 digits after the decimal place (length - declocation <= 2)
    var decimalLocation = oElement.value.indexOf(".");
    if (decimalLocation > -1) {
        if (oElement.length - decimalLocation > 2) {
            alert("Please enter a valid monetary value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a money text field, allowing a negative value
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateMoneyFieldAllowNegative(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all of the characters are valid
    var checkOK = "-0123456789.";
    if (!ValidateChars(oElement.value, checkOK)) {
        alert("Please enter a valid monetary value for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //Make sure there are no more than 2 digits after the decimal place (length - declocation <= 2)
    var decimalLocation = oElement.value.indexOf(".");
    if (decimalLocation > -1) {
        if (oElement.length - decimalLocation > 2) {
            alert("Please enter a valid monetary value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //Make sure that if negative the "-" character is the first character
    var negativeLocation = oElement.value.indexOf("-");
    if (negativeLocation > -1) {
        if (negativeLocation != 0) {
            alert("Please enter a valid monetary value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates an email text field
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateEmailField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all of the characters are valid
    if (!ValidateEmailChars(oElement.value)) {
        alert("This website does not accept foreign and certain special characters. Please enter a valid characters for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //Check the format
    if (!ValidateEmailFormat(oElement.value)) {
        alert("Please enter a valid email address in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a text field for a US state
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateUSStateField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Convert the field to upper case
    oElement.value = oElement.value.toUpperCase();

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    } else if (oElement.value.length < 2 || oElement.value.length > 3) {
        alert("Please enter a valid 2 character US State abbreviation in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    if (!ValidateUSState(oElement.value)) {
        alert("Please enter a valid 2 character US State abbreviation in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a text field for a Canadian province
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateCAProvinceField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Convert the field to upper case
    oElement.value = oElement.value.toUpperCase();

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    } else if (oElement.value.length != 2) {
        alert("Please enter a valid 2 character Canadian province abbreviation in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    if (!ValidateCAProvince(oElement.value)) {
        alert("Please enter a valid 2 character Canadian province abbreviation in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a text field for a US Postal Code
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateUSPostalCodeField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Convert the field to upper case
    oElement.value = oElement.value.toUpperCase();

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If they entered a zip+4 without the hyphen, add it
    if (oElement.value.length == 9) {
        oElement.value = oElement.value.substring(0, 5) + "-" + oElement.value.substring(5, 9);
    }

    if (!ValidateUSPostalCode(oElement.value)) {
        alert("Please enter a valid US postal code in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates a text field for a Canadian postal code
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidateCAPostalCodeField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Convert the field to upper case
    oElement.value = oElement.value.toUpperCase();

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If they entered the code without the space, add it
    if (oElement.value.length == 6) {
        oElement.value = oElement.value.substring(0, 3) + " " + oElement.value.substring(3, 6);
    }

    if (!ValidateCAPostalCode(oElement.value)) {
        alert("Please enter a valid Canadian postal code in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

function ValidateUSState(stateCode) {
    //Regular expression for the states
    var re = /^(AE|AL|AK|AP|APO|AS|AZ|AR|CA|CO|CT|DE|DC|FM|EE|FL|FPO|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PPO|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY)$/;
    return re.test(stateCode)
}

function ValidateCAProvince(provinceCode) {
    //Regular expression for the provinces
    var re = /^(AB|BC|MB|NB|NL|NS|NT|NU|ON|PE|QC|SK|YT)$/;
    return re.test(provinceCode);
}

function ValidateUSPostalCode(postalCode) {
    //Regular expression for a us 5 or 9 digit postal code
    var re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return re.test(postalCode);
}

function ValidateCAPostalCode(postalCode) {
    //Regular expression for the postal code
    var re = /^([ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d)$/;
    return re.test(postalCode);
}

//Validates a phone number for proper format and characters
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Parameter: bRequired - boolean as to whether the field is required.  This determines
//                       if it is considered an error if the field is blank
//Returns: boolean
function ValidatePhoneField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        if (!bRequired) {
            //If blank and not required, exit true
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }
    //TODO - implement this

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //String of allowable characters
    var checkOK = "1234567890-.() +xX";

    //Make sure only valid characters are included
    if (!ValidateChars(oElement.value, checkOK)) {
        alert("Please enter a valid phone number in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    return true;
}

//Validates a string for invalid characters
//Parameter: sStringToCheck - the string to check for invalid characters
//Returns: boolean
function ValidateStringChars(sStringToCheck) {
    //String of allowable characters
    var checkOK = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþ0123456789,.-!@#$%^&*()_+=[]{}|\\;:'/?";

    //Validate
    return ValidateChars(sStringToCheck, checkOK);
}

//Validates a string for invalid characters
//Parameter: sStringToCheck - the string to check for invalid characters
//Returns: boolean
function ValidateStringCharsAllowHTML(sStringToCheck) {
    //String of allowable characters
    var checkOK = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþ0123456789,.-!@#$%^&*()_+=[]{}\\;:'<>/?\"";

    //Validate
    return ValidateChars(sStringToCheck, checkOK);
}

//Validates an email address for invalid characters
//This is the same as validateStringChars but also allows the -@._ characters
//Parameter: sEmailToCheck - the email to check for invalid characters
//Returns: boolean
function ValidateEmailChars(sEmailToCheck) {
    //String of allowable characters
    var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþ0123456789-@._/+'";

    //Validate
    return ValidateChars(sEmailToCheck, checkOK);
}

//Validates a string to make sure all characters are allowable
//Parameter: sStringToCheck - the string to check for invalid characters
//Parameter: sCheckString - a string of allowable characters
//Returns: boolean
function ValidateChars(sStringToCheck, sCheckString) {
    //Spin through each character of the string to check
    var check = "";
    for (var i = 0; i < sStringToCheck.length; i++) {
        //Spin through each character of the of the string of valid characters
        for (var j = 0; j < sCheckString.length; j++) {
            //If we match a valid character, break out
            if (sStringToCheck.charAt(i) == sCheckString.charAt(j)) {
                break;
            }
        }

        //If we made it through all the characters without breaking,
        //the character is invalid, so exit false
        if (j == sCheckString.length) {
            //Allow crlf characters
            if (!(sStringToCheck.charCodeAt(i) == 13 || sStringToCheck.charCodeAt(i) == 10)) {
                return false;
            }
        }
    }

    //If we made it here, there were no invalid characters, so exit true
    return true;
}

//Email address validation function, it valildates user@domain format and multiple @ characters in email address
function ValidateEmailFormat(emailStr) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailStr)) {
        return false;
    }
    // If we've gotten this far, everything's valid!
    return true;
}

//Validates the Password string for invalid characters
//Parameter: sStringToCheck - the string to check for invalid characters
//Returns: boolean
function ValidatePasswordChars(sStringToCheck) {
    //String of allowable characters
    var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzƒŠŒŽšœžŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþ0123456789-";

    //Validate
    return ValidateChars(sStringToCheck, checkOK);
}

//Validates a password text field
//Parameter: oElement - the form element to validate
//Parameter: sFieldName - the string to display as the field name for error popups
//Returns: boolean
function ValidatePasswordField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //Make sure the field is at least 3 characters long
    if (oElement.value.length < 3) {
        alert("Please enter a value with at least 3 characters in the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all the characters are numbers and letters
    if (!ValidatePasswordChars(oElement.value)) {
        alert("The \"" + sFieldName + "\" field may only contain letters and/or numbers.\r\nPlease use valid characters for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Performs a left trim on a string
//Parameter: s - the string to trim
//Returns: the left trimmed string
function ltrim(s) {
    return s.replace(/^\s*/, "");
}

//Performs a right trim on a string
//Parameter: s - the string to trim
//Returns: the right trimmed string
function rtrim(s) {
    return s.replace(/\s*$/, "");
}

//Trims a string
//Parameter: s - the string to be trimmed
//Returns: the trimmed string
function trim(s) {
    return rtrim(ltrim(s));
}

//Validates an integer (the isNum() that's up above, doesn't seem to work)
//Parameter: i - the value to be validated
//Returns: boolean
function ValidateInt(i) {
    var checkOK = "-0123456789";
    var Int = i;
    var allValid = true;
    for (x = 0; x < Int.length; x++) {
        ch = Int.charAt(x);
        for (y = 0; y < checkOK.length; y++)
            if (ch == checkOK.charAt(y))
                break;
        if (y == checkOK.length) {
            allValid = false;
            break;
        }
    }
    if (!allValid || i > 2147483647) {
        return (false);
    } else {
        return (true);
    }
}

function ValidateIntField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all of the characters are valid
    if (!ValidateInt(oElement.value)) {
        alert("Please enter a valid value for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}

//Validates an float value
//Parameter: i - the value to be validated
//Returns: boolean
function ValidateFloat(i) {
    var checkOK = "-+eE0123456789.";
    var Float = i;
    var allValid = true;
    for (x = 0; x < Float.length; x++) {
        ch = Float.charAt(x);
        for (y = 0; y < checkOK.length; y++)
            if (ch == checkOK.charAt(y))
                break;
        if (y == checkOK.length) {
            allValid = false;
            break;
        }
    }
    if (!allValid) {
        return (false);
    } else {
        return (true);
    }
}

function ValidateFloatField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //If maxlength is defined, make sure it is not exceeded
    if (oElement.maxLength != 2147483647 && oElement.maxLength != -1) {
        if (oElement.value.length > oElement.maxLength) {
            //If maxlength is exceeded, pop up a message, focus to the field, and exit false
            alert("The entered value for the \"" + sFieldName + "\" field is too long.  Please enter a value less than " + oElement.maxLength + " characters in length.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all of the characters are valid
    if (!ValidateFloat(oElement.value)) {
        alert("Please enter a valid value for the \"" + sFieldName + "\" field.");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}


//Check whether the IPAddress is valid ip address and mask is valid subnet mask
//(that is class A, class B, class C, class D)
function ValidateIPMaskList(ipMaskVal) {
    var arrIP = ipMaskVal.split("|");

    if (arrIP == "") {
        return true;
    }

    //This expression checks for valid IPAddress: Mask
    var expression = "^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9]):(((128|192|224|240|248|252|254|255)(\.0){3})|(255\.(128|192|224|240|248|252|254|255)(\.0){2})|(255\.){2}(128|192|224|240|248|252|254|255)\.0|(255\.){3}(128|192|224|240|248|252|254|255))$";
    var intCnt;
    for (intCnt = 0; intCnt < arrIP.length; intCnt++) {
        var iptokenArr = arrIP[intCnt];

        if (iptokenArr == null) {
            return true;
        }

        var rExp = new RegExp(expression);

        //Check whether the IPAddress is valid ip address and mask is valid subnet mask
        //(that is class A, class B, class C, class D)
        if (!iptokenArr.match(rExp)) {
            return false;
        }

    } //For loop ends

    return true;
}

//Validate the IP:Mask|IP:Mask pair values
function ValidateIPMaskListField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //Make sure all IP:Mask pair is are valid
    if (!ValidateIPMaskList(oElement.value)) {

        alert("Please enter a valid list of IP/Subnet Mask pairs in the format IP:Mask|IP:Mask in the \"" + sFieldName + "\" field");
        oElement.focus();
        return false;
    }

    //If we get this far, everything is OK, so exit true
    return true;
}


//Validate the Validate Version Number for format NNNNN.NNNNN.NNNNN.NNNNN
//Parameter: fieldvalue - the value to be validated
//Returns: boolean
function ValidateVersionNumber(fieldvalue) {
    //Regular expression for the states
    var re = /^\b\d{1,5}\.\d{1,5}\.\d{1,5}\.\d{1,5}\b$/;

    if (!re.test(fieldvalue)) {
        return false;
    }
    return true;
}

//Validate the Validate Version Number Field
function ValidateVersionNumberField(oElement, sFieldName, bRequired) {
    //Trim the field
    oElement.value = trim(oElement.value);

    //Make sure the field is not blank
    if (oElement.value == "" || oElement.value.length == 0) {
        //If blank and not required, exit true
        if (!bRequired) {
            return true;
        } else {
            //If blank and required, pop up a message, focus to the field, and exit false
            alert("Please enter a value for the \"" + sFieldName + "\" field.");
            oElement.focus();
            return false;
        }
    }

    //Make sure entered version number is valid
    if (!ValidateVersionNumber(oElement.value)) {
        alert("Please enter a valid value for the \"" + sFieldName + "\" field.  The required format is NNNNN.NNNNN.NNNNN.NNNNN");
        oElement.focus();
        return false;
    }

    return true;
}

function ValidateDateRange(startelement, endelement, duration) {
    if (duration == 0) {
        return true;
    } else {
        var fromDate = new Date(startelement.value);
        var toDate = new Date(endelement.value);

        var difference = toDate.getTime() - fromDate.getTime();
        var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

        if (daysDifference >= 0 && daysDifference <= duration)
            return true;
        else {

            alert("The maximum number of days allowed is " + duration + ". " +
                "Please choose a date range of less than " + duration + " days");
            startelement.focus();
            return false;
        }
    }
}