import { NextRequest, NextResponse } from 'next/server';

const EDUCATIONAL_CONTENT: Record<string, any> = {
  'Mathematics': {
    'Introduction': {
      content: 'Mathematics is the language of patterns, logic, and problem-solving. It provides the foundation for understanding the world around us through numbers, shapes, and relationships.\n\nMathematics develops critical thinking skills and logical reasoning. It teaches us to break down complex problems into manageable steps and find systematic solutions.\n\nKey areas include arithmetic, algebra, geometry, and calculus. Each builds upon the previous, creating a comprehensive understanding of mathematical concepts.',
      keyConcepts: ['Numbers and Operations', 'Patterns and Sequences', 'Problem Solving', 'Logical Thinking', 'Mathematical Reasoning'],
      examples: ['Solve basic equations', 'Identify number patterns', 'Apply mathematical formulas', 'Use logical reasoning'],
      youtubeLinks: ['https://www.youtube.com/watch?v=Kp2bYWRQylk', 'https://www.youtube.com/watch?v=WUvTyaaNkzM'],
      stepByStepNotes: [
        'Start with basic arithmetic operations (addition, subtraction, multiplication, division)',
        'Learn to identify patterns in numbers and sequences',
        'Practice solving word problems step by step',
        'Understand the relationship between different mathematical concepts',
        'Apply mathematical thinking to real-world situations'
      ]
    },
    'Algebra': {
      content: 'Algebra is a fundamental branch of mathematics that deals with symbols and the rules for manipulating these symbols. It provides a powerful way to solve problems using variables, equations, and functions.\n\nIn algebra, we use letters (variables) to represent unknown values and create equations that we can solve. This allows us to model real-world situations and find solutions to complex problems.\n\nThe key to mastering algebra is understanding the relationship between variables and how to manipulate equations to isolate the unknown variable.',
      keyConcepts: ['Variables and Constants', 'Linear Equations', 'Quadratic Equations', 'Functions', 'Inequalities'],
      examples: ['Solve for x in 2x + 5 = 13', 'Factor quadratic expressions', 'Graph linear functions', 'Solve systems of equations'],
      youtubeLinks: ['https://www.youtube.com/watch?v=Z-ZkmpQBIFo', 'https://www.youtube.com/watch?v=7Uos1ED3KHI'],
      stepByStepNotes: [
        'Understand what variables represent and how to work with them',
        'Learn to solve linear equations using inverse operations',
        'Practice factoring expressions and solving quadratic equations',
        'Master the concept of functions and their graphs',
        'Apply algebraic methods to solve real-world problems'
      ]
    },
    'Geometry': {
      content: 'Geometry is the study of shapes, sizes, positions, and dimensions of objects. It helps us understand spatial relationships and the properties of different figures.\n\nGeometry combines visual thinking with logical reasoning. It teaches us to analyze shapes, calculate areas and volumes, and understand how objects relate to each other in space.\n\nFrom basic shapes to complex three-dimensional figures, geometry provides tools for understanding the physical world around us.',
      keyConcepts: ['Points, Lines, and Planes', 'Angles and Triangles', 'Circles and Polygons', 'Area and Perimeter', 'Volume and Surface Area'],
      examples: ['Calculate the area of a rectangle', 'Find the circumference of a circle', 'Solve for missing angles in triangles', 'Calculate the volume of a cube'],
      youtubeLinks: ['https://www.youtube.com/watch?v=302eJ3TzJQc', 'https://www.youtube.com/watch?v=H8wD180jtOk'],
      stepByStepNotes: [
        'Learn the basic building blocks: points, lines, and planes',
        'Understand angle relationships and triangle properties',
        'Master formulas for calculating areas and perimeters',
        'Practice solving geometric proofs and problems',
        'Apply geometric concepts to real-world measurements'
      ]
    },
    'Calculus': {
      content: 'Calculus is the mathematical study of continuous change, encompassing limits, derivatives, integrals, and infinite series. It is fundamental to understanding motion, growth, and optimization.\n\nCalculus consists of two main branches: differential calculus, which studies rates of change and slopes of curves, and integral calculus, which studies accumulation of quantities and areas under curves.',
      keyConcepts: ['Limits', 'Derivatives', 'Integrals', 'Differential Equations', 'Series and Sequences'],
      examples: ['Find the derivative of f(x) = x²', 'Calculate the integral of 2x dx', 'Find the limit as x approaches 0 of sin(x)/x'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Start with understanding limits and continuity',
        'Learn the rules of differentiation and their applications',
        'Master integration techniques and methods',
        'Study differential equations and their solutions',
        'Apply calculus to real-world problems and optimization'
      ],
      resources: ['https://www.khanacademy.org/math/calculus-1', 'https://www.mathsisfun.com/calculus/']
    },
    'Statistics': {
      content: 'Statistics is the science of collecting, analyzing, interpreting, and presenting data. It provides methods for making sense of information and drawing conclusions from data.\n\nStatistical methods are used in virtually every field, from scientific research to business decision-making. They help us understand patterns, test hypotheses, and make predictions based on data.\n\nUnderstanding statistics is crucial for being an informed citizen in our data-driven world.',
      keyConcepts: ['Data Collection', 'Descriptive Statistics', 'Probability', 'Inferential Statistics', 'Hypothesis Testing', 'Regression Analysis'],
      examples: ['Calculate mean, median, and mode', 'Create a histogram', 'Perform a t-test', 'Analyze correlation'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn data collection methods and sampling techniques',
        'Master descriptive statistics and data visualization',
        'Understand probability concepts and distributions',
        'Study inferential statistics and hypothesis testing',
        'Apply statistical methods to real-world data analysis'
      ],
      resources: ['https://www.khanacademy.org/math/statistics-probability', 'https://www.statisticshowto.com/']
    }
  },
  'Computer Science': {
    'Introduction': {
      content: 'Computer Science is the study of computers and computational systems. It encompasses both theoretical and practical aspects of computing, from algorithms and data structures to software development and artificial intelligence.\n\nComputer Science teaches problem-solving through computational thinking. It involves breaking down complex problems into smaller, manageable parts and developing systematic solutions.\n\nKey areas include programming, algorithms, data structures, computer architecture, and software engineering. Each area builds upon fundamental concepts to create powerful computing solutions.',
      keyConcepts: ['Computational Thinking', 'Algorithms and Logic', 'Programming Fundamentals', 'Data Structures', 'Problem Solving'],
      examples: ['Write simple programs', 'Design algorithms', 'Debug code', 'Analyze computational complexity'],
      youtubeLinks: ['https://www.youtube.com/watch?v=zOjov-2OZ0E', 'https://www.youtube.com/watch?v=SzJ46YA_RaA'],
      stepByStepNotes: [
        'Learn computational thinking and problem decomposition',
        'Understand basic programming concepts and syntax',
        'Practice writing simple algorithms and programs',
        'Study fundamental data structures and their applications',
        'Develop debugging and problem-solving skills'
      ]
    },
    'Programming': {
      content: 'Programming is the process of creating instructions for computers to follow. It involves writing code in programming languages to solve problems and create software applications.\n\nProgramming teaches logical thinking and systematic problem-solving. It requires understanding both the syntax of programming languages and the logic behind algorithms and data structures.\n\nFrom simple scripts to complex applications, programming enables us to automate tasks, process data, and create interactive experiences.',
      keyConcepts: ['Variables and Data Types', 'Control Structures', 'Functions and Methods', 'Object-Oriented Programming', 'Debugging'],
      examples: ['Write a program to calculate factorial', 'Create a simple calculator', 'Build a basic web application', 'Implement sorting algorithms'],
      youtubeLinks: ['https://www.youtube.com/watch?v=kqtD5dpn9C8', 'https://www.youtube.com/watch?v=rfscVS0vtbw'],
      stepByStepNotes: [
        'Start with basic syntax and data types in your chosen language',
        'Learn control structures (if/else, loops) for program flow',
        'Master functions and methods for code organization',
        'Understand object-oriented programming concepts',
        'Practice debugging and testing your code thoroughly'
      ]
    },
    'Data Structures': {
      content: 'Data structures are ways of organizing and storing data so that it can be accessed and modified efficiently. They are fundamental to computer science and programming.\n\nDifferent data structures are optimized for different types of operations. Understanding when and how to use each structure is crucial for writing efficient programs.\n\nFrom simple arrays to complex trees and graphs, data structures provide the foundation for algorithms and software development.',
      keyConcepts: ['Arrays and Lists', 'Stacks and Queues', 'Trees and Graphs', 'Hash Tables', 'Algorithm Complexity'],
      examples: ['Implement a stack using arrays', 'Create a binary search tree', 'Use hash tables for fast lookups', 'Analyze algorithm efficiency'],
      youtubeLinks: ['https://www.youtube.com/watch?v=RBSGKlAvoiM', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn basic linear data structures (arrays, linked lists)',
        'Understand stack and queue operations and applications',
        'Study tree structures and their traversal methods',
        'Master hash tables and their collision resolution',
        'Analyze time and space complexity of operations'
      ]
    },
    'Algorithms': {
      content: 'Algorithms are step-by-step procedures used for calculations, data processing, and automated reasoning. They are the building blocks of computer programs.\n\nGood algorithms are efficient, correct, and easy to understand. Algorithm design involves trade-offs between time complexity, space complexity, and simplicity.\n\nAlgorithmic thinking is a valuable skill that helps solve problems systematically and efficiently, whether in programming or everyday life.',
      keyConcepts: ['Sorting Algorithms', 'Search Algorithms', 'Dynamic Programming', 'Greedy Algorithms', 'Complexity Analysis', 'Algorithm Design'],
      examples: ['Implement bubble sort', 'Create binary search', 'Solve the knapsack problem', 'Analyze time complexity'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn fundamental sorting and searching algorithms',
        'Understand time and space complexity analysis',
        'Master dynamic programming and greedy approaches',
        'Practice algorithm design and optimization',
        'Apply algorithmic thinking to solve complex problems'
      ],
      resources: ['https://www.geeksforgeeks.org/fundamentals-of-algorithms/', 'https://leetcode.com/']
    },
    'Web Development': {
      content: 'Web development is the process of creating websites and web applications. It involves both front-end development (what users see) and back-end development (server-side logic).\n\nModern web development uses a variety of technologies including HTML, CSS, JavaScript, and various frameworks. It\'s a rapidly evolving field with new tools and techniques constantly emerging.\n\nWeb development skills are in high demand and offer opportunities to create applications that can reach millions of users worldwide.',
      keyConcepts: ['HTML and CSS', 'JavaScript', 'Front-end Frameworks', 'Back-end Development', 'Databases', 'APIs'],
      examples: ['Create a responsive webpage', 'Build a React component', 'Set up a REST API', 'Connect to a database'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Start with HTML and CSS fundamentals',
        'Learn JavaScript programming and DOM manipulation',
        'Master front-end frameworks like React or Vue',
        'Study back-end development and databases',
        'Build full-stack web applications'
      ],
      resources: ['https://developer.mozilla.org/', 'https://www.freecodecamp.org/']
    }
  },
  'Physics': {
    'Introduction': {
      content: 'Physics is the study of matter, energy, and their interactions. It seeks to understand the fundamental laws that govern the universe, from the smallest particles to the largest galaxies.\n\nPhysics combines mathematical reasoning with experimental observation. It teaches us to model natural phenomena and predict outcomes based on physical laws.\n\nKey areas include mechanics, thermodynamics, electromagnetism, and quantum physics. Each builds our understanding of how the universe works.',
      keyConcepts: ['Measurement and Units', 'Forces and Motion', 'Energy and Work', 'Waves and Oscillations', 'Scientific Method'],
      examples: ['Calculate velocity and acceleration', 'Analyze forces in equilibrium', 'Measure energy transformations', 'Study wave properties'],
      youtubeLinks: ['https://www.youtube.com/watch?v=CQYELiTtUs8', 'https://www.youtube.com/watch?v=7DjsD7Hcd9U'],
      stepByStepNotes: [
        'Learn the SI system of units and measurement techniques',
        'Understand Newton\'s laws of motion and their applications',
        'Study different forms of energy and energy conservation',
        'Analyze wave phenomena and their properties',
        'Apply the scientific method to physical investigations'
      ]
    },
    'Mechanics': {
      content: 'Mechanics is the branch of physics that deals with the motion of objects and the forces that cause motion. It provides the foundation for understanding how objects move and interact.\n\nMechanics combines mathematical analysis with physical intuition. It teaches us to predict the behavior of objects under various forces and conditions.\n\nFrom simple motion to complex systems, mechanics helps us understand everything from falling objects to planetary orbits.',
      keyConcepts: ['Kinematics', 'Dynamics', 'Newton\'s Laws', 'Work and Energy', 'Momentum'],
      examples: ['Calculate projectile motion', 'Analyze forces on inclined planes', 'Solve collision problems', 'Study circular motion'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=CQYELiTtUs8'],
      stepByStepNotes: [
        'Master kinematic equations for describing motion',
        'Apply Newton\'s laws to analyze forces and acceleration',
        'Understand work-energy theorem and conservation of energy',
        'Study momentum and its conservation in collisions',
        'Analyze rotational motion and angular momentum'
      ]
    },
    'Electromagnetism': {
      content: 'Electromagnetism is the study of electric and magnetic fields and their interactions with matter. It is one of the four fundamental forces of nature.\n\nElectricity and magnetism were once thought to be separate phenomena, but Maxwell showed they are intimately connected.',
      keyConcepts: ['Electric Fields', 'Magnetic Fields', 'Electromagnetic Induction', 'Maxwell\'s Equations', 'Electromagnetic Waves'],
      examples: ['Calculate electric field strength', 'Determine magnetic force on a charge', 'Find the induced EMF in a coil'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Understand electric charges and electric fields',
        'Learn about magnetic fields and their properties',
        'Study electromagnetic induction and Faraday\'s law',
        'Master Maxwell\'s equations and their implications',
        'Explore electromagnetic waves and their applications'
      ],
      resources: ['https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields', 'https://www.physicsclassroom.com/class/estatics']
    },
    'Thermodynamics': {
      content: 'Thermodynamics is the study of heat, energy, and their relationship to work. It describes how energy flows and transforms in physical systems.\n\nThe laws of thermodynamics are fundamental principles that govern all physical processes. They have profound implications for understanding the universe, from the behavior of engines to the fate of the cosmos.\n\nThermodynamics is crucial for engineering, chemistry, biology, and many other fields.',
      keyConcepts: ['Temperature and Heat', 'First Law of Thermodynamics', 'Second Law of Thermodynamics', 'Entropy', 'Heat Engines', 'Phase Changes'],
      examples: ['Calculate work done by a gas', 'Determine efficiency of a heat engine', 'Analyze entropy changes'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn about temperature, heat, and thermal energy',
        'Understand the first law of thermodynamics and energy conservation',
        'Study the second law and the concept of entropy',
        'Analyze heat engines and their efficiency',
        'Apply thermodynamic principles to real-world systems'
      ],
      resources: ['https://www.khanacademy.org/science/physics/thermodynamics', 'https://www.physicsclassroom.com/class/thermodynamics']
    }
  },
  'Chemistry': {
    'Introduction': {
      content: 'Chemistry is the study of matter, its properties, and the changes it undergoes. It explores the composition, structure, and behavior of substances at the molecular level.\n\nChemistry connects the macroscopic world we see with the microscopic world of atoms and molecules. It helps us understand how substances interact and transform.\n\nKey areas include atomic structure, chemical bonding, reactions, and thermodynamics. Each contributes to our understanding of the material world.',
      keyConcepts: ['Atoms and Molecules', 'Chemical Bonding', 'Chemical Reactions', 'States of Matter', 'Periodic Table'],
      examples: ['Balance chemical equations', 'Predict reaction products', 'Calculate concentrations', 'Analyze molecular structures'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Understand atomic structure and the periodic table',
        'Learn about different types of chemical bonding',
        'Master balancing chemical equations',
        'Study reaction mechanisms and kinetics',
        'Apply chemical principles to real-world problems'
      ]
    },
    'Organic Chemistry': {
      content: 'Organic chemistry is the study of carbon-containing compounds and their reactions. It is fundamental to understanding life processes and many industrial applications.\n\nCarbon\'s unique ability to form four bonds and create complex structures makes it the basis of all known life.',
      keyConcepts: ['Hydrocarbons', 'Functional Groups', 'Reaction Mechanisms', 'Stereochemistry', 'Spectroscopy'],
      examples: ['Name organic compounds using IUPAC rules', 'Predict reaction products', 'Analyze molecular structure'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn about hydrocarbons and their properties',
        'Understand functional groups and their reactivity',
        'Study reaction mechanisms and electron flow',
        'Master stereochemistry and molecular geometry',
        'Apply spectroscopic techniques to identify compounds'
      ],
      resources: ['https://www.khanacademy.org/science/organic-chemistry', 'https://www.masterorganicchemistry.com/']
    },
    'Physical Chemistry': {
      content: 'Physical chemistry applies the principles of physics to chemical systems, studying the physical properties and behavior of matter at the molecular level.\n\nIt bridges the gap between physics and chemistry, using mathematical and theoretical methods.',
      keyConcepts: ['Thermodynamics', 'Kinetics', 'Quantum Chemistry', 'Statistical Mechanics', 'Spectroscopy'],
      examples: ['Calculate reaction rates', 'Determine equilibrium constants', 'Analyze molecular spectra'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Apply thermodynamic principles to chemical systems',
        'Study chemical kinetics and reaction mechanisms',
        'Understand quantum chemistry and molecular orbitals',
        'Learn statistical mechanics and molecular distributions',
        'Master spectroscopic techniques and their applications'
      ],
      resources: ['https://www.khanacademy.org/science/physical-chemistry', 'https://www.chemguide.co.uk/physical/']
    },
    'Inorganic Chemistry': {
      content: 'Inorganic chemistry is the study of all chemical compounds except those containing carbon-hydrogen bonds. It encompasses a vast array of substances including metals, minerals, and coordination compounds.\n\nInorganic chemistry is fundamental to materials science, catalysis, and many industrial processes. It helps us understand the properties and reactions of elements and their compounds.\n\nThis field is essential for developing new materials, understanding environmental chemistry, and advancing technology.',
      keyConcepts: ['Atomic Structure', 'Chemical Bonding', 'Coordination Chemistry', 'Solid State Chemistry', 'Catalysis', 'Bioinorganic Chemistry'],
      examples: ['Predict molecular geometry', 'Analyze coordination complexes', 'Study crystal structures'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Understand atomic structure and periodic trends',
        'Study different types of chemical bonding',
        'Learn coordination chemistry and complex formation',
        'Explore solid state chemistry and crystal structures',
        'Apply inorganic chemistry to materials and catalysis'
      ],
      resources: ['https://www.khanacademy.org/science/inorganic-chemistry', 'https://www.chemguide.co.uk/inorganic/']
    }
  },
  'Biology': {
    'Introduction': {
      content: 'Biology is the study of living organisms and their interactions with each other and their environment. It explores the diversity of life and the processes that sustain it.\n\nBiology connects the microscopic world of cells with the macroscopic world of ecosystems. It helps us understand how living systems work and evolve.\n\nKey areas include cell biology, genetics, evolution, and ecology. Each provides insights into different aspects of life on Earth.',
      keyConcepts: ['Cell Structure and Function', 'Genetics and Heredity', 'Evolution and Adaptation', 'Ecosystems and Biodiversity', 'Scientific Method'],
      examples: ['Observe cell structures under microscope', 'Analyze genetic inheritance patterns', 'Study ecosystem interactions', 'Conduct biological experiments'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn about cell structure and basic cellular processes',
        'Understand genetics and patterns of inheritance',
        'Study evolutionary processes and adaptation',
        'Analyze ecosystem dynamics and biodiversity',
        'Apply the scientific method to biological investigations'
      ]
    },
    'Cell Biology': {
      content: 'Cell biology is the study of cells, their structure, function, and interactions. It is fundamental to understanding all living organisms.\n\nCells are the basic units of life, and understanding their structure and function is essential for understanding how organisms work.',
      keyConcepts: ['Cell Structure', 'Cell Division', 'Cell Signaling', 'Metabolism', 'Gene Expression'],
      examples: ['Identify cell organelles', 'Explain mitosis and meiosis', 'Describe cellular respiration'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn about cell structure and organelles',
        'Understand cell division processes (mitosis and meiosis)',
        'Study cell signaling and communication',
        'Explore cellular metabolism and energy production',
        'Investigate gene expression and regulation'
      ],
      resources: ['https://www.khanacademy.org/science/biology/cell-structure-and-function', 'https://www.nature.com/subjects/cell-biology']
    },
    'Genetics': {
      content: 'Genetics is the study of genes, genetic variation, and heredity in living organisms. It explains how traits are passed from parents to offspring.\n\nGenetics is fundamental to understanding evolution, disease, and the diversity of life.',
      keyConcepts: ['DNA and RNA', 'Gene Expression', 'Inheritance Patterns', 'Genetic Disorders', 'Evolution'],
      examples: ['Solve Punnett squares', 'Analyze pedigrees', 'Understand DNA replication'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Understand DNA structure and genetic material',
        'Learn about gene expression and protein synthesis',
        'Study inheritance patterns and genetic crosses',
        'Analyze genetic disorders and their causes',
        'Explore the role of genetics in evolution'
      ],
      resources: ['https://www.khanacademy.org/science/biology/classical-genetics', 'https://www.nature.com/subjects/genetics']
    },
    'Ecology': {
      content: 'Ecology is the study of interactions between organisms and their environment. It examines how living things relate to each other and to their physical surroundings.\n\nEcology operates at multiple levels, from individual organisms to entire ecosystems. It helps us understand biodiversity, environmental change, and the impact of human activities on the natural world.\n\nThis field is crucial for conservation, environmental management, and understanding the challenges facing our planet.',
      keyConcepts: ['Population Ecology', 'Community Ecology', 'Ecosystem Dynamics', 'Biodiversity', 'Conservation Biology', 'Climate Change'],
      examples: ['Analyze population growth', 'Study food webs', 'Assess biodiversity'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study population dynamics and growth patterns',
        'Understand community interactions and food webs',
        'Explore ecosystem structure and function',
        'Analyze biodiversity and its importance',
        'Investigate conservation strategies and climate change impacts'
      ],
      resources: ['https://www.khanacademy.org/science/biology/ecology', 'https://www.nature.com/subjects/ecology']
    }
  },
  'English': {
    'Introduction': {
      content: 'English language arts encompass reading, writing, speaking, and listening skills. It is fundamental to communication, critical thinking, and cultural understanding.\n\nEnglish education develops literacy skills that are essential for academic success and lifelong learning. It helps us express ideas clearly, understand others, and engage with diverse perspectives.\n\nStrong English skills are valuable in every career and are crucial for informed citizenship and personal growth.',
      keyConcepts: ['Reading Comprehension', 'Writing Process', 'Grammar and Usage', 'Communication Skills', 'Critical Thinking'],
      examples: ['Write clear paragraphs', 'Analyze texts', 'Give presentations', 'Participate in discussions'],
      resources: ['https://www.khanacademy.org/humanities/grammar', 'https://owl.purdue.edu/owl/purdue_owl.html']
    },
    'Literature': {
      content: 'Literature is the study of written works, including novels, poetry, drama, and other forms of creative expression. It explores themes, styles, and the human experience through language.\n\nLiterature reflects and shapes culture, providing insights into different societies, historical periods, and human nature. It develops critical thinking, empathy, and communication skills.\n\nStudying literature helps us understand ourselves and others, and develops the ability to analyze complex texts and ideas.',
      keyConcepts: ['Literary Analysis', 'Theme and Symbolism', 'Character Development', 'Narrative Structure', 'Poetry Analysis', 'Critical Theory'],
      examples: ['Analyze character motivation', 'Identify themes in a novel', 'Interpret poetic devices'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn literary analysis techniques and approaches',
        'Identify themes, symbols, and motifs in texts',
        'Analyze character development and motivation',
        'Study narrative structure and storytelling techniques',
        'Apply critical theory to interpret literature'
      ],
      resources: ['https://www.khanacademy.org/humanities/literature', 'https://www.poetryfoundation.org/']
    },
    'Grammar': {
      content: 'Grammar is the system of rules that govern the structure of language. It includes syntax, morphology, and the proper use of words and sentences.\n\nUnderstanding grammar is essential for effective communication, both written and spoken. It provides the foundation for clear, precise expression and helps avoid misunderstandings.\n\nGood grammar skills are important for academic success, professional communication, and personal expression.',
      keyConcepts: ['Parts of Speech', 'Sentence Structure', 'Punctuation', 'Verb Tenses', 'Agreement', 'Style and Usage'],
      examples: ['Identify parts of speech', 'Correct sentence structure', 'Use proper punctuation'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Master the eight parts of speech and their functions',
        'Learn sentence structure and syntax rules',
        'Understand punctuation and its proper usage',
        'Study verb tenses and agreement patterns',
        'Apply grammar rules to improve writing style'
      ],
      resources: ['https://www.khanacademy.org/humanities/grammar', 'https://owl.purdue.edu/owl/purdue_owl.html']
    }
  },
  'History': {
    'Introduction': {
      content: 'History is the study of past events, people, and societies. It helps us understand how the world has changed over time and how past events shape the present.\n\nHistory teaches critical thinking and analysis. It involves examining evidence, evaluating sources, and developing interpretations of past events.\n\nKey areas include political history, social history, economic history, and cultural history. Each provides different perspectives on human experience.',
      keyConcepts: ['Historical Sources', 'Chronology and Periodization', 'Cause and Effect', 'Historical Interpretation', 'Research Methods'],
      examples: ['Analyze primary sources', 'Create timelines of events', 'Evaluate historical arguments', 'Conduct historical research'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn to identify and evaluate different types of historical sources',
        'Understand chronological frameworks and periodization',
        'Analyze cause-and-effect relationships in historical events',
        'Develop skills in historical interpretation and argumentation',
        'Practice historical research methods and documentation'
      ]
    },
    'World History': {
      content: 'World history is the study of human societies and civilizations across time and space. It examines the development of cultures, political systems, and global interactions.\n\nUnderstanding world history helps us make sense of current events and global issues. It reveals patterns in human behavior and the consequences of different choices and systems.\n\nHistory teaches critical thinking, research skills, and the ability to evaluate evidence and arguments.',
      keyConcepts: ['Historical Periods', 'Civilizations', 'Political Systems', 'Economic Development', 'Cultural Exchange', 'Historical Analysis'],
      examples: ['Analyze primary sources', 'Compare civilizations', 'Trace historical developments'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study major historical periods and their characteristics',
        'Compare different civilizations and their achievements',
        'Analyze political systems and their evolution',
        'Understand economic development and trade patterns',
        'Examine cultural exchange and its impact on societies'
      ],
      resources: ['https://www.khanacademy.org/humanities/world-history', 'https://www.britannica.com/']
    },
    'American History': {
      content: 'American history explores the development of the United States from its colonial origins to the present day. It examines political, social, economic, and cultural changes.\n\nUnderstanding American history is essential for informed citizenship and understanding current political and social issues. It reveals the challenges and achievements of building a diverse democracy.\n\nThis field helps develop critical thinking about national identity, democracy, and the role of government.',
      keyConcepts: ['Colonial Period', 'Revolution and Independence', 'Civil War and Reconstruction', 'Industrialization', 'Civil Rights Movement', 'Modern America'],
      examples: ['Analyze the Constitution', 'Study the Civil War', 'Examine social movements'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study the colonial period and early settlements',
        'Understand the American Revolution and independence',
        'Analyze the Civil War and Reconstruction era',
        'Examine industrialization and its social impact',
        'Study the Civil Rights Movement and modern America'
      ],
      resources: ['https://www.khanacademy.org/humanities/us-history', 'https://www.loc.gov/']
    }
  },
  'Law': {
    'Introduction': {
      content: 'Law is the system of rules and regulations that govern society. It provides a framework for resolving disputes, protecting rights, and maintaining order.\n\nLaw combines analytical thinking with ethical reasoning. It helps us understand how societies create and enforce rules to promote justice and fairness.\n\nKey areas include constitutional law, criminal law, civil law, and international law. Each addresses different aspects of legal systems and human rights.',
      keyConcepts: ['Legal Systems', 'Constitutional Rights', 'Criminal and Civil Law', 'Legal Reasoning', 'Justice and Ethics'],
      examples: ['Analyze legal cases', 'Understand constitutional rights', 'Study legal precedents', 'Apply legal reasoning'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Understand the structure and function of legal systems',
        'Learn about constitutional rights and civil liberties',
        'Study different types of law and their applications',
        'Develop skills in legal reasoning and analysis',
        'Explore the relationship between law, justice, and ethics'
      ]
    },
    'Constitutional Law': {
      content: 'Constitutional law is the study of the fundamental principles and rules that govern a nation\'s government and the relationship between government and citizens.\n\nIt examines the interpretation and application of constitutional provisions, including rights, powers, and limitations.',
      keyConcepts: ['Separation of Powers', 'Individual Rights', 'Judicial Review', 'Federalism', 'Due Process', 'Equal Protection'],
      examples: ['Analyze Supreme Court decisions', 'Understand constitutional amendments', 'Evaluate government actions'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Understand the separation of powers doctrine',
        'Study individual rights and civil liberties',
        'Learn about judicial review and its role',
        'Analyze federalism and state-federal relations',
        'Examine due process and equal protection principles'
      ],
      resources: ['https://www.law.cornell.edu/constitution', 'https://www.oyez.org/']
    },
    'Criminal Law': {
      content: 'Criminal law defines crimes and establishes punishments for those who commit them. It balances public safety with individual rights and due process.\n\nUnderstanding criminal law is important for understanding justice systems and the role of law enforcement.',
      keyConcepts: ['Elements of Crimes', 'Criminal Procedure', 'Defenses', 'Sentencing', 'Victims\' Rights', 'Criminal Justice'],
      examples: ['Analyze criminal cases', 'Understand legal defenses', 'Evaluate sentencing decisions'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn the elements of different types of crimes',
        'Understand criminal procedure and due process',
        'Study legal defenses and their applications',
        'Analyze sentencing principles and practices',
        'Examine victims\' rights and criminal justice reform'
      ],
      resources: ['https://www.law.cornell.edu/wex/criminal_law', 'https://www.ojp.gov/']
    }
  },
  'Economics': {
    'Introduction': {
      content: 'Economics is the study of how societies allocate scarce resources to satisfy unlimited wants. It examines the production, distribution, and consumption of goods and services.\n\nEconomics provides tools for understanding decision-making at individual, business, and societal levels. It helps us analyze trade-offs and make informed choices.\n\nKey areas include microeconomics, macroeconomics, international trade, and economic policy. Each contributes to our understanding of economic systems.',
      keyConcepts: ['Supply and Demand', 'Market Structures', 'Economic Systems', 'Fiscal and Monetary Policy', 'International Trade'],
      examples: ['Analyze market equilibrium', 'Study economic indicators', 'Evaluate policy impacts', 'Understand trade relationships'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Understand basic economic concepts and principles',
        'Learn to analyze supply and demand relationships',
        'Study different market structures and their characteristics',
        'Explore macroeconomic concepts and policy tools',
        'Apply economic reasoning to real-world issues'
      ]
    },
    'Microeconomics': {
      content: 'Microeconomics studies the behavior of individual economic units such as households, firms, and markets. It examines how these units make decisions and interact.\n\nMicroeconomics provides the foundation for understanding market mechanisms, pricing, and resource allocation.',
      keyConcepts: ['Consumer Behavior', 'Producer Theory', 'Market Structures', 'Price Elasticity', 'Market Equilibrium', 'Welfare Economics'],
      examples: ['Analyze consumer choices', 'Study market competition', 'Calculate price elasticity', 'Evaluate market efficiency'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study consumer behavior and utility maximization',
        'Understand producer theory and cost analysis',
        'Analyze different market structures and competition',
        'Learn about price elasticity and market responsiveness',
        'Apply welfare economics to evaluate market outcomes'
      ],
      resources: ['https://www.khanacademy.org/economics-finance-domain/microeconomics', 'https://www.investopedia.com/microeconomics-4689800']
    },
    'Macroeconomics': {
      content: 'Macroeconomics studies the economy as a whole, including national income, employment, inflation, and economic growth. It examines aggregate economic phenomena.\n\nMacroeconomics helps understand economic cycles, government policies, and international economic relationships.',
      keyConcepts: ['GDP and National Income', 'Unemployment', 'Inflation', 'Monetary Policy', 'Fiscal Policy', 'Economic Growth'],
      examples: ['Calculate GDP', 'Analyze unemployment rates', 'Understand inflation', 'Evaluate economic policies'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn to measure and analyze GDP and national income',
        'Understand unemployment types and measurement',
        'Study inflation causes and effects',
        'Analyze monetary and fiscal policy tools',
        'Examine economic growth factors and policies'
      ],
      resources: ['https://www.khanacademy.org/economics-finance-domain/macroeconomics', 'https://www.federalreserve.gov/']
    }
  },
  'Psychology': {
    'Introduction': {
      content: 'Psychology is the scientific study of mind and behavior. It explores how people think, feel, and act, both individually and in groups.\n\nPsychology combines scientific methods with humanistic understanding. It helps us understand ourselves and others, improving mental health and well-being.\n\nKey areas include cognitive psychology, social psychology, developmental psychology, and clinical psychology. Each provides insights into different aspects of human behavior.',
      keyConcepts: ['Research Methods', 'Cognitive Processes', 'Social Behavior', 'Development', 'Mental Health'],
      examples: ['Conduct psychological research', 'Analyze behavior patterns', 'Study cognitive processes', 'Understand mental health'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn psychological research methods and ethics',
        'Understand cognitive processes and mental functions',
        'Study social behavior and group dynamics',
        'Explore human development across the lifespan',
        'Apply psychological principles to improve well-being'
      ]
    },
    'Cognitive Psychology': {
      content: 'Cognitive psychology studies mental processes such as attention, memory, language, problem-solving, and decision-making. It examines how we think and process information.\n\nUnderstanding cognitive psychology helps improve learning, memory, and problem-solving skills.',
      keyConcepts: ['Memory Systems', 'Attention and Perception', 'Language Processing', 'Problem Solving', 'Decision Making', 'Learning'],
      examples: ['Study memory techniques', 'Analyze problem-solving strategies', 'Understand attention mechanisms'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study different memory systems and their functions',
        'Understand attention and perception processes',
        'Learn about language processing and comprehension',
        'Analyze problem-solving strategies and heuristics',
        'Explore decision-making processes and biases'
      ],
      resources: ['https://www.khanacademy.org/science/psychology/cognitive-psychology', 'https://www.apa.org/topics/cognition']
    },
    'Social Psychology': {
      content: 'Social psychology examines how people think, feel, and behave in social situations. It studies social influence, group dynamics, and interpersonal relationships.\n\nSocial psychology helps understand human behavior in groups, social norms, and the impact of social context.',
      keyConcepts: ['Social Influence', 'Group Dynamics', 'Attitudes and Persuasion', 'Prejudice and Discrimination', 'Interpersonal Relationships', 'Social Cognition'],
      examples: ['Study group behavior', 'Analyze social influence', 'Understand prejudice', 'Examine relationships'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study social influence and conformity processes',
        'Understand group dynamics and leadership',
        'Analyze attitudes, persuasion, and attitude change',
        'Examine prejudice, discrimination, and bias',
        'Explore interpersonal relationships and social cognition'
      ],
      resources: ['https://www.khanacademy.org/science/psychology/social-psychology', 'https://www.apa.org/topics/social-psychology']
    }
  },
  'Philosophy': {
    'Introduction': {
      content: 'Philosophy is the study of fundamental questions about existence, knowledge, values, reason, mind, and language. It examines the nature of reality and human experience.\n\nPhilosophy develops critical thinking, logical reasoning, and the ability to question assumptions. It helps us understand different perspectives and worldviews.\n\nStudying philosophy enhances analytical skills and provides tools for examining complex ethical and metaphysical questions.',
      keyConcepts: ['Logic and Reasoning', 'Ethics and Morality', 'Metaphysics', 'Epistemology', 'Philosophy of Mind', 'Political Philosophy'],
      examples: ['Analyze philosophical arguments', 'Evaluate ethical theories', 'Examine logical fallacies', 'Question fundamental assumptions'],
      resources: ['https://www.khanacademy.org/humanities/philosophy', 'https://plato.stanford.edu/']
    },
    'Ethics': {
      content: 'Ethics is the study of moral principles and values that guide human behavior. It examines questions of right and wrong, good and bad, and moral responsibility.\n\nEthics helps us make moral decisions, understand different moral perspectives, and develop moral reasoning skills.',
      keyConcepts: ['Moral Theories', 'Virtue Ethics', 'Deontological Ethics', 'Utilitarianism', 'Applied Ethics', 'Moral Reasoning'],
      examples: ['Analyze moral dilemmas', 'Evaluate ethical theories', 'Apply moral principles', 'Examine moral arguments'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study major moral theories and their principles',
        'Understand virtue ethics and character development',
        'Learn about deontological ethics and duty-based reasoning',
        'Analyze utilitarianism and consequentialist thinking',
        'Apply ethical principles to real-world dilemmas'
      ],
      resources: ['https://www.khanacademy.org/humanities/philosophy/ethics', 'https://plato.stanford.edu/entries/ethics/']
    },
    'Logic': {
      content: 'Logic is the study of valid reasoning and argumentation. It provides tools for evaluating arguments, identifying fallacies, and constructing sound reasoning.\n\nLogic is fundamental to critical thinking and is used in mathematics, computer science, philosophy, and many other fields.',
      keyConcepts: ['Deductive Reasoning', 'Inductive Reasoning', 'Logical Fallacies', 'Argument Analysis', 'Symbolic Logic', 'Critical Thinking'],
      examples: ['Analyze arguments', 'Identify logical fallacies', 'Construct valid arguments', 'Evaluate reasoning'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn deductive reasoning and valid argument forms',
        'Understand inductive reasoning and probability',
        'Identify common logical fallacies and errors',
        'Master argument analysis and evaluation',
        'Apply logical principles to critical thinking'
      ],
      resources: ['https://www.khanacademy.org/humanities/philosophy/logic', 'https://plato.stanford.edu/entries/logic/']
    }
  },
  'Art': {
    'Introduction': {
      content: 'Art is the expression of human creativity and imagination through various media. It encompasses visual arts, performing arts, and creative expression in many forms.\n\nArt develops creativity, critical thinking, and cultural awareness. It helps us understand human expression and the diversity of cultural perspectives.\n\nKey areas include drawing, painting, sculpture, digital art, and art history. Each provides different ways to explore and express creativity.',
      keyConcepts: ['Elements of Art', 'Principles of Design', 'Art History', 'Creative Process', 'Cultural Expression'],
      examples: ['Create original artwork', 'Analyze artistic styles', 'Study art history', 'Develop creative skills'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn the fundamental elements of art (line, shape, color, etc.)',
        'Understand principles of design and composition',
        'Study art history and different artistic movements',
        'Develop your creative process and artistic voice',
        'Explore cultural and historical contexts of art'
      ]
    },
    'Art History': {
      content: 'Art history studies the development of art across time and cultures. It examines artistic styles, movements, and the social and cultural contexts of art.\n\nUnderstanding art history helps appreciate artistic achievements and understand cultural development.',
      keyConcepts: ['Artistic Periods', 'Art Movements', 'Cultural Context', 'Artistic Techniques', 'Iconography', 'Art Criticism'],
      examples: ['Analyze art periods', 'Study art movements', 'Examine cultural influences', 'Evaluate artistic techniques'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Study major artistic periods and their characteristics',
        'Understand art movements and their philosophies',
        'Analyze cultural context and historical influences',
        'Learn about artistic techniques and materials',
        'Develop skills in art criticism and interpretation'
      ],
      resources: ['https://www.khanacademy.org/humanities/art-history', 'https://www.metmuseum.org/toah/']
    },
    'Digital Art': {
      content: 'Digital art uses digital technology as part of the creative process. It encompasses various forms including digital painting, 3D modeling, and digital photography.\n\nDigital art combines traditional artistic skills with modern technology, opening new possibilities for creative expression.',
      keyConcepts: ['Digital Tools', 'Digital Techniques', 'Creative Software', 'Digital Media', 'Artistic Expression', 'Technology Integration'],
      examples: ['Create digital paintings', 'Design 3D models', 'Edit digital photos', 'Develop digital portfolios'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Learn digital tools and software applications',
        'Master digital painting and illustration techniques',
        'Study 3D modeling and digital sculpture',
        'Understand digital photography and editing',
        'Develop digital portfolios and online presence'
      ],
      resources: ['https://www.khanacademy.org/computing/pixar', 'https://www.adobe.com/creativecloud.html']
    }
  },
  'Advanced Physics': {
    'Introduction': {
      content: 'Advanced Physics builds upon fundamental physics concepts to explore more complex phenomena. It includes quantum mechanics, relativity, and advanced mathematical methods.\n\nAdvanced Physics challenges our intuitive understanding of the universe. It reveals the strange and fascinating behavior of matter and energy at extreme scales.\n\nKey areas include quantum mechanics, special and general relativity, particle physics, and advanced mathematical physics. Each pushes the boundaries of our understanding.',
      keyConcepts: ['Quantum Mechanics', 'Relativity', 'Advanced Mathematics', 'Particle Physics', 'Theoretical Physics'],
      examples: ['Solve quantum mechanical problems', 'Apply relativistic equations', 'Use advanced mathematical methods', 'Analyze particle interactions'],
      youtubeLinks: ['https://www.youtube.com/watch?v=7DjsD7Hcd9U', 'https://www.youtube.com/watch?v=0IAPZzGSbME'],
      stepByStepNotes: [
        'Master the mathematical foundations of advanced physics',
        'Understand quantum mechanical principles and applications',
        'Study special and general relativity concepts',
        'Explore particle physics and fundamental forces',
        'Apply advanced physics to cutting-edge research questions'
      ]
    }
  }
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const subject = searchParams.get('subject') || 'Mathematics';
    const topic = searchParams.get('topic') || 'Algebra';
    const difficulty = searchParams.get('difficulty') || 'intermediate';
    const learningStyle = searchParams.get('learningStyle') || 'visual';
    const educationLevel = searchParams.get('educationLevel') || 'high';
    const grade = searchParams.get('grade') || 'Grade 10';

    const subjectData = EDUCATIONAL_CONTENT[subject];
    if (!subjectData || !subjectData[topic]) {
      return NextResponse.json({ 
        error: 'Content not found',
        availableSubjects: Object.keys(EDUCATIONAL_CONTENT),
        message: 'Please select from available subjects and topics'
      }, { status: 404 });
    }

    const topicData = subjectData[topic];
    const content = {
      title: `${subject}: ${topic}`,
      description: `Comprehensive ${topic} lesson in ${subject} tailored for ${grade} students`,
      content: topicData.content,
      examples: topicData.examples,
      keyConcepts: topicData.keyConcepts,
      estimatedTime: 25,
      difficulty: difficulty,
      learningStyle: learningStyle,
      educationLevel: educationLevel,
      grade: grade,
      interactiveElements: ['Interactive Diagrams', 'Step-by-step Solutions', 'Progress Tracking'],
      nextSteps: `Complete the practice exercises and review the key concepts of ${topic}.`,
      aiInsights: `Based on your ${learningStyle} learning style, this content has been optimized for maximum effectiveness.`,
      prerequisites: [`Basic understanding of ${subject} fundamentals`, 'Familiarity with mathematical concepts'],
      learningObjectives: [
        `Master the core concepts of ${topic}`,
        `Apply ${topic} principles in practical scenarios`,
        `Develop problem-solving skills in ${subject}`
      ],
      realWorldApplications: ['Engineering and Architecture', 'Finance and Economics', 'Scientific Research'],
      assessmentQuestions: [
        `What are the main principles of ${topic}?`,
        `How would you apply ${topic} in a real-world scenario?`,
        `What are the key differences between basic and advanced ${topic} concepts?`
      ],
      externalResources: topicData.resources || [],
      videoLinks: topicData.youtubeLinks || [`https://www.khanacademy.org/search?page_search_query=${encodeURIComponent(`${subject} ${topic}`)}`],
      practiceProblems: [
        `Practice Problem 1: Basic ${topic} application`,
        `Practice Problem 2: Intermediate ${topic} challenge`,
        `Practice Problem 3: Advanced ${topic} synthesis`
      ]
    };

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error in educational content API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ message: 'Content creation endpoint' });
  } catch (error) {
    console.error('Error in educational content POST API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 