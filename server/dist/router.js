"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("./Controller/postController");
const searchController_1 = require("./Controller/searchController");
const userController_1 = require("./Controller/userController");
// import { deleteFavorite, getBookings, getFavorites, addFavorites, addBookings, changeUsername } from './Controller/userController'
const router = (0, express_1.Router)();
router.get('/gymclasses', postController_1.getGymClasses);
router.get('/gymclass/:id', postController_1.getGymClass);
router.post('/gymclass', postController_1.postGymClass);
router.get('/favorites/:id', userController_1.getFavorites);
router.put('/favorites/add/:id', userController_1.addFavorites);
router.put('/favorites/delete/:id', userController_1.deleteFavorite);
router.get('/favorites/details/:id', userController_1.getFavoritesDetails);
router.get('/bookings/:id', userController_1.getBookings);
router.put('/bookings/add/:id', userController_1.addBookings);
router.get('/bookings/details/:id', userController_1.getBookingsDetails);
router.post('/payment', userController_1.makePayment);
router.get('/search', searchController_1.getClasses);
router.patch('/change/username/:id', userController_1.changeUsername);
router.patch('/change/pic/:id', userController_1.changePic);
router.post('/api/upload', userController_1.uploadToCloudinary);
exports.default = router;
