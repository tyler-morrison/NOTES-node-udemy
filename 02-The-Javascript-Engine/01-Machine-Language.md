# Processors, Machine Language, and C++

At the core of NodeJS is the *V8 Javascript Engine*. However, to better understand the core fundamentals of NodeJs, we ought to also have a base knowledge of processors, machine language, and C++.

*Microprocessors* are at the heart of every computer. These tiny machines all perform similar functions; however, not all mircoprocessors are the same language.

Instructions can be written in a variety of languages...
* IA-32
* x86-64
* ARM
* MIPS

**Machine Code (Language)** = Programming languages spoken by computer processors. *Every* program you run on your computer has been converted (compiled) into machine code at some point in the process.

As modern programming as advanced, more and more levels of abstraction have been created to limit the need to write machine code.

## Levels of abstraction

1. Machine Language
2. Assembly Language
3. C/C++
4. Javascript

Because we, as Javascript developers, sit so far away from machine language, it is easy to develop incorrect mental models about how processes within NodeJS are working.

## Misconception About Node

**Node is written in C++.** Although the end-user writes in Javascript, Node itself is written in C++. Node is written in C++ because the Javascript V8 engine is also written in C++.
