const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.get('/', pageController.getOne('homepage'));
router.get('/gallery', pageController.getOne('gallery'));
router.get('/rules', pageController.getOne('pravidla'));
router.get('/memberships', pageController.getOne('clenstva'));
router.get('/group-exercises', pageController.getGroupExercises);
router.get('/group-exercises/:slug', pageController.getExercise);
router.get('/relax', pageController.getOne('relax'));
router.get('/sport-areas', pageController.getOne('sportove-priestory'));
router.get('/trainers', pageController.getOne('treneri'));
router.get('/regions', pageController.getOne('regiony'));
router.get('/regions/:slug', pageController.getRegion);
router.get('/extras', pageController.getOne('benefity'));
router.get('/about', pageController.getOne('kontakt'));

module.exports = router;
