if (Meteor.isClient) {
}

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup

    var path = Npm.require('path');
    var __dirname = process.env.PWD;

    ghost({
  		config: path.join(__dirname, 'config.js')
	   });

	  ghost().then(function (ghostServer) {

      //var config = ghostServer.config;
      //console.log(config);

      ghostServer.start();
    });
  });
}
