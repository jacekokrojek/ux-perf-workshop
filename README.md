# UX Performance Workshop

1. [Preparation](part-1.md)

## Chapter 1. - Preparing for competitors analysis

### Materials

* [Alexa Top 500 Gobal Sites](https://www.alexa.com/topsites)
* [SimilarWeb - Top Websites Ranking](https://www.similarweb.com/top-websites)

### Exercise 1

1. For a category that you selected find 5 top sites using mentioned tools. Edit `urls.txt` file in the `sidespeed` directory. 
2. Uncomment entry in the crontab file using `crontab -e` command to start collecting measurements
3. Check logs using following commend `tail -f /tmp/sitespeed.io.log`

## Chapter 2 - Navigation and Resource Timing API

### Resources
* [Navigation Timing API](https://www.w3.org/TR/navigation-timing/#sec-window.performance-attribute)
* [Resource Timing API](https://w3c.github.io/resource-timing/)
* [domInteractive: is it? really?](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)

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
1. Collect metrics sites you selected earlier and store results in [UX Performance Workshop](http://bit.ly/2yjfXJM) directory using Google Sheet
2. Collect also time to domInteractive event and find out when this event is triggered.
