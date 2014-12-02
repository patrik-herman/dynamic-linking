Dynamic linking
===============

A small jQuery app with which you can dynamically load pages.

What it can do?
---------------
This little app can load website from another file and put it to your website.

Example:
--------------

First, edit **yoursite.html:**

	<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> 	<!-- add jQuery -->
	<script src="./js/d-linking.js"></script>								<!-- add linking script -->
	<script>
	// Now some properties
	
	var def = {                                     //don't change the name of variable!
	    website: "home.html",                       //your default yoursite.html content
	    websiteHeadline: "Home",                    //If you want to change headline with loading another page, change this property
	    websiteElement: ".my-web-content",          //this is just jQuery path to find element, where to paste web content
	    headlineElement: ".my-headline",            //this is jQuery path to find headline element, where to paste def.websiteHeadline
	};
	var webs_folders = {
	    "home.html": "home.html",
	    "about_us.html": "./folder/about_us.html",
	}
	var websites_headline_names = {     //headline names, for example: link() got "home.html"...how it can to get headline name? Just very simply: websites_headline_names["xxx.html"] :)
	    "home.html": "Home",
	    "./folder/about_us.html": "About us", 
	};
	</script>

 Then, put html to **yoursite.html:**

	<h1>
	    Current site: <span class="my-headline"></span>
	</h1>
	<div class="my-web-content"></div>
	
	<a onclick="
	    link('home.html',
	        'Home',
	        $('.my-web-content'),
	        $('.my-headline')
	    )">Home</a>                                 <!-- First alternative -->
	
	
	<a onclick="link('./folder/about_us.html', 'About us', $('.my-web-content'), $('.my-headline'))">About us</a>
	                                                <!-- Second, compact altervative -->


	
Now, edit **home.html** file:

	<h3>Home!</h3>
	
And now, edit **about_us.html** file in ./folder/ folder:

	<font color="cornflowerblue">About us!</font>
	
	
<br>
Saved? Open yoursite.html and watch!
