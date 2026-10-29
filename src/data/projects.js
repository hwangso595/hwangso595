const PROJECTS = [
    {
      name: "Culdesac",
      description: [
        "Culdesac started with a simple question: what is going on near me this weekend, and who else is going? It is an Android app on Google Play for finding local events and meeting neighbours, and I built all of it myself: the app, the backend, and the pipeline that keeps it full of things to do.",
        "Every night it pulls public calendars from libraries, venues and city open data, cleans up duplicates, and retires links that have gone dead. When you open the app, your feed is ranked inside the database by what you care about, the groups you have joined, how far away something is and how fresh it is.",
        "The hardest part was making that feed feel steady. Scores change while you scroll, because hiding or viewing a post re-ranks the rest, and the first version paged by number, so some posts quietly slipped between pages and were never shown. Paging now picks up from the last post you saw, so nothing gets skipped. Ranking needed care too: early on, one old listing with a lot of views could outrank everything personal, so popularity is now capped and distance fades smoothly instead of cutting off at a hard radius.",
        "Because it is just me, the safety net matters. Every change runs about 870 automated tests before it ships, and fixes that do not touch native code reach phones over the air without waiting on a store release.",
      ],
      website: 'https://yourculdesac.com',
      image_src: '/culdesac.jpg',
      diagram: '/diagrams/culdesac.svg',
    },
    {
      name: "GroceryPulse",
      description: [
        "GroceryPulse tracks what groceries actually cost in Canada. Every week it collects about 8,000 prices from 22 grocery chains across 13 cities and turns them into a price index, a data API, and a portal for clients.",
        "Two ideas shape it. A price is never edited once it is stored, and each one remembers where it came from, so the index can be recomputed from the full history and any past week reproduced exactly. And nothing goes out blindly: a week that fails its quality checks is held back instead of published.",
        "Collection was the first wall. The original approach drove a full browser, took about 80 seconds per request, and failed often. Rebuilding it brought requests down to 0.7 seconds, cut a full weekly run from six hours to under two, and lifted store coverage from 81% to 94%.",
        "The other hard problem is knowing when two products are the same thing. Stores abbreviate names, mix French and English, and sell different pack sizes. For one client, a layered matcher with AI review raised the share of their 44.6K-product catalog with a competitor price from 33% to 43.5%, and 29 of 30 spot-checked matches were right.",
      ],
      website: 'https://grocerypulse.ca',
      image_src: '/grocerypulse.jpg',
      diagram: '/diagrams/grocerypulse.svg',
    },
    {
      name: "E-Ink Sync",
      description: [
        "I read and mark up papers on a reMarkable tablet, and I wanted those highlights in my Obsidian notes without sending everything through the vendor's cloud. E-Ink Sync is the open-source Obsidian plugin that does it, and it has been downloaded more than 350 times.",
        "It talks to the tablet directly over your own network and copies only what changed, one file at a time, which matters on the original reMarkable with its 512 MB of memory. A Python step then reads the pen strokes, finds the PDF text under each highlight, and writes a Markdown note with the highlights and page images, leaving whatever you wrote around it untouched.",
        "The hard part was the file format. Older tablets store strokes in an undocumented binary format that existing libraries cannot read, so I wrote my own parser for it, down to each point's position, pressure and tilt. Highlights were messy too: one underline often arrives as three or four pieces plus one-letter scraps, so a merger stitches them back into clean sentences by page, colour and position. More than 700 tests keep all of it honest.",
      ],
      github: 'https://github.com/hwangso595/eink-sync',
      image_src: '/einksync.png',
      diagram: '/diagrams/einksync.svg',
    },
    {
      name: "Blind Pear",
      description: [
        "Blind Pear is a dating app built around one idea: personality first, photos later. I co-built it, and it is live on the App Store and Google Play. Recommendations blend how people actually behave in the app with how well their personalities match, and a live mode called Feeling Lucky pairs strangers in real time.",
        "My favourite bug was a race. If two people liked each other at the same instant, each like checked for the other before it had been saved, both checks came back empty, and the match simply never happened. Now likes between the same two people are handled one at a time, so the second always sees the first and the match is created exactly once.",
        "Feeling Lucky had the same kind of problem from a different angle: an accept, a skip and a timeout could all land on the same person at once. Each claim now locks that person first, so nobody gets matched twice, and expired invites are ignored the moment they are read.",
      ],
      image_src: '/blindpear.png',
      diagram: '/diagrams/blindpear.svg',
    },
    {
      name: "Memome",
      description: [
        "Memome is a private memory aid. You ask it something like \"when did I last go fishing?\" and it answers from your own notes, photos and places, citing where every fact came from. It all runs on the phone, encrypted, and works offline after setup. It is in closed testing on Google Play with more than 80 monthly active testers.",
        "Models small enough for a phone are not great with facts on their own, so the app does the careful parts itself. It works out the dates in code, searches four ways at once (dates, words, meaning, and what photos look like), merges the results, and hands the model a short list of numbered evidence. The model, fine-tuned for this job, writes only from that evidence.",
        "Getting there took measuring. Left to itself, a small model gave grounded answers on 3 of 5 test questions and cited none; with the app doing the lookups it was 5 of 5, grounded and cited, and faster. The search model was picked the same way, 100% versus 58% top-1 accuracy on a small benchmark at about a third of the latency. Privacy took real work too: the search indexes quietly kept deleted data around, so deleting now actually wipes it, and removing 100,000 photos went from 216 seconds to 85.",
      ],
      image_src: '/memome.png',
      diagram: '/diagrams/memome.svg',
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