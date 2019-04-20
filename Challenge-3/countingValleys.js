function countingValleys(n, s) {
	let seaLevel = 0;
	let Hiking = 0;
	let Vallies = 0;
	let Mountain = 0;
	const UpsDowns = s.split('');
	console.log(UpsDowns);
	for(let i = 0; i< UpsDowns.length; i++)	{
		if(UpsDowns[i] == "U") { 
			Hiking++;
			if(Hiking === seaLevel) {Vallies++;};
		};
		if(UpsDowns[i] == "D") { 
			Hiking--;
			if(Hiking === seaLevel) {Mountain++;};
		};
	};
	// const mountainsVallies = [{Mountains: Mountain}, {Vallies: Vallies}];
	return Vallies;
}
console.log(countingValleys(12, "DDUUDDUDUUUD")); 
