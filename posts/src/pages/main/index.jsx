import React from "react";
import { Posts } from '../../components/Posts'
import { Container } from "../../components/container";
import * as SC from './styles';
import { Typo } from "../../components/Typo";

const INITIAL_POST = [
    {
        id: 1,
        title: 'Post 1',
        image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

    },
    {
        id: 2,
        title: 'Post 2',
        image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

    },
    {
        id: 3,
        title: 'Post 3',
        image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

    },
    

]

export const MainPage = () => {

    return (
        <>
            <Container>
                <Typo>Последние публикации</Typo>
                <Posts posts={INITIAL_POST} />
            </Container>
        </>
    )
}
