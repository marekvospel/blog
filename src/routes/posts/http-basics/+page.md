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

## Styling the website
Now that you know how HTML works, you are probably wondering if I can only define how text is displayed on the website,
how can I make my website look modern and not like [Richard Stallman's website](https://stallman.org).

To add some styles to your website, you're going to need to learn another language, CSS (Cascading Style Sheets). By
adding a `<link>` with `rel="stylesheet"` and `href="<path to .css file>"` attributes, the browser is going to try to
load the css file and render the website based on the rules inside.  
Inside a css file you can attach specific styling rules to a selector.

### CSS Syntax
Opposed to HTML, any text isn't a valid css, css requires its contents to be in a specific syntax.

To add your first style rule, you're first going to need to write a selector it applies to. That's the tagName of the
element you defined in HTML. So for example `p` would be a valid selector selecting all paragraphs (`<p>Hello</p>`)
then you add braces and inside them, you can add `;` separated list of styling rules, which are a key-value rule split by
a colon. There is an extensively long list of rules, which is out of scope of this article, but I'm going to show few
of them in the example.
```css
/* This makes all paragraphs red */
p {
  color: red;
}

/* This disables the underline under links */
a {
  text-decoration: none;
}

/* This i going to make the biggest heading bold */
h1 {
  font-weight: bold;
}
```

You know all the ways to make text look different, but yet how to actually position the content differently is still a
mystery. It's obvious, that there are css rules to position text in the center, add a background, padding, margin etc.
but there is only so many HTML elements, after just a few rules you've run out of options to define styles. That's where
classes come into play.  
By adding a `class` attribute to an element, you can suddenly use the class as a selector by prepending it with a `.`.
Classes cannot have spaces inside them, as `class` attribute is a space separated list, so adding a space would make it
two classes.
```css
/* <p class="should-be-red should-be-bold">red text</p> */
.should-be-red {
  color: red;
}
.should-be-bold {
  font-weight: bold;
}
```

You can also combine multiple selectors using combinators, so a rule is applied for example to all paragraphs inside a
div with a specific class. Divs are used extensively during web development.
```css
/* All child paragraphs inside an element with class article */
.article p {
  color: red
}
/* A paragraph that also has my-paragraph class */
p.my-paragraph {
  color: blue
}
```


