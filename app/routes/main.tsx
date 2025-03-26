import { Main } from "~/main/main"
import type { Route } from "./+types/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Balanza" },
    { name: "description", content: "Welcome to our finance app!" },
  ];
}

export default function Mainpage() {
    return <Main />
}