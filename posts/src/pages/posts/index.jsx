import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/container";
import { Typo } from "../../components/Typo";
import { 
  getPosts, 
  selectAllPosts, 
  selectPostsLoading, 
  selectPostsLoaded, 
  selectPostsError 
} from "../../redux/slices/postsSlice";

export const PostsPage = () => {
  const dispatch = useDispatch();
  
  // Используем селекторы для оптимальной производительности
  const allPosts = useSelector(selectAllPosts);
  const loading = useSelector(selectPostsLoading);
  const loaded = useSelector(selectPostsLoaded);
  const error = useSelector(selectPostsError);

  React.useEffect(() => {
  
    if (!loaded && !loading) {
      dispatch(getPosts());
    }
  }, [dispatch, loaded, loading]);

  if (loading && !loaded) {
    return (
      <Container>
        <div>Loading...</div>
      </Container>
    );
  }

  if (error && !loaded) {
    return (
      <Container>
        <div>Error: {error}</div>
      </Container>
    );
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={allPosts} />
    </Container>
  );
};