# Asychronous vs Synchronous Events

**Asynchronous** = More than one process is running simultaneously. Node can perform asychronous actions; however, the V8 engine does not.

**Synchronous** = One process executing at a time. “Asynchronous Javascript” is really a misnomer. While V8 is executing code sychronously, Node can allow other actions to be performed.

**Callback** = A function passed to some other function, which we assume will be invoked at some point.

# Libuv

Recall that many processes within Node have two separate components...
1. *System Events* – Managed by the C++ core and libuv.
2. *Custom Events* – Managed by the Javascript V8 engine and its Event Emitter.

## Example Process
Libuv has its own queue of *completed events*. If it executes an event – for example, requesting a file from the OS – the libuv Event Loop checks the queue to see if the operation as completed. During this time, the V8 engine is running simultaneously. Once the libuv Event Loot registers the operation is completed, it executes a *callback* to the V8 engine, which often executes Javascript code in response.

It’s important to remember that V8 code will always wait to run the callback code until it finishes other processes. Thus, the two systems can work independently in an asychronous manner, despite V8’s sychronous design. Often this is referred to as **Event Driven Non-Blocking I/O in V8 Javascript**.

**Non-Blocking** = Doing other things without stopping your programming from running.

# Streams & Buffers

**Buffer** = A temporary holding spot for data being moved from one place to another. *Intentionally limited in size.*

**Stream** = A sequence of data made available over time. Pieces of data that eventually combine into a whole.

# Binary Data, Character Sets, & Encoding

**Binary Data** = Data stored in sets of 1s and 0s. Each one or zero is stored as a bit.

**Character Set** = A representation of characters as numbers – unicode, ASCII, etc.

**Character Encoding** = How characters are stored in binary. Fundamentally, it boils down to how many bits we are going to use to represent each number – in the case of UTF-8, we are using 8 digits that can represent up to international languages.

The above definitions are important because, when dealing with a server, you must be able to easily deal with binary data. Historically, Javascript has not been very good at this; however, Node expands the capabilities of V8 to allow us to deal with this data.
