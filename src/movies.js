// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}
function getAllDirectorsBonus(moviesArray) {
    return Array.from(new Set(moviesArray.map(movie => movie.director)))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => 
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
        .length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    return Number((moviesArray.reduce((acc,cur) => acc + (cur.score || 0),0)/moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return scoresAverage(moviesArray.filter(movie => movie.genre.includes('Drama')))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return Array.from(moviesArray).sort((movie1,movie2) => {
        return movie1.year === movie2.year 
            ? movie1.title.localeCompare(movie2.title)
            : movie1.year > movie2.year ? 1 : -1
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
            .map(movie => movie.title)
            .sort((a,b) => a.localeCompare(b))
            .slice(0,20)
}

//console.log(movies.map(movie => movie.duration))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
        //console.log(index, movie.title)
        const hours =  movie.duration.match(/(\d+)h( (\d+)min)*/)[1] || 0
        const minutes = movie.duration.match(/(\d+)h( (\d+)min)*/)[3] || 0
        //console.log(Number(hours)*60 + Number(minutes))
        const duration = Number(hours)*60 + Number(minutes)
        //console.log(matches.length)
        //const duration = Number((movie.duration.match(/(\d+)h (\d+)min/)[1] * 60) || 0) + Number(movie.duration.match(/(\d+)h (\d+)min/)[2] || 0)
        return { ...movie,duration}
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null

    const years = {}
    moviesArray.forEach(movie => {
        years[movie.year]?.scores ? years[movie.year].scores.push(movie.score) : years[movie.year] = {scores: [movie.score]}

    });
    for (const year in years) {
        years[year].average = Number((years[year].scores.reduce((acc,cur) => acc + cur,0) /  years[year].scores.length).toFixed(2))
    }
    //console.log(years)
    const bestYear = Object.keys(years).sort((a,b) => 
        years[a].average === years[b].average 
            ? a < b ? -1 : 1
            : years[a].average >= years[b].average 
                ? -1 
                : 1
        )[0]
    //console.log(Array.from(Object.keys(years)).sort((a,b) => years[a].average >= years[b].average ? -1 : 1))
    return `The best year was ${bestYear} with an average score of ${years[bestYear].average}`
}



const testMovies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'Schindler"s List',
      year: 1993,
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      score: 8.9
    },
    {
    title: 'Saving Private Ryan',
    year: 1998,
    director: 'Steven Spielberg',
    duration: '2h 49min',
    genre: ['Drama', 'War'],
    score: 8.6
  }
]

//console.log(movies.filter(movie => movie.year === 1972))

bestYearAvg(testMovies)
//bestYearAvg(movies)

//movies[0].duration.match(/(\d+)h (\d+)min/)
turnHoursToMinutes(testMovies) instanceof Array

turnHoursToMinutes(testMovies)
const testEmpty = []

//getAllDirectorsBonus(testMovies)
//howManyMovies(testMovies)
//scoresAverage(testMovies)
//scoresAverage(testEmpty)

const people = [
    {name: 'p', person: true},
    {name: 'a', person: false},
    {name: 'p', person: true},
    {name: 'b', person: false},
    {name: 'p', person: true},
    {name: 'c', person: false}
]
testMovies
people.filter(person => !person.person)

//people.filter(!this.person)
 1 == true
 people.filter((_,index) => index % 2)

 orderByYear(testMovies)


 orderAlphabetically(testMovies)

 const joinPeeps = (bigString,stringtoAdd) => bigString.concat(' ',stringtoAdd)

 const arrOfStrings = ['foo','bar','baz']

 arrOfStrings.reduce(joinPeeps,'')

//turnHoursToMinutes(movies)

 
  