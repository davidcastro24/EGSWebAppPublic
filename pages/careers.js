import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Offcanvas,
  Row,
  Form,
} from "react-bootstrap";
import Banner from "./components/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Careers = ({ jobs, allSkills }) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleBadgeClick = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((sk) => sk !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleShow = (value) => {
    setShow(value);
  };

  const handleClick = (job) => {
    setSelectedJob(job);
    handleShow(true);
  };

  const submitForm = (event) => {
    event.preventDefault();
    postInfo();
    setName("");
    setEmail("");
    setFile(null);
    event.target.elements.file.value = null;
    handleShow(false);
  };

  const postInfo = async () => {
    const formData = new FormData();
    formData.append("job", selectedJob.title);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("file", file);
    try {
     console.log("before");
      const response = await fetch("/api/Notion", {
        method: "POST",
        body: formData,
      });
    console.log(response);
    if (response.ok) {
       toast.success("Application has been sent!");
      }else{
        toast.error("There was an error on our side");
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
    } catch (error) {
      console.error("Error:", error);
      
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const extArray = selectedFile.name.split(".");
    const ext = extArray[extArray.length - 1];
    const accepted = ["pdf", "doc", "docx"];
    if (!accepted.includes(ext)) {
      toast.error("." + ext + " extension not valid");
      event.target.value = null;
    } else {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <Banner text="Careers" />
      <Container>
        <br />
        <br />
        <Row>
          <h1 style={{ fontWeight: "bold", fontSize: "4rem" }}>
            <span style={{ color: "#6B9ECA" }}>Evolve</span> Your Career to the
            Next Level
          </h1>

          <h5 style={{ color: "gray" }}>
            <br />
            Click on any skill on the list below to view all related jobs
          </h5>
        </Row>
        <Row>
          <Col>
            {allSkills &&
              allSkills.map((skill) => (
                <Badge
                  key={skill}
                  pill
                  bg={selectedSkills.includes(skill) ? "info" : "dark"}
                  style={{
                    marginRight: "10px",
                    marginTop: "10px",
                    fontFamily: "Dosis",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleBadgeClick(skill)}
                >
                  {skill}
                </Badge>
              ))}
          </Col>
        </Row>
        <br />
        <br />
        {jobs && (
          <Row>
            {jobs.map((job) => {
              const hasSelectedSkills = selectedSkills.length > 0;
              const hasMatchingSkills =
                hasSelectedSkills &&
                job.skills.some((skill) => selectedSkills.includes(skill));
              if (hasMatchingSkills || !hasSelectedSkills) {
                return (
                  <Row style={{ marginBottom: "25px" }} key={job.id}>
                    <Card key={job.id} style={{ backgroundColor: "#FAF9F6" }}>
                      <Card.Title>
                        {job.skills &&
                          job.skills.map((skill) => (
                            <Badge
                              pill
                              key={skill}
                              bg="dark"
                              style={{
                                marginRight: "10px",
                                marginTop: "10px",
                                fontFamily: "Dosis",
                                fontSize: "0.8rem",
                              }}
                            >
                              {skill}
                            </Badge>
                          ))}
                      </Card.Title>
                      <Card.Body
                        style={{ fontFamily: "Dosis", fontSize: "1.1rem" }}
                      >
                        <h1
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Dosis",
                            fontSize: "1.7rem",
                          }}
                        >
                          {job.title}
                        </h1>
                        {job.description}
                      </Card.Body>
                      <Card.Footer>
                        <Button
                          variant="primary"
                          onClick={() => handleClick(job)}
                        >
                          View More
                        </Button>
                      </Card.Footer>
                    </Card>
                    <br />
                    <br />
                  </Row>
                );
              } else {
                return null;
              }
            })}
          </Row>
        )}
        <Row>
            <h5>Didn't find what you were looking for?</h5>
            <p>Check out our <Link href={"/services"} style={{textDecoration:"none"}}>services</Link>, if any one interests you send us a message and we'll contact you once we have an opening anus</p>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={() => handleShow(false)}>
        <Offcanvas.Body>
          {selectedJob && (
            <>
              <h5
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                {selectedJob.title}
              </h5>
              <br />
              <h5 style={{ fontWeight: "bold" }}>Qualifications</h5>

              <ul>
                {selectedJob.qualifications.map((qual) => (
                  <li
                    key={qual}
                    style={{ listStyleImage: `url(/images/bullet.png)` }}
                  >
                    {qual}
                  </li>
                ))}
              </ul>
              <br />
              <h5 style={{ fontWeight: "bold" }}>Responsibilities</h5>
              <ul>
                {selectedJob.responsibilities.map((resps) => (
                  <li
                    key={resps}
                    style={{ listStyleImage: `url(/images/bullet.png)` }}
                  >
                    {resps}
                  </li>
                ))}
              </ul>
              <br />
              <p>
                <span style={{ fontWeight: "bold" }}>Date Posted </span>
                {selectedJob.date}
              </p>
              <br />
            </>
          )}
          <h4 style={{ fontWeight: "bold", color: "#6B9ECA" }}>
            Got the skills? Apply here
          </h4>
          <br />
          <Form onSubmit={submitForm}>
            <Form.Group controlId="contact">
              <Form.Label>
                Full Name <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              ></Form.Control>
              <br />
              <Form.Label>
                Email <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              ></Form.Control>
              <br />
              <Form.Label>
                <FontAwesomeIcon icon={faPaperclip} /> Attachment
                <span style={{ color: "red" }}> *</span>
              </Form.Label>
              <Form.Control
                type="file"
                accept=".pdf, .doc, .docx"
                name="file"
                onChange={handleFileChange}
                required
              />
              <br />
              <p>{file ? file.name : ""}</p>
            </Form.Group>
            <br />
            <Button type="submit" variant="info">
              Begin my Evolution!
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export async function getStaticProps() {
  const databaseId = "66723dedfdd84110b94ee0fe65e10509";
  const endpoint =
    "https://api.notion.com/v1/databases/" + databaseId + "/query";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
      Authorization:
        "Bearer secret_RemmAgpKByf1YekRNgbWlr874ceero73kOV6CYUacN3",
    },
  };
  const response = await fetch(endpoint, requestOptions);
  const data = await response.json();
  const allSkills = [];
  const jobs = data.results.map((job) => {
    const tags = job.properties.Tags.multi_select.map((tag) => tag.name);
    const skills = job.properties.Skills.rich_text[0].plain_text.split("|");
    skills.forEach((sk) => {
      if (!allSkills.includes(sk.trim())) {
        allSkills.push(sk.trim());
      }
    });
    const quals = job.properties.Qualifications.rich_text[0].plain_text
      .split("-")
      .slice(1);
    const resps = job.properties.Responsibilities.rich_text[0].plain_text
      .split("-")
      .slice(1);

    return {
      id: job.properties.Id.unique_id.number,
      title: job.properties.Title.title[0].text.content,
      description: job.properties.Description.rich_text[0].plain_text,
      qualifications: quals,
      responsibilities: resps,
      skills: skills,
      tags: tags,
      category: job.properties.Category.multi_select[0].name,
      date: job.properties.Date.date.start,
    };
  });
  return {
    props: {
      jobs,
      allSkills,
    },
  };
}

export default Careers;
