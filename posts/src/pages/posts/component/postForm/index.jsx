import React, { useState, useEffect } from "react";
import { Container } from "../../../../components/ui/container";
import * as SC from "./styles";
import { Typo } from "../../../../components/ui/Typo";
import { Form } from "../../../../components/ui/Form";
import { Field } from "../../../../components/ui/Field";
import { Input } from "../../../../components/ui/input";
import { SubmitButton } from "../../../../components/ui/SubmitButton";

const DEFAULT_FORM_DATA = {
    title: "",
    body: ""
};

export const PostForm = ({ title, onSubmitForm, defaultFormData, isEditing = false }) => {
    const [formData, setFormData] = useState(defaultFormData ? defaultFormData : DEFAULT_FORM_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (defaultFormData) {
            setFormData(defaultFormData);
        }
    }, [defaultFormData]);

    const onChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (disabled || isSubmitting) return;

        setIsSubmitting(true);

        try {
            await onSubmitForm(formData);

            if (!isEditing) {
                setFormData(DEFAULT_FORM_DATA);
            }
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const disabled = !formData.title.trim() || !formData.body.trim() || isSubmitting;

    return (
        <Container>
            <Typo>{title}</Typo>
            <Form onSubmit={onSubmit}>
                <SC.Title>Заголовок:</SC.Title>
                <Field>
                    <Input
                        type="text"
                        name="title"
                        placeholder="Напишите что-нибудь..."
                        value={formData.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        rows={1}
                        disabled={isSubmitting}
                    />
                </Field>
                <SC.Title>Содержимое:</SC.Title>
                <Field>
                    <SC.textArea
                        name="body"
                        placeholder="Однажды я пошел в лес за грибами..."
                        rows={10}
                        cols={30}
                        value={formData.body}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        disabled={isSubmitting}
                    />
                </Field>
                <SubmitButton
                    type="submit"
                    disabled={disabled}
                >
                    {isSubmitting ? 'Сохранение...' : 'Сохранить'}
                </SubmitButton>
            </Form>
        </Container>
    );
};