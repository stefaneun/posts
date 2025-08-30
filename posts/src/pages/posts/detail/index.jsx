import { useEffect } from "react";
import { useParams } from "react-router";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/container";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./styles";
import { getPostById } from "../../../redux/slices/postsSlice";
import photo from "../../../components/photos/cats.jpg";


export const DetailPostPage = () => {

  const { id } = useParams()
  const postForView = useSelector((state) => {
    return state.posts.postForView;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);


  if (!postForView.post || !postForView.post.hasOwnProperty("id")) {
    return <div>Пост не найден</div>
  }

  if (postForView.loading) {
    return <Container>Загрузка...</Container>;
  }


  const { post } = postForView;

  return (
    <Container>
      <Typo>{post?.title}</Typo>
      {post?.image
        ? <SC.Image src={post.image} alt={post.title} />
        : <SC.Image src={photo} alt={post?.title || "no title"} />}
      <SC.Text>{post?.body || post?.text}</SC.Text>
      <SC.BackLink to="/posts">Назад</SC.BackLink>
    </Container>
  );
};