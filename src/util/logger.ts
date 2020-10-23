import path from "path"

import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file"
 
const rootDir = require.main ? require.main.filename : "../.."

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new DailyRotateFile({
      filename: 'application-%DATE%.log',
      dirname: `${(require.main) ? path.dirname(rootDir): rootDir}/../logs/`,
      level: 'info',
      handleExceptions: true,
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ],
});
 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
    level: "info"
  }));
}

export default logger
