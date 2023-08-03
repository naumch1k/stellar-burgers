# Stellar Burgers
Introducing "Stellar Burgers" - a dynamic web app that lets you create and customize your own out-of-this-world space burgers! 🚀🍔

Create your dream burger by simply dragging and dropping your favorite ingredients onto the builder. Want to know the nutritional value of an ingredient? No problem! Just click on it to explore its cosmic nutritional secrets.

Head over to [demo](https://naumch1k.github.io/stellar-burgers/) now and unleash your creativity 🌌🍔 Happy burger crafting!

## Coming soon!
- [ ] Order status feed
- [ ] Order history
- [ ] User registration and login
- [ ] User profile
- [ ] Password recovery


## Tech
React JS | TypeScript | Redux | CSS-modules | react-dnd

## Installation & Usage

```bash
# Clone the repository
git clone https://github.com/naumch1k/stellar-burgers.git

# Enter the project directory
cd stellar-burgers

# Install dependencies
npm i
```
In the project directory, you can run:

`npm run start`, or simply `npm start`
> Starts a local web server. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

`npm run lint:css`
> Runs the linter and automatically fix errors in `*.module.css` files


### json-server

This project utilizes [json-server by typicode](https://my-json-server.typicode.com/ ) as its backend solution. The required database is available as a `db.json` file located at the root of the project. Inside this JSON file, you'll find all the data, including burger ingredients and user orders.

To access the server, you can visit

`https://my-json-server.typicode.com/<your-username>/<your-repo>`

this link will bring you to the server hosting your JSON data. You can interact with the data using standard HTTP requests: GET, POST, PUT, PATCH, and DELETE methods to perform various operations.

Please keep in mind that private GitHub repositories are not supported by json-server. Ensure your repository is public to use this service effectively. Happy developing! 🍔👩‍💻
