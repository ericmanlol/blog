---
title: "Why Really Good Engineers Sometimes Look Less Impressive Than Mediocre Ones"
description: "Engineering ability and looking like an impressive engineer overlap. They are not remotely the same thing."
published_date: 2026-08-01 18:30:00 +0000
is_draft: false
layout: post.liquid
tags:
  - engineering
  - careers
  - software-engineering
  - organizations
---

There is an awkward thing that happens inside engineering organizations. The engineer who sounds strongest is not necessarily the engineer you want nearby when something genuinely difficult breaks.

Anyone who has worked long enough has met both kinds.

The first engineer can explain absolutely everything: architecture, strategy, leadership, scale, platformization, transformation, possibly synergy if the situation has become desperate. He is magnificent in meetings. Ask a question and twelve minutes of fluent technical English pours out.

Then a production system begins behaving in a way nobody understands.

Suddenly he has another meeting.

The other engineer may hardly have spoken. He stares at the logs for a while. He asks two questions that initially sound almost stupid.

Then: "Can you show me the raw requests before they hit the proxy?"

Twenty minutes later he finds a retry loop multiplying traffic by six.

Nobody applauds. The incident ends.

## Talking and Knowing Are Separate Skills

This sounds obvious. Organizations nevertheless confuse them constantly.

Presentation is visible. Judgment is often invisible.

Imagine two engineers. Engineer A spends three days designing an elaborate system to solve a difficult problem. There are diagrams, documents, a new service, and eventually a launch announcement.

Engineer B spends forty minutes looking at the original problem and says, "We can do this with the thing we already have."

Engineer B has just produced almost nothing.

This is awkward at performance-review time.

The fact that he may also have prevented the company from maintaining another service for the next five years is much harder to photograph.

## Expertise Often Removes Drama

Experts are frequently disappointing to watch.

Someone asks a complicated question. The mediocre engineer gives a magnificent answer involving queues, streams, event buses, distributed caches and approximately nine cloud products.

The expert says, "I wouldn't do that."

Why not?

"Too many failure modes."

This sounds terribly unsophisticated. It may also be correct.

There is a compression that happens with expertise. Beginners carry rules explicitly. Experts carry patterns.

The beginner says, "We must consider A, B, C, D, E, F and G."

The expert looks at the shape of the problem and says, "This smells wrong."

That sentence may contain twenty years of compressed information.

Unfortunately it sounds exactly like an opinion.

## The Best Engineers Ask Stupid Questions

Some of the strongest engineers I've known ask questions that seem embarrassingly basic.

"What problem are we solving?"

"Who actually needs this?"

"Where does that number come from?"

"Why does this service exist?"

"What happens if we don't build it?"

These questions can feel almost insulting when everybody else has already reached slide 47 of the architecture proposal.

Then somebody attempts to answer them.

Silence.

Ah.

The sophisticated conversation had been floating six feet above the ground. The stupid question brought it back down.

## Organizations Reward Legibility

None of this means communication is unimportant. It matters enormously. Managers cannot telepathically detect engineering ability. If your work is invisible, people may genuinely not know it exists.

Writing helps. Explaining decisions helps. Making your impact legible helps.

But there remains a gap between being good at engineering and being good at *appearing to be good at engineering*. The two skills overlap. They are not identical.

You discover this most clearly during real problems.

When the dashboards turn red and nobody understands why, people stop caring who gave the best architecture presentation last quarter. They begin looking for the person who can make the machine behave again.

That person is often quieter than expected.
