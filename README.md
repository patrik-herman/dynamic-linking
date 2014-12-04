Dynamic linking
===============

> A small jQuery app with which you can dynamically load pages.

### What it can do?
This little app can load website from another file and put it to your website.

# Demo
Working demo [here](http://rbg.wz.cz/dynamic-loading/yoursite.html)

# Example:

First, edit **yoursite.html:**

```javascript
<script>
// Now some properties

var def = {                                     //don't change the name of variable!
	website: "home/",                       	//your default yoursite.html content
	websiteHeadline: "Home",                    //If you want to change headline with loading another page, change this property
	websiteElement: ".my-web-content",          //this is just jQyery path to find element, where to paste web content
	headlineElement: ".my-headline",            //this is jQuery path to find headline element, where to paste def.websiteHeadline
};
var webs_folders = {
	"home": "home/",
	"about_us": "folder/about_us/",
}
var websites_headline_names = {     //headline names, for example: link() got "home.html"...how it can to get headline name? Just very simply: websites_headline_names["xxx/"] :)
	"home/": "Home",
	"folder/about_us/": "About us", 
};
</script>
```

 Then, put html to **yoursite.html:**

```html
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> <!-- add jQuery -->
<script src="./js/d-linking.js"></script>

<h1>
	Current site: <span class="my-headline"></span>
</h1>

<div class="my-web-content"></div>
	<a onclick="
	link(webs_folders['home'],
		'Home',
		$('.my-web-content'),
		$('.my-headline')
	)">Home</a>                                 <!-- First alternative -->

	<a onclick="link(webs_folders['about_us'], 'About us', $('.my-web-content'), $('.my-headline'))">About us</a>
												<!-- Second, compact altervative -->
```
	
Now, edit **home.html** file:

```html
<h3>Home!</h3>
```
	
And now, edit **about_us.html** file in ./folder/ folder:

```html
<font color="cornflowerblue">About us!</font>
```
	
	
<br>
Saved? Open yoursite.html and watch!

# Changelog
> 
###v1.1
**-** removed basic websites<br>
**+** added folder system
###v1.0
**+** basic core<br>
**+** basic websites
