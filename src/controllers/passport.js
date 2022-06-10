import passport from 'passport';
import passportJwt from 'passport-jwt';
const ExtracJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
require('dotenv').config();
import db from '../models/index';

passport.use(
    new StrategyJwt(
        {
            jwtFromRequest: ExtracJwt.fromAuthHeaderAsBearerToken,
            secretOrKey: process.env.JWT_SECRET,
        },
        function (jwtPayload, done) {
            return db.User.findOne({ where: { id: jwtPayload.id } })
                .then((user) => {
                    return done(null, user);
                })
                .catch((err) => {
                    return done(err);
                });
        },
    ),
);
module.export = passport;
