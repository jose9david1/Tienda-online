import  { Link } from 'react-router-dom'
import './Item.css'
/*
function Item (props) {
  return (
    <div className='contenedor-tarjetas'>
      <img
        className='imagen-articulo'
        src={require(`../../imagenes/${props.imagen}.png`)}
        alt='pantalon'/>


      
    </div>

  )
}*/


const Item = ({ product }) => {
  return (
    <Link to= {`item/${product.id}`}>
      <div className='contenedorDeTarjetas'>
        <div className='tarjetas'>
          <h2>{product.title}</h2>
          <h2>{product.category}</h2>
        </div>
      </div>
    </Link>
  );
};


export default Item