/**
 * @fileoverview Replace _.map with Array#map
 * @author Elizaveta Borisova
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion", 
        docs: {
            description: "Replace _.map with Array#map",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        let checkUnderscoreMap = function(callNode) {
            const node = callNode.callee;
            if (node == undefined || node.type != "MemberExpression") {
                return;
            }

            const isUnderscoreMapInvokation = node.object.name == "_" && node.property.name == "map";
            const has2Arguments = callNode.arguments != undefined && callNode.arguments.length == 2;
            if (!isUnderscoreMapInvokation || !has2Arguments) {
                return;
            }

            const sourceCode = context.getSourceCode();
            const collectionName = sourceCode.getText(callNode.arguments[0]);
            const filterBody = sourceCode.getText(callNode.arguments[1]);

            context.report({
                node: callNode,
                message: "Array#map() can be used instead of _.map()",
                fix: function(fixer) {
                    const replacement = `Array.isArray(${collectionName}) ? ${collectionName}.map(${filterBody}) : _.map(${collectionName}, ${filterBody})`;
                    return fixer.replaceText(callNode, replacement);
                },
            });
        }

        return {
            "CallExpression": checkUnderscoreMap,
        };
    }
};
