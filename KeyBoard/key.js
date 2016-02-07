window.onload = function(){
	function toggleClass(element,value) {
	 	if (!element.className) {
			element.className = value;
		} 
		else {
			newClassName = element.className;
			newClassName+= " ";
			newClassName+= value;
			element.className = newClassName;
		}
	}
	
	var textArea = document.getElementById("textArea");
	
	textArea.addEventListener("keydown",keyWaveDown,false)
	textArea.addEventListener("keyup",keyWaveup,false)
	function keyWaveDown(event){
			//alert(event.keyCode)
		if(event.keyCode == 192){
			//alert(event.keyCode)
			var keyWave = document.getElementById("keyWave");
			toggleClass(keyWave,'down')
			}
		}
	function keyWaveup(event){
		//alert(event.keyCode)
		if(event.keyCode == 192){
			//alert(123)
			var keyWave = document.getElementById("keyWave");
			keyWave.className = "block";
			}
		}
		
	function DU(elemId,codeNum){
		
		function keyDown(event){
			if(event.keyCode == codeNum){
				var id = document.getElementById(elemId);
				toggleClass(elemId,'down')
				}
			}
		function keyup(event){
			if(event.keyCode == codeNum){
				elemId.className = "block";
				}
			}
		textArea.addEventListener("keydown",keyDown,false)
		textArea.addEventListener("keyup",keyup,false)
	}
//one
	
	DU(keyCapsLock,20)
	DU(keyShift,16);
	DU(keyCtrl1,17);
	DU(keyCtrl2,17)
	DU(keySpace,32);
	DU(keyAlt,18)
	DU(keyMenu,93)
	DU(keyMeta,91)
	DU(keyMinus,189)
	DU(keyPlus,187);
	DU(keyBackspace,8)
	DU(keyBracketLeft,219)
	DU(keyBracketRight,221)
	DU(keyBackslash,220)
	DU(keyColon,186)
	DU(keyQuotes,222)
	DU(keyEnter,13)
	DU(keyComma,188)
	DU(keyStop,190)
	DU(keyQuestion,191)
	DU(keyShift,16)
	var arrNum = [key0,key1,key2,key3,key4,key5,key6,key7,key8,key9]
	for(var j = 48,i = 0;j < 58,i < 10;i++, j++){
		DU(arrNum[i],j)
		}
	var arrLetter = [keyA,keyB,keyC,keyD,keyE,keyF,keyG,keyH,keyI,keyJ,keyK,keyL,keyM,keyN,keyO,keyP,keyQ,keyR,keyS,keyT,keyU,keyV,keyW,keyX,keyY,keyZ]
	for(var i = 0,j = 65;i < 27,j < 91;i++, j++){
		DU(arrLetter[i],j)
		}
		
	textArea.addEventListener("keydown",keyAltdown,false)
	textArea.addEventListener("keyup",keyAltup,false)
	function keyAltdown(event){
			//alert(event.keyCode)
		if(event.keyCode == 18){
			//alert(event.keyCode)
			var keyAlt = document.getElementById("keyAlt");
			toggleClass(keyAlt,'down')
			}
		}
	function keyAltup(event){
		//alert(event.keyCode)
		if(event.keyCode == 18){
			//alert(123)
			var keyAlt = document.getElementById("keyAlt");
			keyAlt.className = "block";
			}
		}
		
	textArea.addEventListener("keyup",clc,false)
	function clc(event){
		var i;
		var clc = document.getElementById("clc");
		if(textArea.value == ""){
			i = "赶快看看你的输入字数吧";
			clc.innerHTML = i;
		}
		else{
			i = textArea.value.length;
			clc.innerHTML = i + "  字符";
		}
		
		
	}
	

	
}