import React from "react";
import PageTitle from "../../components/page_title/page_title";
import JobSection from "./components/job_section/job_section";
import Header from "../../components/header/header";

export default function Experience() {
    const jobs = [
        {company: "Limberfy", start: "07/2024", position: "Fullstack Programmer", work: ["Desarrollo Plataforma de Proveedores", "Desarrollo Sistema Antifraude", "Desarrollo Plataforma de Conformidad", "Desarrollo Aplicación de emisión de GRE"]},
        {company: "Stracontech", start: "06/2023", end: "07/2024", position: "Fullstack Programmer", work: ["Desarrollo sistemas integrados", "Desarrollo firmware KPDU", "Desarrollo firmware Sistema de Proximidad", "Desarrollo backend y frontend Tracking de Personas"]},
        {company: "Chispa (Arrocera)", start: "06/2023", end: "03/2025", position: "Fullstack Programmer", work: ["Desarrollo frontend de manejo de productos", "Desarrollo backend de manejo de productos"]},
        {company: "My Industrial Data", start: "03/2023", end: "06/2024", position: "Lead Programmer", work: ["Desarrollo frontend Plataforma IOT", "Desarrollo backend Plataforma IOT", "Desarrollo flujo de alertas condicionales"]},
        {company: "BringeMe - Senegal", start: "01/2023", end: "12/2024", position: "Front/Backend & Mobile Programmer", work: ["Desarrollo frontend Tienda", "Desarrollo backend Tienda", "Desarrollo frontend Backoffice", "Desarrollo mobile Tienda"]},
        {company: "E-Pask digital solutions", start: "06/2020", end: "12/2022", position: "Lead Programmer", work: ["Desarrollo de multiples ERP", "Desarrollo de multiples CRM", "Desarrollo de multiples tiendas virtuales", "Desarrollo VR (con Unity)"]},
        {company: "Crypto Development", start: "06/2021", end: "12/2021", position: "Front/Backend & Mobile Programmer" , work: ["Desarrollo de contratos inteligentes"]},
        {company: "FLI!", start: "10/2020", end: "12/2020", position: "Freelance Programmer", work: ["Desarrollo de multiplies funcionalidades de gameplay"]},
        {company: "Bit2Bit Americas", start: "01/2019", end: "06/2019", position: "Internship", work: ["Desarrollo con Rust", "Deploy con AWS"]},
        {company: "Real Estate Group ProCity", start: "02/2017", end: "03/2017", position: "Freelance Programmer", work: ["Desarrollo applicación para el área de contabilidad"]},
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
                        work={job.work}
                    />
                ))}
            </div>
        </div>
    )
}