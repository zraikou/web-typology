
// Quiz Data
const quizQuestions = [
  {
    id: 1,
    text: "You prefer to spend your free time:",
    options: [
      { id: "1a", text: "With a group of people, socializing", dimension: "E" },
      { id: "1b", text: "With one or two close friends, or alone", dimension: "I" }
    ]
  },
  {
    id: 2,
    text: "When making decisions, you typically:",
    options: [
      { id: "2a", text: "Rely on logic and objective analysis", dimension: "T" },
      { id: "2b", text: "Consider how it affects people and their feelings", dimension: "F" }
    ]
  },
  {
    id: 3,
    text: "You tend to focus more on:",
    options: [
      { id: "3a", text: "The concrete details and facts", dimension: "S" },
      { id: "3b", text: "The big picture and possibilities", dimension: "N" }
    ]
  },
  {
    id: 4,
    text: "You prefer environments that are:",
    options: [
      { id: "4a", text: "Structured and organized", dimension: "J" },
      { id: "4b", text: "Flexible and adaptable", dimension: "P" }
    ]
  },
  {
    id: 5,
    text: "When working on a project, you:",
    options: [
      { id: "5a", text: "Like to plan ahead and follow a schedule", dimension: "J" },
      { id: "5b", text: "Prefer to be spontaneous and adapt as you go", dimension: "P" }
    ]
  },
  {
    id: 6,
    text: "You regularly make new friends.",
    options: [
      { id: "6a", text: "Strongly Agree", dimension: "E" },
      { id: "6b", text: "Agree", dimension: "E" },
      { id: "6c", text: "Neutral", dimension: "E" },
      { id: "6d", text: "Disagree", dimension: "I" },
      { id: "6e", text: "Strongly Disagree", dimension: "I" }
    ]
  },
  {
    id: 7,
    text: "You spend a lot of time exploring unrealistic yet intriguing ideas.",
    options: [
      { id: "7a", text: "Strongly Agree", dimension: "N" },
      { id: "7b", text: "Agree", dimension: "N" },
      { id: "7c", text: "Neutral", dimension: "N" },
      { id: "7d", text: "Disagree", dimension: "S" },
      { id: "7e", text: "Strongly Disagree", dimension: "S" }
    ]
  },
  {
    id: 8,
    text: "Your travel plans are usually well thought out.",
    options: [
      { id: "8a", text: "Strongly Agree", dimension: "J" },
      { id: "8b", text: "Agree", dimension: "J" },
      { id: "8c", text: "Neutral", dimension: "J" },
      { id: "8d", text: "Disagree", dimension: "P" },
      { id: "8e", text: "Strongly Disagree", dimension: "P" }
    ]
  },
  {
    id: 9,
    text: "You often think about what you should have said in a conversation long after it has taken place.",
    options: [
      { id: "9a", text: "Strongly Agree", dimension: "I" },
      { id: "9b", text: "Agree", dimension: "I" },
      { id: "9c", text: "Neutral", dimension: "I" },
      { id: "9d", text: "Disagree", dimension: "E" },
      { id: "9e", text: "Strongly Disagree", dimension: "E" }
    ]
  },
  {
    id: 10,
    text: "If your friend is sad about something, you are more likely to offer emotional support than suggest solutions.",
    options: [
      { id: "10a", text: "Strongly Agree", dimension: "F" },
      { id: "10b", text: "Agree", dimension: "F" },
      { id: "10c", text: "Neutral", dimension: "F" },
      { id: "10d", text: "Disagree", dimension: "T" },
      { id: "10e", text: "Strongly Disagree", dimension: "T" }
    ]
  },
  {
    id: 11,
    text: "You rarely worry about how your actions affect other people.",
    options: [
      { id: "11a", text: "Strongly Agree", dimension: "T" },
      { id: "11b", text: "Agree", dimension: "T" },
      { id: "11c", text: "Neutral", dimension: "T" },
      { id: "11d", text: "Disagree", dimension: "F" },
      { id: "11e", text: "Strongly Disagree", dimension: "F" }
    ]
  },
  {
    id: 12,
    text: "Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.",
    options: [
      { id: "12a", text: "Strongly Agree", dimension: "P" },
      { id: "12b", text: "Agree", dimension: "P" },
      { id: "12c", text: "Neutral", dimension: "P" },
      { id: "12d", text: "Disagree", dimension: "J" },
      { id: "12e", text: "Strongly Disagree", dimension: "J" }
    ]
  },
  {
    id: 13,
    text: "You prefer concrete facts over abstract theories.",
    options: [
      { id: "13a", text: "Strongly Agree", dimension: "S" },
      { id: "13b", text: "Agree", dimension: "S" },
      { id: "13c", text: "Neutral", dimension: "S" },
      { id: "13d", text: "Disagree", dimension: "N" },
      { id: "13e", text: "Strongly Disagree", dimension: "N" }
    ]
  },
  {
    id: 14,
    text: "You find it difficult to introduce yourself to other people.",
    options: [
      { id: "14a", text: "Strongly Agree", dimension: "I" },
      { id: "14b", text: "Agree", dimension: "I" },
      { id: "14c", text: "Neutral", dimension: "I" },
      { id: "14d", text: "Disagree", dimension: "E" },
      { id: "14e", text: "Strongly Disagree", dimension: "E" }
    ]
  },
  {
    id: 15,
    text: "You often consult others before making important decisions.",
    options: [
      { id: "15a", text: "Strongly Agree", dimension: "F" },
      { id: "15b", text: "Agree", dimension: "F" },
      { id: "15c", text: "Neutral", dimension: "F" },
      { id: "15d", text: "Disagree", dimension: "T" },
      { id: "15e", text: "Strongly Disagree", dimension: "T" }
    ]
  },
  {
    id: 16,
    text: "You are usually the one who initiates conversations with others.",
    options: [
      { id: "16a", text: "Strongly Agree", dimension: "E" },
      { id: "16b", text: "Agree", dimension: "E" },
      { id: "16c", text: "Neutral", dimension: "E" },
      { id: "16d", text: "Disagree", dimension: "I" },
      { id: "16e", text: "Strongly Disagree", dimension: "I" }
    ]
  },
  {
    id: 17,
    text: "You value justice over mercy.",
    options: [
      { id: "17a", text: "Strongly Agree", dimension: "T" },
      { id: "17b", text: "Agree", dimension: "T" },
      { id: "17c", text: "Neutral", dimension: "T" },
      { id: "17d", text: "Disagree", dimension: "F" },
      { id: "17e", text: "Strongly Disagree", dimension: "F" }
    ]
  },
  {
    id: 18,
    text: "In group discussions, you tend to:",
    options: [
      { id: "18a", text: "Speak first and think later", dimension: "E" },
      { id: "18b", text: "Think first and speak later", dimension: "I" }
    ]
  },
  {
    id: 19,
    text: "When solving problems, you prefer to:",
    options: [
      { id: "19a", text: "Follow tried and tested methods", dimension: "S" },
      { id: "19b", text: "Try new, innovative approaches", dimension: "N" }
    ]
  },
  {
    id: 20,
    text: "When making decisions, you primarily consider:",
    options: [
      { id: "20a", text: "Objective facts and logic", dimension: "T" },
      { id: "20b", text: "People's feelings and harmony", dimension: "F" }
    ]
  },
  {
    id: 21,
    text: "Your gaming style is usually:",
    options: [
      { id: "21a", text: "Following a clear strategy", dimension: "J" },
      { id: "21b", text: "Going with the flow", dimension: "P" }
    ]
  },
  {
    id: 22,
    text: "At parties, you typically:",
    options: [
      { id: "22a", text: "Interact with many different people", dimension: "E" },
      { id: "22b", text: "Stick with a few close friends", dimension: "I" }
    ]
  },
  {
    id: 23,
    text: "You prefer games that:",
    options: [
      { id: "23a", text: "Have clear rules and objectives", dimension: "S" },
      { id: "23b", text: "Allow for creative interpretation", dimension: "N" }
    ]
  },
  {
    id: 24,
    text: "In team games, you focus more on:",
    options: [
      { id: "24a", text: "Winning and achievement", dimension: "T" },
      { id: "24b", text: "Team harmony and fun", dimension: "F" }
    ]
  },
  {
    id: 25,
    text: "When starting a new game, you prefer to:",
    options: [
      { id: "25a", text: "Read all tutorials first", dimension: "J" },
      { id: "25b", text: "Jump in and figure it out", dimension: "P" }
    ]
  },
  {
    id: 26,
    text: "You find more energy in:",
    options: [
      { id: "26a", text: "Group activities and social events", dimension: "E" },
      { id: "26b", text: "Solo activities and quiet time", dimension: "I" }
    ]
  },
  {
    id: 27,
    text: "You are more interested in:",
    options: [
      { id: "27a", text: "What is actual and present", dimension: "S" },
      { id: "27b", text: "What is possible and future", dimension: "N" }
    ]
  },
  {
    id: 28,
    text: "In conflicts, you tend to:",
    options: [
      { id: "28a", text: "Seek logical solutions", dimension: "T" },
      { id: "28b", text: "Consider everyone's feelings", dimension: "F" }
    ]
  },
  {
    id: 29,
    text: "Your room organization is usually:",
    options: [
      { id: "29a", text: "Neat and structured", dimension: "J" },
      { id: "29b", text: "Flexible and adaptable", dimension: "P" }
    ]
  },
  {
    id: 30,
    text: "In conversations, you often:",
    options: [
      { id: "30a", text: "Speak more than listen", dimension: "E" },
      { id: "30b", text: "Listen more than speak", dimension: "I" }
    ]
  },
  {
    id: 31, 
    text: "You are more drawn to:",
    options: [
      { id: "31a", text: "Practical skills and experiences", dimension: "S" },
      { id: "31b", text: "Abstract theories and concepts", dimension: "N" }
    ]
  },
  {
    id: 32,
    text: "When giving feedback, you tend to be:",
    options: [
      { id: "32a", text: "Direct and objective", dimension: "T" },
      { id: "32b", text: "Tactful and supportive", dimension: "F" }
    ]
  },
  {
    id: 33,
    text: "Your calendar is typically:",
    options: [
      { id: "33a", text: "Well-planned and organized", dimension: "J" },
      { id: "33b", text: "Flexible and spontaneous", dimension: "P" }
    ]
  },
  {
    id: 34,
    text: "You prefer working:",
    options: [
      { id: "34a", text: "In a team environment", dimension: "E" },
      { id: "34b", text: "Independently", dimension: "I" }
    ]
  },
  {
    id: 35,
    text: "You are more likely to trust:",
    options: [
      { id: "35a", text: "Your direct experiences", dimension: "S" },
      { id: "35b", text: "Your gut feelings", dimension: "N" }
    ]
  },
  {
    id: 36,
    text: "You prefer books/movies that:",
    options: [
      { id: "36a", text: "Have clearly explained plots and endings", dimension: "J" },
      { id: "36b", text: "Leave things open to interpretation", dimension: "P" }
    ]
  },
  {
    id: 37,
    text: "When faced with a challenging problem, you first:",
    options: [
      { id: "37a", text: "Break it down into smaller, practical steps", dimension: "S" },
      { id: "37b", text: "Look for underlying patterns or concepts", dimension: "N" }
    ]
  },
  {
    id: 38,
    text: "You prefer to learn through:",
    options: [
      { id: "38a", text: "Practical application and experience", dimension: "S" },
      { id: "38b", text: "Theory and conceptual understanding", dimension: "N" }
    ]
  },
  {
    id: 39,
    text: "When someone criticizes your work, you focus on:",
    options: [
      { id: "39a", text: "The logical validity of their criticism", dimension: "T" },
      { id: "39b", text: "How the delivery made you feel", dimension: "F" }
    ]
  },
  {
    id: 40,
    text: "In a debate, you value more:",
    options: [
      { id: "40a", text: "Arriving at the objective truth", dimension: "T" },
      { id: "40b", text: "Maintaining harmonious relationships", dimension: "F" }
    ]
  },
  {
    id: 41,
    text: "You tend to be more:",
    options: [
      { id: "41a", text: "Realistic than optimistic", dimension: "S" },
      { id: "41b", text: "Optimistic than realistic", dimension: "N" }
    ]
  },
  {
    id: 42,
    text: "You find routine:",
    options: [
      { id: "42a", text: "Comforting and efficient", dimension: "J" },
      { id: "42b", text: "Boring and constraining", dimension: "P" }
    ]
  },
  {
    id: 43,
    text: "When telling a story, you focus more on:",
    options: [
      { id: "43a", text: "Specific details and what exactly happened", dimension: "S" },
      { id: "43b", text: "The meaning and implications of the events", dimension: "N" }
    ]
  },
  {
    id: 44,
    text: "You tend to make decisions:",
    options: [
      { id: "44a", text: "Quickly and confidently", dimension: "J" },
      { id: "44b", text: "After careful consideration of all options", dimension: "P" }
    ]
  },
  {
    id: 45,
    text: "You find social interactions:",
    options: [
      { id: "45a", text: "Energizing and stimulating", dimension: "E" },
      { id: "45b", text: "Draining and taxing", dimension: "I" }
    ]
  },
  {
    id: 46,
    text: "You prefer friends who are:",
    options: [
      { id: "46a", text: "Reliable and consistent", dimension: "S" },
      { id: "46b", text: "Creative and unpredictable", dimension: "N" }
    ]
  },
  {
    id: 47,
    text: "You consider yourself more:",
    options: [
      { id: "47a", text: "Analytical and logical", dimension: "T" },
      { id: "47b", text: "Empathetic and compassionate", dimension: "F" }
    ]
  },
  {
    id: 48,
    text: "You prefer your living space to be:",
    options: [
      { id: "48a", text: "Organized with everything in its place", dimension: "J" },
      { id: "48b", text: "Comfortable with some creative disorder", dimension: "P" }
    ]
  },
  {
    id: 49,
    text: "When making plans with friends, you prefer:",
    options: [
      { id: "49a", text: "Having a clear plan ahead of time", dimension: "J" },
      { id: "49b", text: "Going with the flow and deciding in the moment", dimension: "P" }
    ]
  },
  {
    id: 50,
    text: "You would rather work for a manager who is:",
    options: [
      { id: "50a", text: "Fair but may be impersonal", dimension: "T" },
      { id: "50b", text: "Caring but may show favoritism", dimension: "F" }
    ]
  }
];

// Personality types data
const personalityTypes = {
  "ISTJ": {
    type: "ISTJ",
    name: "The Inspector",
    description: "Practical, logical, and detail-oriented. They are dependable and take their responsibilities seriously."
  },
  "INFJ": {
    type: "INFJ",
    name: "The Advocate",
    description: "Creative, gentle, and caring. They seek meaning and connection, and want to understand what motivates people."
  },
  "ENTJ": {
    type: "ENTJ",
    name: "The Commander",
    description: "Strategic, decisive, and organized. Natural leaders who enjoy planning and implementing solutions."
  },
  "ENFP": {
    type: "ENFP",
    name: "The Campaigner",
    description: "Enthusiastic, creative, and sociable. They are free spirits who find meaning in personal connections."
  },
  "INTJ": {
    type: "INTJ",
    name: "The Architect",
    description: "Imaginative and strategic thinkers, with a plan for everything. INTJs are analytical problem-solvers who thrive on complex intellectual challenges."
  },
  "INTP": {
    type: "INTP",
    name: "The Logician",
    description: "Innovative inventors with an unquenchable thirst for knowledge. INTPs are known for their brilliant theories and unrelenting logic."
  },
  "ISFJ": {
    type: "ISFJ",
    name: "The Defender",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are industrious caretakers."
  },
  "ISFP": {
    type: "ISFP",
    name: "The Adventurer",
    description: "Flexible and charming artists, always ready to explore and experience something new. ISFPs are sensitive free spirits."
  },
  "INFP": {
    type: "INFP",
    name: "The Mediator",
    description: "Poetic, kind, and altruistic people, always eager to help a good cause. INFPs are idealistic and guided by their core personal values."
  },
  "ESFJ": {
    type: "ESFJ",
    name: "The Consul",
    description: "Extraordinarily caring, social and popular people, always eager to help. ESFJs are caring helpers who provide for others' needs."
  },
  "ESFP": {
    type: "ESFP",
    name: "The Entertainer",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them. ESFPs are vibrant entertainers."
  },
  "ENFJ": {
    type: "ENFJ",
    name: "The Protagonist",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners. ENFJs are natural leaders full of passion and charisma."
  },
  "ISTP": {
    type: "ISTP",
    name: "The Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools. ISTPs are independent technical problem-solvers."
  },
  "ESTP": {
    type: "ESTP",
    name: "The Entrepreneur",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge. ESTPs are driven by action."
  },
  "ESTJ": {
    type: "ESTJ",
    name: "The Executive",
    description: "Excellent administrators, unsurpassed at managing things – or people. ESTJs value clear structure and traditional approaches."
  },
  "ENTP": {
    type: "ENTP",
    name: "The Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs are innovative visionaries with an appetite for debate."
  }
};

// Helper function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Quiz functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the quiz page
  const quizContainer = document.getElementById('quiz-container');
  if (quizContainer) {
    let currentQuestionIndex = 0;
    let selectedOptions = {};
    const nextButton = document.getElementById('next-button');
    const progressBar = document.getElementById('progress-bar');
    
    // Set up radio button event listeners
    document.querySelectorAll('input[name="answer"]').forEach(radio => {
      radio.addEventListener('change', function() {
        nextButton.classList.remove('disabled');
      });
    });
    
    // Set up next button event listener
    nextButton.addEventListener('click', function() {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (selectedOption) {
        selectedOptions[currentQuestionIndex] = {
          questionId: quizQuestions[currentQuestionIndex].id,
          optionId: selectedOption.value,
          dimension: selectedOption.value
        };
        
        if (currentQuestionIndex < quizQuestions.length - 1) {
          currentQuestionIndex++;
          updateQuestion();
        } else {
          // Calculate results and redirect
          const results = calculateResults();
          window.location.href = `results.html?type=${results.type}`;
        }
      }
    });
    
    function updateQuestion() {
      const question = quizQuestions[currentQuestionIndex];
      const questionText = document.getElementById('question-text');
      const optionsContainer = document.getElementById('options-container');
      const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
      
      // Update progress
      progressBar.style.width = `${progressPercentage}%`;
      document.querySelector('.quiz-progress .text-muted-foreground').textContent = 
        `${Math.round(progressPercentage)}% Completed`;
      document.querySelectorAll('.quiz-progress .text-muted-foreground')[1].textContent = 
        `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
      
      // Update question
      questionText.textContent = question.text;
      
      // Update options
      optionsContainer.innerHTML = '';
      question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'flex items-center space-x-3 p-3 rounded-md transition-colors hover:bg-white/30';
        optionElement.innerHTML = `
          <input type="radio" name="answer" id="option-${index}" value="${option.dimension}" class="radio-input">
          <label for="option-${index}" class="font-medium cursor-pointer flex-grow">
            ${option.text}
          </label>
        `;
        optionsContainer.appendChild(optionElement);
      });
      
      // Disable next button until an option is selected
      nextButton.classList.add('disabled');
      
      // Set up radio button event listeners for new options
      document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener('change', function() {
          nextButton.classList.remove('disabled');
        });
      });
    }
    
    function calculateResults() {
      const dimensions = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
      
      // Count selections for each dimension
      Object.values(selectedOptions).forEach(selection => {
        dimensions[selection.dimension]++;
      });
      
      // Determine type
      const type = 
        (dimensions.E > dimensions.I ? 'E' : 'I') +
        (dimensions.N > dimensions.S ? 'N' : 'S') +
        (dimensions.F > dimensions.T ? 'F' : 'T') +
        (dimensions.P > dimensions.J ? 'P' : 'J');
      
      return {
        type,
        percentages: {
          E: (dimensions.E / (dimensions.E + dimensions.I)) * 100 || 0,
          I: (dimensions.I / (dimensions.E + dimensions.I)) * 100 || 0,
          S: (dimensions.S / (dimensions.S + dimensions.N)) * 100 || 0,
          N: (dimensions.N / (dimensions.S + dimensions.N)) * 100 || 0,
          T: (dimensions.T / (dimensions.T + dimensions.F)) * 100 || 0,
          F: (dimensions.F / (dimensions.T + dimensions.F)) * 100 || 0,
          J: (dimensions.J / (dimensions.J + dimensions.P)) * 100 || 0,
          P: (dimensions.P / (dimensions.J + dimensions.P)) * 100 || 0
        }
      };
    }
  }
  
  // Results page functionality
  const personalityType = document.getElementById('personality-type');
  if (personalityType) {
    const typeParam = getUrlParameter('type') || 'INFJ'; // Default to INFJ if not specified
    const personalityData = personalityTypes[typeParam] || {
      type: typeParam,
      name: "Unknown Type",
      description: "We couldn't find detailed information about this personality type."
    };
    
    // Update personality information
    document.getElementById('personality-type').textContent = personalityData.type;
    document.getElementById('personality-name').textContent = personalityData.name;
    document.getElementById('personality-description').textContent = personalityData.description;
    
    // In a real implementation, you would also update strengths, weaknesses, and chart data
    // based on the results stored in localStorage or a database
  }
});
