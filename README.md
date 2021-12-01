# GraphQL-Project

## Instructions

```
#Install dependencies
npm install

#Run migrations
npx sequelize db:migrate

#Run seeds
npx sequelize db:seed:all

#Set the JWT secret
echo 'module.exports.MY_SECRET_KEY = "SomeSecretKey"' > ./config/jwt.js
```