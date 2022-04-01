var topic = [
    "上課-課程整體介紹"
    ,
    "上課"
    ,
    "上課"
    ,
    "上課"
    ,
    "上課"
    ];
    var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
//一次設定好月份與日期
startDate.setMonth(startMonth-1,startDay);
startDate.setHours(0);
startDate.setMinutes(0);
startDate.setSeconds(0);
}
setMonthAndDay(3,2);