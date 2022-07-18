import { useState } from "react";
import { RenderGeneralnfo } from "./RenderGeneralnfo";

export let dataArray = [];
const Generalnfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState("");
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    dataArray = [];
    const valueObj = {
      name,
      email,
      phNo,
    };
    dataArray.push(valueObj);

    setCheck(true);
    setName("");
    setEmail("");
    setPhNo("");

    // console.log(dataArray);
    // console.log("data filled");
  };

  const handleEdit = () => {
    dataArray.map((element) => {
      setName(element.name);
      setEmail(element.email);
      setPhNo(element.phNo);
    });
  };

  const handleDataName = (event) => {
    setName(event.target.value);
  };

  const handleDataEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleDataPhone = (event) => {
    setPhNo(event.target.value);
  };

  return (
    <div>
      <form
        className="form-control form-control-lg mb-3"
        onSubmit={handleChange}
      >
        <label>
          Name:
          <input
            className="form-control mb-3  "
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => handleDataName(event)}
          />
        </label>
        <label>
          Email:
          <input
            className="form-control mb-3   "
            type="email"
            name="email"
            placeholder="Enter Your email"
            value={email}
            onChange={(event) => handleDataEmail(event)}
          />
        </label>
        <label>
          Phone Number:
          <input
            className="form-control mb-3  "
            type="text"
            name="number"
            placeholder="Enter Your Ph.Number"
            value={phNo}
            onChange={(event) => handleDataPhone(event)}
          />
        </label>
        <button className="btn btn-success m-3 ">Fill the data</button>
        <button type="button" onClick={handleEdit} className="btn btn-info">
          Edit
        </button>
        {check && <RenderGeneralnfo dataArray={dataArray} />}
      </form>
    </div>
  );
};

export default Generalnfo;
