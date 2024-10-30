# MPAS-JEDI Website

## Overview

This repository contains the source code for the MPAS-JEDI website, a centralized hub providing project news, past tutorials, event information, and documentation for MPAS-JEDI. The website is designed to be simple, visually appealing, and easily maintainable by the Panda-C team. Currently the site is hosted at `https://www2.mmm.ucar.edu/mpas-jedi/mpas_jedi_website/frontend/dist/index.html`.

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

## Tutorial

In this tutorial, we’ll rebuild the website content from scratch.

1. **Start the Development Server**  
   Begin by navigating to the `frontend` directory, checking out the tutorial branch, and starting the development server:
   ```bash
   cd frontend
   git checkout tutorial
   npm run dev
   ```
   If you open the website in your browser, you’ll see that all sections are currently empty.

2. **Create the Navbar**  
   Navigate to the `frontend/src/sections` directory and open `navigation.js`. We’ll add the following sections to the navbar:
   - About
   - Tutorials
   - Upcoming Events
   - Publications

   Each navbar component needs three properties: `id`, `url`, and `name`. Here’s how they function:
   - **name**: Display name on the navbar
   - **id**: Unique identifier (use the index of the entry, e.g., 0 for the first entry)
   - **url**: `href` link for the navbar entry (e.g., `#about` for the "About" section)

   To add the "About" section to the navbar, add this object to the `navigation` array:
   ```javascript
   {
       id: 0,
       url: "#about",
       name: "About"
   }
   ```

   Follow the same process for the other sections. Your final `navigation.js` file should look like this:
   ```javascript
   export const navigation = [
       { id: 0, url: "#about", title: "About" },
       { id: 1, url: "#tutorials", title: "Tutorials" },
       { id: 2, url: "#events", title: "Upcoming Events" },
       { id: 3, url: "#publications", title: "Publications" }
   ];
   ```

   You’ll see your changes in real-time on the website. Clicking on a navbar entry like "Publications" will scroll to that section.

3. **Add Content to the Home Section**  
   Open `home.js` in `frontend/src/sections`. Instead of `id` and `url`, this file has an `introduction` property for the site’s introduction. Add this object to the `home` array:
   ```javascript
       introduction: "   A community data assimilation system for the Model for Prediction " +
        "Across Scales - Atmospheres based upon the Joint Effort for Data assimilation Integration.",
   
   ```

   Now, a formatted introduction will appear under the navbar.

4. **Exercise: Fill Out Remaining Sections**  
   Complete the configuration files with the following details:

   - **Tutorials**:
     - **Tutorial 1**: Location: NCAR, Date: September 2023, [URL](https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202309NCAR/)
     - **Tutorial 2**: Location: NCU, Date: October 2023, [URL](https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202310NCU/)
     - **Tutorial 3**: Location: INPE, Date: August 2024, [URL](https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202408INPE/)
     - **Tutorial 4**: Location: HOWARD, Date: October 2024, [URL](https://www2.mmm.ucar.edu/projects/mpas-jedi/tutorial/202410HOWARD/)

   - **Publications**:
     - **Publication 1**: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 1.0.0): EnVar implementation and evaluation," [Link](https://gmd.copernicus.org/articles/15/7859/2022/)
     - **Publication 2**: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta): ensemble of 3D ensemble-variational (En-3DEnVar) assimilations," [Link](https://gmd.copernicus.org/articles/16/7123/2023/)
       - Summary: Describes the multivariate static background error covariance (B) for the JEDI-MPAS 3D-Var data assimilation system.
     - **Publication 3**: "Three-dimensional variational assimilation with a multivariate background error covariance for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta)," [Link](https://gmd.copernicus.org/articles/17/3879/2024/)

   - **About**:  
     - "MPAS-JEDI is NCAR/MMM's community data assimilation system for the Model for Prediction Across Scales – Atmosphere (MPAS-A), supporting global and regional applications with deterministic or ensemble algorithms and advanced all-sky satellite radiance assimilation."

Check the website to confirm that the layout and content match the original site.

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
