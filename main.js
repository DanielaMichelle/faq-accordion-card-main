const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const arrow5 = document.getElementById('arrow5');
const arrows = [arrow1, arrow2, arrow3, arrow4, arrow5];

const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');
const question5 = document.getElementById('question5');
const questions = [question1, question2, question3, question4, question5];

arrows.forEach( arrow => {
    arrow.addEventListener('click', () => {

        let questionNumber = arrow.getAttribute('question-number'); 
        let question = document.getElementById(`question${questionNumber}`);
        let answer = document.getElementById(`answer${questionNumber}`);


        if (arrow.classList.contains('turn')) {
          arrow.classList.remove('turn');
          question.classList.remove('active');
          answer.classList.remove('show');
        } else {
          arrow.classList.add('turn');
          question.classList.add('active');
          answer.classList.add('show');
        } 
      });
});

questions.forEach( question => {
    question.addEventListener('click', () => {

        let questionNumber = question.getAttribute('question-number'); 
        let arrow = document.getElementById(`arrow${questionNumber}`);
        let answer = document.getElementById(`answer${questionNumber}`);


        if (question.classList.contains('active')) {
          arrow.classList.remove('turn');
          question.classList.remove('active');
          answer.classList.remove('show');
        } else {
          arrow.classList.add('turn');
          question.classList.add('active');
          answer.classList.add('show');
        } 
      });
});