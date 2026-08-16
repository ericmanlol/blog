---
title: "What 20 Years of Production Engineering Does to Your Brain"
description: "Eventually every architecture diagram becomes a crime scene and every green dashboard becomes a suspect."
published_date: 2026-08-05 07:50:00 +0000
is_draft: false
layout: post.liquid
tags:
  - sre
  - engineering
  - distributed-systems
  - reliability
---

After enough years working on production systems, you develop peculiar reflexes. Someone shows you a beautiful architecture diagram and you immediately wonder which box is lying.

Someone says, "This service is highly available."

You ask, "What happens when the database becomes slow without actually going down?"

They look irritated.

Someone says, "We've never seen that fail."

Your blood runs cold.

This is what production engineering does to a person. It gradually turns optimism into a request for evidence.

## Everything Fails, but Rarely in the Polite Way

Young engineers generally understand that computers fail. Experienced engineers develop a more specific suspicion: things do not merely fail. They fail *strangely*.

A dead service is almost relaxing. Service dead. Alarm fires. Engineer investigates. Cause discovered. Fix applied. Wonderful.

Real systems prefer creativity.

The service is alive. It is simply taking 8.7 seconds to answer. Half the requests succeed. One availability zone has developed a personality disorder. A dependency is returning HTTP 200 responses containing perfectly valid nonsense. CPU looks fine. Memory looks fine. Every dashboard is green.

Users cannot log in.

Now you are doing reliability engineering.

## Dashboards Are Not Reality

Modern dashboards are beautiful. There are graphs, gauges, percentages with decimal places. Green things are healthy. Red things are bad. Executives adore them.

Then one afternoon customers cannot purchase anything and every square on the screen is green.

This teaches an important lesson: a metric is not the system. It is a peephole drilled into the system. Sometimes you drilled the hole in the wrong wall.

The point of observability is not to collect a heroic quantity of telemetry. It is to answer a much simpler question:

**What the hell is happening?**

Preferably before a customer answers the question for you.

## Complexity Arrives One Reasonable Decision at a Time

Nobody walks into work on Monday and announces, "I would like to construct an incomprehensible distributed nightmare." That would at least be honest.

Instead:

"We'll add a cache."

Reasonable.

"We should put a queue here."

Reasonable.

"This operation can be asynchronous."

Still reasonable.

"We'll temporarily maintain two sources of truth."

A small bell should now be ringing somewhere.

Six months later there are seventeen services, four queues, three databases, two caches and a man named Greg who cannot take vacation because nobody else knows why the reconciliation process runs every Thursday.

This is how systems become haunted.

Nobody designed the haunted system. It accreted.

## The Older I Get, the More Suspicious I Am of Cleverness

Clever systems are enormously attractive when you're building them. Look at this abstraction. Look at this elegant asynchronous workflow. Look at this generalized framework.

Then you encounter the system at 3 AM while one-third of it is broken.

Suddenly boring code becomes intensely erotic.

The boring service has three endpoints. It reads from one database. It has obvious logs. The deployment takes four minutes. When it dies, it dies honestly.

You could kiss it.

There is a point in an engineering career where simplicity stops looking primitive and starts looking expensive. Simplicity is usually what remains after somebody has understood the problem well enough to remove everything unnecessary.

## Seniority Changes the Questions

A junior engineer looks at a system and asks, "How do we make this work?"

Later you start asking, "How does this fail?" Then, "How will we know?" Then, "What else breaks when it does?"

And finally:

"Do we actually need this thing?"

That last question has prevented more incidents than half the technologies I've used.

Experienced engineers therefore sometimes appear depressingly conservative. It is not necessarily because imagination has left them. They have simply met the future before.

And the future was paged at 2:43 in the morning.
