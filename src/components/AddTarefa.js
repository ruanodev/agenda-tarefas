import React, {useState} from "react";

import Button from './Button';
import "./AddTarefa.css";

const AddTarefa = ({handleTarefaAddition}) => {
    const [inputData, setInputData] = useState("");
    
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

const handleAddTarefaClick  = () => {
    handleTarefaAddition(inputData);
    setInputData("");
}

    return (
        <div className="add-tarefa-container">
          <input 
           onChange={handleInputChange}
           value={inputData}
           className="add-tarefa-input" 
           type="text" 
          />
          <div className="add-tarefa-button-container">
            <Button onClick={handleAddTarefaClick}>Adicionar</Button>
          </div>
        </div>
    );
};

export default AddTarefa;