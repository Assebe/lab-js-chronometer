class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
     this.intervalId = setInterval(() => { 
      if(printTimeCallback){
      return printTimeCallback()}
      this.currentTime++  
      }, 1000)

  }

  getMinutes() {
    if(this.currentTime){const minutes = Math.floor(this.currentTime / 60)
      return minutes}
      else return 0
  }

  getSeconds() {
   return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if(value <10){
    return "0" + value.toString()}
    else return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
 this.currentTime = 0
  }

  split() {
   const timeSinceStart = ""
   

  }
}
