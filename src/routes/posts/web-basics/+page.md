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
thumbnail: web-basics.webp
created: 2023-01-22 00:30:00
updated: 2023-01-22 00:30:00
---
# What is HTTP? How does a basic webpage work?
Thanks to the internet, opening and using a website is really easy, you just open your web browser and with a search
tool like Google, DuckDuckGo, StartPage or even a paid one like Kagi search you can even search the millions of websites there
are out there. But have you ever wondered how these websites are made?

## How does a web browser show a website?
The first part of the magic of websites is the web browser, the application on your computer, that can open the
webpages. But how does it know what text to show? (Obviously the web browser on your computer can't know all the
websites out there)

That's where HTML (Hypertext markup language) comes into play. Compared to other computer languages, HTML behaves
differently, it doesn't get executed, but it gets rendered by a web browser. Its syntax is really easy, all text, that
is inside the file gets shown on the website, unless it's a tag, which marks the content inside has different formatting.  
An example of a tag is `strong`, which means the text inside will be **bold**.
```html
An example of a tag is strong, which means the text inside will be <strong>bold</strong>
```
It's important not to forget the tags need to be closed, that can be done by adding a closing tag - the same tag as
the opening one, but the name starting with /.

Some tags can even have attributes, that define how they behave. For example, you can add an anchor (link) and by
using the `href` attribute, you can tell it what should be opened when you click it. You can also define whether the
link is opened in current or in new tab using the `target` attribute.
```html
<!-- This opens vospel.cz in current tab when clicked -->
<a href="https://vospel.cz">open vospel.cz</a>
<!-- This opens the website in a new tab -->
<a href="https://vospel.cz" target="_blank">open vospel.cz</a>
```
As you probably noticed in the anchor example, you can also add comments by wrapping them inside `<!--` and `-->`.

## Styling the website
Now that you know how HTML works, you are probably wondering if you can only define how text is displayed on the
website, how can I make my website look modern and not like [Richard Stallman's website](https://stallman.org).

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

Now you know all the ways to make text look different, but yet how to actually position the content differently is still
a mystery. It's obvious, that there are css rules to position text in the center, add a background, padding, margin etc.
but there is only so many HTML elements, after just a few rules you've run out of options to define styles. That's where
classes come into play.  
By adding a `class` attribute to an element, you can suddenly use the class as a selector by prepending it with a `.`.
Classes cannot have spaces inside them, because `class` attribute is a space separated list, so adding a space would
make it two classes.
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

## How does the web browser communicate?
Now you have a website, but it's just a bunch of files, how to share it on the internet? How is it possible that
even-though I don't have the files of github.com, the website still loads when I open it?

It's all thanks to the internet. (obviously) For a website to be accessible from anywhere, it needs to be uploaded on
a web server. When you enter an url into the search bar, your web server opens a connection to the server it is uploaded
on, waits for the response and then renders the HTML. In case there are links to CSS (or other files like images), it
also loads them.

Of course the browser and the web server must use some known format of the requests and responses, because otherwise
they wouldn't know what means what, web server what file it should send and the browser what is the content it should
use and what is just status information. For that the HTTP protocol is used.

## HTTP
There are many ways to communicate over the internet, you can have a continuous connection, where the services can talk
to each other whenever they can during the connection is open, or you can have request-response protocol, that just
forms a connection, responds and disconnects. The connection could be checking whether any data was lost during the
transmission or it could ignore lost data. HTTP defines what sort of connection should be made and how requests / 
responses look.

But HTTP isn't the only protocol there is, there are hundreds of protocols, that define what sort of connection is
formed and what it's format is. The reason why HTTP is explained is that it's the protocol used by web browsers for
loading websites.

So what does HTTP connection look like? HTTP is a request-response protocol, so for every interaction, a new connection
is made (for example the HTML is loaded with one request, it's CSS is loaded right after in another request) (there are
exceptions like [HTTP polling](https://stackoverflow.com/questions/12555043/my-understanding-of-http-polling-long-polling-http-streaming-and-websockets))  
Excluding the information required for the data to get to the right place over the internet, the protocol is using
text for everything. Let's go over the different parts of the following example request.

```http request
GET /index.html HTTP/1.0
Host: vospel.cz
Accept: */*
User-Agent: Mozilla/5.0 (Linux)

```

On the first line there are 3 pieces of information. First, GET, the method of this request. For loading files it's
always going to be GET, which basically means you want to GET some data, whether it is a post content, HTML, CSS or
anything else. The second most used method is POST, which is used to send data to the website - even logging in. There
are also methods like DELETE, PUT, PATCH or OPTIONS, which are used less. (usually in RESTFUL APIs)

The second information is `/index.html`, that's the path of the request, that's what tells the web server what exactly
you want to do, which file you want to download (`index.css`) or what type of data you are posting.

The last thing you can see is what HTTP version is used. That's because it would be stupid to create whole new protocol
when we need to do a small change, so the web protocols are versioned. Today you're mostly going to see HTTP 2,
(`HTTP/2`) but `HTTP/3` also started appearing.

Second trough fourth line are so-called Headers, they give the web-server additional information about the request, for
example thanks to the Host header the web server can serve multiple pages and determine which should be sent based on
this header. Accept might be used to tell the server what sort of data we expect it to return, in .html file it could be
`text/html`. In the `User-Agent` field the browser version is sent, for compatibility.

Notice how the request ends with an empty line. It's there to tell the headers ended and the following content are the
data we are sending (in case of GET request, the data is skipped)

Let's look at the response.

```http request
HTTP/2 200
server: nginx/1.18.0 (Ubuntu)
content-type: text/html
content-length: 18

<p>Hello world</p>
```

Now the response is very similar, first we can see the HTTP version. (`HTTP/2`) The second information is the status
code. (`200`) Based on this number you can tell whether the request was successful or not, whether it is your or the
server's fault it was not successful, because they are all predefined. All you need to know is that 2xx means success,
3xx means redirect, 4xx means failure caused by you and 5xx means failure caused by the server.

Just like with the request, the server can send some information about the response, in this example you can see the
web server service, and it's version, the type of the returned data (`text/html`) and the length of the data, which is
used to determine whether the data arrived correctly or corrupted.

The last line is the actual html file we requested. Again there is one empty line before it to split it from the
headers.

## Summary
Making a website is as easy as opening a new text file and writing the website's content. That is thanks to HTML
(Hypertext Markup Language) which the browsers can read and render the text from it in the correct positions thanks 
to CSS. (Cascading Style Sheets) These files can be shared over the internet thanks to the HTTP protocol. (Hypertext
Transfer Protocol)
