import React ,{useState} from 'react'

export default function Textform(props) {

  const [myStyle , setMyStyle] = useState({
    color: 'white',
    backgroundColor : 'black'
  })
  const [text , setText] = useState('Enter Text Here')
  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleStyle = () => {
    if(myStyle.color ==='white'){
    setMyStyle({
      color: 'black',
      backgroundColor : 'white'
    })
    setBtnText("Enable  Dark Mode");
  }else if(myStyle.color ==='black'){
    setMyStyle({
      color: 'white',
      backgroundColor : 'black'
    })
    setBtnText("Enable Light Mode");
  }}
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) =>{
    setText(event.target.value)
  };
  return (
    < >
    <div style={myStyle} className='p-5 m-2' >
      <h1>{props.heading}</h1>
      <div  style={myStyle} className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary" onClick={handleDownClick}>Convert to LowerCase</button>
    </div>
      <p class='mx-2 my-1'>Number of letters in paragraph : {text.length}  </p>
      <p class='mx-2 my-1'>Number of words in paragraph : {text.split(' ').length} </p>

      <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btnText}</button>
  
    </>
  )
  }
