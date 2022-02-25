// importando a config(trecho do código que faz conexao com bd)
const Database = require('./config')

// estrutura de funcao ASYNC (Sempre que usar um await no js, precisa colocar essa funcao)
const initDb = {
  async init() {
    // iniciando conexao com bd
    // usar await(esperar o db iniciar para começar a fazer as introducoes)
    const db = await Database()

    // executando cód SQL
    await db.exec(`CREATE TABLE profile(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, 
      avatar TEXT, 
      monthly_budget INT, 
      days_per_week INT,
      hours_per_day INT,
      vacation_per_year INT,
      value_hour INT
  )`)

    await db.exec(`CREATE TABLE jobs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT,
    created_at DATETIME
  )`)

    await db.run(`INSERT INTO profile(
      name, 
      avatar, 
      monthly_budget, 
      days_per_week, 
      hours_per_day, 
      vacation_per_year,
      value_hour
  ) VALUES (
      "Matheus",
      "https://avatars.githubusercontent.com/u/62353431?v=4",
      3000,
      5,
      5,
      4,
      70
  )`)

    await db.run(`INSERT INTO jobs(
    name,
    daily_hours,
    total_hours,
    created_at
  ) VALUES (
    "Pizzaria guloso",
    2,
    1,
    1645794052692
  )`)

    await db.run(`INSERT INTO jobs(
    name,
    daily_hours,
    total_hours,
    created_at
  ) VALUES (
    "One Two Project",
    3,
    47,
    1645794052692
  )`)

    // fechando a conexao com bd
    await db.close()
  }
}

initDb.init()
