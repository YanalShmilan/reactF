const ProductItem = (props) => {
  return (
    <div className="product">
      <img
        className="product-img"
        src={props.product.img}
        alt={props.product.name}
      />
      <h3>Name: {props.product.name}</h3>
      <p>Price: {props.product.price}$</p>
    </div>
  );
};

export default ProductItem;
