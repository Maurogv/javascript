(function(window, document){
 
   newScript = document.createElement('script');
   newScript.async = 1;
   newScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
   scriptTag = document.getElementsByTagName('script')[0];
   scriptTag.parentNode.insertBefore(newScript, scriptTag);
 
   newLink = document.createElement('link');
   newLink.async = 1;
   newLink.href = 'https://cdn.jsdelivr.net/gh/Maurogv/javascript@master/css/ref.css';
   newLink.type = 'text/css';
   newLink.rel = 'stylesheet';
   headTag = document.getElementsByTagName('head')[0];
   headTag.insertBefore(newLink, headTag.firstChild);

   newScript = document.createElement('script');
   newScript.async = 1;
   newScript.src = 'https://cdn.jsdelivr.net/gh/Maurogv/javascript@master/libs/ref.js';
   scriptTag = document.getElementsByTagName('script')[0];
   scriptTag.parentNode.insertBefore(newScript, scriptTag);
    	
  // Poll for jQuery to come into existance
  var checkReady = function (callback) {
    if (window.jQuery) {
      callback(jQuery);
    }
    else {
      window.setTimeout(function () { checkReady(callback); }, 100);
    }
  };

  // Start polling...
  checkReady(function ($) { 
    // Use $ here...
    window.references(); 
  }) 
     
})(window, document)
