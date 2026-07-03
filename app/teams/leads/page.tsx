"use client";
import Image from "next/image";
import PageSection from "../../components/PageSection";
import teamData from "../../../public/JSONs/teams.json";
import { TeamMember } from "../common/common";
import { getLastRowClasses } from "../common/common";


export default function LeadsPage() {
  /**
   * 
   * @param teamLeads 
   * @param teamName 
   * @returns 
   */
  const getLeadLayoutClasses = (teamLeads: TeamMember[], teamName: string) => {
    const isSpecialTeam = teamName === "Management Team" || teamName === "Auxiliary";

    if (teamLeads.length === 2 || isSpecialTeam) return "grid grid-cols-1 md:grid-cols-2 gap-8";

    if (teamLeads.length === 1) return "flex justify-center";

    return "flex flex-wrap justify-center gap-6";
  };

  return (
    <>
      <title>Team Leads | MHP</title>

      <PageSection colourWay="dark">
        <section className="relative text-center">
          <div className="relative z-10">
            <h1 className="text-center text-5xl mb-6">
              Meet our Team Leads
            </h1>

            {/* Group Image */}
            <div className="relative w-dvh h-96 items-center overflow-hidden mx-auto">
              <Image
                src="/images/home_page/battle_mountain_group.jpg"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center 80%",
                }}
                alt="Battle Mountain Group"
                className="top-1/2 transform -translate-y-1/5"
              />
            </div>

            <h2 className="mt-6 mx-20">
              Our leadership team is composed of passionate students from a
              diverse range of engineering disciplines, driving innovation,
              collaboration, and performance across Monash Human Power.
            </h2>
          </div>
        </section>
      </PageSection>

      {/* Leads Sections */}
      <PageSection colourWay="dark">
        {teamData.sub_teams.map((team, teamIndex) => (
          <section
            key={teamIndex}
            className="mb-20 border-b border-divborder pb-12"
          >
            {/* Team Title */}
            <h2 className="text-3xl font-bold text-center underline decoration-green mb-10">
              {team.name}
            </h2>

            {/* Team Leads */}
            <div
              className={`${getLeadLayoutClasses(
                team.team_leads,
                team.name
              )} px-8`}
            >
              {team.team_leads?.map((lead, leadIndex) => (
                <div
                  key={leadIndex}
                  className="bg-gray-900 p-6 rounded-lg text-center shadow-lg"
                >
                  <Image
                    src={lead.image}
                    alt={lead.name}
                    width={250}
                    height={250}
                    className="mx-auto rounded-md object-cover w-[250px] h-[180px]"
                  />

                  <h3 className="text-2xl font-bold mt-5 text-green">
                    {lead.name}
                  </h3>

                  <p className="mt-2 text-lg">{lead.role}</p>

                  <p className="mt-1 text-sm text-gray">
                    {team.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </PageSection>
    </>
  );
}