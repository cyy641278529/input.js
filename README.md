## Input States

Update input states every frame.

## Install

```bash
npm install input.js
```

## Usage

```javascript
let input = new Input();

function animate() {
  if (input.keydown('w')) {
    console.log('key w down');
  }

  input.reset();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

## Documentation

- [Mouse](docs/mouse.md)
- [Keyboard](docs/keyboard.md)
- [Touches](docs/touches.md)

## TODO

 - options
   - lock-filter (a filter function to decide if enter the lock state)
 - api
   - installTouches()
 - extensions
   - input.mouseclick(name, downupSpan, dragDistance)
   - input.mouseclicks(name, clickCount, downupSpan, clickSpan, dragDistance)
   - input.keyclick(name, downupSpan)
   - input.keyclicks(name, clickCount, downupSpan, clickSpan)

## selenium sample

Download browser's drivers and add them to environment path

e.g. chromedriver: 

http://chromedriver.storage.googleapis.com/index.html 

taobao mirror:

https://npm.taobao.org/mirrors/chromedriver/

then run:

```bash
npm auto-test
```

## License

MIT © 2017 Johnny Wu