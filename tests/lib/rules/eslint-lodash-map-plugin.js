/**
 * @fileoverview Replace _.map with Array#map
 * @author Elizaveta Borisova
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-lodash-map-plugin"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("eslint-lodash-map-plugin", rule, {

    valid: [
    ],

    invalid: [
        {
            code: "_.map(collection, fn);",
            errors: [{ message: "Array#map() can be used instead of _.map()", }],
            output: "ZDAROVA;"
        }
    ]
});
