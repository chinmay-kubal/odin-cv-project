export const RenderGeneralnfo = (props) => {
  return (
    <div>
      {console.log("from RenderGeneralnfo")}
      <ul>
        {props.dataArray.map((element) => {
          return (
            <div key={Math.random()}>
              <li>{element.name}</li>
              <li>{element.email}</li>
              <li>{element.phNo}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
