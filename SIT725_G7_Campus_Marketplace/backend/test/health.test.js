const request = require('supertest');
const app = require('../app'); // Adjusted to point to backend/app.js
const { expect } = require('chai'); // Standard assertion library for Mocha

describe('Health Check', () => {
    it('should return successful response', async () => {
        const response = await request(app).get('/api/health');        
        expect(response.status).to.equal(200);
    });
});