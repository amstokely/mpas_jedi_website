/**
 * navigation is an array of objects where each object represents a navigation item.
 * Each navigation item object contains the following properties:
 * 
 * - id: A string that represents a unique identifier for the navigation item.
 * - title: A string representing the display name of the navigation item.
 * - url: A string representing the URL that the navigation item should link to.
 * 
 * Here is an example of what a navigation item may look like:
 * 
 * {
 *   id: "1",
 *   title: "Tutorials",
 *   url: "#tutorials",
 * }
 * 
 * If you want to add a new navigation item, simply create a new object with the
 * corresponding properties and append it to the navigation array. Following is 
 * how you do it:
 * 
 * navigation.push({
 *   id: "New ID",
 *   title: "New Title",
 *   url: "New URL",
 * });
 */
export const navigation = [
    {
        id: "0",
        title: "About",
        url: "#about",
    },
    {
        id: "1",
        title: "Tutorials",
        url: "#tutorials",
    },
    {
        id: "2",
        title: "Upcoming Events",
        url: "#upcoming-events",
    },
    {
        id: "3",
        title: "Publications",
        url: "#publications",
    },
];

