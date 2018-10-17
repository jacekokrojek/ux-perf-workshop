describe('Protractor ', function () {

	it('should should present page stats', function () {
		browser.driver.get(browser.baseUrl);
		var script = 'var performance = window.performance || window.webkitPerformance || window.mozPerformance || window.msPerformance || {}; var timings = performance.timing || {}; return timings;';
		var text = browser.executeScript(script).then(function (t) {
			var dcl = t.domContentLoadedEventStart - t.navigationStart,
				complete = t.domComplete - t.navigationStart;
			var textContent = ['dcl: ' + dcl + 'ms, complete: ' + complete + 'ms'];
			console.log(browser.baseUrl + ' navigation times: ', textContent);
		});
	});

});
