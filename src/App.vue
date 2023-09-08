<script setup lang="ts">

</script>

<template>

  <header>
    <section>
      <h1>
        Survey Components
      </h1>
    </section>
    <section>
      <nav>
        <ul>
          <li><RouterLink to="/categorical">Categorical</RouterLink></li>
          <li><RouterLink to="/ranking">Ranking</RouterLink></li>
          <li><RouterLink to="/rating">Rating</RouterLink></li>
          <li><RouterLink to="/open-ended">Open-ended</RouterLink></li>
          <li><RouterLink to="/grid"> Grid</RouterLink></li>
        </ul>
      </nav>
    </section>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
  header{
    padding-top: 1rem;

    h1{
      font-size: 1.5rem;
      width: 1024px;
      margin: 0 auto;
      text-align: center;
      padding: 1rem 0;

    }

    nav{
      width: 1024px;
      margin: 0 auto;
      background-color: #ebebeb;
      border-radius: 1rem;


      ul{
        padding: 1rem 0;
        display: flex;
        justify-content: space-evenly;

        li{ 
          background-color: rgb(216, 216, 216);
          border-radius: .5rem;
          padding:  .5rem 1rem;
          list-style: none;
          color: black;
        }
      }
    }
  }

  main{
    background-color: #ebebeb;
     border-radius: 1rem;
    width: 1024px;
    margin: 1rem auto;
    padding: 2rem 2rem;
    flex-grow: 1;
  }

  footer{
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