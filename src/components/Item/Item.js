import  { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <Link to= {`item/${product.id}`}>
      <div>
        <h2>{product.title}</h2>
        <h2>{product.category}</h2>
      </div>
    </Link>
  );
};

export default Item