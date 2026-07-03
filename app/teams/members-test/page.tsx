"use client";
import Image from "next/image";
import PageSection from "../../components/PageSection";
import teamData from "../../../public/JSONs/teams.json";  // Import single source of truth for team data
import { getLastRowClasses, toTeamId } from "../common/common";


export default function TeamPage() {

  return (
    <>
      <title>Teams | MHP</title>
      <PageSection colourWay="dark">
        <section className="relative text-center ">
          <div className="relative z-10">
            <h1 className="text-center text-5xl">Meet our Team</h1>
            
            {/* Battle Mountain Group Image */}
            <div className="relative w-dvh h-96 items-center overflow-hidden mx-auto">
              <Image
                src="/images/home_page/battle_mountain_group.jpg"
                fill
                style={{objectFit : "cover", objectPosition: "center 80%"}}
                alt="Battle Mountain Group"
                className="top-1/2 transform -translate-y-1/5"
              />
            </div>

            <h2 className="mt-2 mx-20">
              We, at Monash Human Power are a diverse team of Monash University
              students, bringing together expertise from various engineering
              disciplines to design cutting-edge human-powered vehicles.
            </h2>
            <h3 className="mt-2 text-green">
              Learn more about our sub-teams below!
            </h3>
          </div>
        </section>
      </PageSection>

      {/* Sub-teams navigation */}
      <PageSection colourWay="dark">
        <div
          className="p-4"
          style={{
            borderTop: "2px solid #5e5b5b", // Top border
            width: "95%",
            margin: "0 auto",
            textAlign: "center",
          }}
        ></div>

        {/* Subteam Navigation */}
        <nav className="grid grid-cols-4 gap-2 justify-items-center mb-10 px-8">
          {teamData.sub_teams.filter((team) => team.name !== "Management Team").map((team) => (
            <button
              key={team.name}
              onClick={() =>
                document
                  .getElementById(toTeamId(team.name))
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 text-base font-medium rounded-full bg-gray-900 hover:bg-green hover:text-black transition-colors"
            >
              {team.name}
            </button>
          ))}
        </nav>

        {teamData.sub_teams.filter((team) => team.name !== "Management Team").map((team, teamIndex) => (
        <div key={teamIndex} id={toTeamId(team.name)} className="mb-20 border-b border-divborder pb-12">
          {/* Team Title */}
          <h2 className="text-3xl font-bold text-center underline decoration-green mb-8">
            {team.name}
          </h2>

          {/* Team Info */}
          <section>
            <div className="flex flex-col lg:flex-row justify-center items-stretch lg:space-x-8 px-8">
              {/* Image */}
              <div className="w-full lg:w-1/2 md:w-1/2">
                <Image
                  src={team.image}
                  alt={team.name}
                  width={800}
                  height={650}
                  className="mx-auto rounded-lg object-cover xl:w-[500px] xl:h-[300px]"
                />
              </div>

              {/* Description */}
              <div className="mt-2 mx-2 lg:mt-0 lg:w-1/2 md:w-1/2 flex items-center">
                <p className="font-extralight text-center lg:text-justify">
                    {team.description}
                </p>
              </div>
            </div>
          </section>

          {/* Team Members Only (No leads or UM) */}
          <section className="mt-12">
            {/* Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-8">
              {team.members?.map((member, index) => (
                <div
                  key={index}
                  className={`bg-gray-900 rounded-lg text-center ${getLastRowClasses(
                  team.members,
                  index
                  )}`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-md object-cover w-[220px] h-[150px]"
                  />

                  <h4 className="text-lg font-bold mt-4 text-green">
                    {member.name}
                  </h4>

                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        ))}
      </PageSection>
    </>
  );
}
