// Cadastro.js
import React, { useState } from 'react';
import ButtonPrimary from './Buttonprimary';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para validação de email
  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  // Função para validação de senha
  const validarSenha = (senha) => {
    return senha.length >= 6; // Exemplo de senha com no mínimo 6 caracteres
  };

  const handleCadastro = (event) => {
    event.preventDefault();

    if (!nome || !email || !senha) {
      alert('Preencha todos os campos.');
      return;
    }

    if (!validarEmail(email)) {
      alert('Email inválido.');
      return;
    }

    if (!validarSenha(senha)) {
      alert('Senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Aqui você pode fazer o envio para a API, por exemplo.
    console.log('Dados cadastrados:', { nome, email, senha });
    alert('Cadastro realizado com sucesso!');

    // Limpar campos
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div style={styles.container}>
      <h1 className='text-blue-700 text-[50px] font-bold text-center py-8 flex justify-center'>CADASTRO</h1>

      <form onSubmit={handleCadastro}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Nome</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            type="password"
            placeholder="digite o seu numero "
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <ButtonPrimary />
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
    fontSize: '14px',
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
