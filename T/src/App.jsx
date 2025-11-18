// Importa o hook useState do React para gerenciar estados
import { useState } from 'react'

// Esses imports são padrões do template Vite + React, mas não estão sendo usados aqui
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Importa o arquivo de estilos CSS
import './App.css'

// Componente principal da aplicação
function App() {
  // Estado que guarda a lista de tarefas (inicialmente vazio)
  const [tarefas, setTarefas] = useState([]);
  // Estado que guarda o texto digitado no input
  const [input, setInput] = useState("");

  // Função para adicionar uma nova tarefa
  function adicionarTarefa() {
    if (input) { // só adiciona se o campo não estiver vazio
      setTarefas([...tarefas, input]); // cria um novo array com as tarefas antigas + nova
      setInput(""); // limpa o campo de texto
    }
  }

  // Função para remover uma tarefa pelo índice
  function removerTarefa(index) {
    // filter cria um novo array sem o item que tem o índice passado
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas); // atualiza o estado com a lista nova
  }

  // JSX que define a interface do componente
  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>

      {/* Campo de texto controlado pelo estado "input" */}
      <input
        value={input} // valor do input vem do estado
        onChange={e => setInput(e.target.value)} // atualiza o estado conforme o usuário digita
        placeholder="Nova tarefa"
      />

      {/* Botão que chama a função adicionarTarefa */}
      <button onClick={adicionarTarefa}>Adicionar</button>

      {/* Lista de tarefas renderizada dinamicamente */}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            {/* Botão de remover que chama removerTarefa passando o índice */}
            <button id="shico" onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporta o componente para ser usado em main.jsx
export default App;