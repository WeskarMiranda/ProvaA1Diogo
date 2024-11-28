import React, { useEffect, useState } from 'react';
import { Tarefa } from '../../../interfaces/Tarefa';
import axios from 'axios'; 
import '../css/ListarTarefas.css';

function ListarTarefasConcluidas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tarefas/concluidas')
            .then(resposta => {
                setTarefas(resposta.data); 
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    }, []); 

    const converterDate = (date: string | undefined) => {
        if (!date) return 'Sem Data';
        return new Date(date).toLocaleDateString();
    };

    return (
        <div>
            <h1>Lista de Tarefas Concluídas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Criado Em</th>
                        <th>Categoria</th>
                        <th>Status</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarTarefasConcluidas;
