//date object
let date=new Date();
console.log(date);

//proper data
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

//proper time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

//usa time
let options ={timeZone:'america/new_york'};
let usaDate=new Date().toLocaleDateString('en-us',options);
console.log(usaDate);
let usaTime=new Date().toLocaleTimeString('en-us',options);
console.log(usaTime);

//today
let day=new Date().getDay();
let today='';
switch (day){
    case 0:
        today +='sunday';
        break;
    case 1:
        today +='monday'
        break;
    case 2:
        today +='tuesday';
        break;
    case 3:
        today +='wednesday';
        break;
    case 4:
        today +='thursday';
        break;
    case 5:
        today +='friday';
        break;
    case 6:
        today +='saturday';
        break;
    default:
        result +='Enter the proper day';
        break;
}
console.log(today);

//month
let currentMonth=new Date().getMonth();
console.log(currentMonth);

//custom date
let customDate=new Date().getDate();
let customDay=new Date().getDay();
let customYear=new Date().getFullYear();
console.log(`${customDate}-${customDay}-${customYear}`);
console.log(`${customDate}.${customDay}.${customYear}`);
console.log(`${customDate}/${customDay}/${customYear}`);