# skarvelis/formio-api

# Introduction

This will build a container for [Formio API Server](https://www.form.io/) A form server based on NodeJS.

This Container uses Debian Stretch as a base image along with NodeJS 9.2.0

# Author
  Panagiotis Skarvelis

# Quick Start
docker build -t skarvelis/formio-api:1.0 .

docker run -p 3001:3001 -p 8080:8080 --env ADMIN_EMAIL=admin@example.com --env ADMIN_PASS=password skarvelis/formio-api:1.0 

Once started, visit your defined hostname or IP Address and port and login using the values provided in the `ADMIN_EMAIL` and 
`ADMIN_PASS` variables above.

# Configuration

### Persistent Storage

| Parameter | Description |
|-----------|-------------|
| /app      | This is where the Form Server and source resides |

### Environment Variables

below is the complete list of 
available options that can be used to customize your installation.

| Parameter | Description |
|-----------|-------------|
| `ADMIN_EMAIL` | Administrator email for login e.g. `admin@example.com` |
| `ADMIN_PASS` | Password for login e.g. `password` |
| `DB_PORT` | MongoDB Port - Default `27017` |
| `DB_SECRET` | MongoDB Secret - Default `secret` |
| `JWT_SECRET` | JWT Secret - Default `secret` |
| `JWT_EXPIRETIME` | JWT Expire Time in Seconds - Default `240` |

#### DB Options
| Parameter | Description |
|-----------|-------------|
| `MYSQL_HOST` | (optional) MySQL Host e.g. `formio-mysql` |
| `MYSQL_PORT` | (optional) MySQL Server Port - Default `3306` |
| `MYSQL_DB_NAME` | (optional) MySQL DB Name - e.g. `formio-data` |
| `MYSQL_DB_USER` |ptional) MySQL DB UsernameName - e.g. `formio` |
| `MYSQL_DB_PASS` | (optional) MySQL DB Password - e.g. `password` |
| `MYSQL_PORT` | (optional) MySQL Server Port - Default `3306` |
| `MSSQL_HOST` | (optional) MSSQL Host e.g. `formio-mssql` |
| `MSSQL_PORT` | (optional) MSSQL Server Port - Default `1433` |
| `MSSQL_DB_NAME` | (optional) MSSQL DB Name - e.g. `formio-data` |
| `MSSQL_DB_USER` | (optional) MSSQL DB UsernameName - e.g. `formio` |
| `MSSQL_DB_PASS` | (optional) MSSQL DB Password - e.g. `password` |

#### Mail Options

| Parameter | Description |
|-----------|-------------|
| `MAIL_TYPE` | How to send email - Options are `sendgrid`, `gmail`, `mandrill` - Default `sendgrid` |
| `MAIL_USER` | Mail Username e.g. `username@example.com` |
| `MAIL_PASS` | Mail password e.g. `password` |
| `MAIL_SENDGRID_API_USER` | (optional) Sendgrid API User |
| `MAIL_SENDGRID_API_KEY` | (optional) Sendgrid API Key |
| `MAIL_GMAIL_USER` | (optional) Gmail Username |
| `MAIL_GMAIL_PASS` | (optional) Gmail Password |
| `MAIL_MANDRILL_API_KEY` | (optional) Mandrill API Key |

### Networking

The following ports are exposed.

| Port      | Description |
|-----------|-------------|
| `3001`    | NodeJS API Server |
| `8080`    | form builder application |

# Maintenance
#### Shell Access

For debugging and maintenance purposes you may want access the containers shell. 

```bash
docker exec -it (whatever your container name is e.g. formio) bash
```

# References

* https://www.form.io/

