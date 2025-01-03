import React from 'react';
import { Form } from '../components/Forms';

const Home = () => {
  const ano = new Date();
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white">Inscreva-se Agora</h1>
          <p className="text-gray-400 mt-2">
            Preencha os dados abaixo para aumentar suas chances na loteria!
          </p>
        </header>
        <Form />
        <footer className="text-center text-gray-500 mt-4">
          <p>&copy; {ano.getFullYear()} </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
