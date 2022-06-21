import React, { useState } from 'react'

export default function Game() {
    let arr = [];
    let level = 1;
    let count = 0;
    let on = false;
    const [score,setScore]=useState(1);



    const gameEngine = () => {

        document.querySelector('.scoreBoard').style.display="none";
        document.querySelector('.gameResult').style.display="none";
        arr.splice(0, arr.length);
        setScore(1);
  

        for (let i = 0; i < 20; i++) {
            const num = Math.floor((Math.random() * 4) + 1)
            arr.push(num);
        }
        computerTurn();
    }



    const computerTurn = () => {
        for (let i = 0; i < level; i++) {
            setTimeout(function timer() {
                const block = document.getElementById(arr[i]);
                block.style.border = '1vw solid black';
                setTimeout(function timer2() {
                    block.style.border = 'none';
                }, 1000)
            }, i * 2000);
        }

   
            on=true;
            playerTurn();
      
    }



    const playerTurn = () => {
        if (on === true) {
            let topLeft = document.querySelector('.item1');
            let topRight = document.querySelector('.item2');
            let bottomLeft = document.querySelector('.item3');
            let bottomRight = document.querySelector('.item4');

            topLeft.addEventListener('click', check1);
            topRight.addEventListener('click', check2);
            bottomLeft.addEventListener('click', check3);
            bottomRight.addEventListener('click', check4);
        }
    }

    let order = [];
    const check1 = () => {
        if(on===true)
        {
        order.push(1);
        let topLeft = document.querySelector('.item1');
        topLeft.style.border = '1vw solid black';
        setTimeout(function timer2() {
            topLeft.style.border = 'none';
        }, 500)

        if (order[order.length - 1] === arr[order.length - 1]) {
            console.log("correct");
            count += 1;
            if (count === level) {
                level += 1;
                on=false;
                setTimeout(() => {
                    computerTurn();
                    order.splice(0, order.length);
                    setScore(level);
                }, 2000)
                count = 0;
            }
        }
        }
        if (order[order.length - 1] !== arr[order.length - 1]) {
            document.querySelector('.scoreBoard').style.display="block";
            document.querySelector('.gameResult').style.display="flex";
            count = 0;
        }
    }
    const check2 = () => {
        if(on===true){
        order.push(2);
        let topRight = document.querySelector('.item2');
        topRight.style.border = '1vw solid black';
        setTimeout(function timer2() {
            topRight.style.border = 'none';
        }, 500)

        if (order[order.length - 1] === arr[order.length - 1]) {
            console.log("correct");
            count += 1;
            if (count === level) {
                level += 1;

                on=false;
                setTimeout(() => {
                    computerTurn();
                    order.splice(0, order.length);
                    setScore(level);
                }, 2000)
                order.splice(0, order.length);
                count = 0;
            }
        }

        }
        if (order[order.length - 1] !== arr[order.length - 1]) {
            document.querySelector('.scoreBoard').style.display="block";
            document.querySelector('.gameResult').style.display="flex";
            count = 0;

        }
    }
    const check3 = () => {
        if(on===true)
        {
        order.push(3);
        let bottomLeft = document.querySelector('.item3');
        bottomLeft.style.border = '1vw solid black';
        setTimeout(function timer2() {
            bottomLeft.style.border = 'none';
        }, 500)

        if (order[order.length - 1] === arr[order.length - 1]) {
            console.log("correct");
            count += 1;
            if (count === level) {
                level += 1;
                on=false;
                setTimeout(() => {
                    computerTurn();
                    order.splice(0, order.length);
                    setScore(level);
                }, 2000)
                order.splice(0, order.length);
                count = 0;
            }
        }
        }
        if (order[order.length - 1] !== arr[order.length - 1]) {
            document.querySelector('.scoreBoard').style.display="block";
            document.querySelector('.gameResult').style.display="flex";
            count = 0;

        }
    }
    const check4 = () => {
        if(on===true)
        {
        order.push(4);
        let bottomRight = document.querySelector('.item4');
        bottomRight.style.border = '1vw solid black';
        setTimeout(function timer2() {
            bottomRight.style.border = 'none';
        }, 500)

        if (order[order.length - 1] === arr[order.length - 1]) {
            console.log("correct");
            count += 1;
            if (count === level) {
                level += 1;
                on=false;
                setTimeout(() => {
                    computerTurn();
                    order.splice(0, order.length);
                    setScore(level);
                }, 2000)
                order.splice(0, order.length);
                count = 0;
            }
        }

        }
        if (order[order.length - 1] !== arr[order.length - 1]) {
            document.querySelector('.scoreBoard').style.display="block";
            document.querySelector('.gameResult').style.display="flex";
            count = 0;
        }
    }

    const startGame=()=>{
        gameEngine();
        document.getElementById("startButtonId").innerHTML="Start Again"
    }
   
    return (
        <>
        <div className="gameResult">
            <div className="result">YOU LOST!!</div>
        </div>
        <div className="scoreBoard">
            <div className="score">
                You Completed {score} Levels
            </div>
        </div>
        <div className="startButtonDiv">
           <button onClick={startGame} className="startButton" id="startButtonId">START</button>
           </div>
            <div className="itemBox">
                <div className="item1 item" id="1"></div>
                <div className="item2 item" id="2"></div>
                <div className="item3 item" id="3"></div>
                <div className="item4 item" id="4"></div>
            </div>

            <div className="currentLevel"> 
                LEVEL: {score}
            </div>
        </>
    )

}

