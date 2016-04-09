# Dynamic linking
A small jQuery library which you can dynamically load pages with.

#### What it can do?
This little app can load website from another file and put it to your website.

## Demo
Working demo [here](http://rbg.wz.cz/dynamic-loading/yoursite.html)

## Example:

First, add a `script` tag to **yoursite.html:**

```html
<script>
// Now some properties

var def = {                                 // don't change the name of variable!
    website: "home/",                       // your default yoursite.html content
    websiteName: "home",                    // Name of the first loaded website, it's used in webs_folders
    websiteElement: ".my-web-content",      // this is just jQuery path to find element, where to paste web content
    headlineElement: ".my-headline",        // this is jQuery path to find headline element, where to paste def.websiteHeadline
};
var webs_folders = {
    "home": "home/",
    "about_us": "folder/about_us/",
}
var websites_headline_names = {     // headline names, for example: link() got "home.html"...how it can to get headline name? 
                                    // Just very simply: websites_headline_names["xxx.html"] :)
    "home/": "Home",
    "folder/about_us/": "About us", 
};
</script>
```
Then, put HTML to **yoursite.html:**

```html
<!-- add jQuery -->
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
<!-- add d-linking library -->
<script src="./js/d-linking.js"></script>

<h1>
    Current site: <span class="my-headline"></span>
</h1>

<div class="my-web-content"></div>
    <a onclick="
        link('home',
            '.my-web-content',
            '.my-headline'
        )">Home</a>
```
Now, edit **./home/index.html** file:

```html
<h3>Home!</h3>
```
Saved? Open yoursite.html and watch!

# Changelog
###v1.1
**-** removed basic websites<br>
**+** added folder system
###v1.0
**+** basic core<br>
**+** basic websites
