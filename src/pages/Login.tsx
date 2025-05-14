import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import loginIcon from '../assets/loginIcon.svg';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: 'InsanePlayer29',
    password: '••••••••••••••••••',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt', formData);
  };

  return (
    <AuthLayout
      title="PROJECT"
      subtitle="Авторизация в аккаунте"
      characterIcon={loginIcon}
    >
      <form onSubmit={handleSubmit}>
        <Input
          label="Ваш логин"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mb-4"
        />
        
        <Input
          label="Пароль"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mb-6"
        />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-8">
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Далее
          </Button>
          
          <Link to="/recovery">
            <Button type="button" variant="secondary" className="w-full sm:w-auto">
              Восстановить
            </Button>
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
