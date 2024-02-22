# USSTM Website Project

## Overview
This is PACS first project, creating the Undergraduate Science Society of Toronto Metropolitan (USSTM, pronounced U-STEM) website. USSTM is the science society at Toronto Metropolitan University (TMU, formerly known as Ryerson University). As representatives of the Faculty of Science student body, USSTM needs a well-established presence in the community. Their old website was using their old domain (the name was changed due to the university name change) and is out-dated. PACS, a group that functions under the supervision of USSTM, took the project of designing a new website that uses their new domain, boasts a more modern design, and allows their members to keep it up-to-date more easily. Since USSTM is a big society, their website has several pages with a lot of content, which is why we decided to use a framework (next.js, in particular) in order to allow modularity and readability in this large implementation.

## Progress
- [ ] About Us
  - [X] Your Team
    - [X] Committee Pages
  - [X] Governance
  - [X] Past Boards
  - [X] Meetings
  - [ ] FAQ
- [ ] Events
  - [ ] Calendar
  - [ ] Annual Events (in-progress)
  - [X] Yearbook/Gallery (in-progress)
- [ ] Academics
  - [X] Feedback Form
  - [ ] Synergize Case Comp
  - [X] Crash Courses
- [ ] Finances
  - [X] Budget
  - [ ] Conferences & Competitions
  - [X] Financial Policies
  - [ ] DMZ Startup Certified
- [X] Community
  - [X] Student Groups & Course Unions
  - [X] Science Lounge
  - [X] Elections
- [X] Contact Us

## Prerequisites
Welcome and thank you for working on/checking out this project.

Before you work on this website there are some command line tools and extensions you need to install.

### Command Line Tools
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS](https://nodejs.org/en/download)

### VSCode Extensions
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Cloning the Website
If you are unfamiliar with how to use GitHub and the Git CLI, please check out our [GitHub Docs](https://github.com/PACS-TMU/documentation/blob/main/github-docs.md), where we offer a description of all you need to know to run this website.

1. Clone the repo.
```
git clone https://github.com/PACS-TMU/usstm-website.git
```
2. Change into the repo directory.
```
cd usstm-website
```
3. Switch to the branch that you are working on by using:
```
git checkout <branch-name>
```

## Running the website
1. Install node modules
```
npm install
```
>OR
```
npm i
```
2. Run the dev build of the project to view how it looks locally on your browser
```
npm run dev
```
3. The website will start running on
```
localhost:3000
```

## Coding
- Code in your respective or assigned branches to avoid git conflicts.
- Ensure to pull regularly to stay up to date with the dev branch.
- Only code what you are assigned to code. To get assigned, take part in USSTM Website meetings where we split tasks. Or ask your Tech Team Lead for vacant tasks.

## Packages Used
- `react-html-parser` - This npm package was utilized to parse HTML code from our JSON files into our `jsx` files.

- `react-slick` - This npm package was utilized to implement a carousel in the `/about/your-team` page.
- `framer-motion` - This npm package was utilized to implement different animations into the website, so buttons that expand items are smooth and not too abrupt.
- `@formkit/auto-animate` - This is another animation package that was utilized for dropdown menu animation, so the drop-down isn't too abrupt.
- `react-use` - This npm package was utilized in order to sense a click outside a `div` item. This allows us to close the navbar if an the user clicks off of it after they expand it.
- `hamburger-react` - This npm package was utilized in order to import a hamburger menu on smaller screens, along with a built-in animation when the hamburger menu is clicked.


-----------------------------------------------------------

## Points of Contact

If you have any questions or you are unsure of anything feel free to ask our Project Managers and Tech Team Leads.

Project Managers:
GitHub | Discord
-|-
@MoNakouzi | @mnakouzi
@williamKhine | @yumicol

Team Leads:
Team | GitHub | Discord
-|-|-
0 | @williamKhine | @yumicol
1 | @andrearcaina | @psykthe
2 | @grcng | @grc_ng
3 | @thatrisk | @thatrisk 
