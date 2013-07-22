define(function(require){

    var $ = require('jquery'),
        debugTemplate = require('text!views/debug/debugTemplate.html'),
        _ = require('underscore'),
        notificatorApi = require('notificatorApi'),
    notificatorDebug = require('notificatorDebug');

    var paused = false;

    var debugView = {

        rendered: false,

        channel: "",

        render: function(channel){

            var template = $(debugTemplate)
            $(".main-container").empty();
            $(".main-container").append(template);

            this.channel  = channel;

            this.attachEvents();

        },

        attachEvents: function(){
            var channel = new notificatorDebug(this.channel);

            channel.onMessageReceived = function(message){

                if(!paused){
                    $("#debug_waiting").remove();
                    var debug_console = $("#debug_console");
                    var row = $("<tr>");

                    row.append($("<td></td>"));
                    row.append($("<td>" + message.event + "</td>"));
                    row.append($("<td>" + message.id + "</td>"));
                    row.append($("<td>" + JSON.stringify(message.data)+ "</td>"));
                    row.append($("<td>" + (new Date()) + "</td>"));

                    debug_console.append(row);
                }

            }


            $("#clear_console").on('click', function(){
                $("#debug_console").empty();
            });


            $("#toggle_logging").on('click', function(){
                paused = (paused)?false:true;

                if(paused){
                    $("#toggle_logging").text("Resume");
                }else{
                    $("#toggle_logging").text("Pause");
                }

            });

        }

    }

    return debugView;

});