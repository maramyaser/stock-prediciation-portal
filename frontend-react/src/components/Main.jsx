import React from 'react'
import Button from './Button'
const Main = () => {
  return (
    <>
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
         <h1 className='text-light'>Stock Predicition Portal</h1>

         <p className='text-light'>Welcome to the Stock Prediction Portal, a data-driven platform designed to analyze historical market 
          trends and generate intelligent stock predictions using machine learning.This project combines financial data analysis, 
          predictive modeling, and a modern web interface to help users better understand potential market movements. By leveraging advanced 
          algorithms and real-time insights, the platform transforms complex stock data into clear, interactive visualizations.</p>

         <Button text ='Login' class = "btn-outline-info"/>

      </div>
    </div>
    
    
    </>
  )
}

export default Main