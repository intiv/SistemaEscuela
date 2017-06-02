<template>
  <div id="app">
    <div class="row">
      <div id="navBar" class="col l12 m12 s12">
        <nav>
          <div class="nav-wrapper">
            <div class="row">
              <div class="col l12 m12 s12">
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
      <div id="sideNav" class="col l2 m2 s2">
        <aside>
          asdasd
        </aside>
      </div>
      <div id="contentRender" class="col l10 m10 s10">
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
  nav{
    background-color: #2B455E;
    width: 100vw !important;
    font-size: 20vw !important;
  }

  #navBar{
    width: 100vw !important;
  }

  .brand-logo:hover{
    background-color: #1E87DA !important;
    transition: background-color 0.3s ease-in-out;
  }
  aside{
    border: 1px solid black;
    height: 90vh;
    margin-left: 10px
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
    border: 1px solid red;
    height: 90vh;
    width: 80vw;
  }
</style>