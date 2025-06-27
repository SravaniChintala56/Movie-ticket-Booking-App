
let months=["January","February","March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let mnth=new Date().getMonth()

let container=document.querySelector('.maincontainer');
let container2=document.querySelector('.container2');

function renderMovie(){
  let bookedtcktData=JSON.parse(localStorage.getItem('mybooking'))||[];
  if (bookedtcktData.length === 0) {
  container.classList.add('container1'); 
  container2.classList.remove('container1');
  } else {
  container.classList.remove('container1');  // Show mvcontainer
  container2.classList.add('container1'); 
  }
  container.innerHTML="";
  bookedtcktData.map((obj,index)=>{
    const timerId=`timer-${index}`
    container.innerHTML+=`
          <div class="mvcontainer">
            <div class="imgcontainer">
              <img src="${obj.moviedata.image}" alt="">
            </div>
            <div class="cont2">
              <div class="details">
                <h2 class="title">${obj.moviedata.title} ${obj.pictureQuality}</h2>
                <p class="dtls1"><span><b>Genre</b>: ${obj.moviedata.genre}</span><span><b>Duration</b>: ${obj.moviedata.duration}</span></p>
                <p><b>Rating</b>:${obj.moviedata.rating}</span></p>
                <p>${obj.moviedata.description}</p>
              </div>
              <div class="qrcontainer">
                <div class="timercontainer"><p id="${timerId}">timer</p></div>
                <div class="qrcode"><img src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=" alt=""></div>
                <div class="seats">Seats:${obj.seats}</div>
                <div>Theater: ${obj.theater}</div>
                <div>Timings: ${obj.date}, ${obj.time}</div>
                <div>Price:Rps ${obj.totalPrice}</div>
                <button class="cancelbtn" data-index="${index}" data-bs-toggle="modal" data-bs-target="#cancelModal">Cancel</button>
              </div>
            </div>
          </div>`
    startCountdown(obj.date,obj.time,obj.moviedata.duration,timerId);
  })
 
}
renderMovie();


function durationDiff(durationStr){
  let duration =durationStr.split(" ");
  let hrs=0;
  let mins=0;
  for(let part of duration){
    if(part.includes("h")){
      hrs=parseInt(part);
    }
    if(part.includes("m")){
      mins=parseInt(part);
    }
  }
  return hrs*60+mins;
}



function startCountdown(targetDayStr, targetTime,duration,timerId) {
  console.log(targetDayStr,targetTime,duration,timerId)
  const [dayStr, monthStrRaw] = targetDayStr.trim().split(" ");
  const day = parseInt(dayStr);
  const monthStr = monthStrRaw.trim();
  const now = new Date();
  const year = now.getFullYear();
  const month = new Date(`${monthStr} 1, 2000`).getMonth();
  const [timePart, meridian] = targetTime.trim().split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);
  if (meridian === "PM" && hours !== 12) {
    hours += 12;
  }
  if (meridian === "AM" && hours === 12) {
    hours = 0;
  }
  // Construct target date
  let targetDate = new Date(year, month, day, hours, minutes);

  // If the target date is already past, assume next year
  if (targetDate < now) {
    targetDate.setFullYear(year + 1);
  }

  const showDuration=durationDiff(duration);
  const showEndTime=new Date(targetDate.getTime()+showDuration*60000);
  let interval;
  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;
    if((showEndTime-now)<=0){
      let bookingsData=JSON.parse(localStorage.getItem('mybooking'));
      let updatedbookings=bookingsData.filter(obj=>{
        return !(obj.date==targetDayStr && obj.time==targetTime);
      })
      localStorage.setItem('mybooking',JSON.stringify(updatedbookings));
      renderMovie();
      return;
    }
    if (diff <= 0) {
      document.getElementById(timerId).textContent = "Show Started!!";
      clearInterval(interval);
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    document.getElementById(timerId).textContent = 
      `${days}d ${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  updateTimer(); 
  interval = setInterval(updateTimer, 1000);
}
  


let cancelmovieIdx=null;
document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('cancelbtn')){
    cancelmovieIdx=parseInt(e.target.getAttribute('data-index'));
  }
  console.log(cancelmovieIdx)
})
document.getElementById('confirmCancel').addEventListener('click', function() {

  let bookings=JSON.parse(localStorage.getItem('mybooking'));
  if(cancelmovieIdx !=null && bookings[cancelmovieIdx]){
    bookings.splice(cancelmovieIdx,1);
    localStorage.setItem('mybooking',JSON.stringify(bookings));
  }
  const cancelModal = bootstrap.Modal.getInstance(document.getElementById('cancelModal'));
  cancelModal.hide();
  renderMovie();
});


window.onload=function(){
  renderMovie();
}


