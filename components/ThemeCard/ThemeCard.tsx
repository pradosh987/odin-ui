import React from "react";

interface IProps {
  theme: any;
}
export const ThemeCard = ({ theme }: IProps) => {
  return (
    <div className="card theme-card shadow-sm">
      <img
        src={theme.featuredImageUrl}
        className="card-img-top shadow-sm"
        alt={theme.name}
      />
      <div className="card-body">
        <a href="#" className="text-dark" target="_blank" rel="_nofollow">
          <h5 className="card-title">{theme.name}</h5>
        </a>
      </div>
    </div>
  );
};
