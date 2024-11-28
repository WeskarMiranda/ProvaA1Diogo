import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import CadastrarTarefa from './components/pages/tarefas/CadastrarTarefa';
import ListarTarefas from './components/pages/tarefas/ListarTarefas';
import ListarTarefasNaoConluidas from './components/pages/tarefas/ListarTarefasNaoConluidas';
import ListarTarefasConcluidas from './components/pages/tarefas/ListarTarefasConcluidas';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/pages/tarefas/cadastrar">Cadastro de Tarefa</Link>
            </li>
            <li>
              <Link to="/pages/tarefas/listar">Lista de Tarefas</Link>
            </li>
            <li>
              <Link to="/pages/tarefas/naoconcluidas">Lista de Tarefas Não Concluídas</Link>
            </li>
            <li>
              <Link to="/pages/tarefas/concluidas">Lista de Tarefas Concluídass</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/pages/tarefas/cadastrar' element={<CadastrarTarefa />}></Route>
          <Route path='/pages/tarefas/listar' element={<ListarTarefas />}></Route>
          <Route path='/pages/tarefas/naoconcluidas' element={<ListarTarefasNaoConluidas />}></Route>
          <Route path='/pages/tarefas/concluidas' element={<ListarTarefasConcluidas />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;