const checkAnswer = document.getElementById('check-answer');
const refresh = document.getElementById('refresh');
var question = document.getElementById('question');
var result = document.getElementById('result');
const randomNumber = Math.floor(Math.random() * 50);
const optionList = document.querySelectorAll('.quiz-option li');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
// refresh
refresh.addEventListener('click',()=>{
    window.location.reload();
  
});
// fetch data
 fetch('question.json')
.then(response => response.json())
.then(data => {
   
    const randomID = data[randomNumber];
   
    question.innerHTML = randomID.question;
     option1.textContent = randomID.options[0];
     option2.textContent = randomID.options[1];
     option3.textContent = randomID.options[2];
     option4.textContent = randomID.options[3];
    console.log(randomNumber)
    optionList.forEach(item => {
        item.addEventListener('click', () => {
            // Remove the 'selected' class from all list items
            optionList.forEach(li => {
                li.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked list item
            item.classList.add('selected');

            // Get the content of the clicked list item
            
           checkAnswer.addEventListener("click",()=>{
            const selectedItemContent = item.textContent;
         var answer = randomID.answer;
            if(answer === selectedItemContent) {
                result.textContent = "Correct";
                result.style.background = 'green';
            }else{
               result.textContent =  `Wrong (${answer})`;
               result.style.background = 'red';
            } 
         
           });
          
           // or do whatever you want with the content
        });
    });

})
.catch(error => {
console.log(error);
});


console.log(randomNumber);

