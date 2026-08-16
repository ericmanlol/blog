---
title: "SICP Is Weird as Hell, and I Finally Understand Why People Worship It"
description: "The Wizard Book is not really about learning Scheme. It is about discovering that programming languages are themselves things you can take apart."
published_date: 2026-08-11 08:40:00 +0000
is_draft: false
layout: post.liquid
tags:
  - programming
  - sicp
  - computer-science
  - lisp
---

There is a famous computer science book called *Structure and Interpretation of Computer Programs*. People call it SICP. Other people call it the Wizard Book because there is a wizard on the cover. This ought to be your first warning. Normal textbooks do not require wizards.

For years I knew about SICP in the way programmers know about certain sacred objects: Lisp, Smalltalk, Unix, Plan 9, Emacs, lambda calculus. You may not use any of these things, but somewhere on the internet there is an extremely intelligent man who will explain why civilization took a wrong turn when everybody else stopped using them.

SICP belongs firmly to this category. People do not merely recommend it. They speak about it as though the book physically rearranged their brains. So eventually I went back and looked at the thing properly, and I finally understood the fuss.

SICP is not really trying to teach you how to program. That is the first trick. A normal programming book says: here is a language, here are variables, here are loops, here are functions, here is how to make something useful. Congratulations. Please proceed to employment.

SICP asks considerably stranger questions. What *is* a programming language? What is evaluation? What is state? What does abstraction actually buy us? What if we build an interpreter inside the language we're already using?

At one point you find yourself constructing machinery that begins to resemble the machinery interpreting the machinery. This is wonderfully deranged. It's rather like learning how restaurants work by constructing a tiny chef, then having the chef construct another chef, and then discovering that one of the chefs is somehow the restaurant.

Most programmers can work professionally for decades without needing to think very hard about any of this. You can build enormous systems while treating the programming language itself like gravity. It is simply there. `if` works. Functions work. Objects work. The compiler performs a secret ceremony. Eventually Kubernetes catches fire.

This is enough for an entire career.

SICP lifts the floorboards. Underneath, you discover that programming languages are not commandments handed down from a mountain. They are machines made out of ideas. An evaluator is a program. An interpreter is a program. Things that looked fundamental can often be constructed from smaller things.

And suddenly the obsession with Lisp becomes less mysterious.

At first Lisp looks absurd. There are parentheses everywhere. It resembles a typographical infestation. But the simplicity is precisely what gives SICP room to perform its tricks. The code and the structure of the code sit unusually close together. Programs can become data. Data can become programs.

Then macros appear. Macros are often explained terribly: "They generate code." That description makes them sound like an elaborate version of copy and paste.

The more interesting idea is that the language itself stops feeling completely fixed. You can teach it new forms. You can manufacture constructs that behave as though somebody had included them in the language from the beginning.

Most languages give you a box of Lego. Lisp quietly hands you the machine that manufactures Lego pieces.

That is a different sort of power.

And that, I think, is why SICP has a cult around it. Not because every programmer should throw away Go, Python, Rust, Java, or whatever else they're using and spend the rest of their life writing Scheme. Please don't.

It has a cult because it briefly changes programming from something you merely *do* into something you can look through. The walls become transparent. You see the machinery.

And once you've seen the machinery, ordinary programming languages begin to look slightly less inevitable.
