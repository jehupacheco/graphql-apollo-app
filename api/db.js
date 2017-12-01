import Sequelize from 'sequelize';

const Conn = new Sequelize('api', 'jehu', 'secret', {
  dialect: 'mysql',
  host: 'db',
});

const Comment = Conn.define('comment', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Conn.sync({ force: true }).then(() => {
  return Comment.create({
    content: 'Comment 1',
  });
});

export default Conn;
