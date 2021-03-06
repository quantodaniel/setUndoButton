# setUndoButton
Simple way to show an undo button and set time to execute action via javascript

## Default options
```javascript
{
  time: 5, // in seconds
  text: "undo",
  countdown: true,
  onUndo: function() {},
  onClick: function() {},
  onTimeout: function() {}
};
```

## Examples
### Simple undo with countdown
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
  onTimeout: function(target) {
    $(target).parent().remove();
  }
});
```
![Alt text](http://g.recordit.co/0fTi6PMEsm.gif "Example")

### More complex with onClick, onUndo and onTimeout events
```javascript
$("a").setUndoButton({
  time: 5, // in seconds
  text: "undo",
  countdown: false,
  onClick: function(target) {
    $(target).parent().toggleClass("opacity"); 
  },
  onUndo: function(target) {
    $(target).parent().toggleClass("opacity"); 
  },
  onTimeout: function(target) {
    $(target).parent().slideUp(); 
  }
});
```
![Alt text](http://s17.postimg.org/b1pmy7rz3/js_click_v2.gif "Example")

