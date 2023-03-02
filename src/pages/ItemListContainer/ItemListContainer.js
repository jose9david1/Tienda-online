import { data } from '../../data/data';
import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const { categoryName } = useParams();
  console.log(categoryName);

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      if (categoryName) {
        const filteredData = data.filter((producto) => {
          return producto.category === categoryName
        });
        console.log(filteredData);
        res (filteredData)
      } else {
        res (data);
      }      
    }, 1000);
  });
  useEffect(() => {
    getProducts
    .then((res) => setItems(res))
    .catch ((error) => console.log(error));
  },[categoryName])
  return (
    <div>
      <ItemList products={items}/>
    </div>
  );
};

export default ItemListContainer