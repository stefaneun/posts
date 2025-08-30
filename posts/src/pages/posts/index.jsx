import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/container";
import { Typo } from "../../components/Typo";
import { getPosts } from "../../redux/slices/postsSlice";

export const PostsPage = () => {
  const dispatch = useDispatch();


  const { postsList, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (!postsList) {
    return <Container>No posts available</Container>;
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={postsList || []} />
    </Container>
  );
};    