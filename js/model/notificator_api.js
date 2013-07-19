define(function(require){

    var basePath = "http://localhost:8089/api/";

    var $ = require('jquery');

    $.ajaxSetup({
        cache: false
    });

    var notificatorApi = {

        channels: {
            path: 'channels',

            getSummary: function() {
                return $.getJSON(basePath + this.path + '/summary');
            },

            sendMessage: function(channel, message){
                return   $.ajax({
                    type:'POST',
                    url: basePath + this.path + '/send_message?channel=' + channel,
                    data:JSON.stringify(message),
                    contentType: "application/json",
                    dataType: "json"
                });
            }
        }


    };

    return notificatorApi;
});
