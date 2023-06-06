
const selectmenu = document.querySelectorAll("select"),
currenttime = document.querySelector("h1"),
setalarmbtn = document.querySelector("button");

let alarmtime,isAlarmSet = false;
ringing = new  Audio("tom-4.mp3");


for(let i =23;i >0;i--)
{
  let option = `<option value="${i}"> ${i}</option>`;
  selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}

for(let i =59;i >0;i--)
{
  let option = `<option value="${i}"> ${i}</option>`;
  selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}


 setInterval(() => {
   var t = new Date().getHours();
   var m = new Date().getMinutes();
   // var s = new Date().getSeconds();

  currenttime.innerText = `${t}:${m}`;

if(alarmtime == `${t}:${m}`){
  ringing.play();
  ringing.Loop=true;

}
 }
,1000);


function setAlarm()
{
  if(isAlarmSet)
  {
    alarmtime="";
    ringing.pause();
    return isAlarmSet=false;
  }
  let time = `${selectmenu[0].value}:${selectmenu[1].value}`;
  if(time.includes("Hour") || time.includes("Minute"))
  {
      return alert("please select a volid time to set alarm");
  }
  isAlarmSet = true;
  alarmtime = time;
  // console.log(time);
}
setalarmbtn.addEventListener("click", setAlarm);
