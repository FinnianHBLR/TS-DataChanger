// For loop from 0-100. 1st solution.
for (var i = 0; i < 100; i++) {
    if ((i % 3 == 0) && (i % 5) == 0) {
        // Check for multiples of 3 and 5 and print "SiteHost"
        console.log("SiteHost");
    }
    else if ((i % 3) == 0 && (i % 5 > 0)) {
        // Check for multiples of 3 and not 5 and print "Site"
        console.log("Site");
    }
    else if ((i % 5) == 0 && (i % 3 > 0)) {
        // check of multiples and not 5 and not 3 and print "Host"
        console.log("Host");
    }
    else {
        // Else print the number.
        console.log(i);
    }
}
// ---- With half as many operations! 2nd solution. ---- 
// Array to add values to
var adderArr = [];
for (var i = 0; i < 100; i++) {
    // Start with empty string
    var str = "";
    // Check if multiple of 3
    if (i % 3 == 0) {
        str += "Site";
    }
    // Check if multiple of 5
    if (i % 5 == 0) {
        str += "Host";
    }
    // If empty (no multiples of 3 or 5) just add the number i instead.
    adderArr.push((str == "") ? i : str);
}
;
// Log final array.
console.log(adderArr);
