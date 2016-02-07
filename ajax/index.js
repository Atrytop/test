var xmlhttp;
if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
} else {
	xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		document.getElementById('mydiv').innerHTML = xmlhttp.responseText;
	}
};
xmlhttp.open('get','one.txt',true);
xmlhttp.send();