// JavaScript Document

		//		
			if(1 == 1){
			
			
				localStorage.setItem(key, value);
				localStorage.setItem(husl, plc);
				localStorage.setItem(mailed, telly);
				
		
			let y = localStorage.getItem('mailed');
			
			location.reload();	
	//	}

		
		const inpBtn = document.getElementById("three");
		
		const job = document.getElementById("work");
		
		const live = document.getElementById("street");
		
		
		
		const inpTtg1 = document.getElementById("outPut1");

		two.onclick = function (){
			
			const key = first.value;
			
			const value = second.value;
			
			
			
		if ( key && value) {
			
			localStorage.setItem(key, value);
			
			location.reload();
			
		}	
		
		};
		
		for ( let i = 0 ; i < localStorage.length; i++){
			
			const key = localStorage.key(i);
			
			const value = localStorage.getItem(key);
		
			 outPut.innerHTML = "Hello: " + key + " " + value + ", We advise visiting https://www.cdc.govas well as https://www.benefits.gov for specialized Covid relief." ;
			
		}