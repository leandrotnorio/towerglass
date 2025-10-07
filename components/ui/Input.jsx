// Cadastro.js
import React, { useState } from 'react';
import ButtonSecundary from './Buttonsecundary';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  // Função para validação de email
  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  // Função para validação de senha
  const validarNumber = (number) => {
    //number.length >= 6;
    const regex = /^[0-9]+$/; // Somente números
    return regex.test(number);
    // Exemplo de senha com no mínimo 6 caracteres
  };

  const handleCadastro = (event) => {
    event.preventDefault();

    if (!name || !email || !number) {
      alert('Preencha todos os campos.');
      return;
    }

    if (!validarEmail(email)) {
      alert('Email inválido.');
      return;
    }

    if (!validarNumber(number)) {
      alert('O número deve ter no mínimo 11 caracteres.');
      return;
    }

    // Aqui você pode fazer o envio para a API, por exemplo.
    console.log('Dados cadastrados:', { name, email, number });
    alert('Cadastro realizado com sucesso!');

    // Limpar campos
    setName('');
    setEmail('');
    setNumber('');
  };

  return (
    <div className="flex flex-col items-center p-5 max-w-[400px] mx-auto border border-gray-300 rounded-lg" >
      <h1 className='text-blue-700 text-[50px] font-bold text-center py-8 flex justify-center'>CADASTRO</h1>

      <form onSubmit={handleCadastro}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Nome</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            placeholder=" Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Número</label>
          <input
            style={styles.input}
            type="tel"
            placeholder="digite o seu numero "
            value={number}
            onChange={(e) => {
              // Verifica se o input é um número antes de definir o estado
              const value = e.target.value;
              if (/^[0-9]*$/.test(value)) {
                setNumber(value);
              }
            }}

          />
        </div>
          <ButtonSecundary/>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  titulo: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Cadastro;
