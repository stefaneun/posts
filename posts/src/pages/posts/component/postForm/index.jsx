import React, { useState, useEffect } from "react";
import { Container } from "../../../../components/container";
import * as SC from "./styles";
import { Typo } from "../../../../components/Typo";

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
            <SC.formContainer onSubmit={onSubmit}>
                <SC.Title>Заголовок:</SC.Title>
                <SC.field>
                    <SC.Input
                        type="text"
                        name="title"
                        placeholder="Напишите что-нибудь..."
                        value={formData.title}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        rows={1}
                        disabled={isSubmitting}
                    />
                </SC.field>
                <SC.Title>Содержимое:</SC.Title>
                <SC.field>
                    <SC.textArea
                        name="body"
                        placeholder="Однажды я пошел в лес за грибами..."
                        rows={10}
                        cols={30}
                        value={formData.body}
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                        disabled={isSubmitting}
                    />
                </SC.field>
                <SC.Button
                    type="submit"
                    disabled={disabled}
                >
                    {isSubmitting ? 'Сохранение...' : 'Сохранить'}
                </SC.Button>
            </SC.formContainer>
        </Container>
    );
};