// Isayev Anton
// Project 4
	
	
	
var myLibrary = function () {
	
	// number function
	var checkNumber = function (val) {
	
		if (isNaN(val)) {
			return false;
		} else {
			return true;
		};
		
	};
	
	// check URL
	var checkURL = function (val) {
	var first = val.substring(0,val.indexOf (":"));
		if ((first === "http") || (first === "https")) {
			return true;
		} else {
			return false;
		};
	};		

	// smallest value in array
	var seeNumber = function (val) {
 	var number = [12, 1, 3, 5, 7, 9];
 			sortedArray = number.sort(function(a,b){return a - b})
 		for (i=0; i<sortedArray.length; i++) {
  		if (sortedArray[i]>val) {
 			number = sortedArray[i];
 		break;
  		};
 	};
 return number;
};

	// replacing element in the string
	var changeString = function () {
		var string = " a, b, c"; 
		var newstring = string.replace(/,/gi, "/"); {
		};
	return newstring;
	};
	
	var diffT = function () {
		var oldBegin = 20
		var oldEnd = 27
		var newBegin = 21

	var newEnd = new Date(newBegin + oldEnd - oldBegin);
	return newEnd
};
	
	var checkString = function (val) {
var splitResult = val.split("");
if (splitResult[3]=="-" && splitResult[7]=="-") {
	return true;
		}
		else { return false ;
		};
	};
	
	
	// check email 
	var checkEmail = function (val) {
		if(val.indexOf(" ") == -1 && val.indexOf("@") == -1) {
		return false;
		} else {
 	var splitResult1 = val.split("@");
  	  if ( splitResult1[1].indexOf(".") == -1) {
   return false;
  }	else {
   return true; 
		};
 	  };
	};
	
	// string to number
	var stringToNumber = function(val){
	var numValue = +val;
		if (numValue != val) alert('not a number Mr. Lewis');
		else {return numValue};
}


var splitStringUppercase = function(val){
	ok = [];
var splitResult = val.split(",");
	for (i=0; i<splitResult.length; i++){
 		val = splitResult[i].slice(0,1).toUpperCase()+ splitResult[i].slice(1) + ",";
 		ok = ok + val;
}
return ok;
}
	
	
	return { 
			"checkNumber":          checkNumber,
			"checkURL":             checkURL,
			"seeNumber":            seeNumber,
			"changeString":         changeString,
			"diffT":                diffT,
			"checkString":          checkString,
			"checkEmail":           checkEmail,
		    "stringToNumber":       stringToNumber,
		    "splitStringUppercase": splitStringUppercase
			
		};
	};
	
	var nL  = new myLibrary();
	console.log(nL.checkNumber(5));
	console.log(nL.checkURL("yahoo.com"));
	console.log(nL.seeNumber(6));
	console.log(nL.changeString());
	console.log(nL.diffT());
	console.log(nL.checkString("307-413-2996"));
	console.log(nL.checkEmail("Antonwyo@fullsail.edu"));
	console.log(nL.stringToNumber("24"));
	 console.log(nL.splitStringUppercase("hi,i,am,anton"));