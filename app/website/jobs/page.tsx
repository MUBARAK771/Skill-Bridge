import { redirect } from "next/navigation";

export default function JobsPage() {
  redirect("/login?required=1");
}