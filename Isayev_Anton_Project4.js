// Isayev Anton
// Project 4
	
	
	
var myLibrary = function(){
	
	// number function
	var checkNumber = function(val) {
	
		if(isNaN(val)){
			return false;
		} else {
			return true;
		};
		
	};
	
	// check URL
	var checkURL = function(val){
		var first = val.substring(0,val.indexOf(":"));
		if((first === "http") || (first === "https")){
			return true;
		} else {
			return false;
		};
	};		

	// smallest value in array
	var seeNumber = function (val) {
		var number = [1, 3, 5, 7, 9];
			for (i=number; i<number.length; i++) {
			if (number[i]<val) {
		number = number[i];
			}
		}
		return number;
	};

	// replacing element in the string
	var changeString = function(){
		var string = " a, b, c" ; 
		var newstring = string.replace(/,/gi, "/");{

		};
	return newstring;
	
	};
	
	var diffT = function(){
		var oldBegin = 20
		var oldEnd = 27
		var newBegin = 21

	var newEnd = new Date(newBegin + oldEnd - oldBegin);
	return newEnd
};
	
	var checkString = function(val){
var splitResult = val.split("");
if (splitResult[3]=="-" && splitResult[7]=="-"){
	return true;
		}
		else { return false ;
		};
	};
	
	
	return { 
			"checkNumber":  checkNumber,
			"checkURL":     checkURL,
			"seeNumber":    seeNumber,
			"changeString": changeString,
			"diffT":        diffT,
			"checkString": checkString
			
		};
	};
	
	var nL  = new myLibrary();
	console.log(nL.checkNumber(5));
	console.log(nL.checkURL("yahoo.com"));
	console.log(nL.seeNumber(6));
	console.log(nL.changeString());
	console.log(nL.diffT());
	console.log(nL.checkString("307-413-2996"));
	