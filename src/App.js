import React, {useEffect, useState} from 'react'

function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [num4, setNum4] = useState(0)
  const [num5, setNum5] = useState(0)
  const [num6, setNum6] = useState(0)
  const [num7, setNum7] = useState(0)
  const [num8, setNum8] = useState(0)
  const [num9, setNum9] = useState(0)
  const [num10, setNum10] = useState(0)
  const [results, setResults] = useState([])

  const payload = {
    num1: parseInt(num1),
    num2: parseInt(num2),
    num3: parseInt(num3),
    num4: parseInt(num4),
    num5: parseInt(num5),
    num6: parseInt(num6),
    num7: parseInt(num7),
    num8: parseInt(num8),
    num9: parseInt(num9),
    num10: parseInt(num10),
  }

  const getLottoCounter = async ()=>{
    await fetch('https://web-production-fffb.up.railway.app/api/lotto/', {
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
      console.log(data.message)
      setResults(data.message)
    })
  }

    
  
  return (
    
    <div>

    <div>
     <h2>Enter Previous Winning Numbers</h2>
     {num1}
     {num2}
     {num3}
     {num4}
     {num5}

     

     <form>
      <label for='Number 1'>Number 1</label><br/>
      <input onChange={(e)=>setNum1(e.target.value)} value={num1} name={num1}  required/><br/>
      <label for='Number 2'>Number 2</label><br/>
      <input onChange={(e)=>setNum2(e.target.value)} value={num2} name={num2}  required/><br/>
      <label for='Number 3'>Number 3</label><br/>
      <input onChange={(e)=>setNum3(e.target.value)} value={num3} name={num3}  required/><br/>
      <label for='Number 4'>Number 4</label><br/>
      <input onChange={(e)=>setNum4(e.target.value)} value={num4} name={num4}  required/><br/>
      <label for='Number 1'>Number 5</label><br/>
      <input onChange={(e)=>setNum5(e.target.value)} value={num5} name={num5}  required/>
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
     

     <button onClick={getLottoCounter} style={{backgroundColor: 'green', color: 'white', padding:3, margin: 2}}>
     SHOW COUNTERS</button>

     <div style={{color: 'red'}}>
      <h2>{results}</h2>
     </div>

     


    </div>
  )
}

export default App