import React from 'react'
import "../styles/main.css"

const Footer = () => {
  return (
    <div className='row'>
        <div className="footer">
            <div className='day'>
                <p>Pazartesi</p>
                <p>11/15 derece</p>
            </div>
            <div className='day'><p>Salı</p></div>
            <div className='day'><p>Çarşamba</p></div>
            <div className='day'><p>Perşembe</p></div>
            <div className='day'><p>Cuma</p></div>
            <div className='day'><p>Cumartesi</p></div>
        </div>
    </div>
  )
}

export default Footer