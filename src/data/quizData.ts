
export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "You regularly make new friends.",
    options: [
      { id: "1a", text: "Strongly Agree", dimension: "E" },
      { id: "1b", text: "Agree", dimension: "E" },
      { id: "1c", text: "Neutral", dimension: "E" },
      { id: "1d", text: "Disagree", dimension: "I" },
      { id: "1e", text: "Strongly Disagree", dimension: "I" }
    ]
  },
  {
    id: 2,
    text: "You spend a lot of time exploring unrealistic yet intriguing ideas.",
    options: [
      { id: "2a", text: "Strongly Agree", dimension: "N" },
      { id: "2b", text: "Agree", dimension: "N" },
      { id: "2c", text: "Neutral", dimension: "N" },
      { id: "2d", text: "Disagree", dimension: "S" },
      { id: "2e", text: "Strongly Disagree", dimension: "S" }
    ]
  },
  {
    id: 3,
    text: "Your travel plans are usually well thought out.",
    options: [
      { id: "3a", text: "Strongly Agree", dimension: "J" },
      { id: "3b", text: "Agree", dimension: "J" },
      { id: "3c", text: "Neutral", dimension: "J" },
      { id: "3d", text: "Disagree", dimension: "P" },
      { id: "3e", text: "Strongly Disagree", dimension: "P" }
    ]
  },
  {
    id: 4,
    text: "You often think about what you should have said in a conversation long after it has taken place.",
    options: [
      { id: "4a", text: "Strongly Agree", dimension: "I" },
      { id: "4b", text: "Agree", dimension: "I" },
      { id: "4c", text: "Neutral", dimension: "I" },
      { id: "4d", text: "Disagree", dimension: "E" },
      { id: "4e", text: "Strongly Disagree", dimension: "E" }
    ]
  },
  {
    id: 5,
    text: "If your friend is sad about something, you are more likely to offer emotional support than suggest solutions.",
    options: [
      { id: "5a", text: "Strongly Agree", dimension: "F" },
      { id: "5b", text: "Agree", dimension: "F" },
      { id: "5c", text: "Neutral", dimension: "F" },
      { id: "5d", text: "Disagree", dimension: "T" },
      { id: "5e", text: "Strongly Disagree", dimension: "T" }
    ]
  },
  {
    id: 6,
    text: "You rarely worry about how your actions affect other people.",
    options: [
      { id: "6a", text: "Strongly Agree", dimension: "T" },
      { id: "6b", text: "Agree", dimension: "T" },
      { id: "6c", text: "Neutral", dimension: "T" },
      { id: "6d", text: "Disagree", dimension: "F" },
      { id: "6e", text: "Strongly Disagree", dimension: "F" }
    ]
  },
  {
    id: 7,
    text: "Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.",
    options: [
      { id: "7a", text: "Strongly Agree", dimension: "P" },
      { id: "7b", text: "Agree", dimension: "P" },
      { id: "7c", text: "Neutral", dimension: "P" },
      { id: "7d", text: "Disagree", dimension: "J" },
      { id: "7e", text: "Strongly Disagree", dimension: "J" }
    ]
  },
  {
    id: 8,
    text: "You prefer concrete facts over abstract theories.",
    options: [
      { id: "8a", text: "Strongly Agree", dimension: "S" },
      { id: "8b", text: "Agree", dimension: "S" },
      { id: "8c", text: "Neutral", dimension: "S" },
      { id: "8d", text: "Disagree", dimension: "N" },
      { id: "8e", text: "Strongly Disagree", dimension: "N" }
    ]
  },
  {
    id: 9,
    text: "You find it difficult to introduce yourself to other people.",
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
    text: "You often consult others before making important decisions.",
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
    text: "You are usually the one who initiates conversations with others.",
    options: [
      { id: "11a", text: "Strongly Agree", dimension: "E" },
      { id: "11b", text: "Agree", dimension: "E" },
      { id: "11c", text: "Neutral", dimension: "E" },
      { id: "11d", text: "Disagree", dimension: "I" },
      { id: "11e", text: "Strongly Disagree", dimension: "I" }
    ]
  },
  {
    id: 12,
    text: "You value justice over mercy.",
    options: [
      { id: "12a", text: "Strongly Agree", dimension: "T" },
      { id: "12b", text: "Agree", dimension: "T" },
      { id: "12c", text: "Neutral", dimension: "T" },
      { id: "12d", text: "Disagree", dimension: "F" },
      { id: "12e", text: "Strongly Disagree", dimension: "F" }
    ]
  }
];

export interface PersonalityType {
  type: string;
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
}

export const personalityTypes: Record<string, PersonalityType> = {
  "INTJ": {
    type: "INTJ",
    name: "The Architect",
    description: "Imaginative and strategic thinkers, with a plan for everything. INTJs are analytical problem-solvers who thrive on complex intellectual challenges and value logical thinking.",
    strengths: [
      "Strategic thinking",
      "High self-confidence",
      "Independent",
      "Hard-working and determined",
      "Open-minded",
      "Original and insightful"
    ],
    weaknesses: [
      "Overly critical",
      "Can be dismissive of emotions",
      "Perfectionistic tendencies",
      "May struggle with romantic relationships",
      "Difficulty working with others"
    ]
  },
  "INTP": {
    type: "INTP",
    name: "The Logician",
    description: "Innovative inventors with an unquenchable thirst for knowledge. INTPs are known for their brilliant theories and unrelenting logic, always looking for patterns and logical explanations.",
    strengths: [
      "Analytical thinking",
      "Original ideas",
      "Open-minded",
      "Objective",
      "Honest and straightforward",
      "Enthusiastic about knowledge"
    ],
    weaknesses: [
      "Disconnected from emotions",
      "Overthinking",
      "Socially distant at times",
      "Difficulty following rules",
      "Procrastination"
    ]
  },
  "ENTJ": {
    type: "ENTJ",
    name: "The Commander",
    description: "Bold, imaginative and strong-willed leaders, always finding a way – or making one. ENTJs are strategic planners who value knowledge and competence above all.",
    strengths: [
      "Efficient",
      "Energetic",
      "Self-confident",
      "Strong-willed",
      "Strategic thinking",
      "Charismatic and inspiring"
    ],
    weaknesses: [
      "Stubbornness and dominance",
      "Intolerance",
      "Impatience",
      "Arrogance",
      "Poor handling of emotions"
    ]
  },
  "ENTP": {
    type: "ENTP",
    name: "The Debater",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs are innovative visionaries with an appetite for debate and boundless creativity.",
    strengths: [
      "Innovative",
      "Knowledgeable",
      "Excellent brainstorming abilities",
      "Energetic",
      "Charismatic",
      "Excellent communicators"
    ],
    weaknesses: [
      "Very argumentative",
      "Insensitive at times",
      "Intolerant",
      "Poor practical skills",
      "Difficulty focusing"
    ]
  },
  "INFJ": {
    type: "INFJ",
    name: "The Advocate",
    description: "Quiet and mystical, yet very inspiring and tireless idealists. INFJs have a deep sense of idealism and integrity, being capable of profound connection with others.",
    strengths: [
      "Creative",
      "Insightful",
      "Principled",
      "Passionate",
      "Altruistic",
      "Deep"
    ],
    weaknesses: [
      "Sensitive to criticism",
      "Extremely private",
      "Perfectionistic",
      "Avoiding conflict",
      "Burnout prone"
    ]
  },
  "INFP": {
    type: "INFP",
    name: "The Mediator",
    description: "Poetic, kind, and altruistic people, always eager to help a good cause. INFPs are idealistic and guided by their core personal values and deeply held beliefs.",
    strengths: [
      "Idealistic",
      "Empathetic",
      "Creative",
      "Open-minded",
      "Passionate",
      "Dedicated"
    ],
    weaknesses: [
      "Unrealistic",
      "Self-isolation tendencies",
      "Emotionally vulnerable",
      "Difficult to get to know",
      "Impractical"
    ]
  },
  "ENFJ": {
    type: "ENFJ",
    name: "The Protagonist",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners. ENFJs are natural leaders full of passion and charisma, reaching out to help others.",
    strengths: [
      "Tolerant",
      "Reliable",
      "Charismatic",
      "Altruistic",
      "Natural leaders",
      "Dedicated to growth"
    ],
    weaknesses: [
      "Overly idealistic",
      "Too selfless",
      "Sensitive to criticism",
      "Inflexible",
      "Reluctance to face negative situations"
    ]
  },
  "ENFP": {
    type: "ENFP",
    name: "The Campaigner",
    description: "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile. ENFPs are people-centered creators with a focus on possibilities and contagious enthusiasm.",
    strengths: [
      "Curious",
      "Observant",
      "Energetic",
      "Excellent communicators",
      "Friendly and popular",
      "Innovative"
    ],
    weaknesses: [
      "Poor practical skills",
      "Easily stressed",
      "Unfocused",
      "Overthinking",
      "Restlessness"
    ]
  },
  "ISTJ": {
    type: "ISTJ",
    name: "The Logistician",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted. ISTJs value traditions and loyalty, being responsible organizers who value order and clarity.",
    strengths: [
      "Honest and direct",
      "Strong-willed and dutiful",
      "Very responsible",
      "Calm and practical",
      "Create and enforce order",
      "Methodical and precise"
    ],
    weaknesses: [
      "Stubborn",
      "Insensitive to emotions",
      "Always by the book",
      "Judgmental",
      "Blunt"
    ]
  },
  "ISFJ": {
    type: "ISFJ",
    name: "The Defender",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are industrious caretakers, loyal to traditions and committed to kindness.",
    strengths: [
      "Supportive",
      "Reliable",
      "Observant",
      "Patient",
      "Devoted and loyal",
      "Hard-working"
    ],
    weaknesses: [
      "Shy and reticent",
      "Overload themselves",
      "Reluctant to change",
      "Too altruistic",
      "Represses feelings"
    ]
  },
  "ESTJ": {
    type: "ESTJ",
    name: "The Executive",
    description: "Excellent administrators, unsurpassed at managing things – or people. ESTJs value clear structure and traditional approaches, being methodical managers of established systems.",
    strengths: [
      "Dedicated",
      "Strong-willed",
      "Direct and honest",
      "Loyal and patient",
      "Reliable",
      "Excellent organizers"
    ],
    weaknesses: [
      "Inflexible and stubborn",
      "Uncomfortable with emotions",
      "Judgmental",
      "Impatient",
      "Difficulty with innovation"
    ]
  },
  "ESFJ": {
    type: "ESFJ",
    name: "The Consul",
    description: "Extraordinarily caring, social and popular people, always eager to help. ESFJs are caring helpers who provide for others' needs with warmth and structure.",
    strengths: [
      "Strong practical skills",
      "Strong sense of duty",
      "Loyal and reliable",
      "Sensitive and warm",
      "Good at connecting with others",
      "Naturally social"
    ],
    weaknesses: [
      "Vulnerable to criticism",
      "Inflexible",
      "Reluctant to improvise",
      "Needy for social validation",
      "Too selfless"
    ]
  },
  "ISTP": {
    type: "ISTP",
    name: "The Virtuoso",
    description: "Bold and practical experimenters, masters of all kinds of tools. ISTPs are independent technical problem-solvers who enjoy understanding how things work.",
    strengths: [
      "Optimistic and energetic",
      "Creative",
      "Spontaneous",
      "Rational and practical",
      "Excellent in crisis",
      "Relaxed"
    ],
    weaknesses: [
      "Stubborn",
      "Insensitive",
      "Private and reserved",
      "Bored by theory",
      "Dislike commitment"
    ]
  },
  "ISFP": {
    type: "ISFP",
    name: "The Adventurer",
    description: "Flexible and charming artists, always ready to explore and experience something new. ISFPs are sensitive free spirits who enjoy living in the moment and exploring beauty.",
    strengths: [
      "Charming",
      "Passionate",
      "Imaginative",
      "Open-minded",
      "Loyal",
      "Good in crises"
    ],
    weaknesses: [
      "Fiercely independent",
      "Unpredictable",
      "Easily stressed",
      "Avoids conflict",
      "Difficulty planning ahead"
    ]
  },
  "ESTP": {
    type: "ESTP",
    name: "The Entrepreneur",
    description: "Smart, energetic and very perceptive people, who truly enjoy living on the edge. ESTPs are driven by action, resourceful opportunists with excellent people skills.",
    strengths: [
      "Bold",
      "Rational thinking",
      "Direct",
      "Sociable",
      "Practical",
      "Excellent problem-solvers"
    ],
    weaknesses: [
      "Impatient",
      "Risk-prone",
      "Blunt or insensitive",
      "Easily bored",
      "Poor long-term planners"
    ]
  },
  "ESFP": {
    type: "ESFP",
    name: "The Entertainer",
    description: "Spontaneous, energetic and enthusiastic people – life is never boring around them. ESFPs are vibrant entertainers who charm and inspire others with their zest for life.",
    strengths: [
      "Bold",
      "Original",
      "Aesthetics-focused",
      "Excellent people skills",
      "Observant",
      "Practical"
    ],
    weaknesses: [
      "Sensitive to criticism",
      "Easily bored",
      "Poor long-term planners",
      "Difficult with theoretical concepts",
      "Conflict-averse"
    ]
  }
};
