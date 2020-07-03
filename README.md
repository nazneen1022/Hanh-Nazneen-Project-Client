## 🙇‍♀️ WHAT's YOUR STORY? 📒

This app provides an ability for the story writers to either create their story on the available story opening line or create their own story line of the story. Besides, they can read the stories written by others with the opening line of their interest, provide the comments or rate the story (if they liked it)

## Contents

- [App Demo](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client#App-Demo)
- [Technology Used](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client#technology-used)
- [Goals of this project](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client#goals-of-this-project)
- [User stories and Wireframe](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client#user-stories-and-wireframe)
- [Git Workflow](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client#git-workflow)
- [Server Repo](https://github.com/nazneen1022/Hanh-Nazneen-Project-server)

## App Demo

![image](https://user-images.githubusercontent.com/63520290/86463771-6c385d80-bd2e-11ea-820b-b22ea727de2d.png)
![image](https://user-images.githubusercontent.com/63520290/86463737-5cb91480-bd2e-11ea-8609-f3be160b9bca.png)
![image](https://user-images.githubusercontent.com/63520290/86463810-7e1a0080-bd2e-11ea-974b-3cd6c82db2ea.png)
![image](https://user-images.githubusercontent.com/63520290/86463878-a3a70a00-bd2e-11ea-886d-5410c26e1d9d.png)
![image](https://user-images.githubusercontent.com/63520290/86464155-3778d600-bd2f-11ea-8b55-58e8db25bc74.png)
![image](https://user-images.githubusercontent.com/63520290/86464188-41023e00-bd2f-11ea-84e6-75ffb179546f.png)

## Technology Used

- [React](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client/blob/master/src/App.js)
- [Redux](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client/tree/master/src/store)
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [Speech Recognition](https://github.com/nazneen1022/Hanh-Nazneen-Project-Client/blob/development/src/pages/CreateStory/index.js)
- [Express](https://github.com/nazneen1022/Hanh-Nazneen-Project-server/blob/master/index.js)
  - [Rest API](https://github.com/nazneen1022/Hanh-Nazneen-Project-server/blob/master/routers/stories.js)
- [Sequelize](https://github.com/nazneen1022/Hanh-Nazneen-Project-server/blob/master/models/storyline.js)

## Goals of this project

The goal of this project is to learn team collaboration while building an app

- Practice full-stack development
- Usage of what we learned in the bootcamp
- Practice learning new technology together as a team
- Planning the project features by creating a mock wireframe, user stories and dividing the work.
- Collaborating and working together for any dependencies or hinderances.
- Practice disciplined git usage like proper commits & branching.
- Practice merging of feature branches in git while resolving conflicts (if any) together

## User stories & Wireframe

- User Stories

  - As a user, I need to have a Home Page Dashboard, so that I can know what is this app about
    On the Home Page, display list of all story opening lines. User should be able to use the app only after login/signup

    - Button which opens up a popup box to create a new storyline
    - List of all the story openings
    - Link to add a new story with the story opening line
    - Link to see all stories of the specific storyline.
    - User should be able to navigate to Create new Storyboard and View all stories board only after Login/SignUp

  - As a user, I need to have a Story Board so that I can see all the stories with specific story opening line
    On the Story Board, there is

    - a Title of the Story
    - list of all stories with the name of the author who posted it
    - link to read more about the story, clicking on this link should navigate to story details page

    Story Details page will

    - Display the whole story with the name of the author
    - Rating the story using a button.
    - View all the comments
    - Provide Comments on the Story

  - As a user, I should have a Create Story page, where I can post my story with an opening storyline
    On the Create a New Story page, there is

    - Title, Story Line(not editable), and content of the story
    - Images (URL) and its preview
    - Post Button to create a new story in the storyboard.

This mvp is still a work in progress. Some features still need to be implemented and revised. If you have any suggestions, please let me know here.

- Wireframe

  - [What's Your Story? Wireframe](https://github.com/nazneen1022/Pick-and-Pocket-Client/blob/development/src/Whats-Your-Story-Wireframe.pdf)

## Git Workflow

In this project I try to use:

- Good commit messages
- Named branches
- Pull requests with proper summaries
- Used development branch without merging to the master all-time

## Server Repo

- The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/nazneen1022/Hanh-Nazneen-Project-server)

## How to Install this?

- clone the app
- cd into your project
- Install dependencies using `npm install`
- start development server using `npm run start`
