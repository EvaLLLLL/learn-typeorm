# Have fun with with TypeORM

Steps to run this project:

1. create a psql docker container

```bash
docker run -v "$PWD/pdata":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=admin -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```

2. create a database

```bash
CREATE DATABASE v_data ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```

3. install dependencies

```bash
npm i
```

4. start this project

```bash
npm start
```

5. find new record in my database
