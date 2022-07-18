export const RednerPracticalExp = (props) => {
  return (
    <div>
      {console.log("from RenderGeneralnfo")}
      <ul>
        {props.PracticalExpArray.map((element) => {
          return (
            <div key={Math.random()}>
              <li>{element.companyName}</li>
              <li>{element.position}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
