# π₯ NEXTJS Boilerplate 2022

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
π₯Nextjs Boilerplate 2022 #v1.0.0
βββ components/  #components
βββ dtos/        #data transfer objects typescript utility type
βββ pages/       #next.js pages source
βββ public/      #static files
βββ states/      #recoil global state management
βββ styles/      #project styling
βββ utils/       #utils source
βββ .env
βββ .eslintrc.json
βββ .prettierrc
βββ next-env.d.ts
βββ next.config.js
βββ package.json
βββ README.md
βββ tsconfig.json
```

_Note: All direct childs of project-root have absolute imports._

```js
// β Don't
import Books from '../../components/Books'
import { countState } from '../states'

// βοΈ Do
import Books from 'components/Books'
import { countState } from 'states'
```

For more informations, click one of the links.

- [Styling](./docs/style.md)
- [State management](./docs/state.md)
- [Data fetching](./docs/fetch.md)
