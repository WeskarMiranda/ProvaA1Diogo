import React, { useState } from 'react';
import { Tarefa } from '../../../interfaces/Tarefa';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import '../css/CadastrarTarefa.css';
import '../css/ListarTarefas.css';

function CadastrarTarefa() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaId, setCategoriaId] = useState("39be53a2-fc09-4b6a-bafa-18a6a23c8f6e"); 

    const navigate = useNavigate();

    function cadastrarTarefa(e: React.FormEvent) {
        e.preventDefault();

        const tarefa: Tarefa = {
            titulo: titulo,
            descricao: descricao,
            categoriaId: categoriaId
        };

        axios.post('http://localhost:5000/api/tarefas/cadastrar', tarefa, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            alert('Cadastro realizado com sucesso');
            navigate('/pages/tarefas/listar');
        })
        .catch(error => {
            console.error('Erro ao cadastrar tarefa:', error);
            alert('Erro ao cadastrar tarefa');
        });
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Tarefa</h1>
                <form onSubmit={cadastrarTarefa}>
                    <label htmlFor='titulo'>Título:</label>
                    <input 
                        type='text' 
                        id='titulo' 
                        name='titulo' 
                        required
                        onChange={(e) => { setTitulo(e.target.value) }} 
                    />

                    <label htmlFor='descricao'>Descrição:</label>
                    <input 
                        type='text' 
                        id='descricao' 
                        name='descricao' 
                        required
                        onChange={(e) => { setDescricao(e.target.value) }} 
                    />

                    <label htmlFor='categoriaId'>Categoria:</label>
                    <select 
                        onChange={(e) => { setCategoriaId(e.target.value) }} 
                        value={categoriaId}
                    >
                        <option value="39be53a2-fc09-4b6a-bafa-18a6a23c8f6e">Lazer</option>
                        <option value="6d091456-5a2f-4b5a-98fc-f1a3b50a627d">Estudos</option>
                        <option value="bfe4e7dc-81e4-4e47-a67b-d4fbf3e124bd">Trabalho</option>
                    </select>

                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default CadastrarTarefa;

