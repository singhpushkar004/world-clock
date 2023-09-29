function wc()
{
d=new Date();

document.getElementById('india').innerHTML=d.toLocaleString('en-US',{
timeZone:'Asia/kolkata',
},).split(",")[1];






 document.getElementById('usa').innerHTML=d.toLocaleString('en-US',{
timeZone:'America/los_Angeles',
}).split(",")[1];





document.getElementById('china').innerHTML=d.toLocaleString('en-US',{
timeZone:'Asia/Shanghai',
}).split(",")[1];

}
setInterval(()=>{
wc();
},1000);