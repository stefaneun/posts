import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postsSlice';

export const store = configureStore({
    reducer: {
        posts: postReducer
    }
}); 