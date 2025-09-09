import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/slices/postsSlice';

export const PostsProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { loaded, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        if (!loaded && !loading) {
            dispatch(getPosts());
        }
    }, [dispatch, loaded, loading]);

    if (loading) {
        return <div>Загрузка постов...</div>;
    }

    if (error) {
        return <div>Ошибка загрузки постов: {error}</div>;
    }

    return children;
}