# MPAS-JEDI Website

## Overview

This repository contains the source code for the MPAS-JEDI website, a centralized hub providing project news, past tutorials, event information, and documentation for MPAS-JEDI. The website is designed to be simple, visually appealing, and easily maintainable by the Panda-C team.

The site is built with JavaScript and React.js, but basic updates require no prior JavaScript knowledge. Some HTML knowledge may be helpful for styling (e.g., font size, color), though most formatting is handled by React.js and Tailwind CSS.

This `README` provides guidance on adding/removing navbar components, publications, and tutorials.

## Setup

### Prerequisites

The only required dependency for contributing to the MPAS-JEDI website is `Node.js`. Install `Node.js` by following these steps:

#### Installing Node.js on macOS and Linux

Open a terminal and run:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```
After installation, follow the instructions to copy and paste the provided export command into the terminal, adding nvm to your environment. Then, restart your terminal with:

```bash
exec bash
```
Install the required Node.js version:

```bash
nvm install 22
```
Verify the installation:

```bash
node -v   # should print `v22.11.0`
npm -v    # should print `10.9.0`
```
### Setting Up the Development Environment
Clone the MPAS-JEDI website repository and navigate to the project directory:

```bash
git clone https://github.com/amstokely/mpas_jedi_website
cd mpas_jedi_website
``` 
Enter the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```
Start the development server:

```bash
npm start dev
```
This will launch a local development server. The website will be accessible at the port provided in the terminal output. Thanks to hot reloading, the website will automatically update with any changes made to the source code.

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