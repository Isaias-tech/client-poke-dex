<p align="center" width="100%">
    <img width="33%" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"> 
</p>

# PokeDex

The PokeDex web application is designed to provide users with an interactive platform to explore, search, and manage Pokémons. Users can sign up, sign in, view a list of Pokémon fetched from the [PokeAPI](https://pokeapi.co/), search for specific Pokémon by name, add or remove Pokémon from their favorites, and easily access their favorite Pokémon collection.


## Requirements

Required Application Screens and system requirements:

- Login Screen:
    - Create a login interface for users to input their credentials.
    - Store credentials internally in local storage for authentication purposes.
- Pokémon List (Main Screen):
    - Implement a screen post-login that displays a list of Pokémon fetched from the PokeAPI.
    - Integrate a search feature by name, enabling users to search for specific Pokémon.
- Add to Favorites and View Favorites List:
    - Allow users to add Pokémon to their favorites list directly from the main Pokémon list screen.
    - Develop a separate screen where users can view their list of favorite Pokémon.




## Tech Stack

The following tools were used during the design process:

| Tools | Description |
| :------- | :------------------------- |
| [![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)](https://www.adobe.com/products/photoshop.html) | Some of the assets were created or edited with it. |
| [![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) | The designs for mobile, tablet and desktop were made there. (Also the assets and color selection).|



During the development process the following tools and technologies where used:

| Tools and technologies | Description |
| :--------------------- | :---------- |
|[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)| The code was written with this tool. |
|[![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)](https://www.google.com/chrome/) | The site has been tested with this web browser debugging tool. |
|[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)| Used to run the local application server. |
|[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)| This was the language used for development. |
|[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)| Build tool for rapid development and optimized build application. |
|[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)| This is the main library used for development. |
|[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)| Library for screen navigation in react app. |
|[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)| Library for global state management. |
|[![JS Cookies](https://img.shields.io/badge/JS_Cookies-orange)](https://www.npmjs.com/package/js-cookie)| Simple library that allows the developer to manage cookies. |
|[![Axios](https://img.shields.io/badge/Axios-purple)](https://axios-http.com/docs/intro)| Library for HTTP requests. |
|[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)| Styles library. |
|[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)| Library containing a number of UI Components that allow for faster development and customization. |
|[![Hamburger React](https://img.shields.io/badge/Hamburger_React-blue)](https://hamburger-react.netlify.app/)| Library for animated hamburger button component. |
|[![NoStick](https://img.shields.io/badge/NoStick-green)](https://notistack.com/)| MUI recommended library for multiple snackbars notification management. |

## Run Locally

Clone the project

```bash
  git clone https://github.com/Isaias-tech/client-poke-dex.git
```

Go to the project directory

```bash
  cd client-poke-dex
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment

To deploy this project run

```bash
  npm run build
```

```bash
  npm run deploy
```

## API Integration

 - Utilize the PokeAPI (https://pokeapi.co/) for retrieving Pokémon information.
 - Follow the documentation provided by the PokeAPI to make requests and access necessary data such as Pokémon names, types, abilities, and images.

