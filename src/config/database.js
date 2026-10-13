require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, //cria a CreatedAt e UpdatedAt
    underscored: true, //troca a nome das colunas de camelCase para snake_case
    underscoredAll: true //aplica a regra acima a todas as colunas
  }
};
