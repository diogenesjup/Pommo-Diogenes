class Views{
    
	constructor(){
	      
	     this._content = $("section#content"); 

	     this._allMenus = $("footer * a");
	     this._menu1 = $("footer .menu-1 a");
	     this._menu2 = $("footer .menu-2 a");
	     this._menu3 = $("footer .menu-3 a");

       this.header = $("header");
       this.footer = $("footer");

	}

	animarTransicao(){
		new WOW().init();
	}
  

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   VIEW PRINCIPAL
*
*
*  ------------------------------------------------------------------------------------------------
*/

    viewPrincipal(){

           voltarAoTopo();

           this.header.html(` 

               <div class="row">
                  <div class="col-12 text-right">

                      <a href="javascript:void(0)" title="Adicionar tempo" onclick="janelaPrompt()">
                        <i class="fa fa-plus-circle"></i>
                      </a>

                  </div>
               </div>

           `); // DISPENSAVEL

            this._content.html(`
               
               <h1 id="assuntoTitulo" style="margin-top:80px;">INSTRUMENTOS</h1>

               <div class="mini-cronometro">
                   <span class="mini-minutos">00</span> :
                   <span class="mini-segundos">00</span>
               </div>
            
            `);

            this.animarTransicao();

            //app.views.cssInicioLogado();

            //app.views.ativarMenuUm();

            //$("footer").fadeIn();

            /*
            if(localStorage.getItem("calibragem")==null){

                  app.views.calibragem();

            }
            */

            // INICIAR STORIES
            //initStories();

    }

    promptPadrao(){

         $(".prompt").html(`

              <p class="text-center" style="padding-top: 90px;font-size: 13px;">
                  <img src="assets/images/loading.gif" style="width: 24px;height: auto;display: block;margin-left: auto;margin-right: auto;"> carregando
              </p> 

         `);

    }


}

