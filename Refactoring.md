# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

First step I took with refactoring was using 'Pure Functions' where the function will always return the same output given with the same input, and it doesn't have any side effect. It makes easier to debug, test, read, and reduce the redundant code. Also, I focused on immutability for the variables that does not need to be changed (mainly replace from 'let' to 'const). Function names might not be the best I came up with, but I couldn't come up with the other name since I didn't fully comprehend the some of logics behind in the function.