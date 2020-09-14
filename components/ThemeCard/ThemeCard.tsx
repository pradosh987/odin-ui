import React from "react";
import { themeVisitUrl } from "../../services/api_service";

interface IProps {
  theme: any;
}
export const ThemeCard = ({ theme }: IProps) => {
  return (
    <div className="card theme-card shadow-sm" key={theme.id}>
      <img
        src={theme.featuredImageUrl}
        className="card-img-top shadow-sm"
        alt={theme.name}
      />
      <div className="card-body">
        <a
          href={themeVisitUrl(theme.id)}
          className="text-dark"
          target="_blank"
          rel="_nofollow"
        >
          <h5 className="card-title">{theme.name}</h5>
        </a>
      </div>
    </div>
  );
};
