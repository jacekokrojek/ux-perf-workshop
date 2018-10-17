exports.config = {

    directConnect: true,

    specs: ['minimal.spec.js'],

    capabilities: {
      'browserName' : 'chrome',
    
		chromeOptions: {
		 args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
		}
	},

	onPrepare: function () {
	  browser.manage().window().setSize(1680, 1050);	
	  browser.ignoreSynchronization = true; 	      
    },

};
