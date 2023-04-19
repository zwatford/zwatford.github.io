//see more//
let careerP = document.getElementById("more-career");
careerP.innerHTML = "<p>See More...</p>";
let meP = document.getElementById("more-me");
meP.innerHTML = "<p>See More...</p>";
function seeMe(){
	let hiddenP = document.getElementById("about-me");
	if(meP.innerHTML == "<p>See More...</p>"){
		hiddenP.classList.remove("hidden");
		meP.innerHTML = "<p>See Less</p>";
	}
	else if(meP.innerHTML = "<p>See Less</p>"){
		hiddenP.classList.add("hidden");
		meP.innerHTML = "<p>See More...</p>";
	}
}

function seeCareer(){
	let hideP = document.getElementById("about-career");
	if(careerP.innerHTML == "<p>See More...</p>"){
		hideP.classList.remove("hidden");
		careerP.innerHTML = "<p>See Less</p>";
	}
	else if(careerP.innerHTML = "<p>See Less</p>"){
		hideP.classList.add("hidden");
		careerP.innerHTML = "<p>See More...</p>";
	}
}

//quiz//
function showResults(){
	let resultDiv = document.getElementById("result");
	let headerH = document.getElementById("quiz-score");
	headerH.classList.remove("hidden");
	let questionOne = document.getElementById("question-1").value;
	let questionTwo = document.getElementById("question-2").value;
	let questionThree = document.getElementById("question-3").value;
	let questionFour = document.getElementById("question-4").value;
	if(questionOne == "html" && questionTwo == "css" && questionThree == "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 4/4</li>"
	}
	else if(questionOne != "html" && questionTwo == "css" && questionThree == "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 3/4</li>"
	}
	else if(questionOne == "html" && questionTwo != "css" && questionThree == "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 3/4</li>"
	}
	else if(questionOne == "html" && questionTwo == "css" && questionThree != "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 4/4</li>"
	}
	else if(questionOne == "html" && questionTwo == "css" && questionThree == "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 3/4</li>"
	}
	else if(questionOne != "html" && questionTwo != "css" && questionThree == "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 2/4</li>"
	}
	else if(questionOne != "html" && questionTwo == "css" && questionThree != "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 2/4</li>"
	}
	else if(questionOne != "html" && questionTwo == "css" && questionThree == "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Incorrect</li>" + "<li>Score: 2/4</li>"
	}
	else if(questionOne == "html" && questionTwo != "css" && questionThree != "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 2/4</li>"
	}
	else if(questionOne == "html" && questionTwo != "css" && questionThree == "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Incorrect</li>" + "<li>Score: 2/4</li>"
	}
	else if(questionOne == "html" && questionTwo == "css" && questionThree != "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Incorrect</li>" + "<li>Score: 2/4</li>"
	}
	else if(questionOne != "html" && questionTwo != "css" && questionThree != "js" && questionFour == "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Correct</li>" + "<li>Score: 1/4</li>"
	}
	else if(questionOne != "html" && questionTwo != "css" && questionThree == "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Correct</li>" 
		+ "<li>Question 4 - Incorrect</li>" + "<li>Score: 1/4</li>"
	}
	else if(questionOne != "html" && questionTwo == "css" && questionThree != "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Correct</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Incorrect</li>" + "<li>Score: 1/4</li>"
	}
	else if(questionOne == "html" && questionTwo != "css" && questionThree != "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Correct</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Incorrect</li>" + "<li>Score: 1/4</li>"
	}
	else if(questionOne != "html" && questionTwo != "css" && questionThree != "js" && questionFour != "3"){
		resultDiv.innerHTML = "<li>Question 1 - Incorrect</li>" + "<li>Question 2 - Incorrect</li>" + "<li>Question 3 - Incorrect</li>" 
		+ "<li>Question 4 - Incorrect</li>" + "<li>Score: 0/4</li>"
	}
}

//slideshow//
setInterval(changeSlide, 10000);
	function changeSlide(){
	let oneP = document.getElementById("one");
	let twoP = document.getElementById("two");
	let threeP = document.getElementById("three");
	let fourP = document.getElementById("four");
	if(twoP.classList == "hidden" && threeP.classList == "hidden" && fourP.classList == "hidden"){
		oneP.classList.add("hidden");
		twoP.classList.remove("hidden");
	}
	else if(oneP.classList == "hidden" && threeP.classList == "hidden" && fourP.classList == "hidden"){
		twoP.classList.add("hidden");
		threeP.classList.remove("hidden");
	}
	else if(oneP.classList == "hidden" && twoP.classList == "hidden" && fourP.classList == "hidden"){
		threeP.classList.add("hidden");
		fourP.classList.remove("hidden");
	}
	else{
		fourP.classList.add("hidden");
		oneP.classList.remove("hidden");
	}
}
	