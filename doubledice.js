/***********************CHALLENGES*******************
 * 1.A player looses his entire score when he rolls 2 six in a row . After that it's a next player turn.
 * 2.get the goal number from the user and used it as a winning score
 * 3.Add another dice to the game,so there are two dices now.player looses its current score when one of them is 1
 */



var score, roundScore, activePlayer, gamePlaying,maxScore;

init();
//var prevDice;
document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
            //random numbers
            var dice= Math.floor(Math.random() * 6) + 1;
            var dice2=Math.floor(Math.random() * 6) + 1;

            //display the result
            var diceDOM = document.querySelector('.img-dice');
            var diceDOM2= document.querySelector('.img-dice-2');

            diceDOM.style.display= 'block';
            diceDOM2.style.display= 'block';
            diceDOM.src = 'dice-' + dice + '.png';
            diceDOM2.src= 'dice-' + dice2 + '.png';

           /* if(dice===6 && prevDice===6){
                score[activePlayer]=0;
                document.getElementById('score-' + activePlayer).textContent='0';
                player();
            } */
            //update the round values if the player does not roll a number 1
            if(dice !== 1 && dice2 !==1){
                 //add the score
                 roundScore = roundScore + dice + dice2;
                 document.getElementById('current-' + activePlayer).textContent=roundScore;
            }
            else
            {
                 //shift to other player
                 player();
            }
           // prevDice=dice;
    
      }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){
        //Add current score to global score
        score[activePlayer] += roundScore;

        //update the UI
        document.getElementById('score-' + activePlayer).textContent= score[activePlayer];

        var input=document.getElementById('input-goal').value;
        var winningScore;

        //Undefine,0,null,"" all are COERCED to FALSE
        //Anything else coerced tp true

        if(input){
            winningScore=input;
        }
        else
        {
            winningScore=100;
        }

        //check if player wins the game
        if(score[activePlayer] >= winningScore){
            document.getElementById('player-' + activePlayer).textContent= 'WINNER!';
            document.querySelector('.img-dice').style.display= 'none';
            document.querySelector('.img-dice-2').style.display= 'none';

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
    document.querySelector('.img-dice-2').style.display= 'none';
}

document.querySelector('.btn-1').addEventListener('click', init);

function init(){

    score=[0,0];
    roundScore=0;
    activePlayer=0;

    gamePlaying=true;

    document.querySelector('.img-dice').style.display='none';
    document.querySelector('.img-dice-2').style.display='none';

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

