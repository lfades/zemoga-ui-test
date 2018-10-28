# zemoga-ui-test

UI test project presented to Zemoga, you can see it running [here](https://zemoga-ui-app-dtqgzzsbnp.now.sh/).

## 💼 What's included

You'll find two apps, one in **/app** and the other one in **/api**. The root of the project also includes a `package.json` used to add `eslint` and `prettier` for both apps.

### /app

This app includes the UI and all the client side related stuff, it's build with:

- [React](https://reactjs.org/): To build the html and user interactions.
- [Next.js](https://nextjs.org/): It's the core of the app, a create-react-app with no boilerplate, SSR by default and super straightforward to use.
- [styled-components](https://www.styled-components.com/): It's like SCSS with drugs. it combines the awesomeness of css with React.
- [GraphQL](https://graphql.org/): R.I.P Rest.
- [apollo-boost](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost): Integration made by the [Apollo team](https://www.apollographql.com/) to easily setup a GraphQL client in any react app.
- [next-with-apollo](https://github.com/lfades/next-with-apollo): Allows any graphql client to be easily integrated with Next.js. Created by me 😎.
- [next-plugin-graphql](https://github.com/lfades/next-plugin-graphql): Allows the usage of GraphQL files in Next.js. Also created by me 😎.
- [moment.js](https://momentjs.com/): I had to show a date.

### /api

This app includes the API over GraphQL.

- [Node.js](https://nodejs.org/en/): Of course.
- [apollo-server](https://www.apollographql.com/): This is the core of the API, a GraphQL server over Express.
- [GraphQL](https://graphql.org/): R.I.P Rest.
- [graphql-import](https://github.com/prisma/graphql-import): Allows the usage of GraphQL files.
- [MongoDB](https://www.mongodb.com/): My database of choice.
- [mongoose](https://mongoosejs.com/): To handle the db operations.
- [nodemon](https://github.com/remy/nodemon): To restart the app on changes.

## 🌈 How to use

Both apps need to be running for the UI to work properly. First lets start with the API:

Before starting the api we need to include the mongo url, create the file `api/now-secrets.json` with the following content:

```json
{
  "@zemoga-mongo-url": "YOUR_MONGO_URL"
}
```

Replace `YOUR_MONGO_URL` with the proper url of a mongo database.

Now lets run the api:

```bash
cd /api
npm install
npm run dev
```

Great, once you have the API running it's time to start `app`:

```bash
cd /app
npm install
npm run dev
```

## 🚀 Deployment

The deployment process is made with [Now](http://now.sh/), the files that start with `now-*`, related to that service, which is quite useful to make the deployment and development process a peace of cake.

To deploy the API we need to first add the mongo url to [Now secrets](https://zeit.co/docs/getting-started/secrets):

```bash
now secrets add zemoga-mongo-url "YOUR_MONGO_URL"
```

Once that's done, deploy it:

```bash
cd /api && now
```

If everything worked you should have a deployment url like this one: https://zemoga-ui-api-jvhehxtzkm.now.sh, save it for later cause you'll need it to deploy `app`.

If you now go the url you should already see the graphql playground and be able to query the database!.

Now that we have our API url deploying the app should be as simple as doing this:

```bash
now secrets add zemoga-api-url "YOUR_API_URL"
cd /app && now
```

That's it!. 🎉
