
window.onload = function() {
//	var boxs = document.getElementsByClassName('blocks');
	var arr = new Array();
	var arr2 = new Array();
	for (i = 0; i < 65; i++) {
		arr[i] = Math.round(Math.random()*100);
	}
	for (i = 0; i < 65; i++) {
		for (n = 0; n < 65; n++) {
			if (! (i == n)) {
				if (arr[i] == arr[n]) {
					arr[i] = Math.round(Math.random()*1000);
				}
			}
		}
	}
	

	var ni = 0;
	function createNewBox() {
		if (ni < 65)	{
		  var newdiv = document.createElement('div');
		  newdiv.classList.add('blocks');
			newdiv.classList.add('block'+(ni+1));
			newdiv.innerHTML = arr[ni];

			var ob = document.getElementById('mydiv');
			ob.appendChild(newdiv);
			
		ni += 1;
		} 
		else {
										
			                    var box1, box11, box2, box22, x, calc;
														
													function mySort() {
																							
																x = 0;
														 		while (!(x == 1)) {
																										calc = 0;
																	                  for (i = 1; i < 66; i++) {
																										box1 = document.querySelector('.block'+i);
																										box11 = parseInt(box1.innerHTML, 10);	
																										box2 = document.querySelector('.block'+(i+1));
																										box22 = parseInt(box2.innerHTML, 10);	
																											   
																											  if (box11 > box22) {
																													box1.style.backgroundColor = '#db3d3d';
																												  box2.style.backgroundColor = '#db3d3d';
																													box1.innerHTML = box22;
																													box2.innerHTML = box11;
																													calc += 1;
																									} 
																											  else {
																													box1.style.backgroundColor = 'yellowgreen';
																													box2.style.backgroundColor = 'yellowgreen';
																													continue;
																												}
																					}
																			if (calc == 0) {
																				  
																					x += 1;
																					clearInterval(t2); 
																				  
																				}
																	
																}
														    
							
													}
			                    var mytime =  prompt('Введите число, задержку шага сортировки в ms( 1 ms = 0.001 секунды ) \n \nЭто должно быть просто целое число, лучше от 0 до 500\n  \nПосле сортировки все блоки станут зелёными');
													var mytime2 = parseInt(mytime);
													var t2 = setInterval(mySort, mytime2);
			                  			                  
 
												clearInterval(t); 

			}
	}
	var t = setInterval(createNewBox, 50);

}

