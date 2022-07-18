import React from "react";
import { useState } from "react";
import { RednerEducation } from "./RednerEducation";

let educationInfoArray = [];

const Education = () => {
  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    educationInfoArray = [];
    const valueObj = {
      schoolName,
      titleStudy,
      date,
    };
    educationInfoArray.push(valueObj);

    setSchoolName("");
    setTitleStudy("");
    setDate("");
    setCheck(true);

    // console.log("data filled");
  };

  const handleEdit = () => {
    educationInfoArray.map((element) => {
      setSchoolName(element.schoolName);
      setTitleStudy(element.titleStudy);
      setDate(element.date);
    });
  };
  return (
    <form className="form-control form-control-lg mb-3" onSubmit={handleChange}>
      <label>
        School Name:
        <input
          className="form-control mb-3  "
          type="text"
          name="School Name"
          placeholder="Enter Your School Name"
          value={schoolName}
          onChange={(event) => setSchoolName(event.target.value)}
        />
      </label>
      <label>
        Title of study:
        <input
          type="text"
          className="form-control mb-3  "
          name="Title of study"
          placeholder="Enter the Title of study"
          value={titleStudy}
          onChange={(event) => setTitleStudy(event.target.value)}
        />
      </label>
      <label>
        Date of study:
        <input
          type="date"
          name="Date of study"
          placeholder="Enter the Title of study"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <button className="btn btn-success m-3 ">Fill the data</button>
      <button type="button" onClick={handleEdit} className="btn btn-info">
        Edit
      </button>
      {check && <RednerEducation educationInfoArray={educationInfoArray} />}
    </form>
  );
};

export default Education;
