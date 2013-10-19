Ext.define("ProjetoExtJS.classe.Usuario", {

			nome : "",
			senha: "",

			constructor : function(options){

				Ext.apply(this,options || {});

				console.log("Contrutor foi chamado...");
			}
		});