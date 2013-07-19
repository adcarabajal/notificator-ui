define(function(require){

    var $ = require('jquery'),
    barman = require('barman'),
    notificatorApi = require('notificatorApi');


    var channelSummary = barman.Class.create({

        settings: {
           channel: "default-channel",
           clientsConnected:""
        },

        constructor: function (options) {
            $.extend(this.settings, options);
            this.loadChannels();
        },

        loadChannels: function(){
            var channelContainer = $("<div class='span6 app-container'>")
            var channelInfo = $("<div class='settings-info'>");

            channelInfo.append($("<p title='Clients connected on channel'>Clients connected on channel: " + this.settings.clientsConnected + "</p>"))

            channelContainer.append(channelInfo);
            channelContainer.append($("<h4>" + this.settings.channel + "</h4>"));
            channelContainer.append($("<ul class='nav nav-pills'><li class=''><a class='sendMessage' channel='" + this.settings.channel + "' '>Send Message</a></li><li class=''><a href='#debug/" + this.settings.channel +"'>Debug console</a></li></ul>"));


            channelContainer.find(".sendMessage").on('click', function(){
                var channel = $(this).attr('channel');
                $('#modal-send-message').modal('show');

                $("#modal-send-message .btn.btn-primary").on('click', function(){
                    try{
                        JSON.parse($("#messageText").val());
                        $.when(notificatorApi.channels.sendMessage(channel, $("#messageText").val())).done(function(){
                            $('#modal-send-message').modal('hide');
                        });
                    }
                    catch(e){alert(e);}


                });
            });


            $("div .row-fluid.apps").append(channelContainer);

        }
    });

    return channelSummary;

});