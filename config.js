module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'y1HSC57BN0',
    password: process.env.MYSQL_PASS || 'UhQAaaIW19',
    database: process.env.MYSQL_DB || 'y1HSC57BN0',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
  host: {
    local: 'http://localhost:',
    remote: 'https://proyecto-backend-node-ten.vercel.app',
  },
};
