import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
interface IProps {
  onSubmit: (query: string) => void;
}

export const SearchSection = ({ onSubmit }: IProps) => {
  const [query, setQuery] = useState("");
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(query);
  };

  const onChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setQuery(query);
    }, 300),
    []
  );
  return (
    <section className="search-section text-center my-5 w-100">
      <h1 className="display-3">
        Expo<span className="text-primary">Themes</span>
      </h1>
      <p className="lead font-weight-normal">
        Search Engine for Windows Themes
      </p>

      <div className="row justify-content-center my-5">
        <form
          className="col-md-6"
          // @ts-ignore

          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            className="w-100 shadow"
            onChange={(e) => {
              e.persist();
              onChange(e);
            }}
          />
        </form>
      </div>
    </section>
  );
};
