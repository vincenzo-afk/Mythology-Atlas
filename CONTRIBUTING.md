# Contributing to Mythology Atlas

Thank you for considering a contribution to Mythology Atlas. The project is a small client-side application built from HTML, CSS, and JavaScript, so changes should remain easy to run from a static web server and easy to review in a browser.

## Before you start

Search existing issues and pull requests before opening a new one. For substantial changes, open an issue first so the proposed behavior and scope can be discussed. Content contributions should be checked for spelling, internal consistency, and cultural context before submission.

## Local setup

```bash
git clone https://github.com/vincenzo-afk/Mythology-Atlas.git
cd Mythology-Atlas
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser. There is no package installation or build step.

## Making changes

Keep the existing separation of concerns: page structure belongs in `index.html`, presentation belongs in `style.css`, and data plus interaction logic belongs in `app.js`. Avoid adding a framework or build tool unless the change has been discussed in an issue and the repository documentation is updated with the new workflow.

Use short, descriptive branches such as `feat/constellation-details`, `fix/map-resize`, or `docs/setup-guide`. Keep each pull request focused and avoid unrelated formatting changes.

## Verification

Run the local browser smoke test described in the README. At minimum, verify the area you changed, switch between cultures, and check the browser console for errors. If the change affects responsive behavior, test a narrow viewport as well.

## Pull requests

A pull request should explain the intent of the change, identify the files affected, and list the verification steps performed. Include screenshots or a short recording when a visual change is difficult to review from the description alone. Call out content corrections, breaking behavior, new external dependencies, and any security considerations.

## Commits

Use clear imperative commit messages. Conventional Commits are welcome, for example `feat: add constellation details` or `fix: preserve map size after tab switch`, but the project does not enforce a commit-linting tool.

## Questions and security reports

Use a GitHub issue for ordinary questions and project discussion. Do not disclose security vulnerabilities in a public issue; follow [SECURITY.md](SECURITY.md) instead.
