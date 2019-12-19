//page fully loaded
//1.get data from server - url? / dataa
//2.show data in html

$(document).ready(function(){
	$.getJSON("/data",function(d){
		//alert(JSON.stringify(d));
		$("#name").text(d.name);
		$("#college").text(d.college);
		$("#regno").text(d.regno);
}}