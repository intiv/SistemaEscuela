<template>
	<div id="test">
		<div id="container" class="row">
			<div class="input-field col l12 m12 s12">
				<input type="email" id="texto" placeholder="Name" v-model="mensaje" class="validate">
				<label for="texto" class="active" >Yes</label>
				<input type="file" id="file" @change="onFileChange">
				<button v-on:click="printFile">Hola</button>
				
			</div>
			<h1>{{mensaje}},{{msg2}}</h1>
		</div>
	</div>

</template>

<script>
	export default{
		name: 'test',
		data() {
			return {
				msg3: 'no',
				archivo: null,
				formData: new FormData()
			}
		},
		methods: {
			ChangeMessage(nMsg){
				this.mensaje=nMsg;
			},
			printFile(){
				
				/*
				this.$http.post('https://www.googleapis.com/upload/drive/v2/files',this.formData).then((response)=>{
						alert(JSON.stringify(response.body));
				});*/
				//DROPBOX
				// this.$http.get('https://www.dropbox.com/1/oauth2/authorize',{
				// 	headers : {
				// 		'response_type': 'token',
				// 		'client_id': '2bdvudr8ymox8s1',
				// 		'redirect_uri': 'http://localhost:8000/#/test'

				// 	}
				// }).then((response)=>{
				// 	alert(response.body.token);
				// 	alert(response.body);
				// });
				/*
				alert(this.archivo.name);


				this.$http.post('https://content.dropboxapi.com/2/files/upload', this.formData,{
					headers: {
						'Authorization': 'Bearer Vqy9G00xBd4AAAAAAAAAGpNdZi55SpSLrw_sXw6zJtIgMy3C4X8So_RLGZcRnSoo',
						'Content-type' : 'image/jpeg',
						
						'Dropbox-api-arg': "{'path': '/Tareas/imagen.jpg', 'mode':{'.tag':'add'}, 'autorename': 'true'}"
					}
				}).then((response)=>{
					alert(response.body);
				});*/

				
			},
			onFileChange: function onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                
                if (!files.length)
                    return;
                this.formData.append('file', files[0]);
                //alert(this.formData.get('file'));
                this.archivo = files[0];
            }
		},
		props: ['mensaje','msg2'],
		mounted(){
			console.log(this.$route.path);
		}
	}
</script>

<style scoped>
	#test{
		margin-top: 10px;
		margin-right: 10px;
		border: 3px solid red;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		text-align: center;
		color: #2c3e50;
		background-color: lightblue;
	}
	template{
		height: 90vh;
		width: 90vw;
	}
</style>