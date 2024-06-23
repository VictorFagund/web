'use server';

import { cookies } from 'next/headers';
import { TAtividadeForm } from '../types';
import { redirect } from 'next/navigation';

type TAtividadeReturn = {
  errors: {
    message?: string;
    nome?: string[];
    responsavel?: string[];
  };
};

// Realiza o post de uma atividade
export async function mutateAtividade(
  previousState: any,
  formData: TAtividadeForm,
): Promise<TAtividadeReturn> {
  const url = `http://localhost:3001/atividade${formData._id ? `/${formData._id}` : ''}`;

  try {
    const response = await fetch(url, {
      method: formData._id ? 'PUT' : 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies().get('token')?.value}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();

      return {
        errors: {
          message: data.error,
        },
      };
    }
  } catch (error) {
    return {
      errors: {
        message: 'Erro ao criar atividade',
      },
    };
  }

  redirect('/atividade');
}
