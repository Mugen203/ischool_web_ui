import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function SettingsPage() {
  const userRole = cookies().get("user-role")?.value || "student";
  redirect(`/settings/${userRole}`);
}
