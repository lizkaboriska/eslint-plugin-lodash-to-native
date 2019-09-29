/**
 * @fileoverview Replace _.map with Array#map
 * @author Elizaveta Borisova
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/map"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("map", rule, {

    valid: [
    ],

    invalid: [
        {
            code: "_.map(collection, fn);",
            errors: [{ message: "Array#map() can be used instead of _.map()", }],
            output: "(Array.isArray(collection) ?  collection.map(fn) : _.map(collection, fn);"
        }
    ]
});
