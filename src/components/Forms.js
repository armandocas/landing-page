import React from 'react';
import { IMaskInput } from 'react-imask';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submit`, data);
      toast.success('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      toast.error('Erro ao enviar os dados. Tente novamente.');
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Nome Completo */}
        <div>
          <label htmlFor="name" className="text-gray-400">Nome Completo</label>
          <input
            {...register('name', {
              required: 'Nome é obrigatório',
              maxLength: { value: 100, message: 'Nome pode ter no máximo 100 caracteres' },
              pattern: { value: /^[a-zA-ZÀ-ſ\s]+$/, message: 'Nome inválido' },
            })}
            id="name"
            placeholder="Jon Neve"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="text-gray-400">Seu Melhor E-mail</label>
          <input
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido',
              },
            })}
            id="email"
            placeholder="seu@email.com"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Telefone */}
        <div>
          <label htmlFor="phone" className="text-gray-400">Telefone</label>
          <IMaskInput
            mask="(00) 00000-0000"
            {...register('phone', {
              required: 'Telefone é obrigatório',
              validate: (value) => value.replace(/\D/g, '').length === 11 || 'Telefone inválido',
            })}
            onAccept={(value) => setValue('phone', value, { shouldValidate: true })}
            placeholder="(11) 99999-9999"
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-all shadow-md"
        >
          Inscrever-se
        </button>
      </form>
    </div>
  );
};
