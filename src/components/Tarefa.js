import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';

import './Tarefa.css';

const Tarefa = ({tarefa, handleTarefaClick, handleTarefaDeletion}) => {
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
               className='see-tarefa-details-button'><CgInfo/>
            </button>
       </div>

     </div>
    )
  };

export default Tarefa;