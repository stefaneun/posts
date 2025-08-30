import React from "react";
import { Post } from "./components/Post";
import * as SC from "./styles";

export const Posts = ({ posts }) => (

    <SC.PostContainer>
        {posts && posts.length > 0
            ? posts.map((post) => <Post key={post.id} post={post} />)
            : <SC.Title>Нет постов</SC.Title>
        }
    </SC.PostContainer>
    
)