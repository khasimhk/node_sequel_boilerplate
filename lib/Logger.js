// @flow
// eslint-disable-next-line import/no-unresolved
import winston from 'winston';
// eslint-disable-next-line import/no-unresolved
import Joi from '@hapi/joi';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      level: Joi.string()
        .allow(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
        .default('debug'),
    }),
  ],
});
