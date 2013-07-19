// Filename: app.js
define([
    'jquery',
    'underscore',
    'channelView',
    'debugView',
    'backbone',
    'bootstrap'
], function($, _, channelView, debugView){

  
    var App = {

        initialize: function(){

            this.routePaths();
        },

        routePaths: function(){

            var AppRouter = Backbone.Router.extend({
                routes: {
                    "debug/:channel": "debug",
                    "*actions": "defaultRoute"
                }
            });

            var app_router = new AppRouter;


            app_router.on('route:defaultRoute', function(actions) {
                channelView.render();
            });

            app_router.on('route:debug', function(channel) {
                debugView.render(channel);
            });

            Backbone.history.start();

        }
    };

    return App;
});