---
title: "Things I Believed About Software Engineering at 25 That I Don't Believe at 41"
description: "Cleverness, architecture, rewrites, titles and other things that become less impressive after enough years in the industry."
published_date: 2026-07-20 16:45:00 +0000
is_draft: false
layout: post.liquid
tags:
  - software-engineering
  - careers
  - programming
  - experience
---

At 25, I thought good engineers knew lots of things.

At 41, I think good engineers know which things matter.

This is an irritating distinction because the first kind of knowledge is much easier to collect. You can memorize APIs, read books, learn languages, study architectures, and develop strong opinions on databases.

All useful.

But after enough years, you begin noticing that the engineers you trust most are not necessarily the ones carrying the largest visible pile of technical facts. Their advantage is usually judgment.

And judgment is much harder to install.

## I Used to Think Clever Code Was Impressive

Clever code *is* impressive. That is the problem.

You look at it and think, *Oh, that's nice.*

Then six months later you're debugging it during an incident and thinking, *Which bastard wrote this?*

Git supplies the answer.

You did.

Young programmers often optimize for the moment the code is written. Experienced programmers increasingly optimize for the moment the code is read by a tired person under unpleasant circumstances.

This changes what beautiful means.

## I Used to Think Architecture Was Mostly About Choosing the Right Technologies

Database. Queue. Framework. Protocol. Cloud service.

These decisions matter.

But architecture is more often about deciding where complexity is allowed to exist. Where is state? Who owns it? What happens when this component fails? How many things have to be understood simultaneously? Where can bad data travel? Which decisions are reversible?

These questions are less exciting than choosing between databases.

They also matter more.

## I Used to Underestimate the Cost of Another Service

A new service looks tiny in a diagram.

A rectangle. Perhaps four centimeters wide. Very manageable.

Unfortunately the rectangle is lying.

The rectangle requires deployment, monitoring, ownership, security, dependencies, documentation, upgrades, on-call understanding, incident response, and eventually abandonment.

Every box in an architecture diagram is a small animal that must be fed forever.

This realization makes experienced engineers extremely reluctant pet owners.

## I Used to Think Rewrites Were Cleaner

Of course they are.

For approximately six minutes.

A rewrite begins with a magnificent advantage: it contains no history. No old compromises. No awkward edge cases. No bizarre customer requirements. No scars.

The old system looks hideous beside it.

Then the new system encounters reality.

Reality starts filing bug reports.

Soon the rewrite begins accumulating the same ugly adaptations that made the original system look so unpleasant.

This doesn't mean rewrites are never justified. Sometimes they are absolutely necessary. But "this codebase is ugly" is not, by itself, evidence.

Old code is often ugly because it survived long enough to discover where the bodies are buried.

## I Used to Think Titles Told You More

Senior. Staff. Principal. Architect. Director.

Titles can be useful.

They can also become corporate fan fiction.

The strongest engineer in a group may have a modest title. A mediocre engineer may have accumulated an extraordinary one.

Eventually you stop asking what somebody is called and start watching what happens when the problem becomes ambiguous.

Can they reduce it? Can they find the important variable? Can they distinguish symptoms from causes? Can they tell you what they don't know? Can they change their mind?

This tells you much more.

## I Used to Think Becoming Senior Meant Knowing More Answers

It does, partly. You accumulate patterns. You've seen things break. You know technologies.

But the larger change is becoming better at identifying which question is worth answering.

At 25:

"How can we build this?"

At 41:

"Why are we building this?"

The second question has deleted a remarkable amount of code.

I now consider that a feature.
