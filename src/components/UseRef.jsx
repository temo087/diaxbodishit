import { useRef } from "react";

export default function UseRef() {
  const divRef = useRef(null);
  return (
    <div>
      <div
        style={{ width: "40px", height: " 40px", backgroundColor: "red" }}
        ref={divRef}
      ></div>
      <button
        onClick={() => {
            console.log("assd");
          divRef.current.style.backgroundColor = "green"
          divRef.current.style.width = "100px"
          divRef.current.style.height = "100px"
        }}
      >
      
        Click hti
      </button>
    </div>
  );
}
