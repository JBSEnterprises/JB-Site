<svelte:head>
  <title>JB Stepan</title>
  <meta name="description" content="The site for all things JB Stepan">
</svelte:head>

<script lang="ts">
  import logo from "../images/logo.svg"
  import NavBar from "../components/NavBar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main>

  <NavBar />

  <img src={logo} width=512 alt="">
  <div class="name">
    <h1>Hi, I'm Jakob or JB</h1>
    <p>A student and hobbiest programmer</p>
  </div>

  <a class="contact-link" style="text-decoration: none;" href="/contact">
    <button class="contactbtn">📩 Get in touch</button>
  </a>
  <br>
  <a href="mailto:contact@jbstepan.com">Or E-Mail</a>

  <br>
  <br>
  
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

  .contact-link {
    color: black;
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
    text-decoration: none;
  }

  .contactbtn:hover {
    transition: 300ms;
    transform: scale(1.2);
    background-color: rgb(188, 188, 188);
    outline-color: white;
    outline: black;
    text-decoration: none;
  }

  .warning { 
    background-color: red;
    margin: 10px;
    padding: 4px;
  }
</style>
