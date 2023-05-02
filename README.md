## Static Content

This repository hosts the static content available at [static.cancer.gov](https://static.cancer.gov).

To make changes:

- Create a new issue to track the change you're making
- Create a `tickets\n-ticket-name` branch off of develop, make your change, and open a pull request to develop
- Approve and merge the PR into develop
  - The system will automatically deploy the develop branch to the development environment
- Test at [static-dev.cancer.gov](https://static-dev.cancer.gov)
- Once ready, merge develop into main
  - The system will automatically deploy the main branch to the production environment
- Verify at [static.cancer.gov](https://static.cancer.gov)