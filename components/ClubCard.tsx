import Link from "next/link";
import { Club } from "@/lib/types";

// TODO (Task 4a): move the prop type into a named interface Props and finish the card.
export default function ClubCard({ club }: { club: Club }) {
  return (
    <div className="card">
      <h3>
        <Link href={`/clubs/${club.id}`}>{club.name}</Link>
      </h3>
    </div>
  );
}
