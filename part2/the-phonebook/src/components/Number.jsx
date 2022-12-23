const Number = ({ person, handleDelete }) => {
  
  return (
    <>
      {person.name} {person.number} 
      <button onClick={handleDelete}>delete</button>
      <br />
    </>
  );
}
 
export default Number;

