import React from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/container";
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
  {
    id: 4,
    title: 'Post 4',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 5,
    title: 'Post 5',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 6,
    title: 'Post 6',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 7,
    title: 'Post 7',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 8,
    title: 'Post 8',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 9,
    title: 'Post 9',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 10,
    title: 'Post 10',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 11,
    title: 'Post 11',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
  {
    id: 12,
    title: 'Post 12',
    image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg'

  },
]

export const PostsPage = () => {
  return (
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POST} />
    </Container>
  );
};
