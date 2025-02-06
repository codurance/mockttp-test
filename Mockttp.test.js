const {getLocal} = require('mockttp');
const fetch = require('cross-fetch');

const server = getLocal();

describe('mockttp', () => {
    beforeEach(async () => {
        await server.start();
        await server.forGet('/').thenJson(200, {});
    });

    afterEach(async () => {
        await server.stop();
    });

    it('should mock http', async () => {
        await fetch(server.url);
    });

    it('should mock http', async () => {
        await fetch(server.url);
    });
});
