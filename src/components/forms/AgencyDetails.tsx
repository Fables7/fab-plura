import { Agency } from "@prisma/client";
import React from "react";
import { useToast } from "../ui/use-toast";

type Props = {
  data?: Partial<Agency>;
};

const AgencyDetails = ({ data }: Props) => {
  const { toast } = useToast();
  return <div>AgencyDetails</div>;
};
