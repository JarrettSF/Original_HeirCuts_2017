

		const inpKey = document.getElementById("first");
		
		const inpValue = document.getElementById("second");
		
		const inpBtn = document.getElementById("two");
		
		const job = document.getElementById("work");
		
		const live = document.getElementById("street");
		
		const inpTtg = document.getElementById("outPut");
		
		const inpTtg1 = document.getElementById("outPut1");
		three.onclick = function (){
			
			
			const job = work.value;
			
			const address = street.value;
			
			
		if ( job && address) {
			
			localStorage.setItem(job, address);
			
			location.reload();
			
		}	
		
		};
		
		for ( let i = 0 ; i < localStorage.length; i++){
			
			const job = localStorage.key(i);
			
			const address = localStorage.getItem(job);
		
		
			 outPut1.innerHTML =   job + " " + address ;
		}
		