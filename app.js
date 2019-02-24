
var limit = document.querySelector('#in > input');
var result = document.querySelector('#out > input');
function summ() {
	var lim = parseFloat(limit.value);
  	var sum = 0;
  	for(var i=0;i<lim;i++) {
    	if(((i%3) === 0) || ((i%5) === 0)) { sum+=i; };
  	};
  	result.value = sum;
};
limit.addEventListener('input', summ);
