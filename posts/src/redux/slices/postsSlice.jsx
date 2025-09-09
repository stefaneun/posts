import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postsAPI } from '../../api/postsAPI'
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
    postsList: [],
    localPosts: [],
    postForView: {
        post: null,
        loading: false,
        error: null
    },
    freshPosts: {
        posts: null,
        loading: false,
        error: null
    },
    loading: false,
    loaded: false,
    error: null
}

export const getPostById = createAsyncThunk(
    'posts/fetchById',
    async (postId, { rejectWithValue }) => {
        try {
            return await postsAPI.fetchById(postId)
        } catch (error) {
            return rejectWithValue(error.message || 'Не удалось загрузить пост')
        }
    }
)

export const getPosts = createAsyncThunk(
    'posts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await postsAPI.fetchPosts()
        } catch (error) {
            return rejectWithValue(error.message || 'Не удалось загрузить посты')
        }
    }
)

export const getFreshPosts = createAsyncThunk(
    'posts/getFreshPosts',
    async (limit, { rejectWithValue }) => {
        try {
            return await postsAPI.fetchFreshPosts(limit)
        } catch (error) {
            return rejectWithValue(error.message || 'Не удалось загрузить свежие посты')
        }
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPost: (state, action) => {
            state.localPosts = state.localPosts.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload;
                }
                return post;
            });

            state.postsList = state.postsList.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload;
                }
                return post;
            });
        },

        addPost: (state, action) => {
            const newPost = {
                ...action.payload,
                id: new Date().getTime(),
                isLocal: true
            };

            state.localPosts = [newPost, ...state.localPosts];
        },

        showPost: (state, action) => {
            state.postForView = {
                post: action.payload,
                loading: false,
                error: null
            }
        },

        removePost: (state, action) => {
            const postId = action.payload;
            state.localPosts = state.localPosts.filter(post => post.id !== postId);
            state.postsList = state.postsList.filter(post => post.id !== postId);
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.loaded = true;
                state.postsList = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getFreshPosts.pending, (state) => {
                state.freshPosts = {
                    posts: null,
                    loading: true,
                    error: null
                }
            })
            .addCase(getFreshPosts.fulfilled, (state, action) => {
                state.freshPosts = {
                    posts: action.payload,
                    loading: false,
                    error: null
                }
            })
            .addCase(getFreshPosts.rejected, (state, action) => {
                state.freshPosts = {
                    posts: null,
                    loading: false,
                    error: action.payload || "Не удалось загрузить свежие посты"
                }
            })
    }
})

export const { editPost, addPost, showPost, removePost } = postsSlice.actions

export const selectAllPosts = createSelector(
    [
        (state) => state.posts.postsList || [],
        (state) => state.posts.localPosts || []
    ],
    (serverPosts, localPosts) => {
        return [...localPosts, ...serverPosts];
    }
);

export const selectPostForView = (state) => state.posts.postForView;
export const selectFreshPosts = (state) => state.posts.freshPosts;
export const selectLocalPosts = (state) => state.posts.localPosts;
export const selectServerPosts = (state) => state.posts.postsList;

export const selectPostsLoading = (state) => state.posts.loading;
export const selectPostsLoaded = (state) => state.posts.loaded;
export const selectPostsError = (state) => state.posts.error;

export default postsSlice.reducer