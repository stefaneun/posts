import React, { useState } from "react";
import { Container } from "../../../../components/container";
import * as SC from "./styles";
import { Typo } from "../../../../components/Typo";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../redux/slices/postsSlice";

const DEFAULT_FORM_DATA = {
    title: "",
    body: ""
};

export const PostForm = () => {
    const [formData, setFormData] = useState(
        DEFAULT_FORM_DATA
    );

    const dispatch = useDispatch();

    const onChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(formData))
        setFormData(DEFAULT_FORM_DATA);
    };

    const disabled = !formData.title || !formData.body;

    return (
        <Container>
            <Typo>Создать новый пост</Typo>
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
                    />
                </SC.field>
                <SC.Button type="submit" disabled={disabled}>Создать пост</SC.Button>
            </SC.formContainer>
        </Container>
    );
};