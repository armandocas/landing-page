import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submit`, data);
      toast.success('Dados enviados com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      toast.error('Erro ao enviar os dados.');
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: 'Nome é obrigatório' })} placeholder="Nome" />
        {errors.name && <span>{errors.name.message}</span>}

        <input {...register('email', {
          required: 'Email é obrigatório',
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: 'Email inválido'
          }
        })} placeholder="Email" />
        {errors.email && <span>{errors.email.message}</span>}

        <input {...register('phone', {
          required: 'Telefone é obrigatório',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Telefone inválido'
          }
        })} placeholder="Telefone" />
        {errors.phone && <span>{errors.phone.message}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};