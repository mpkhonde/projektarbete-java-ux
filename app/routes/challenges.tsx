import { Challenges } from "~/challenges/Challenges";
import type { Route } from "../+types/root";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "Balanza - Utmaningar" },
    { name: "description", content: "Welcome to our finance app!" },
  ];
}

export default function ChallengePage() {
  return <Challenges />;
}
