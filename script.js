
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
  }
];

// Shortened list of questions for demo purposes
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
