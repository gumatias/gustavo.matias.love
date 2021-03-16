export default function Home() {

  let recentPosts = [
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subTitle: 'Problems look mighty small from 150 miles up',
      source: 'StackOverflow',
      postDate: Date.now()
    },
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subTitle: 'Problems look mighty small from 150 miles up',
      source: 'StackOverflow',
      postDate: Date.now()
    },
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subTitle: 'Problems look mighty small from 150 miles up',
      source: 'StackOverflow',
      postDate: Date.now()
    },
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subTitle: 'Problems look mighty small from 150 miles up',
      source: 'StackOverflow',
      postDate: Date.now()
    },
  ];

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
