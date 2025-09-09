import React from "react";
import { PostForm } from "../component/postForm/index.jsx";
import { addPost } from "../../../redux/slices/postsSlice.jsx";
import { useDispatch } from "react-redux";

export const AddPostPage = () => {

    const dispatch = useDispatch();
        
    const onSubmitForm = (formData) => {
       dispatch(addPost(formData))
    }

    return (
        <>
            <PostForm title={"Создать новый пост"} onSubmitForm={onSubmitForm} />
        </>
    )
}

