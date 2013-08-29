// Define views and templates in the application here

/* Start the carousel going */
Template.splash.rendered = function() {
  $('.carousel').carousel({
    interval: 5000
  });
};


