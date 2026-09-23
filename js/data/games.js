// Hand-curated game data. This is the "game → story" bridge that Open Library can't give us.
//
//   tags     – genres / story categories. A book must match at least one of these to be recommended.
//   themes   – what the story is *about*
//   tropes   – recurring story devices
//   subjects – exact Open Library subject names used to fetch candidate books.
//              Every subject here was checked to return results on openlibrary.org.
//   wiki     – English Wikipedia page title, used to load the game's cover art.
//   cover    – optional image path/URL that overrides the Wikipedia cover (e.g. "img/undertale.png").
//   accent   – colour used for this game's glow and highlights.
//
// Book matching compares each book's tags against tags + themes + tropes + subjects.

export const GAMES = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    year: 2022,
    studio: "FromSoftware",
    wiki: "Elden_Ring",
    accent: "#d4af37",
    synopsis:
      "The Elden Ring has been shattered, and the demigods who claimed its shards have gone mad with power and waged war across the Lands Between. You are one of the Tarnished, exiles called back from death to reclaim the Ring and become Elden Lord. The story is pieced together from ruins, item descriptions, and the broken, desperate people you meet along the way.",
    tags: ["dark fantasy", "epic fantasy", "high fantasy", "mythology"],
    themes: ["gods", "decay", "ambition", "fate", "death and rebirth", "power", "hubris"],
    tropes: ["fallen kingdom", "ancient curse", "knights", "cryptic lore", "exile", "demigods", "dragons"],
    subjects: ["dark fantasy", "epic fantasy", "knights and knighthood", "gods", "dragons"],
  },
  {
    id: "the-last-of-us",
    title: "The Last of Us",
    year: 2013,
    studio: "Naughty Dog",
    wiki: "The_Last_of_Us_(video_game)",
    accent: "#7fa35b",
    synopsis:
      "Twenty years after a fungal pandemic collapsed civilization, hardened smuggler Joel is hired to escort Ellie, a fourteen-year-old who may hold the key to a cure, across a ruined United States. What starts as a job becomes a fierce, fragile bond between two people who have lost almost everything.",
    tags: ["post-apocalyptic", "dystopia", "survival horror", "horror"],
    themes: ["grief", "survival", "found family", "morality", "love and loss", "humanity", "fathers and daughters"],
    tropes: ["pandemic", "epidemics", "zombies", "road trip", "reluctant guardian", "morally grey hero", "end of the world"],
    subjects: ["post-apocalyptic", "epidemics", "zombies", "survival", "dystopia"],
  },
  {
    id: "hollow-knight",
    title: "Hollow Knight",
    year: 2017,
    studio: "Team Cherry",
    wiki: "Hollow_Knight",
    accent: "#9dbbe0",
    synopsis:
      "Beneath the quiet town of Dirtmouth lies Hallownest, a once-great insect kingdom now consumed by a mysterious infection. A small, silent knight descends into its ruins, piecing together how the kingdom fell and the sacrifice that was made to hold back the plague.",
    tags: ["dark fantasy", "gothic", "mystery", "fantasy"],
    themes: ["isolation", "duty", "sacrifice", "legacy", "decay", "memory"],
    tropes: ["fallen kingdom", "kingdoms", "plague", "underground world", "silent protagonist", "sealed evil", "insects", "knights"],
    subjects: ["dark fantasy", "gothic fiction", "insects", "plague", "kingdoms"],
  },
  {
    id: "omori",
    title: "Omori",
    year: 2020,
    studio: "OMOCAT",
    wiki: "Omori_(video_game)",
    accent: "#c7a6ff",
    synopsis:
      "In a bright dreamworld called Headspace, Omori and his friends go on colourful adventures. In the waking world, Sunny hasn't left his house in years, haunted by something that happened to his sister. As the days before his move run out, he has to face the truth he's buried, and the friends he left behind.",
    tags: ["psychological horror", "psychological fiction", "coming of age", "surreal"],
    themes: ["grief", "guilt", "depression", "friendship", "trauma", "memory", "forgiveness", "loss"],
    tropes: ["dream world", "dreams", "unreliable narrator", "hidden truth", "childhood friends", "brothers and sisters"],
    subjects: ["psychological fiction", "coming of age", "grief", "guilt", "dreams"],
  },
  {
    id: "portal-2",
    title: "Portal 2",
    year: 2011,
    studio: "Valve",
    wiki: "Portal_2",
    accent: "#3fa9f5",
    synopsis:
      "Test subject Chell wakes up in the overgrown, decaying Aperture Science facility, with only a bumbling robot named Wheatley for help. She has to think her way through portal puzzles while the vengeful, darkly hilarious AI GLaDOS keeps testing her, and a buried history of the company comes to light.",
    tags: ["science fiction", "dark comedy", "humorous fiction", "satire"],
    themes: ["artificial intelligence", "science ethics", "betrayal", "humor", "identity"],
    tropes: ["rogue AI", "robots", "androids", "computers", "mad scientist", "evil corporation", "silent protagonist", "test subject"],
    subjects: ["artificial intelligence", "robots", "androids", "humorous fiction", "satire"],
  },
  {
    id: "zelda",
    title: "The Legend of Zelda",
    year: 1986,
    studio: "Nintendo",
    wiki: "The_Legend_of_Zelda",
    accent: "#3fbf7f",
    synopsis:
      "Across countless ages, the courageous hero Link, the wise princess Zelda, and the power-hungry Ganon are reborn to fight over the Triforce and the fate of Hyrule. Each adventure is a new quest through dungeons, forests, and ruins to rise against the darkness once more.",
    tags: ["high fantasy", "adventure", "fairy tales", "epic fantasy"],
    themes: ["courage", "destiny", "wisdom", "good and evil", "exploration", "heroes"],
    tropes: ["chosen one", "quest", "quests (expeditions)", "princesses", "reincarnation", "legendary sword", "dark lord", "magic"],
    subjects: ["quests (expeditions)", "fairy tales", "heroes", "magic", "princesses"],
  },
  {
    id: "undertale",
    title: "Undertale",
    year: 2015,
    studio: "Toby Fox",
    wiki: "Undertale",
    cover: null, // Wikipedia has no cover image for this one; drop a file in img/ and point to it here.
    accent: "#e0304e",
    synopsis:
      "Long ago, humans sealed the monsters underground. Now a child has fallen into their world. Every monster you meet can be fought, or befriended and spared, and the game remembers your choices. Undertale is a funny, strange, and surprisingly emotional story about mercy and determination.",
    tags: ["cozy fantasy", "humorous fantasy", "fairy tales", "metafiction"],
    themes: ["mercy", "kindness", "choice and consequence", "friendship", "determination", "compassion"],
    tropes: ["monsters", "underground world", "fourth wall breaking", "pacifism", "sealed away", "unlikely friends", "found family", "witches", "villains"],
    subjects: ["cozy fantasy", "fantasy, humorous", "discworld (imaginary place)", "monsters", "kindness"],
  },
  {
    id: "red-dead-redemption",
    title: "Red Dead Redemption",
    year: 2010,
    studio: "Rockstar Games",
    wiki: "Red_Dead_Redemption",
    accent: "#c2572b",
    synopsis:
      "In 1911, as the Wild West fades, former outlaw John Marston is forced by federal agents to hunt down the members of his old gang. It's the only way to get back his wife and son. His journey across the frontier asks whether a man can ever truly outrun his past.",
    tags: ["western", "western stories", "historical fiction", "crime"],
    themes: ["redemption", "loyalty", "family", "end of an era", "violence", "frontier and pioneer life"],
    tropes: ["outlaws", "revenge", "gunslinger", "gang", "cowboys", "bounty hunter", "lawmen"],
    subjects: ["western stories", "outlaws", "cowboys", "frontier and pioneer life", "redemption"],
  },
  {
    id: "genshin-impact",
    title: "Genshin Impact",
    year: 2020,
    studio: "HoYoverse",
    wiki: "Genshin_Impact",
    accent: "#69c3e8",
    synopsis:
      "A traveler from another world is separated from their twin by an unknown god and stranded in Teyvat, a land of seven nations each ruled by an elemental Archon. Searching for their sibling, they meet gods, heroes, and the found family of their journey, and uncover secrets about the world itself.",
    tags: ["high fantasy", "adventure", "fantasy", "mythology"],
    themes: ["gods", "found family", "exploration", "identity", "freedom", "siblings"],
    tropes: ["portal fantasy", "lost sibling", "elemental magic", "magic", "chosen traveler", "gods among mortals"],
    subjects: ["magic", "gods", "siblings", "mythology"],
  },
  {
    id: "love-and-deepspace",
    title: "Love and Deepspace",
    year: 2024,
    studio: "Infold Games",
    wiki: "Love_and_Deepspace",
    accent: "#ff6fa8",
    synopsis:
      "In futuristic Linkon City, you're a Deepspace Hunter fighting interdimensional creatures called Wanderers. Along the way you grow close to a handful of mysterious men, each tied to a past, and perhaps past lives, you can't remember.",
    tags: ["science fiction romance", "paranormal romance", "fantasy romance", "romantasy"],
    themes: ["love", "romance", "destiny", "memory", "trust", "love stories", "science fiction"],
    tropes: ["fated lovers", "reincarnation", "mysterious past", "slow burn", "monster hunter", "space"],
    subjects: ["paranormal romance", "fantasy romance", "romantasy", "science fiction romance", "reincarnation"],
  },
];
