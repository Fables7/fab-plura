import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AgencyPage = async () => {
  const authUser = await currentUser();
  if (!authUser) return redirect("/sign-in");
  return <div>AgencyPage</div>;
};

export default AgencyPage;
