// /** @deprecated */
// declare const name:void;
// declare var navigator: Navigator;

const BASE_URL = "https://imdb.iamidiotareyoutoo.com";

const popularMovieNames = [
  "Batman", "Superman", "Spiderman", "Iron Man", "Thor",
  "Avengers", "Hulk", "Captain America", "Doctor Strange",
  "Black Panther", "Aquaman", "Wonder Woman", "Flash",
  "Deadpool", "Venom", "Shazam", "Ant Man", "Guardians",
  "Eternals", "Fantastic Four"
];


export const getPopularMovies = async () => {
  const results = await Promise.all(
    popularMovieNames.map(async (name) => {
      const res = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${name}`);
      const data = await res.json();
      return data.description ? data.description[0] : null; 
      // take first matching movie for each title
    })
  );

  // Filter nulls & return only 20 movies
  return results.filter(Boolean).slice(0, 20);
};

export const searchMovies = async (name)=>{
    const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${name}`);
    const data = await response.json()
    return data.description
};
