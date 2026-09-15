"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardBody } from "@/components/dashboard/DashboardBody";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const slots = ["Morning", "Afternoon", "Evening"];

export default function AvailabilityPage() {
  const [grid, setGrid] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    days.forEach((d, di) => slots.forEach((s) => { init[`${d}-${s}`] = di < 5 && s !== "Evening"; }));
    return init;
  });
  const [online, setOnline] = useState(true);

  const toggle = (key: string) => setGrid((g) => ({ ...g, [key]: !g[key] }));

  return (
    <>
      <DashboardHeader title="Availability" />
      <DashboardBody>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h3 className="font-display font-bold text-slate-900">Weekly availability</h3>
              <p className="mt-1 text-sm text-slate-500">Tap a slot to toggle when you can take bookings.</p>
              <div className="mt-5 overflow-x-auto scroll-thin">
                <table className="w-full min-w-[560px] border-separate border-spacing-1.5">
                  <thead>
                    <tr>
                      <th></th>
                      {slots.map((s) => <th key={s} className="pb-1 text-xs font-semibold text-slate-500">{s}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {days.map((d) => (
                      <tr key={d}>
                        <td className="pr-3 text-right text-sm font-medium text-slate-600">{d}</td>
                        {slots.map((s) => {
                          const key = `${d}-${s}`;
                          const on = grid[key];
                          return (
                            <td key={s}>
                              <button
                                onClick={() => toggle(key)}
                                className={`h-11 w-full rounded-lg text-xs font-semibold transition ${
                                  on ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                                }`}
                              >
                                {on ? "Available" : "—"}
                              </button>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5"><Button>Save availability</Button></div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="font-display font-bold text-slate-900">Online status</h3>
              <label className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-600">Accepting new bookings</span>
                <button
                  onClick={() => setOnline((v) => !v)}
                  className={`relative h-6 w-11 rounded-full transition ${online ? "bg-brand-600" : "bg-slate-300"}`}
                >
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${online ? "left-5" : "left-0.5"}`} />
                </button>
              </label>
            </Card>
            <Card className="p-6">
              <h3 className="font-display font-bold text-slate-900">Time off</h3>
              <p className="mt-1 text-sm text-slate-500">Block out holidays so you don&apos;t get booked.</p>
              <Button variant="outline" size="sm" className="mt-4 w-full">Add time off</Button>
            </Card>
          </div>
        </div>
      </DashboardBody>
    </>
  );
}
