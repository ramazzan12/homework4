

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    for (let i = 0; i < dateString.length; i++){
        var date=new Date(dateString);
        var day=date.getDay();
    }
    if (day==0){
            dayName="Sunday";
        } else if(day==1) {
            dayName="Monday";
        } else if(day==2) {
            dayName="Tuesday";
        } else if(day==3) {
            dayName="Wednesday";
        } else if(day==4) {
            dayName="Thursday";
        } else if(day==5) {
            dayName="Friday";
        } else if(day==6) {
            dayName="Saturday";
        }
    return dayName;
}

