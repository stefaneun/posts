import React from "react";
import photo from "../../../../components/photos/cats.jpg";

import * as SC from "./styles";

export const Post = ({ post }) => {

    const title = post.title || '';

    const image = post.image || photo;

    return (
        <SC.Post>
            <SC.Image>
                <img src={image} alt={title} />
            </SC.Image>
            <SC.PostTitle>{title.slice(0, 10)}...</SC.PostTitle>
            <SC.DetailLink to={`/posts/${post.id}`}>Читать далее...</SC.DetailLink>
        </SC.Post>
    );
}