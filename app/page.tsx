import ClubBrowser from "@/components/ClubBrowser";
import { clubs } from "@/lib/clubs";
import { totalMembers } from "@/lib/logic";

export default function Home() {
  return (
    <div>
      <h2>Find a club</h2>
      <p>{clubs.length} clubs, {totalMembers(clubs)} members in total.</p>
      <ClubBrowser clubs={clubs} />
    </div>
  );
}
