import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footerEstilo'>
          <div className='contacto'>
            <h3>Contacto</h3>
            <h5>Argentina.CABA </h5>
            <h5>Bogota 5555-5555555</h5>
            <h5>Correo: Bombastick@gmail.com</h5>
          </div>

          <div className='horario'>
            <h3>Horario</h3>
            <h5>Lunes a Viernes de 7.00 a 17.00hs</h5>
            <h5>Sábados de 8.30hs a 13.30hs.</h5>
          </div>
          
          
    </div>
    <div className='copy'> Copy 2022</div>
    </>
  )
}

export default Footer