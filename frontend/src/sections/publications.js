/**
 * publications is an array of objects where each object represents a publication.
 * Each publication object contains the following properties:
 * 
 * - title: A string representing the title of the publication.
 * - url: A string representing the URL to the publication.
 * - summary: (Optional) A string summarizing the publication.
 * - date: (Optional) A string representing the date of the publication.
 * - authors: (Optional) An array of strings representing the authors of the publication.
 * 
 * For example:
 * 
 * {
 *   title: "Publication Title",
 *   url: "http://example.com/publication",
 *   summary: "This publication is about...",
 *   date: "Year of publication",
 *   authors: ["Author One", "Author Two"],
 * }
 * 
 * To add a new publication, directly alter the publications array by adding a new object
 * with the required properties(title, and url) and the optional properties if available (summary, date, authors).
 * An added publication should follow the same structure as the previous publication objects. 
 *  
 * For example:
 * 
 * {
 *   title: "New Publication Title",
 *   url: "http://newpublication.com",
 *   summary: "This new publication is about...",
 *   date: "New Year of publication",
 *   authors: ["New Author One", "New Author Two"],
 * }
 */
export const publications = [
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 1.0.0): EnVar implementation and evaluation",
        url: "https://gmd.copernicus.org/articles/15/7859/2022/"
    },
    {
        title: "Data assimilation for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta): ensemble of 3D ensemble-variational (En-3DEnVar) assimilations",
        url: "https://gmd.copernicus.org/articles/16/7123/2023/",
        summary: "We describe the multivariate static background error covariance (B) for the JEDI-MPAS 3D-Var data assimilation system. With tuned B parameters, the multivariate B gives physically balanced analysis increment fields in the single-observation test framework. In the month-long cycling experiment with a global 60 km mesh, 3D-Var with static B performs stably. Due to its simple workflow and minimal computational requirements, JEDI-MPAS 3D-Var can be useful for the research community."
    },
    {
        title: "Three-dimensional variational assimilation with a multivariate background error covariance for the Model for Prediction Across Scales – Atmosphere with the Joint Effort for Data assimilation Integration (JEDI-MPAS 2.0.0-beta)",
        url: "https://gmd.copernicus.org/articles/17/3879/2024/",
        date: "2024",
        authors: ["Byoung-Joo Jung","Benjamin Ménétrier", "Chris Snyder", "Zhiquan Liu", "Jonathan J. Guerrette", "Junmei Ban", "Ivette Hernández Baños", "Yonggang G. Yu", "William C. Skamarock"]
    },
];
