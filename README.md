# ClaraSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy to Cloudflare Pages

This project is configured for Cloudflare Pages.

1. Build for production:

```bash
npm run build:prod
```

2. Deploy:

```bash
npx wrangler pages deploy dist/clara-site --project-name=site-clara --branch=main
```

Or run both in one command:

```bash
npm run deploy
```

If you receive "Project not found", create the Pages project first in the Cloudflare dashboard (or use the exact existing project name in the deploy command).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
