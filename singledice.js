var score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
            //random numbers
            var dice= Math.floor(Math.random() * 6) + 1;

            //display the result
            var diceDOM = document.querySelector('.img-dice');

            diceDOM.style.display= 'block';
            diceDOM.src = 'dice-' + dice + '.png';

            //update the round values if the player doest not roll a number 1
            if(dice !== 1){
                 //add the score
                 roundScore += dice;
                 document.getElementById('current-' + activePlayer).textContent=roundScore;
            }
            else
            {
                 //shift to other player
                 player();
            }
    
      }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){
        //Add current score to global score
        score[activePlayer] += roundScore;

        //update the UI
        document.getElementById('score-' + activePlayer).textContent= score[activePlayer];

        //check if player wins the game
        if(score[activePlayer] >= 100){
            document.getElementById('player-' + activePlayer).textContent= 'WINNER!';
            document.querySelector('.img-dice').style.display= 'none';

            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');

            gamePlaying=false;
        }
        else
        {
            //next player
            player();
        }
    }
});


function player(){
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.img-dice').style.display='none';
}

document.querySelector('.btn-1').addEventListener('click', init);

function init(){

    score=[0,0];
    roundScore=0;
    activePlayer=0;

    gamePlaying=true;

    document.querySelector('.img-dice').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('player-0').textContent='Player 1';
    document.getElementById('player-1').textContent='player 2';
    

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('actve');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}