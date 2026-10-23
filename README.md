# scm-demo

A tiny Node.js project with one GitHub Actions workflow, used in the NAU capstone lecture on software configuration management and DevOps.

## Run it locally

    npm ci
    APP_ENV=local npm test

The tests need `APP_ENV` to be set. In CI, the workflow in `.github/workflows/ci.yml` sets it.
