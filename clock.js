
var date = new Date();
var wd = String(date.getDay());
var yyyy = String(date.getFullYear());
dd = String(date.getDate());
var mm = String(date.getMonth());


var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


switch(dd){
    case "1": 
    case "21": 
    case "31":
        dd = dd + "st";
        break;

    case "2":
    case "22":
        dd = dd + "nd";
        break;
    
    case "3":
    case "23":
        dd = dd + "rd"
        break;

    default:
        dd = dd + "th"
        break;
        

}

var fullDate = weekdays[wd] + ", " + months[mm] + " " + dd + ", " + yyyy;

function displayTime(){
    date = new Date()
    var hours = date.getHours().toString().padStart(2,0)
    var newHour = (hours % 12 || 12).toString().padStart(2,0)
    var minutes = date.getMinutes().toString().padStart(2,0);
    var seconds = date.getSeconds().toString().padStart(2,0);
    
    if (hours < "12" || hours === 24 ){
        var tod = "AM"
    } else {
        var tod = "PM"
    }

    const time = newHour + ":" + minutes + ":" + seconds + " " + tod

    document.getElementById("clock").innerHTML= time
}

setInterval(displayTime, 1000)

document.write(fullDate); 

