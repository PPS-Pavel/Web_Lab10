import React from 'react'

function AddImg(props) {
  return (
    <div class = 'block'>
        <h2>{props.title}</h2>
        <img class = "image" src = {props.img}/>
        <p class = 'par'>{props.text}</p>
    </div>

  )
}

export default AddImg