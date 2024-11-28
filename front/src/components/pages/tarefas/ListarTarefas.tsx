import React, { useEffect, useState } from 'react';
import { Tarefa } from '../../../interfaces/Tarefa';
import axios from 'axios';
import '../css/ListarTarefas.css';

function ListarTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]); 

    const listarTarefa = () => {
        axios.get('http://localhost:5000/api/tarefas/listar')
            .then(resposta => {
                setTarefas(resposta.data); 
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    };

    const alterarStatus = (id: string | undefined) => {
        axios.patch(`http://localhost:5000/api/tarefas/alterar/status/${id}`)
            .then(() => {
                listarTarefa();
            })
            .catch(error => {
                console.error('Erro ao salvar o status:', error);
            });
    };
    
    useEffect(() => {
        listarTarefa();
    }, []);

    const converterDate = (date: string | undefined) => {
        if (!date) return 'Sem Data';
        return new Date(date).toLocaleDateString();
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Criado Em</th>
                        <th>Categorias</th>
                        <th>Status</th>
                        <th>Alterar Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => (
                        <tr key={tarefa.tarefaId}>
                            <td>{tarefa.tarefaId}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{converterDate(tarefa.criadoEm)}</td>
                            <td>{tarefa.categoria?.nome}</td>
                            <td>{tarefa.status}</td>
                            <td><button onClick={() => alterarStatus(tarefa.tarefaId)}>Alterar Status</button></td>        
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarTarefas;

