class App {
//window.history.pushState(e, '"' + e+ '"', paginaSessao+'#' + e);
    constructor(appId, appName, appVersion, appOs, ambiente, token, tokenSms, apiLogin, apiSenha) {

        this.appId = appId;
        this.appName = appName;
        this.appVersion = appVersion;        
        this.appOs = appOs;

        this.views = new Views();
        this.sessao = new Sessao();
        this.models = new Models();
        this.helpers = new Helpers();

        if(ambiente=="HOMOLOGACAO"){
             
            this.urlDom = "http://127.0.0.1:8080/pommo-diogenes/www/";
            this.urlApi = "http://127.0.0.1:8080/pommo-diogenes/api/";
            this.urlCdn = "http://127.0.0.1:8080/pommo-diogenes/cdn/";

        }
        if(ambiente=="PRODUCAO"){

            this.urlDom = "http://127.0.0.1:8080/pommo-diogenes/www/";
            this.urlApi = "http://127.0.0.1:8080/pommo-diogenes/api/";
            this.urlCdn = "http://127.0.0.1:8080/pommo-diogenes/cdn/";

        }

        this.token = token;
        this.tokenSms = tokenSms;

        this.apiLogin = apiLogin;
        this.apiSenha = apiSenha;

        this.omniToken = "";

        this.intervalo;
        
    }
    
    getVersion() {

        return this.appVersion;
    }

    getOs(){

        return this.appOs;
    }
    
    initApp(elemento){

        this.views.viewPrincipal();

        // VERIFICAR SE A API ESTÁ OK
        this.models.testeApi();

        // MANTER TELA SEMPRE LIGADA (EM CONSTRUÇÃO)
        //KeepAwake.start();

        // VERIFICAR SE O USUÁRIO ESTÄ LOGADO (LOGIN OU IDENTIFICAÇÃO SÃO DISPENSÁVEIS)
        //this.sessao.verificarLogado();

        // INICIAR O CRONOMETRO PADRÂO COM 30 MINUTOS
        $('.mini-cronometro').each(function(i, obj) {

            var minutosPCA  = jQuery(this).find(".mini-minutos");
            var segundosPCA = jQuery(this).find(".mini-segundos");

            app.startTimer(60 * 30, minutosPCA, segundosPCA);

        });

    }

    inicio(){

        this.views.viewPrincipal();
        this.views.ativarMenuUm();

    }

    testes(){

        aviso("Oops! Função não habilitada nessa versão","Desabilitamos essa versão por causa do desenvolvimento em andamento.");

    }

    // INICIAR O CRONOMETRO
    startTimer(duration, minutosSeletor, segundosSeletor) {

                          clearInterval(this.intervalo);

                          var timer = duration, minutes, seconds;
                          this.intervalo = setInterval(function () {

                              minutes = parseInt(timer / 60, 10);
                              seconds = parseInt(timer % 60, 10);

                              minutes = minutes < 10 ? "0" + minutes : minutes;
                              seconds = seconds < 10 ? "0" + seconds : seconds;

                              $(minutosSeletor).html(minutes);
                              $(segundosSeletor).html(seconds);

                              
                              if(minutes==0 && seconds==0){

                                  console.log("Acabou o tempo! Vamos avisar o usuário!");

                                  // VIBRAR
                                  navigator.vibrate(3000);

                                  // AVISO NA TELA
                                  aviso("Tempo encerrado!","Você conseguiu chegar ao fim da tarefa, fazendo o que tinha planejado?");
                                  
                                  //setTimeout(function(){
                                  //    location.href=homeUrl;
                                  //}, 3200);

                                  // DISPENSAVEL A REINICIALIZAÇÃO
                                  //minutes = parseInt(timer / 60, 10);

                                  clearInterval(app.intervalo);
                                  //seconds = parseInt(timer % 60, 10);

                              }

                              if (--timer < 0) {
                                  timer = duration;
                              }

                          }, 1000);

    }

    // PROCESSAR NOVO CRONOMETRO
    novoCronometro(form){

              var assunto = jQuery("#assunto").val();  
              var tempo   = jQuery("#tempo").val();  
              var cor     = jQuery("#cor").val();

              $("header").css("background",`${cor}`);
              $("section#content").css("background",`${cor}`);

              $("#assuntoTitulo").html(assunto);

              // INICIAR O CRONOMETRO
              $('.mini-cronometro').each(function(i, obj) {

                    var minutosPCA  = jQuery(this).find(".mini-minutos");
                    var segundosPCA = jQuery(this).find(".mini-segundos");

                    app.startTimer(60 * tempo, minutosPCA, segundosPCA);

              });

              closeBackdrop();

    }


}


class Sessao{
    
}