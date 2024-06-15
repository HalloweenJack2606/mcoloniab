import React from "react";
import PageTitle from "../../components/page_title/page_title";
import JobSection from "./components/job_section/job_section";
import Header from "../../components/header/header";

export default function Experience() {
    const jobs = [
        {company: "Stracontech", start: "07/2023", end: "07/2024", position: "Fullstack Programmer"},
        {company: "My Industrial Data", start: "03/2023", position: "Lead Programmer"},
        {company: "BringeMe - Senegal", start: "01/2023", position: "Front/Backend & Mobile Programmer"},
        {company: "E-Pask digital solutions", start: "06/2020", end: "12/2022", position: "Lead Programmer"},
        {company: "Crypto Development", start: "06/2021", end: "12/2021", position: "Front/Backend & Mobile Programmer"},
        {company: "FLI!", start: "10/2020", end: "12/2020", position: "Freelance Programmer"},
        {company: "Bit2Bit Americas", start: "01/2019", end: "06/2019", position: "Internship"},
        {company: "Real Estate Group ProCity", start: "02/2017", end: "03/2017", position: "Freelance Programmer"},
    ]

    return (
        <div>
            <Header/>
            <PageTitle title={'experience'}/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                {jobs?.map((job, index) => (
                    <JobSection
                        company={job.company}
                        position={job.position}
                        start={job.start}
                        end={job.end}
                    />
                ))}
            </div>
        </div>
    )
}