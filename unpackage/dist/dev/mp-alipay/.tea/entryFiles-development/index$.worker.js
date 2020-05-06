if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/cartcontrol?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/shopcart?hash=8378ca32c667f8d32589f3effc194ede9613a931');
require('../../pages/index/index?hash=b50fd784c1ea1a341725ea8728360947c65313ed');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}