<script lang="ts">
  import Waving from "../routes/images/waving.png"
  import SocialIcons from '@rodneylab/svelte-social-icons';
</script>

<head>
  <title>JB Stepan</title>
  <meta name="description" content="The site for all things JB Stepan">
</head>

<main>

  <ul class="nav">
    <li class="navItem"><a href="/weather">Weather</a></li>
    <li class="navItem"><a href="/spacegame">Space game</a></li>
    <li class="navItem"><a href="/blog">Blog</a></li>
  </ul>

  <img src={Waving} alt="">
  <div class="name">
    <h1>Hi, I'm Jakob</h1>
    <span>Alias: JB Stepan</span>
    <p>A student and hobbiest programmer</p>
  </div>

  <p>Currently working on various projects</p>

  <a href="mailto:jbstepan@jbstepan.com">
    <button class="contactbtn">📩 Get in touch</button>
  </a>

  <br>
  <br>

  <a href="https://www.github.com/jbstepan">
    <SocialIcons network="github" fgColor="white"/>
  </a>

  <a class="social-icon" href="https://www.twitter.com/jbstepan">
    <SocialIcons network="twitter" fgColor="white"/>
  </a>

  <footer class="footer">
    Copyright © Jakob O'Toole Stepan. All rights reserved.
    jbstepan@jbstepan.com
  </footer>
  
</main>

<style>
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  main {
    text-align: center;
    margin-top: 6.5rem;
  }
  
  .name {
    margin: 0;
    padding: 15px;
  }

  p {
    font-size: large;
  }

  button {
    transition: 300ms;
    background-color: white;
    color: black;
    outline: transparent;
    border: transparent;
    cursor: pointer;
  }

  .footer {
    left: 0;
    bottom: 0;
    width: 100%;
    color: gray;
    text-align: center;
  }

  ul {
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    text-align: center;
    position: fixed;
    left: 0;
    top: 15px;
    width: 100%;
    background-color: #242424;  
  }

  li {
    display: inline;
  }

  li a {
    transition: 500ms;
    padding: 4px 15px;
    color: rgb(78, 72, 232);
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    scale: 1;
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
    color: rgb(128, 124, 242);
    scale: 1.5;
  }

  .normal-btn:hover {
    transition: 300ms;
    background-color: rgb(188, 188, 188);
  }

  .contactbtn {
    transition: 300ms;
    transform: scale(1);
    background-color: white;
    color: black;
    padding: 1.5rem;
    outline: transparent;
    border: transparent;
    font-size: xx-large;
    cursor: pointer;
  }

  .contactbtn:hover {
    transition: 300ms;
    transform: scale(1.2);
    background-color: rgb(188, 188, 188);
    outline-color: white;
    outline: black;
  }
</style>