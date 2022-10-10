var Player = /** @class */ (function () {
    function Player(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Player.prototype.sayHi = function (name) {
        return "Hello ".concat(name, ". My name is ").concat(this.firstName, " ").concat(this.lastName);
    };
    Player.prototype.fullName = function () {
        return "return ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Player;
}());
