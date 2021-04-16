import { useState, useEffect } from "react";

export default function Home() {

  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(async () => {
    const response = await fetch('/api/v1/hacker_news/user_comments');
    const userSubmissions = await response.json();
    // TODO: When user clicks on post info, it takes user to post page
    // TODO: What is the plan for listing other platforms?
    const posts = userSubmissions.map((userSubmission) => ({
      title: userSubmission.title,
      subTitle: `${userSubmission.text.substring(0, 280)}...`,
      source: 'Hacker News',
      postDate: new Date(userSubmission.time * 1000) // convert seconds to ms
    }));
    setRecentPosts(posts);
  }, []);

  return (
    <div>
      <header class="masthead" style={{ backgroundImage: "url('img/home-bg.jpg')" }}>
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Work in progress</h1>
                <span class="subheading">Work in progress</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            {recentPosts.map((post) => (
              <>
                <div class="post-preview">
                  <a href="post.html">
                    <h2 class="post-title">
                      {post.title}
                    </h2>
                    <h3 class="post-subtitle">
                      {post.subTitle}
                    </h3>
                  </a>
                  <p class="post-meta">Posted on{'\n'}
                    <a href="#">{post.source}</a>{'\n'}
                    on {Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'}).format(post.postDate)}</p>
                </div>
                <hr/>
              </>
            ))}
            <div class="clearfix">
              <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
