"use client";
import Image from "next/image";
import PageSection from "../../components/PageSection";
import teamData from "../../../public/JSONs/teams.json";
import { getLastRowClasses, toTeamId } from "../common/common";


export default function LeadsPage() {

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
              <br />
              <br />
              {teamData.sub_teams.find((t) => t.name === "Management Team")?.description}
            </h2>
          </div>
        </section>
      </PageSection>

      {/* Leads Sections */}
      <PageSection colourWay="dark">
        {/* Subteam Navigation */}
        <nav className="flex flex-wrap gap-2 justify-center mb-10 px-8">
          {teamData.sub_teams.map((team) => (
            <button
              key={team.name}
              onClick={() =>
                document
                  .getElementById(toTeamId(team.name))
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 text-sm font-medium rounded-full bg-gray-900 hover:bg-green hover:text-black transition-colors"
            >
              {team.name}
            </button>
          ))}
        </nav>

        {teamData.sub_teams.map((team, teamIndex) => (
          <section
            key={teamIndex}
            id={toTeamId(team.name)}
            className="mb-20 border-b border-divborder pb-12"
          >
            {/* Team Title */}
            <h2 className="text-3xl font-bold text-center underline decoration-green mb-10">
              {team.name}
            </h2>

            {/* Team Leads */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-8">
              {team.team_leads?.map((lead, leadIndex) => (
                <div
                  key={leadIndex}
                  className={`bg-gray-900 rounded-lg text-center ${getLastRowClasses(team.team_leads, leadIndex)}`}
                >
                  <Image
                    src={lead.image}
                    alt={lead.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-md object-cover w-[220px] h-[150px]"
                  />

                  <h4 className="text-lg font-bold mt-4 text-green">
                    {lead.name}
                  </h4>

                  <p>{lead.role}</p>

                  <p className="text-sm text-gray">{team.name}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </PageSection>
    </>
  );
}