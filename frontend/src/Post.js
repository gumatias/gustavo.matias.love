import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(async () => {
    const response = await fetch(`/api/v1/hacker_news/user_comments/${id}`);
    const submission = await response.json();
    setPost(submission);
  }, []);

  return (
    <div>
      { post ? (
        <div>
        <header class="masthead" style={{ backgroundImage: "url('img/post-bg.jpg')" }}>
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-heading">
                  <h1>{ post.title }</h1>
                  <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                  <span class="meta">Posted by
                    <a href="#">Start Bootstrap</a>
                    on August 24, 2019</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <article>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                { post.text }
              </div>
            </div>
          </div>
        </article></div>) : null}
    </div>
  );
}
