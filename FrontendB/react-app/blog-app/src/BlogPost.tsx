import React from 'react';
import {PostDTO} from "./api/models/PostDTO";
import {Card} from "react-bootstrap";
type Props = {
    post: PostDTO;
}

function BlogPost(props: Props) {
    const {post} = props;

    return (
        
     <Card
        className="mb-2"
        border="dark" /* Try to change this: https://react-bootstrap.github.io/components/cards/#card-styles  */
        bg="light" /* Try to change this: https://react-bootstrap.github.io/components/cards/#card-styles*/
        style={{whiteSpace: "pre-wrap"}} /* Making sure that \n and \t treated as new line and tab in our text. */
    >
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.text}</Card.Text>
            {
                // This line make sure that the link is only displayed if it exists.
                post.link && <Card.Link href={post.link.url}>{post.link.title}</Card.Link>
            }
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"> Author: {post.author}</small>
        </Card.Footer>
    </Card>
    
    );
}

export default BlogPost;
