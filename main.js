const arrow1 = document.getElementById('arrow1');
const arrow2 = document.getElementById('arrow2');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const arrow5 = document.getElementById('arrow5');
const arrows = [arrow1, arrow2, arrow3, arrow4, arrow5];

arrows.forEach( arrow => {
    arrow.addEventListener('click', () => {

        let questionNumber = arrow.getAttribute('question-number'); 
        let question = document.getElementById(`question${questionNumber}`);
        let answer = document.getElementById(`answer${questionNumber}`);


        if (arrow.classList.contains('turn')) {
          console.log('removiendo');
          arrow.classList.remove('turn');
          question.classList.remove('active');
          answer.classList.remove('show');
        } else {
          console.log('abriendo');
          arrow.classList.add('turn');
          question.classList.add('active');
          answer.classList.add('show');
        } 
      });
});