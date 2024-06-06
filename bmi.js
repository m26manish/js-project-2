// const weight=document.getElementById('weight');
// const height=document.getElementById('height');
// const calculate=document.getElementById('calculate');
// const result=document.getElementById('result');
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const weight=parseInt(document.getElementById('weight').value)
const height=parseInt(document.getElementById('height').value);
// const calculate=document.getElementById('calculate');
const result=document.getElementById('result');
if(weight && height){
    const bmi=(weight/height/height)*10000;
   let bmiCategory=" ";
    if(bmi<18.5){
        bmiCategory="Underweight";
 }
    else if(bmi<25){
        bmiCategory="Normal weight";

       }
    else if(bmi<30){
        bmiCategory="Overweight";

        }
    else{
        bmiCategory="Obese";
       
     }
     result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are ${bmiCategory}.`;
    }
 });
