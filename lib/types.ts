// TODO (Task 1): replace these loose types with the exact ones from the brief.
export type Category = string;

export interface Club {
  id: number;
  name: string;
  category: string;
  members: number;
  description?: string;
}

// TODO (Task 1): write describeMembers as described in the brief.
export function describeMembers(count: number): string {
  return "";
}
