import shapeMap from './../../src/shapes/utilities/Map';

describe('Map', () => {

    it('Should be able to yield a Map object for the shape collection;', () => {
        expect(shapeMap instanceof Map).toBeTruthy();
    });

    it('Should have a list of default shapes;', () => {
        expect(shapeMap.has('rect')).toBeTruthy();
        expect(shapeMap.has('circle')).toBeTruthy();
    });

});