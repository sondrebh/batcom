# SBH devLog

---

I'm calling my site: batcom, sounded cool, it's an ecommerce site for selling computer parts

## 15. July 2019

Made a simple project folder structure, prep and dev, prep for preparation files, like the design concept and dev for the development folder.

## Update 15. July 2019 21:32

Created the design concept in Adobe XD, this doesn't mean the design is set in stone, but now I do have something to base off of.

Currently thinking about creating a simple single index.html file, using JS to control state of the site, which makes it load faster and become more user friendly, just like a very simple SAP site.

## Update 17. July 2019 22:01

JS "framework" is done, I decided to go with requirejs for simple loading of my js files and jQuery for DOM manipulation.

I stumbled upon some conflicts merging my staging branch with the remote, but managed to fix it so Master should now be up to date.

My "framework" is just a really simple version of a typical SPA lib. I made it since I like the motto "the page you only have to load once", and making websites more "application" like.

Next from now on is formatting the site, setting up sass and creating the site. 

My goal is to make loading efficient at the start, so will probably make something like this: 

at page request, only load whats necessary to display this: 

https://gyazo.com/7093c7e3e04e8079afdd2080f4a11325

and then load everything else and display the full site.

In my opinion this makes the site look way more "clean" and nice and simple :p

## Update 24. July 2019 01:11

A lot of changes has been made. I've made the general layout and functionality of the page. All though the functionality / stuff you can do on the site is only meant to be for

demonstrational purposes. I have worked 8 hours a day on the side while doing this project, so there is a lot of stuff I've kept out, like for an example:

- Animations
- Home page, better code, better layout/design
- The productdetails page was rushed, so I could do that better on the layout part
- More details, everything is just super simple, all though I like things simple -
I think there should be more details on the page, like: way more product info,
more info about the site, see my design concept for what I had in mind when I started on this project.
- More categories
- And more

What's left: Make the site responsive, optimize, use whatever time I have left to maybe add some more features, animations etc

Again, as I stated above, there is so much more I could do to this site, but I've just done what's necessary to meet the requirements + some extra in the code,
since I got carried away with the JS and had too much fun playing with objects and classes.

## Update 25. July 2019 17:04

I don't have much time left, but doing this dev exercise has taught me a lot. I've noticed areas where I want to improve, such as using css grids more frequently, almost eliminates the need for media queries if used properly, I just barely used them in this project, and if I had gone back in time I would use them way more than I did.

I felt like I rushed the layout of the site due to the time I had at my disposal (working 8 hours a day on the side), so CSS and HTML became too messy and rushed. Next time I will consider re-usability of components and use grids for almost everything.

## Summary

I'm starting to realise that the exercise said "make a product page", and I thought for some reason that you meant the browsing page, where you can sort products etc,
so I focused more on that page, but I also included a product page.

I tried to make the page more dynamic, loading products from an array mimicking a database. 

Problems I faced during this project:

- Git, I made some branches for testing purposes and managed to mess everything up when merging for some reason
- Several smaller problems that aren't worth mentioning

What was new:

- Never used requireJS before
- Never used SASS before

Takeaways:

- I learned requireJS and SASS, all though I know I could've used SASS way more than I did
- CSS grids, I used them more than I have before, all though the usage was really simple, css grids
can be way more efficient and complex, so I will look into it on my next project.

Extra:

- I wanted to make a simple loader for the page, since I'm using a free version of font-awesome loading takes some time
- All photos and fonts would ideally be located locally, just didn't do it for this project since I wanted to save time.
- I would also add history to the exec.handler, and make a "router" to display paths

Thanks for letting me participate, I know this might not be exactly what you had in mind, but I just really like SPA,
so I experimented a little bit with that instead of making the site the regular way using templates and hrefing the different
pages. 

I'm not happy with the outcome of the site, and feel like I rushed it, but I hope it can display some of my skills anyways.

I will include a small explanation file for the code.

ps: I also didn't use any css frameworks just to show that I can do everything from scratch, all though I should hase used more grids to make it easier for myself.
 - I also didn't comment the code, to make it cleaner. This is also why I want to look into typescript, to declare types, so that it's easier to read.

psps: Project should be viewed in chrome as I haven't done any cross-browser testing

Vet ikke om dere vil ha all teksten på Norsk eller Engelsk, så skrev den bare på Engelsk siden oppgaven var skrevet slik.

-SBH

