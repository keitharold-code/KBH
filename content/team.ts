export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
  /** Path under /public/images/team, e.g. "keith-harold-mugabi.jpg". Omit for a placeholder. */
  photo?: string;
}

/** [[TEAM MEMBERS TO BE SUPPLIED]] — append entries; order is display order. */
export const team: TeamMember[] = [
  {
    name: "Keith Harold Mugabi",
    title: "Founder and Director", // [[CONFIRM]] formal title
    bio: "Information technology and information security professional and multi-sector entrepreneur. Leads the group's strategy, governance and capital allocation.",
    linkedin: undefined, // [[CONFIRM]]
  },
];
