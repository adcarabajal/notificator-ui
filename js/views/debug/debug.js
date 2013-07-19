define(function(require){

    var $ = require('jquery'),
        debugTemplate = require('text!views/debug/debugTemplate.html'),
        _ = require('underscore'),
        notificatorApi = require('notificatorApi');


    var debugView = {

        rendered: false,

        render: function(){

            var template = $(debugTemplate)
            $(".main-container").empty();
            $(".main-container").append(template);


        },

        loadChannels: function(){

            /*notificatorApi.channels.getSummary().done(function(data){

                _.each(data, function(val, key){
                    new channelSummary({channel:key, clientsConnected:val});
                });



            });*/



        }

    }

    return debugView;

});