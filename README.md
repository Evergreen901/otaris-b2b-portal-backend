# Getting started

## Running with docker in dev mode (recommended)

1. `docker-compose up --build`

## Running without docker (to use debugger)

1. `yarn install`
2. copy `.env.dev` to `.env`
3. `yarn run dev`

## Deploy to AWS dev env

1. `aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 946497301585.dkr.ecr.us-east-2.amazonaws.com`
2. `docker build --target production -t otaris-b2b-be-dev .`
3. `docker tag otaris-b2b-be-dev:latest 946497301585.dkr.ecr.us-east-2.amazonaws.com/otaris-b2b-be-dev:latest`
4. `docker push 946497301585.dkr.ecr.us-east-2.amazonaws.com/otaris-b2b-be-dev:latest`

# API

Requests for access

- `GET /api/requests` Retrieves all un-hidden entries requests on db
- `GET /api/requests/hidden` Retrieves all hidden entries requests on db
- `POST /api/requests/hide/:id` Sets an specific request as hidden
- `GET /api/requests/:id` Retrieves a request with all its information, including original typeform answers

Accounts
- `GET /api/accounts` Retrieves all accounts
- `POST /api/account` Creates a new account
- `PUT /api/account/:id` Updates an existing account
- `GET /api/accounts/:id` Retrieves a single account by id
- `DELETE /api/accounts/:id` Revokes access to an account (flag as deleted)

Quotes
- `GET /api/quotes` Retrieves all un-hidden quotes
- `GET /api/quotes/hidden` Retrieves all hidden quotes
- `POST /api/quotes/hide/:id` Sets a quote as hidden