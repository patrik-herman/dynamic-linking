/************** LINKING WITH XMLHTTPREQUEST BY PDKNIGHT ****************/

var loc = window.location.href;



var decode_url_by_hash = loc.split("#")[loc.split("#").length-1];

if(decode_url_by_hash != loc){

	def.website = webs_folders[decode_url_by_hash + ".html"];
	def.websiteHeadline = websites_headline_names[def.website];

}



	link(def.website,
	 def.websiteHeadline,
	 def.websiteElement,
	 def.headlineElement, (decode_url_by_hash == loc));



function link(source, headlineText, elem, headline, tf_check){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			
			$(elem).css("opacity", "0");


			if(tf_check !== null && tf_check != false){

				var hash_url = source.split(".")[source.split(".").length-2].split("/")[source.split(".")[source.split(".").length-2].split("/").length-1];
				window.location = "#" + hash_url;
			}


			setTimeout(function(){
				$(elem).html(xhr.responseText);
				$(elem).css("opacity", "1");

				if(headline !== null){
					$(headline).html(headlineText);
				}

			},700);

		}
	}
	xhr.open('GET', source, true);
	xhr.send(null);
}
