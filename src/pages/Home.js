import React from 'react';
import { Form } from '../components/Forms';
import { Layout } from '../components/Layout';


const Home = () => {
  return (
    <Layout>
      <p>Preencha as informações abaixo para entrar em contato:</p>
      <Form />
    </Layout>
  );
};

export default Home;