# Single Page Developer Portfolio - A Frontend Mentor challenge

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

Future Enhancements:
- Refine error handling for contact form submission

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Developer Portfolio](https://quiet-pavlova-f48833.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Cited below in the useful resources section, this simple CSS Grid setup was quite useful in dealing with some of the trickier layouts of this project.

```css
.stacked {
  display: grid;
}

.stacked > * {
  grid-column: 1 / -1;
  grid-row: 1/ -1;
}
```

I haven't worked with forms much lately so it was nice to brush up on this simple and effective practice for collecting form data.
```js
const formDataEntries = new FormData(e.target).entries();
const { name, email, message } = Object.fromEntries(formDataEntries);
```

### Continued development

Biggest pain points for me with this project were handling the absolutely positioned decorative graphics and the error handling for the form. I'm willing to accept that positioning elements absolutely and moving them around on varying screen sizes will always be difficult. But this project with its simple form element was a good reminder that I need to dedicate more time and effort toward improving my expertise with forms.

Additionally, this CSS file is fairly massive. If I was to restart the project, I would definitely use Sass to create more manageable components and improve the organization of the codebase.

### Useful resources

- [Coder Coder](https://www.example.com) - Part way into my development of this project, I found Jessica Chan's video walkthrough on YouTube. I made quite a few different choices as what Jessica went with, but her video walkthrough of the project is immensely useful for those learning more advanced CSS and for getting a sense of how an experienced developer would tackle a project like this. Also, I ran into the same scroll bar issues related to the absolutely positioned svg decorative elements. 
Watching her troubleshoot the problem was immensely helpful. Even though my solution and individual element styling is a bit different, it definitely helped put me on the right path. Overall, dealing with these svgs was a huge pain.
I also largely adapted her approach to handling the project item hover states for desktop. My initial solution was more convoluted and Jessica's is much more elegant.
- [ModernCSS](https://moderncss.dev/css-button-styling-guide/) - Stephanie Eckles's button styling guide is something I keep coming back to. This project was no different.
- [Kevin Powell](https://www.youtube.com/@KevinPowell/featured) - I began tackling the header/hero layout in a similar way Jessica approached the issue, using absolutely positioned elements. Then, I remembered a YouTube short by Kevin Powell where he talked about stacking content with Grid. I didn't find the specific short (but I'm sure its in his channel somewhere) but luckily I made a note about his approach and was able to use it here. I don't know if this is necessarily more efficient or easier to understand than positioning the elements absolutely, but it worked well for me.
- [Frontend Mentor](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-) - Handling form validation and data is an essential task for developers and brushing up on best practice approaches is something I come back to again and again. Working through Frontend Mentor's JavaScript Fundamentals learning path has been an excellent resource.
- [FreeCodeCamp](https://www.freecodecamp.org/news/build-and-validate-beautiful-forms-with-vanilla-html-css-js/) - A helpful article published over at FreeCodeCamp and referenced in the Frontend Mentor JavaScript Learning Path. 

## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Twitter/X - [@mattpahuta](https://www.twitter.com/MattPahuta)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)


## Acknowledgments

As mentioned above, part way along my development of this project I reviewed Jessica Chan's approach to the challenge. I want to call out several areas of the code I ended up revising based on the approach Jessica took, Including my somewhat clumsy implementation of the underline text-decoration of the hero accent text in favor of her background-image w/linear-gradient solution. However, for the links with similar accent styles, I went with something closer to Stephanie Eckles' approach to styling links as buttons.
