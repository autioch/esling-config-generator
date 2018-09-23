/* eslint max-lines: 0 */
/* eslint max-len: 0 */
module.exports = [
  {
    id: 'accessor-pairs',
    meta: {
      docs: {
        description: 'enforce getter and setter pairs in objects',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/accessor-pairs'
      },
      schema: [
        {
          type: 'object',
          properties: {
            getWithoutSet: {
              type: 'boolean'
            },
            setWithoutGet: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        getter: 'Getter is not present.',
        setter: 'Setter is not present.'
      }
    }
  },
  {
    id: 'array-bracket-newline',
    meta: {
      docs: {
        description: 'enforce linebreaks after opening and before closing array brackets',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/array-bracket-newline'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never',
                'consistent'
              ]
            },
            {
              type: 'object',
              properties: {
                multiline: {
                  type: 'boolean'
                },
                minItems: {
                  type: [
                    'integer',
                    'null'
                  ],
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        }
      ],
      messages: {
        unexpectedOpeningLinebreak: "There should be no linebreak after '['.",
        unexpectedClosingLinebreak: "There should be no linebreak before ']'.",
        missingOpeningLinebreak: "A linebreak is required after '['.",
        missingClosingLinebreak: "A linebreak is required before ']'."
      }
    }
  },
  {
    id: 'array-bracket-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing inside array brackets',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/array-bracket-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        },
        {
          type: 'object',
          properties: {
            singleValue: {
              type: 'boolean'
            },
            objectsInArrays: {
              type: 'boolean'
            },
            arraysInArrays: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpectedSpaceAfter: "There should be no space after '{{tokenValue}}'.",
        unexpectedSpaceBefore: "There should be no space before '{{tokenValue}}'.",
        missingSpaceAfter: "A space is required after '{{tokenValue}}'.",
        missingSpaceBefore: "A space is required before '{{tokenValue}}'."
      }
    }
  },
  {
    id: 'array-callback-return',
    meta: {
      docs: {
        description: 'enforce `return` statements in callbacks of array methods',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/array-callback-return'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowImplicit: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        expectedAtEnd: 'Expected to return a value at the end of {{name}}.',
        expectedInside: 'Expected to return a value in {{name}}.',
        expectedReturnValue: '{{name}} expected a return value.'
      }
    }
  },
  {
    id: 'array-element-newline',
    meta: {
      docs: {
        description: 'enforce line breaks after each array element',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/array-element-newline'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never',
                'consistent'
              ]
            },
            {
              type: 'object',
              properties: {
                multiline: {
                  type: 'boolean'
                },
                minItems: {
                  type: [
                    'integer',
                    'null'
                  ],
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        }
      ],
      messages: {
        unexpectedLineBreak: 'There should be no linebreak here.',
        missingLineBreak: 'There should be a linebreak after this element.'
      }
    }
  },
  {
    id: 'arrow-body-style',
    meta: {
      docs: {
        description: 'require braces around arrow function bodies',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/arrow-body-style'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always',
                  'never'
                ]
              }
            ],
            minItems: 0,
            maxItems: 1
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'as-needed'
                ]
              },
              {
                type: 'object',
                properties: {
                  requireReturnForObjectLiteral: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      },
      fixable: 'code',
      messages: {
        unexpectedOtherBlock: 'Unexpected block statement surrounding arrow body.',
        unexpectedEmptyBlock: 'Unexpected block statement surrounding arrow body; put a value of `undefined` immediately after the `=>`.',
        unexpectedObjectBlock: 'Unexpected block statement surrounding arrow body; parenthesize the returned value and move it immediately after the `=>`.',
        unexpectedSingleBlock: 'Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.',
        expectedBlock: 'Expected block statement surrounding arrow body.'
      }
    }
  },
  {
    id: 'arrow-parens',
    meta: {
      docs: {
        description: 'require parentheses around arrow function arguments',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/arrow-parens'
      },
      fixable: 'code',
      schema: [
        {
          'enum': [
            'always',
            'as-needed'
          ]
        },
        {
          type: 'object',
          properties: {
            requireForBlockBody: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpectedParens: 'Unexpected parentheses around single function argument.',
        expectedParens: 'Expected parentheses around arrow function argument.',
        unexpectedParensInline: 'Unexpected parentheses around single function argument having a body with no curly braces.',
        expectedParensBlock: 'Expected parentheses around arrow function argument having a body with curly braces.'
      }
    }
  },
  {
    id: 'arrow-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing before and after the arrow in arrow functions',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/arrow-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            before: {
              type: 'boolean'
            },
            after: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        expectedBefore: 'Missing space before =>.',
        unexpectedBefore: 'Unexpected space before =>.',
        expectedAfter: 'Missing space after =>.',
        unexpectedAfter: 'Unexpected space after =>.'
      }
    }
  },
  {
    id: 'block-scoped-var',
    meta: {
      docs: {
        description: 'enforce the use of variables within the scope they are defined',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/block-scoped-var'
      },
      schema: [],
      messages: {
        outOfScope: "'{{name}}' used outside of binding context."
      }
    }
  },
  {
    id: 'block-spacing',
    meta: {
      docs: {
        description: 'disallow or enforce spaces inside of blocks after opening block and before closing block',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/block-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        }
      ],
      messages: {
        missing: "Requires a space {{location}} '{{token}}'",
        extra: "Unexpected space(s) {{location}} '{{token}}'"
      }
    }
  },
  {
    id: 'brace-style',
    meta: {
      docs: {
        description: 'enforce consistent brace style for blocks',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/brace-style'
      },
      schema: [
        {
          'enum': [
            '1tbs',
            'stroustrup',
            'allman'
          ]
        },
        {
          type: 'object',
          properties: {
            allowSingleLine: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'whitespace',
      messages: {
        nextLineOpen: 'Opening curly brace does not appear on the same line as controlling statement.',
        sameLineOpen: 'Opening curly brace appears on the same line as controlling statement.',
        blockSameLine: 'Statement inside of curly braces should be on next line.',
        nextLineClose: 'Closing curly brace does not appear on the same line as the subsequent block.',
        singleLineClose: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.',
        sameLineClose: 'Closing curly brace appears on the same line as the subsequent block.'
      }
    }
  },
  {
    id: 'callback-return',
    meta: {
      docs: {
        description: 'require `return` statements after callbacks',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/callback-return'
      },
      schema: [
        {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      ],
      messages: {
        missingReturn: 'Expected return with your callback function.'
      }
    }
  },
  {
    id: 'camelcase',
    meta: {
      docs: {
        description: 'enforce camelcase naming convention',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/camelcase'
      },
      schema: [
        {
          type: 'object',
          properties: {
            ignoreDestructuring: {
              type: 'boolean'
            },
            properties: {
              'enum': [
                'always',
                'never'
              ]
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        notCamelCase: "Identifier '{{name}}' is not in camel case."
      }
    }
  },
  {
    id: 'capitalized-comments',
    meta: {
      docs: {
        description: 'enforce or disallow capitalization of the first letter of a comment',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/capitalized-comments'
      },
      fixable: 'code',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        },
        {
          oneOf: [
            {
              type: 'object',
              properties: {
                ignorePattern: {
                  type: 'string'
                },
                ignoreInlineComments: {
                  type: 'boolean'
                },
                ignoreConsecutiveComments: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            },
            {
              type: 'object',
              properties: {
                line: {
                  type: 'object',
                  properties: {
                    ignorePattern: {
                      type: 'string'
                    },
                    ignoreInlineComments: {
                      type: 'boolean'
                    },
                    ignoreConsecutiveComments: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                block: {
                  type: 'object',
                  properties: {
                    ignorePattern: {
                      type: 'string'
                    },
                    ignoreInlineComments: {
                      type: 'boolean'
                    },
                    ignoreConsecutiveComments: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                }
              },
              additionalProperties: false
            }
          ]
        }
      ],
      messages: {
        unexpectedLowercaseComment: 'Comments should not begin with a lowercase character',
        unexpectedUppercaseComment: 'Comments should not begin with an uppercase character'
      }
    }
  },
  {
    id: 'class-methods-use-this',
    meta: {
      docs: {
        description: 'enforce that class methods utilize `this`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/class-methods-use-this'
      },
      schema: [
        {
          type: 'object',
          properties: {
            exceptMethods: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        missingThis: "Expected 'this' to be used by class method '{{name}}'."
      }
    }
  },
  {
    id: 'comma-dangle',
    meta: {
      docs: {
        description: 'require or disallow trailing commas',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/comma-dangle'
      },
      fixable: 'code',
      schema: {
        definitions: {
          value: {
            'enum': [
              'always-multiline',
              'always',
              'never',
              'only-multiline'
            ]
          },
          valueWithIgnore: {
            'enum': [
              'always-multiline',
              'always',
              'ignore',
              'never',
              'only-multiline'
            ]
          }
        },
        type: 'array',
        items: [
          {
            oneOf: [
              {
                $ref: '#/definitions/value'
              },
              {
                type: 'object',
                properties: {
                  arrays: {
                    $ref: '#/definitions/valueWithIgnore'
                  },
                  objects: {
                    $ref: '#/definitions/valueWithIgnore'
                  },
                  imports: {
                    $ref: '#/definitions/valueWithIgnore'
                  },
                  exports: {
                    $ref: '#/definitions/valueWithIgnore'
                  },
                  functions: {
                    $ref: '#/definitions/valueWithIgnore'
                  }
                },
                additionalProperties: false
              }
            ]
          }
        ]
      },
      messages: {
        unexpected: 'Unexpected trailing comma.',
        missing: 'Missing trailing comma.'
      }
    }
  },
  {
    id: 'comma-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing before and after commas',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/comma-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            before: {
              type: 'boolean'
            },
            after: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        missing: "A space is required {{loc}} ','.",
        unexpected: "There should be no space {{loc}} ','."
      }
    }
  },
  {
    id: 'comma-style',
    meta: {
      docs: {
        description: 'enforce consistent comma style',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/comma-style'
      },
      fixable: 'code',
      schema: [
        {
          'enum': [
            'first',
            'last'
          ]
        },
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'object',
              additionalProperties: {
                type: 'boolean'
              }
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpectedLineBeforeAndAfterComma: "Bad line breaking before and after ','.",
        expectedCommaFirst: "',' should be placed first.",
        expectedCommaLast: "',' should be placed last."
      }
    }
  },
  {
    id: 'complexity',
    meta: {
      docs: {
        description: 'enforce a maximum cyclomatic complexity allowed in a program',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/complexity'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'integer',
              minimum: 0
            },
            {
              type: 'object',
              properties: {
                maximum: {
                  type: 'integer',
                  minimum: 0
                },
                max: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        }
      ],
      messages: {
        complex: '{{name}} has a complexity of {{complexity}}.'
      }
    }
  },
  {
    id: 'computed-property-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing inside computed property brackets',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/computed-property-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        }
      ],
      messages: {
        unexpectedSpaceBefore: "There should be no space before '{{tokenValue}}'.",
        unexpectedSpaceAfter: "There should be no space after '{{tokenValue}}'.",
        missingSpaceBefore: "A space is required before '{{tokenValue}}'.",
        missingSpaceAfter: "A space is required after '{{tokenValue}}'."
      }
    }
  },
  {
    id: 'consistent-return',
    meta: {
      docs: {
        description: 'require `return` statements to either always or never specify values',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/consistent-return'
      },
      schema: [
        {
          type: 'object',
          properties: {
            treatUndefinedAsUnspecified: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        missingReturn: 'Expected to return a value at the end of {{name}}.',
        missingReturnValue: '{{name}} expected a return value.',
        unexpectedReturnValue: '{{name}} expected no return value.'
      }
    }
  },
  {
    id: 'consistent-this',
    meta: {
      docs: {
        description: 'enforce consistent naming when capturing the current execution context',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/consistent-this'
      },
      schema: {
        type: 'array',
        items: {
          type: 'string',
          minLength: 1
        },
        uniqueItems: true
      },
      messages: {
        aliasNotAssignedToThis: "Designated alias '{{name}}' is not assigned to 'this'.",
        unexpectedAlias: "Unexpected alias '{{name}}' for 'this'."
      }
    }
  },
  {
    id: 'constructor-super',
    meta: {
      docs: {
        description: 'require `super()` calls in constructors',
        category: 'ECMAScript 6',
        recommended: true,
        url: 'https://eslint.org/docs/rules/constructor-super'
      },
      schema: [],
      messages: {
        missingSome: "Lacked a call of 'super()' in some code paths.",
        missingAll: "Expected to call 'super()'.",
        duplicate: "Unexpected duplicate 'super()'.",
        badSuper: "Unexpected 'super()' because 'super' is not a constructor.",
        unexpected: "Unexpected 'super()'."
      }
    }
  },
  {
    id: 'curly',
    meta: {
      docs: {
        description: 'enforce consistent brace style for all control statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/curly'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'all'
                ]
              }
            ],
            minItems: 0,
            maxItems: 1
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'multi',
                  'multi-line',
                  'multi-or-nest'
                ]
              },
              {
                'enum': [
                  'consistent'
                ]
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      },
      fixable: 'code',
      messages: {
        missingCurlyAfter: "Expected { after '{{name}}'.",
        missingCurlyAfterCondition: "Expected { after '{{name}}' condition.",
        unexpectedCurlyAfter: "Unnecessary { after '{{name}}'.",
        unexpectedCurlyAfterCondition: "Unnecessary { after '{{name}}' condition."
      }
    }
  },
  {
    id: 'default-case',
    meta: {
      docs: {
        description: 'require `default` cases in `switch` statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/default-case'
      },
      schema: [
        {
          type: 'object',
          properties: {
            commentPattern: {
              type: 'string'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        missingDefaultCase: 'Expected a default case.'
      }
    }
  },
  {
    id: 'dot-location',
    meta: {
      docs: {
        description: 'enforce consistent newlines before and after dots',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/dot-location'
      },
      schema: [
        {
          'enum': [
            'object',
            'property'
          ]
        }
      ],
      fixable: 'code',
      messages: {
        expectedDotAfterObject: 'Expected dot to be on same line as object.',
        expectedDotBeforeProperty: 'Expected dot to be on same line as property.'
      }
    }
  },
  {
    id: 'dot-notation',
    meta: {
      docs: {
        description: 'enforce dot notation whenever possible',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/dot-notation'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowKeywords: {
              type: 'boolean'
            },
            allowPattern: {
              type: 'string'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code',
      messages: {
        useDot: '[{{key}}] is better written in dot notation.',
        useBrackets: '.{{key}} is a syntax error.'
      }
    }
  },
  {
    id: 'eol-last',
    meta: {
      docs: {
        description: 'require or disallow newline at the end of files',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/eol-last'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never',
            'unix',
            'windows'
          ]
        }
      ],
      messages: {
        missing: 'Newline required at end of file but not found.',
        unexpected: 'Newline not allowed at end of file.'
      }
    }
  },
  {
    id: 'eqeqeq',
    meta: {
      docs: {
        description: 'require the use of `===` and `!==`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/eqeqeq'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always'
                ]
              },
              {
                type: 'object',
                properties: {
                  'null': {
                    'enum': [
                      'always',
                      'never',
                      'ignore'
                    ]
                  }
                },
                additionalProperties: false
              }
            ],
            additionalItems: false
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'smart',
                  'allow-null'
                ]
              }
            ],
            additionalItems: false
          }
        ]
      },
      fixable: 'code',
      messages: {
        unexpected: "Expected '{{expectedOperator}}' and instead saw '{{actualOperator}}'."
      }
    }
  },
  {
    id: 'for-direction',
    meta: {
      docs: {
        description: 'enforce "for" loop update clause moving the counter in the right direction.',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/for-direction'
      },
      fixable: null,
      schema: [],
      messages: {
        incorrectDirection: 'The update clause in this loop moves the variable in the wrong direction.'
      }
    }
  },
  {
    id: 'func-call-spacing',
    meta: {
      docs: {
        description: 'require or disallow spacing between function identifiers and their invocations',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/func-call-spacing'
      },
      fixable: 'whitespace',
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'never'
                ]
              }
            ],
            minItems: 0,
            maxItems: 1
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always'
                ]
              },
              {
                type: 'object',
                properties: {
                  allowNewlines: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      },
      messages: {
        unexpected: 'Unexpected newline between function name and paren.',
        missing: 'Missing space between function name and paren.'
      }
    }
  },
  {
    id: 'func-name-matching',
    meta: {
      docs: {
        description: 'require function names to match the name of the variable or property to which they are assigned',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/func-name-matching'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            additionalItems: false,
            items: [
              {
                'enum': [
                  'always',
                  'never'
                ]
              },
              {
                type: 'object',
                properties: {
                  considerPropertyDescriptor: {
                    type: 'boolean'
                  },
                  includeCommonJSModuleExports: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ]
          },
          {
            type: 'array',
            additionalItems: false,
            items: [
              {
                type: 'object',
                properties: {
                  considerPropertyDescriptor: {
                    type: 'boolean'
                  },
                  includeCommonJSModuleExports: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ]
          }
        ]
      },
      messages: {
        matchProperty: 'Function name `{{funcName}}` should match property name `{{name}}`',
        matchVariable: 'Function name `{{funcName}}` should match variable name `{{name}}`',
        notMatchProperty: 'Function name `{{funcName}}` should not match property name `{{name}}`',
        notMatchVariable: 'Function name `{{funcName}}` should not match variable name `{{name}}`'
      }
    }
  },
  {
    id: 'func-names',
    meta: {
      docs: {
        description: 'require or disallow named `function` expressions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/func-names'
      },
      schema: {
        definitions: {
          value: {
            'enum': [
              'always',
              'as-needed',
              'never'
            ]
          }
        },
        items: [
          {
            $ref: '#/definitions/value'
          },
          {
            type: 'object',
            properties: {
              generators: {
                $ref: '#/definitions/value'
              }
            },
            additionalProperties: false
          }
        ]
      },
      messages: {
        unnamed: 'Unexpected unnamed {{name}}.',
        named: 'Unexpected named {{name}}.'
      }
    }
  },
  {
    id: 'func-style',
    meta: {
      docs: {
        description: 'enforce the consistent use of either `function` declarations or expressions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/func-style'
      },
      schema: [
        {
          'enum': [
            'declaration',
            'expression'
          ]
        },
        {
          type: 'object',
          properties: {
            allowArrowFunctions: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        expression: 'Expected a function expression.',
        declaration: 'Expected a function declaration.'
      }
    }
  },
  {
    id: 'function-paren-newline',
    meta: {
      docs: {
        description: 'enforce consistent line breaks inside function parentheses',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/function-paren-newline'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never',
                'consistent',
                'multiline'
              ]
            },
            {
              type: 'object',
              properties: {
                minItems: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        }
      ],
      messages: {
        expectedBefore: "Expected newline before ')'.",
        expectedAfter: "Expected newline after '('.",
        unexpectedBefore: "Unexpected newline before '('.",
        unexpectedAfter: "Unexpected newline after ')'."
      }
    }
  },
  {
    id: 'generator-star-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing around `*` operators in generator functions',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/generator-star-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'before',
                'after',
                'both',
                'neither'
              ]
            },
            {
              type: 'object',
              properties: {
                before: {
                  type: 'boolean'
                },
                after: {
                  type: 'boolean'
                },
                named: {
                  oneOf: [
                    {
                      'enum': [
                        'before',
                        'after',
                        'both',
                        'neither'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        before: {
                          type: 'boolean'
                        },
                        after: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false
                    }
                  ]
                },
                anonymous: {
                  oneOf: [
                    {
                      'enum': [
                        'before',
                        'after',
                        'both',
                        'neither'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        before: {
                          type: 'boolean'
                        },
                        after: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false
                    }
                  ]
                },
                method: {
                  oneOf: [
                    {
                      'enum': [
                        'before',
                        'after',
                        'both',
                        'neither'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        before: {
                          type: 'boolean'
                        },
                        after: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false
                    }
                  ]
                }
              },
              additionalProperties: false
            }
          ]
        }
      ],
      messages: {
        missingBefore: 'Missing space before *.',
        missingAfter: 'Missing space after *.',
        unexpectedBefore: 'Unexpected space before *.',
        unexpectedAfter: 'Unexpected space after *.'
      }
    }
  },
  {
    id: 'getter-return',
    meta: {
      docs: {
        description: 'enforce `return` statements in getters',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/getter-return'
      },
      fixable: null,
      schema: [
        {
          type: 'object',
          properties: {
            allowImplicit: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        expected: 'Expected to return a value in {{name}}.',
        expectedAlways: 'Expected {{name}} to always return a value.'
      }
    }
  },
  {
    id: 'global-require',
    meta: {
      docs: {
        description: 'require `require()` calls to be placed at top-level module scope',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/global-require'
      },
      schema: []
    }
  },
  {
    id: 'guard-for-in',
    meta: {
      docs: {
        description: 'require `for-in` loops to include an `if` statement',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/guard-for-in'
      },
      schema: []
    }
  },
  {
    id: 'handle-callback-err',
    meta: {
      docs: {
        description: 'require error handling in callbacks',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/handle-callback-err'
      },
      schema: [
        {
          type: 'string'
        }
      ]
    }
  },
  {
    id: 'id-blacklist',
    meta: {
      docs: {
        description: 'disallow specified identifiers',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/id-blacklist'
      },
      schema: {
        type: 'array',
        items: {
          type: 'string'
        },
        uniqueItems: true
      }
    }
  },
  {
    id: 'id-length',
    meta: {
      docs: {
        description: 'enforce minimum and maximum identifier lengths',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/id-length'
      },
      schema: [
        {
          type: 'object',
          properties: {
            min: {
              type: 'number'
            },
            max: {
              type: 'number'
            },
            exceptions: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string'
              }
            },
            properties: {
              'enum': [
                'always',
                'never'
              ]
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'id-match',
    meta: {
      docs: {
        description: 'require identifiers to match a specified regular expression',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/id-match'
      },
      schema: [
        {
          type: 'string'
        },
        {
          type: 'object',
          properties: {
            properties: {
              type: 'boolean'
            }
          }
        }
      ]
    }
  },
  {
    id: 'implicit-arrow-linebreak',
    meta: {
      docs: {
        description: 'enforce the location of arrow function bodies',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/implicit-arrow-linebreak'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'beside',
            'below'
          ]
        }
      ]
    }
  },
  {
    id: 'indent-legacy',
    meta: {
      docs: {
        description: 'enforce consistent indentation',
        category: 'Stylistic Issues',
        recommended: false,
        replacedBy: [
          'indent'
        ],
        url: 'https://eslint.org/docs/rules/indent-legacy'
      },
      deprecated: true,
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'tab'
              ]
            },
            {
              type: 'integer',
              minimum: 0
            }
          ]
        },
        {
          type: 'object',
          properties: {
            SwitchCase: {
              type: 'integer',
              minimum: 0
            },
            VariableDeclarator: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  type: 'object',
                  properties: {
                    'var': {
                      type: 'integer',
                      minimum: 0
                    },
                    let: {
                      type: 'integer',
                      minimum: 0
                    },
                    'const': {
                      type: 'integer',
                      minimum: 0
                    }
                  }
                }
              ]
            },
            outerIIFEBody: {
              type: 'integer',
              minimum: 0
            },
            MemberExpression: {
              type: 'integer',
              minimum: 0
            },
            FunctionDeclaration: {
              type: 'object',
              properties: {
                parameters: {
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 0
                    },
                    {
                      'enum': [
                        'first'
                      ]
                    }
                  ]
                },
                body: {
                  type: 'integer',
                  minimum: 0
                }
              }
            },
            FunctionExpression: {
              type: 'object',
              properties: {
                parameters: {
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 0
                    },
                    {
                      'enum': [
                        'first'
                      ]
                    }
                  ]
                },
                body: {
                  type: 'integer',
                  minimum: 0
                }
              }
            },
            CallExpression: {
              type: 'object',
              properties: {
                parameters: {
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 0
                    },
                    {
                      'enum': [
                        'first'
                      ]
                    }
                  ]
                }
              }
            },
            ArrayExpression: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  'enum': [
                    'first'
                  ]
                }
              ]
            },
            ObjectExpression: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  'enum': [
                    'first'
                  ]
                }
              ]
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'indent',
    meta: {
      docs: {
        description: 'enforce consistent indentation',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/indent'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'tab'
              ]
            },
            {
              type: 'integer',
              minimum: 0
            }
          ]
        },
        {
          type: 'object',
          properties: {
            SwitchCase: {
              type: 'integer',
              minimum: 0
            },
            VariableDeclarator: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  type: 'object',
                  properties: {
                    'var': {
                      type: 'integer',
                      minimum: 0
                    },
                    let: {
                      type: 'integer',
                      minimum: 0
                    },
                    'const': {
                      type: 'integer',
                      minimum: 0
                    }
                  },
                  additionalProperties: false
                }
              ]
            },
            outerIIFEBody: {
              type: 'integer',
              minimum: 0
            },
            MemberExpression: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  'enum': [
                    'off'
                  ]
                }
              ]
            },
            FunctionDeclaration: {
              type: 'object',
              properties: {
                parameters: {
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 0
                    },
                    {
                      'enum': [
                        'first',
                        'off'
                      ]
                    }
                  ]
                },
                body: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            },
            FunctionExpression: {
              type: 'object',
              properties: {
                parameters: {
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 0
                    },
                    {
                      'enum': [
                        'first',
                        'off'
                      ]
                    }
                  ]
                },
                body: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            },
            CallExpression: {
              type: 'object',
              properties: {
                arguments: {
                  oneOf: [
                    {
                      type: 'integer',
                      minimum: 0
                    },
                    {
                      'enum': [
                        'first',
                        'off'
                      ]
                    }
                  ]
                }
              },
              additionalProperties: false
            },
            ArrayExpression: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  'enum': [
                    'first',
                    'off'
                  ]
                }
              ]
            },
            ObjectExpression: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  'enum': [
                    'first',
                    'off'
                  ]
                }
              ]
            },
            ImportDeclaration: {
              oneOf: [
                {
                  type: 'integer',
                  minimum: 0
                },
                {
                  'enum': [
                    'first',
                    'off'
                  ]
                }
              ]
            },
            flatTernaryExpressions: {
              type: 'boolean'
            },
            ignoredNodes: {
              type: 'array',
              items: {
                type: 'string',
                not: {
                  pattern: ':exit$'
                }
              }
            },
            ignoreComments: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'init-declarations',
    meta: {
      docs: {
        description: 'require or disallow initialization in variable declarations',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/init-declarations'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always'
                ]
              }
            ],
            minItems: 0,
            maxItems: 1
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'never'
                ]
              },
              {
                type: 'object',
                properties: {
                  ignoreForLoopInit: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      }
    }
  },
  {
    id: 'jsx-quotes',
    meta: {
      docs: {
        description: 'enforce the consistent use of either double or single quotes in JSX attributes',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/jsx-quotes'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'prefer-single',
            'prefer-double'
          ]
        }
      ]
    }
  },
  {
    id: 'key-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing between keys and values in object literal properties',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/key-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          anyOf: [
            {
              type: 'object',
              properties: {
                align: {
                  anyOf: [
                    {
                      'enum': [
                        'colon',
                        'value'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        mode: {
                          'enum': [
                            'strict',
                            'minimum'
                          ]
                        },
                        on: {
                          'enum': [
                            'colon',
                            'value'
                          ]
                        },
                        beforeColon: {
                          type: 'boolean'
                        },
                        afterColon: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false
                    }
                  ]
                },
                mode: {
                  'enum': [
                    'strict',
                    'minimum'
                  ]
                },
                beforeColon: {
                  type: 'boolean'
                },
                afterColon: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            },
            {
              type: 'object',
              properties: {
                singleLine: {
                  type: 'object',
                  properties: {
                    mode: {
                      'enum': [
                        'strict',
                        'minimum'
                      ]
                    },
                    beforeColon: {
                      type: 'boolean'
                    },
                    afterColon: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                multiLine: {
                  type: 'object',
                  properties: {
                    align: {
                      anyOf: [
                        {
                          'enum': [
                            'colon',
                            'value'
                          ]
                        },
                        {
                          type: 'object',
                          properties: {
                            mode: {
                              'enum': [
                                'strict',
                                'minimum'
                              ]
                            },
                            on: {
                              'enum': [
                                'colon',
                                'value'
                              ]
                            },
                            beforeColon: {
                              type: 'boolean'
                            },
                            afterColon: {
                              type: 'boolean'
                            }
                          },
                          additionalProperties: false
                        }
                      ]
                    },
                    mode: {
                      'enum': [
                        'strict',
                        'minimum'
                      ]
                    },
                    beforeColon: {
                      type: 'boolean'
                    },
                    afterColon: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                }
              },
              additionalProperties: false
            },
            {
              type: 'object',
              properties: {
                singleLine: {
                  type: 'object',
                  properties: {
                    mode: {
                      'enum': [
                        'strict',
                        'minimum'
                      ]
                    },
                    beforeColon: {
                      type: 'boolean'
                    },
                    afterColon: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                multiLine: {
                  type: 'object',
                  properties: {
                    mode: {
                      'enum': [
                        'strict',
                        'minimum'
                      ]
                    },
                    beforeColon: {
                      type: 'boolean'
                    },
                    afterColon: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                align: {
                  type: 'object',
                  properties: {
                    mode: {
                      'enum': [
                        'strict',
                        'minimum'
                      ]
                    },
                    on: {
                      'enum': [
                        'colon',
                        'value'
                      ]
                    },
                    beforeColon: {
                      type: 'boolean'
                    },
                    afterColon: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'keyword-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing before and after keywords',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/keyword-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            before: {
              type: 'boolean'
            },
            after: {
              type: 'boolean'
            },
            overrides: {
              type: 'object',
              properties: {
                'abstract': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                as: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                async: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                await: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'boolean': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'break': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'byte': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'case': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'catch': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'char': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'class': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'const': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'continue': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'debugger': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'default': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'delete': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'do': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'double': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'else': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'enum': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'export': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'extends': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'false': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'final': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'finally': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'float': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'for': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                from: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'function': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                get: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'goto': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'if': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'implements': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'import': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'in': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'instanceof': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'int': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'interface': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                let: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'long': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'native': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'new': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'null': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                of: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'package': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'private': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'protected': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'public': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'return': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                set: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'short': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'static': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'super': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'switch': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'synchronized': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'this': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'throw': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'throws': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'transient': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'true': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'try': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'typeof': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'var': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'void': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'volatile': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'while': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                'with': {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                yield: {
                  type: 'object',
                  properties: {
                    before: {
                      type: 'boolean'
                    },
                    after: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                }
              },
              additionalProperties: false
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'line-comment-position',
    meta: {
      docs: {
        description: 'enforce position of line comments',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/line-comment-position'
      },
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'above',
                'beside'
              ]
            },
            {
              type: 'object',
              properties: {
                position: {
                  'enum': [
                    'above',
                    'beside'
                  ]
                },
                ignorePattern: {
                  type: 'string'
                },
                applyDefaultPatterns: {
                  type: 'boolean'
                },
                applyDefaultIgnorePatterns: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'linebreak-style',
    meta: {
      docs: {
        description: 'enforce consistent linebreak style',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/linebreak-style'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'unix',
            'windows'
          ]
        }
      ]
    }
  },
  {
    id: 'lines-around-comment',
    meta: {
      docs: {
        description: 'require empty lines around comments',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/lines-around-comment'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            beforeBlockComment: {
              type: 'boolean'
            },
            afterBlockComment: {
              type: 'boolean'
            },
            beforeLineComment: {
              type: 'boolean'
            },
            afterLineComment: {
              type: 'boolean'
            },
            allowBlockStart: {
              type: 'boolean'
            },
            allowBlockEnd: {
              type: 'boolean'
            },
            allowClassStart: {
              type: 'boolean'
            },
            allowClassEnd: {
              type: 'boolean'
            },
            allowObjectStart: {
              type: 'boolean'
            },
            allowObjectEnd: {
              type: 'boolean'
            },
            allowArrayStart: {
              type: 'boolean'
            },
            allowArrayEnd: {
              type: 'boolean'
            },
            ignorePattern: {
              type: 'string'
            },
            applyDefaultIgnorePatterns: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'lines-around-directive',
    meta: {
      docs: {
        description: 'require or disallow newlines around directives',
        category: 'Stylistic Issues',
        recommended: false,
        replacedBy: [
          'padding-line-between-statements'
        ],
        url: 'https://eslint.org/docs/rules/lines-around-directive'
      },
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never'
              ]
            },
            {
              type: 'object',
              properties: {
                before: {
                  'enum': [
                    'always',
                    'never'
                  ]
                },
                after: {
                  'enum': [
                    'always',
                    'never'
                  ]
                }
              },
              additionalProperties: false,
              minProperties: 2
            }
          ]
        }
      ],
      fixable: 'whitespace',
      deprecated: true
    }
  },
  {
    id: 'lines-between-class-members',
    meta: {
      docs: {
        description: 'require or disallow an empty line between class members',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/lines-between-class-members'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        },
        {
          type: 'object',
          properties: {
            exceptAfterSingleLine: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'max-classes-per-file',
    meta: {
      docs: {
        description: 'enforce a maximum number of classes per file',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-classes-per-file'
      },
      schema: [
        {
          type: 'integer',
          minimum: 1
        }
      ],
      messages: {
        maximumExceeded: 'Number of classes per file must not exceed {{ max }}'
      }
    }
  },
  {
    id: 'max-depth',
    meta: {
      docs: {
        description: 'enforce a maximum depth that blocks can be nested',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-depth'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'integer',
              minimum: 0
            },
            {
              type: 'object',
              properties: {
                maximum: {
                  type: 'integer',
                  minimum: 0
                },
                max: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'max-len',
    meta: {
      docs: {
        description: 'enforce a maximum line length',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-len'
      },
      schema: [
        {
          anyOf: [
            {
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  minimum: 0
                },
                comments: {
                  type: 'integer',
                  minimum: 0
                },
                tabWidth: {
                  type: 'integer',
                  minimum: 0
                },
                ignorePattern: {
                  type: 'string'
                },
                ignoreComments: {
                  type: 'boolean'
                },
                ignoreStrings: {
                  type: 'boolean'
                },
                ignoreUrls: {
                  type: 'boolean'
                },
                ignoreTemplateLiterals: {
                  type: 'boolean'
                },
                ignoreRegExpLiterals: {
                  type: 'boolean'
                },
                ignoreTrailingComments: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            },
            {
              type: 'integer',
              minimum: 0
            }
          ]
        },
        {
          anyOf: [
            {
              type: 'object',
              properties: {
                code: {
                  type: 'integer',
                  minimum: 0
                },
                comments: {
                  type: 'integer',
                  minimum: 0
                },
                tabWidth: {
                  type: 'integer',
                  minimum: 0
                },
                ignorePattern: {
                  type: 'string'
                },
                ignoreComments: {
                  type: 'boolean'
                },
                ignoreStrings: {
                  type: 'boolean'
                },
                ignoreUrls: {
                  type: 'boolean'
                },
                ignoreTemplateLiterals: {
                  type: 'boolean'
                },
                ignoreRegExpLiterals: {
                  type: 'boolean'
                },
                ignoreTrailingComments: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            },
            {
              type: 'integer',
              minimum: 0
            }
          ]
        },
        {
          type: 'object',
          properties: {
            code: {
              type: 'integer',
              minimum: 0
            },
            comments: {
              type: 'integer',
              minimum: 0
            },
            tabWidth: {
              type: 'integer',
              minimum: 0
            },
            ignorePattern: {
              type: 'string'
            },
            ignoreComments: {
              type: 'boolean'
            },
            ignoreStrings: {
              type: 'boolean'
            },
            ignoreUrls: {
              type: 'boolean'
            },
            ignoreTemplateLiterals: {
              type: 'boolean'
            },
            ignoreRegExpLiterals: {
              type: 'boolean'
            },
            ignoreTrailingComments: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'max-lines-per-function',
    meta: {
      docs: {
        description: 'enforce a maximum number of line of code in a function',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-lines-per-function'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'object',
              properties: {
                max: {
                  type: 'integer',
                  minimum: 0
                },
                skipComments: {
                  type: 'boolean'
                },
                skipBlankLines: {
                  type: 'boolean'
                },
                IIFEs: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            },
            {
              type: 'integer',
              minimum: 1
            }
          ]
        }
      ]
    }
  },
  {
    id: 'max-lines',
    meta: {
      docs: {
        description: 'enforce a maximum number of lines per file',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-lines'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'integer',
              minimum: 0
            },
            {
              type: 'object',
              properties: {
                max: {
                  type: 'integer',
                  minimum: 0
                },
                skipComments: {
                  type: 'boolean'
                },
                skipBlankLines: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'max-nested-callbacks',
    meta: {
      docs: {
        description: 'enforce a maximum depth that callbacks can be nested',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-nested-callbacks'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'integer',
              minimum: 0
            },
            {
              type: 'object',
              properties: {
                maximum: {
                  type: 'integer',
                  minimum: 0
                },
                max: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'max-params',
    meta: {
      docs: {
        description: 'enforce a maximum number of parameters in function definitions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-params'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'integer',
              minimum: 0
            },
            {
              type: 'object',
              properties: {
                maximum: {
                  type: 'integer',
                  minimum: 0
                },
                max: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'max-statements-per-line',
    meta: {
      docs: {
        description: 'enforce a maximum number of statements allowed per line',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-statements-per-line'
      },
      schema: [
        {
          type: 'object',
          properties: {
            max: {
              type: 'integer',
              minimum: 1
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'max-statements',
    meta: {
      docs: {
        description: 'enforce a maximum number of statements allowed in function blocks',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/max-statements'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'integer',
              minimum: 0
            },
            {
              type: 'object',
              properties: {
                maximum: {
                  type: 'integer',
                  minimum: 0
                },
                max: {
                  type: 'integer',
                  minimum: 0
                }
              },
              additionalProperties: false
            }
          ]
        },
        {
          type: 'object',
          properties: {
            ignoreTopLevelFunctions: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'multiline-comment-style',
    meta: {
      docs: {
        description: 'enforce a particular style for multiline comments',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/multiline-comment-style'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'starred-block',
            'separate-lines',
            'bare-block'
          ]
        }
      ]
    }
  },
  {
    id: 'multiline-ternary',
    meta: {
      docs: {
        description: 'enforce newlines between operands of ternary expressions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/multiline-ternary'
      },
      schema: [
        {
          'enum': [
            'always',
            'always-multiline',
            'never'
          ]
        }
      ]
    }
  },
  {
    id: 'new-cap',
    meta: {
      docs: {
        description: 'require constructor names to begin with a capital letter',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/new-cap'
      },
      schema: [
        {
          type: 'object',
          properties: {
            newIsCap: {
              type: 'boolean'
            },
            capIsNew: {
              type: 'boolean'
            },
            newIsCapExceptions: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            newIsCapExceptionPattern: {
              type: 'string'
            },
            capIsNewExceptions: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            capIsNewExceptionPattern: {
              type: 'string'
            },
            properties: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'new-parens',
    meta: {
      docs: {
        description: 'require parentheses when invoking a constructor with no arguments',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/new-parens'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'newline-after-var',
    meta: {
      docs: {
        description: 'require or disallow an empty line after variable declarations',
        category: 'Stylistic Issues',
        recommended: false,
        replacedBy: [
          'padding-line-between-statements'
        ],
        url: 'https://eslint.org/docs/rules/newline-after-var'
      },
      schema: [
        {
          'enum': [
            'never',
            'always'
          ]
        }
      ],
      fixable: 'whitespace',
      deprecated: true
    }
  },
  {
    id: 'newline-before-return',
    meta: {
      docs: {
        description: 'require an empty line before `return` statements',
        category: 'Stylistic Issues',
        recommended: false,
        replacedBy: [
          'padding-line-between-statements'
        ],
        url: 'https://eslint.org/docs/rules/newline-before-return'
      },
      fixable: 'whitespace',
      schema: [],
      deprecated: true
    }
  },
  {
    id: 'newline-per-chained-call',
    meta: {
      docs: {
        description: 'require a newline after each call in a method chain',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/newline-per-chained-call'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            ignoreChainWithDepth: {
              type: 'integer',
              minimum: 1,
              maximum: 10
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-alert',
    meta: {
      docs: {
        description: 'disallow the use of `alert`, `confirm`, and `prompt`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-alert'
      },
      schema: [],
      messages: {
        unexpected: 'Unexpected {{name}}.'
      }
    }
  },
  {
    id: 'no-array-constructor',
    meta: {
      docs: {
        description: 'disallow `Array` constructors',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-array-constructor'
      },
      schema: [],
      messages: {
        preferLiteral: 'The array literal notation [] is preferable.'
      }
    }
  },
  {
    id: 'no-async-promise-executor',
    meta: {
      docs: {
        description: 'disallow using an async function as a Promise executor',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-async-promise-executor'
      },
      fixable: null,
      schema: []
    }
  },
  {
    id: 'no-await-in-loop',
    meta: {
      docs: {
        description: 'disallow `await` inside of loops',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-await-in-loop'
      },
      schema: [],
      messages: {
        unexpectedAwait: 'Unexpected `await` inside a loop.'
      }
    }
  },
  {
    id: 'no-bitwise',
    meta: {
      docs: {
        description: 'disallow bitwise operators',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-bitwise'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allow: {
              type: 'array',
              items: {
                'enum': [
                  '^',
                  '|',
                  '&',
                  '<<',
                  '>>',
                  '>>>',
                  '^=',
                  '|=',
                  '&=',
                  '<<=',
                  '>>=',
                  '>>>=',
                  '~'
                ]
              },
              uniqueItems: true
            },
            int32Hint: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpected: "Unexpected use of '{{operator}}'."
      }
    }
  },
  {
    id: 'no-buffer-constructor',
    meta: {
      docs: {
        description: 'disallow use of the `Buffer()` constructor',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-buffer-constructor'
      },
      schema: [],
      messages: {
        deprecated: '{{expr}} is deprecated. Use Buffer.from(), Buffer.alloc(), or Buffer.allocUnsafe() instead.'
      }
    }
  },
  {
    id: 'no-caller',
    meta: {
      docs: {
        description: 'disallow the use of `arguments.caller` or `arguments.callee`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-caller'
      },
      schema: [],
      messages: {
        unexpected: 'Avoid arguments.{{prop}}.'
      }
    }
  },
  {
    id: 'no-case-declarations',
    meta: {
      docs: {
        description: 'disallow lexical declarations in case clauses',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-case-declarations'
      },
      schema: [],
      messages: {
        unexpected: 'Unexpected lexical declaration in case block.'
      }
    }
  },
  {
    id: 'no-catch-shadow',
    meta: {
      docs: {
        description: 'disallow `catch` clause parameters from shadowing variables in the outer scope',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-catch-shadow',
        replacedBy: [
          'no-shadow'
        ]
      },
      deprecated: true,
      schema: [],
      messages: {
        mutable: "Value of '{{name}}' may be overwritten in IE 8 and earlier."
      }
    }
  },
  {
    id: 'no-class-assign',
    meta: {
      docs: {
        description: 'disallow reassigning class members',
        category: 'ECMAScript 6',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-class-assign'
      },
      schema: [],
      messages: {
        'class': "'{{name}}' is a class."
      }
    }
  },
  {
    id: 'no-compare-neg-zero',
    meta: {
      docs: {
        description: 'disallow comparing against -0',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-compare-neg-zero'
      },
      fixable: null,
      schema: [],
      messages: {
        unexpected: "Do not use the '{{operator}}' operator to compare against -0."
      }
    }
  },
  {
    id: 'no-cond-assign',
    meta: {
      docs: {
        description: 'disallow assignment operators in conditional expressions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-cond-assign'
      },
      schema: [
        {
          'enum': [
            'except-parens',
            'always'
          ]
        }
      ],
      messages: {
        unexpected: 'Unexpected assignment within {{type}}.',
        missing: 'Expected a conditional expression and instead saw an assignment.'
      }
    }
  },
  {
    id: 'no-confusing-arrow',
    meta: {
      docs: {
        description: 'disallow arrow functions where they could be confused with comparisons',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-confusing-arrow'
      },
      fixable: 'code',
      schema: [
        {
          type: 'object',
          properties: {
            allowParens: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        confusing: 'Arrow function used ambiguously with a conditional expression.'
      }
    }
  },
  {
    id: 'no-console',
    meta: {
      docs: {
        description: 'disallow the use of `console`',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-console'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allow: {
              type: 'array',
              items: {
                type: 'string'
              },
              minItems: 1,
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpected: 'Unexpected console statement.'
      }
    }
  },
  {
    id: 'no-const-assign',
    meta: {
      docs: {
        description: 'disallow reassigning `const` variables',
        category: 'ECMAScript 6',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-const-assign'
      },
      schema: [],
      messages: {
        'const': "'{{name}}' is constant."
      }
    }
  },
  {
    id: 'no-constant-condition',
    meta: {
      docs: {
        description: 'disallow constant expressions in conditions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-constant-condition'
      },
      schema: [
        {
          type: 'object',
          properties: {
            checkLoops: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpected: 'Unexpected constant condition.'
      }
    }
  },
  {
    id: 'no-continue',
    meta: {
      docs: {
        description: 'disallow `continue` statements',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-continue'
      },
      schema: [],
      messages: {
        unexpected: 'Unexpected use of continue statement.'
      }
    }
  },
  {
    id: 'no-control-regex',
    meta: {
      docs: {
        description: 'disallow control characters in regular expressions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-control-regex'
      },
      schema: [],
      messages: {
        unexpected: 'Unexpected control character(s) in regular expression: {{controlChars}}.'
      }
    }
  },
  {
    id: 'no-debugger',
    meta: {
      docs: {
        description: 'disallow the use of `debugger`',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-debugger'
      },
      fixable: null,
      schema: [],
      messages: {
        unexpected: "Unexpected 'debugger' statement."
      }
    }
  },
  {
    id: 'no-delete-var',
    meta: {
      docs: {
        description: 'disallow deleting variables',
        category: 'Variables',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-delete-var'
      },
      schema: [],
      messages: {
        unexpected: 'Variables should not be deleted.'
      }
    }
  },
  {
    id: 'no-div-regex',
    meta: {
      docs: {
        description: 'disallow division operators explicitly at the beginning of regular expressions',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-div-regex'
      },
      schema: [],
      messages: {
        unexpected: "A regular expression literal can be confused with '/='."
      }
    }
  },
  {
    id: 'no-dupe-args',
    meta: {
      docs: {
        description: 'disallow duplicate arguments in `function` definitions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-dupe-args'
      },
      schema: [],
      messages: {
        unexpected: "Duplicate param '{{name}}'."
      }
    }
  },
  {
    id: 'no-dupe-class-members',
    meta: {
      docs: {
        description: 'disallow duplicate class members',
        category: 'ECMAScript 6',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-dupe-class-members'
      },
      schema: [],
      messages: {
        unexpected: "Duplicate name '{{name}}'."
      }
    }
  },
  {
    id: 'no-dupe-keys',
    meta: {
      docs: {
        description: 'disallow duplicate keys in object literals',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-dupe-keys'
      },
      schema: [],
      messages: {
        unexpected: "Duplicate key '{{name}}'."
      }
    }
  },
  {
    id: 'no-duplicate-case',
    meta: {
      docs: {
        description: 'disallow duplicate case labels',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-duplicate-case'
      },
      schema: [],
      messages: {
        unexpected: 'Duplicate case label.'
      }
    }
  },
  {
    id: 'no-duplicate-imports',
    meta: {
      docs: {
        description: 'disallow duplicate module imports',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-duplicate-imports'
      },
      schema: [
        {
          type: 'object',
          properties: {
            includeExports: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-else-return',
    meta: {
      docs: {
        description: 'disallow `else` blocks after `return` statements in `if` statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-else-return'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowElseIf: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code',
      messages: {
        unexpected: "Unnecessary 'else' after 'return'."
      }
    }
  },
  {
    id: 'no-empty-character-class',
    meta: {
      docs: {
        description: 'disallow empty character classes in regular expressions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-empty-character-class'
      },
      schema: [],
      messages: {
        unexpected: 'Empty class.'
      }
    }
  },
  {
    id: 'no-empty-function',
    meta: {
      docs: {
        description: 'disallow empty functions',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-empty-function'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allow: {
              type: 'array',
              items: {
                'enum': [
                  'functions',
                  'arrowFunctions',
                  'generatorFunctions',
                  'methods',
                  'generatorMethods',
                  'getters',
                  'setters',
                  'constructors'
                ]
              },
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpected: 'Unexpected empty {{name}}.'
      }
    }
  },
  {
    id: 'no-empty-pattern',
    meta: {
      docs: {
        description: 'disallow empty destructuring patterns',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-empty-pattern'
      },
      schema: [],
      messages: {
        unexpected: 'Unexpected empty {{type}} pattern.'
      }
    }
  },
  {
    id: 'no-empty',
    meta: {
      docs: {
        description: 'disallow empty block statements',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-empty'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowEmptyCatch: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpected: 'Empty {{type}} statement.'
      }
    }
  },
  {
    id: 'no-eq-null',
    meta: {
      docs: {
        description: 'disallow `null` comparisons without type-checking operators',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-eq-null'
      },
      schema: [],
      messages: {
        unexpected: "Use '===' to compare with null."
      }
    }
  },
  {
    id: 'no-eval',
    meta: {
      docs: {
        description: 'disallow the use of `eval()`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-eval'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowIndirect: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpected: 'eval can be harmful.'
      }
    }
  },
  {
    id: 'no-ex-assign',
    meta: {
      docs: {
        description: 'disallow reassigning exceptions in `catch` clauses',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-ex-assign'
      },
      schema: [],
      messages: {
        unexpected: 'Do not assign to the exception parameter.'
      }
    }
  },
  {
    id: 'no-extend-native',
    meta: {
      docs: {
        description: 'disallow extending native types',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-extend-native'
      },
      schema: [
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'array',
              items: {
                type: 'string'
              },
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        unexpected: '{{builtin}} prototype is read only, properties should not be added.'
      }
    }
  },
  {
    id: 'no-extra-bind',
    meta: {
      docs: {
        description: 'disallow unnecessary calls to `.bind()`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-extra-bind'
      },
      schema: [],
      fixable: 'code',
      messages: {
        unexpected: 'The function binding is unnecessary.'
      }
    }
  },
  {
    id: 'no-extra-boolean-cast',
    meta: {
      docs: {
        description: 'disallow unnecessary boolean casts',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-extra-boolean-cast'
      },
      schema: [],
      fixable: 'code',
      messages: {
        unexpectedCall: 'Redundant Boolean call.',
        unexpectedNegation: 'Redundant double negation.'
      }
    }
  },
  {
    id: 'no-extra-label',
    meta: {
      docs: {
        description: 'disallow unnecessary labels',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-extra-label'
      },
      schema: [],
      fixable: 'code',
      messages: {
        unexpected: "This label '{{name}}' is unnecessary."
      }
    }
  },
  {
    id: 'no-extra-parens',
    meta: {
      docs: {
        description: 'disallow unnecessary parentheses',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-extra-parens'
      },
      fixable: 'code',
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'functions'
                ]
              }
            ],
            minItems: 0,
            maxItems: 1
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'all'
                ]
              },
              {
                type: 'object',
                properties: {
                  conditionalAssign: {
                    type: 'boolean'
                  },
                  nestedBinaryExpressions: {
                    type: 'boolean'
                  },
                  returnAssign: {
                    type: 'boolean'
                  },
                  ignoreJSX: {
                    'enum': [
                      'none',
                      'all',
                      'single-line',
                      'multi-line'
                    ]
                  },
                  enforceForArrowConditionals: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      },
      messages: {
        unexpected: 'Unnecessary parentheses around expression.'
      }
    }
  },
  {
    id: 'no-extra-semi',
    meta: {
      docs: {
        description: 'disallow unnecessary semicolons',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-extra-semi'
      },
      fixable: 'code',
      schema: [],
      messages: {
        unexpected: 'Unnecessary semicolon.'
      }
    }
  },
  {
    id: 'no-fallthrough',
    meta: {
      docs: {
        description: 'disallow fallthrough of `case` statements',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-fallthrough'
      },
      schema: [
        {
          type: 'object',
          properties: {
            commentPattern: {
              type: 'string'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-floating-decimal',
    meta: {
      docs: {
        description: 'disallow leading or trailing decimal points in numeric literals',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-floating-decimal'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-func-assign',
    meta: {
      docs: {
        description: 'disallow reassigning `function` declarations',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-func-assign'
      },
      schema: []
    }
  },
  {
    id: 'no-global-assign',
    meta: {
      docs: {
        description: 'disallow assignments to native objects or read-only global variables',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-global-assign'
      },
      schema: [
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'array',
              items: {
                type: 'string'
              },
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-implicit-coercion',
    meta: {
      docs: {
        description: 'disallow shorthand type conversions',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-implicit-coercion'
      },
      fixable: 'code',
      schema: [
        {
          type: 'object',
          properties: {
            'boolean': {
              type: 'boolean'
            },
            number: {
              type: 'boolean'
            },
            string: {
              type: 'boolean'
            },
            allow: {
              type: 'array',
              items: {
                'enum': [
                  '~',
                  '!!',
                  '+',
                  '*'
                ]
              },
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-implicit-globals',
    meta: {
      docs: {
        description: 'disallow variable and `function` declarations in the global scope',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-implicit-globals'
      },
      schema: []
    }
  },
  {
    id: 'no-implied-eval',
    meta: {
      docs: {
        description: 'disallow the use of `eval()`-like methods',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-implied-eval'
      },
      schema: []
    }
  },
  {
    id: 'no-inline-comments',
    meta: {
      docs: {
        description: 'disallow inline comments after code',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-inline-comments'
      },
      schema: []
    }
  },
  {
    id: 'no-inner-declarations',
    meta: {
      docs: {
        description: 'disallow variable or `function` declarations in nested blocks',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-inner-declarations'
      },
      schema: [
        {
          'enum': [
            'functions',
            'both'
          ]
        }
      ]
    }
  },
  {
    id: 'no-invalid-regexp',
    meta: {
      docs: {
        description: 'disallow invalid regular expression strings in `RegExp` constructors',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-invalid-regexp'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowConstructorFlags: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-invalid-this',
    meta: {
      docs: {
        description: 'disallow `this` keywords outside of classes or class-like objects',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-invalid-this'
      },
      schema: []
    }
  },
  {
    id: 'no-irregular-whitespace',
    meta: {
      docs: {
        description: 'disallow irregular whitespace outside of strings and comments',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-irregular-whitespace'
      },
      schema: [
        {
          type: 'object',
          properties: {
            skipComments: {
              type: 'boolean'
            },
            skipStrings: {
              type: 'boolean'
            },
            skipTemplates: {
              type: 'boolean'
            },
            skipRegExps: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-iterator',
    meta: {
      docs: {
        description: 'disallow the use of the `__iterator__` property',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-iterator'
      },
      schema: []
    }
  },
  {
    id: 'no-label-var',
    meta: {
      docs: {
        description: 'disallow labels that share a name with a variable',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-label-var'
      },
      schema: []
    }
  },
  {
    id: 'no-labels',
    meta: {
      docs: {
        description: 'disallow labeled statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-labels'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowLoop: {
              type: 'boolean'
            },
            allowSwitch: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-lone-blocks',
    meta: {
      docs: {
        description: 'disallow unnecessary nested blocks',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-lone-blocks'
      },
      schema: []
    }
  },
  {
    id: 'no-lonely-if',
    meta: {
      docs: {
        description: 'disallow `if` statements as the only statement in `else` blocks',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-lonely-if'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-loop-func',
    meta: {
      docs: {
        description: 'disallow `function` declarations and expressions inside loop statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-loop-func'
      },
      schema: []
    }
  },
  {
    id: 'no-magic-numbers',
    meta: {
      docs: {
        description: 'disallow magic numbers',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-magic-numbers'
      },
      schema: [
        {
          type: 'object',
          properties: {
            detectObjects: {
              type: 'boolean'
            },
            enforceConst: {
              type: 'boolean'
            },
            ignore: {
              type: 'array',
              items: {
                type: 'number'
              },
              uniqueItems: true
            },
            ignoreArrayIndexes: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      messages: {
        useConst: "Number constants declarations must use 'const'.",
        noMagic: 'No magic number: {{raw}}.'
      }
    }
  },
  {
    id: 'no-misleading-character-class',
    meta: {
      docs: {
        description: 'disallow characters which are made with multiple code points in character class syntax',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-misleading-character-class'
      },
      schema: [],
      messages: {
        surrogatePairWithoutUFlag: "Unexpected surrogate pair in character class. Use 'u' flag.",
        combiningClass: 'Unexpected combined character in character class.',
        emojiModifier: 'Unexpected modified Emoji in character class.',
        regionalIndicatorSymbol: 'Unexpected national flag in character class.',
        zwj: 'Unexpected joined character sequence in character class.'
      }
    }
  },
  {
    id: 'no-mixed-operators',
    meta: {
      docs: {
        description: 'disallow mixed binary operators',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-mixed-operators'
      },
      schema: [
        {
          type: 'object',
          properties: {
            groups: {
              type: 'array',
              items: {
                type: 'array',
                items: {
                  'enum': [
                    '+',
                    '-',
                    '*',
                    '/',
                    '%',
                    '**',
                    '&',
                    '|',
                    '^',
                    '~',
                    '<<',
                    '>>',
                    '>>>',
                    '==',
                    '!=',
                    '===',
                    '!==',
                    '>',
                    '>=',
                    '<',
                    '<=',
                    '&&',
                    '||',
                    'in',
                    'instanceof'
                  ]
                },
                minItems: 2,
                uniqueItems: true
              },
              uniqueItems: true
            },
            allowSamePrecedence: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-mixed-requires',
    meta: {
      docs: {
        description: 'disallow `require` calls to be mixed with regular variable declarations',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-mixed-requires'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'boolean'
            },
            {
              type: 'object',
              properties: {
                grouping: {
                  type: 'boolean'
                },
                allowCall: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'no-mixed-spaces-and-tabs',
    meta: {
      docs: {
        description: 'disallow mixed spaces and tabs for indentation',
        category: 'Stylistic Issues',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-mixed-spaces-and-tabs'
      },
      schema: [
        {
          'enum': [
            'smart-tabs',
            true,
            false
          ]
        }
      ]
    }
  },
  {
    id: 'no-multi-assign',
    meta: {
      docs: {
        description: 'disallow use of chained assignment expressions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-multi-assign'
      },
      schema: []
    }
  },
  {
    id: 'no-multi-spaces',
    meta: {
      docs: {
        description: 'disallow multiple spaces',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-multi-spaces'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'object',
              patternProperties: {
                '^([A-Z][a-z]*)+$': {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            },
            ignoreEOLComments: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-multi-str',
    meta: {
      docs: {
        description: 'disallow multiline strings',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-multi-str'
      },
      schema: []
    }
  },
  {
    id: 'no-multiple-empty-lines',
    meta: {
      docs: {
        description: 'disallow multiple empty lines',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-multiple-empty-lines'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            max: {
              type: 'integer',
              minimum: 0
            },
            maxEOF: {
              type: 'integer',
              minimum: 0
            },
            maxBOF: {
              type: 'integer',
              minimum: 0
            }
          },
          required: [
            'max'
          ],
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-native-reassign',
    meta: {
      docs: {
        description: 'disallow assignments to native objects or read-only global variables',
        category: 'Best Practices',
        recommended: false,
        replacedBy: [
          'no-global-assign'
        ],
        url: 'https://eslint.org/docs/rules/no-native-reassign'
      },
      deprecated: true,
      schema: [
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'array',
              items: {
                type: 'string'
              },
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-negated-condition',
    meta: {
      docs: {
        description: 'disallow negated conditions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-negated-condition'
      },
      schema: []
    }
  },
  {
    id: 'no-negated-in-lhs',
    meta: {
      docs: {
        description: 'disallow negating the left operand in `in` expressions',
        category: 'Possible Errors',
        recommended: false,
        replacedBy: [
          'no-unsafe-negation'
        ],
        url: 'https://eslint.org/docs/rules/no-negated-in-lhs'
      },
      deprecated: true,
      schema: []
    }
  },
  {
    id: 'no-nested-ternary',
    meta: {
      docs: {
        description: 'disallow nested ternary expressions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-nested-ternary'
      },
      schema: []
    }
  },
  {
    id: 'no-new-func',
    meta: {
      docs: {
        description: 'disallow `new` operators with the `Function` object',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-new-func'
      },
      schema: []
    }
  },
  {
    id: 'no-new-object',
    meta: {
      docs: {
        description: 'disallow `Object` constructors',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-new-object'
      },
      schema: []
    }
  },
  {
    id: 'no-new-require',
    meta: {
      docs: {
        description: 'disallow `new` operators with calls to `require`',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-new-require'
      },
      schema: []
    }
  },
  {
    id: 'no-new-symbol',
    meta: {
      docs: {
        description: 'disallow `new` operators with the `Symbol` object',
        category: 'ECMAScript 6',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-new-symbol'
      },
      schema: []
    }
  },
  {
    id: 'no-new-wrappers',
    meta: {
      docs: {
        description: 'disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-new-wrappers'
      },
      schema: []
    }
  },
  {
    id: 'no-new',
    meta: {
      docs: {
        description: 'disallow `new` operators outside of assignments or comparisons',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-new'
      },
      schema: []
    }
  },
  {
    id: 'no-obj-calls',
    meta: {
      docs: {
        description: 'disallow calling global object properties as functions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-obj-calls'
      },
      schema: []
    }
  },
  {
    id: 'no-octal-escape',
    meta: {
      docs: {
        description: 'disallow octal escape sequences in string literals',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-octal-escape'
      },
      schema: []
    }
  },
  {
    id: 'no-octal',
    meta: {
      docs: {
        description: 'disallow octal literals',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-octal'
      },
      schema: []
    }
  },
  {
    id: 'no-param-reassign',
    meta: {
      docs: {
        description: 'disallow reassigning `function` parameters',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-param-reassign'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'object',
              properties: {
                props: {
                  'enum': [
                    false
                  ]
                }
              },
              additionalProperties: false
            },
            {
              type: 'object',
              properties: {
                props: {
                  'enum': [
                    true
                  ]
                },
                ignorePropertyModificationsFor: {
                  type: 'array',
                  items: {
                    type: 'string'
                  },
                  uniqueItems: true
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'no-path-concat',
    meta: {
      docs: {
        description: 'disallow string concatenation with `__dirname` and `__filename`',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-path-concat'
      },
      schema: []
    }
  },
  {
    id: 'no-plusplus',
    meta: {
      docs: {
        description: 'disallow the unary operators `++` and `--`',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-plusplus'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowForLoopAfterthoughts: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-process-env',
    meta: {
      docs: {
        description: 'disallow the use of `process.env`',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-process-env'
      },
      schema: []
    }
  },
  {
    id: 'no-process-exit',
    meta: {
      docs: {
        description: 'disallow the use of `process.exit()`',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-process-exit'
      },
      schema: []
    }
  },
  {
    id: 'no-proto',
    meta: {
      docs: {
        description: 'disallow the use of the `__proto__` property',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-proto'
      },
      schema: []
    }
  },
  {
    id: 'no-prototype-builtins',
    meta: {
      docs: {
        description: 'disallow calling some `Object.prototype` methods directly on objects',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-prototype-builtins'
      },
      schema: []
    }
  },
  {
    id: 'no-redeclare',
    meta: {
      docs: {
        description: 'disallow variable redeclaration',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-redeclare'
      },
      schema: [
        {
          type: 'object',
          properties: {
            builtinGlobals: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-regex-spaces',
    meta: {
      docs: {
        description: 'disallow multiple spaces in regular expressions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-regex-spaces'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-restricted-globals',
    meta: {
      docs: {
        description: 'disallow specified global variables',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-restricted-globals'
      },
      schema: {
        type: 'array',
        items: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'object',
              properties: {
                name: {
                  type: 'string'
                },
                message: {
                  type: 'string'
                }
              },
              required: [
                'name'
              ],
              additionalProperties: false
            }
          ]
        },
        uniqueItems: true,
        minItems: 0
      }
    }
  },
  {
    id: 'no-restricted-imports',
    meta: {
      docs: {
        description: 'disallow specified modules when loaded by `import`',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-restricted-imports'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'string'
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string'
                    },
                    message: {
                      type: 'string',
                      minLength: 1
                    },
                    importNames: {
                      type: 'array',
                      items: {
                        type: 'string'
                      }
                    }
                  },
                  additionalProperties: false,
                  required: [
                    'name'
                  ]
                }
              ]
            },
            uniqueItems: true
          },
          {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                paths: {
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        type: 'string'
                      },
                      {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string'
                          },
                          message: {
                            type: 'string',
                            minLength: 1
                          },
                          importNames: {
                            type: 'array',
                            items: {
                              type: 'string'
                            }
                          }
                        },
                        additionalProperties: false,
                        required: [
                          'name'
                        ]
                      }
                    ]
                  },
                  uniqueItems: true
                },
                patterns: {
                  type: 'array',
                  items: {
                    type: 'string'
                  },
                  uniqueItems: true
                }
              },
              additionalProperties: false
            },
            additionalItems: false
          }
        ]
      }
    }
  },
  {
    id: 'no-restricted-modules',
    meta: {
      docs: {
        description: 'disallow specified modules when loaded by `require`',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-restricted-modules'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'string'
                },
                {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string'
                    },
                    message: {
                      type: 'string',
                      minLength: 1
                    }
                  },
                  additionalProperties: false,
                  required: [
                    'name'
                  ]
                }
              ]
            },
            uniqueItems: true
          },
          {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                paths: {
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        type: 'string'
                      },
                      {
                        type: 'object',
                        properties: {
                          name: {
                            type: 'string'
                          },
                          message: {
                            type: 'string',
                            minLength: 1
                          }
                        },
                        additionalProperties: false,
                        required: [
                          'name'
                        ]
                      }
                    ]
                  },
                  uniqueItems: true
                },
                patterns: {
                  type: 'array',
                  items: {
                    type: 'string'
                  },
                  uniqueItems: true
                }
              },
              additionalProperties: false
            },
            additionalItems: false
          }
        ]
      }
    }
  },
  {
    id: 'no-restricted-properties',
    meta: {
      docs: {
        description: 'disallow certain properties on certain objects',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-restricted-properties'
      },
      schema: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                object: {
                  type: 'string'
                },
                property: {
                  type: 'string'
                },
                message: {
                  type: 'string'
                }
              },
              additionalProperties: false,
              required: [
                'object'
              ]
            },
            {
              type: 'object',
              properties: {
                object: {
                  type: 'string'
                },
                property: {
                  type: 'string'
                },
                message: {
                  type: 'string'
                }
              },
              additionalProperties: false,
              required: [
                'property'
              ]
            }
          ]
        },
        uniqueItems: true
      }
    }
  },
  {
    id: 'no-restricted-syntax',
    meta: {
      docs: {
        description: 'disallow specified syntax',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-restricted-syntax'
      },
      schema: {
        type: 'array',
        items: [
          {
            oneOf: [
              {
                type: 'string'
              },
              {
                type: 'object',
                properties: {
                  selector: {
                    type: 'string'
                  },
                  message: {
                    type: 'string'
                  }
                },
                required: [
                  'selector'
                ],
                additionalProperties: false
              }
            ]
          }
        ],
        uniqueItems: true,
        minItems: 0
      }
    }
  },
  {
    id: 'no-return-assign',
    meta: {
      docs: {
        description: 'disallow assignment operators in `return` statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-return-assign'
      },
      schema: [
        {
          'enum': [
            'except-parens',
            'always'
          ]
        }
      ]
    }
  },
  {
    id: 'no-return-await',
    meta: {
      docs: {
        description: 'disallow unnecessary `return await`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-return-await'
      },
      fixable: null,
      schema: []
    }
  },
  {
    id: 'no-script-url',
    meta: {
      docs: {
        description: 'disallow `javascript:` urls',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-script-url'
      },
      schema: []
    }
  },
  {
    id: 'no-self-assign',
    meta: {
      docs: {
        description: 'disallow assignments where both sides are exactly the same',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-self-assign'
      },
      schema: [
        {
          type: 'object',
          properties: {
            props: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-self-compare',
    meta: {
      docs: {
        description: 'disallow comparisons where both sides are exactly the same',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-self-compare'
      },
      schema: []
    }
  },
  {
    id: 'no-sequences',
    meta: {
      docs: {
        description: 'disallow comma operators',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-sequences'
      },
      schema: []
    }
  },
  {
    id: 'no-shadow-restricted-names',
    meta: {
      docs: {
        description: 'disallow identifiers from shadowing restricted names',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-shadow-restricted-names'
      },
      schema: []
    }
  },
  {
    id: 'no-shadow',
    meta: {
      docs: {
        description: 'disallow variable declarations from shadowing variables declared in the outer scope',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-shadow'
      },
      schema: [
        {
          type: 'object',
          properties: {
            builtinGlobals: {
              type: 'boolean'
            },
            hoist: {
              'enum': [
                'all',
                'functions',
                'never'
              ]
            },
            allow: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-spaced-func',
    meta: {
      docs: {
        description: 'disallow spacing between function identifiers and their applications (deprecated)',
        category: 'Stylistic Issues',
        recommended: false,
        replacedBy: [
          'func-call-spacing'
        ],
        url: 'https://eslint.org/docs/rules/no-spaced-func'
      },
      deprecated: true,
      fixable: 'whitespace',
      schema: []
    }
  },
  {
    id: 'no-sparse-arrays',
    meta: {
      docs: {
        description: 'disallow sparse arrays',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-sparse-arrays'
      },
      schema: []
    }
  },
  {
    id: 'no-sync',
    meta: {
      docs: {
        description: 'disallow synchronous methods',
        category: 'Node.js and CommonJS',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-sync'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowAtRootLevel: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-tabs',
    meta: {
      docs: {
        description: 'disallow all tabs',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-tabs'
      },
      schema: []
    }
  },
  {
    id: 'no-template-curly-in-string',
    meta: {
      docs: {
        description: 'disallow template literal placeholder syntax in regular strings',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-template-curly-in-string'
      },
      schema: []
    }
  },
  {
    id: 'no-ternary',
    meta: {
      docs: {
        description: 'disallow ternary operators',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-ternary'
      },
      schema: []
    }
  },
  {
    id: 'no-this-before-super',
    meta: {
      docs: {
        description: 'disallow `this`/`super` before calling `super()` in constructors',
        category: 'ECMAScript 6',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-this-before-super'
      },
      schema: []
    }
  },
  {
    id: 'no-throw-literal',
    meta: {
      docs: {
        description: 'disallow throwing literals as exceptions',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-throw-literal'
      },
      schema: []
    }
  },
  {
    id: 'no-trailing-spaces',
    meta: {
      docs: {
        description: 'disallow trailing whitespace at the end of lines',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-trailing-spaces'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            skipBlankLines: {
              type: 'boolean'
            },
            ignoreComments: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-undef-init',
    meta: {
      docs: {
        description: 'disallow initializing variables to `undefined`',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-undef-init'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-undef',
    meta: {
      docs: {
        description: 'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
        category: 'Variables',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-undef'
      },
      schema: [
        {
          type: 'object',
          properties: {
            'typeof': {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-undefined',
    meta: {
      docs: {
        description: 'disallow the use of `undefined` as an identifier',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-undefined'
      },
      schema: []
    }
  },
  {
    id: 'no-underscore-dangle',
    meta: {
      docs: {
        description: 'disallow dangling underscores in identifiers',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-underscore-dangle'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allow: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            allowAfterThis: {
              type: 'boolean'
            },
            allowAfterSuper: {
              type: 'boolean'
            },
            enforceInMethodNames: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-unexpected-multiline',
    meta: {
      docs: {
        description: 'disallow confusing multiline expressions',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-unexpected-multiline'
      },
      schema: []
    }
  },
  {
    id: 'no-unmodified-loop-condition',
    meta: {
      docs: {
        description: 'disallow unmodified loop conditions',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-unmodified-loop-condition'
      },
      schema: []
    }
  },
  {
    id: 'no-unneeded-ternary',
    meta: {
      docs: {
        description: 'disallow ternary operators when simpler alternatives exist',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-unneeded-ternary'
      },
      schema: [
        {
          type: 'object',
          properties: {
            defaultAssignment: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'no-unreachable',
    meta: {
      docs: {
        description: 'disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-unreachable'
      },
      schema: []
    }
  },
  {
    id: 'no-unsafe-finally',
    meta: {
      docs: {
        description: 'disallow control flow statements in `finally` blocks',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-unsafe-finally'
      },
      schema: []
    }
  },
  {
    id: 'no-unsafe-negation',
    meta: {
      docs: {
        description: 'disallow negating the left operand of relational operators',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-unsafe-negation'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-unused-expressions',
    meta: {
      docs: {
        description: 'disallow unused expressions',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-unused-expressions'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowShortCircuit: {
              type: 'boolean'
            },
            allowTernary: {
              type: 'boolean'
            },
            allowTaggedTemplates: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-unused-labels',
    meta: {
      docs: {
        description: 'disallow unused labels',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-unused-labels'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-unused-vars',
    meta: {
      docs: {
        description: 'disallow unused variables',
        category: 'Variables',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-unused-vars'
      },
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'all',
                'local'
              ]
            },
            {
              type: 'object',
              properties: {
                vars: {
                  'enum': [
                    'all',
                    'local'
                  ]
                },
                varsIgnorePattern: {
                  type: 'string'
                },
                args: {
                  'enum': [
                    'all',
                    'after-used',
                    'none'
                  ]
                },
                ignoreRestSiblings: {
                  type: 'boolean'
                },
                argsIgnorePattern: {
                  type: 'string'
                },
                caughtErrors: {
                  'enum': [
                    'all',
                    'none'
                  ]
                },
                caughtErrorsIgnorePattern: {
                  type: 'string'
                }
              }
            }
          ]
        }
      ]
    }
  },
  {
    id: 'no-use-before-define',
    meta: {
      docs: {
        description: 'disallow the use of variables before they are defined',
        category: 'Variables',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-use-before-define'
      },
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'nofunc'
              ]
            },
            {
              type: 'object',
              properties: {
                functions: {
                  type: 'boolean'
                },
                classes: {
                  type: 'boolean'
                },
                variables: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'no-useless-call',
    meta: {
      docs: {
        description: 'disallow unnecessary calls to `.call()` and `.apply()`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-useless-call'
      },
      schema: []
    }
  },
  {
    id: 'no-useless-computed-key',
    meta: {
      docs: {
        description: 'disallow unnecessary computed property keys in object literals',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-useless-computed-key'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-useless-concat',
    meta: {
      docs: {
        description: 'disallow unnecessary concatenation of literals or template literals',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-useless-concat'
      },
      schema: []
    }
  },
  {
    id: 'no-useless-constructor',
    meta: {
      docs: {
        description: 'disallow unnecessary constructors',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-useless-constructor'
      },
      schema: []
    }
  },
  {
    id: 'no-useless-escape',
    meta: {
      docs: {
        description: 'disallow unnecessary escape characters',
        category: 'Best Practices',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-useless-escape'
      },
      schema: []
    }
  },
  {
    id: 'no-useless-rename',
    meta: {
      docs: {
        description: 'disallow renaming import, export, and destructured assignments to the same name',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-useless-rename'
      },
      fixable: 'code',
      schema: [
        {
          type: 'object',
          properties: {
            ignoreDestructuring: {
              type: 'boolean'
            },
            ignoreImport: {
              type: 'boolean'
            },
            ignoreExport: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-useless-return',
    meta: {
      docs: {
        description: 'disallow redundant return statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-useless-return'
      },
      fixable: 'code',
      schema: []
    }
  },
  {
    id: 'no-var',
    meta: {
      docs: {
        description: 'require `let` or `const` instead of `var`',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-var'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'no-void',
    meta: {
      docs: {
        description: 'disallow `void` operators',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-void'
      },
      schema: []
    }
  },
  {
    id: 'no-warning-comments',
    meta: {
      docs: {
        description: 'disallow specified warning terms in comments',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-warning-comments'
      },
      schema: [
        {
          type: 'object',
          properties: {
            terms: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            location: {
              'enum': [
                'start',
                'anywhere'
              ]
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'no-whitespace-before-property',
    meta: {
      docs: {
        description: 'disallow whitespace before properties',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-whitespace-before-property'
      },
      fixable: 'whitespace',
      schema: []
    }
  },
  {
    id: 'no-with',
    meta: {
      docs: {
        description: 'disallow `with` statements',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/no-with'
      },
      schema: []
    }
  },
  {
    id: 'nonblock-statement-body-position',
    meta: {
      docs: {
        description: 'enforce the location of single-line statements',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/nonblock-statement-body-position'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'beside',
            'below',
            'any'
          ]
        },
        {
          properties: {
            overrides: {
              properties: {
                'if': {
                  'enum': [
                    'beside',
                    'below',
                    'any'
                  ]
                },
                'else': {
                  'enum': [
                    'beside',
                    'below',
                    'any'
                  ]
                },
                'while': {
                  'enum': [
                    'beside',
                    'below',
                    'any'
                  ]
                },
                'do': {
                  'enum': [
                    'beside',
                    'below',
                    'any'
                  ]
                },
                'for': {
                  'enum': [
                    'beside',
                    'below',
                    'any'
                  ]
                }
              },
              additionalProperties: false
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'object-curly-newline',
    meta: {
      docs: {
        description: 'enforce consistent line breaks inside braces',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/object-curly-newline'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              oneOf: [
                {
                  'enum': [
                    'always',
                    'never'
                  ]
                },
                {
                  type: 'object',
                  properties: {
                    multiline: {
                      type: 'boolean'
                    },
                    minProperties: {
                      type: 'integer',
                      minimum: 0
                    },
                    consistent: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false,
                  minProperties: 1
                }
              ]
            },
            {
              type: 'object',
              properties: {
                ObjectExpression: {
                  oneOf: [
                    {
                      'enum': [
                        'always',
                        'never'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        multiline: {
                          type: 'boolean'
                        },
                        minProperties: {
                          type: 'integer',
                          minimum: 0
                        },
                        consistent: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false,
                      minProperties: 1
                    }
                  ]
                },
                ObjectPattern: {
                  oneOf: [
                    {
                      'enum': [
                        'always',
                        'never'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        multiline: {
                          type: 'boolean'
                        },
                        minProperties: {
                          type: 'integer',
                          minimum: 0
                        },
                        consistent: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false,
                      minProperties: 1
                    }
                  ]
                },
                ImportDeclaration: {
                  oneOf: [
                    {
                      'enum': [
                        'always',
                        'never'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        multiline: {
                          type: 'boolean'
                        },
                        minProperties: {
                          type: 'integer',
                          minimum: 0
                        },
                        consistent: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false,
                      minProperties: 1
                    }
                  ]
                },
                ExportDeclaration: {
                  oneOf: [
                    {
                      'enum': [
                        'always',
                        'never'
                      ]
                    },
                    {
                      type: 'object',
                      properties: {
                        multiline: {
                          type: 'boolean'
                        },
                        minProperties: {
                          type: 'integer',
                          minimum: 0
                        },
                        consistent: {
                          type: 'boolean'
                        }
                      },
                      additionalProperties: false,
                      minProperties: 1
                    }
                  ]
                }
              },
              additionalProperties: false,
              minProperties: 1
            }
          ]
        }
      ]
    }
  },
  {
    id: 'object-curly-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing inside braces',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/object-curly-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        },
        {
          type: 'object',
          properties: {
            arraysInObjects: {
              type: 'boolean'
            },
            objectsInObjects: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'object-property-newline',
    meta: {
      docs: {
        description: 'enforce placing object properties on separate lines',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/object-property-newline'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowAllPropertiesOnSameLine: {
              type: 'boolean'
            },
            allowMultiplePropertiesPerLine: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'whitespace'
    }
  },
  {
    id: 'object-shorthand',
    meta: {
      docs: {
        description: 'require or disallow method and property shorthand syntax for object literals',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/object-shorthand'
      },
      fixable: 'code',
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always',
                  'methods',
                  'properties',
                  'never',
                  'consistent',
                  'consistent-as-needed'
                ]
              }
            ],
            minItems: 0,
            maxItems: 1
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always',
                  'methods',
                  'properties'
                ]
              },
              {
                type: 'object',
                properties: {
                  avoidQuotes: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always',
                  'methods'
                ]
              },
              {
                type: 'object',
                properties: {
                  ignoreConstructors: {
                    type: 'boolean'
                  },
                  avoidQuotes: {
                    type: 'boolean'
                  },
                  avoidExplicitReturnArrows: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      }
    }
  },
  {
    id: 'one-var-declaration-per-line',
    meta: {
      docs: {
        description: 'require or disallow newlines around variable declarations',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/one-var-declaration-per-line'
      },
      schema: [
        {
          'enum': [
            'always',
            'initializations'
          ]
        }
      ],
      fixable: 'whitespace'
    }
  },
  {
    id: 'one-var',
    meta: {
      docs: {
        description: 'enforce variables to be declared either together or separately in functions',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/one-var'
      },
      fixable: 'code',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never',
                'consecutive'
              ]
            },
            {
              type: 'object',
              properties: {
                separateRequires: {
                  type: 'boolean'
                },
                'var': {
                  'enum': [
                    'always',
                    'never',
                    'consecutive'
                  ]
                },
                let: {
                  'enum': [
                    'always',
                    'never',
                    'consecutive'
                  ]
                },
                'const': {
                  'enum': [
                    'always',
                    'never',
                    'consecutive'
                  ]
                }
              },
              additionalProperties: false
            },
            {
              type: 'object',
              properties: {
                initialized: {
                  'enum': [
                    'always',
                    'never',
                    'consecutive'
                  ]
                },
                uninitialized: {
                  'enum': [
                    'always',
                    'never',
                    'consecutive'
                  ]
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'operator-assignment',
    meta: {
      docs: {
        description: 'require or disallow assignment operator shorthand where possible',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/operator-assignment'
      },
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'operator-linebreak',
    meta: {
      docs: {
        description: 'enforce consistent linebreak style for operators',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/operator-linebreak'
      },
      schema: [
        {
          'enum': [
            'after',
            'before',
            'none',
            null
          ]
        },
        {
          type: 'object',
          properties: {
            overrides: {
              type: 'object',
              properties: {
                anyOf: {
                  type: 'string',
                  'enum': [
                    'after',
                    'before',
                    'none',
                    'ignore'
                  ]
                }
              }
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'padded-blocks',
    meta: {
      docs: {
        description: 'require or disallow padding within blocks',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/padded-blocks'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never'
              ]
            },
            {
              type: 'object',
              properties: {
                blocks: {
                  'enum': [
                    'always',
                    'never'
                  ]
                },
                switches: {
                  'enum': [
                    'always',
                    'never'
                  ]
                },
                classes: {
                  'enum': [
                    'always',
                    'never'
                  ]
                }
              },
              additionalProperties: false,
              minProperties: 1
            }
          ]
        }
      ]
    }
  },
  {
    id: 'padding-line-between-statements',
    meta: {
      docs: {
        description: 'require or disallow padding lines between statements',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/padding-line-between-statements'
      },
      fixable: 'whitespace',
      schema: {
        definitions: {
          paddingType: {
            'enum': [
              'any',
              'never',
              'always'
            ]
          },
          statementType: {
            anyOf: [
              {
                'enum': [
                  '*',
                  'block-like',
                  'cjs-export',
                  'cjs-import',
                  'directive',
                  'expression',
                  'multiline-block-like',
                  'multiline-expression',
                  'block',
                  'empty',
                  'function',
                  'break',
                  'case',
                  'class',
                  'const',
                  'continue',
                  'debugger',
                  'default',
                  'do',
                  'export',
                  'for',
                  'if',
                  'import',
                  'let',
                  'return',
                  'switch',
                  'throw',
                  'try',
                  'var',
                  'while',
                  'with'
                ]
              },
              {
                type: 'array',
                items: {
                  'enum': [
                    '*',
                    'block-like',
                    'cjs-export',
                    'cjs-import',
                    'directive',
                    'expression',
                    'multiline-block-like',
                    'multiline-expression',
                    'block',
                    'empty',
                    'function',
                    'break',
                    'case',
                    'class',
                    'const',
                    'continue',
                    'debugger',
                    'default',
                    'do',
                    'export',
                    'for',
                    'if',
                    'import',
                    'let',
                    'return',
                    'switch',
                    'throw',
                    'try',
                    'var',
                    'while',
                    'with'
                  ]
                },
                minItems: 1,
                uniqueItems: true,
                additionalItems: false
              }
            ]
          }
        },
        type: 'array',
        items: {
          type: 'object',
          properties: {
            blankLine: {
              $ref: '#/definitions/paddingType'
            },
            prev: {
              $ref: '#/definitions/statementType'
            },
            next: {
              $ref: '#/definitions/statementType'
            }
          },
          additionalProperties: false,
          required: [
            'blankLine',
            'prev',
            'next'
          ]
        },
        additionalItems: false
      }
    }
  },
  {
    id: 'prefer-arrow-callback',
    meta: {
      docs: {
        description: 'require using arrow functions for callbacks',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-arrow-callback'
      },
      schema: [
        {
          type: 'object',
          properties: {
            allowNamedFunctions: {
              type: 'boolean'
            },
            allowUnboundThis: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'prefer-const',
    meta: {
      docs: {
        description: 'require `const` declarations for variables that are never reassigned after declared',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-const'
      },
      fixable: 'code',
      schema: [
        {
          type: 'object',
          properties: {
            destructuring: {
              'enum': [
                'any',
                'all'
              ]
            },
            ignoreReadBeforeAssign: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'prefer-destructuring',
    meta: {
      docs: {
        description: 'require destructuring from arrays and/or objects',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-destructuring'
      },
      schema: [
        {
          oneOf: [
            {
              type: 'object',
              properties: {
                VariableDeclarator: {
                  type: 'object',
                  properties: {
                    array: {
                      type: 'boolean'
                    },
                    object: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                },
                AssignmentExpression: {
                  type: 'object',
                  properties: {
                    array: {
                      type: 'boolean'
                    },
                    object: {
                      type: 'boolean'
                    }
                  },
                  additionalProperties: false
                }
              },
              additionalProperties: false
            },
            {
              type: 'object',
              properties: {
                array: {
                  type: 'boolean'
                },
                object: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          ]
        },
        {
          type: 'object',
          properties: {
            enforceForRenamedProperties: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'prefer-numeric-literals',
    meta: {
      docs: {
        description: 'disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-numeric-literals'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'prefer-object-spread',
    meta: {
      docs: {
        description: 'disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-object-spread'
      },
      schema: [],
      fixable: 'code',
      messages: {
        useSpreadMessage: 'Use an object spread instead of `Object.assign` eg: `{ ...foo }`',
        useLiteralMessage: 'Use an object literal instead of `Object.assign`. eg: `{ foo: bar }`'
      }
    }
  },
  {
    id: 'prefer-promise-reject-errors',
    meta: {
      docs: {
        description: 'require using Error objects as Promise rejection reasons',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-promise-reject-errors'
      },
      fixable: null,
      schema: [
        {
          type: 'object',
          properties: {
            allowEmptyReject: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'prefer-reflect',
    meta: {
      docs: {
        description: 'require `Reflect` methods where applicable',
        category: 'ECMAScript 6',
        recommended: false,
        replacedBy: [],
        url: 'https://eslint.org/docs/rules/prefer-reflect'
      },
      deprecated: true,
      schema: [
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'array',
              items: {
                'enum': [
                  'apply',
                  'call',
                  'delete',
                  'defineProperty',
                  'getOwnPropertyDescriptor',
                  'getPrototypeOf',
                  'setPrototypeOf',
                  'isExtensible',
                  'getOwnPropertyNames',
                  'preventExtensions'
                ]
              },
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'prefer-rest-params',
    meta: {
      docs: {
        description: 'require rest parameters instead of `arguments`',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-rest-params'
      },
      schema: []
    }
  },
  {
    id: 'prefer-spread',
    meta: {
      docs: {
        description: 'require spread operators instead of `.apply()`',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-spread'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'prefer-template',
    meta: {
      docs: {
        description: 'require template literals instead of string concatenation',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/prefer-template'
      },
      schema: [],
      fixable: 'code'
    }
  },
  {
    id: 'quote-props',
    meta: {
      docs: {
        description: 'require quotes around object literal property names',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/quote-props'
      },
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always',
                  'as-needed',
                  'consistent',
                  'consistent-as-needed'
                ]
              }
            ],
            minItems: 0,
            maxItems: 1
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always',
                  'as-needed',
                  'consistent',
                  'consistent-as-needed'
                ]
              },
              {
                type: 'object',
                properties: {
                  keywords: {
                    type: 'boolean'
                  },
                  unnecessary: {
                    type: 'boolean'
                  },
                  numbers: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      },
      fixable: 'code'
    }
  },
  {
    id: 'quotes',
    meta: {
      docs: {
        description: 'enforce the consistent use of either backticks, double, or single quotes',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/quotes'
      },
      fixable: 'code',
      schema: [
        {
          'enum': [
            'single',
            'double',
            'backtick'
          ]
        },
        {
          anyOf: [
            {
              'enum': [
                'avoid-escape'
              ]
            },
            {
              type: 'object',
              properties: {
                avoidEscape: {
                  type: 'boolean'
                },
                allowTemplateLiterals: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'radix',
    meta: {
      docs: {
        description: 'enforce the consistent use of the radix argument when using `parseInt()`',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/radix'
      },
      schema: [
        {
          'enum': [
            'always',
            'as-needed'
          ]
        }
      ]
    }
  },
  {
    id: 'require-atomic-updates',
    meta: {
      docs: {
        description: 'disallow assignments that can lead to race conditions due to usage of `await` or `yield`',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/require-atomic-updates'
      },
      fixable: null,
      schema: [],
      messages: {
        nonAtomicUpdate: 'Possible race condition: `{{value}}` might be reassigned based on an outdated value of `{{value}}`.'
      }
    }
  },
  {
    id: 'require-await',
    meta: {
      docs: {
        description: 'disallow async functions which have no `await` expression',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/require-await'
      },
      schema: []
    }
  },
  {
    id: 'require-jsdoc',
    meta: {
      docs: {
        description: 'require JSDoc comments',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/require-jsdoc'
      },
      schema: [
        {
          type: 'object',
          properties: {
            require: {
              type: 'object',
              properties: {
                ClassDeclaration: {
                  type: 'boolean'
                },
                MethodDefinition: {
                  type: 'boolean'
                },
                FunctionDeclaration: {
                  type: 'boolean'
                },
                ArrowFunctionExpression: {
                  type: 'boolean'
                },
                FunctionExpression: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'require-unicode-regexp',
    meta: {
      docs: {
        description: 'enforce the use of `u` flag on RegExp',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/require-unicode-regexp'
      },
      messages: {
        requireUFlag: "Use the 'u' flag."
      },
      schema: []
    }
  },
  {
    id: 'require-yield',
    meta: {
      docs: {
        description: 'require generator functions to contain `yield`',
        category: 'ECMAScript 6',
        recommended: true,
        url: 'https://eslint.org/docs/rules/require-yield'
      },
      schema: []
    }
  },
  {
    id: 'rest-spread-spacing',
    meta: {
      docs: {
        description: 'enforce spacing between rest and spread operators and their expressions',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/rest-spread-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        }
      ]
    }
  },
  {
    id: 'semi-spacing',
    meta: {
      docs: {
        description: 'enforce consistent spacing before and after semicolons',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/semi-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            before: {
              type: 'boolean'
            },
            after: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'semi-style',
    meta: {
      docs: {
        description: 'enforce location of semicolons',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/semi-style'
      },
      schema: [
        {
          'enum': [
            'last',
            'first'
          ]
        }
      ],
      fixable: 'whitespace'
    }
  },
  {
    id: 'semi',
    meta: {
      docs: {
        description: 'require or disallow semicolons instead of ASI',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/semi'
      },
      fixable: 'code',
      schema: {
        anyOf: [
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'never'
                ]
              },
              {
                type: 'object',
                properties: {
                  beforeStatementContinuationChars: {
                    'enum': [
                      'always',
                      'any',
                      'never'
                    ]
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          },
          {
            type: 'array',
            items: [
              {
                'enum': [
                  'always'
                ]
              },
              {
                type: 'object',
                properties: {
                  omitLastInOneLineBlock: {
                    type: 'boolean'
                  }
                },
                additionalProperties: false
              }
            ],
            minItems: 0,
            maxItems: 2
          }
        ]
      }
    }
  },
  {
    id: 'sort-imports',
    meta: {
      docs: {
        description: 'enforce sorted import declarations within modules',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/sort-imports'
      },
      schema: [
        {
          type: 'object',
          properties: {
            ignoreCase: {
              type: 'boolean'
            },
            memberSyntaxSortOrder: {
              type: 'array',
              items: {
                'enum': [
                  'none',
                  'all',
                  'multiple',
                  'single'
                ]
              },
              uniqueItems: true,
              minItems: 4,
              maxItems: 4
            },
            ignoreMemberSort: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'sort-keys',
    meta: {
      docs: {
        description: 'require object keys to be sorted',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/sort-keys'
      },
      schema: [
        {
          'enum': [
            'asc',
            'desc'
          ]
        },
        {
          type: 'object',
          properties: {
            caseSensitive: {
              type: 'boolean'
            },
            natural: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'sort-vars',
    meta: {
      docs: {
        description: 'require variables within the same declaration block to be sorted',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/sort-vars'
      },
      schema: [
        {
          type: 'object',
          properties: {
            ignoreCase: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'space-before-blocks',
    meta: {
      docs: {
        description: 'enforce consistent spacing before blocks',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/space-before-blocks'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never'
              ]
            },
            {
              type: 'object',
              properties: {
                keywords: {
                  'enum': [
                    'always',
                    'never'
                  ]
                },
                functions: {
                  'enum': [
                    'always',
                    'never'
                  ]
                },
                classes: {
                  'enum': [
                    'always',
                    'never'
                  ]
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'space-before-function-paren',
    meta: {
      docs: {
        description: 'enforce consistent spacing before `function` definition opening parenthesis',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/space-before-function-paren'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'always',
                'never'
              ]
            },
            {
              type: 'object',
              properties: {
                anonymous: {
                  'enum': [
                    'always',
                    'never',
                    'ignore'
                  ]
                },
                named: {
                  'enum': [
                    'always',
                    'never',
                    'ignore'
                  ]
                },
                asyncArrow: {
                  'enum': [
                    'always',
                    'never',
                    'ignore'
                  ]
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'space-in-parens',
    meta: {
      docs: {
        description: 'enforce consistent spacing inside parentheses',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/space-in-parens'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        },
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'array',
              items: {
                'enum': [
                  '{}',
                  '[]',
                  '()',
                  'empty'
                ]
              },
              uniqueItems: true
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'space-infix-ops',
    meta: {
      docs: {
        description: 'require spacing around infix operators',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/space-infix-ops'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            int32Hint: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'space-unary-ops',
    meta: {
      docs: {
        description: 'enforce consistent spacing before or after unary operators',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/space-unary-ops'
      },
      fixable: 'whitespace',
      schema: [
        {
          type: 'object',
          properties: {
            words: {
              type: 'boolean'
            },
            nonwords: {
              type: 'boolean'
            },
            overrides: {
              type: 'object',
              additionalProperties: {
                type: 'boolean'
              }
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'spaced-comment',
    meta: {
      docs: {
        description: 'enforce consistent spacing after the `//` or `/*` in a comment',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/spaced-comment'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        },
        {
          type: 'object',
          properties: {
            exceptions: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            markers: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            line: {
              type: 'object',
              properties: {
                exceptions: {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                },
                markers: {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                }
              },
              additionalProperties: false
            },
            block: {
              type: 'object',
              properties: {
                exceptions: {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                },
                markers: {
                  type: 'array',
                  items: {
                    type: 'string'
                  }
                },
                balanced: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'strict',
    meta: {
      docs: {
        description: 'require or disallow strict mode directives',
        category: 'Strict Mode',
        recommended: false,
        url: 'https://eslint.org/docs/rules/strict'
      },
      schema: [
        {
          'enum': [
            'never',
            'global',
            'function',
            'safe'
          ]
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'switch-colon-spacing',
    meta: {
      docs: {
        description: 'enforce spacing around colons of switch statements',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/switch-colon-spacing'
      },
      schema: [
        {
          type: 'object',
          properties: {
            before: {
              type: 'boolean'
            },
            after: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'whitespace'
    }
  },
  {
    id: 'symbol-description',
    meta: {
      docs: {
        description: 'require symbol descriptions',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/symbol-description'
      },
      schema: []
    }
  },
  {
    id: 'template-curly-spacing',
    meta: {
      docs: {
        description: 'require or disallow spacing around embedded expressions of template strings',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/template-curly-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        }
      ]
    }
  },
  {
    id: 'template-tag-spacing',
    meta: {
      docs: {
        description: 'require or disallow spacing between template tags and their literals',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/template-tag-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        }
      ]
    }
  },
  {
    id: 'unicode-bom',
    meta: {
      docs: {
        description: 'require or disallow Unicode byte order mark (BOM)',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/unicode-bom'
      },
      fixable: 'whitespace',
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        }
      ]
    }
  },
  {
    id: 'use-isnan',
    meta: {
      docs: {
        description: 'require calls to `isNaN()` when checking for `NaN`',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/use-isnan'
      },
      schema: []
    }
  },
  {
    id: 'valid-jsdoc',
    meta: {
      docs: {
        description: 'enforce valid JSDoc comments',
        category: 'Possible Errors',
        recommended: false,
        url: 'https://eslint.org/docs/rules/valid-jsdoc'
      },
      schema: [
        {
          type: 'object',
          properties: {
            prefer: {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            preferType: {
              type: 'object',
              additionalProperties: {
                type: 'string'
              }
            },
            requireReturn: {
              type: 'boolean'
            },
            requireParamDescription: {
              type: 'boolean'
            },
            requireReturnDescription: {
              type: 'boolean'
            },
            matchDescription: {
              type: 'string'
            },
            requireReturnType: {
              type: 'boolean'
            },
            requireParamType: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'valid-typeof',
    meta: {
      docs: {
        description: 'enforce comparing `typeof` expressions against valid strings',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/valid-typeof'
      },
      schema: [
        {
          type: 'object',
          properties: {
            requireStringLiterals: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ]
    }
  },
  {
    id: 'vars-on-top',
    meta: {
      docs: {
        description: 'require `var` declarations be placed at the top of their containing scope',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/vars-on-top'
      },
      schema: []
    }
  },
  {
    id: 'wrap-iife',
    meta: {
      docs: {
        description: 'require parentheses around immediate `function` invocations',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/wrap-iife'
      },
      schema: [
        {
          'enum': [
            'outside',
            'inside',
            'any'
          ]
        },
        {
          type: 'object',
          properties: {
            functionPrototypeMethods: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  },
  {
    id: 'wrap-regex',
    meta: {
      docs: {
        description: 'require parenthesis around regex literals',
        category: 'Stylistic Issues',
        recommended: false,
        url: 'https://eslint.org/docs/rules/wrap-regex'
      },
      schema: [],
      fixable: 'code',
      messages: {
        requireParens: 'Wrap the regexp literal in parens to disambiguate the slash.'
      }
    }
  },
  {
    id: 'yield-star-spacing',
    meta: {
      docs: {
        description: 'require or disallow spacing around the `*` in `yield*` expressions',
        category: 'ECMAScript 6',
        recommended: false,
        url: 'https://eslint.org/docs/rules/yield-star-spacing'
      },
      fixable: 'whitespace',
      schema: [
        {
          oneOf: [
            {
              'enum': [
                'before',
                'after',
                'both',
                'neither'
              ]
            },
            {
              type: 'object',
              properties: {
                before: {
                  type: 'boolean'
                },
                after: {
                  type: 'boolean'
                }
              },
              additionalProperties: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 'yoda',
    meta: {
      docs: {
        description: 'require or disallow "Yoda" conditions',
        category: 'Best Practices',
        recommended: false,
        url: 'https://eslint.org/docs/rules/yoda'
      },
      schema: [
        {
          'enum': [
            'always',
            'never'
          ]
        },
        {
          type: 'object',
          properties: {
            exceptRange: {
              type: 'boolean'
            },
            onlyEquality: {
              type: 'boolean'
            }
          },
          additionalProperties: false
        }
      ],
      fixable: 'code'
    }
  }
];
