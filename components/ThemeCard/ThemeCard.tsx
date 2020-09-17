import React from "react";
import { themeVisitUrl } from "../../services/api_service";
import { Theme } from "../../interfaces/Theme.interface";

interface IProps {
  theme: Theme;
}

const iconsTag = ({ icons }: Theme) =>
  icons ? <small>{icons} Icons</small> : "";

const wallpapersTag = ({ wallpapers }: Theme) => (
  <small>{wallpapers ? `${wallpapers} Wallpapers` : ""}</small>
);

const thumbUrl = ({ images }: Theme) => {
  const featuredIndex = (images || []).findIndex((i) => i.featured);
  const image = featuredIndex > -1 ? images[featuredIndex] : images[0];
  return image?.thumb;
};

export const ThemeCard = ({ theme }: IProps) => {
  const visitUrl = themeVisitUrl(theme);

  return (
    <div className="card theme-card shadow-sm" key={theme.id}>
      <a href={visitUrl} target="_blank" rel="_nofollow">
        {" "}
        <img
          src={thumbUrl(theme)}
          className="card-img-top shadow-sm"
          alt={theme.name}
        />
      </a>
      <div className="card-body">
        <a
          href={visitUrl}
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
