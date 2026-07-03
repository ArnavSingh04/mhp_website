/**
 * Stores types and functions, specifically functions that return layouts (classNames)
 */

export type TeamMember = {
  name: string;
  role: string;
  department: string;
  image: string;
};

/**
 * Helper function to determine the layout for the last row
 */ 
export const toTeamId = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

export const getLastRowClasses = (members: string | any[], index: number) => {
  const MEMBERS_PER_ROW = 3;
  const totalMembers = members.length;
  const isLastRow =
    index >= totalMembers - (totalMembers % MEMBERS_PER_ROW || MEMBERS_PER_ROW);

  if (!isLastRow) return "";

  const membersInLastRow = totalMembers % MEMBERS_PER_ROW;

  if (membersInLastRow === 1 && index === totalMembers - 1) {
    return "lg:col-start-2 lg:col-end-3"; // Center the single member
  } 
  else if (
    membersInLastRow === 2 &&
    (index === totalMembers - 2 || index === totalMembers - 1)
  ) {
    return index === totalMembers - 2
      ? "lg:col-start-1 lg:col-end-2"
      : "lg:col-start-3 lg:col-end-4"; // First and third column
  }

  return ""; // For rows with 3 members, default layout applies
};