import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Container } from "../../components/ui/container";
import { Typo } from "../../components/ui/Typo";
import { Form } from "../../components/ui/Form";
import { Field } from "../../components/ui/Field";
import { Input } from "../../components/ui/input";
import { SubmitButton } from "../../components/ui/SubmitButton";
import { Title } from "../posts/component/postForm/styles";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

export const AuthPage = () => {

  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const disabled = !formData.email || !formData.password || isSubmitting;

  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      const users = JSON.parse(localStorage.getItem('users'));

      if (!users) {
        alert("Пользователь не найден, пожалуйста зарегистрируйтесь");
        return
      }


      const currentUser = users.find(user => user.email === formData.email && user.password === formData.password);

      if (!currentUser) {
        alert("Неверный email или пароль");
        return;
      }

      dispatch(login(currentUser));
      navigate('/posts');

    }

    catch (error) {
      console.error("error", error);
    }

  }

  return (
    <>
      <Container>
        <Typo>
          Авторизация
        </Typo>

        <Form onSubmit={onSubmit}>
          <Title>Введите ваши данные:</Title>
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
          <SubmitButton type="submit" disabled={disabled}>Войти</SubmitButton>
        </Form>

      </Container >
    </>
  );
};
