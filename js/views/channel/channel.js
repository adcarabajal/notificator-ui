define(function(require){

    var $ = require('jquery'),
    channelTemplate = require('text!views/channel/channelTemplate.html'),
    _ = require('underscore'),
    channelSummary = require('channelSummary'),
    notificatorApi = require('notificatorApi');


    var channelView = {

        rendered: false,

        render: function(){

            var template = $(channelTemplate)
            $(".main-container").empty();
            $(".main-container").append(template);

            this.loadChannels();
        },

        loadChannels: function(){

            notificatorApi.channels.getSummary().done(function(data){

                _.each(data, function(val, key){
                    new channelSummary({channel:key, clientsConnected:val});
                });



            });



        }

    }

    return channelView;

});

