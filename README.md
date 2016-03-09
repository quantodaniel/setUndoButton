# setUndoButton
Simple way to show an undo button and set time to execute action via javascript

Default options
--------------
```javascript
{
  time: 5, // in seconds
  text: "undo",
  showCountdown: true,
  onClick: function() {},
  onTimeout: function() {}
};
```

How to use
--------------
```javascript
$("a").setUndoButton({
  time: 5, // in seconds
  text: "undo action",
  onTimeout: function() {
    this.remove(); // 'this' is the jQuery object
  }
});
```
