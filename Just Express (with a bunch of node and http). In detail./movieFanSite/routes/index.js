const express = require('express')
const router = express.Router()
const request = require('request')

const apiKey = '1fb720b97cc13e580c2c35e1138f90f8'
const apiBaseUrl = 'http://api.themoviedb.org/3'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300'

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl
  next()
})

/* GET home page. */
router.get('/', function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    console.log('The error')
    console.log(error)
    console.log(response)
    const parseData = JSON.parse(movieData)
    console.log(parseData)
    res.render('index', {
      parsedData: parseData.results
    })
  })
})

router.get('/movie/:id', (req, res, next) => {
  // res.json(req.params.id)
  const movieId = req.params.id
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
  // res.send(thisMovieUrl)
  request.get(thisMovieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.render('single-movie', {
      parsedData
    })
  })
})

router.post('/search', (req, res, next) => {
  const userSearchTerm = encodeURI(req.body.movieSearch)
  const cat = req.body.cat
  const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${apiKey}`
  request.get(movieUrl, (error, response, movieData) => {
    const parsedData = JSON.parse(movieData)
    res.render('index', {
      parsedData: parsedData.results
    })
  })
})

module.exports = router
