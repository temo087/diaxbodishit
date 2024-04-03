import  { useReducer } from "react";

const initialValue = {
  count: 0,
};

export default function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return { count: state.count + 1 };
      case "DEC":
        return { count: state.count - 1 };
      case "RES":
        return { count: 0 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  return <div>
    <h1>{state.count}</h1>
    <button onClick={() => dispatch({type: "INC"})}>INC</button>
    <button onClick={() => dispatch({type: "DEC"})}>DEC</button>
    <button onClick={() => dispatch({type: "RES"})}>RES</button>
  </div>;
}