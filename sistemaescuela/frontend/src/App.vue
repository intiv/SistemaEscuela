<template>
  <div id="app">
    <div class="row">
      <div id="navBar" class="col l12 m12 s12">
        <nav>
          <div class="nav-wrapper">
            <div class="row">
              <div class="col l1 m1 s1">
                  <img src="../icon.jpg" alt="icono" id="icono">
              </div>
              <div class="col l11 m11 s11">
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
    width: 8.4%; 
    
  }

  #app{
    width: 100vw;
  }

  nav{
    background-color: #2B455E;
    width: 90vw !important;
    font-size: 15vw !important;
    margin-left: 5vw;
    display: block;
  }

  #navBar{
    width: 100vw;
  }

  .brand-logo:hover{
    background-color: #1E87DA !important;
    transition: background-color 0.3s ease-in-out;
  }

  aside{
    border: 1px solid red;
    background-color: red;
    filter: saturate(20%);
    height: 90vh;
    width: 15vw;
  }

  #sideNav{
    width: 15vw;
    margin-left: 5vw;
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
    width: 75vw;
    background-color: lightgrey;
    filter: saturate(100%);
  }
</style>