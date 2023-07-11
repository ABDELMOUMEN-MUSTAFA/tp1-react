import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {
  validateName,
  validatePrice,
  validateDescription,
} from "../functions/validation";

const AddProduct = ({ setAlert, id, setID }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const isErrors = [];
    isErrors.push(validateName(name, setNameError));
    isErrors.push(validatePrice(price, setPriceError));
    isErrors.push(validateDescription(description, setDescriptionError));

    if (!isErrors.includes(false)) {
      dispatch(addProduct({ id, name, price, description }));
      setID((prevID) => prevID + 1);
      setAlert({ color: "success", message: "Product Added Successfully" });
      navigate("/");
    }
  };

  return (
    <section className="text-white">
      <div className="my-4">
        <Link to="/" className="btn btn-sm btn-secondary">
          <i className="fa fa-arrow-left"></i>
        </Link>
      </div>
      <form onSubmit={handleAddProduct}>
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
            onChange={(e) => setPrice(Number(e.target.value))}
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
            onChange={(e) => setDescription(e.target.value)}
            onFocus={() => setDescriptionError("")}
          />
          {descriptionError && (
            <div className="invalid-feedback">{descriptionError}</div>
          )}
        </div>
        <div className="d-grid">
          <button className="btn btn-success">Add</button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
