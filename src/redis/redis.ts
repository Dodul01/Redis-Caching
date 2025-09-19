import Redis from 'ioredis';

// Use the Redis service name from docker-compose.yml as the host
const client = new Redis({
    host: 'redis',  // The service name of your Redis container in Docker Compose
    port: 6379      // Default Redis port
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.log('Redis error:', err);
});


export default client;
