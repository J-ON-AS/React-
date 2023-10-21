import React ,{useState} from 'react'

export default function Textform(props) {

  // const [myStyle , setMyStyle] = useState({
  //   color: 'white',
  //   backgroundColor : 'black'
  // })
  const [text , setText] = useState('Enter Text Here')
  // const [btnText, setBtnText] = useState("Enable Light Mode")

  // const toggleStyle = () => {
  //   if(myStyle.color ==='white'){
  //   setMyStyle({
  //     color: 'black',
  //     backgroundColor : 'white'
  //   })
  //   setBtnText("Enable  Dark Mode");
  // }else if(myStyle.color ==='black'){
  //   setMyStyle({
  //     color: 'white',
  //     backgroundColor : 'black'
  //   })
  //   setBtnText("Enable Light Mode");
  // }}
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
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/) ;
    setText(newText.join(" "));
  };
  const handleClearSpace = () =>{
    let newText = "";
    setText(newText);
  };
  const handleCopy = () =>{
    let element = document.querySelector('#myBox');
    element.select();
    navigator.clipboard.writeText(element.value);
  };
  return (
    <>
    <div  className='m-2' >
      <h1>{props.heading}</h1>
      <div   className="mb-3">
      <textarea style={{backgroundColor:props.mode==='dark'?'#6b2673':'white', color:props.mode==='dark'?'white':'black'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
      </div>
      <button className={`btn btn-${props.mode==='dark'?'info':'primary'} mx-2 my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className={`btn btn-${props.mode==='dark'?'info':'primary'} mx-2 my-2`} onClick={handleDownClick}>Convert to LowerCase</button>
      {/* <button onClick={toggleStyle} type='button' className={`btn btn-${props.mode==='dark'?'info':'primary'} mx-2 my-2`}>{btnText}</button> */}
      <button onClick={handleCopy} type='button' className={`btn btn-${props.mode==='dark'?'info':'primary'} mx-2 my-2`}>Copy Text</button>
      <button onClick={handleExtraSpace} type='button' className={`btn btn-${props.mode==='dark'?'info':'primary'} mx-2 my-2`}>Remove Extra Space</button>
      <button onClick={handleClearSpace} type='button' className={`btn btn-${props.mode==='dark'?'info':'primary'} mx-2 my-2`}>Clear Text</button>
    </div>
      <p className='mx-2 my-1'>Number of letters in paragraph : {text.length}  </p>
      <p className='mx-2 my-1'>Number of words in paragraph : {text.split(' ').length} </p>
    </>  
  )
  }
