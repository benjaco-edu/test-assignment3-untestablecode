# Test assignment 3

https://github.com/datsoftlyngby/soft2019spring-test/blob/master/Assignments/03%20Testability%20assignment.pdf

I wrote a function to extract "label of time of day" for a given moment

It is written in javascript, eslint and jshint is used for the static analysis and mocha is used for the unittest.

## Bad example - untestable_timeOfDay.js

I wrote it as bad as I could, a lot of function variables, unreachable code, inline functions and use function in the code there is depended on when it is executed to make et even harder to test.

The output of the static analysis of the untestable code:

```
> ./node_modules/.bin/eslint untestable_timeOfDay.js

/home/benjamin/Desktop/test-assignment3/untestable_timeOfDay.js
   1:1   error  Expected space or tab after '/*' in comment                                                                    spaced-comment
   3:1   error  Expected space or tab after '/*' in comment                                                                    spaced-comment
   5:1   error  Missing JSDoc comment                                                                                          require-jsdoc
   6:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
   6:9   error  'getDate' is never reassigned. Use 'const' instead                                                             prefer-const
   6:25  error  Unexpected space(s) after '{'                                                                                  block-spacing
   6:25  error  Statement inside of curly braces should be on next line                                                        brace-style
   6:44  error  Missing semicolon                                                                                              semi
   6:45  error  Unexpected space(s) before '}'                                                                                 block-spacing
   6:45  error  Closing curly brace should be on the same line as opening curly brace or on the line after the previous block  brace-style
   7:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
   7:9   error  'date' is never reassigned. Use 'const' instead                                                                prefer-const
   8:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
   8:9   error  'morning' is never reassigned. Use 'const' instead                                                             prefer-const
   8:19  error  Strings must use singlequote                                                                                   quotes
   9:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
   9:9   error  'beforeDinner' is never reassigned. Use 'const' instead                                                        prefer-const
   9:24  error  Strings must use singlequote                                                                                   quotes
  10:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  10:9   error  'afternoon' is never reassigned. Use 'const' instead                                                           prefer-const
  10:21  error  Strings must use singlequote                                                                                   quotes
  11:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  11:9   error  'evening' is never reassigned. Use 'const' instead                                                             prefer-const
  11:19  error  Strings must use singlequote                                                                                   quotes
  12:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  12:9   error  'night' is never reassigned. Use 'const' instead                                                               prefer-const
  12:17  error  Strings must use singlequote                                                                                   quotes
  13:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  15:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  16:1   error  Expected indentation of 4 spaces but found 8                                                                   indent
  17:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  18:1   error  Expected indentation of 4 spaces but found 8                                                                   indent
  19:1   error  Expected indentation of 6 spaces but found 12                                                                  indent
  19:37  error  Missing semicolon                                                                                              semi
  20:1   error  Expected indentation of 4 spaces but found 8                                                                   indent
  21:1   error  Expected indentation of 6 spaces but found 12                                                                  indent
  22:1   error  Expected indentation of 8 spaces but found 16                                                                  indent
  22:38  error  Missing semicolon                                                                                              semi
  23:1   error  Expected indentation of 6 spaces but found 12                                                                  indent
  23:20  error  Block must not be padded by blank lines                                                                        padded-blocks
  25:1   error  Expected indentation of 8 spaces but found 16                                                                  indent
  26:1   error  Expected indentation of 10 spaces but found 20                                                                 indent
  26:40  error  Missing semicolon                                                                                              semi
  27:1   error  Expected indentation of 8 spaces but found 16                                                                  indent
  28:1   error  Expected indentation of 10 spaces but found 20                                                                 indent
  28:40  error  Missing semicolon                                                                                              semi
  29:1   error  Expected indentation of 8 spaces but found 16                                                                  indent
  30:1   error  Expected indentation of 10 spaces but found 20                                                                 indent
  31:1   error  Expected indentation of 8 spaces but found 16                                                                  indent
  33:1   error  Expected indentation of 6 spaces but found 12                                                                  indent
  33:13  error  Block must not be padded by blank lines                                                                        padded-blocks
  34:1   error  Expected indentation of 4 spaces but found 8                                                                   indent
  35:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  38:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  39:1   error  Expected indentation of 2 spaces but found 4                                                                   indent
  39:12  error  Strings must use singlequote                                                                                   quotes
  42:31  error  Newline required at end of file but not found                                                                  eol-last

✖ 57 problems (57 errors, 0 warnings)
  56 errors and 0 warnings potentially fixable with the `--fix` option.

```
```
> ./node_modules/.bin/jshint untestable_timeOfDay.js
untestable_timeOfDay.js: line 3, col 1, Bad option: ''.
untestable_timeOfDay.js: line 6, col 44, Missing semicolon.
untestable_timeOfDay.js: line 19, col 37, Missing semicolon.
untestable_timeOfDay.js: line 21, col 64, Blocks are nested too deeply. (3)
untestable_timeOfDay.js: line 22, col 38, Missing semicolon.
untestable_timeOfDay.js: line 23, col 20, Blocks are nested too deeply. (3)
untestable_timeOfDay.js: line 26, col 40, Missing semicolon.
untestable_timeOfDay.js: line 28, col 40, Missing semicolon.
untestable_timeOfDay.js: line 39, col 5, Unreachable 'return' after 'return'.
untestable_timeOfDay.js: line 5, col 22, This function's cyclomatic complexity is too high. (6)

10 errors
```

The cyclomatic complexity is 6.

It is hard to test as well because it gets the date inside the function.

## Refactored code - timeOfDay.js

eslint is now happy and returns nothing

```
> ./node_modules/.bin/jshint timeOfDay.js
  timeOfDay.js: line 2, col 1, Bad option: ''.
  timeOfDay.js: line 8, col 22, This function's cyclomatic complexity is too high. (5)

  2 errors
```

The cyclomatic complexity got down to 5.

And the unit test:

```
> ./node_modules/.bin/mocha


  Time of day
    ✓ should return Morning at 00:00
    ✓ should return Morning at 09:59
    ✓ should return Before dinner at 10:00
    ✓ should return Before dinner at 12:59
    ✓ should return Afternoon at 13:00
    ✓ should return Afternoon at 17:59
    ✓ should return Evening at 18:00
    ✓ should return Evening at 22:59
    ✓ should return Night at 23:00
    ✓ should return Night at 23:59


  10 passing (12ms)

```

## Run it

Run `npm install` and the the shown commandos (requires node)

Or run it with docker

`sudo docker run -it --rm bslcphbussiness/test-untestable-and-refactor`