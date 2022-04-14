import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import './Tarefa.css';

const Tarefa = ({tarefa, handleTarefaClick, handleTarefaDeletion}) => {
   const history = useHistory();
   const handleTarefaDetailsClick = () => {
      history.push(`/${tarefa.title}`)
   }


    return (
     <div className="tarefa-container" style={tarefa.completed ? {borderLeft:  '6px solid chartreuse'} : {} } >
        <div className='tarefa-title' onClick={() => handleTarefaClick(tarefa.id)}>
           {tarefa.title}
        </div>
        <div className='buttons-container'>
            <button 
               className='remove-tarefa-button' 
               onClick={() => handleTarefaDeletion(tarefa.id)}><CgClose/>
            </button>
            <button 
               className='see-tarefa-details-button' onClick={handleTarefaDetailsClick}><CgInfo/>
            </button>
       </div>

     </div>
    )
  };

export default Tarefa;