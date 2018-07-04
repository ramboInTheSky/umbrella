# umbrella
Welcome to umbrella🌲! A project to support webapps and React components as NPM packages

## Developing

### Prerequisites

```npm``` or ```yarn``` are required for this project


### Setup

To build the project run the following steps

To install dependencies for the monorepo, run
```
npm install
```

To install all dependencies for all packages, run
```
npm run bootstrap
```

To build all packages, run
```
npm run build
```

A shortcut for the 2 previous commands is (note this also cleans all generated sources)
```
npm run rebuild
```

### Making Changes

Steps to create a new package

1. add a new package directory to the most fitting directory listed in lerna.json
1. add package.json, gulpfile, tsconfig.json, tslint.json, and src code
1. run ```npm run bootstrap``` (this installs all needed dependencies)
1. run ```npm run dev``` (this launches gulp watch on all src files and runs storybook locally)

## Testing

TODO


## Deployment

TODO

## Built With

* [Typescript](https://www.typescriptlang.org/) - A typed superset of JavaScript
* [Babel](http://babeljs.io/) - A JavaScript compiler
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Lerna](https://lernajs.io/) - A tool for managing JavaScript projects with multiple packages
* [Gulp](https://gulpjs.com/) - A streaming build system
* [Emotion](https://emotion.sh/) - A performant and flexible CSS-in-JS library
* [TSLint](https://palantir.github.io/tslint/) - An extensible linter for the TypeScript language.
* [FontAwesome](https://fontawesome.com/) - The iconic SVG, font, and CSS toolkit
* [Storybook](https://storybook.js.org/) - The UI Development Environment
* [Browserslist](https://github.com/browserslist/browserslist) - Library to share target browsers between different front-end tools

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://bitbucket.daltanius.net/plugins/servlet/view-tags?repo=umbrella&projKey=NPM).
