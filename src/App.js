import "./App.css";
import { useState, useCallback, useReducer } from "react";
import Main from "./main";
import ProductContext from "./context";

function reducer(state, action) {
  switch (action) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    default:
      break;
  }
}

function App() {
  let [count, dispatch] = useReducer(reducer, 0);

  let [products, setProduct] = useState([
    {
      name: "Banh mi",
      price: 10000,
    },
  ]);

  let addProduct = (name, price) => {
    let product = {
      name,
      price,
    };
    setProduct([...products, product]);
  };

  let deleteProduct = (index) => {
    products.splice(index, 1);
    setProduct([...products]);
  };

  return (
    <ProductContext.Provider
      value={{
        state: products,
        addProduct: addProduct,
        deleteProduct: deleteProduct,
      }}
    >
      <div className="App">
        <h2>{count}</h2>
        <button
          onClick={() => {
            dispatch("UP");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch("DOWN");
          }}
        >
          -
        </button>{" "}
        <br />
        <Main />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
