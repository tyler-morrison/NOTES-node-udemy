# Adding Features to Javascript

Although V8 can be implemented as a standalone engine, the documentation tells us that it can also be *embedded into any C++ application*. There’s actually an entire [Embedder’s Guide](http://developers.google.com/v8/embed).

V8 also has hooks for Javascript code. Thus, when you embed V8 in your own C++, these hooks can essentially be used to **add** features to Javascript—above and beyond the ECMAscript standard.

Recall that Javascript was initially designed for browsers. Thus, it’s missing a whole host of features that are encapsulated in C++ — reading / writing to databases, loading files, etc.
