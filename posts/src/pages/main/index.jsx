import React, { useEffect } from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/container";
import * as SC from './styles';
import { Typo } from "../../components/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getFreshPosts } from "../../redux/slices/postsSlice";


export const MainPage = () => {

    const dispatch = useDispatch();
    
    const postForView = useSelector((state) => state.posts.postForView);
    const freshPosts = useSelector((state) => state.posts.freshPosts);

    useEffect(() => {
        dispatch(getFreshPosts())
    }, [dispatch]);

    if (freshPosts.length === 0) {
        return <>Нет постов</>
    }

    return (

        <Container>
            <Typo>Последние публикации</Typo>
            <Posts posts={freshPosts} />
            {postForView && (
                <>
                    <Typo>Последние просмотренные пост</Typo>
                    <Posts posts={[postForView]} />
                </>
            )}
        </Container>
    )
}
