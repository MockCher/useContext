import { useContext } from "react";
import { UserContext } from "./App";

export default function Header({ subtitle = "" }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Hi {user?.name ?? "fellow"}!</h1>
      <h3>{subtitle}</h3>
    </div>
  );
}
