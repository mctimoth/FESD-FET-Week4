FESD FET Week 4
Search Promineo Tech




1

L
2


Promineo Tech










nashua-2020-11-10-fesd





10


Unlock messages prior to January 14th in Promineo Tech
To view and search all the messages in your workspace’s history, rather than just the 10,000 most recent, upgrade to one of our paid plans.

Nick Suwyn  5:07 PM
Hey everyone, here is some info I shared with other students in the general channel. Wanted to share it here since it pertains to your project this week.
--------------------------------------
Think about what the classes will contain. For example, you need classes for Card, Deck, and Player. What are some properties (variables) a card would have? Suit and Value (the number) are the two properties that make up a card, so you need to structure the Card class with those two values.
Next, what does a Deck need? Well, a deck consists of multiple cards - so you'll want a property that is an array of cards. In the deck's constructor, you'll want to create 52 cards (whether that's 52 lines or using loops, that's up to you) and add to that array. You'll need methods to shuffle the deck (googling how to shuffle an array in JS would be helpful) and methods to draw a card (i.e. remove a card from the array and return it).
Once you've created your classes, you can uses them to write the logic of the game. Here's a pseudo-code look at what that logic may look like.
instantiate new Deck
shuffle deck
instantiate 2 new Players
loop over cards in deck
  deal one card to player1
  deal one card to player2
end loop
loop through 26
  card1 = player1.flip()
  card2 = player2.flip()
  if card1 value > card2 value
    increase player1 score
  else if card2 value > card1 value
    increase player2 score
  end if
end loop
if player1 score is greater than player2 score
  show message player 1 wins
else if player2 score is greater than player1 score
  show message player 2 wins
else
  show message draw
end if

Nick Suwyn  5:03 PM
@channel Jolene shared some wonderful feedback last week about how helpful it would be to have videos that discussed solutions to the coding challenges in the quizzes. Based on her feedback, I was able to put together videos for Introduction to JavaScript quizzes. Hopefully, you can find value in these!
https://youtube.com/playlist?list=PLW14srP-x6n5oERuaZFKnL5PpSgTMNe1k
YouTubeYouTube
JS Quiz Coding Problem Solutions
Share your videos with friends, family, and the world
:heart:
2


Brendan Lentz  9:53 AM
Hello Nashua Cohort, I just finished grading your final JS project. As a group you are doing great. I want to commend you all for putting in the time, showing up to office hours, classes and helping each other. Keep up the good work!
:the_horns:
2
:heart:
1
:white_check_mark:
2


Nick Suwyn  1:02 PM
Hey everyone, wanted to share something Kim sent over!
I hope you can join us! We are very lucky to have Julie present to our group, from the U.K.! I assure you, Julie is fabulous and you’ll enjoy this event. Feel free to share this with others (men are always welcome too).
Feb. 10th, 07:30am - EST
Register here:
 https://live.remo.co/e/techwomen-power-breakfast-kick-a/register
Kick-ass Confidence for Women
“You just need to be more confident.”
A phrase that every woman (and man) can agree with but few know how to do.
What does confidence look like? How do we “be more confident” in difficult and complex situations? Is it possible to exude confidence even when we’re nervous or uncertain?
The Kick-ass Confidence Workshop answers these questions and dozens more through stories, statistics, practical examples and laughter. Your confidence is your choice and this workshop will show you how to go from knocked down to standing tall in any situation.
Confidence is a combination of how you feel personally about your skills and value and is heavily influenced by how others see and react to you. Whether you are a student interviewing for university or a woman asking for a promotion at work, the goal is to feel that you are in control of your confidence and know how to present yourself effectively personally and professionally.
At the end of this workshop, attendees will:
Understanding their current confidence level
Know the three areas they can adjust to increase their confidence in any situation
The environment: location, preparation & stakes
Their physical presence: body, deportment & appearance
Their mental preparations: knowledge, experience/status & history
For each area, attendees will have specific actions they can take IMMEDIATELY to improve the way they feel and present themselves
:+1:
1
:heavy_check_mark:
1

1:02
While much of the focus for this workshop is around “professionalism”, the same concepts can be applied in any situation – from classroom conversations to university interviews; from job interviews to promotions. This is the workshop for girls and women who are ready to kick ass with confidence.
How attendees describe their experience and results:
Empowering
Inspiring
Practical
Entertaining
Life-changing
 About Julie Holmes:
Julie Holmes is a 20-year corporate veteran who had worked her way from entry level position to Director of Strategy at a global, enterprise software organization. In addition to her professional expertise, Julie holds Bachelor and Master’s degrees in Communication with a strong emphasis on nonverbal skills, presentation and organizational dynamics.
An award-winning speaker and tech strategist, Julie has guided tens of thousands of people in why, when, and how to leverage technology effectively. Her wicked smarts, extreme enthusiasm, and cheeky humor on (and off) stage spur audiences to not only sit up and listen but also to make notes, compare phones and take immediate action.
As the founder/co-founder of two innovation companies, Julie has designed and delivered tech products that are helping businesses grow their brands in over 35 countries.
Sure, she knows tons of cool apps and tech tools that make people and their organizations run faster, smarter, and better – heck, she’s even building a whole YouTube channel about that. But, she’s also keenly aware of how easy it is to get distracted by shiny new apps so that before you know it, you’re buried in icons for apps you don’t even recognize. Wouldn’t it be great to have just the tools that you need and use along with some clear guidelines to follow for new ones?
From entrepreneurs just getting started to executives of multinational corporations, there’s brilliant, innovative tech that can help you achieve your goals. You just have to master when to TECH IT OR LEAVE IT and Julie can show you how.

Mark Szymanski  9:27 AM
hi all, here are notes and reference to a demo repository for this week's topic:
# Topic
* Repository: https://github.com/markjszy/frontend-demos
* What is front-end tech?
    * "Front-end" as distinguished from "Back-end"
    * Simple model: User <--> Frontend (e.g. web browser) <--> Backend (e.g. web server) <--> Databases, other services
    * [More detailed view of "dynamic" web architecture](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview#anatomy_of_a_dynamic_request)
* HTML, CSS, JavaScript: these are the core front-end languages, each with its own concern
    * HTML: HyperText Markup Language...emphasis on markup; provides document structure
    * CSS: Cascading Style Sheets...emphasis on style
        * Quick history: styling before CSS; provides styling
    * JavaScript: provides dynamism to documents
* Intro to HTML
    * See [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
    * Let's look at a basic HTML page, then more specifically at the elements that it comprises
        * [Anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document)
        * [Anatomy of an HTML element](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_element)
* Text Elements
    * Paragraph <p>...</p>
    * Heading <h1>Big heading</h1>...<h6>Little heading</h6>
    * Other useful tags: b(old), i(talic), sup(erscript), sub(script)
    * Comments: <!-- this is a comment-->
* Anchors (links) and images
    * link and img tags allow us to reference other resources
        * Absolute v. relative paths
    * Links
        * href attribute
        * bonus: _target attribute
    * Images
        * Note ["empty elements"](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#empty_elements)
        * src attribute
        * alt attribute
    * [MDN on anchors](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
    * [MDN on images](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
* Lists
    * Ordered (<ol> v unordered <ul>)
    * Can be nested to any depth
    * [MDN on lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
* Tables
    * Essential tags: <table>, <tr>, <th>, <td>
    * Optional: <thead>, <tbody>
    * Other useful attributes: colspan, rowspan
    * [See MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
* Inline v block
    * Block: takes up entire width of parent
    * Inline: multiple can fit on same line
    * [MDN on inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
    * [MDN on block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
    * Important tags: div (block), span (inline)
* Linking JS to HTML
    * script tag
    * importance of script tag order
    * performance implications for script tag placement in document
* Forms
    * important tags: form, input
    * important attributes: type, name, value, placeholder
        * types: radio, text, submit
    * button element
    * [See MDN basic input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
    * Advanced: see label element ([MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label))
* Creating a basic website
    * making a basic menu
    * using height or width attributes on images for scaling
* Review: assignment skills
    * Discovering HTML elements
        * [Advanced: official spec](https://www.w3.org/TR/html52/index.html#contents)
        * [MDN list of Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
    * Using browser functionality to view page markup

Mark Szymanski  9:13 PM
hi all, here are notes and repository links for topic 2 from this week:
# Topic 2: Cascading Style Sheets (CSS)
* Repository demo: https://github.com/markjszy/frontend-demos/tree/main/topic2
* Intro
    * HTML is for structure and semantics; CSS is used for style (e.g. font, color, size) and layout
    * Critical concept: "selectors"; [Anatomy of a ruleset](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#anatomy_of_a_css_ruleset)
        * Basic selector types: universal (e.g. *), type (i.e., element name), class (e.g. .some-class), id (e.g. #someId), attribute (e.g. [attr=value])
    * Other core concepts (see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
        * Cascade: order of CSS rules matters
        * Specificity: governs which rule actually applies when multiple rules have selectors that match some single element
        * Inheritance: some CSS properties are inherited by child elements (e.g. color), and some are not (e.g. border, width, height)
    * Options for inclusion:
        * External file
        * Within a style element in the file
        * Within a style attribute on the element ("inline")
    * Incidental
        * Hex colors v. rgb
        * Comments in CSS: /* */
    * References
        * [MDN CSS main page](https://developer.mozilla.org/en-US/docs/Web/CSS)
* Basic Properties
    * Reading the specification of various style properties
    * Examples
        * Color
            * color, background-color
        * Border
            * border, border-style, border-width, border-color, border-radius
        * Height (height)
        * Text alignment (text-align)
* Float:
    * Places an element to left or right of its container, allowing text and inline elements to wrap around it
        * shifted to the left or right until it touches the edge of its containing box or another floating element
    * removes an element from the "normal flow" of the page, but remains as part of the flow
    * References
        * [MDN float doc](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
* Pseudo Classes: styling based on state
    * Indicate with colon : and then the state
    * Common states
        * hover
        * nth-child (available preset names examples: even, 3n)
* Table styling
    * Example rules
        * border-collapse
        * width
* Box model
    * Padding, border, margin
    * References
        * [CSS: all about boxes](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#css_all_about_boxes)
        * [Learning CSS box model overview](https://developer.mozilla.org/en-us/docs/Learn/CSS/Building_blocks/The_box_model)
* Assignment skills
    * Ways of including CSS in files
        * External files
        * style element in html
        * Inline
    * Selectors: class, id, element; more complex selectors that combine multiple classes, or target by HTML hierarchy
    * Research comments
        * Clearfix
            * Reference: see "clearfix" in https://developer.mozilla.org/en-US/docs/Web/CSS/clear
        * SaSS and LESS
            * See https://sass-lang.com/ and http://lesscss.org/ respectively
* Extras
    * Overflow -- ways of handling content that exceeds its container
        * See https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
:+1:
1


Nick Suwyn  3:18 PM
A message from Kim:
I was looking online for the correct name of the Liberty Mutual Tech internship program and I noticed that they have opened their applications for the 2021 program.
Would you please share the following with the first Cohorts of Back End and Front End? https://jobs.libertymutualgroup.com/job/11862880/2021-techstart-summer-internship-program-portsmouth-nh/
Liberty Mutual CareersLiberty Mutual Careers
2021 - TechStart Summer Internship Program in Portsmouth, NH | Liberty Mutual Insurance
Find 2021 - TechStart Summer Internship Program jobs in at Liberty Mutual. (170 kB)
https://cdn-static.findly.com/wp-content/uploads/sites/748/2019/03/LM_1200x630.jpg
:+1:
1
:heart:
1


Tim Gibney  12:30 PM
Hi Cohort.  For our Week 6 Front End Technology Final Project we will need to modularize some of the code we make.    We will work as a Software Development Team to produce a finished product.  This means that each of us will have a specific task to complete.  That task will be an integral part of making the whole project complete.  Of course there will be a generic web layout/framework that we can all agree upon but when each of us go to create our individual development it will have to fit in that generic framework.  There will be some up-front design and commitment we will each have to put into this to make an intelligent and coherent piece of software.
We still have more than two weeks before this is due.  That should give everyone time to learn some of the git commands and development methodologies that will be required in order for us to all work as a team.   There are many web sites that speak to development among small groups integrated using git.  I have found the following to help and be informative, in no specific order:
https://medium.com/anne-kerrs-blog/using-git-and-github-for-team-collaboration-e761e7c00281
https://nvie.com/posts/a-successful-git-branching-model/
https://guides.github.com/introduction/flow/
I realize that is a lot of information.  But if you can all give it a look-over, I think it is a good place to start.  After that, a meeting with @Brendan Lentz, @Mark Szymanski, @Frank Stepanski, @Erica Pramer, and/or @Nick Suwyn should help us all at least get a foothold on how this is going to happen.  Understanding how this scenario is instantiated and proceeds will give invaluable understanding into how software development happens in the wild.
Please, I am open to any and all input.  If anyone has done this before then you can lend a hand in directing or even lead us.  This is a group effort and our grade will be directly affected by each of our input.
Let me be the first to wish everyone the best of luck in seeing this through.  TIA.
Oh, and by the way, Chevelle helped this happen! (edited) 

MediumMedium
Using Git and GitHub for Team Collaboration
This article covers using Git and GitHub to collaborate with others on a project, especially if you have to set it up yourself. Git and…
Reading time
13 min read
Jun 6th, 2019

nvie.com
A successful Git branching model
In this post I present a Git branching strategy for developing and releasing software as I’ve used it in many of my projects, and which has turned out to be very successful. (125 kB)
http://nvie.com/img/git-model@2x.png

Frank Stepanski  12:30 PM
was added to #nashua-2020-11-10-fesd by Tim Gibney.

Brittaini  1:27 PM
This is great Tim!! Thank you so much for looking ahead and giving us a heads up plus all these resources:blush:
:smile:
1


Frank Stepanski  1:30 PM
@Tim Gibney Hi, thanks for inviting me to the party! :partying_face:  :mario_luigi_dance: :party_parrot:
In looking over your Week 6 assignment, it seems like a fun group project. You could create an organization on github, then “invite” all the members that will work on it. Inside the org, you can create your repo(s), which you should only need one. If you wanted you also could create another repo for design docs or other asset files (wireframes, etc.).
Just an idea :grin:
:fire:
1
:wave:
1


Tim Gibney  1:32 PM
Exactly what I was looking for Frank.  Do you have any  links to backup those suggestions?

Tim Gibney  1:43 PM
As I set up  NashuaFESDFET on github, the github account names for all cohort students will be required so everyone can participate.  For the time being I am using my personal github account for admin purposes but that can be changed to something Promineo or Nashua CC based later on.  Please let me know who you are.  Please understand that in doing so, your github account names will be known to the general public of this cohort.

Heather Staples  1:57 PM
Thanks for looking further into this and for all of your research!  My git name is aytch4.

Frank Stepanski  2:02 PM
@Tim Gibney Yes, someone would be the initial admin of the org (but others can be too) then you invite others by their github user name. You can make the org private or public. If you look on the github docs you will find info on creating a github org, if that’s what you decide to do.
Github organizations are also used by Teams which is a way of grouping lots of people at once, but that is way overkill for what you need. But there are really big projects on Github that need that as well as companies that use that for their internal projects as well.
Inside an organization, you can also create a Project which is a way of tracking each task/issue for each project that is being worked on in the various repos inside the organization. Again, this would probably be overkill for your week 6 assignment, but good to know for the future. :grin:
I am creating an org for my own project to be used in another school/course, and setup 3 repos just for me. I also created a Project for my initial tasks to be done. But it’s just for me only.
Here’s how mine looks as an example:
4 files 
Screenshot 2021-02-03 at 1.46.40 PM.png


Screenshot 2021-02-03 at 1.58.55 PM.png


Screenshot 2021-02-03 at 1.59.05 PM.png


Screenshot 2021-02-03 at 2.00.44 PM.png



Tim Gibney  2:02 PM
I have created the github team NashuaFESDFET/NashuaFESD.  As your github account names are added to that team you should receive an invite. Please accept at your earliest convenience. (edited) 

Tim Gibney  2:55 PM
As I add you folks to the NashuaFESDFET/NashuaFESD team I am making you owners of the organization too. (edited) 

Beth Scaer  4:36 PM
@Tim GibneyMy GitHub is @bscaer.

Tim Gibney  4:51 PM
And just so everyone knows, my github is mctimoth.

Jolene  4:58 PM
Mine is JoleneMel

Sybil Robertson  8:50 AM
@Tim Gibney Here is mine: Srobertson81

Brittaini  9:35 AM
@Tim Gibney mine is BGibbemeyer

Brittaini  9:50 AM
Thanks for the quick invite Tim! What is your profile pic? I think it's a spider but what kind? lol

Tim Gibney  9:51 AM
It is a spider.  Not sure the kind.  Just came across its pic on the web and thought it was beautiful.  It is in my desktop background rotation.

Tim Gibney  11:33 AM
OK.  Thanks Cohort, everyone's associated with the repo/team.   I trust everyone has been able to see the repo?

Mark Szymanski  10:07 AM
Hi all, just a reminder that the frontend repo is here, with the topic 3 example: https://github.com/markjszy/frontend-demos
Also, an outline for the week is attached. I'll start sending as attachments instead of posting all the content into the chat. The .md file is Markdown, which you can read in whatever viewer you prefer, including VS Code.
frontend-tech-3.md 
# Topic 3: Web Servers, Bootstrap
​
* Web Servers
    * What is a web server?
        * HTTP requests and responses
Click to expand inline (33 lines)



Brittaini  10:11 AM
I haven't gone into our group repo yet, but I will soon. Thanks so much for setting it up Tim!! And that spider is really cool! Do you like spiders in general or did the pic just call to you? Lol I have a feat of spiders but I'm getting better about it

Beth Scaer  10:01 PM
Should we create a new slack channel for our final project, separate from this one?

Tim Gibney  9:59 AM
I am not averse to that @Beth Scaer.
:white_check_mark:
1


Beth Scaer  10:36 AM
The new channel for the final project is nashua-final-project-fesd-fall-2020-cohort. It is by invitation only.

Brendan Lentz  5:57 PM
Nashua cohort - I start the grading each week with your cohort and I just want to say it's a pleasure to grade your submissions. Excellent work. Keep it up.
:white_check_mark:
1
:thank-you:
1
:pray:
1
:clap:
1


Brittaini  8:23 PM
wow thanks Brendan!! That's such a compliment!
:+1:
1


Brendan Lentz  2:05 PM
Hey Nashua Cohort - here is a message from Kim:
I found a nightly Meetup that some participants might find interesting
https://www.meetup.com/Granite-State-NH-dotNET/events/bzdcfsyccdblb/
Kim wants to connect with you on Linked In - reach out to her and connect if you haven't already: https://www.linkedin.com/in/kimberly-eckenrode-73896285/ (edited) 
:white_check_mark:
1


Mark Szymanski  3:24 PM
Hi all, attached are notes/outline from topic 4. The repository has been updated with examples, including an additional demo app in more of an OO-style akin to what you see in the "Teams" app in the videos. It demonstrates using classes and components, where we have a clearer separation between state and rendering, and where components are responsible for drawing themselves and managing events. This starts to get us towards the React way of thinking about app design. Hope these prove useful! (edited) 
topic-4-notes.md 
# Topic 4: Document Object Model (DOM) and JavaScript
​
* Introduction to the DOM
    * Concept
        * Provides the programming interface for HTML documents
        * Manipulable, in-memory representation of HTML document, organized as a tree structure
            * By "manipulable" we specifically mean that we can connect to and modify it with JavaScript
        * Browsers differ in DOM implementation and degree of standards conformance, but they all make web pages accessible to JS with the DOM
        * Fundamental DOM data types (we'll deal with the first four most often) ([see reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#important_data_types)):
            * Document: root of the DOM tree; represents any web page loaded in the browser
            * Node: *abstract* base class for many DOM objects, including Document and Element
            * Element: general  base class for all element objects, such as HTMLElement
            * NodeList: array-like list of nodes; note distinction between *static* and *live* NodeLists
            * Attribute: object representing element attributes (Attr)
            * NamedNodeMap: collection of Attr objects; always *live*
    * Practical skills
        * Navigating the DOM in dev tools
        * Reading documentation and applying the information
            * https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
            * https://developer.mozilla.org/en-US/docs/Web/API/Document
            * https://developer.mozilla.org/en-US/docs/Web/API/Element
            * https://developer.mozilla.org/en-US/docs/Web/API/NodeList
        * Basic methods to get node references 
            * `document.getElementById`
            * `document.getElementsByTagName`
            * `document.getElementsByClassName`
            * `document.querySelectorAll`
        * Retrieving, manipulating & adding content
            * Simple example: using `Element.innerHTML` (see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
            * Adding more complex elements: process is basically to create your object, then insert it into the right place in the DOM
                * `document.createElement` and `Node.appendChild`; `Node.removeChild`; `Node.firstChild`
                * `HTMLInputElement.value` (see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
                * Tables: `HTMLTableElement.insertRow`, `HTMLTableRowElement.insertCell`
                    * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
                    * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement
        * Events and event listeners
            * Good intro: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
            * Events as signals that your code can "listen" for and respond to
            * Core concepts for event objects
                * "Bubbling" and capture
                    * Capturing phase: outermost ancestor to innermost
                    * Bubbling phase: innermost to outermost (this is what you'll encounter when registering events with modern browsers)
                        * Strategic advantage: "event delegation"
            * Adding and removing listeners: `addEventListener`, `removeEventListener`
