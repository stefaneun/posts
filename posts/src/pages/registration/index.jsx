import React from "react";
import { Typo } from "../../components/ui/Typo";
import { Container } from "../../components/ui/container";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/input";
import { Form } from "./styles";
import { SubmitButton } from "../../components/ui/SubmitButton";
import { Title } from "../posts/component/postForm/styles";
import { useNavigate } from "react-router";

export const RegistrationPage = () => {
  const [formData, setFormData] = React.useState({ username: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const disabled = !formData.username || !formData.email || !formData.password || isSubmitting;
  const userId = Date.now();

  const navigate = useNavigate();

  const newUser = {
    id: userId, ...formData
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const users = JSON.parse(localStorage.getItem('users'));
      if (!users) {
        localStorage.setItem('users', JSON.stringify([newUser]));
        alert("Регистрация прошла успешно, теперь вы можете войти в систему");
        setFormData({ username: '', email: '', password: '' });
        setIsSubmitting(false);
        navigate('/auth');
        return;
      }

      if (users.find(user => user.email === formData.email)) {
        alert("Пользователь с таким email уже существует");
        setIsSubmitting(false);
        return;
      }

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert("Регистрация прошла успешно, теперь вы можете войти в систему");
      setFormData({ username: '', email: '', password: '' });
      setIsSubmitting(false);
      navigate('/auth');
    } catch (error) {
      setIsSubmitting(false);
      console.error("error", error);
    }
  };

  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Typo>Регистрация</Typo>
      <Form onSubmit={onSubmit}>
        <Title>Введите ваши данные:</Title>
        <Field>
          <Input
            type="text"
            name="username"
            placeholder="имя пользователя"
            value={formData.username}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            rows={1}
            disabled={isSubmitting}
          />
        </Field>
        <Field>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            rows={1}
            disabled={isSubmitting}
            autoComplete="off"
          />
        </Field>
        <Field>
          <Input
            type="password"
            name="password"
            placeholder="пароль"
            value={formData.password}
            onChange={(e) => onChange(e.target.name, e.target.value)}
            rows={1}
            disabled={isSubmitting}
            autoComplete="off"
          />
        </Field>
        <SubmitButton type="submit" disabled={disabled}>Зарегистрироваться</SubmitButton>
      </Form>
    </Container>
  );
};
