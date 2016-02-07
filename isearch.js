var isearch = (function() {
	var searchFoo = function(text, searchArr) {
		var searchStartTime = Date.now(), searchEndTime, isOverTime = false, OVERTIMEBASE = 1;
		var pattern = new RegExp(text, 'ig');
		try {
			var firstIndex;
			searchArr.filter(function(item,i){ 
				searchEndTime = Date.now();
				var timePassed = (searchEndTime - searchStartTime) / 1000;
					//console.log(timePassed);
				if(timePassed > OVERTIMEBASE){
					isOverTime = true;
					throw new Error('OverTime');
				}
				else if(!isOverTime && !firstIndex && item.innerHTML.toLocaleLowerCase().search(pattern) > -1){
					firstIndex = i;
					return firstIndex;
      	}
			});
			return firstIndex;				
		}
		catch(e) {
			if(e.message == 'OverTime'){
					return -1;
				}
		}
	};
	var search = function(conId,itemCla) {
			var box = document.querySelector(conId);
			var items = Array.prototype.slice.call(document.querySelectorAll(itemCla));
			var itemHeight = items[0].clientHeight;
			var searchText = document.getElementById('text').value.trim();
			var index = -1;
			if(typeof searchText == 'string' && searchText.constructor === String ){
			  index = searchFoo(searchText.toLocaleLowerCase(), items);
				console.log(index);
			}
			if(index !== -1){
				box.style.marginTop = -index * itemHeight + 'px';
			}
		};
	return {
		search: search
	};
}());