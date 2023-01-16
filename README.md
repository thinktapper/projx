<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/thinktapper/projx">
    <img src="https://user-images.githubusercontent.com/10656909/212664149-586aa6e1-2835-45f9-b22d-d336cba64b95.svg" alt="Logo" width="320" height="">
  </a>

<!-- <h3 align="center">Projx</h3> -->

  <p align="center">
    <a href="https://projx.vercel.app">Projx</a> is a powerful tool for anyone looking to improve their productivity and manage their projects more efficiently. Whether you're a small business owner, a project manager, or a freelancer, <br>
    <strong>Projx is the missing piece in your project puzzle.</strong>
    <br />
    <a href="#readme-toc"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://projx.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/thinktapper/projx/issues">Report Bug</a>
    ·
    <a href="https://github.com/thinktapper/projx/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details name="readme-toc">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-its-made">How It's Made</a></li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li>
      <a href="#lessons-learned">Lessons Learned</a>
      <ul>
        <li><a href="#key-takeaways">Key Takeaways</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
<h2>About The Project</h2>

<>Projx is a modern project management web app developed to streamline the project management process, making it easy for users to organize and track their projects, tasks, and schedules all in one place. Users need to register to be able to access the app which allows them to easily create and manage projects, add and assign tasks, set deadlines, and track progress. Projx is designed to be user-friendly and intuitive, making it easy for users to navigate and get started quickly.</p>

<div align="center">

<!-- ![Large GIF (1144x696)](https://user-images.githubusercontent.com/10656909/192123894-85d3dc5f-7ca6-4977-b076-acff51520c55.gif) -->

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![Prisma][prisma]][prisma-url]
- [![PostgreSQL][postgresql]][postgresql-url]
- [![tailwindcss][tailwindcss]][tailwindcss-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<details name="instructions">
  <summary>Instructions</summary>

### Prerequisites

You’ll need to have modern versions of node.js (LTS ^16.18 recommend) and yarn or npm installed.

### Installation

<!-- prettier-ignore-start -->
1. Clone the repo
   ```sh
   git clone https://github.com/thinktapper/projx.git && cd projx
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up the environment variables:
   ```sh
   cp -v .env.example .env
   ```
4. Open `.env` and enter your local or remote Postgres DB URL and JWT secret
   ```js
   DATABASE_URL = ''

   REMOTE_DATABASE_URL = ''

   JWT_SECRET = ''
   ```
5. Create the database schema:
   ```sh
   npx prisma db push
   ```
6. Then, run the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://beta.nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<!-- prettier-ignore-end -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</details>
<br>
<!-- HOW IT'S MADE -->

## How It's Made:

This project was made using React 18 and Next.js 13. I used TailwindCSS for styling and Prisma for generating a typesafe ORM to interact with the PostgreSQL database hosted on [Railway](https://railway.app).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Optimizations

<!-- 🏋️‍♂️ This project is still in progress ✨ -->

With time, I would like to add the following features:

- [ ] Add a dark mode
- [ ] Add a search bar to easily find projects and tasks.
- [ ] Add a calendar view for easy scheduling.
- [ ] Create profile or social pages for users.
- [ ] Add a drag and drop feature to easily move tasks between projects.
- [ ] Add a notification system to keep users up to date on project progress.
- [ ] Add a changelog to keep track of project updates.
- [ ] Add more detailed documentation.
- [ ] Create a mobile version of the app.

See the [open issues](https://github.com/thinktapper/projx/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LESSONS LEARNED -->

## Lessons Learned:

This full-stack project was a great way for me to learn about the new React 18 server components and how to use the new app directory structure introduced in Next.js 13. I learned by building Projx from scratch — From design spec to deployment — Using React, Node.js, TypeScript, Postgres.

### Key Takeaways:

<ul>
  <li>Strengthened skills needed to plan, scope, research, and deploy a full-stack web app.</li>
  <li>Practiced using TypeScript for better type safety and code quality.</li>
  <li>Practiced using TailwindCSS to quickly build out a UI from a design spec.</li>
  <li>Learned how to build out and deploy a serverless API.</li>
  <li>Practiced utilizing middleware to protect my app from unauthenticated users.</li>
  <li>Learned how and when to use React Server Components to render content server-side, and when client-side components are necessary.</li>
  <li>Learned how to use the new React 18 Suspense component to render loading states.</li>
  <li>Learned how to set up continuous deployment with CI.</li>
  <li>Gained experience debugging and troubleshooting TypeScript and ESLint build errors and deployment issues.</li>
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Andrew Tapper - [@thinktapper](https://twitter.com/thinktapper) - andrew@tapper.codes

Project Link: [https://github.com/thinktapper/projx](https://github.com/thinktapper/projx)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GNU GPLv3. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

- []()
- []()
- []() -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/thinktapper/dinder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/thinktapper/dinder/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/thinktapper/dinder/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/thinktapper/dinder/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/thinktapper/dinder/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://beta.nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[tailwindcss]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwindcss-url]: https://tailwindcss.com
[supabase]: https://img.shields.io/badge/supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=black
[supabase-url]: https://app.supabase.com/
[googlemaps]: https://img.shields.io/badge/googlemaps-red?style=for-the-badge&logo=googlemaps&logoColor=white
[googlemaps-url]: https://developers.google.com/maps
[prisma]: https://img.shields.io/badge/prisma-35495E?style=for-the-badge&logo=prisma&logoColor=4FC08D
[prisma-url]: https://prisma.io
[postgresql]: https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://postgresql.org/
[typescript]: https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[madewith-typescript]: https://img.shields.io/badge/made%20with-typescript-blue?style=for-the-badge
[madewith-typescript-url]: https://www.typescriptlang.org/
[madewith-love]: https://img.shields.io/badge/made%20with-%E2%9D%A4-red?style=for-the-badge
[madewith-love-url]: https://tapper.codes
[madeby-tapper]: https://img.shields.io/badge/made%20by-tapper-blue?style=for-the-badge
[madeby-tapper-url]: https://tapper.codes
