# MPAS-JEDI Website
## Overview
This repository contains the source code for the MPAS-JEDI website. The goal of this website is to provide a centralized hub for information about the MPAS-JEDI project, including news, links to past tutorials, upcoming event information, and access to MPAS-JEDI documentation. The website was designed to be simple, aesthetically pleasing, and easily updatable by the Panda-C team.

While the website is written in JavaScript using the React.js library, no prior JavaScript knowledge is necessary for basic updates. Basic HTML knowledge can be helpful for applying unique styling to text (e.g., changing font size, color), but most formatting is handled automatically by React.js and Tailwind CSS.

This `README` includes a brief tutorial on adding/removing navbar components, publications, and tutorials.

## Setup
### Prerequisites
The only software dependency required to contribute to the `MPAS-JEDI` website is `Node.js`. To install `Node.js`, follow the instructions
below:
#### Installing Node.js on MacOS and Linux 
Open a terminal and run the following command:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```
This output export command when it finishes. Copy and paste the export command into the terminal to add `nvm` to the environment.
Now restart your terminal
```bash
exec bash
```
and run 
```bash
nvm install 22
```
to install `Node.js`.
Verify the installation by running
```bash
node -v # should print `v22.11.0`
```
and 
```bash
npm -v # should print `10.9.0`
```
### Setting up the Development Environment
To set up the development environment, clone the `MPAS-JEDI` website repository and navigate to the project directory:
```bash

```


```bash

## Editing Website Sections
The `src/sections` directory contains JavaScript files that define each section’s content. Files are named according to their respective sections 
(e.g., `publications.js` defines the publications section content). 
Each file consists of a constant array of objects, 
where each object represents a single component of the section with key-value pairs defining component properties.
For example, the object below defines a publication component with a title, URL, authors, and publication date:

```javascript
{
    title: "Publication Title",
    url: "https://link.to.publication",
    authors: ["Author1", "Author2", "Author3"],
    date: "Publication Date"
}
```
The entire `publications.js` file is an array of these objects, each representing a different publication. 
The current `publications.js` file is shown below:

```javascript
export const publications = [
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 1.0.0): EnVar implementation and evaluation",
        url: "https://gmd.copernicus.org/articles/15/7859/2022/"
    },
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta): ensemble of 3D ensemble-variational (En-3DEnVar) assimilations",
        url: "https://gmd.copernicus.org/articles/16/7123/2023/"
    },
    {
        title: "Three-dimensional variational assimilation with a multivariate background error covariance for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta)",
        url: "https://gmd.copernicus.org/articles/17/3879/2024/",
        date: "2024",
        authors: ["Byoung-Joo Jung","Benjamin Ménétrier", "Chris Snyder", "Zhiquan Liu", "Jonathan J. Guerrette", "Junmei Ban", "Ivette Hernández Baños", "Yonggang G. Yu", "William C. Skamarock"]
    },
];
```

### Deleting a Publication
To delete a publication, simply remove the relevant object from the publications array:

```javascript
export const publications = [
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 1.0.0): EnVar implementation and evaluation",
        url: "https://gmd.copernicus.org/articles/15/7859/2022/"
    },
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta): ensemble of 3D ensemble-variational (En-3DEnVar) assimilations",
        url: "https://gmd.copernicus.org/articles/16/7123/2023/"
    },
];
```

### Adding a New Publication
To add a new publication, simply append a new object to the array:

```javascript
export const publications = [
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 1.0.0): EnVar implementation and evaluation",
        url: "https://gmd.copernicus.org/articles/15/7859/2022/"
    },
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta): ensemble of 3D ensemble-variational (En-3DEnVar) assimilations",
        url: "https://gmd.copernicus.org/articles/16/7123/2023/"
    },
    {
        title: "Three-dimensional variational assimilation with a multivariate background error covariance for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta)",
        url: "https://gmd.copernicus.org/articles/17/3879/2024/",
        date: "2024",
        authors: ["Byoung-Joo Jung","Benjamin Ménétrier", "Chris Snyder", "Zhiquan Liu", "Jonathan J. Guerrette", "Junmei Ban", "Ivette Hernández Baños", "Yonggang G. Yu", "William C. Skamarock"]
    },
];
```