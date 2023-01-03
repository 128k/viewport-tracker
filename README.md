# viewport-tracker
A JavaScript app that shows you what is in a mobile device viewport and for how long.

## Usage

1. Add the viewport-tracker.js file to your project.
2. Include the script in your HTML page:

```javascript
<script src="viewport-tracker.js"></script>
```

3. Add a div element to your HTML page with an id of "viewport-info":

```javascript
<div id="viewport-info"></div>
```

4. Add another div element with an id of "viewport-timer":

```javascript
<div id="viewport-timer"></div>
```

5. The app will automatically display the current viewport size in the "viewport-info" div and track how long the viewport has been unchanged in the "viewport-timer" div.
6. You can customize the appearance of the page based on the viewport size using media queries and the matchMedia function. See the example below:

```javascript
var mobileQuery = matchMedia("(max-width: 600px)");
if (mobileQuery.matches) {
  // The viewport is 600 pixels wide or less (mobile view)
  document.body.style.backgroundColor = "red";
} else {
  // The viewport is wider than 600 pixels (desktop view)
  document.body.style.backgroundColor = "blue";
}
```
