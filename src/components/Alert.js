import React from 'react'

export default function Alert(props) {
  const captitalize = (word) =>{
    let newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
       props.alert && <div style={{position:'absolute',left:'500px' ,top:'370px'}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{captitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}