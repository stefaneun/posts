import React from "react";
import { Post } from "./components/Post";
import * as SC from "./styles";

export const Posts = ({ posts }) => (<>

    <SC.Title>Последние публикации</SC.Title>

    <SC.PostContainer>
        {posts && posts.length > 0
            ? posts.map((post) => <Post key={post.id} post={post} />)
            : <div>Нет постов</div>
        }
    </SC.PostContainer></>
)