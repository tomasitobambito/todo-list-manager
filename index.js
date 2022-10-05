const { Client } = require('@notionhq/client');

const notion = new Client({ auth: "auth goes here" });

const databaseId = "id goes here";

(async () => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Due Date",
            date: {
                equals: new Date().toISOString().slice(0, 10)
            },
        }
    });
    console.log(response);
})();