export interface TeamMember {
  name: string;
  title: string;
  /** Optional short biography. Omit to show name and title only. */
  bio?: string;
  linkedin?: string;
  /** Filename under /public/images/team, e.g. "keith-harold-mugabi.jpg". Omit for a placeholder. */
  photo?: string;
}

/** Order here is display order. */
export const team: TeamMember[] = [
  {
    name: "Keith Harold Mugabi",
    title: "Founder & CEO",
    bio: "Information technology and information security professional and multi-sector entrepreneur. Leads the group's strategy, governance and capital allocation.",
  },
  { name: "Makmot Victor", title: "Director, Legal" },
  { name: "Billy Kuteisa", title: "Non-Executive Director" },
];
