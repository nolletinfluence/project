import React, { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import registrationIcon from '../assets/registrationIcon.svg'; // Assuming you have an icon for registration

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: 'InsanePlayer29',
    password: '••••••••••••••••••',
    confirmPassword: '••••••••••••••••••',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthLayout 
      title="PROJECT" 
      subtitle="Регистрация"
      characterIcon={registrationIcon}
    >
      <div className="text-center mb-6">
        <p className="text-gray-300 text-sm">
          Добро пожаловать на Servername, 
          <br />пожалуйста, зарегистрируйте Ваш игровой аккаунт
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          label="Электронная почта"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4"
          hint="Укажите действительный адрес без ошибок, на него вы сможете восстановить персонажа"
        />
        
        <Input
          label="Придумайте пароль"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4"
          hint="Укажите ваш пароль, на этот протокол без использования специальных символов (e, a, !)"
        />

        <Input
          label="Повторите пароль"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mb-6"
        />

        <Checkbox
          label="Я согласен с правилами проекта"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          name="agreeToTerms"
          className="mb-6"
        />

        <div className="flex justify-center mt-8">
          <Button type="submit" variant="primary" className="w-full">
            Далее
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;