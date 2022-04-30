import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Button from "./Button";
import "./TarefaDetails.css";

const TarefaDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
        
    
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="tarefa-details-container">
                <h2>{params.tarefaTitle}</h2>
                <p>
                 Conteudo da tarefa
                 Conteudo da tarefa
                 Conteudo da tarefa
                 Conteudo da tarefa
                 Conteudo da tarefa
                 Conteudo da tarefa
               </p>
            </div>
        </>
    );
};

export default TarefaDetails;