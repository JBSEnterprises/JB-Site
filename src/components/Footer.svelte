<script>
  // @ts-ignore
<<<<<<< HEAD
  import X from "../images/x.svg"
  import Github from "../images/github.svg"
=======
  import SocialIcons from '@rodneylab/svelte-social-icons';
>>>>>>> 13ee8a1e853cbb2f629e2f6753cbd3db3701d6fb
</script>

<main class="mt-8">
  <a href="https://www.x.com/jbstepan">
    <img class="inline-block w-7 m-1" src={X} alt="">
  </a>

  <a href="https://www.github.com/jbstepan">
    <img class="inline-block w-7 m-1" src={Github} alt="">
  </a>
<<<<<<< HEAD
=======

  <a class="social-icon" href="https://medium.com/@jbstepan">
    <SocialIcons network="medium" fgColor="white"/>
  </a>

  <!-- <a class="social-icon" href="https://discord.com/invite/9xJEzqYNQ7">
    <SocialIcons network="discord" fgColor="white"/>
  </a> -->

>>>>>>> 13ee8a1e853cbb2f629e2f6753cbd3db3701d6fb
  <br>

  <a href="https://status.jbstepan.com">
    Status
  </a> | 
  <a href="/pgp/jbstepan_public.asc">
    PGP Key
  </a>

  <footer class="footer">
    Copyright © JB Stepan. All rights reserved.
  </footer>
</main>

<style>
main {
  left: 0;
  bottom: 0;
  width: 100%;
  color: gray;
  text-align: center;
}
</style>