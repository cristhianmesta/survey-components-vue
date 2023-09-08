<script setup lang="ts">

</script>

<template>

  <header>
    <section>
      <h1>
        SURVEY COMPONENTS
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
      font-size: 2.5rem;
      width: 1024px;
      margin: 0 auto;
      text-align: center;
      padding: 1rem 0;
      font-style: italic;
      font-weight: 900;

      background: -webkit-linear-gradient(315deg,#ffdb3b 25%,#f14242);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    nav{
      width: 1024px;
      margin: 0 auto;
      background-color: #f3f6fb;
      border-radius: 1rem;


      ul{
        padding: 1rem;
        display: flex;
        gap: 1rem;
        justify-content: space-evenly;

        li{ 
          width: 100%;
          list-style: none;
          text-align: center;

          a{
            font-weight: bold;
            border-radius: .5rem;
            padding:  .5rem 1rem;
            display: block;
            color: #9c9ea2;
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
          }

          .router-link-active{
            border: 3px solid #ffcd42;
            color: #ffcd42;
            background-color: #fffae8;
          }
        }
      }
    }
  }

  main{
    background-color: #f3f6fb;
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
    padding: 1rem 0 5rem;
    align-items: center;
    color: #9c9ea2;

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