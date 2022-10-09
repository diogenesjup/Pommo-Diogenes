          function carregarConteudoExemplo(){

              console.log("Carregando conteúdo");

                var dataConteudos = document.querySelectorAll('[data-conteudo]')
                dataConteudos.forEach(function(e){
                    var conteudosLoad = e.getAttribute('data-conteudo')
                    fetch(conteudosLoad)
                    .then(data => data.text())
                    .then(html => e.innerHTML = html)
                    .then(data => {
                        setTimeout(function(){
                            console.log("Eu acho que aqui é um local para fazermos outras funções de acordo com o conteúdo que tivemos no fetch.");
                        },500);
                    })
                });

          }


          // FOR"CAR VOLTAR AO TOPO
          function voltarAoTopo(){
            
            var objDiv = document.getElementById("content");
            objDiv.scrollTop = 0;

          }



          function removerBackground(){

                $("body").css("background","transparent");
                $("section#content").css("background","transparent");
                $("section#content").css("opacity","0");

           }
           
           function restaurarBackground(){

                $("body").css("background","#F8F8F8");
                $("section#content").css("background","#F8F8F8");
                $("section#content").css("opacity","1");

                $(".take-a-picture").css("bottom","-1000%");

           }

            

          // SE O USUÁRIO FIZER UM GESTURE PARA A PARTE INFERIOR DA PÁGINA
          // VAMOS FECHAR A LAYER DO CARRO, CASO ELA ESTEJA ABERTA

          $("#swipeAviso").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                $(".modal-avisos .aviso").css("bottom","-300%");
                $(".modal-avisos").fadeOut(500);

              }

            }
          });
          
          $("#swipemeConfirmacao").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                $(".modal-confirmacao .confirmacao").css("bottom","-300%");
                $(".modal-confirmacao").fadeOut(500);

              }

            }
          });

          $("#swipeAcoes").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {

              if(direction=="down"){

                $(".modal-acoes .aviso").css("bottom","-300%");
                $(".modal-acoes").fadeOut(500);

              }

            }
          });
          



            /* FUNÇÃO GERAL PARA EXIBIR OS AVISOS DO PÁGINA */
            function aviso(titulo,mensagem){

              console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");
              $(".modal-avisos").fadeIn(100);

              $(".modal-avisos .aviso").css("bottom","0");


              // ALIMENTAR O HTML
              $(".modal-avisos .aviso h3").html(titulo);
              $(".modal-avisos .aviso p").html(mensagem+'<p style="padding-top:12px;padding-left:0px;"><button type="button" onclick="fecharAviso();" class="btn btn-primary">Ok</button></p>');
              
              //setTimeout("fecharAviso()",12000);


            }


            function fecharAviso(){
              
              $(".modal-avisos .aviso").css("bottom","-300%");
              $(".modal-avisos").fadeOut(500);

            }

            /* FUNÇÃO GERAL PARA EXIBIR CONFIRMAÇÕES DE AÇÕES */
            function confirmacao(titulo,mensagem,funcaoConfirmacao,textoConfirmacao){

              console.log("%c COMEÇANDO FUNÇÃO PARA EXIBIR AVISO","background:#ff0000;color:#fff;");
              $(".modal-confirmacao").fadeIn(100);

              $(".modal-confirmacao .confirmacao").css("bottom","0");

              // ALIMENTAR O HTML
              $(".confirmacao h3").html(titulo);
              $(".confirmacao p").html(mensagem);

              $(".confirmacao #acaoConfirmacao").attr("onclick",funcaoConfirmacao+"; fecharConfirmacao();");
              if(textoConfirmacao!=""){
                $(".confirmacao #acaoConfirmacao").html(textoConfirmacao);
              }
              

            }
            function fecharConfirmacao(){

                 $(".modal-confirmacao .confirmacao").css("bottom","-300%");
                 $(".modal-confirmacao").fadeOut(500);

            }

            // FUNÇÃO PARA FECHAR MODAL DE AÇÕES SOBRE POSTAGEM
            function fecharAcoes(){
              
              $(".modal-acoes .aviso").css("bottom","-300%");
              $(".modal-acoes").fadeOut(500);

            }


            // FUNÇÃO GERAL PARA PRONPTS
            function janelaPrompt(){

                // RESETAR O HTML DO PROMPT
                app.views.promptPadrao();

                $(".prompt").removeClass("wow fadeOut");

                $(".backdrop").fadeIn(450);
                $(".prompt").show(500);

                $(".backdrop").css("display","fixed");
                $(".prompt").css("display","fixed");

                $(".prompt").attr("data-conteudo","views/parts/add-cronometro.html");

                carregarConteudoExemplo();

            }

            function closeBackdrop(){

              $(".backdrop").fadeOut(550);
              $(".prompt").addClass("wow fadeOut");

              app.views.animarTransicao();

            }


// RETORNAR A DATA ATUAL
function queDiaEHoje(){
   
  var currentdate = new Date(); 
  var datetime = "Hoje é: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " | "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();

  return datetime;

}




// FORMULARIO FLUTUANTE onclick="ativarFormularioFlutuante('','')"
function ativarFormularioFlutuante(campoParaPreenchimento,labelPreenchimento){

   $(".input-flutuante-acessibilidade").fadeIn(500);
   //$(".barra-navegacao").hide(0);

   $("#fieldInputFlutuante").val($(campoParaPreenchimento).val());

   localStorage.setItem("campoParaPreenchimento",campoParaPreenchimento);

   $("#fieldInputFlutuante").focus();
   $('.input-flutuante-acessibilidade label').html(labelPreenchimento);

}

function validarFormularioFlutuante(event){

    event.preventDefault();

    var fieldInputFlutuante = $("#fieldInputFlutuante").val();
    
    $(".input-flutuante-acessibilidade").fadeOut(500);
    //$(".barra-navegacao").show(0);

    $(localStorage.getItem("campoParaPreenchimento")).val(fieldInputFlutuante);

}

// GARANTIR O FECHAMENTO DO CAMPO QUANDO A TELA VOLTAR AO NORMAL
$(document).ready(function() {
  var _originalSize = $(window).width() + $(window).height()
  $(window).resize(function() {
    if ($(window).width() + $(window).height() == _originalSize) {
      console.log("keyboard active "+_originalSize);
      $(".input-flutuante-acessibilidade").fadeOut(500);
      //$(".barra-navegacao").show(0);
    }
  });
});


/* FUNÇÃO PARA COMPARTILHAMENTO EXTERNO */
function compartilhar(){
  

                  // this is the complete list of currently supported params you can pass to the plugin (all optional)
                  var options = {
                    message: 'Rede Social Agroh', // not supported on some apps (Facebook, Instagram)
                    subject: 'A rede social do Agronegócio', // fi. for email
                    //files: ['', ''], // an array of filenames either locally or remotely
                    url: 'https://www.agroh.com.br',
                    chooserTitle: 'Agroh', // Android only, you can override the default share sheet title
                    //appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
                    //iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
                  };

                  var onSuccess = function(result) {
                    console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
                    console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
                  };

                  var onError = function(msg) {
                    console.log("Sharing failed with message: " + msg);
                  };

                  window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);


}


   

     // CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS
     function uploadLocal(){

         console.log("ENTRAMOS!");
         //var files = $(this)[0].files;

         $(".retorno-upload").css("padding-bottom","24px");

         $(".retorno-upload").html(`<img src="assets/images/loading.gif" style="width:32px;height:auto;"> Estamos enviando suas imagens, aguarde.`);
         
         /* Efetua o Upload 
         $('.fileForm').ajaxForm({
          dataType:  'json',
          success:   processJson 
         }).submit();
         */

     }
     function processJson(dados) { 

            // 'data' is the json object returned from the server 
            console.log("%c RETORNO SOBRE O ENVIO DAS IMAGENS (UPLOAD):","background:#ff0000;color:#fff;");
            console.log(dados); 
            
            if(dados.erros===null){
            
              console.log("NENHUM ERRO!");
              $(".retorno-upload").html(`<i class="fa fa-check"></i> Imagem enviada com sucesso!`);

              // LIMPAR A SESSAO
              $(".card").html("");

              $(".card").append(`

                           <div class="caixa-preview-imagem-carregada" data-id="${0}" data-url="${dados.dados[0].url}" id="caixaPreviewImagemCarregada${0}">
                              <div style="margin-left:auto;margin-right:auto;position:relative;display:block;width:100px;height:100px;border-radius:8px;background:url('${app.urlCdn}${dados.dados[0].url}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                  &nbsp;
                              </div>
                              <p>
                                <a href="javascript:void(0)" onclick="app.views.removerImagemGaleriaImagens(${0})" title="Remover essa imagem" style="font-size:13px;color:#ff0000;">
                                  <i class="fa fa-times"></i> remover
                              </a>
                              </p>
                           </div>

              `);  

              $("#imagemOculta").val(dados.dados[0].url);
              $("#tipoImagem").val("batch");


            }else{
              
              $(".retorno-upload").html('<div class="alert alert-danger">'+dados.erros+'</div>');              

            }

            $('.fileForm').resetForm();

        }
      // CODIGOS PARA UPLOAD DE ARQUIVOS LOCAIS















