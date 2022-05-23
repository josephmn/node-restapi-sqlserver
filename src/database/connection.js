import sql from "mssql";

const dbSettings = {
  user: "sa",
  password: "Sgr9cl4v3s",
  server: "localhost",
  database: "webstore",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
//   const result = await pool.request().query("SELECT 1");
//   console.log(result);
}

// getConnection();
