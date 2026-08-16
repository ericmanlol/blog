---
title: "I Think Most People Are Using AI Wrong"
description: "Treating an LLM like slightly better Google leaves most of the interesting part untouched."
published_date: 2026-07-29 22:05:00 +0000
is_draft: false
layout: post.liquid
tags:
  - ai
  - llm
  - learning
  - technology
---

Most people I see using AI interact with it like this: ask question, receive answer, leave.

This seems to me a little like buying a computer in 1985 and using it exclusively as a calculator.

Yes, it does that.

But something larger has probably been missed.

The strange thing about large language models is not merely that they know a tremendous amount of stuff. Search engines already gave us access to tremendous amounts of stuff. The strange part is that you can *continue*.

You can disagree. You can say, "That explanation doesn't make sense." You can isolate one sentence. You can make it produce three competing explanations. You can tell it your mental model and ask where it breaks. You can hand it a technical problem and keep peeling until you reach the bit you actually don't understand.

That is a very different activity from searching.

## The First Answer Is Often the Least Interesting One

If I ask an LLM, "What is a compiler?" I receive a perfectly respectable explanation. Lovely.

If I stop there, I have learned roughly what I could have learned from Wikipedia.

But then I can say, "Show me what happens to this five-line program." Then, "What does the abstract syntax tree look like?" Then, "Why do I need that?" Then, "What would an interpreter do differently?"

Then: "Okay, I still don't intuitively understand the difference."

Then: "Build the smallest possible fake compiler."

Now something interesting is happening.

The conversation is moving toward the exact shape of my confusion. A textbook cannot do that. A search result cannot do that. A teacher can, but teachers generally become annoyed if you summon them at 1:37 AM to ask a seventeenth follow-up question about parsers.

The machine does not care.

## You Should Argue With It

People are strangely polite to AI. This is unnecessary.

If the answer sounds wrong, say so. If the explanation is vague, say so. If it uses jargon to conceal the fact that it has explained nothing, tell it.

One of the best uses of an LLM is adversarial:

"That sounds like bullshit. Defend it."

"Give me the strongest argument against what you just said."

"What assumption are you making?"

"Which part are you least certain about?"

"Explain why this wouldn't work."

That turns the model from an answer vending machine into something closer to a thinking surface.

Not a mind. Not an oracle.

A surface you can bounce thought against.

## Context Is Where Things Become Bizarre

A generic answer is useful. An answer that knows what you're trying to do is much more useful.

Once the model knows the system you're debugging, the book you're reading, the way you've already tried to understand something, the tools you use, and the constraints you're operating under, you stop repeatedly rebuilding the first ten minutes of the conversation.

This is where AI begins to feel qualitatively different from ordinary software.

Traditional software waits for commands. This kind of software can accumulate enough context to participate in an ongoing problem.

That creates an entirely different category of tool.

## The Danger Is Intellectual Outsourcing

There is, unfortunately, an obvious trap. AI can think *around* a problem so efficiently that you can avoid thinking *through* it.

This is particularly dangerous when learning. You ask, it explains, everything sounds clear, and you continue. Later someone asks you to reproduce the idea and you discover that absolutely nothing has taken root.

So sometimes the correct prompt is not, "Explain this."

It is, "Don't tell me the answer yet."

Ask me questions. Make me predict. Make me derive it. Point out the gap. Give me a hint, not the solution.

In other words, occasionally the smartest way to use an extremely capable answer machine is to prevent it from giving you the answer.

Which is exactly the kind of ridiculous outcome technology tends to produce.
