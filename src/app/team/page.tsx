import { PageHeader, TeamGrid, JoinOurTeam } from "@/components";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet Our Legal Experts"
        backgroundImage="/images/team-header.jpg"
      />
      <TeamGrid />
      <JoinOurTeam />
    </>
  );
}
