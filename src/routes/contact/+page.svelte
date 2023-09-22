<script lang="ts">
  import NavBar from "../../components/NavBar.svelte";
  import { redirect } from "@sveltejs/kit";

  let name: string
  let email: string
  let content: string
  let taken: boolean = false

  async function submitForm(){
    const data = {"name": name, "email": email, "content": content, "date": Date.now()}
    const res = await fetch("https://api.jbstepan.com/contact/create", { method: "POST", body: JSON.stringify(data)})

    if(res.status == 200) {
      console.log("200")
    } else if(res.status == 401) {
      console.log("401")
    } else if (res.status == 500) {
      console.log("500")
    }
  }
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <NavBar />
  <h1>Contact Form</h1>
  <center>
    <form on:submit|preventDefault={submitForm}>
      <input type="text" placeholder="EMail" bind:value={email}><br><br>
      <input type="text" placeholder="Name" bind:value={name}><br><br>
      <textarea cols="30" rows="10" placeholder="What would you like to contact about?" bind:value={content}></textarea><br><br>
      <input type="submit" class="submit" value="Submit">
    </form>
  </center>
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
  
  .submit {
    transition: 300ms;
    transform: scale(1);
    background-color: rgb(188, 188, 188);
    color: black;
    padding: .7rem;
    outline: transparent;
    border: transparent;
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
  }

  .submit:hover {
    transition: 300ms;
    transform: scale(1.2);
    background-color: white;
    outline-color: white;
    outline: black;
    text-decoration: none;
  }

  input[type="text"],
  textarea {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    padding: 6px 12px;
    margin-bottom: .5rem;
    background-color: rgb(188, 188, 188);
    color: black;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: content-box;
    font-size: 18px;
  }

  input[type="text"]:focus,
  textarea:focus {
    background-color: white;
  }

  form {
    border: white 6px solid;
    border-radius: 5px;
    padding: 6px 16px;
    max-width: max-content;
  }

</style>
  