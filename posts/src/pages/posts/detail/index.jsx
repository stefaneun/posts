import React from "react";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/container";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./styles";
import { getPostById, showPost, selectAllPosts } from "../../../redux/slices/postsSlice";
import photo from "../../../components/photos/cats.jpg";

export const DetailPostPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const postForView = useSelector((state) => state.posts.postForView);
  const { postsList, localPosts } = useSelector((state) => state.posts);

  
  const allPosts = useMemo(() => {
    return [...(localPosts || []), ...(postsList || [])];
  }, [postsList, localPosts]);

  useEffect(() => {
    const initId = Number(id);
    const findedPost = allPosts.find(item => item.id === initId);

    if (findedPost) {
      dispatch(showPost(findedPost));
    }
    else if (!isNaN(initId)) {
      dispatch(getPostById(initId));
    }
  }, [allPosts, id, dispatch]);

  if (postForView.error) {
    return <Container>Ошибка: {postForView.error}</Container>;
  }

  if (postForView.loading) {
    return <Container>Загрузка...</Container>;
  }

  if (!postForView.post) {
    return <Container>Пост не найден</Container>;
  }

  const { post } = postForView;

  return (
    <Container>
      <Typo>{post.title}</Typo>
      {post?.image
        ? <SC.Image src={post.image} alt={post.title} />
        : <SC.Image src={photo} alt={post?.title || "no title"} />}
      <SC.Text>{post?.body || post?.text}</SC.Text>
      <SC.BackLink to="/posts">Назад</SC.BackLink>
      <SC.EditLink to={`/posts/${post.id}/edit`} >редактировать</SC.EditLink  >
    </Container>
  );
};