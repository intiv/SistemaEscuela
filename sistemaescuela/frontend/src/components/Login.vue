<template>
	<div id="loginRoot">
		<div id="container">
			<div class="row" id="header">
				<div class="col l4 m4 s4">
					<img src="./src/icon.jpg" alt="icono" id="logo">
				</div>
				<div class="col l8 m8 s8" id="title">
					<p>Saint John's Bilingual School</p>
				</div>
			</div>
			<div id="body">
				<div class="row">
					<div class="input-field col l10 m10 s10 offset-l1 offset-m1 offset-s1">
						<input type="text" id="username" placeholder="Username" class="validate" v-model="user.usuario">	
					</div>
				</div>
				<div class="row">
					<div class="col l10 m10 s10 offset-l1 offset-m1 offset-s1 input-field">
						<input type="password" name="password" id="password" placeholder="Password" v-model="user.contrasena">
					</div>
				</div>
				<div class="row" id="boton">
					<div class="col l12 m12 s12">
						<button class="btn" v-on:click="verify()">Ingresar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'login',
		data() {
			return {
				user: {
					usuario: '',
					contrasena:''
				},
				valid: true
			}
		},
		mounted() {
		},
		methods : {
			verify(){
				var message='';
				if(this.user.usuario.length==0){
					this.valid=false;
					message+='-Usuario no puede ser vacio\n';
				}
				if(this.user.contrasena.length==0){
					this.valid=false;
					message+='-Contraseña no puede ser vacia\n';
				}
				if(/^[a-zA-z0-9]+$/.test(this.user.usuario) && /^[a-zA-z0-9]+$/.test(this.user.contrasena)){
					this.valid=true;
				}else{
					message+='-Usuario y contraseña solo deben tener letras y numeros';
					this.valid=false;
				}
				if(this.valid){
					if(this.valid){
						this.$http.post('http://localhost:8000/login',this.user).then((response)=>{
							if(response.body.success){
								swal({
									title: 'Bienvenido(a)!',
									type: 'success'
								});
								localStorage.setItem('usuario',JSON.stringify({usuario: response.body.usuario, scope: response.body.scope}));
								alert(JSON.parse(localStorage.getItem('usuario')).usuario);
								this.$router.push('/');
							}else{
								if(response.body.tipo==='length' || response.body.tipo==='null'){
									message+='-Usuario no encontrado. Verifique sus credenciales';
								}else if(response.body.tipo==='err'){
									message+='-Ocurrio un error con la BD. Verifique su coneccion a internet e intente de nuevo';
								}
								swal({
									title: 'Login falló!',
									text: 'Razones:\n'+message,
									type: 'error'
								});
							}
						});
					}
				}else{
					swal({
						title: 'Login falló!',
						text: 'Razones:\n'+message,
						type: 'error'
					});
					this.valid=true;
				}
			}
		},
		beforeMount(){
			if(JSON.parse(localStorage.getItem('usuario'))!=null){
				localStorage.removeItem('usuario');
				this.$http.put('http://localhost:8000/logout').then((response)=>{
					alert('Cookie borrada!');
				});
			}
		}
	}
</script>

<style scoped>

	#loginRoot{
		width:100vw;
		height: 100vh;
		background-image: url('./src/bluegradient.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 10%;
	}

	#container{
		margin-left: 26.5%;
		margin-right: 25%;
		width: 45vw;
		height: 70vh;
		background-color: lightgrey;
		border-radius: 4px;
	}

	#header{
		width: 100%;
		background-color: #7B2323;
		padding-left: 10px;
		font-size: 5vh;
		padding-top: 10px;
		border-radius: 4px;
	}

	#logo{
		-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
	}

	#title{
		-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
        animation: fadein 2s;
	}

	@keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	#body{
		width: 100%;
		background-color: lightgrey;
		padding-top: 20px;
	}

	#app{
		background-image: url('./src/bluegradient.jpg');
	}

	#boton{
		margin-left: 40%;
	}

	.btn{
		background-color: #7B2323;
	}

	input{
		height: 5vh;
	}

	input::placeholder{
		color: black;
	}

</style>
