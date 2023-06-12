import React from "react";

export async function getJobsData() {
    console.log('API call is being made');
  const databaseId = "XXXXXXXXX";
  const endpoint =
    "https://api.notion.com/v1/databases/" + databaseId + "/query";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
      Authorization:
        "Bearer XXXXXXXXX",
    },
  };
  console.log('API call is being made2');
  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
  console.log('API call is being made3');
  const jobs = data.results.map((job) => {
    const tags = job.properties.Tags.multi_select.map((tag) => tag.name);
    return {
      id: job.properties.Id.unique_id.number,
      title: job.properties.Title.title[0].plain_text,
      description: job.properties.Description.rich_text[0].plain_text,
      qualifications: job.properties.Qualifications.rich_text[0].plain_text,
      responsibilities: job.properties.Responsibilities.rich_text[0].plain_text,
      skills: job.properties.Skills.rich_text[0].plain_text,
      tags: tags,
      category: job.properties.Category.multi_select[0].name,
    };
  });

  return jobs;
}
