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

	
	var seeNumber = function (val) {
		var number = [1, 3, 5, 7, 9];
			for (i=number; i<number.length; i++) {
			if (number[i]<val) {
		number = number[i];
		}
	}
		return number;
};
	
	return { 
			"checkNumber": checkNumber,
			"checkURL":    checkURL,
			"seeNumber": seeNumber
		};
	};
	
	var nL  = new myLibrary();
	console.log(nL.checkNumber(5));
	console.log(nL.checkURL("yahoo.com"));
	console.log(nL.seeNumber(6));
	