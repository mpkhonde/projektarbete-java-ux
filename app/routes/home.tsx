import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Student Finance App" },
    { name: "description", content: "Welcome to our finance app!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
