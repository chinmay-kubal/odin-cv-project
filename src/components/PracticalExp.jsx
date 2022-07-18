import React from "react";
import { useState } from "react";
import { RednerPracticalExp } from "./RednerPracticalExp";

let PracticalExpArray = [];

const PracticalExp = () => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    PracticalExpArray = [];
    const valueObj = {
      companyName,
      position,
    };
    PracticalExpArray.push(valueObj);

    setCompanyName("");
    setPosition("");
    setCheck(true);
  };

  const handleEdit = () => {
    PracticalExpArray.map((element) => {
      setCompanyName(element.companyName);
      setPosition(element.position);
    });
  };

  return (
    <form className="form-control form-control-lg mb-3" onSubmit={handleChange}>
      <label>
        Company Name:
        <input
          className="form-control mb-3  "
          type="text"
          name="Company Name"
          placeholder="Enter Company Name"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
      </label>
      <label>
        Positoin Title:
        <input
          className="form-control mb-3"
          type="text"
          name="Positoin Title"
          placeholder="Enter the Positoin Title"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
      </label>
      <button className="btn btn-success m-3 ">Fill the data</button>
      <button type="button" onClick={handleEdit} className="btn btn-info">
        Edit
      </button>
      {check && <RednerPracticalExp PracticalExpArray={PracticalExpArray} />}
    </form>
  );
};

export default PracticalExp;
