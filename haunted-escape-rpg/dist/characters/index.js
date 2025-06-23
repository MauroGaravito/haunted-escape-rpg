"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dalia = exports.Glitch = exports.Max = void 0;
var Character = /** @class */ (function () {
    function Character(name, health) {
        this.name = name;
        this.health = health;
        this.inventory = [];
    }
    Character.prototype.attack = function () {
        return "".concat(this.name, " attacks!");
    };
    Character.prototype.defend = function () {
        return "".concat(this.name, " defends!");
    };
    Character.prototype.useItem = function (item) {
        if (this.inventory.includes(item)) {
            return "".concat(this.name, " uses ").concat(item, "!");
        }
        else {
            return "".concat(this.name, " does not have ").concat(item, " in their inventory.");
        }
    };
    return Character;
}());
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max() {
        return _super.call(this, "Max", 100) || this;
    }
    return Max;
}(Character));
exports.Max = Max;
var Glitch = /** @class */ (function (_super) {
    __extends(Glitch, _super);
    function Glitch() {
        return _super.call(this, "Glitch", 80) || this;
    }
    return Glitch;
}(Character));
exports.Glitch = Glitch;
var Dalia = /** @class */ (function (_super) {
    __extends(Dalia, _super);
    function Dalia() {
        return _super.call(this, "Dalia", 90) || this;
    }
    return Dalia;
}(Character));
exports.Dalia = Dalia;
