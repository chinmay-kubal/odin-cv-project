export const RednerEducation = (props) => {
  return (
    <div>
      {console.log("from RenderGeneralnfo")}
      <ul>
        {props.educationInfoArray.map((element) => {
          return (
            <div key={Math.random()}>
              <li>{element.schoolName}</li>
              <li>{element.titleStudy}</li>
              <li>{element.date}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
