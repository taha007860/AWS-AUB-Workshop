import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {PostDTO} from "./api/models/PostDTO";

type Props = {
    onPostSubmit: (blogPost: PostDTO) => void;
};

function BlogPostForm(props: Props) {

    const {onPostSubmit} = props;

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [linkUrl, setLinkUrl] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
            return;
        }

        const blogPost: PostDTO = {
            id: crypto.randomUUID(),
            title: title,
            text: text,
            author: author
        };

        if (linkUrl) {
            blogPost.link = {
                title: "Read more",
                url: linkUrl
            };
        }
        onPostSubmit(blogPost);
    };

    return (
        <Form className="mb-3" style={{width: "60vw"}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    required type="text"
                    placeholder="Enter the title"
                    size="lg"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formText">
                <Form.Label>Text</Form.Label>
                <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLinkName">
                <Form.Label>Link URL</Form.Label>
                <Form.Control
                    type="url"
                    placeholder="Enter the link"
                    value={linkUrl ?? ""}
                    onChange={e => setLinkUrl(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    );
}

export default BlogPostForm;