<template>
  <div id="app">
    <div class="row">
      <div id="navBar" v-if="checkPath() === true" class="col l12 m12 s12">
        <nav>
          <div class="nav-wrapper">
            <div class="row">
              <div class="col l2 m2 s2">
                  <img src="./src/icon.jpg" alt="icono" id="icono">
              </div>
              <div class="col l10 m10 s10 ">
                <div class="row">
                  <div class="col l4 m4 s4">
                  <router-link to="/"><a class="brand-logo">&nbsp; Sistema Escuela &nbsp;</a></router-link>
                  </div>
                  <div class="col l8 m8 s8">
                    <ul id="nav-mobile" class="right">
                      <li><router-link to="/test">Estudiantes</router-link></li>
                      <li><a href="#">Maestros</a></li>
                      <li><a href="#">Asignaciones</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div id="sideNav" v-if="checkPath() === true" class="col l3 m3 s3">
        <aside>
          <div class="sideContent">
            <a href="#"><p>Hoja de Tareas</p></a>
          </div>
          <div class="sideContent">
            <a href="#"><p>Notas</p></a>
          </div>
          <div class="sideContent">
            <a href="#"><p>Anuncios</p></a>
          </div>
        </aside>
      </div>
      <div id="contentRender" v-if="checkPath() === true" class="col l9 m9 s9">
        <router-view></router-view>
      </div>
      <div id="loginRender" v-if="checkPath() === false" class="col l9 m9 s9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
  		name: 'app',
      data(){
        return{
          ruta : '/'
        }
      },
      methods : {
        checkPath(){
          var ruta=this.$route.path;
          switch(ruta){
            case '/' : return true; break;
            case '/login' : return false; break;
            case '/register' : return false; break;
            default : return true; break;
          }
        }
      },
      mounted() {
        console.log(this.$route.path);
      }
	}
</script>

<style>

  html{
    font-family: "Roboto", sans-serif;
    
  }

  #icono{
    position: absolute;
    height: 100%;
    width: 15.30%; 
  }

  #app{
    margin-top: 5px;
    width: 100vw;
    margin-left: 5px;
  }

  nav{
    background-color: #2B455E;
    filter: saturate(200%);
    width: 98vw;
    height: 10vh;
    font-size: 10vw;
    display: block;
    box-shadow: 10px 0 5px #888888;
  }

  #navBar{
    width: 100vw;
  }

  .sideContent{
    padding: 5%;
    height: 10%;
  }

  .sideContent:hover{
    background-color: red;
    filter: saturate(60%);
    transition: background-color 0.3s ease-in-out;
  }

  .brand-logo:hover{
    background-color: #14426E;
    filter: saturate(45%);
    transition: background-color 0.3s ease-in-out;
  }

  .brand-logo{
    height: 100%;
    position: absolute;
  }

  #nav-mobile>li>a{
    position: relative;
    height: 10vh;
  }

  aside{
    border: 1px solid red;
    background-color: red;
    filter: saturate(35%);
    height: 88vh;
    width: 15vw;
    text-align: center;
    margin-bottom: 5px;

  }

  #sideNav{
    width: 15vw;
    
  }

  .sideContent{
    margin-top: 10vh;
    margin-bottom: 10vh;
    border-radius: 1px;
  }

  .sideContent p{
    color: white;
  }

  body{
    background-color: #F7F7F8;
    
  
  }

  .row{
    margin: 0 auto;
  }

  .col{
    padding: 0px !important;
  }

  #contentRender{
    padding-left: 10px !important;
    border: 1px solid lightgrey;
    display: block;
    height: 88vh;
    width: 83vw;
    max-height: 88vh;
    max-width: 83vw;
    background-color: lightgrey;
    box-shadow: 10px 0 5px #888888;  
    overflow: scroll scroll;
  }
</style>
