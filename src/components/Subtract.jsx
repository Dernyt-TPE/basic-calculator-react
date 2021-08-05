import React, { useState } from 'react'
import './style/add.css'
import { Helmet } from 'react-helmet';


function Sub() {
  var res = 0;
  const [valfirst, setFirstValue] = useState("");
  const [valsecond, setSecondValue] = useState("");
  const [result, setResult] = useState("0");

  const onChangeOne = e => {
    setFirstValue(e.target.value)
  }

  const onChangeTwo = e => {
    setSecondValue(e.target.value)
  }

  const printResult = e => {
    var convert1 = parseFloat(valfirst);
    var convert2 = parseFloat(valsecond);

    setResult(convert1 - convert2);
  }



  return (
    <div className='layout'>
      <Helmet>
        <title>Subtraction</title>
        <meta name='description'
            content='Subtraction of Two Numbers' />
      </Helmet>
      <h1>Subtracting Two Numbers</h1>

      <div className="number-inputs">
        <input className='inp1' value={valfirst} onChange={onChangeOne} type="number" placeholder="0" />
        <input className='inp2' value={valsecond} onChange={onChangeTwo} type="number" placeholder="0" />
      </div>

      <button onClick={printResult}>Subtract Them!</button>



      <h2 className='result'>{result}</h2>

    </div>

  )
}

export default Sub
