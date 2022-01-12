const Counter = {
  init(){
    const counter = document.getElementById('popup-counter')
    let timer = 5
    counter.innerText = timer 

    const interval = setInterval(() => {
      timer -= 1
      counter.innerText = timer    
       if(timer === 0){
          clearInterval(interval)
        }
       }, 1000)
    console.log("Jamstack Rocks");
  }
}

document.addEventListener("DOMContentLoaded", () => Counter.init() )