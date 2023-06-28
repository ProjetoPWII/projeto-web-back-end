# projeto-web-back-end
Back-end do Projeto de PWII

## Running locally

Clone the project

```bash
  git clone https://github.com/ProjetoPWII/projeto-web-back-end.git
```

Create a terminal and enter the project directory:

```bash
  npm install
```
Create an .env file in the current directory like:

```bash
  DATABASE_URL = "postgresql://userName:password@localhost:port/databaseName?schema=schemaName"
```

Start the server and create an initial migration:

```bash
 npx prisma migrate dev
```
```bash
 npm run dev
```

The server will be running on:

```bash
  http://localhost:3003
```

