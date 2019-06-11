# Budget App

A React App for creating and maintaining a personal budget.

See [https://github.com/levidyrek/budget-app-api](https://github.com/levidyrek/budget-app-api) for the Django REST API.

View a live demo of the full website below.

Disclaimer:
This website is purely for demo purposes. Do not enter personal data of any kind. Your data and/or account may be deleted at any time.

[http://budgetapp.concisecoderdemos.com](http://budgetapp.concisecoderdemos.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [Install Docker](https://docs.docker.com/install/)
* [Install Docker Compose](https://docs.docker.com/compose/install/)

### Development Setup

Clone this repository.

```
git clone git@github.com:levidyrek/budget-app.git
```

Copy the sample config file to a `.env` file.

```
cp .env.sample .env
```

Start the development server with Docker Compose.

```
docker-compose up
```

Access the browsable API in your browser at [http://localhost:3000](http://localhost:3000). You will need to set up an instance of the REST API in order to log in and use the application.


## Deployment

Clone this repository.

```
git clone git@github.com:levidyrek/budget-app.git
```

Copy the sample config file to a `.env` file.

```
cp .env.sample .env
```

Update `.env` with production-appropriate settings.

Start the development server with Docker Compose.

```
docker-compose -f docker-compose.yml up
```

## Usage

Register a user via the register page, or log in as an existing user to access the application.

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The language used
* [React.js](https://reactjs.org/) - The Node.js UI framework
* [Redux](https://redux.js.org/) - State management for JavaScript apps
* [Docker](https://www.docker.com/) - Containerization engine
* [Docker Compose](https://docs.docker.com/compose/) - Deployment tool

## Acknowledgments

* Website design inspired by [YNAB](https://www.youneedabudget.com/).
