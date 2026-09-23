// Knobs for the recommendation engine. Tweak these and refresh to see how results change.

export const CONFIG = {
  // How many of a book's tags we keep and compare against the game.
  topTagsPerBook: 5,

  // How many books to show per game.
  booksPerGame: 12,

  // Variety: at most this many books by the same author per game.
  maxBooksPerAuthor: 2,

  // A book needs at least this many tags matching the game to be recommended.
  minTagMatches: 1,

  // Open Library queries: one per game subject per sort order.
  // Sort options: "rating", "readinglog" (most read), "want_to_read", "already_read".
  // want_to_read still counts in the score below; these sorts just decide which books we fetch.
  sorts: ["readinglog", "rating"],
  resultsPerQuery: 30,
  maxParallelRequests: 4, // be polite to Open Library
  requireFiction: true, // adds subject:"fiction" to every query to drop non-fiction
  requireCover: true,

  // Final score = tags * tagMatch + rating * ratingScore + readingLog * readScore + wantToRead * wantScore
  weights: {
    tags: 0.5,
    rating: 0.2,
    readingLog: 0.15,
    wantToRead: 0.15,
  },

  // A book with few ratings is pulled toward this average, so a single 5★ doesn't win.
  ratingPrior: { average: 3.5, weight: 10 },

  // Subjects that are catalog noise, not real tags. They are dropped before choosing a book's top tags.
  noiseSubjects: [
    /^nyt:/i, /new york times/i, /reading level/i, /^fiction$/i, /^fiction, general$/i, /^novels?$/i,
    /large type/i, /accessible book/i, /protected daisy/i, /in library/i, /lending library/i,
    /open library/i, /staff picks/i, /long now/i, /translations? into/i, /fiction in english/i,
    /(american|english|british) fiction/i, /award/i, /bestseller/i, /^general$/i, /_/,
    /^literature$/i, /^textbooks?$/i, /^english language/i, /^spanish language/i,
    /^readers$/i, /^specimens$/i, /^criticism/i, /^history and criticism/i, /great books of the western world/i,
    /^[a-z]+:/i, // catalog keys like "Series:Assistant-and-the-Villain"
  ],

  // Books with any of these subjects are skipped entirely (gamers probably don't want picture books).
  // Remove the juvenile line if you want middle-grade books like Percy Jackson back in.
  excludedSubjects: [
    /picture books/i, /board books/i, /stories in rhyme/i, /toy and movable/i, /concept books/i,
    /juvenile/i, /children.s (fiction|stories|literature)/i,
  ],
};
