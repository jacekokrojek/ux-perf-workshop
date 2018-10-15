## Chapter 2 - Navigation and Resource Timing API

### Resources
* [Navigation Timing API](https://www.w3.org/TR/navigation-timing/#sec-window.performance-attribute)
* [Resource Timing API](https://w3c.github.io/resource-timing/)

### Samples
* [DOMContentLoaded vs Load](http://practiqa.pl/DOMContentLoaded/index-ad.html)
* Collecting metrics using JavaScript and Navigation Timing
```
var t = performance.timing;
var interactive = t.domInteractive - t.navigationStart, 
	dcl = t.domContentLoadedEventStart - t.navigationStart, 
	complete = t.domComplete - t.navigationStart;
console.log('interactive: ' + interactive + 'ms, ' + 'dcl: ' + dcl + 'ms, complete: ' + complete + 'ms');
```
### Exercise 2
1. Collect metrics sites you selected earlier and store results in [UX Performance Workshop](http://bit.ly/2yjfXJM) directory using Google Sheet. You can use script in `protractor` and execute command `protractor conf.js --baseUrl <test-url>`
2. Collect time to domInteractive event.

