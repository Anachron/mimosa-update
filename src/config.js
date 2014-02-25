"use strict";

exports.defaults = function() {
  return {
    update: {
      options: {
        npm: true,
        bower: true,
        save: true,
      },
    }
  };
};

exports.placeholder = function () {
   var ph = "  update:\n" +
      "    options:                             # n" +
      "      npm: true                          # Updates NPM-Modules.\n" +
      "      bower: true                        # Also update Bower-Packages.\n" +
      "      save: true                         # Whether or not save the current versions into bower.json/package.json.\n"
  return ph;
};

exports.validate = function ( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "update config", config.update ) ) {
    var up = config.update;
    if ( validators.ifExistsIsObject( errors, "update.options", up.options ) ) {
      validators.ifExistsIsBoolean( errors, "update.npm", up.options.npm );
      validators.ifExistsIsBoolean( errors, "update.bower", up.options.bower );
      validators.ifExistsIsBoolean( errors, "update.save", up.options.save );
    }
  }

  return errors;
};