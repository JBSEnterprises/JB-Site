<script lang="ts">
  import NavBar from "../../components/NavBar.svelte";
  import ComingSoon from "../../components/ComingSoon.svelte";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <NavBar />
  <!-- <ComingSoon backLink="/" pageName="Contact Form" /> -->
  <div class="mt-20 flex items-center justify-center">
    <form action="/contact-submit" class="max-w-15 shadow-white shadow-lg p-2">
      <h2 class="text-3xl font-medium mb-3 ">Contact Form</h2>
      <div class="mb-2">
        <h3 class="block font-medium text-md">Email: </h3>
        <input required class="text-black p-1 w-full bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" type="email" name="email" id="" />
      </div>

      <div class="mb-2">
        <h3 class="block font-medium text-md">Name: </h3>
        <input required class="text-black p-1 w-full bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" type="text" name="name" id="" />
      </div>

      <div class="mb-2">
        <h3 class="block font-medium text-md">Subject: </h3>
        <input required class="text-black p-1 w-full bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" type="text" name="subject" id="" />
      </div>
      
      <div class="mb-2">
        <h3 class="block font-medium text-md">Body: </h3>
        <textarea required class="text-black p-1 w-full bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" name="content" rows="5" id=""></textarea>
      </div>

      <div class="text-center">
        <button class="text-black p-4 rounded-md bg-white outline-none scale-100 transition duration-200 hover:bg-slate-200 hover:scale-105" type="submit">Submit</button>
      </div>
    </form>
  </div>
</main>