module.exports = {
    HOST: "localhost",
    USER: "myuser",
    PASSWORD: "mypass",
    DB: "mydb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };