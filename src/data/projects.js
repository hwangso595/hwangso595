const PROJECTS = [
    {
      name: "Culdesac",
      description: 'Culdesac is a local event-discovery app on Google Play that helps neighbours find events and chat. I built it as the sole engineer: a React Native/Expo client on Supabase, with 15 Deno edge functions, 160+ row-level security policies, and a feed ranked entirely in SQL. Every PR runs about 870 Jest tests, and migrations are checked by pgTAP.',
      website: 'https://yourculdesac.com',
      image_src: '/culdesac.jpg',
      flow: [
        { layer: "Client", items: ["Expo React Native app", "React Query + realtime chat"] },
        { layer: "Supabase", items: ["Auth, Storage, Realtime", "RPCs behind row-level security"] },
        { layer: "Postgres", items: ["SQL feed ranking", "Trigram + geo indexes", "Scheduled jobs"] },
        { layer: "Edge", items: ["Deno edge functions", "Daily event ingestion", "Push + email"] },
        { layer: "Delivery", items: ["GitHub Actions CI", "EAS builds + OTA updates"] },
      ],
      challenges: [
        { title: "Stable paging while scores change", body: "Dislikes and seen-marks re-score the feed while you scroll, so offset paging shifted rows and silently skipped some. A keyset cursor on score, time and id keeps every unserved row reachable, while older app builds keep the old path." },
        { title: "Ranking no single post can dominate", body: "Uncapped all-time views let one old listing outrank everything personal. Engagement is now capped, distance decays smoothly instead of a hard radius, and undated events sink." },
        { title: "Ingesting messy public calendars", body: "The city directory refreshes daily from ICS feeds, library calendars, venue sites and open data, each with its own format, time zone and recurrence rules. Each source is a pure, network-free transform under test." },
      ],
    },
    {
      name: "GroceryPulse",
      description: 'GroceryPulse is a Canadian grocery price index and data API. Scrapers for 22 retail banners (about 160 stores in 13 cities) load roughly 8K prices a week into append-only Postgres, and a chained price index is computed from the full history.',
      website: 'https://grocerypulse.ca',
      image_src: '/grocerypulse.jpg',
      flow: [
        { layer: "Collect", items: ["Scrapers for 22 banners", "~160 stores, 13 cities"] },
        { layer: "Match", items: ["Tiered SKU matching", "Unit normalization", "Outlier filters"] },
        { layer: "Store", items: ["Append-only Postgres", "Point-in-time snapshots"] },
        { layer: "Compute", items: ["Chained price index", "Shrinkflation detection"] },
        { layer: "Serve", items: ["Next.js site", "REST data API"] },
      ],
      challenges: [
        { title: "Fast collection from bot-protected sites", body: "Rendering pages in headless Chromium took about 80 s per request and failed often. A lighter HTTP client with paced throttling and shared retries cut that to 0.7 s, a full run from 358 to 111 minutes, and lifted coverage from 81% to 94%." },
        { title: "Matching SKUs across catalogs", body: "The same product appears as abbreviated register names, French or English labels, and different pack sizes. A tiered matcher goes from barcodes to brand and pack size to abbreviation expansion, ending in rubric-guided LLM review: 44.6K SKUs matched at 29/30 spot-check precision." },
        { title: "An index you can trust and revise", body: "Prices are never edited after insert, so one versioned code path can recompute the whole index from history. Publication gates hold back weeks with thin coverage or outlier prices." },
      ],
    },
    {
      name: "E-Ink Sync",
      description: 'An open-source Obsidian plugin (340+ downloads) that syncs reMarkable tablets into Obsidian without the vendor cloud, turning handwriting and PDF highlights into Markdown notes. It is backed by 700+ tests.',
      github: 'https://github.com/hwangso595/eink-sync',
      image_src: '/einksync.png',
      flow: [
        { layer: "Tablet", items: ["reMarkable 1/2 over SSH"] },
        { layer: "Sync", items: ["Incremental SFTP pull", "Syncthing (optional)"] },
        { layer: "Parse", items: ["v6 + legacy v3/v5 parsers", "PDF highlight matching"] },
        { layer: "Obsidian", items: ["Templated Markdown notes", "Rendered pages + local OCR"] },
      ],
      challenges: [
        { title: "Parsing undocumented stroke files", body: "Firmware before 3.0 stores strokes in v3/v5 binary files that no library reads. A hand-written parser walks the header, layers, strokes and points, and turns highlighter strokes into boxes used to pull the highlighted text out of the PDF." },
        { title: "Gentle sync on a 512 MB tablet", body: "Transfers run one file at a time, unchanged documents cost zero extra round trips, and syncing pauses when the tablet runs low on free memory." },
        { title: "Clean text from fragmented highlights", body: "One underline can arrive as three or four pieces plus one-letter tails. A merger joins pieces by page, colour and spatial overlap, drops duplicates, and reads two-column pages in order." },
      ],
    },
    {
      name: "Blind Pear",
      description: 'Blind Pear is a dating app on the App Store: personality first, photos later. I co-built it on Expo and Supabase, including race-free matching and a realtime live-match queue.',
      image_src: '/blindpear.png',
      flow: [
        { layer: "Client", items: ["Expo React Native (iOS)"] },
        { layer: "Supabase", items: ["Auth, Realtime, Storage"] },
        { layer: "Edge functions", items: ["Swipe + match handlers", "Recommendation scoring", "Push dispatch"] },
        { layer: "Data", items: ["Postgres + vector embeddings", "Atomic RPCs"] },
      ],
      challenges: [
        { title: "Race-free mutual matching", body: "Two people liking each other at the same instant could each miss the other's like, losing the match. The insert and check now run in one Postgres function under a transaction-scoped advisory lock on the sorted user pair." },
        { title: "A realtime live-match queue", body: "Feeling Lucky pairs strangers live, so accepts, skips and expiries can collide. Claims are atomic guarded updates using row locks with SKIP LOCKED, and expiry is checked on read with a shared clock-skew grace." },
        { title: "Personality-first recommendations", body: "Profiles are embedded with multimodal embeddings, and recommendations blend behavioural signals with personality similarity, so people are matched before photos are shown." },
      ],
    },
    {
      name: "Memome",
      description: 'Memome is a private memory aid that runs fully on-device on iOS and Android, even offline. You can ask about your notes, photos and places, and a local LLM answers with cited sources from an encrypted store.',
      image_src: '/memome.png',
      flow: [
        { layer: "Capture", items: ["Notes, voice, files", "Photo library"] },
        { layer: "Understand", items: ["Int8 CLIP vectors", "OCR, offline places"] },
        { layer: "Encrypted store", items: ["SQLCipher", "FTS5 + sqlite-vec"] },
        { layer: "Retrieve", items: ["Date, text, semantic, visual", "Reciprocal-rank fusion"] },
        { layer: "Answer", items: ["llama.cpp local LLM", "Cited evidence only"] },
      ],
      challenges: [
        { title: "Grounded answers from a small LLM", body: "Run raw, a 0.6B model was grounded on 3 of 5 test questions and cited none. The app now does dates, lookups and counts itself and lets the model write only from numbered evidence: 5 of 5 grounded and cited, with answers down from 7 s to 4 s in an emulator benchmark." },
        { title: "Hybrid search in an encrypted DB", body: "Word matches, text embeddings and CLIP photo vectors live in one SQLCipher database and are merged with reciprocal-rank fusion. EmbeddingGemma 300M won the benchmark with 100% recall@1 against 58%, at about a third of the latency." },
        { title: "Deletes that really delete", body: "sqlite-vec and FTS5 both keep deleted data around. Vectors are zeroed before deletion, FTS5 secure-delete is on, and bulk removal rewrites the index once, cutting a 100K-photo delete from 216 s to 85 s." },
      ],
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