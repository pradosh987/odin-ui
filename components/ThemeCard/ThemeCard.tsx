import React from "react";
import { themeVisitUrl } from "../../services/api_service";
import { Theme } from "../../interfaces/Theme.interface";

interface IProps {
  theme: Theme;
}

const iconsTag = ({ icons }: Theme) =>
  icons ? <small>{icons} Icons</small> : "";

const wallpapersTag = ({ wallpapers }: Theme) => (
  <small>{wallpapers ? `${wallpapers} Wallpapers` : "N/A"}</small>
);

export const ThemeCard = ({ theme }: IProps) => {
  return (
    <div className="card theme-card shadow-sm" key={theme.id}>
      <img
        src={theme.images[0]?.thumb}
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
      <div className="card-footer d-flex justify-content-between">
        <small>{theme.website}</small>
        {iconsTag(theme)}
        {wallpapersTag(theme)}
      </div>
    </div>
  );
};
