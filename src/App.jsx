import React, { useState } from "react";
import "./App.css";

const FruitList = () => {
  const [fruits, setFruits] = useState(["Ananas", "Mangue", "Orange", "Papaye"]);
  const [newFruit, setNewFruit] = useState("");
  const [search, setSearch] = useState("");

  const addFruit = () => {
    if (newFruit && !fruits.includes(newFruit)) {
      setFruits([...fruits, newFruit]);
      setNewFruit("");
    }
  };

  const deleteFruit = (fruitToDelete) => {
    setFruits(fruits.filter((fruit) => fruit !== fruitToDelete));
  };

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">  LISTE DES FRUITS</h1>
      <input
        className="search-bar"
        placeholder="Rechercher un fruit"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="add-section">
        <input
          className="input-fruit"
          placeholder="Ajouter un fruit"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
        />
        <button className="add-button" onClick={addFruit}>
          Ajouter
        </button>
      </div>
      <table className="fruit-table">
        <thead>
          <tr>
            <th>Nom du fruit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredFruits.map((fruit, index) => (
            <tr key={index}>
              <td>{fruit}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => deleteFruit(fruit)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitList;
