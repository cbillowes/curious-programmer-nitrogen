---
title: "Programing jargon"
date:   2019-09-10 02:00:00 +0200
tags:
    - Technical
---

Are you a beginner programmer? Perhaps you have some experience and haven't
heard of or understood some popular terms. The goal of this post is to
expose and unravel common programming jargon by sharing my understanding of it.
It is super-duper important to let me know if I have misunderstood something.
I will update this post, attribute you and give you a massive virtual hug!

## Expressions:
Expressions are things programs interpret that returns a value.
* [constants][constants] (things that can't change in the program),
* [variables][variables] (storage location of things with names that can be changed),
* [operators][operators] (like arithmetic, comparisons and logical operations) and
* [functions][functions] (a sequence of instructions to perform a specific task).

> Check out some nice examples of
> [JavaScript expressions and operators][javascript expressions].

## Immutability


## Side effects
A [side effect][side effects] is changing something somewhere (state).
This could be things like

* modifying state variables
* passing variables by reference
* writing to the database
* saving a file to disk

## Idempotent
[Idempotent](https://stackoverflow.com/questions/1077412/what-is-an-idempotent-operationt)
mean that you will always get the same result based on the values that you
give it.

Say for instance you are calculating `1 + 1`. Your `add` function will no doubt
give you `2` as the answer.

## Pure functions
[Pure functions][pure functions] are idempotent and have no side effects. There
is no data dependency between these functions, their order can be reversed or
run in parallel without interfering with each other (thread-safe).

## Recursion
[Recursive][recursive] functions invoke themselves and repeat until they reach
their base case. Some recursion maintains a stack while tail recursion is
optimized by the compiler into the same code used to implement the iteration
as in imperative languages.

## Referential integrity
[Referential integrity][referential integrity] treats computation as the
evaluation of mathematical functions and avoids changing-state and mutable data
and is idempotent.

## Programming paradigms
[Programming paradigms][paradigms] are simply a way of classifying languages
based on their behaviour and features.
[Declarative][declarative] and [imperative][imperative] are both programming paradigms. Languages can be
in more than one paradigm.

### Imperative
Write algorithms with a bunch of ordered and explicit steps (statements)
that can change a program's state. You will be telling the computer **how** to
do a task.

Maybe you want to tell the computer to draw a map to your favourite party
spot. You would give the computer explicit commands such as to

* order an Uber
* get into the car
* turn left onto [Frying Pan Road][weird street names],
* drive for 1.2km
* turn right onto Awesome street
* drive for 2.5km
* reach your destination on your right
* go in and have a fun time.

### Declarative
Write a bunch of expressions and declarations telling the computer **what** you
would like it to do. The computer will then decide how to implement it.
It helps to minimize or eliminate side effects in your program.

Let's go to the same party spot.

* order an Uber
* drive to 37 Awesome street
* go in and have a fun time.

### Functional programming
[Functional programming][functional] is **idempotent** (when you give a function
values then the same value for those values will always be returned).

## Piping
## Currying

## References
* [Constants][constants], [Variables][variables], [Operators][operators] and [Functions][functions] - Wikipedia
* [Expressions][expression], [Side effects][side effects] and [Pure function][pure functions] - Wikipedia
* [Declarative programming][declarative] and [imperative programming][imperative] - Wikipedia
* [Idempotent][idempotence], [Referential transparency][referential transparency] and [Recursion][recursion] - Wikipedia
* [Immutability][immutability] - LispCast
* [What Is Referential Transparency?][what is referential transparency] - Pierre-Yves Saumont
* [Weird street names][weird street names]

[functional]: https://en.wikipedia.org/wiki/Functional_programming
[imperative]: https://en.wikipedia.org/wiki/Imperative_programming
[declarative]: https://en.wikipedia.org/wiki/Declarative_programming
[constants]: https://en.wikipedia.org/wiki/Constant_(programming)
[variables]: https://en.wikipedia.org/wiki/Variables_(programming)
[operators]: https://en.wikipedia.org/wiki/Operator_(programming)
[functions]: https://en.wikipedia.org/wiki/Function_(programming)
[paradigms]: https://simple.wikipedia.org/wiki/Programming_paradigm
[side effects]: https://en.wikipedia.org/wiki/Side_effect_(computer_science)
[pure functions]: https://en.wikipedia.org/wiki/Pure_function
[javascript expressions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
[expression]: https://en.wikipedia.org/wiki/Expression_(computer_science)
[referential transparency]: https://en.wikipedia.org/wiki/Referential_transparency
[idempotence]: https://en.wikipedia.org/wiki/Idempotence

[immutability]: https://lispcast.com/what-is-immutability/
[what is referential transparency]: https://www.sitepoint.com/what-is-referential-transparency/
[weird street names]: http://mentalfloss.com/article/66000/15-weirdest-street-names-across-us
