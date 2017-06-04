<template>
  <div id="app">
    <div class="row">
      <div id="navBar" class="col l12 m12 s12">
        <nav>
          <div class="nav-wrapper">
            <div class="row">
              <div class="col l2 m2 s2">
                  <img src="../icon.jpg" alt="icono" id="icono">
              </div>
              <div class="col l10 m10 s10 ">
                <router-link to="/"><a class="brand-logo">&nbsp;Sistema Escuela&nbsp;</a></router-link>
                <ul id="nav-mobile" class="right">
                  <li><router-link to="/test">Estudiantes</router-link></li>
                  <li><a href="#">Maestros</a></li>
                  <li><a href="#">Asignaciones</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div id="sideNav" class="col l3 m3 s3">
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
      <div id="contentRender" class="col l9 m9 s9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
  		name: 'app'
	}
</script>

<style>
  #icono{
    position: absolute;
    height: 100%;
    width: 15.75%; 
  }

  #app{
    width: 100vw;
  }

  nav{
    background-color: #2B455E;
    filter: saturate(200%);
    width: 95vw;
    height: 10vh;
    font-size: 10vw;
    margin-left: 2.5vw;
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
    height: 90vh;
    width: 15vw;
    text-align: center;

  }

  #sideNav{
    width: 15vw;
    margin-left: 2.5vw;
    
  }

  .sideContent{
    margin-top: 10vh;
    margin-bottom: 10vh;
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
    height: 90vh;
    width: 80vw;
    background-color: lightgrey;
    box-shadow: 10px 0 5px #888888;  
  }
</style>