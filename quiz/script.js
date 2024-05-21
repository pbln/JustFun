const question = document.querySelector('#question')
const ansbtns = document.querySelector('#ansbtns')

const q = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
]

let j = 0 
let cbtn ; 
let score=0;
let nextBtn ;
let i=0 ;
show_data(i)

function show_data(i){
    question.innerHTML=q[i].question;
    for (let j =0 ; j<4 ; j++){
        const btn = document.createElement('button')
        btn.innerText = q[i].answers[j].text 
        if( q[i].answers[j].correct ){
             cbtn = btn
        }
        btn.classList.add('btn');
        btn.addEventListener('click',()=>{
            chkans(q[i].answers[j],btn,cbtn)
            })
        document.getElementById('ansbtns').appendChild(btn);
    }
    
}


function chkans(ans, btn, cbtn) {
    if (ans.correct) {
        btn.classList.add('cbtn');
        score++;
    } else {
        btn.classList.add('wbtn');
    }
    
    cbtn.classList.add('cbtn');

    if (!nextBtn) {
        nextBtn = document.createElement('button');
        document.querySelector('.app').appendChild(nextBtn);
        nextBtn.classList.add('next');
        nextBtn.innerText = 'Next';

        nextBtn.addEventListener('click', () => {
            i++;
            ansbtns.innerHTML=''
            if(i<2){
            show_data(i);
            }
            else{
                question.innerHTML=`You scored ${score} out of 2
                                     <button class = "next" id="playagain">play again</button> ` 
                                     document.getElementById("playagain").addEventListener('click',()=>{
                                        i=0 ; 
                                        score=0;
                                        show_data(i);
                                    })
            }
            
            
            nextBtn.style.display = 'none'; // hide the Next button after showing data
        });
    }

    nextBtn.style.display = 'block'; // show the Next button after an answer is clicked
}
