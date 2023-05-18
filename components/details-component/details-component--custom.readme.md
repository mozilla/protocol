The functions driving the Details component can be called independently for any
container element. It won’t receive any styling without the Protocol classes so
you’ll have to style it separately (styles in this demonstration are intentionally
tacky).

### Usage

You can initiate using a custom class name like so:

```javascript
MzpDetails.init('.demo-heading');
```

Callbacks are supported for open and close events:

```javascript
MzpDetails.init('.demo-heading', {
  onDetailsOpen: function(){
    console.log('open');
  },
  onDetailsClose: function(){
    console.log('close');
  }
})
```

A custom component can also be destroyed using:

```javascript
MzpDetails.destroy('.demo-heading');
```
