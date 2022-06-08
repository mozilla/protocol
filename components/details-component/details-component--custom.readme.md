The functions driving the Details component can be called independently for any container
element. It won’t recieve any styling without the Protocol classes so you’ll have to
style it separately (styles in this demonstration are intentionally tacky).

Initialized using `Mzp.Details.init(selector, options)`, where `options` is an Object with the following properties:
  - `onDetailsOpen` [Function] callback when a details is opened (optional).
  - `onDetailsClosed` [Function] callback when a details is closed (optional).
