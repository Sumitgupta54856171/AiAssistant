const express = require('express');
const router = express.Router();
const registerModel = require('../model/register');
const { db } = require('../config/sequelize');
const { generateToken, verifyToken } = require('../utils/jwt');