import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postsAPI } from '../../api/postsAPI'

const initialState = {
    postsList: [],
    postForView: {
        post: null,
        loading: false,
    },
    freshPosts: {
        posts: null,
        loading: false,
        
    }
}

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId) => {
        return await postsAPI.fetchById(postId)
    }
)

export const getPosts = createAsyncThunk(
    'posts/fetchAll',
    async () => {
        return await postsAPI.fetchPosts()
    }
)

export const getFreshPosts = createAsyncThunk(
    'posts/getFreshPosts',
    async (limit) => {
        return await postsAPI.fetchFreshPosts(limit)
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost: (state, action) => {
            // edit post
        },


        addPost: (state, action) => {
            const newPost = {...action.payload};

            newPost.id = new Date().getTime();
            state.postsList = state.postsList ? [newPost, ...state.postsList] : [newPost];
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPostById.pending, (state) => {
                state.postForView = {
                    post: null,
                    loading: true
                }
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.postForView = {
                    post: action.payload,
                    loading: false
                }
            })

            .addCase(getPosts.fulfilled, (state, action) => {
                state.postsList = action.payload;
            })

            .addCase(getFreshPosts.pending, (state) => {
                state.freshPosts = {
                    posts: null,
                    loading: true
                }
            })
            .addCase(getFreshPosts.fulfilled, (state, action) => {
                state.freshPosts = {
                    posts: action.payload,
                    loading: false
                }
            })

    }
})

export const { editPost, addPost } = postsSlice.actions

export default postsSlice.reducer