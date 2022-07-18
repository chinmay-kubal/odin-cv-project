const DisplayHere = ({ data }) => {
  return (
    <div>
      {data.map((element) => {
        return <p key={Math.random()}>{element}</p>;
      })}
    </div>
  );
};

export default DisplayHere;
