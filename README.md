# Excel Parser UI

An Angular 6 front end, which can also run as an Electron desktop app, for importing project-health spreadsheets and sending them to a backend API.

## What it does

1. **Import an Excel file.** Pick an `.xlsx` file. The first sheet is read in the browser with [SheetJS (`xlsx`)](https://github.com/SheetJS/sheetjs) and shown as an editable table.
2. **Edit cells inline.** Every cell is an input, so you can fix values before you send them.
3. **Post to the backend.** **Post File** skips the first 3 header rows and maps each remaining row onto a `Project` model ([src/app/shared/models/project.ts](src/app/shared/models/project.ts)), which covers the project code, client, initial-phase checklist, team/customer/practices scores, statuses and evolution. It then `POST`s the result to `/projects`.
4. **Export back to Excel.** **Export!** writes the current table to `SheetJS.xlsx` and keeps the merged header cells.
5. **Browse existing projects.** On load, the app calls `GET /projects` and lists the imported projects and their versions under "Load Existing Project".

HTTP calls go through a shared `BackendService`, which has logger and error interceptors. Errors appear as alerts.

## Backend

The API base URL is set in [src/environments/environment.ts](src/environments/environment.ts):

```ts
backend_url: 'http://localhost:80/api/v1'
```

The backend must be running for the project list and **Post File** to work.

## Running

```bash
npm install
npm start              # dev server at http://localhost:4200
npm run electron       # build, then open in an Electron window
npm run electron-aot   # production (AOT) build, then open in Electron
```

## Other commands

- `npm run build`: build into `dist/parser/`
- `npm test`: run unit tests (Karma)
- `npm run e2e`: run end-to-end tests (Protractor)
- `npm run lint`: lint the code
