const Chance = require('chance');

const chance = new Chance();

const {
    usersRepository
} = require('../../../src/frameworks/repositories/inMemory');

const { 
    User,
    constants: {
        userConstants: {
            genders
        }
    }
} = require('../../../src/entities');

describe('Users repository', () => {
    test('New user should be added and returned', async () => {
        
    });
    test('New user should be deleted', async () => {});
    test('New user should be updated', async () => {});
    //test('New user should be added and returned', async () => {});
});