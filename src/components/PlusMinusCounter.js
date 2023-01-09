import { React, useState } from "react";

export default function PlusMinusCounter() {
  const [count, setCount] = useState(1);
  const removeItem = () => {
    if (count > 0) setCount(count - 1);
  };

  const addItem = () => {
    setCount(count + 1);
  };
  return (
    <div className="">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={removeItem}
          >
            -
          </button>
        </div>
        <input
          value={count}
          type="text"
          className="form-control col-xs-1"
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
          style={{ width: 30, textAlign: "center" }}
          onChange={(event) => setCount(event.target.value)}
        />
        <div className="input-group-prepend">
          <button className="btn btn-secondary" type="button" onClick={addItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
