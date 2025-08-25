import { useEffect } from "react";
import { useParams } from "react-router"; 
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/container";
import { useDispatch, useSelector } from "react-redux";
import * as SC from "./styles";
import { getPost } from "../../../redux/slices/postsSlice";


export const DetailPostPage = () => {

  const { id } = useParams()
  const postForView = useSelector((state) => {
    return state.posts.postForView;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]); 


  if (!postForView) {
    return <div>Пост не найден</div>
  }

  return (
    <Container>
      <Typo>{postForView.title}</Typo>
      <SC.Image src={postForView.image} alt={postForView.title} />
      <SC.Text>{postForView.text}</SC.Text>
      <SC.BackLink to="/posts">Назад</SC.BackLink>
    </Container>
  );
};
