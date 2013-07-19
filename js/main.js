require.config({
  paths: {
    jquery: "libs/jquery/jQuery-1.8.3",
    bootstrap: "libs/bootstrap/js/bootstrap.min",
    jqueryui: "libs/jqueryui/jquery-ui-1.10.2.custom.min",
    underscore: "libs/underscore/underscore-min",
    backbone: "libs/backbone/backbone-min",
    barman: 'libs/barman/barman.min',
    channelView: 'views/channel/channel',
    channelSummary: 'modules/channel_summary',
    notificatorApi: 'model/notificator_api',
    debugView: 'views/debug/debug'
  },

  shim: {
  	bootstrap: {
  		deps: ['jqueryui']
  	},
  	jqueryui: {
  		deps: ['jquery']
  	},
    underscore:{
        exports: '_'
    },
    backbone:{
      deps: ['jquery'],
      exports: 'Backbone'
    }
  }
});

require(['app'], function(App){
  App.initialize();
});