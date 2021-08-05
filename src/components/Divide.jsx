import React, { useState } from 'react'
import './style/add.css'
import { Helmet } from 'react-helmet';


function Divi() {
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

    setResult(convert1 / convert2);
  }


  return (


    <div className='layout'>
      <Helmet>
        <title>Division</title>
        <meta name='description'
            content='Division of Two Numbers' />
      </Helmet>
      <h1>Dividing Two Numbers</h1>

      <div className="number-inputs">
        <input type="number" value={valfirst} onChange={onChangeOne} placeholder="0" />
        <input type="number" value={valsecond} onChange={onChangeTwo} placeholder="0" />
      </div>

      <button onClick={printResult}>Divide Them!</button>

      <h2>{result}</h2>

    </div>


  )
}

export default Divi
