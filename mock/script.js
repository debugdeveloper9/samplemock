const questions = [
    "Tell me about yourself.",
    "What is your greatest strength?",
    "Describe a challenge you overcame at work.",
   "Tell me more about yourself and what you enjoy doing in your free time. ",
   "What do you know about our company? ",
   "Give one reason why you could succeed in this role. ",
   "Why did you leave your last job? ",
   "Describe a common challenge you often face at work. ",
   "Are you willing to travel or relocate? ",
   "Are you independent or do you prefer working as a team? "
  ];
  
  let questionIndex = 0;
  
  document.getElementById('nextBtn').addEventListener('click', function() {
    if (questionIndex < questions.length - 1) {
      questionIndex++;
      document.getElementById('question').innerHTML = `
        <h2>Question ${questionIndex + 1}:</h2>
        <p>${questions[questionIndex]}</p>
        <textarea id="answer" rows="4" cols="50" placeholder="Type your answer here"></textarea>
      `;
    } else {
      document.getElementById('question').innerHTML = "<h2>Interview Complete</h2>";
      document.getElementById('nextBtn').style.display = "none";
    }
  });