import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {Box, Button, Typography} from '@mui/material'

function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [num4, setNum4] = useState(0)
  const [num5, setNum5] = useState(0)
  const [game, setGame] = useState(0)

  // New Number Values
  const [newnum1, setNewnum1] = useState(0)
  const [newnum2, setNewnum2] = useState(0)
  const [newnum3, setNewnum3] = useState(0)
  const [newnum4, setNewnum4] = useState(0)
  const [newnum5, setNewnum5] = useState(0)



  
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  const [counter4, setCounter4] = useState(0)
  const [counter5, setCounter5] = useState(0)
  const [jackpot1, setJackpot1] = useState(0)

 
  




  const handleGame = (e) => {
    e.preventDefault(); 
    const winningNumbers = [num1, num2, num3, num4, num5]
    const firstWinNumber = winningNumbers[0]
    const firstWinNumberInt = parseInt(firstWinNumber)
      
    if (firstWinNumberInt === 1) setCounter1(46);
    else if (firstWinNumberInt === 2) setCounter1(47);
    else if (firstWinNumberInt === 3) setCounter1(48);
    else if (firstWinNumberInt === 4) setCounter1(49);
    else if (firstWinNumberInt === 5) setCounter1(50);
    
  
    return counter1;
  };
  

  const handleCounter = (e)=>{
    const parsedCounter = parseInt(counter1)
    const parsedNum2 = parseInt(num2)
    const parsedNum3 = parseInt(num3)
    const parsedNum4 = parseInt(num4)
    const parsedNum5 = parseInt(num5)

    const forcast1 = counter1
    const forcast2 = forcast1 - parsedNum2
    const forcast3 = forcast2 - parsedNum3
    const forcast4 = forcast3 - parsedNum4
    const forcast5 = forcast4 - parsedNum5

    setNewnum1(forcast1)
    setNewnum2(forcast2)
    setNewnum3(forcast3)
    setNewnum4(forcast4)
    setNewnum5(forcast5)

    const jackpot = forcast1 - forcast5
    setJackpot1(jackpot)
    return

  }

  





  
  return (

    <div className="App">
     <h1>LOTTO TEST</h1>


     <form onClick={handleGame}>
      <input value={num1} onChange={(e)=>setNum1(e.target.value)} />
      <input value={num2} onChange={(e)=>setNum2(e.target.value)} />
      <input value={num3} onChange={(e)=>setNum3(e.target.value)} />
      <input value={num4} onChange={(e)=>setNum4(e.target.value)} />
      <input value={num5} onChange={(e)=>setNum5(e.target.value)} />
      
      
      <Button variant='contained'>PLAY LOTTO</Button>
     </form>

     <Box>
     <Typography>JACKPOT NUMBERS</Typography>
      <Typography variant='h3' component='h3'>
        Jackpot Number: {jackpot1}
      </Typography>
     </Box>


      <h3>First Past Winning number is: {num1}</h3>
     <h3>Your Counter is: {counter1}</h3>

     <h2>PAST WINNING NUMBERS</h2>
     <h3>Old Number One:{num1}</h3>
     <h3>Old Number Two:{num2}</h3>
     <h3>Old Number Three:{num3}</h3>
     <h3>Old Number Four:{num4}</h3>
     <h3>Old Number Five:{num5}</h3>


<div>
  <Button variant='contained' onClick={handleCounter}>FORCAST</Button>
</div>

   <Box>
     <h2>FORCAST WINNING NUMBERS</h2>
     <h3>New Number One:{newnum1}</h3>
     <h3>New Number Two:{newnum2}</h3>
     <h3>New Number Three:{newnum3}</h3>
     <h3>New Number Four:{newnum4}</h3>
     <h3>New Number Five:{newnum5}</h3>
     </Box>

     

    </div>
    
  );
}

export default App;
