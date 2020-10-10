# theTodolist

Built for the purpose of a practical test and as an effort to learn and improve on a number of new and widely used technologies, theTodolist is a web based todo management application that does the following.

* Display a list of Todo's
* Mark Todo's as complete and incomplete
* Add new Todo's
* Delete Todo's

## Development

theTodolist is built using **React** and **TypeScript**. The development followed the Test Driven Development methodology of writing test cases before features were developed, and the test cases were gradually passed as the features were incrementally developed. These test cases were written using **Jest**, and **Enzyme** was used to traverse through React components.
<br/> 
Throughout its development, code quality was given special attention. TypeScript ensured the static quality of the code while **ESLint** ensured that standards were followed, and **Prettier** formatted the code at every save.
<br/>
**Husky** was used to check code quality before commits and pushes.
<br/>
**Antd** was used as the main component library while **Tailwindcss** was used to maintain the structure of the User Interface. **Storyblocks** was used to document reusable components.

## Deployment

Once code is pushed to master, **CircleCI** will run the configured pipeline to test the code and **Netlify** will deploy the changes to this [URL](https://todo-app-111.netlify.app/)

## Getting Started

1. Clone this repo
2. Run `npm install` inside the clone directory
3. Run `npm start` to start up the project
