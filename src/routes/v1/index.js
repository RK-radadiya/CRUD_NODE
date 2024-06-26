


const express = require('express');

const movieRoute = require('./movie_routes');
const seriesRoute = require('./series_routes');
const documentary = require('./documentary_routes');
const adventure = require('./adventure_routes');
const action = require('./action_routes');
const biography = require('./biography_routes');    
const comedy = require('./comedy_routes');
const bollywood = require('./bollywood_routes');
const crime = require('./crime_routes');
const drama = require('./drama_routes');
const family = require('./family_routes');
const fantasy = require('./fantasy_routes');
const foreign = require('./foreign_routes');
const history = require('./history_routes');
const horror = require('./horror_routes');
const musical  = require('./musical_routes');
const romance = require('./romance_routes');
const sport = require('./sport_routes');
const mystery = require('./mystery_routes');
const thai_drama = require('./thai_drama_routes');
const thriller = require('./thriller_routes');
const turkish_tv_shows = require('./turkish_tv_shows_routes');
const tv_shows = require('./tv_shows_routes');
const war = require('./war_routes');


const router = express();

router.use('/movie',movieRoute);
router.use('/series',seriesRoute);
router.use('/documentary',documentary);
router.use('/adventure',adventure);
router.use('/action',action);
router.use('/biography',biography);
router.use('/comedy',comedy);
router.use('/bollywood',bollywood);
router.use('/crime',crime);
router.use('/drama',drama);
router.use('/family',family);
router.use('/fantasy',fantasy);
router.use('/foreign',foreign);
router.use('/history',history);
router.use('/horror',horror);
router.use('/musical',musical);
router.use('/romance',romance);
router.use('/sport',sport);
router.use('/mystery',mystery);
router.use('/thai_drama',thai_drama);
router.use('/thriller',thriller);
router.use('/turkish_tv_shows',turkish_tv_shows);
router.use('/tv_shows',tv_shows);
router.use('/war',war);

module.exports = router
