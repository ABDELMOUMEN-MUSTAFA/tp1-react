export const addProduct = ({ id, name, price, description }) => ({
  type: "ADD_PRODUCT",
  payload: {
    id,
    name,
    price,
    description,
  },
});

export const editProduct = ({ id, name, price, description }) => ({
  type: "EDIT_PRODUCT",
  payload: {
    id,
    name,
    price,
    description,
  },
});

export const deleteProduct = ({ id }) => ({
  type: "DELETE_PRODUCT",
  payload: {
    id,
  },
});
