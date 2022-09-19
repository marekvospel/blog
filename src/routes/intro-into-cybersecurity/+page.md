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
</script>

# Intro into cybersecurity
By now you have probably seen numerous news articles about someone hacking. Whether it is a white-hat hacker (someone who has permission to attack specific company) or a black-hat hacker (someone who doesn't have permission to attack specific company, but does it anyways, whether it is for malicious reasons or not) in this article you're going to learn what a software bug/vulnerability is, and how it could be exploited.

## What is a software bug?
By definition is a flaw in computer software, that causes it to produce an incorrect or unexpected result. If you've been using your computer for long enough, you probably have encountered a software bug already. It might have been something small (such as a button on a website not working correctly) or something big. (like an application causing your computer to crash)  
<br>
Let's look how a software bug might look like.

```c
float divide(a)
{
  return 100 / a;
}
```
If you've never seen any code before, this might look a little confusing, but don't you worry, I'll explain every part of it. *(Even though I'll explain the code, I highly suggest you to learn basics of **any** programming language or programming in general (algorithmization, pseudo code, scratch))*
<br>
The code you see is definition of a function in C programming language, if you were to run this code nothing would happen. Functions are pices of code that accepts parameters and returns results and can be reused from other files and/or from within the file where they are defined.
They work just like mathematical functions. (ie. the sin function, you pass it a parameter and it returns a value - `sin(90deg) = 1`)

<br>
The first line of this code is where the function is declared, `float` means the value the function returns is a real number (limited by how computers store data) `divide` is name of the function. `(a)` everything inside the brackets, the computer takes as declaration of a parameter, in this case there is just one parameter called a, which is a number (again an integer)
<br>
On the remaining 3 lines there is the code that is executed when we call the function bounded by two curly braces. In this case the code is really simple, we just divide 100 by parameter a that was declared on the first line, and we return the result.
<br>
<br>
Have you spotted the bug yet?
<br>
no? Let's write it as a mathematical function.

$f(x) = 100 / x$

<DivideChart />