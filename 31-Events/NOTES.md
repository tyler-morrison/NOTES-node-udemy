# Conceptual Aside: Events

Although the concept of events is not one that is unique — it can be found in many programming languages, including Javascript — in Node, we actually talk about *two* kinds of events.

## Two Kinds of Events

1. System Events — From the C++ Core, which is provided by libuv and never really seen.
2. Custom Events — Within the Javascript core, that deals with event that a programmer can customize. These are governed by the JS Event Emitter.

We often get confused because the Javascript code within Node *wraps* calls to the C++ side. So often times, when something occurs in libuv it gets wrapped in a JS event. The JS is essentially faking it. 
