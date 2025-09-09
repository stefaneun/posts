import React, { useEffect } from "react";
import { PostForm } from "../component/postForm/index.jsx";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/slices/postsSlice.jsx";
import { editPost } from "../../../redux/slices/postsSlice.jsx";

export const EditPostPage = () => {
  const { id } = useParams();
  const intId = Number(id);
  const dispatch = useDispatch();

  const postsList = useSelector((state) => state.posts.postsList);
  const localPosts = useSelector((state) => state.posts.localPosts);
  const postForView = useSelector((state) => state.posts.postForView);

  const { post, loading, error } = postForView;

  const findedPost = post ||
    postsList?.find(item => item.id === intId) ||
    localPosts?.find(item => item.id === intId);

  useEffect(() => {
    if (!findedPost && !loading) {
      dispatch(getPostById(intId));
    }
  }, [findedPost, loading, intId, dispatch]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!findedPost) {
    return <div>Пост не найден</div>;
  }

  const onSubmitForm = (formData) => {
    dispatch(editPost({
      ...formData,
      id: intId
    }));
  }

  return (
    <div>
      <PostForm
        title={`Редактировать пост - ${findedPost.title}`}
        onSubmitForm={onSubmitForm}
        defaultFormData={findedPost}
        isEditing={true}
      />
    </div>
  );
};