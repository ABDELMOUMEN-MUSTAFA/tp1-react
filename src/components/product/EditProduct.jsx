import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { editProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  validateName,
  validatePrice,
  validateDescription,
} from "../functions/validation";

const EditProduct = ({ setAlert }) => {
  const { id } = useParams();
  const products = useSelector((products) => products);
  const product = products.find((p) => p.id === parseInt(id));
  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [description, setDescription] = useState(
    product ? product.description : ""
  );

  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (event, id) => {
    event.preventDefault();

    const isErrors = [];
    isErrors.push(validateName(name, setNameError));
    isErrors.push(validatePrice(price, setPriceError));
    isErrors.push(validateDescription(description, setDescriptionError));

    if (!isErrors.includes(false)) {
      dispatch(editProduct({ id, name, price, description }));
      setAlert({ color: "success", message: "Product Edited Successfully" });
      navigate("/");
    }
  };

  if (!product) {
    return (
      <div className="alert alert-danger text-center">
        The Product With <strong>#{id}</strong> Not Found
      </div>
    );
  }

  return (
    <section className="text-white">
      <div className="my-4">
        <Link to="/" className="btn btn-sm btn-secondary">
          <i className="fa fa-arrow-left"></i>
        </Link>
      </div>
      <div className="alert alert-info text-center mb-3">
        You Are About To Edit The Product <strong>#{product.id}</strong>
      </div>
      <form onSubmit={(event) => handleEdit(event, parseInt(product.id))}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            className={`form-control ${nameError && "is-invalid"}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setNameError("")}
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            placeholder="Price"
            type="number"
            name="price"
            id="price"
            className={`form-control ${priceError && "is-invalid"}`}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            onFocus={() => setPriceError("")}
          />
          {priceError && <div className="invalid-feedback">{priceError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            placeholder="Description"
            name="description"
            id="description"
            className={`form-control ${descriptionError && "is-invalid"}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            onFocus={() => setDescriptionError("")}
          />
          {descriptionError && (
            <div className="invalid-feedback">{descriptionError}</div>
          )}
        </div>
        <div className="d-grid">
          <button className="btn btn-info">Edit</button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
