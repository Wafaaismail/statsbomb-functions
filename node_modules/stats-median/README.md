# Median [![Build Status](https://travis-ci.org/msn0/stats-median.svg?branch=master)](http://travis-ci.org/msn0/stats-median)

> Calculate median of data.

## Installation

```sh
$ npm install stats-median
```

## Usage

```js
var median = require('stats-median');

var data = [3, 6, 7, 8, 8, 10, 13, 15, 16, 20];

median.calc(data); // → 9
```

### API

#### calc(data)

##### data

Type: `array`

The data to be analysed; an array of numbers.

## License
MIT &copy; [Michał Jezierski](https://pl.linkedin.com/in/jezierskimichal)
