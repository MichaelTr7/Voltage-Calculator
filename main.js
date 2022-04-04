self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/main.js',
          '/index.html',
          '/style.css',
          '/manifest.json'
        ]
      );
    })
  );
});


const Increment=0.005;

window.onload = function(){
    document.getElementById("Input_Voltage_Field").addEventListener("change",Voltage_Entered);
    document.getElementById("Input_Voltage_Field").value = 0.5;
    document.getElementById("Plus_Button").addEventListener("click",Increment_Voltage);
    document.getElementById("Minus_Button").addEventListener("click",Decrement_Voltage);
   
}

function Voltage_Entered(){
    console.log("Voltage Entered");
    let Voltage_Entered = this.value;
    let Rounded_Voltage = Math.round((Math.round(Voltage_Entered/Increment)*Increment)*1000000)/1000000;
    this.value = Rounded_Voltage;
}

function Increment_Voltage(){
    console.log("Add 0.05mV");
    let Current_Voltage = document.getElementById("Input_Voltage_Field").value;
    document.getElementById("Input_Voltage_Field").value = Math.round((parseFloat(Current_Voltage)+Increment)*1000000)/1000000;
    this.classList.remove("Pulse_Button_Animation");
    void this.offsetWidth;
    this.classList.add("Pulse_Button_Animation");
} 


function Decrement_Voltage(){
    console.log("Subtract 0.05mV");
    let Current_Voltage = document.getElementById("Input_Voltage_Field").value;
    console.log(Current_Voltage);
    document.getElementById("Input_Voltage_Field").value = Math.round((parseFloat(Current_Voltage)-Increment)*1000000)/1000000;
    this.classList.remove("Pulse_Button_Animation");
    void this.offsetWidth;
    this.classList.add("Pulse_Button_Animation");
}