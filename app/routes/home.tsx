import type { Route } from "./+types/home";
import { Welcome } from "~/home/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Balanza" },
    { name: "description", content: "Welcome to our finance app!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
