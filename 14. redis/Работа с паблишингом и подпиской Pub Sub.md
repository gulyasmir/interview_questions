```
const sub = new Redis();
sub.subscribe('channel');
sub.on('message', (channel, message) => {
console.log(`Received message: ${message} on channel: ${channel}`);
});const pub = new Redis();
await pub.publish('channel', 'Hello, Redis!');
```
