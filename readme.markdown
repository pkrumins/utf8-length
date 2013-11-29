# utf8-bytes

return the number of bytes in a unicode string

# example

``` js
var bytes = require('utf8-bytes');
console.log(bytes('¡dooq dǝǝq'));
```

result:

```
$ node example/beep.js
13
```

# methods

``` js
var bytes = require('utf8-bytes')
```

## bytes(string)

Return the number of bytes needed to store `string`.

# install

With [npm](https://npmjs.org) do:

```
npm install utf8-bytes
```

# license

MIT
