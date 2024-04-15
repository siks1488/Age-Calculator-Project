const resultText  = document.getElementById("submit");
const dateInput  = document.getElementById("date");
const submitButton  = document.getElementById("result");

resultText .addEventListener("click",function(){
    const birthDate  = new Date(dateInput.value);
    const currentDate  = new Date();
    const ageInMilliseconds  = currentDate  - birthDate;
    const ageInYears  = ageInMilliseconds  / (1000 * 60 * 60 * 24 * 365.25);
    const roundedAge  = Math.floor(ageInYears);
    result.textContent = (`You are approximately ${roundedAge} years old.`);
})
