import React from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";
import "./TarefaDetails.css";

const TarefaDetails = () => {
    const params = useParams();
        console.log(params);
    
    return (
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="tarefa-details-container">
                <h2>{params.tarefaTitle}</h2>
                <p>
                 teste .. testando 
                 testando ... alo kkkkkkkkkk
                 ddddddd
                </p>
            </div>
        </>
    );
};

export default TarefaDetails;