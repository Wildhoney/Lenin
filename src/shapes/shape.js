import {compose, moveHorizontal} from './../helpers/functions';

/**
 * @module Penne
 * @submodule Rectangle
 * @extends {Shape}
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Penne
 */
export default class Shape {

    /**
     * @method moveHorizontal
     * @param {Number} by
     * @return {void}
     */
    moveHorizontal(by) {
        compose(moveHorizontal(by))(this);
    }

    /**
     * @method getAttributes
     * @return {{}}
     */
    getAttributes() {
        return {};
    }

}
