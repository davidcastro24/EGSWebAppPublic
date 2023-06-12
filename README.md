Website made using NextJs + React

Things worth noting:
pages/api/Notion.js
    use google drive api to save a file
    get the file URL and use the notion API to save this url + some fields to a database in notion

pages/api/fetchJobs.js
    use notion api to get data from a notion database

pages/api/SendEmail.js
    use nodemailer to send emails using mailjet as provider
