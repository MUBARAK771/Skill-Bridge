import { redirect } from "next/navigation";

export default function TalentPage() {
  redirect("/login?required=1");
}