# eslint-plugin-eslint-lodash-map-plugin

Replace _.map with Array#map

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-lodash-map-plugin`:

```
$ npm install eslint-plugin-eslint-lodash-map-plugin --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-lodash-map-plugin` globally.

## Usage

Add `eslint-lodash-map-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-lodash-map-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-lodash-map-plugin/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





