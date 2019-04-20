function gradingStudents(grades) {
	for(let i = 0; i<grades.length; i++) {
		if( (grades[i] >= 38) && ((grades[i] % 5) > 2) ) {
			grades[i] ++;
			if(grades[i]%5 != 0) { grades[i]++; };
		};
	};
	return grades;
};
console.log(gradingStudents([73,67,38,33]));
