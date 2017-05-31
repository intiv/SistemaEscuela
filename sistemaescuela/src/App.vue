<template>
  <div id="app">
    <div>
    	<router-link to="/test">
    		<button>Test</button>
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
