[![travis build](https://img.shields.io/travis/bkoper/artik-io-devices.svg?style=flat-square)](https://api.travis-ci.org/bkoper/artik-io-devices.svg?branch=master)
[![codecov coverage](https://img.shields.io/codecov/c/github/bkoper/artik-io-devices.svg?style=flat-square)](https://codecov.io/github/bkoper/artik-io-devices)
[![MIT License](https://img.shields.io/github/license/bkoper/artik-io.svg?style=flat-square)](http://opensource.org/licenses/MIT)

_Description as well as whole project is still under construction. It is not final version_

# artik-io-devices

This is part of the project [artik-io project](https://github.com/bkoper/artik-io).
It contains devices that uses Artik GPIO interface.

## Structure
- ```devices``` - list of sample (or typical) devices that you can connect to artik
    - ```device.js``` - main prototype for rest of devices
- ```examples``` - list of samples

## Installation

### Build for developer purposes
```
npm i
npm build
```

### Production build
```
npm i
npm build
```
it will output library files to ```dist``` directory, which meant to be included in npm package.


## Usage and samples

To get full overview please refer to ```src/examples``` where you can find list of use cases
for devices. You can also check ```devices``` directory, where you can get an idea how devices are created.
All of them are pretty simple, but you can get an idea how to use this library.