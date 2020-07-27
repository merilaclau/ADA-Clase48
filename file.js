/* Convertir este objeto en una función constructora:
const book = {
    _name: "Nuestra parte de noche",
    author: "Mariana Enríquez",
    year: "2020",
    isbn: 456789321,
    reviewList: [],
    get name () {
        return `${this._name} por ${this.author} - ${this.isbn}`;
    },
    addNewReview: function (user, description, ranking) {
        let review = {
            user,
            description,
            ranking
        }
        this.reviewList.push(review);
    },
    rankingAverage: function () {
        let total = this.reviewList.reduce((total, review) => total += review.ranking, 0);
        return average = total/this.reviewList.length;
    }
}
*/

function Book (name, author, year, isbn) {
    this._name = name;
    this.author = author;
    this.year = year;
    this.isbn = isbn;
    this.reviewList = [];
    this.getName = function () {
        return `${this._name} por ${this.author} - ${this.isbn}`;
    };
    this.addNewReview = function (user, description, ranking) {
        let review = new Review (user, description, ranking);
        this.reviewList.push(review);
    };
    this.rankingAverage = function () {
        let total = this.reviewList.reduce((total, review) => total += review.ranking, 0);
        return average = total/this.reviewList.length;
    }
};

function Review (user, description, ranking) {
    this.user = user;
    this.description = description;
    this.ranking = ranking;
}

let bookMeri = new Book("Nuestra parte de noche", "Mariana Enriquez", 2020, 456123789);

