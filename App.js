import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; // gera id automaticamente
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './src/components/Header';
import AddTarefa from './src/components/AddTarefa';
import Tarefas from './src/components/Tarefas';
import './src/App.css';
import TarefaDetails from './src/components/TarefaDetails';


const App = () => {
    const [tarefas, setTarefas] = useState([
      {
        id: '1',
        title: 'Estudar Programação',
        completed: false,
      },
      {
        id: '2',
        title: 'Ler Livros',
        completed: false,
      },
  ]);

  const handleTarefaClick = (tarefaId) => {
      const newTarefas = tarefas.map((tarefa) => {
         if (tarefa.id === tarefaId) return { ...tarefa, completed: !tarefa.completed };
         return tarefa;
       });

       setTarefas(newTarefas)
  }

  const handleTarefaAddition = (tarefaTitle) => {
    const newTarefas = [... tarefas, {
      title: tarefaTitle,
      id: uuidv4(), // gera id automaticamente > npm install uuid
      completed: false,
     },
   ];
     setTarefas(newTarefas);
  };
    
    const handleTarefaDeletion = (tarefaId) => {
      const newTarefas = tarefas.filter((tarefa) => tarefa.id != tarefaId)
      setTarefas(newTarefas)
  }; 

    return (
     <Router>
       <div className="container">
         <Header />
          
           <Route path="/" exact render={() => (
              <>
                <AddTarefa handleTarefaAddition={handleTarefaAddition} />
                <Tarefas tarefas={tarefas} handleTarefaClick={handleTarefaClick} handleTarefaDeletion={handleTarefaDeletion} />
              </>
             )}
           />
          
          <Route path="/:tarefaTitle" exact component={TarefaDetails} />
        
      </div>
           
    </Router>
  );
};

export default App;