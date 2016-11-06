'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TelegramBaseCallbackQueryController = Telegram.TelegramBaseCallbackQueryController
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('239266375:AAGKAncJinz7lVPR1NNZnJNpNspt_XAuVMw')

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

class UrgenciaController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    // Metodo que irá gerenciar as requisicoes'
    urgenciaHandler($) {
      // Monta o menu principal  
      $.runMenu({
          message: 'Qual sua Urgência?',
          options: {
              parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
          },
          'SAMU':{
              message: 'Qual a sua ocorrencia?',
              'Acidente de Carro': () => {
                  // Monta o menu em caso de Acidente de Carro
                  $.runMenu({
                    message: 'Quantas Vítimas existem no local?',
                    options: {
                        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                    },
                    'Nenhuma':{
                        message: 'Por favor, encaminhe o ferido para o hospital mais próximo.',
                    },
                    '1':{
                        message: 'A pessoa se encontra',
                        'conciente': () => {
                            $.runMenu({
                                message: 'Quais ferimentos a vitima apresenta?',
                                options: {
                                    parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                                },
                                'Nenhum visivel':{
                                    message: 'Por favor, encaminhe o ferido para o hospital mais próximo.',
                                },
                                'Sangramento':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'Fratura Esposta':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'anyMatch': () => { //will be executed at any other message
                                }
                            })
                        },
                        'inconciente': () => {
                            $.runMenu({
                                message: 'Quais ferimentos a vitima apresenta?',
                                options: {
                                    parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                                },
                                'Nenhum visivel':{
                                    message: 'Por favor, encaminhe o ferido para o hospital mais próximo.',
                                },
                                'Sangramento':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'Fratura Esposta':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'anyMatch': () => { //will be executed at any other message
                                }
                            })
                            
                        }
                    },
                    '2 ou mais':{
                        message: 'Qual a sua ocorrencia?',
                        'Incendio': () => {
                            $.sendMessage('Qual é o tamanho do Incendio?')
                            /*$.waitForRequest
                                .then($ => {
                                    //$.sendMessage($.message.text)
                                })*/
                        },
                        'Acidente': () => {
                            $.sendMessage('Ocorreu em um ambiente:')
                            
                        }
                    },
                    'anyMatch': () => { //will be executed at any other message
                    }
                })
              },
              'Urgencia de Saúde': () => {
                  // Monta o menu em caso de Urgencia de Saude
                  $.runMenu({
                    message: 'Quantas Vítimas existem no local?',
                    options: {
                        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                    },
                    'Nenhuma':{
                        message: 'Por favor, encaminhe o ferido para o hospital mais próximo.',
                    },
                    '1':{
                        message: 'A pessoa se encontra',
                        'conciente': () => {
                            $.runMenu({
                                message: 'Quais ferimentos a vitima apresenta?',
                                options: {
                                    parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                                },
                                'Nenhum visivel':{
                                    message: 'Por favor, encaminhe o ferido para o hospital mais próximo.',
                                },
                                'Sangramento':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'Fratura Esposta':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'anyMatch': () => { //will be executed at any other message
                                }
                            })
                        },
                        'inconciente': () => {
                            $.runMenu({
                                message: 'Quais ferimentos a vitima apresenta?',
                                options: {
                                    parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                                },
                                'Nenhum visivel':{
                                    message: 'Por favor, encaminhe o ferido para o hospital mais próximo.',
                                },
                                'Sangramento':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'Fratura Esposta':{
                                    message: 'Precisa de uma ambulancia no Local?',
                                    'Sim':() => {
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    },
                                    'Não':()=>{
                                        $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                                        $.waitForRequest
                                            .then($ => {
                                                $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                            })
                                    }
                                },
                                'anyMatch': () => { //will be executed at any other message
                                }
                            })
                            
                        }
                    },
                    '2 ou mais':{
                        message: 'Qual a sua ocorrencia?',
                        'Incendio': () => {
                            $.sendMessage('Qual é o tamanho do Incendio?')
                            /*$.waitForRequest
                                .then($ => {
                                    //$.sendMessage($.message.text)
                                })*/
                        },
                        'Acidente': () => {
                            $.sendMessage('Ocorreu em um ambiente:')
                            
                        }
                    },
                    'anyMatch': () => { //will be executed at any other message
                    }
                })       
              }
          },
          'POLICIA':{
              message: 'Qual a sua ocorrencia?',
              'Assalto ou Furto': () => {
                  // Menu da quantidade de vitimas
                  $.runMenu({
                    message: 'Quantas Vítimas existem no local?',
                    options: {
                        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                    },
                    'Nenhuma':{
                        message: 'Estão armados?',
                        'Sim':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        }
                    },
                    '1':{
                        message: 'Estão armados?',
                        'Sim':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao 
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao 
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        }
                    },
                    '2 ou mais':{
                        message: 'Estão armados?',
                        'Sim':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                    //$.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                    //$.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                                })
                            
                        }
                    },
                    'anyMatch': () => { //will be executed at any other message
                    }
                  })
              },
              'Violencia x Mulher': () => {
                  $.runMenu({
                    message: 'Quantas Vítimas existem no local?',
                    options: {
                        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                    },
                    'Nenhuma':{
                        message: 'Estão armados?',
                        'Sim':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        }
                    },
                    '1':{
                        message: 'Estão armados?',
                        'Sim':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao 
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao 
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        }
                    },
                    '2 ou mais':{
                        message: 'Estão armados?',
                        'Sim':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                    //$.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Por favor envie sua localização para que possamos enviar uma unidade dos bombeiros para o seu local.')
                            // Aguarda o usuario enviar a Localizacao
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                    //$.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                                })
                            
                        }
                    },
                    'anyMatch': () => { //will be executed at any other message
                    }
                  })
                  
              }
          },
          'BOMBEIROS':{
              message: 'Qual a sua ocorrencia?',
              'Incendio': () => {
                  $.runMenu({
                    message: 'Qual é o tamanho do foco de Incendio',
                    options: {
                        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                    },
                    'Pequeno (fogueira)':{
                        message: 'Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.',
                        /*'Sim':() => {
                            $.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                        },
                        'Não':() => {
                            $.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                        }*/
                    },
                    'Mediano':{
                        message: 'Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.',
                        /*'Sim':() => {
                            $.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                        },
                        'Não':() => {
                            $.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                        }*/
                    },
                    'Grande (1 quadra+)':{
                        message: 'Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.',
                        /*'Sim':() => {
                            $.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                        },
                        'Não':() => {
                            $.sendMessage('Recebemos sua ocorrencia e estamos enviando uma unidade policial para seu local.')
                        }*/
                    },
                    'anyMatch': () => { //will be executed at any other message
                    }
                })
                  
              },
              'Acidente': () => {
                  $.runMenu({
                    message: 'O Acidente ocorreu em um lugar: ',
                    options: {
                        parse_mode: 'Markdown' // in options field you can pass some additional data, like parse_mode
                    },
                    'Fechado':{
                        message: 'Existe algum foco de incendio no local?',
                        'Sim':() => {
                            $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        }
                    },
                    'Aberto':{
                        message: 'Existe algum foco de incendio no local?',
                        'Sim':() => {
                            $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        },
                        'Não':() => {
                            $.sendMessage('Envie por favor sua localização para que possa ser enviado uma unidade dos bombeiros para sua local.')
                            $.waitForRequest
                                .then($ => {
                                    $.sendMessage('Enviando viatura para https://www.google.com.br/maps/@'+$.message._location._latitude+','+$.message._location._longitude+',21z')
                                })
                        }
                    },
                    'anyMatch': () => { //will be executed at any other message
                    }
                })
                  
              }
          },
          'anyMatch': () => { //will be executed at any other message

          }
      })
    }

    get routes() {
        return {
            'urgenciaCommand': 'urgenciaHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('ping', 'pingCommand'),
        new PingController()
    ).
    when(
      new TextCommand('urgencia', 'urgenciaCommand'),
      new UrgenciaController()
    )
