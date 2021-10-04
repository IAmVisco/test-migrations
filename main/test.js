const { Sequelize } = require('sequelize');
const faker = require('faker');
const config = require('./config/config.json');

const sequelize = new Sequelize({
  ...config.development,
  logging: (msg) => {
    console.log(msg);
  },
});
const { models: { Title } } = require('child');
const { User } = require('./models');
new Title(sequelize);
new User(sequelize);

const main = async () => {
  const title = sequelize.models.Title.build({
    title: faker.name.title(),
  });
  console.dir(title); // <- This outputs `UUIDV4 {}` instead of string in the `id` property
  await title.save(); // <- This fails
  const user = await sequelize.models.User.create({
    name: faker.name.firstName(),
    title_id: title.id,
  });
  console.dir(user.dataValues);
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .then(() => {
    process.exit();
  });

