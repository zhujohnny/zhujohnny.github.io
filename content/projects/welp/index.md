---
project: true
title: Welp
subtitle: "Component Design Within a Microservices Architecture"
date: "2018-05-30T00:00:00.000Z"
excerpt: "Built with React. Local restaurant reviews and information, modeled after Yelp. Components that display restaurant information, hours, and menu items. Implements a RESTful API on the backend."
---

Built with [React](https://reactjs.org/). A discovery app for local restaurant information and reviews, modeled after Yelp. 

The project was an exercise in component design within a larger [microservices architecture](http://microservices.io/).
I personally built the [Restaurant Details](https://github.com/hrsf93-welp/welp-restaurant-details) component, a service provided to a parent restaurant page. The service implements a RESTful API on the backend to retrieve data from a MongoDB database.

**It contains 4 major sub-components:**
1. **Summary** component that displays hours today, price and a menu link
2. **Hours** component that renders based off of the time the site is viewed
3. **Menu** component that is clickable with item photos and descriptions
4. **Details** component that displays more information about the restaurant

---
Here's the full page:
<div class="video-container">
  <iframe width="1120" height="630" src="https://www.youtube.com/embed/iRxMxa_h2MU" frameborder="0" allow="autoplay; encrypted-media" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
*Technologies: JavaScript, React, HTML/CSS/Sass, Node.js, Express, Redis, MongoDB, Jest/Enzyme, Webpack, Docker, AWS EC2, Google Maps API, moment.js*

**Related Projects**
* [https://github.com/hrsf93-welp/welp-restaurant-details](https://github.com/hrsf93-welp/welp-restaurant-details)
* [https://github.com/hrsf93-welp/welp-restaurant-summary](https://github.com/hrsf93-welp/welp-restaurant-summary)
* [https://github.com/hrsf93-welp/welp-photo-gallery](https://github.com/hrsf93-welp/welp-photo-gallery)
* [https://github.com/hrsf93-welp/welp-review](https://github.com/hrsf93-welp/welp-review)
