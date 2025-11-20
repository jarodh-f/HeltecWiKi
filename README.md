# HeltecWiKi Document Platform

HeltecWiki is an open-source documentation project collaboratively maintained by the Heltec community. It aims to provide developers with clear, consistent, and easy-to-navigate technical resources. The project covers Heltec product documentation, tutorials, development environment setup guides, and FAQ support, helping users quickly get started and better understand the Heltec hardware and software ecosystem.

## Project Goals

- Build an open, structured, and collaborative documentation platform that welcomes contributions from all Heltec users.
- Provide developer-friendly tutorials, sample code, and troubleshooting guides to reduce the learning curve.
- Continuously improve documentation through community contributions—fixing issues and expanding support for new devices.
- Maintain consistent documentation standards to ensure Heltec resources are stable, professional, and easy to maintain.

## Local Build Instructions

**eltecWiki is built with Docusaurus.**

- Install dependencies
```
npm install
```

- Start the local development server
```
npm run start
```

- Generate the hero images for each news item
```
npm run prebuild
```

- Build the static site
```
npm run build
```

## Directory Structure
```
Heltec_Docs_News/
├── docs/                  # Main documentation
│   ├── devices/           # Device docs
│   ├── platform/          # Platform docs
│   ├── intro.md
│   └── platforms.md
│
├── news/                  # News / project submissions
│   ├── my-project-name/
│   │   ├── img/
│   │   │   ├── 01.svg
│   │   │   ├── 02.png
│   │   │   └── ...
│   │   └── my-project-name.md
│   ├── 2025-Heltec-Maker-Contest.md
│   ├── authors.yml
│   └── tags.yml
│
├── scripts/               # Build / utility scripts
├── src/                   # Site components / source files
└── ...
```

## How to Contribute

We welcome all contributions! You can participate in the following ways:

### Documentation Contributions

- Submit project documentation to the News page
- Improve existing documentation
- Add tutorials or sample code
- Fix spelling, formatting, or structural issues
- Add new FAQs

### Contribution Workflow 

- Fork this repository
- Create a new feature branch
- Edit or add documentation (Follow the formatting requirements described in [the documentation](https://wiki.heltec.org/news/contest-content-template-usage-guide/contest-content-template-usage-guide)).
- Submit a Pull Request
- Wait for the maintainers to review your submission

## Technical Support & Product Discussion
- [Heltec Community Forum](http://community.heltec.cn/) 
- [Email Support](https://heltec.org/about/contact/)
- [Discord Community](https://discord.com/invite/wt23aDKDUy)
