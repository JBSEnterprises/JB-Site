<script lang="ts">
  import Waving from "../images/waving.png"
  import SocialIcons from '@rodneylab/svelte-social-icons';
  import NavBar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<head>
  <title>JB Stepan</title>
  <meta name="description" content="The site for all things JB Stepan">
</head>

<main>

  <NavBar />

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

  <a class="social-icon" href="https://medium.com/@jbstepan">
    <SocialIcons network="medium" fgColor="white"/>
  </a>

  <Footer />
  
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