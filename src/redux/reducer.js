export default function reducer(
  state = [
    {
      id: 1,
      name: "Playstation 4 Pro",
      price: 450,
      description:
        "Incredible games & non-stop entertainment. The PS4 console, delivering awesome gaming power.",
    },
  ],
  action
) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "EDIT_PRODUCT":
      return state.map((p) => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            name: action.payload.name,
            price: action.payload.price,
            description: action.payload.description,
          };
        }
        return p;
      });
    case "DELETE_PRODUCT":
      return state.filter((p) => p.id !== action.payload.id);
    default:
      return state;
  }
}
