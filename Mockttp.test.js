const {getLocal} = require('mockttp');

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
        await fetch(server.url + '/1');
        await fetch(server.url + '/2');
    });

    it('should mock http', async () => {
        await fetch(server.url + '/3');
    });
});
