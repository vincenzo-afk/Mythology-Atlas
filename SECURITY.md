# Security Policy

## Supported scope

Mythology Atlas is a static browser application. It does not provide accounts, authentication, a backend API, or a database. Security reports should focus on the repository, its client-side behavior, dependency usage, or unsafe handling of external resources.

There are no published version branches or release channels. The default `main` branch is the supported development line.

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability. Use GitHub's private vulnerability reporting flow for the repository:

<https://github.com/vincenzo-afk/Mythology-Atlas/security/advisories/new>

If private vulnerability reporting is unavailable for the repository, contact the repository owner through their GitHub profile before sharing exploit details publicly:

<https://github.com/vincenzo-afk>

Include the affected file or URL, the conditions needed to reproduce the issue, the potential impact, and any suggested mitigation. Please allow time for the report to be reviewed before public disclosure.

## Safe development practices

Do not commit credentials, private tokens, local environment files, or generated secrets. Review changes to external CDN URLs, map tile providers, and dynamically generated HTML carefully. Keep third-party dependencies at the versions explicitly configured in `index.html` unless an update has been tested in the browser.
