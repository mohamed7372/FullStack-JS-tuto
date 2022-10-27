const PersonForm = ({handleNewPhone, newName, setNewName, newNumber, setNewNumber}) => {
    return (  
        <form onSubmit={handleNewPhone}>
            <div>
            name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
            </div>
            <div>
            number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    );
}
 
export default PersonForm;