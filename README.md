# 🔥 NEXTJS Boilerplate 2022

## Dependencies

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Recoil](https://recoiljs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://react-query.tanstack.com/)
- [Mantine Hook](https://mantine.dev/)
- [Sass](https://sass-lang.com/)

## Installation

```bash
# clone the repo
$ git clone https://github.com/sgcodigo/nextjs_boilerplate_2022

# go into app's directory
$ cd nextjs_boilerplate_2022

# install app's dependencies
$ npm install or yarn
```

## Project Structure

The following directories and files are included in the download. You'll notice something similar to this:

```
🔥Nextjs Boilerplate 2022 #v1.0.0
├── components/  #components
├── dtos/        #data transfer objects typescript utility type
├── pages/       #next.js pages source
├── public/      #static files
├── states/      #recoil global state management
├── styles/      #project styling
├── utils/       #utils source
├── .env
├── .eslintrc.json
├── .prettierrc
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

_Note: All direct childs of project-root have absolute imports._

```js
// ✗ Don't
import Books from '../../components/Books'
import { countState } from '../states'

// ✔️ Do
import Books from 'components/Books'
import { countState } from 'states'
```

For more informations, click one of the links.

- [Styling](./docs/style.md)
- [State management](./docs/state.md)
- [Data fetching](./docs/fetch.md)
