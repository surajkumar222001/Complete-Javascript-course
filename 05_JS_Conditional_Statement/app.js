//if else
let time=10;
let wishMessage = ' ';
if(time<=12){
    wishMessage='Good Morning';
}
else if(time>12 && time<=17){
    wishMessage='Good Afternoon';

}
else if(time>17 && time<=23){
    wishMessage='Good Evening';

}
else{
    wishMessage='enter a proper time';
}
console.log(wishMessage);

//switch statement
let day=new Date().getDay()
let today=' ';
switch (day){
    case 0:
        today='sunday';
        break;
    case 1:
        today='monday';
        break;
    case 2:
        today='tuesday';
        break;
    case 3:
        today='wednesday';
        break;
        case 4:
        today='thursday';
        break;
    case 5:
        today='friday';
        break;
    case 6:
        today='saturday';
        break;
    default:
        today='enter a proper day';
        break;

}
console.log(`today is : ${today}`);

//for loop

//
//
// let foo = 0;
// switch (foo) {
//     case -1:
//         console.log('negative 1');
//         break;
//     case 0: // foo is 0 so criteria met here so this block will run
//         console.log(0);
//     // NOTE: the forgotten break would have been here
//         break;
//     case 1: // no break statement in 'case 0:' so this case will run as well
//         console.log(1);
//         break; // it encounters this break so will not continue into 'case 2:'
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log('default');
// }
