import React, {useState, useEffect} from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { PostDTO} from './api/models/PostDTO';
import { ImageDTO } from './api/models/ImageDTO';
type ButtonProps = {
  togglePopup: () => void; // A function prop for the togglePopup handler
};
function BlogCard(props: ButtonProps) {
    const [blogPost1, setBlogPost1] = useState<PostDTO>();
    const [blogPost2, setBlogPost2] = useState<PostDTO>();
    const [blogPost3, setBlogPost3] = useState<PostDTO>();
    const [blogImage1, setBlogImage1] = useState<ImageDTO>();
    const [blogImage2, setBlogImage2] = useState<ImageDTO>();
    const [blogImage3, setBlogImage3] = useState<ImageDTO>();
    const fetchBlogImage1 = () => {
      fetch("http://localhost:3000/image/image1")
        .then(response => response.json())
        .then(data => setBlogImage1(data)) // assuming the array is stored in a property called posts
        .catch(error => console.log(error));
    }
      useEffect(() => {
          fetchBlogImage1();
        },[]);
        const fetchBlogImage2 = () => {
          fetch("http://localhost:3000/image/image2")
            .then(response => response.json())
            .then(data => setBlogImage2(data)) // assuming the array is stored in a property called posts
            .catch(error => console.log(error));
        }
          useEffect(() => {
              fetchBlogImage2();
            },[]);
            const fetchBlogImage3 = () => {
              fetch("http://localhost:3000/image/image3")
                .then(response => response.json())
                .then(data => setBlogImage3(data)) // assuming the array is stored in a property called posts
                .catch(error => console.log(error));
            }
              useEffect(() => {
                  fetchBlogImage3();
                },[]);
    const fetchBlogPost1 = () => {
        fetch("http://localhost:3000/post/post1")
          .then(response => response.json())
          .then(data => setBlogPost1(data)) // assuming the array is stored in a property called posts
          .catch(error => console.log(error));
      }
        useEffect(() => {
            fetchBlogPost1();
          },[]);
          const fetchBlogPost2 = () => {
            fetch("http://localhost:3000/post/post2")
              .then(response => response.json())
              .then(data => setBlogPost2(data)) // assuming the array is stored in a property called posts
              .catch(error => console.log(error));
          }
            useEffect(() => {
                fetchBlogPost2();
              }, []);
              const fetchBlogPost3 = () => {
                fetch("http://localhost:3000/post/post3")
                  .then(response => response.json())
                  .then(data => setBlogPost3(data)) // assuming the array is stored in a property called posts
                  .catch(error => console.log(error));
              }
                useEffect(() => {
                    fetchBlogPost3();
                  }, []); 
  return (
    <Container className="blog-slider">
      <Row className="blog-slider__item"  style={{border: "2px solid purple", height: "40vh"}}>
        <Col xs={12} md={6} className="blog-slider__img">
          <Image
            src={blogImage1?.url}
            alt=""
            fluid
            className="img"
            style={{width: "55%", height: "95%"}}
          />
        </Col>
        <Col xs={12} md={6} className="blog-slider__content" style={{padding: "1rem"}}>
          <span className="blog-slider__code" style={{padding: "0.5rem"}}>{blogPost1?.author}</span>
          <div className="blog-slider__title" style={{padding: "0.5rem"}}>{blogPost1?.title}</div>
          <div className="blog-slider__text" style={{padding: "0.5rem", fontSize: "14px"}}>
            {blogPost1?.text}
          </div>
          <Button onClick={props.togglePopup} variant="primary" className="blog-slider__button btn-6" style={{ 
  width: "30%",
  height: "20%",
  color: "#fff",
  borderRadius: "5px",
  padding: "0.2rem 1rem",
  fontFamily: "'Lato', sans-serif",
  fontWeight: 500,
  background: "rgb(247,150,192)",
  backgroundImage: "radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%)",
  lineHeight: "42px",
  border: "none",
  position: "relative",
  display: "inline-block",
  boxShadow: "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
  outline: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  marginTop: "0",
  marginLeft: "0.4rem"
}}>
  <span>READ MORE</span>
  <span className="btn-6__before"></span>
  <span className="btn-6__after"></span>
</Button>
        </Col>
      </Row>
      <Row className="blog-slider__item" style={{border: "2px solid purple", height: "40vh"}}>
        <Col xs={12} md={6} className="blog-slider__img">
          <Image
            src={blogImage2?.url}
            alt=""
            fluid
            className="img"
            style={{height: "100%", width: "55%"}}
          />
        </Col>
        <Col xs={12} md={6} className="blog-slider__content" style={{padding: "1ren"}}>
          <span className="blog-slider__code" style={{padding: "0.5rem"}}>{blogPost2?.author}</span>
          <div className="blog-slider__title" style={{padding: "0.5rem"}}>{blogPost2?.title}</div>
          <div className="blog-slider__text" style={{padding: "0.5rem", fontSize: "14px"}}>
            {blogPost2?.text}
          </div>
          <Button onClick={props.togglePopup} variant="primary" className="blog-slider__button btn-6" style={{ 
  width: "30%",
  height: "26%",
  color: "#fff",
  borderRadius: "5px",
  padding: "0.2rem 1rem",
  fontFamily: "'Lato', sans-serif",
  fontWeight: 500,
  background: "rgb(247,150,192)",
  backgroundImage: "radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%)",
  lineHeight: "42px",
  border: "none",
  position: "relative",
  display: "inline-block",
  boxShadow: "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
  outline: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  marginTop: "0px",
  marginLeft: "0.4rem"
}}>
  <span>READ MORE</span>
  <span className="btn-6__before"></span>
  <span className="btn-6__after"></span>
</Button>
        </Col>
      </Row>
      <Row className="blog-slider__item" style={{border: "2px solid purple", height: "40vh"}}>
        <Col xs={12} md={6} className="blog-slider__img">
          <Image
            src={blogImage3?.url}
            alt=""
            fluid
            className="img"
            style={{height: "100%", width: "55%"}}
          />
        </Col>
        <Col xs={12} md={6} className="blog-slider__content" style={{padding: "1rem"}}>
          <span className="blog-slider__code" style={{padding: "0.5rem"}}>{blogPost3?.author}</span>
          <div className="blog-slider__title" style={{padding: "0.5rem"}}>{blogPost3?.title}</div>
          <div className="blog-slider__text" style={{padding: "0.5rem", fontSize: "14px"}}>
            {blogPost3?.text}
          </div>
          <Button onClick={props.togglePopup} variant="primary" className="blog-slider__button btn-6" style={{ 
  width: "30%",
  height: "26%",
  color: "#fff",
  borderRadius: "5px",
  padding: "0.2rem 1rem",
  fontFamily: "'Lato', sans-serif",
  fontWeight: 500,
  background: "rgb(247,150,192)",
  backgroundImage: "radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%)",
  lineHeight: "42px",
  border: "none",
  position: "relative",
  display: "inline-block",
  boxShadow: "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
  outline: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  marginTop: "0px",
  marginLeft: "0.4rem"
}}>
  <span>READ MORE</span>
  <span className="btn-6__before"></span>
  <span className="btn-6__after"></span>
</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default BlogCard;