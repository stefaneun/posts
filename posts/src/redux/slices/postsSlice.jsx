import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        setPosts: (state, action) => {
            state.posts = action.payload
        },

        editPost: (state, action) => {
            //edit post
        },

        getPost: (state, action) => {
            //return post by id
        },

        addPost: (state, action) => {
            // add new post by data
        }   

    },
})

export const { setPosts, editPost, getPost, addPost } = postsSlice.actions

export default postsSlice.reducer