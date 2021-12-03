

window.onload = function(){
    document.getElementById("Input_Voltage_Field").addEventListener("change",Voltage_Entered);
    document.getElementById("Input_Voltage_Field").value = 0.5;
    document.getElementById("Plus_Button").addEventListener("click",Increment_Voltage);
    document.getElementById("Minus_Button").addEventListener("click",Decrement_Voltage);
    document.getElementById("Plus_Button").addEventListener("mousedown",Pressed_Button);
    document.getElementById("Minus_Button").addEventListener("mousedown",Pressed_Button);
    document.getElementById("Plus_Button").addEventListener("mouseup",Released_Button);
    document.getElementById("Minus_Button").addEventListener("mouseup",Released_Button);
}



function Pressed_Button(){
  this.style.backgroundColor = "rgb(29,79,57)";
  this.style.transform = "scale(1.2)";

  
}

function Released_Button(){
  this.style.backgroundColor = "rgb(18,18,18)";
  this.style.transform = "scale(1)";

  
  
}

function Voltage_Entered(){
    console.log("Voltage Entered");
    let Voltage_Entered = this.value;
    let Rounded_Voltage = Math.round((Math.round(Voltage_Entered/0.00625)*0.00625)*1000000)/1000000;
    this.value = Rounded_Voltage;
}

function Increment_Voltage(){
    console.log("Add 6.25mV");
    let Current_Voltage = document.getElementById("Input_Voltage_Field").value;
    document.getElementById("Input_Voltage_Field").value = Math.round((parseFloat(Current_Voltage)+0.00625)*1000000)/1000000;
    // this.classList.remove("Pulse_Button_Animation");
    // void this.offsetWidth;
    // this.classList.add("Pulse_Button_Animation");
} 


function Decrement_Voltage(){
    console.log("Subtract 6.25mV");
    let Current_Voltage = document.getElementById("Input_Voltage_Field").value;
    console.log(Current_Voltage);
    document.getElementById("Input_Voltage_Field").value = Math.round((parseFloat(Current_Voltage)-0.00625)*1000000)/1000000;
    // this.classList.remove("Pulse_Button_Animation");
    // void this.offsetWidth;
    // this.classList.add("Pulse_Button_Animation");
}