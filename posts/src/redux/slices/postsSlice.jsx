import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    postsList: [
        {
            id: 12,
            title: 'Post 12',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 11,
            title: 'Post 11',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 10,
            title: 'Post 10',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 9,
            title: 'Post 9',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 8,
            title: 'Post 8',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 7,
            title: 'Post 7',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 6,
            title: 'Post 6',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 5,
            title: 'Post 5',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 4,
            title: 'Post 4',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
        {
            id: 1,
            title: 'Post 1',
            image: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg',
            text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
        },
    ],
    postForView: null,
    freshPosts: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        setPosts: (state, action) => {
            state.postsList = action.payload
        },

        editPost: (state, action) => {  
            //edit post
        },

        getPost: (state, action) => {
            state.postForView = state.postsList.find(post => post.id === Number(action.payload))
        },

        getFreshPosts: (state, action) => {
            state.freshPosts = state.postsList.slice(0, 3);
        },

        addPost: (state, action) => {
            // add new post by data
        }

    },
})

export const { setPosts, editPost, getPost, addPost, getFreshPosts} = postsSlice.actions

export default postsSlice.reducer