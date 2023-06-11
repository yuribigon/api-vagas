import 'dotenv/config';
import Redis from 'ioredis';

export const redisConfig = new Redis({
  port: 10901,
  host: process.env.REDIS_HOST,
  username: 'default',
  password: process.env.REDIS_PASSWORD,
  lazyConnect: true,
});