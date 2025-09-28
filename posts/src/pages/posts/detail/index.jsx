import React from "react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Typo } from "../../../components/ui/Typo";
import { Container } from "../../../components/ui/container";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./styles";
import { getPostById, showPost, deletePost } from "../../../redux/slices/postsSlice";
import photo from "../../../components/photos/cats.jpg";

export const DetailPostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const postForView = useSelector((state) => state.posts.postForView);
  const { postsList, localPosts } = useSelector((state) => state.posts);

  const { user } = useSelector((state) => state.auth);

  const showEditAndDelete = user && postsList

  const [postForDelete, setPostForDelete] = useState(null);

  const onDeletePost = () => {
    setPostForDelete(null);
    dispatch(deletePost(postForDelete.id));
    navigate("/posts");
  }

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
      {postForDelete && <SC.ModalWrapper>
        <SC.Modal>
          <div>Вы точно хотите удалить пост c id {postForDelete.id}?</div>
          <SC.BtnWrapper>
            <SC.DeleteButton onClick={onDeletePost}>Удалить</SC.DeleteButton>
            <SC.CancelButton onClick={() => setPostForDelete(null)}>Отмена</SC.CancelButton>
          </SC.BtnWrapper>
        </SC.Modal>
      </SC.ModalWrapper>}

      <Typo>{post.title}</Typo>
      {post?.image
        ? <SC.Image src={post.image} alt={post.title} />
        : <SC.Image src={photo} alt={post?.title || "no title"} />}
      <SC.Text>{post?.body || post?.text}</SC.Text>

      <SC.BtnWrapper>
        <SC.BackLink to="/posts">Назад</SC.BackLink>
        {showEditAndDelete && (
          <>
            <SC.EditLink to={`/posts/${post.id}/edit`} >редактировать</SC.EditLink  >
            <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>
          </>
        )}
      </SC.BtnWrapper>
    </Container>


  );
};