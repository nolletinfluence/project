import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import recoveryIcon from '../assets/recoveryIcon.svg';

const Recovery: React.FC = () => {
  const [email, setEmail] = useState('example@gmail.com');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recovery attempt with email:', email);
    // Handle recovery logic here
  };

  return (
    <AuthLayout 
      title="PROJECT" 
      subtitle="Восстановление доступа"
      characterIcon={recoveryIcon}
    >
      <div className="mb-6">
        <p className="text-gray-300 text-sm text-center">
          Для восстановления Вашего персонажа 
          <br />введите электронную почту, которая привязана
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          label="Электронная почта"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="mb-6"
        />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-8">
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Отправить
          </Button>
          
          <Link to="/login">
            <Button type="button" variant="secondary" className="w-full sm:w-auto">
              Назад
            </Button>
          </Link>
        </div>
      </form>

      <div className="mt-8">
        <h3 className="text-gray-300 text-sm font-semibold mb-2 text-center">Внимание</h3>
        <p className="text-gray-400 text-xs text-center">
          Наше письмо может попасть в спам, проверьте все
          <br />разделы вашей почты.
        </p>
      </div>
    </AuthLayout>
  );
};

export default Recovery;