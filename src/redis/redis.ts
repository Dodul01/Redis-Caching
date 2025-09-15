import Redis from 'ioredis';

const client = new Redis();

client.on('connect', () => {
    console.log('connected to redis');
});

client.on('error', (err) => {
    console.log('redis error', err);
});

export default client;