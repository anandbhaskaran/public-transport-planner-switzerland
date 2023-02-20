# Public transport planner Switzerland
This is a [Next.js](https://nextjs.org/) project

Demo: https://public-transport-planner-switzerland.vercel.app/

## Getting Started

Run the development server:

```bash
npm run dev
```

## Frontend
This application has two pages that can be accessible at '/' and '/journey'

`/`: The entry point of this page is available at `/src/app/page.tsx`
`/journey`: The entry point of this page is available at `/src/app/journey.tsx`. If `from` and `to` are not passed as query parameters, this page will be redirected to `\`.

The supporting components are available at `/src/app/components`

All the components uses `Tailwind CSS` for styling

## Backend
This project uses Next.js backend as a proxy to [Swiss public transport API](https://transport.opendata.ch/docs.html)
These proxy APIs are accessible under `/src/pages/api`

## Integration Tests
To run the integration tests use the following command
```bash
npm run test:e2e
```

Integration tests are written with [playwright](https://playwright.dev/)

## Linting
This project uses EsLint to ensure standard code quality. By default, the IDE will pick up the configuration and show the errors and warnings on the code. 
The following command will show the list of remaining errors and warnings
```bash
npm run lint
```

You can also use the following commands to fix the lining errors.
```bash
npm run lintFix
```

## Process
- Make your changes in a new branch and push
- Create a PR in Github to `main` branc
- Wait for the test to pass and in the meantime do a UX testing with the temporary URL provided by Vercel
- Merge the PR if everything is as expected and tests are passing


## Deployment
This app uses [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) to deploy the application

The `main` branch would be deployed to [public link](https://public-transport-planner-switzerland.vercel.app/)

## Todo
* [ ] Adapt CSS to be responsive on Mobile
* [ ] Add unit tests
* [ ] Add Lint tests to the CI pipeline
* [ ] Implement [commit contention policy](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
