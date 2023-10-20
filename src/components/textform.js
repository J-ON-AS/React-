import React ,{useState} from 'react'

export default function Textform(props) {

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) =>{
    setText(event.target.value)
  };
  const [text , setText] = useState('Enter Text Here')
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="7"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary" onClick={handleDownClick}>Convert to LowerCase</button>
    </div>
      <p class='mx-2 my-1'>Number of letters in paragraph : {text.length}  </p>
      <p class='mx-2 my-1'>Number of words in paragraph : {text.split(' ').length} </p>
  
    </>
  )
}
