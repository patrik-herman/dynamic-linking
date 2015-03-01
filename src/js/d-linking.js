/************** LINKING WITH XMLHTTPREQUEST BY PDKNIGHT ****************/
function qSel(str)
{
	return document.querySelector(str);
}


var loc = window.location.href;



var decode_url_by_hash = window.location.hash.slice(1, window.location.hash.length);


if(decode_url_by_hash != ""){

	decode_url_by_hash = decode_url_by_hash.split("/")[
									decode_url_by_hash.split("/").length-1
									];

	//def.website = webs_folders[decode_url_by_hash + ".html"];
	def.website = webs_folders[decode_url_by_hash];
	def.websiteHeadline = websites_headline_names[def.website];

}



	link(def.websiteName,
	 def.websiteElement,
	 def.headlineElement, (decode_url_by_hash == "")
	 );



function link(source, elem, headline, tf_check){

	elem = qSel(elem);
	headline = qSel(headline);
	source = webs_folders[source];

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			
			elem.style.opacity = "0";


			if(tf_check !== null && tf_check != false)
			{
				var hash_url = source.slice(0, source.length-1);
				window.location = "#" + hash_url;
			}


			setTimeout(function()
			{
				elem.innerHTML = xhr.responseText;
				console.log(xhr.responseText);
				elem.style.opacity = "1";

				if(headline !== null)
				{
					headline.innerHTML = websites_headline_names[source];
				}

			},700);

		}
	}
	xhr.open('GET', source, true);
	xhr.send(null);
}
