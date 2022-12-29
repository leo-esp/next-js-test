import { useBreadcrumbPath } from "utils/hooks/useBreadcrumbPath";
import React from "react";
import Link from "next/link";
import { StyledBreadcrumb } from "./styles";

interface Props {}

export const routeNames: { [value: string]: string } = {
  about: "Quem Somos",
  "": "Home",
  schedule: "Agendar Consulta",
};

const Breadcrumb: React.FC<Props> = () => {
  const breadcrumb = useBreadcrumbPath();
  return (
    <StyledBreadcrumb>
      {breadcrumb.map((route, index, array) => {
        return (
          <Link href={index === 0 ? "/" : route} key={index}>
            <b>{`${routeNames[route]}`}</b>
            {` ${index === array.length - 1 ? "" : "> "}`}
          </Link>
        );
      })}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
