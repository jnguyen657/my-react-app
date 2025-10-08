type FruitListProps = {
    fruits: string[];
    onAddFruit: () => void;
  };
  
  function FruitList({ fruits, onAddFruit }: FruitListProps) {
    console.log("Fruits state:", fruits); // logs on every re-render
    return (
      <div>
        <h2>Fruit List</h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <button onClick={onAddFruit}>Add Fruit</button>
      </div>
    );
  }
  
  export default FruitList;
  