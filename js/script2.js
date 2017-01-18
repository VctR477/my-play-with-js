var arr = [7,0,3,1,2,5,8,6,4,9];

var x = 0;
var temp, calc;
while (!(x == 1)) {
	
         calc = 0;	
	
										for (i = 0; i < arr.length; i++) {

											if (arr[i] > arr[i+1]) {
												temp = arr[i];
												arr[i] = arr[i+1];
												arr[i+1] = temp;
												calc +=1;
									} 
											else {
												 continue;										
									}
								}
		
		
		
//		alert(i+1+'-elem__'+arr[i]);
		if (calc == 0) {
			x += 1;
			alert(arr);
		}
	
} 