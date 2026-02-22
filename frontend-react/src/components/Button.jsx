import React from 'react'

const button = (props) => {
  return (
    <>
    <a className={`btn ${props.class}`}>{props.text}</a>
    </>
  )
}

export default button