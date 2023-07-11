import ProductItem from "./ProductItem";
import { deleteProduct } from "./../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../common/Alert";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ alert, setAlert }) => {
  const products = useSelector((products) => products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  useEffect(() => {
    // After 1.5s Remove the alert
    setTimeout(() => setAlert({}), 1500);
  }, [setAlert]);

  return (
    <>
      <div className="my-4">
        <Link to="/add" className="btn btn-sm btn-warning">
          <i className="fa fa-plus"></i>
        </Link>
      </div>
      {Object.keys(alert).length > 0 && (
        <Alert color={alert.color} message={alert.message} />
      )}
      {products.length === 0 ? (
        <div className="alert alert-info">
          There is no Products, Click the button above to add them.
        </div>
      ) : (
        products.map((p) => (
          <ProductItem onHandleDelete={handleDelete} product={p} key={p.id} />
        ))
      )}
    </>
  );
};

export default ProductsList;
