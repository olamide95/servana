import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { SettingsForm } from "@/components/dashboard/SettingsForm";
import { currentUsers } from "@/lib/data";

export default function CustomerSettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <DashboardBody>
        <SettingsForm user={currentUsers.customer} />
      </DashboardBody>
    </>
  );
}
