DEPRECATED - This package is deprecated in favor of [carma-tap-webpack](https://github.com/bySabi/carma-tap-webpack)

# a Karma and TAP test boilerplate configuration.

> [Karma][karma] settings for `Project` testing using [TAP][tap]

[karma]: http://karma-runner.github.io/1.0/index.html
[tap]: https://testanything.org/

This project is not a full starting point repository, only cover boilerplate settings related to `test`. Don't opinionated on `build`, `lint` or any other topic relate to projects development.

Setting `Karma` with many plugins it is a time consuming process, many hours of trial and error.

## What's include ?
* [karma][karma], the test runner.
* [karma-tap](https://github.com/tmcw-up-for-adoption/karma-tap), karma TAP adapter.
* [karma-tap-pretty-reporter](https://github.com/bySabi/karma-tap-pretty-reporter) cause everyone need a nice output. See supported [prettifiers](https://github.com/bySabi/karma-tap-pretty-reporter#supported-prettifiers)
* [tape](https://github.com/substack/tape) for test harness on node and browsers.
* [tap-lochness](https://github.com/bySabi/tap-lochnest) for nested TAP test.
* karma browser launchers `karma-chrome-launcher`, `karma-jsdom-launcher`, ...
* [webpack](https://webpack.github.io/) and [karma-webpack](https://github.com/webpack/karma-webpack)

## Why `webpack` is needed for test?
* When we test code on browsers at the end we will need bundle sources, test files and assets. Other solutions can be use like `browserify`. We opinionated on `webpack`
* When Hot Module Replacement (HMR) is needed, webpack is the way to go.
* On Karma `autowatch` mode, for a good performance, a robust cache and rebuild solution is needed, `webpack` is best on this apart.

## Why all `karma` complex setup, why not just use the very simple [tape](https://github.com/substack/tape)?
If your project tests need
* browsers launch/switch/management
* file bundle
* file watch mode

Karma will provide it!

## Usage

```bash
git clone https://github.com/bySabi/karma--tap--boilerplate

cd karma--tap--boilerplate
npm install
npm run testonly
```
Edit `spec/test_spec.js` to see `watch` file functionality in action

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[ISC][isc-license]

[isc-license]:./LICENSE
