import React from 'react';
import { PostDTO } from './api/models/PostDTO';
import BlogPost from './BlogPost';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
blogPosts: PostDTO[];
};

function BlogPosts(props: Props) {
const { blogPosts } = props;

const articles = [];

for (let blogPost of blogPosts) {
articles.push(<BlogPost post={blogPost} />);
}

return (
<Container className="mt-3" style={{ margin: '0 auto', width: '80vw' }}>
<Row>
<Col md={{ span: 8, offset: 2 }}>{articles}</Col>
</Row>
</Container>
);
}

export default BlogPosts;