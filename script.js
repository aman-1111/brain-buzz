const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2,
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["Python", "Java", "HTML", "C++"],
      answer: 2,
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 2,
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
      answer: 0,
    },
    {
      question: "Which programming language is used for iOS app development?",
      options: ["Java", "Swift", "C#", "Python"],
      answer: 1,
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "H2"],
      answer: 1,
    },
    {
      question: "Who is known as the father of computers?",
      options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
      answer: 1,
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      answer: 0,
    },
    {
      question: "Which element is represented by the symbol 'O'?",
      options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
      answer: 0,
    },
    {
      question: "Which country is the largest by area?",
      options: ["China", "Canada", "USA", "Russia"],
      answer: 3,
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Titanium"],
      answer: 2,
    },
    {
      question: "Which is the smallest continent by land area?",
      options: ["Asia", "Australia", "Antarctica", "Europe"],
      answer: 1,
    },
    {
      question: "Who invented the telephone?",
      options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"],
      answer: 1,
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      answer: 2,
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: 3,
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Lemon"],
      answer: 1,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Earth", "Venus", "Jupiter"],
      answer: 0,
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: 1,
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Whale", "Giraffe", "Shark"],
      answer: 1,
    },
    {
      question: "Which animal is known as the king of the jungle?",
      options: ["Tiger", "Lion", "Elephant", "Giraffe"],
      answer: 1,
    },
    {
      question: "Which continent is the Sahara Desert located in?",
      options: ["Asia", "Africa", "North America", "Australia"],
      answer: 1,
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
      answer: 2,
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Lungs", "Brain", "Skin"],
      answer: 3,
    },
    {
      question: "Which country invented pizza?",
      options: ["Italy", "USA", "Greece", "Mexico"],
      answer: 0,
    },
    {
      question: "Which is the largest island in the world?",
      options: ["Australia", "Greenland", "New Guinea", "Borneo"],
      answer: 1,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: 2,
    },
    {
      question: "What is the fastest land animal?",
      options: ["Cheetah", "Lion", "Horse", "Elephant"],
      answer: 0,
    },
    {
      question: "Which fruit is known as the 'king of fruits'?",
      options: ["Mango", "Durian", "Pineapple", "Banana"],
      answer: 1,
    },
    {
      question: "Which country is famous for tulips and windmills?",
      options: ["Germany", "France", "Netherlands", "Italy"],
      answer: 2,
    },
    {
      question: "In which year did World War II end?",
      options: ["1941", "1942", "1944", "1945"],
      answer: 3,
    },
    {
      question: "What is the national language of Brazil?",
      options: ["Spanish", "Portuguese", "English", "French"],
      answer: 1,
    },
    {
      question: "What is the largest country by population?",
      options: ["India", "China", "USA", "Russia"],
      answer: 1,
    },
    {
      question: "Who developed the theory of evolution?",
      options: ["Charles Darwin", "Galileo Galilei", "Isaac Newton", "Albert Einstein"],
      answer: 0,
    },
    {
      question: "Which metal is liquid at room temperature?",
      options: ["Mercury", "Gold", "Iron", "Copper"],
      answer: 0,
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
      answer: 1,
    },
    {
      question: "Which city is known as the 'Big Apple'?",
      options: ["Los Angeles", "Chicago", "New York City", "Miami"],
      answer: 2,
    },
    {
      question: "What is the symbol for the element gold?",
      options: ["Ag", "Au", "Pb", "Fe"],
      answer: 1,
    },
    {
      question: "Who is known as the 'Father of Modern Physics'?",
      options: ["Albert Einstein", "Isaac Newton", "Max Planck", "Nikola Tesla"],
      answer: 0,
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Mars", "Venus", "Earth"],
      answer: 0,
    },
    {
      question: "What is the main source of energy for the Earth?",
      options: ["The Moon", "The Sun", "The Stars", "The Wind"],
      answer: 1,
    },
    {
      question: "Which ocean is the smallest?",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      answer: 3,
    },
    {
      question: "What is the most spoken language in the world?",
      options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
      answer: 1,
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      answer: 1,
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "India"],
      answer: 2,
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      answer: 0,
    },
    {
      question: "Which country is known for the Great Barrier Reef?",
      options: ["USA", "Canada", "Australia", "South Africa"],
      answer: 2,
    },
    {
      question: "What is the hardest rock known to man?",
      options: ["Diamond", "Granite", "Quartz", "Marble"],
      answer: 0,
    },
    {
      question: "Which animal is the largest land animal?",
      options: ["Elephant", "Giraffe", "Hippopotamus", "Rhino"],
      answer: 0,
    },
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: 0,
    },
    {
      question: "Which fruit is known for having its seeds on the outside?",
      options: ["Strawberry", "Apple", "Orange", "Blueberry"],
      answer: 0,
    },
    // Add additional questions here as needed
  ];
  
  // Shuffle function to randomize the questions
  function shuffleQuestions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const totalQuestionsElement = document.getElementById("total-questions");
  const retryButton = document.getElementById("retry-btn");
  
  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionElement.innerText = questionData.question;
  
    optionsElement.innerHTML = "";
    questionData.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="radio" name="answer" id="option${index}" value="${index}" /><label for="option${index}">${option}</label>`;
      optionsElement.appendChild(li);
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      const selectedAnswer = parseInt(selectedOption.value);
      if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
      }
    }
  }
  
  function showResults() {
    resultElement.style.display = "block";
    scoreElement.innerText = score;
    totalQuestionsElement.innerText = questions.length;
    nextButton.style.display = "none";
  }
  
  function nextQuestion() {
    checkAnswer();
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultElement.style.display = "none";
    nextButton.style.display = "block";
    
    shuffleQuestions(questions); // Shuffle the questions before starting the quiz
    loadQuestion();
  }
  
  nextButton.addEventListener("click", nextQuestion);
  retryButton.addEventListener("click", resetQuiz);
  
  shuffleQuestions(questions); // Shuffle the questions when the page loads
  loadQuestion();
  