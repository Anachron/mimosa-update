
  var fs = require( "fs" )
  , path = require( "path" )
  , os = require( "os" )
  , config = require( "./config" )
  , logger = null;

  var _updatePackages = function ( mimosaConfig ){

  };

  var registerCommand = function ( program, retrieveConfig ) {
    program
      .command( "update" )
      .option("-D, --upddebug", "run in debug mode")
      .description( "update your npm-modules and bower-components and push the changes to bower.json & package.json" )
      .action( function( opts ){
        retrieveConfig( false, !!opts.upddebug, function( mimosaConfig ) {
          logger = mimosaConfig.log;

          var ms = mimosaConfig.modules;
          if ( ms.indexOf( "update" ) > -1 || ms.indexOf( "mimosa-update" ) > -1 ) {
            _updatePackages( mimosaConfig );
          } else {
            logger.error( "You have called the minimage command on a project that does not have minify-img included. To include bower, add \"minify-img\" to the \"modules\" array." );
          }

        });
      });
  };

  module.exports = {
    registerCommand: registerCommand,
    defaults:        config.defaults,
    placeholder:     config.placeholder,
    validate:        config.validate
  };