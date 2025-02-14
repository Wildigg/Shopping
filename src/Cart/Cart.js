"use strict";

const EmptyCartException = require("../Cart/EmptyCartException.js");
const UpdateCartException = require("../Cart/UpdateCartException.js");

module.exports = class CartItem {

    //region private attributes
    #items;
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.items = items
    }

    get items() {
        return this.#items
    }

    set items(value) {
        this.#items = value
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



