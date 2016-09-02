
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function ApplicationGrafana(args, metadata) {
    Application.apply(this, ['ApplicationGrafana', args, metadata, {
      src: '',
      title: metadata.name,
      icon: metadata.icon,
      width: 960,
      height: 640,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);

     var src = document.location.protocol + "//" + document.location.hostname + ":3000";

    this.options.src = src;
  }

  ApplicationGrafana.prototype = Object.create(Application.prototype);

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.ApplicationGrafana = OSjs.Applications.ApplicationGrafana || {};
  OSjs.Applications.ApplicationGrafana.Class = ApplicationGrafana;

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
