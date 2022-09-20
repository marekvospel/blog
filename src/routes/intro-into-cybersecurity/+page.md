---
title: Intro into cybersecurity
description: What is cybersecurity, what is a software bug, how can an application be vulnerable and how can anyone exploit it?
author:
  name: Marek Vospěl
  link: https://github.com/marekvospel
created: 2022-19-09
updated: 2022-19-09
---

<script>
import DivideChart from './components/DivideChart.svelte'
import DivideExample from './components/DivideExample.svelte'
</script>

# Intro into cybersecurity
By now you have probably seen numerous news articles about someone hacking. Whether it is a white-hat hacker (someone who has permission to attack specific company) or a black-hat hacker (someone who doesn't have permission to attack specific company, but does it anyways, whether it is for malicious reasons or not) in this article you're going to learn what a software bug/vulnerability is, and how it could be exploited.

## What is a software bug?
By definition is a flaw in computer software, that causes it to produce an incorrect or unexpected result. If you've been using your computer for long enough, you probably have encountered a software bug already. It might have been something small (such as a button on a website not working correctly) or something big. (like an application causing your computer to crash)  
&nbsp;   
Let's look how a software bug might look like.

```c
float divide(a)
{
  return 100 / a;
}
```
If you've never seen any code before, this might look a little confusing, but don't you worry, I'll explain every part of it. *(Even though I'll explain the code, I highly suggest you to learn basics of **any** programming language or programming in general (algorithmization, pseudo code, scratch))*  
The code you see is definition of a function in C programming language, if you were to run this code nothing would happen. Functions are pices of code that accepts parameters and returns results and can be reused from other files and/or from within the file where they are defined.
They work just like mathematical functions. (ie. the sin function, you pass it a parameter and it returns a value - `sin(90deg) = 1`)  
&nbsp;  
The first line of this code is where the function is declared, `float` means the value the function returns is a real number (limited by how computers store data) `divide` is name of the function. `(a)` everything inside the brackets, the computer takes as declaration of a parameter, in this case there is just one parameter called a, which is a number (again an integer)  
&nbsp;  
On the remaining 3 lines there is the code that is executed when we call the function bounded by two curly braces. In this case the code is really simple, we just divide 100 by parameter a that was declared on the first line, and we return the result.  
&nbsp;  
&nbsp;  
Have you spotted the bug yet?  
no? Let's write it as a mathematical function. And look at it's chart.  
&nbsp;  
$f(x) = 100 / x$
&nbsp;  
&nbsp;  
<DivideChart />

The function is invalid for $x=0$, because we can't divide anything by 0 - $100/0$. But what happens if we try to call the funcion on our computer? It can't decide not to run our function.  
What happens depends on the programming language you're programming the app in. In the example I've shown before our app would crash with the following error.
```
[1]    30041 floating point exception (core dumped)  ./a.out
```
In other programming languages this code might behave differently (see for yourself in this interactive example written in javascript)  
&nbsp;  
<DivideExample />  

As you can see, if you put `0` into the input, the divided value is set to `Infinity`. Each language handles division by 0 differently, so using this code in have unexpected behaviour depending on what language you run this in.


## What is a software vulnerability?
So you have seen a software bug, but such a bug is essentialy useless, as it can cause the app to crash or work with strange numbers such as `Infinity` in javascript.  
Software vulnerability is a bug, that can be exploited to do unauthorized actions.  
&nbsp;  
Let's look at another example, this time in javascript.
```javascript
let myBalance = 100
let bobsBalance = 100

function sendMoneyToBob(amount) {
  myBalance = myBalance - amount
  bobsBalance = bobsBalance + amount
}
```
In this example we again see definition of a function, this time called `sendMoneyToBob` and outside we see two variables, `myBalance` and `bobsBalance`. Variables are some values in memory that can be programmaticaly updated. In our example we update it when `sendMoneyToBob` function is called, we subtract the `amount` from `myBalance` and add it to `bobsBalance`.  
&nbsp;
This example has a bug that could be exploited. Can you see it?  


