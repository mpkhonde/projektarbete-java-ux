import { SavingTips } from "~/savingtips/SavingTips"
import type { Route } from "../+types/root";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Balanza - Spartips" },
    { name: "description", content: "Welcome to our finance app!" },
  ];
}

export default function SavingTipsPage() {
    return <SavingTips />
}