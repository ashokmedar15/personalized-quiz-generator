import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

// Comprehensive educational content database
const EDUCATIONAL_CONTENT = {
  'Mathematics': {
    'Algebra': {
      content: `Algebra is a fundamental branch of mathematics that deals with symbols and the rules for manipulating these symbols. It provides a powerful language for describing relationships and solving problems.

**What is Algebra?**
Algebra extends arithmetic by introducing variables (symbols that represent unknown values) and allows us to solve equations and inequalities. It's the foundation for advanced mathematics and has applications in science, engineering, economics, and many other fields.

**Key Components:**
- Variables (x, y, z) represent unknown values
- Constants are fixed numbers
- Expressions combine variables and constants with operations
- Equations show relationships between expressions
- Functions describe how one quantity depends on another

**Why Study Algebra?**
Algebra develops logical thinking, problem-solving skills, and abstract reasoning. It's essential for understanding patterns, making predictions, and modeling real-world situations.`,
      keyConcepts: [
        'Variables and Constants: Symbols that represent numbers and fixed values',
        'Linear Equations: First-degree equations like ax + b = c',
        'Quadratic Equations: Second-degree equations like ax² + bx + c = 0',
        'Polynomials: Expressions with multiple terms and powers',
        'Functions: Relationships where each input has exactly one output'
      ],
      examples: [
        'Solve for x: 2x + 5 = 13\nStep 1: Subtract 5 from both sides\n2x = 8\nStep 2: Divide both sides by 2\nx = 4',
        'Factor: x² - 4\nThis is a difference of squares\nx² - 4 = (x + 2)(x - 2)',
        'Graph: y = 2x + 1\nThis is a linear function with slope 2 and y-intercept 1\nPlot points: (0,1), (1,3), (2,5)'
      ],
      resources: [
        'https://www.khanacademy.org/math/algebra',
        'https://www.mathsisfun.com/algebra/',
        'https://www.purplemath.com/modules/'
      ]
    },
    'Calculus': {
      content: `Calculus is the mathematical study of continuous change, developed independently by Isaac Newton and Gottfried Leibniz in the 17th century. It's one of the most important branches of mathematics with applications in physics, engineering, economics, and many other fields.

**What is Calculus?**
Calculus consists of two main branches: differential calculus (concerned with rates of change and slopes of curves) and integral calculus (concerned with accumulation of quantities and areas under curves).

**Key Concepts:**
- Limits: The value a function approaches as the input approaches a certain point
- Derivatives: Rates of change and slopes of tangent lines
- Integrals: Accumulation of quantities and areas under curves
- Applications: Optimization, motion, growth and decay, area and volume

**Why Study Calculus?**
Calculus is essential for understanding how things change over time, optimizing processes, and modeling complex systems. It's the language of modern science and engineering.`,
      keyConcepts: [
        'Limits: The foundation of calculus, describing behavior as x approaches a value',
        'Derivatives: Measure instantaneous rates of change and slopes',
        'Integrals: Calculate accumulated quantities and areas',
        'Applications: Optimization, motion analysis, growth modeling',
        'Fundamental Theorem: Links derivatives and integrals'
      ],
      examples: [
        'Find the derivative of f(x) = x²\nUsing power rule: f\'(x) = 2x\nThis gives the slope at any point x',
        'Calculate ∫x dx\nUsing power rule for integration: ∫x dx = x²/2 + C\nC is the constant of integration',
        'Find the limit: lim(x→0) sin(x)/x = 1\nThis is a fundamental limit in calculus'
      ],
      resources: [
        'https://www.khanacademy.org/math/calculus-1',
        'https://www.mathsisfun.com/calculus/',
        'https://tutorial.math.lamar.edu/classes/calci/calci.aspx'
      ]
    },
    'Geometry': {
      content: `Geometry is the branch of mathematics concerned with questions of shape, size, relative position of figures, and the properties of space. It's one of the oldest branches of mathematics, with roots in ancient civilizations.

**What is Geometry?**
Geometry studies spatial relationships and shapes. It includes plane geometry (2D shapes), solid geometry (3D shapes), and coordinate geometry (using coordinate systems to study geometric figures).

**Key Areas:**
- Euclidean Geometry: The geometry of flat surfaces
- Coordinate Geometry: Using algebra to study geometry
- Trigonometry: Relationships between angles and sides of triangles
- Solid Geometry: Three-dimensional shapes and their properties

**Why Study Geometry?**
Geometry develops spatial reasoning, logical thinking, and problem-solving skills. It has applications in architecture, engineering, art, navigation, and many other fields.`,
      keyConcepts: [
        'Points, Lines, and Planes: Basic geometric elements',
        'Angles and Triangles: Fundamental geometric shapes',
        'Circles and Polygons: Regular and irregular shapes',
        'Area and Perimeter: Measurements of 2D figures',
        'Volume and Surface Area: Measurements of 3D figures'
      ],
      examples: [
        'Area of a circle: A = πr²\nWhere r is the radius and π ≈ 3.14159',
        'Pythagorean theorem: a² + b² = c²\nFor right triangles, where c is the hypotenuse',
        'Volume of a sphere: V = (4/3)πr³\nWhere r is the radius'
      ],
      resources: [
        'https://www.khanacademy.org/math/geometry',
        'https://www.mathsisfun.com/geometry/',
        'https://www.mathopenref.com/'
      ]
    }
  },
  'Computer Science': {
    'Programming': {
      content: `Programming is the process of creating a set of instructions that tell a computer how to perform a task. It's the foundation of software development and is essential in today's digital world.

**What is Programming?**
Programming involves writing code using programming languages to solve problems, automate tasks, and create software applications. It combines logic, creativity, and problem-solving skills.

**Key Concepts:**
- Variables: Store and manipulate data
- Control Structures: Make decisions and repeat actions
- Functions: Organize code into reusable blocks
- Data Structures: Organize and store data efficiently
- Algorithms: Step-by-step problem-solving procedures

**Why Learn Programming?**
Programming develops logical thinking, problem-solving skills, and creativity. It opens doors to careers in software development, data science, artificial intelligence, and many other fields.`,
      keyConcepts: [
        'Variables and Data Types: Store different kinds of information',
        'Control Structures: if/else statements, loops, and switches',
        'Functions and Methods: Reusable blocks of code',
        'Object-Oriented Programming: Organizing code into objects',
        'Algorithms and Data Structures: Efficient problem-solving'
      ],
      examples: [
        'Python: print("Hello, World!")\nOutput: Hello, World!',
        'JavaScript: let x = 5;\nDeclares a variable x with value 5',
        'Java: public class Main { }\nDefines a class named Main'
      ],
      resources: [
        'https://www.khanacademy.org/computing/computer-programming',
        'https://www.codecademy.com/',
        'https://www.freecodecamp.org/'
      ]
    },
    'Data Structures': {
      content: `Data structures are specialized formats for organizing and storing data efficiently. They are fundamental to computer science and are essential for designing efficient algorithms.

**What are Data Structures?**
Data structures are ways of organizing data so that it can be accessed and modified efficiently. Different data structures are suited for different types of applications and operations.

**Key Types:**
- Arrays: Ordered collections of elements
- Linked Lists: Elements connected by pointers
- Stacks: Last-in, first-out (LIFO) structures
- Queues: First-in, first-out (FIFO) structures
- Trees: Hierarchical data structures
- Graphs: Networks of connected nodes

**Why Study Data Structures?**
Understanding data structures helps you choose the right tool for the job, write more efficient code, and solve complex problems effectively.`,
      keyConcepts: [
        'Arrays and Lists: Ordered collections with indexed access',
        'Stacks and Queues: Specialized linear data structures',
        'Trees and Graphs: Hierarchical and networked structures',
        'Hash Tables: Fast key-value storage and retrieval',
        'Heaps and Priority Queues: Specialized tree structures'
      ],
      examples: [
        'Array: [1, 2, 3, 4, 5]\nAccess element at index 2: array[2] = 3',
        'Stack: LIFO (Last In, First Out)\nPush 1,2,3 → Pop: 3,2,1',
        'Queue: FIFO (First In, First Out)\nEnqueue 1,2,3 → Dequeue: 1,2,3'
      ],
      resources: [
        'https://www.geeksforgeeks.org/data-structures/',
        'https://visualgo.net/en',
        'https://www.programiz.com/dsa'
      ]
    },
    'Algorithms': {
      content: `An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation. Algorithms are the heart of computer science.

**What are Algorithms?**
Algorithms are step-by-step procedures for solving problems. They can be expressed in natural language, pseudocode, or programming languages. Good algorithms are efficient, correct, and easy to understand.

**Key Categories:**
- Searching: Finding specific elements in data
- Sorting: Arranging data in a particular order
- Graph Algorithms: Working with networks and relationships
- Dynamic Programming: Solving complex problems by breaking them down
- Greedy Algorithms: Making locally optimal choices

**Why Study Algorithms?**
Algorithms are essential for efficient problem-solving, software optimization, and understanding computational complexity. They're fundamental to all areas of computer science.`,
      keyConcepts: [
        'Searching Algorithms: Linear search, binary search, depth-first search',
        'Sorting Algorithms: Bubble sort, quick sort, merge sort',
        'Graph Algorithms: Shortest path, minimum spanning tree',
        'Dynamic Programming: Memoization and tabulation',
        'Greedy Algorithms: Local optimization strategies'
      ],
      examples: [
        'Binary Search: O(log n)\nDivide and conquer approach for sorted arrays',
        'Bubble Sort: O(n²)\nSimple but inefficient sorting algorithm',
        'Quick Sort: O(n log n) average\nEfficient divide-and-conquer sorting'
      ],
      resources: [
        'https://www.khanacademy.org/computing/computer-science/algorithms',
        'https://www.geeksforgeeks.org/fundamentals-of-algorithms/',
        'https://algoexpert.io/'
      ]
    }
  },
  'Physics': {
    'Mechanics': {
      content: `Classical mechanics is the study of the motion of bodies under the action of physical forces. It's one of the oldest and most fundamental branches of physics, developed by scientists like Galileo, Newton, and others.

**What is Mechanics?**
Mechanics describes how objects move and interact under the influence of forces. It includes kinematics (description of motion) and dynamics (causes of motion). It's the foundation for understanding the physical world.

**Key Areas:**
- Kinematics: Description of motion without considering causes
- Dynamics: Study of forces and their effects on motion
- Energy: Different forms and conservation principles
- Momentum: Linear and angular momentum conservation
- Gravitation: Universal gravitational force

**Why Study Mechanics?**
Mechanics is essential for understanding how the world works, from simple motion to complex systems. It's the foundation for engineering, astronomy, and many other sciences.`,
      keyConcepts: [
        'Newton\'s Laws: Fundamental principles of motion',
        'Kinematics: Position, velocity, acceleration relationships',
        'Dynamics: Force, mass, and acceleration connections',
        'Energy: Kinetic, potential, and conservation',
        'Momentum: Linear and angular momentum principles'
      ],
      examples: [
        'F = ma (Newton\'s Second Law)\nForce equals mass times acceleration',
        'KE = ½mv² (Kinetic Energy)\nEnergy of motion depends on mass and velocity',
        'F = G(m₁m₂)/r² (Gravitational Force)\nUniversal law of gravitation'
      ],
      resources: [
        'https://www.khanacademy.org/science/physics',
        'https://www.physicsclassroom.com/',
        'https://hyperphysics.phy-astr.gsu.edu/'
      ]
    },
    'Electromagnetism': {
      content: `Electromagnetism is a branch of physics involving the study of the electromagnetic force, a type of physical interaction that occurs between electrically charged particles. It's one of the four fundamental forces of nature.

**What is Electromagnetism?**
Electromagnetism combines electricity and magnetism into a unified theory. It describes how electric charges create electric fields and how moving charges create magnetic fields. The theory was unified by James Clerk Maxwell in the 19th century.

**Key Concepts:**
- Electric Fields: Forces around electric charges
- Magnetic Fields: Forces around moving charges and magnets
- Electromagnetic Induction: Generating electricity from changing magnetic fields
- Maxwell's Equations: Mathematical description of electromagnetism
- Electromagnetic Waves: Light, radio waves, X-rays, etc.

**Why Study Electromagnetism?**
Electromagnetism is crucial for understanding electricity, magnetism, light, and modern technology. It's essential for electrical engineering, telecommunications, and many other fields.`,
      keyConcepts: [
        'Electric Fields: Forces around electric charges',
        'Magnetic Fields: Forces around moving charges',
        'Electromagnetic Induction: Faraday\'s law',
        'Maxwell\'s Equations: Unified theory',
        'Electromagnetic Waves: Light and radiation'
      ],
      examples: [
        'E = kQ/r² (Electric Field)\nField strength around a point charge',
        'F = qvB (Magnetic Force)\nForce on moving charge in magnetic field',
        'E = mc² (Mass-Energy Equivalence)\nEinstein\'s famous equation'
      ],
      resources: [
        'https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage',
        'https://www.physicsclassroom.com/class/estatics',
        'https://www.electrical4u.com/'
      ]
    }
  }
}

function generatePersonalizedContent(subject: string, topic: string, difficulty: string, learningStyle: string, educationLevel: string, grade: string) {
  const content = {
    title: `${subject}: ${topic}`,
    description: `Personalized ${topic} lesson in ${subject} for ${grade} students`,
    content: `Welcome to your personalized ${topic} lesson in ${subject}! This content has been tailored specifically for your learning style (${learningStyle}) and education level (${educationLevel}).\n\n**What You'll Learn:**\n- Core concepts of ${topic}\n- Practical applications in real-world scenarios\n- Step-by-step problem-solving approaches\n- Interactive exercises and examples\n\n**Learning Objectives:**\n1. Understand the fundamental principles of ${topic}\n2. Apply ${topic} concepts to solve problems\n3. Develop critical thinking skills in ${subject}\n4. Build confidence in ${topic} applications\n\n**Estimated Time:** 20 minutes\n\n**Difficulty Level:** ${difficulty}\n**Learning Style:** ${learningStyle}\n**Education Level:** ${educationLevel}\n**Grade:** ${grade}`,
    keyConcepts: [
      `Introduction to ${topic}`,
      `Core principles and fundamentals`,
      `Practical applications`,
      `Problem-solving strategies`,
      `Advanced concepts and extensions`
    ],
    examples: [
      `Basic Example: Simple ${topic} application`,
      `Intermediate Example: Moderate complexity ${topic} problem`,
      `Advanced Example: Complex ${topic} scenario`
    ],
    interactiveElements: ['Interactive Diagrams', 'Step-by-step Solutions', 'Progress Tracking'],
    nextSteps: `Complete the practice exercises, review the key concepts, and explore related topics in ${subject}.`,
    aiInsights: `Based on your ${learningStyle} learning style and ${educationLevel} level, this content has been optimized for maximum effectiveness.`,
    prerequisites: [`Basic understanding of ${subject} fundamentals`, 'Familiarity with mathematical concepts', 'Willingness to learn and practice'],
    learningObjectives: [`Master the core concepts of ${topic}`, `Apply ${topic} principles in practical scenarios`, `Develop problem-solving skills in ${subject}`, `Build confidence in ${topic} applications`],
    realWorldApplications: ['Engineering and Architecture', 'Finance and Economics', 'Scientific Research', 'Technology and Computing'],
    assessmentQuestions: [`What are the main principles of ${topic}?`, `How would you apply ${topic} in a real-world scenario?`, `What are the key differences between basic and advanced ${topic} concepts?`, `Can you explain the relationship between ${topic} and other ${subject} concepts?`],
    externalResources: [
      `https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(`${subject} ${topic}`)}`,
      `https://www.wikipedia.org/wiki/${encodeURIComponent(`${subject}_${topic}`)}`,
      `https://www.youtube.com/results?search_query=${encodeURIComponent(`${subject} ${topic} tutorial`)}`
    ],
    videoLinks: [
      `https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(`${subject} ${topic}`)}`,
      `https://www.youtube.com/results?search_query=${encodeURIComponent(`${subject} ${topic} tutorial`)}`,
      `https://www.coursera.org/search?query=${encodeURIComponent(`${subject} ${topic}`)}`
    ],
    practiceProblems: [
      `Practice Problem 1: Basic ${topic} application`,
      `Practice Problem 2: Intermediate ${topic} challenge`,
      `Practice Problem 3: Advanced ${topic} problem-solving`,
      `Real-world Application: ${topic} in ${subject} context`
    ]
  };
  return content;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { subject, topic, difficulty, learningStyle, educationLevel, grade } = body;

  if (!subject || !topic) {
    return NextResponse.json({ error: 'Subject and topic are required' }, { status: 400 });
  }

  const personalizedContent = generatePersonalizedContent(subject, topic, difficulty, learningStyle, educationLevel, grade);
  return NextResponse.json(personalizedContent);
} 