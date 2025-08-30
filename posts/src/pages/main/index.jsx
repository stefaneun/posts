import React, { useEffect } from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/container";
import * as SC from './styles';
import { Typo } from "../../components/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {
    const dispatch = useDispatch();

    const { post } = useSelector((state) => state.posts.postForView);
    const { posts, loading } = useSelector((state) => state.posts.freshPosts);

    useEffect(() => {
        dispatch(getFreshPosts())
    }, [dispatch]);


    if (posts && posts.length === 0 && !loading) {
        return <>Нет постов</>
    }

    return (
        <Container>
            {loading && <>Загрузка свежих постов...</>}
            
            {posts && posts.length > 0 && (
                <>
                    <Typo>Последние публикации</Typo>
                    <Posts posts={posts} />
                </>
            )}

            {post && (
                <>
                    <Typo>Последние просмотренные пост</Typo>
                    <Posts posts={[post]} />
                </>
            )}
        </Container>
    )
}