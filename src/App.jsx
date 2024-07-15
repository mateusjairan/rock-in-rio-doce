import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; // Corrigido o caminho do import
import './App.css';
import Header from './assets/componentes/Header'; // Corrigido o nome do componente

function App() {
  const [count, setCount] = useState(0);
  let gato = {
    nome: "Cleitinho",
    profissao: "Pet da casa"
  };

  return (
    <>
      <Header titulo="Titulo" subTitulo="Titulo 2" />
      <Header titulo="Primeiro Parâmetro" subTitulo="Segundo Parametro" />
      <Header titulo={gato.nome} subTitulo={gato.profissao} />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
