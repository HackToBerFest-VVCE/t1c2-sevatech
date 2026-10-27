const snowflake = require('snowflake-sdk');

const connection = snowflake.createConnection({
  account: 'TVETARN-VN72573', // or 'VN72573.ap-south-1.aws'
  username: 'harshitha',
  password: 'Gravitation#@789',
  database: 'SEVATECH_DB',
  schema: 'PUBLIC',
  warehouse: 'COMPUTE_WH',
  role: 'ACCOUNTADMIN'
});

connection.connect((err, conn) => {
  if (err) {
    console.error('❌ Connection Failed:', err.message);
  } else {
    console.log('✅ Connected successfully! Connection ID:', conn.getId());
    conn.execute({
      sqlText: 'SELECT CURRENT_VERSION()',
      complete: (err, stmt, rows) => {
        if (err) console.error('Query Error:', err.message);
        else console.log('Snowflake Version:', rows);
        connection.destroy(() => {});
      }
    });
  }
});