import {Helmet} from "react-helmet";
import './PageTracker.js';
import './PageTracker.css'

export const PageTracker = () => {
    return (
        <>
        <Helmet>
              <script src="./PageTracker.js" type="text/javascript" />
            </Helmet>
<nav className="navbar">
<div className="progress-bar" />
<div className="progress-bar--increment" />
<ul>
  <li>
    <a href="#top">Header</a>
  </li>
  <li>
    <a href="#article-1">
      <span className="progress-bar--circle" />
      Article 1
    </a>
  </li>
  <li>
    <a href="#article-2">
      <span className="progress-bar--circle" />
      Article 2
    </a>
  </li>
  <li>
    <a href="#article-3">
      <span className="progress-bar--circle" />
      Article 3
    </a>
  </li>
</ul>
</nav>
<header id="top">
<h1>Welcome to the top!</h1>
</header>
<main>
<article className="article" id="article-1">
  <h2>Article 1</h2>
</article>
<article className="article" id="article-2">
  <h2>Article 2</h2>
</article>
<article className="article" id="article-3">
  <h2>Article 3</h2>
</article>
</main>
<footer id="bottom">
<h3>Welcome to the bottom!</h3>
</footer>
</>
    );
}