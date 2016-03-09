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
  onTimeout: function() {
    this.parent().remove(); // 'this' is the jQuery object
  }
});
```

![Alt text](http://g.recordit.co/0fTi6PMEsm.gif "Example")
