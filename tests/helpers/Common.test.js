import * as common from './../../src/helpers/Common';

describe('Common', () => {

    it('Should be able to raise an exception;', () => {
        expect(() => common.exception('An example exception')).toThrow(new Error('Lenin: An example exception.'));
    });

    it('Should be able to determine if item is an HTMLElement;', () => {
        expect(common.isHTMLElement({})).toBeFalsy();
        expect(common.isHTMLElement(document.createElement('svg'))).toBeTruthy();
    });

    it('Should be able to assert an expression;', () => {
        expect(() => common.assert(false, 'Intentionally false')).toThrow(new Error('Lenin: Intentionally false.'));
        expect(() => common.assert(true, 'Intentionally true')).not.toThrow(new Error('Lenin: Intentionally true.'));
    });

    it('Should be able to determine if an item is a function;', () => {
        expect(common.isFunction(() => {})).toBeTruthy();
        expect(common.isFunction('function')).toBeFalsy();
    });

    it('Should be able to determine if an item is undefined;', () => {
        expect(common.isUndefined('is defined')).toBeFalsy();
        expect(common.isUndefined()).toBeTruthy();
    });

});