import store from './../src/Store';

describe('Store', () => {

    it('Should be able to create a WeakMap;', () => {
        expect(store instanceof WeakMap).toBeTruthy();
    });

});