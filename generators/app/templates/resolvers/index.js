const { booksResolvers } = require('./books');

const resolvers = [booksResolvers];

module.exports = {
  resolvers,
};