import multer from "multer";
import { google } from "googleapis";
import { Readable } from 'stream';

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer().single("file");

export default async function handler(req, res) {
  if (req.method === "POST") {
    upload(req, res, async function (err) {
      if (err) {
        console.error("Error uploading files:", err);
        return res.status(500).send("Error uploading files");
      }
      const file = req.file;
      if (!file) {
        return res.status(400).send("No file was uploaded.");
      }
      const fields = req.body;
      try {
        const gKey = {
            "type": "XXXXXXXXX",
            "project_id": "XXXXXXXXXX",
            "private_key_id": "XXXXXXXXX",
            "private_key": "XXXXXXXXX",
            "client_email": "XXXXXXXXX",
            "client_id": "XXXXXXXXX",
            "auth_uri": "XXXXXXXXX",
            "token_uri": "hXXXXXXXXX",
            "auth_provider_x509_cert_url": "XXXXXXXXX",
            "client_x509_cert_url": "XXXXXXXXX",
            "universe_domain": "googleapis.com"
          };
        const gkeyString = JSON.stringify(gKey);          
        const parentId = "XXXXXXXXX";
        const auth = new google.auth.GoogleAuth({
          credentials: JSON.parse(gkeyString),
          scopes: ["https://www.googleapis.com/auth/drive.file"],
        });
        const authClient = await auth.getClient();
        const drive = google.drive({ version: "v3", auth: authClient });
        const media = {
          mimeType: file.mimetype,
          body: Readable.from(file.buffer),
        };

        const driveResponse = await drive.files.create({
          requestBody: {
            name: file.originalname,
            mimeType: file.mimetype,
            parents: [parentId],
          },
          media,
        });
        const driveFileUrl = `https://drive.google.com/file/d/${driveResponse.data.id}/view`;
        const notionResponse = await fetch("https://api.notion.com/v1/pages", {
          method: "POST",
          headers: {
            Authorization:
              "Bearer XXXXXXXXX",
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28",
          },
          body: JSON.stringify({
            parent: {
              database_id: "XXXXXXXXX",
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: fields.name,
                    },
                  },
                ],
              },
              Email: {
                rich_text: [
                  {
                    text: {
                      content: fields.email,
                    },
                  },
                ],
              },
              Job: {
                rich_text: [
                  {
                    text: {
                      content: fields.job,
                    },
                  },
                ],
              },
              CV: {
                files: [
                  {
                    name: file.originalname,
                    type: "external",
                    external: {
                      url: driveFileUrl,
                    },
                  },
                ],
              },
            },
          }),
        });

        if (notionResponse.ok) {
          return res.status(200).send("File uploaded and sent to Notion");
        } else {
          throw new Error(`HTTP error! status: ${notionResponse.status}`);
        }
      } catch (error) {
        console.error("Error uploading to Notion:", error);
        return res.status(500).send("Error uploading to Notion");
      }
    });
  } else {
    return res.status(405).send("Method not allowed");
  }
}
