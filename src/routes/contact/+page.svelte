<script lang="ts">
  import NavBar from "../../components/NavBar.svelte";
  import ComingSoon from "../../components/ComingSoon.svelte";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <NavBar />
  <ComingSoon backLink="/" pageName="Contact Form" />
  <!-- <form action="">
        
  </form> -->
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
  