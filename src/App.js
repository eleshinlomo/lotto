import React, {useEffect, useState} from 'react'
import {ThemeProvider, Typography, createTheme, Box, TextField, Button, Grid} from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Nav from './components/Nav'
import Footer from './pages/Footer';
import { RenderData } from './components/Data/RenderData';



function App(props) {


  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)
  const [num3, setNum3] = useState(null)
  const [num4, setNum4] = useState(null)
  const [num5, setNum5] = useState(null)
  const [num6, setNum6] = useState(0)
  const [num7, setNum7] = useState(0)
  const [num8, setNum8] = useState(0)
  const [num9, setNum9] = useState(0)
  const [num10, setNum10] = useState(0)
  const [results, setResults] = useState(null)
  const [resultHistory, setResultHistory] = useState([])
  const [message, setMessage] = useState("")

  const totalHistory = resultHistory.length

  const runMatch = ()=>{
    if(totalHistory < 5)
    setMessage("Total History wins must be higher than 5 to run a match")
    if(totalHistory > 5)
    setMessage("Match run currently not available")
    
  }
  

  const payload = {
    num1: parseInt(num1),
    num2: parseInt(num2),
    num3: parseInt(num3),
    num4: parseInt(num4),
    num5: parseInt(num5),
    // num6: parseInt(num6),
    // num7: parseInt(num7),
    // num8: parseInt(num8),
    // num9: parseInt(num9),
    // num10: parseInt(num10),
  }

   // URLs

   const BASE_URL = process.env.REACT_APP_BASE_URL
   const BASE_ENDPOINT = {
     something: `${BASE_URL}/lotto/`
   }
  
  

  const getLottoCounter = async ()=>{
    if(totalHistory > 10)
    setMessage("You cannot predict more than 10 values")
    
    await fetch(BASE_ENDPOINT.something, {
      method: 'POST',
      mode: 'cors',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then((res)=>{
      if(!res) throw new Error("Server not found")
      return res.json()
    })
    .then((data)=>{
      if (data){
      console.log(data)
      setResults(data.message)
      setResultHistory((prevResult)=>[...prevResult, data.message])
      }
    })
  }



    const theme = createTheme({
      palette: {
        mode: 'light'
      }
    })
  
  return (
    <div>
     
  
    <ThemeProvider theme={theme}>
    <Nav />
    
    <Grid container spacing={2} sx={{
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center'
    }}>


    <Grid item sx={{my:3}}>
    
     <Box>
    <main style={{marginTop: 3, marginBottom: 6}}>
    <div>
    <Box sx={{display: 'flex'}}>
    <Typography variant='h5' component='h5' align='center'>
      EXPERIMENTAL FORCAST PROJECT
     </Typography>
     <PaidIcon />
     </Box>
      
      
      <Typography sx={{color: 'blue'}} align='center'>Forcast based on past winning numbers</Typography>
      <Typography sx={{color: 'green', fontSize: 20}} align='center'>{message}</Typography>
      {results ?
      <Box sx={{color: 'red', p:3}}>
      <Typography variant='h4' sx={{fontWeight: 'bold'}} align='center'>{results}</Typography>
      <Typography sx={{color: 'blue'}} align='center'>History of past winning numbers</Typography>
      <Box sx={{overflowX: 'hidden', maxWidth: 'xs'}}>
      <Typography variant='h4' sx={{fontWeight: 'bold', fontSize: 18}} align='center'>{resultHistory}</Typography>
      </Box>
      <Typography>Total History Wins = {totalHistory}</Typography>
      <Button onClick={runMatch} variant='contained' fullWidth>RUN MATCH</Button>
      </Box>: <Typography sx={{color: 'red', p:3}} align='center'>No value to show</Typography>
      }
      
     </div>
     
    

    <div>
    <Typography sx={{}}>Enter Previous Winning Numbers Below</Typography>
       
     
     <ul style={{display: 'flex', gap: 2, listStyle: 'none', color: 'green', fontWeight: 'bold', fontSize: 18}}>
     <li><Typography sx={{color: 'blue'}} align='center'>Past Winning Numbers: </Typography> </li>
     <li><span style={{color: 'white'}}>{num1}</span></li>
     <li><span style={{color: 'blue'}}>{num2}</span></li>
     <li><span style={{color: 'white'}}>{num3}</span></li>
     <li><span style={{color: 'blue'}}>{num4}</span></li>
     <li><span style={{color: 'white'}}>{num5}</span></li>
     </ul>
     
    
    {/* { counters? 
     
     <div>
     {counters.map((counter)=>
     <ul style={{display: 'flex', gap: 3, listStyle: 'none', color: 'red', fontWeight: 'bold', fontSize: 18}}>
     <li>Counter: </li>
     <li>{counter}</li>
     
     </ul>)}

     </div>:null
    } */}
    
    <Button onClick={getLottoCounter} 
     variant='contained'
     fullWidth
     >
     PREDICT</Button>

     <form style={{display: 'flex', flexDirection: 'column', width: 'auto'}}>
      <label for='Number 1'>Number 1</label><br/>
      <TextField label="Number 1"  onChange={(e)=>setNum1(e.target.value)} value={num1} name={num1}  required/><br/>
      <label for='Number 2'>Number 2</label><br/>
      <TextField label="Number 2" onChange={(e)=>setNum2(e.target.value)} value={num2} name={num2}  required/><br/>
      <label for='Number 3'>Number 3</label><br/>
      <TextField label="Number 3" onChange={(e)=>setNum3(e.target.value)} value={num3} name={num3}  required/><br/>
      <label for='Number 4'>Number 4</label><br/>
      <TextField label="Number 4" onChange={(e)=>setNum4(e.target.value)} value={num4} name={num4}  required/><br/>
      <label for='Number 1'>Number 5</label><br/>
      <TextField label="Number 5" onChange={(e)=>setNum5(e.target.value)} value={num5} name={num5}  required/>
     </form>
     </div>

{/* 
     <div style={{ marginBottom: 3}}>
     <h2>Enter Previous Machine Numbers</h2>
     <div style={{display: 'flex', color: 'green'}}>
     <h1>{num6}</h1>
     <h1>{num7}</h1>
     <h1>{num8}</h1>
     <h1>{num9}</h1>
     <h1>{num10}</h1>
     </div>

     

     <form>
      <label for='Number 1'>Number 1</label><br/>
      <input onChange={(e)=>setNum6(e.target.value)} value={num6} name={num6}  required/><br/>
      <label for='Number 2'>Number 2</label><br/>
      <input onChange={(e)=>setNum7(e.target.value)} value={num7} name={num7}  required/><br/>
      <label for='Number 3'>Number 3</label><br/>
      <input onChange={(e)=>setNum8(e.target.value)} value={num8} name={num8}  required/><br/>
      <label for='Number 4'>Number 4</label><br/>
      <input onChange={(e)=>setNum9(e.target.value)} value={num9} name={num9}  required/><br/>
      <label for='Number 1'>Number 5</label><br/>
      <input onChange={(e)=>setNum10(e.target.value)} value={num10} name={num10}  required/>
     </form>
     </div> */}
     

     <Button onClick={getLottoCounter} 
     variant='contained'
     fullWidth
     >
     PREDICT</Button>

     

     </main>
     </Box>
    </Grid>

    
    
    </Grid>
  
    <Footer />
    </ThemeProvider>
    
    </div>
  )
}

export default App