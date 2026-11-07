"use client";

import ClubCard from "./ClubCard";
import { Club, Category } from "@/lib/types";

interface Props {
  clubs: Club[];
}

const choices: (Category | "all")[] = ["all", "sports", "arts", "tech", "music"];

export default function ClubBrowser({ clubs }: Props) {
  // TODO (Task 4b): add state for the selected category and work out which clubs to show.

  return (
    <div>
      <div className="filters">
        {/* TODO (Task 4b): one button per choice, wired to your state */}
      </div>

      {/* TODO (Task 4b): show the empty message when nothing matches, else the cards */}
      <div className="card-row">
        {clubs.map((club) => (
          <ClubCard club={club} />
        ))}
      </div>
    </div>
  );
}
