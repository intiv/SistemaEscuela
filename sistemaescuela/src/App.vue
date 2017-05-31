<template>
  <div id="app">
    <div class="row">
      <div class="col l10 offset-l1">
      	<router-link to="/test">
      		<button class="waves-effect waves-light red btn">Test</button>
  		</router-link>
      </div>
    </div>
    <div class="row">
      <div id="sideNav" class="col l4">
        
      </div>
      <div id="contentRender" class="col l8">
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
