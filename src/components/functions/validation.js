export const validateName = (name, setNameError) => {
  if (!name) {
    setNameError("Name is required.");
    return false;
  } else if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
    setNameError(
      "Name should only contain alphabetic characters, numbers and spaces."
    );
    return false;
  }

  setNameError("");
  return true;
};

export const validatePrice = (price, setPriceError) => {
  if (!price) {
    setPriceError("Price is required.");
    return false;
  } else if (price > 1000 || price < 1) {
    setPriceError("Price should only between 1000 and 1 Dollars.");
    return false;
  }

  setPriceError("");
  return true;
};

export const validateDescription = (description, setDescriptionError) => {
  if (!description) {
    setDescriptionError("Description is required.");
    return false;
  } else if (description.length > 300 || description.length < 15) {
    setDescriptionError(
      "Description should only between 500 and 15 characters."
    );
    return false;
  }

  setDescriptionError("");
  return true;
};
