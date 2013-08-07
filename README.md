component-livescript
====================

Component(1) plugin to compile LiveScript files on-the-fly. This allows you to write components in LiveScript.
Based on [anthonyshort/component-coffee](https://github.com/anthonyshort/component-coffee).


## Installation

```bash
npm install component-livescript
```

## Usage

```bash
component build --use component-livescript
```

Add you LiveScript files to the `scripts` section of your `component.json`

```json
{
  "name": "foo",
  "scripts": ["index.ls", "foo.ls", "bar.ls"]
}
```

Now in your `index.ls` file you can require or [require!](http://livescript.net/#operators) it:

```livescript
foo = require 'foo'
require! bar
```