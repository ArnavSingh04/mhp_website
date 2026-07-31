"use client";
import Image from "next/image";
import PageSection from "../components/PageSection";
import sponsorData from "../../public/JSONs/sponsors.json";

const platinum = sponsorData.filter((s) => s.tier === "platinum");
const gold = sponsorData.filter((s) => s.tier === "gold");
const silver = sponsorData.filter((s) => s.tier === "silver");
const bronze = sponsorData.filter((s) => s.tier === "bronze");

const COLLAGE_IMAGES = [
  "/images/home_page/battle_mountain_group.jpg",
  "/images/home_page/mhp_group.jpg",
  "/images/home_page/o_week_group.jpg",
  "/images/home_page/trike_race.jpg",
];

function TierSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-divborder mx-8 pt-10 mb-12">
      <h2 className="text-3xl font-bold text-center underline decoration-green mb-8">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <>
      <title>Sponsors | MHP</title>

      {/* Hero */}
      <PageSection colourWay="dark">
        <section className="relative text-center">
          <div className="relative z-10">
            <h1 className="text-center text-5xl mb-4">Sponsors</h1>
            <div className="relative w-full h-96 overflow-hidden mx-auto">
              <Image
                src="/images/home_page/battle_mountain_group.jpg"
                fill
                style={{ objectFit: "cover", objectPosition: "center 80%" }}
                alt="MHP Team at Battle Mountain"
              />
            </div>
          </div>
        </section>
      </PageSection>

      {/* Intro + Collage */}
      <PageSection colourWay="dark">
        <div className="flex flex-col lg:flex-row gap-8 px-8 py-4">
          <div className="lg:w-1/2 flex items-center">
            <p className="font-extralight text-justify leading-relaxed">
              Our sponsors play an essential role in making Monash Human Power
              possible. Their generous support enables us to design, build, and
              race world-class human-powered vehicles, pushing the boundaries of
              engineering and human performance. We are deeply grateful for the
              commitment of each partner who believes in our mission and invests
              in the next generation of engineers and innovators.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-2">
            {COLLAGE_IMAGES.map((src, i) => (
              <div key={i} className="relative w-full h-28 overflow-hidden rounded-md">
                <Image
                  src={src}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Platinum */}
      <PageSection colourWay="dark">
        <TierSection title="Platinum">
          <div className="flex flex-col gap-6 px-8">
            {platinum.map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col lg:flex-row items-center gap-8 bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="relative w-48 h-24 flex-shrink-0">
                  <Image
                    src={sponsor.image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={sponsor.title}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green mb-2">{sponsor.title}</h3>
                  <p className="font-extralight text-justify">{sponsor.description}</p>
                </div>
              </a>
            ))}
          </div>
        </TierSection>
      </PageSection>

      {/* Gold */}
      <PageSection colourWay="dark">
        <TierSection title="Gold">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
            {gold.map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-4 rounded-lg flex items-center justify-center h-24 hover:bg-gray-800 transition-colors"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={sponsor.title}
                  />
                </div>
              </a>
            ))}
          </div>
        </TierSection>
      </PageSection>

      {/* Silver */}
      <PageSection colourWay="dark">
        <TierSection title="Silver">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
            {silver.map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-4 rounded-lg flex items-center justify-center h-24 hover:bg-gray-800 transition-colors"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={sponsor.title}
                  />
                </div>
              </a>
            ))}
          </div>
        </TierSection>
      </PageSection>

      {/* Bronze */}
      <PageSection colourWay="dark">
        <TierSection title="Bronze">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
            {bronze.map((sponsor, i) => (
              <a
                key={i}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-4 rounded-lg flex items-center justify-center h-24 hover:bg-gray-800 transition-colors"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={sponsor.image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={sponsor.title}
                  />
                </div>
              </a>
            ))}
          </div>
        </TierSection>
      </PageSection>

      {/* Prospectus */}
      <PageSection colourWay="dark">
        <div className="border-t border-divborder mx-8 pt-10 mb-4">
          <h2 className="text-3xl font-bold text-center underline decoration-green mb-8">
            Our Prospectus
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 px-8 items-center">
            {/* Left: text + CTA */}
            <div className="lg:w-1/2">
              <p className="font-extralight leading-relaxed mb-8">
                We'd love to have you join our cause and support the next
                generation of engineers. If you're interested in partnering with
                MHP, please don't hesitate to reach out or download our
                partnership prospectus to learn more about how we can work
                together.
              </p>
              <p className="font-bold text-lg mb-4">Interested in sponsoring us?</p>
              <a
                href="mailto:operations.mhp@gmail.com"
                className="inline-block bg-green text-black font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
            </div>

            {/* Right: Prospectus card */}
            <div className="lg:w-1/2">
              <div 
                className="relative rounded-xl overflow-hidden min-h-56 flex items-center justify-center"
                style={{
                  background: `
                    position: absolute;
                    width: 1176px;
                    height: 871px;
                    left: 0.02px;
                    top: 3288px;

                    position: absolute;
                    width: 1153px;
                    height: 768px;
                    left: 0.02px;
                    top: 3391px;

                    background: linear-gradient(180deg, rgba(101, 144, 1, 0) 0%, rgba(172, 246, 1, 0.25) 134.51%, rgba(172, 246, 1, 0) 134.52%);

                    position: absolute;
                    width: 1176px;
                    height: 812px;
                    left: 0.02px;
                    top: 3288px;

                    background: linear-gradient(180deg, rgba(101, 144, 1, 0) 0%, rgba(172, 246, 1, 0.42) 127.29%, rgba(172, 246, 1, 0) 127.3%);
                  `
                }}
              >
                {/* <Image
                  src="/images/home_page/mhp_group.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                /> */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center px-8">
                  <p className="text-green font-bold text-sm uppercase tracking-widest mb-2">
                    MHP
                  </p>
                  <h3 className="text-4xl font-bold text-white">PARTNERSHIP</h3>
                  <h3 className="text-4xl font-bold text-green">PROSPECTUS</h3>
                  <h3 className="text-4xl font-bold text-white">2025</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
