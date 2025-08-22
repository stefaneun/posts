import { useParams } from "react-router";
import { INITIAL_POST } from "../index";
import { useMemo } from "react";
import { Typo } from "../../../components/Typo";
import { Container } from "../../../components/container";
import * as SC from "./styles";

export const DetailPostPage = () => {

  const { id } = useParams()

  const currentPost = useMemo(() => (INITIAL_POST.find((post) => post.id === Number(id))), [id])

  if (!currentPost) {
    return <div>Пост не найден</div>
  }

  return (
    <Container>
      <Typo>{currentPost.title}</Typo>
      <SC.Image src={currentPost.image} alt={currentPost.title} />
      <SC.Text>{currentPost.text}</SC.Text>
      <SC.BackLink to="/posts">Назад</SC.BackLink>
    </Container>
  );
};
