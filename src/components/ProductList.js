import products from '../products';
import ProductItem from './ProductItem';

const ProductList = () => {
  const productsList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return <div className="parent">{productsList} </div>;
};

export default ProductList;
