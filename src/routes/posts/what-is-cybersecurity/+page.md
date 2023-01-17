---
title: What is a software bug, vulnerability and cybersecurity?
description: What is cybersecurity, what is a software bug, how can an application be vulnerable and how can anyone exploit it?
author:
  name: Marek Vospěl
  link: https://github.com/marekvospel
created: 2022-09-19 23:00:00
updated: 2023-01-17 19:25:00
---

<script>
import DivideChart from './components/DivideChart.svelte'
import DivideExample from './components/DivideExample.svelte'
import SendMoneyExample from './components/SendMoneyExample.svelte'
</script>

# What is a software bug, vulnerability and cybersecurity?
By now you have probably seen numerous news articles about hackers. In this article you're going to learn basic terms in the world of hackers such as what a software bug/vulnerability is and how it could be exploited.

## What is a software bug?
By definition software bug is a flaw in computer software, which causes it to produce an incorrect or unexpected result. During the time you have been using a computer or a mobile phone, you have probably encountered a software bug already. It might have been something small (such as a button on a website not working correctly) or something big. (like an application causing your computer to crash)
<br>

Let's look at how a software bug might look like.

```c
float divide(a)
{
  return 100 / a;
}
```
If you have never seen any code before, this might look a little confusing, but don't you worry, I will explain every part of it. *(Even though I will explain the code, I highly recommend you to learn basics of **any** programming language or programming in general (algorithmization, pseudo code, scratch))*  
The code you see is definition of a function in C programming language, if you were to run this code nothing would happen. Functions are pieces of code which accept parameters and returns results and can be reused from other files and/or from within the file where they are defined.
They work just like mathematical functions. (ie. the sin function, you pass it a parameter, and it returns a value - `sin(90deg) = 1`)  
<br />

The first line of this code is where the function is declared, `float` means the value the function returns is a real number (limited by how computers store data) `divide` is the name of the function. `(a)` everything inside the brackets, the computer takes as declaration of a parameter, in this case there is just one parameter called a, which is a number (again an integer)  
<br />

On the remaining 3 lines there is the code that is executed when we call the function bounded by two curly braces. In this case the code is really simple, we just divide 100 by parameter a that was declared on the first line, and we return the result.  
<br />
<br />

Have you spotted the bug yet?  
no? Let's write it as a mathematical function. And look at it's chart.  
<br />

`f(x) = 100 / x`
<br />
<br />

<DivideChart />

The function is invalid for `x=0`, because we can't divide anything by 0 - `100/0`. But what happens if we try to call the function on our computer? It can't decide to not run our function.  
What happens depends on the programming language you're programming the app in. In the example I've shown before our app would crash with the following error.
```
[1]    30041 floating point exception (core dumped)  ./a.out
```
In other programming languages this code might behave differently (see for yourself in this interactive example written in javascript)  
<br />

<DivideExample />  

As you can see, if you put `0` into the input, the divided value is set to `Infinity`. Each language handles division by 0 differently, so using this code in have unexpected behaviour depending on what language you run this in.

## What is a software vulnerability?
So you have seen a software bug, but such a bug is essentially useless, as it can cause the app to crash or work with strange numbers such as `Infinity` in javascript.  
Software vulnerability is a bug, that can be exploited to do unauthorized actions.  
<br />

Let's look at another example, this time in javascript.

```javascript
let myBalance = 100
let bobsBalance = 100

function sendMoneyToBob(amount) {
  myBalance = myBalance - amount
  bobsBalance = bobsBalance + amount
}
```
In this example we again see definition of a function, this time called `sendMoneyToBob` and outside we see two variables, `myBalance` and `bobsBalance`. Variables are some values in memory that can be programmatically updated. In our example we update it when `sendMoneyToBob` function is called, we subtract the `amount` from `myBalance` and add it to `bobsBalance`.  
<br />

This example has a bug that could be exploited. Can you see it?  
<br />

What if we try to send negative amount? There is no code that would check whether amount is bigger than 0.  
Let's try using -100 as an amount, and replace the variables with their values and simplify the equations

```javascript
function sendMoneyToBob(amount) {
  myBalance = 100 - -100
  bobsBalance = 100 + -100
}
// which gets simplified to
function sendMoneyToBob(amount) {
  myBalance = 100 + 100
  bobsBalance = 100 - 100
}
```
So result of this call would be that my balance would double, and Bob's balance would be drained to 0. Also notice how anything after `//` gets grayed out, and is not taken as code, that's called a comment and is often used to describe how a function (etc.) works.  
You can try this using the example below.  
<SendMoneyExample />  
Of course this won't happen in any modern banking system, as internet banking transactions are much, much more complex, but you might encounter this in a poorly written game or some modification.  

## Summary
When programming an application it's basically impossible not to encounter something that could cause unexpected results (bugs - such as division by 0). In some cases those bugs can be exploited in some way. (such as in our second example, where we can take money from Bob's account without him knowing) Cybersecurity can often be about finding those bugs and thinking of a way to exploit them.
