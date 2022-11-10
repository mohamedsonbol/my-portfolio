import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import MyPic from "../assets/mohamedsonbol.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4} phone={8}>
            <div style={{ textAlign: "center" }}>
              <img src={MyPic} alt="Avatar" style={{ height: "200px" }} />
            </div>
            <div className="container">
              <h2 style={{ paddingTop: ".5em" }}>Mohamed Sonbol</h2>
              <h4 style={{ color: "grey" }}>Front-end Developer</h4>

              <hr style={{ borderTop: "3px solid #844fb2", width: "50%" }} />

              <p style={{ textAlign: "justify" }}>
                
              </p>
              <hr style={{ borderTop: "3px solid #844fb2", width: "50%" }} />
              <h5>Email</h5>
              <p>mhmdezzat.eng@gmail.com</p>

              <hr style={{ borderTop: "3px solid #844fb2", width: "50%" }} />

              <h5>Technologies</h5>
              <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>MongoDB</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>WordPress</li>
                <li>Bootstrap</li>
                <li>Git&Github</li>
                <li>Bash</li>
                <li>RESTful API</li>
              </ul>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Skills</h2>
            <Skills skill="HTML5" progress={100} />
            <Skills skill="CSS3" progress={90} />
            <Skills skill="JavaScript" progress={75} />
            <Skills skill="NodeJS" progress={70} />
            <Skills skill="React" progress={60} />
            <Skills skill="MongoDB" progress={50} />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2021}
              endYear="Present"
              location="Dubai, UAE."
              jobName="Accenture"
              jobPosition="Digital Technical Analyst"
              jobDescription="- Providing professional customer service for clients with technical requirements.
              - Debugging websites, analyzing and providing code (JavaScript)
              - Providing guidance on implementing server-to-server integration (API/JSON/JavaScript)
              - Working with my team on developing Google Chrome extensions
              - Created an automated Google Sheet App using Google App Scripts (JavaScript) 
              - Communicating and working with team members on daily bases"
            />

            <Experience
              startYear={2018}
              endYear={2020}
              location="Dubai, UAE."
              jobName="Abalkhail Real Estate"
              jobPosition="Front-end Developer"
              jobDescription="At my previous job, I was responsible for developing implementing and maintaining mostly internal websites and landing pages. I collaborated with designers and business staff in the design, development and testing, implementing and production support.
							I primary used WordPress for the main company’s website. And Bootstrap 4 and JavaScript for building high-end landing pages. Each landing page connected with Google Ads, Analytics, Tag for conversion tracking and marketing purposes.
							"
            />

            <Experience
              startYear={2015}
              endYear={2018}
              location="Freelancer"
              jobName="Bebcard Digital Solutions"
              jobPosition="Front-end Developer / WordPress"
			  jobDescription="Responsible for communicating with clients to architect the best design solution for
							  their future website using WordPress. Designing, maintaining and deploying WordPress sites.
							  Consulting for the best solutions for domain and host."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Education</h2>
            <Education
              startYear={2010}
              endYear={2013}
              location="Sharjah, United Arab Emirates."
              schooName="Al Shola Private School"
              schoolDescription="Successfully graduated with 85% score."
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
