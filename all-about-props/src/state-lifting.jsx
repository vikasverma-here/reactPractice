function Lifting(prop) {
    return (
      <div>
        <input 
          type="text" 
          onChange={(e) => prop.valchange(e.target.value)} // Use prop.valchange to update the state
        />
        <p>child: {prop.val}</p> {/* Displaying the value from prop.val */}
      </div>
    );
  }
export default Lifting