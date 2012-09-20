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

	
	
	
	
	return { 
			"checkNumber":checkNumber,
			"checkURL": checkURL
		};
	};
	
	var nL  = new myLibrary();
	console.log(nL.checkNumber(5));
	console.log(nL.checkURL("yahoo.com"));
	
	