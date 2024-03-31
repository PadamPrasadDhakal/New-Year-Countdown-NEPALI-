const newYears="13 Apr 2024"



function countdown(){
  const days1=document.getElementById('hyaa')
  const hours1=document.getElementById('hours')
  const minutes1=document.getElementById('minutes')
  const seconds1=document.getElementById('seconds')

  const newYearsDate=new Date(newYears)
  const currentDate=new Date()

  const seconds=Math.floor((newYearsDate - currentDate) / 1000)
  const days=Math.floor((seconds / 3600) / 24)
  const hours=Math.floor(seconds / 3600) % 24
  const minutes=(Math.floor(seconds / 60) % 60)
  const tseconds=(Math.floor(seconds % 60))

  days1.innerHTML=days
  hours1.innerHTML=hours
  minutes1.innerHTML=minutes
  seconds1.innerHTML=tseconds
}

// function formatTime(time){
//   return time < 10 ? `0$(time)`:time;
// }
//countdown();
setInterval(countdown,1000)