import React, { use } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/container";
import { Typo } from "../../components/Typo";
import { useSelector } from "react-redux";

export const PostsPage = () => {

  const posts = useSelector((state) => {
    return state.posts.postsList;
  });


  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={posts} />
    </Container>
  );
};
