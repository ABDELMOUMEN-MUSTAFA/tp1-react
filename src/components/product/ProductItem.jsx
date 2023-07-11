import { Link } from "react-router-dom";

const ProductsItem = ({ product, onHandleDelete }) => {
  return (
    <section className="product p-4 rounded mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <h3>{product.name}</h3>
        <h6 className="price">${product.price}</h6>
      </div>
      <p className="mb-0">{product.description}</p>
      <span className="btn-delete" onClick={() => onHandleDelete(product.id)}>
        <i className="fa fa-trash"></i>
      </span>

      <span className="btn-edit">
        <Link to={`/edit/${product.id}`}>
          <i className="fa fa-edit"></i>
        </Link>
      </span>
    </section>
  );
};

export default ProductsItem;
