# Ontrack Pro Portal

## Development

### Netlify

Make sure the Netlify CLI is installed (see https://docs.netlify.com/cli/get-started/):

```bash
npm install netlify-cli -g
```

Link your working copy to the Netlify site:

```
ntl Link
```

and follow the instructions (login, authorization, followed by the selection of the GitHub repository is enough).

### Running the application

First, install the dependencies of the project:

```bash
npm install
```

Then, run the Netlify development server:

```bash
ntl dev
```

Your browser will be opened automatically on http://localhost:8888

### Miscellaneous

* to test the Netlify identity, go to https://gotruejs-playground.netlify.app/
