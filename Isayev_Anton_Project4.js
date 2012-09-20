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
	
		return { 
			"checkNumber":checkNumber
		
		};
	
	};
	
	
	
	
	
	
	
	
	var nL  = new myLibrary();
	console.log(nL.checkNumber(5));
	
	