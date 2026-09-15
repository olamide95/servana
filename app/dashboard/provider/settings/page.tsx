import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { SettingsForm } from "@/components/dashboard/SettingsForm";
import { currentUsers } from "@/lib/data";

export default function ProviderSettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <DashboardBody><SettingsForm user={currentUsers.provider} showBio /></DashboardBody>
    </>
  );
}
