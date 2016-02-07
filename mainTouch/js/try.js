 var atry = 
(function(win,doc){
var dummyStyle = doc.createElement('div').style,
	vendor = (function () {
		var vendors = 't,webkitT,MozT,msT,OT'.split(','),
			t,
			i = 0,
			l = vendors.length;
		for ( ; i < l; i++ ) {
			t = vendors[i] + 'ransform';
			if ( t in dummyStyle ) {
				var temp = vendors[i].substr(0, vendors[i].length - 1)
				return vendors[i].substr(0, vendors[i].length - 1);
			}
		}

		return false;
	})();
	var prefixStyle = function (style) {
		if (vendor === '') return style;
		style = style.charAt(0).toUpperCase() + style.substr(1);
		return vendor + style;
	};

	return {
		prefixStyle : prefixStyle
	}
})(window,document)