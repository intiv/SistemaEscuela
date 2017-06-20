<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
	        <div class="modal-header">
	        	<slot name="header">
	        		<label >Agregar un nuevo Maestro</label>

	          	</slot>
	        </div>
	        <div class´<<="modal-body">
	 	       <slot name="body">
	    	       <div class="row">
         <form class="col s12">
            <div class="row">
               <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input placeholder="Username" value="Mahesh" id="name" type="text" class="active validate" required>
                  <label for="name">Nombre</label>
               </div>
               <div class="input-field col s6">      
                  <label for="name">Apellido</label>
                  <input id="password" type="text" placeholder="name" class="active validate" required>          
               </div>
            </div>
            <div class="row">
               <div class="input-field col s12">
                  <input placeholder="Email" id="email" type="email" class="validate">
                  <label for="email">Correo Electronico</label>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s12">
			      <i class="material-icons prefix">mode_edit</i>
                  <textarea id="address" class="materialize-textarea"></textarea>
                  <label for="address">Dirección</label>
               </div>
            </div>			
            
            <div class="input-field col s2">
          		<i class="material-icons prefix">phone</i>
          		<input id="icon_telephone" type="tel" class="validate">
          		<label for="icon_telephone">Teléfono</label>
        	</div>
                  
         </form>       
      </div>
		        </slot>
	        </div>
	        <div class="modal-footer">
	            <slot name="footer">
	            	<button class="modal-default-button" v-on:click="$emit('close')">
	            		OK
	              	</button>
	            </slot>
	        </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
	export default{
		name: 'modal'
		
	}
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
	  display: table-cell;
	  vertical-align: middle;
	}

	.modal-container {
	  width: 700px;
	  height: 300px;
	  margin: 0px auto;
	  padding: 20px 30px;
	  background-color: #fff;
	  border-radius: 2px;
	  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	  transition: all .3s ease;
	  font-family: Helvetica, Arial, sans-serif;
	}

	.modal-header h3 {
	  margin-top: 0;
	  color: #42b983;
	}

	.modal-body {
	  margin: 20px 0;
	}

	.modal-enter {
	  opacity: 0;
	}

	.modal-leave-active {
	  opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
	  -webkit-transform: scale(1.1);
	  transform: scale(1.1);
	}
</style>