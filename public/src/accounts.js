//returns the account object that has the matching ID.
function findAccountById(accounts, id) {
  const found = accounts.find(account => account.id == id)
  return found;
}

//returns an array of provided account objects sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() >
  accountB.name.last.toLowerCase() ? 1 : -1)
  return sorted;
}

function getTotalNumberOfBorrows(accounts, books) {
  const {
    id: accountId
  } = accounts;

  return books.reduce((accumulator, book) => {
    //call back function
    return (
      accumulator +
      book.borrows
      .filter(borrow => borrow.id === accountId)
      .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1,0)
    );
  }, 0);
}

function getBooksPossessedByAccount(accounts, books, authors) {
const inPossesion = [];
books.map((book) => {
  book.borrows.map((borrow) => {
    authors.map((author) => {
   if (author.id === book.authorId) book ["author"] = author;
    });
    if (borrow.returned === false && borrow.id === accounts.id) {
      inPossesion.push(book);
    };
  });
});
return inPossesion;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
