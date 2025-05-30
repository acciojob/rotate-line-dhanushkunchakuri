//your JS code here. If required.
let id=document.getElementById("line");
let angle=0;
setInterval(()=>{
	angle+=2;
	id.style.transform=`rotate(${angle}deg)`;
},20)