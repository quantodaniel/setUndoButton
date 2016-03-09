# setUndoButton
Simple way to show an undo button and set time to execute action via javascript

Default options
--------------
```javascript
{
  time: 5, // in seconds
  text: "undo",
  showCountdown: true,
  onUndo: function() {},
  onClick: function() {},
  onTimeout: function() {}
};
```

Examples
--------------

```html
<ul>
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
  <li><a href="#">Link 4</a></li>
  <li><a href="#">Link 5</a></li>
</ul>
```

```javascript
$("a").setUndoButton({
  time: 5, // in seconds
  text: "undo action",
  onTimeout: function($target) {
    $target.parent().remove(); // '$target' is the jQuery object
  }
});
```
![Alt text](http://g.recordit.co/0fTi6PMEsm.gif "Example")

```javascript
$("a").setUndoButton({
  time: 5, // in seconds
  text: "undo",
  showCountdown: false,
  onClick: function($target) {
    $target.parent().toggleClass("opacity"); // '$target' is the jQuery object
  },
  onUndo: function($target) {
    $target.parent().toggleClass("opacity"); // '$target' is the jQuery object
  },
  onTimeout: function($target) {
    $target.parent().slideUp(); // '$target' is the jQuery object
  }
});
```
![Alt text](http://postimg.org/image/ihowk0fob/ "Example")

