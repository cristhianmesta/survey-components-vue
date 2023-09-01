<script setup lang="ts">

</script>

<template>

  <header>
    <h1>
      Survey Components
    </h1>
    <nav>
      <ul>
        <li>
          <RouterLink to="/categorical">
            Categorical
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/ranking">
            Ranking
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/rating">
            Rating
          </RouterLink>
        </li>
        <li>
          <RouterLink to="">
            Open-ended
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/grid">
            Grid
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div>Copyright © 2023 - Cristhian Mesta</div>
    <div>
      <span>Made with</span> &nbsp; 
      <img src="../public/Vue.js_Logo.svg" alt="Vue.js" height="20"/>&nbsp; 
      <a href="https://vuejs.org/" target="_blank">Vue.js</a>
    </div>
  </footer>
</template>

<style lang="scss">


#app{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows:repeat(3, auto);
  width: 1024px;
  margin: 0 auto;
  gap: 2rem;
  
  header{
    grid-column: 1 / 5;
    grid-row: 1;
    padding-top: 1rem;

    
    h1{
      font-size: 1.5rem;
      text-align: center;
    }

    nav{
      ul{
        margin: 2rem 0;
        padding: 0;
        display: flex;
        justify-content: space-evenly;

        li{ 
          list-style: none;
        }
      }
    }
  }

  main{
    grid-column: 2 / 5;
    grid-row: 2;
  }

  footer{
    grid-column: 1 / 5;
    grid-row: 3;
    text-align: center;
    display: flex;
    flex-flow: column;
    padding: 3rem 0;
    align-items: center;

    div{
      padding: .25rem;
      margin: auto 0;
      display: flex;

      span{
        display: inline-block;
      }

      img{
        margin: auto 0;
      }
    
    }
  }
}





</style>