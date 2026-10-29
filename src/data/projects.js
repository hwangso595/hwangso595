const PROJECTS = [
    {
      name: "Culdesac",
      description: 'Culdesac is a local event-discovery app on Google Play that helps neighbours find events and chat. I built it as the sole engineer: a React Native/Expo client on a Supabase Postgres backend with 12 Deno edge functions, 76 migrations, and 160+ row-level security policies. The feed ranking runs as SQL (interests, clubs, distance decay, freshness) with keyset pagination so live-scored rows never drop mid-scroll. Delivery is automated with 13 GitHub Actions workflows: about 870 Jest tests per PR, 290 pgTAP assertions on migration changes, and JS-only changes shipped as OTA updates.',
      website: 'https://yourculdesac.com',
      image_src: '/culdesac.jpg',
    },
    {
      name: "GroceryPulse",
      description: 'GroceryPulse is a Canadian grocery price index and data API. Scrapers for 22 retail banners (about 160 stores in 13 cities) load roughly 8K prices a week into append-only Postgres with provenance and point-in-time snapshots. Replacing headless Chromium with a TLS-fingerprinted HTTP client cut request latency from 80 s to 0.7 s. A matching pipeline (barcodes, brand, pack size, POS-abbreviation expansion, and rubric-guided LLM-agent review) maps 44.6K client SKUs to 31K competitor products.',
      website: 'https://grocerypulse.ca',
      image_src: '/grocerypulse.jpg',
    },
    {
      name: "E-Ink Sync",
      description: 'An open-source Obsidian plugin (340+ downloads) that syncs reMarkable tablets without the vendor cloud. It has a hand-written parser for legacy binary stroke files and an incremental SFTP sync tuned for a 512 MB single-core device, backed by 700+ tests.',
      github: 'https://github.com/hwangso595/eink-sync',
      image_src: '/einksync.png',
    },
    {
      name: "Blind Pear",
      description: 'Blind Pear is a dating app on the App Store: personality first, photos later. I co-built it and made matching race-free with transaction-scoped advisory locks on sorted user pairs and a realtime match queue with atomic claims. I also traced OTA updates reaching zero installs to a build variant that altered the Expo fingerprint, and fixed it with a regression test.',
      image_src: '/blindpear.png',
    },
    {
      name: "Memome",
      description: 'Memome is a private memory aid that runs fully on-device on iOS and Android, even offline. A 0.6B LLM runs through llama.cpp next to an int8 CLIP model, and hybrid retrieval (SQLite FTS5, sqlite-vec, and CLIP vectors merged with reciprocal-rank fusion) searches an encrypted local store.',
      image_src: '/memome.png',
    },
    {
      name: "Indian Poker",
      description: 'The Indian Poker Project was conceived to create a more engaging and technologically advanced version of poker. I wanted to blend the classic card game with modern technology, using real-time card recognition to enhance the gaming experience. The motivation was to offer something new and exciting to poker enthusiasts, showcasing how technology can transform traditional games. Tensorflow.js was used for the real-time card recognition, and AWS deployment ensured robust and scalable data management. The project was also an opportunity to experiment with CI/CD pipelines using GitHub Actions, streamlining the development and update process.',
      github: 'https://github.com/UofT-UTSC-CS-sandbox/project-the-code-of-duty',
      website: 'https://bluffs.games',
      image_src: '/poker.png',
    },
    {
      name: "Alpha Go Zero",
      description: 'The Chess Neural Network project was driven by my passion for both chess and machine learning. Inspired by Deepmind\'s AlphaGo Zero, the aim was to create a neural network that could learn and predict chess moves more efficiently. The challenge was to process and learn from millions of chess positions, significantly speeding up the training process. This project was an exploration of how advanced AI techniques could be applied to enhance the strategic depth of chess, providing insights into game tactics and strategies.',
      github: 'https://github.com/hwangso595/chessbot',
      image_src: '/chess.png',
    },
    {
      name: "Characters",
      description: 'In the Characters Web Application project, my goal was to develop a comprehensive platform for selling apparel online. Recognizing the need for a user-friendly, efficient e-commerce solution, I led the development of this application using a tech stack of React, Express, Node.js, and MongoDB. As a Scrum master, my focus was on maintaining project discipline and ensuring timely delivery, while also facilitating clear communication between technical and non-technical stakeholders. This project was a response to the growing demand for intuitive and scalable e-commerce solutions in the retail space.',
      github: 'https://github.com/UTSCCSCC01/finalprojects22-characters-gp',
      image_src: '/characters.png',
    },
    {
      name: "Grocery Android App",
      description: 'The Grocery Android App project was initiated to streamline the grocery shopping experience. The objective was to develop an app that enabled users to schedule grocery pickups conveniently. Leading a team of six, I focused on creating an intuitive user interface and a robust backend. We used Java for development and Firebase for database management. This project addressed the need for a more efficient, tech-driven approach to grocery shopping, aiming to save time and improve the overall shopping experience for users.',
      github: 'https://github.com/aya-baur/B07Project',
      image_src: '/mobilegrocery.png',
    },
    {
      name: "ML Sandbox",
      description: 'The goal was to create a versatile and exploratory environment for machine learning. This project was born from my curiosity and desire to experiment with various machine learning concepts and techniques in a flexible setting. The "sandbox" nature of the project meant it was a space where I could test, learn, and refine different algorithms and models without the constraints of a specific application or dataset.',
      github: 'https://github.com/hwangso595/ml_sandbox',
      image_src: '/gym.gif'
    },
    {
      name: "Othello",
      description: 'The Online Othello Game was born out of my desire to create a digital version of the classic Othello board game that could be enjoyed by players globally. I aimed to provide a platform where players could engage in real-time multiplayer gameplay in a virtual environment. The project involved crafting a seamless user interface with React, CSS, and HTML, and managing game logic and user interactions through Socket.IO and Node.js. This endeavor was about bringing a beloved board game into the digital age, making it more accessible and interactive.',
      github: 'https://github.com/hwangso595/othollo-frontend',
      image_src: '/othello.png'
    }
];

export default PROJECTS