import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { MessagesView } from "@/components/dashboard/MessagesView";

export default function CustomerMessagesPage() {
  return (
    <>
      <DashboardHeader title="Messages" />
      <DashboardBody>
        <MessagesView />
      </DashboardBody>
    </>
  );
}
