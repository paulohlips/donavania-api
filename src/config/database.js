module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "donavania",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
