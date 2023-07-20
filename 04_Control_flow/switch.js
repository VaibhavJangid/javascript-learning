// it used to check a value in relation with multiple conditions.

// we use it in "Redux".

// this is basic syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// **** switch: perform/match all conditions except default.

// if the condition is matched then switch will not check other rest conditions this is a major issue with it, it is due to the old school nature of javascript.

// switch can work with numbers and strings both.

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

const month1 = "march"

switch (month1) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}