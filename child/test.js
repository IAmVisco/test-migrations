const { Sequelize } = require('sequelize');
const faker = require('faker');
const config = require('./config/config.json');

const sequelize = new Sequelize({
  ...config.development,
  logging: (msg) => {
    console.log(msg);
  },
});
const { Title } = require('./models');
new Title(sequelize);

const main = async () => {
  const title = await sequelize.models.Title.create({
    title: faker.name.title(),
  });
  console.dir(title.dataValues);
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => {
    process.exit();
  });

