import "dotenv/config";

export default {
  dialect: "postgres",
  host: "localhost",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // cria createdAt e updatedAt
    underscored: true, // troca camelCase por snake_case nas colunas
    underscoredAll: true, // aplica a regra acima a todas as colunas
  },
};
