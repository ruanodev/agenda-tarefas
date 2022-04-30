import React, { useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid'; // gera id automaticamente
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './src/components/Header';
import AddTarefa from './src/components/AddTarefa';
import Tarefas from './src/components/Tarefas';
import TarefaDetails from './src/components/TarefaDetails';

import './src/App.css';

const App = () => {
    const [tarefas, setTarefas] = useState([]);

      useEffect(() => {
        const fetchTarefas = async () => {
          const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=8");
          setTarefas(data);
        };

          fetchTarefas();

      },[]);

  
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
           <Route path="" exact render={() => (
              <>
                <AddTarefa handleTarefaAddition={handleTarefaAddition} />
                <Tarefas tarefas={tarefas} handleTarefaClick={handleTarefaClick} handleTarefaDeletion={handleTarefaDeletion} />
              </>
             )}
           />
          <Route path="https://ruanodev.github.io/agenda-tarefas/:tarefaTitle" exact component={TarefaDetails} />
          
      </div>
      
    </Router>
  );
};

export default App;