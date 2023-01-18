---
title: What is HTTP? How does a basic webpage work?
description: Learn how a basic website can be created and how is it possible for a website to load on your computer.
author:
  name: Marek Vospěl
  link: https://github.com/marekvospel
tags:
- web
- development
- software
- technology

created: 2023-01-18 10:30:00
updated: 2023-01-18 10:30:00
---
# What is HTTP? How does a basic webpage work?
Thanks to the internet, opening and using a website is really easy, you just open your web browser and with a search
tool like DuckDuckGo, StartPage or even a paid one like Kagi search you can even search the millions of websites there
are out there.  
But have you ever wondered how these websites are made?

## How does a web browser show a website?
The first part of the magic of websites is the web browser, the application on your computer, that can open the
webpages. But how does it know what text to show and where, obviously all websites cannot be stored inside the web
browser in my computer?

That's where HTML (Hypertext markup language) comes into play. Opposed to other computer languages, HTML behaves
differently, it doesn't get executed, but it gets rendered by a web browser. Its syntax is really easy, all text, that
is inside the HTML gets shown on the website, unless it's a tag, which marks the content inside has different formatting.  
An example of a tag is `strong`, which means the text inside will be **bold**.
```html
An example of a tag is strong, which means the text inside will be <strong>bold</strong>
```
It's important not to forget the tags need to be closed, that can be done by adding a closing tag - the same tag as
the opening tag, but the name starting with /.

Some tags can even have some attributes, that define how they behave, for example you can add an anchor (link) and by
using the `href` attribute, you can tell it what should be opened when you click it. You can also define whether the
link is opened in current or in new tab using the `target` attribute.
```html
<!-- This opens vospel.cz in current tab when clicked -->
<a href="https://vospel.cz">open vospel.cz</a>
<!-- This opens the website in a new tab-->
<a href="https://vospel.cz" target="_blank">open vospel.cz</a>
```
As you probably noticed in the anchor example, you can also add comments by wrapping them inside `<!--` and `-->`.
