<template>
  <div id="app">

    <div>
    	<router-link to="/test">
    		<button class="waves-effect waves-light red btn">Test</button>
        <br>
		</router-link>
    </div>
    <div id="contentRender">
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
	export default {
  		name: 'app'
	}
</script>
