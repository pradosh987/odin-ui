import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { debounce } from "lodash";
import { TypeHeadItem } from "../TypeheadItem/TypeheadItem";
import { CancelTokenSource } from "axios";
import { suggest } from "../../services/api_service";

interface IProps {
  onSubmit: (query: string) => void;
}

export const SearchSection = ({ onSubmit }: IProps) => {
  const inputRef = useRef(undefined);
  const [typeheadToken, setTypeheadToken]: [
    CancelTokenSource | undefined,
    React.Dispatch<undefined | CancelTokenSource>
  ] = useState();

  const onFormSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit(inputRef.current.value);
    setSuggestions([]);
  }, []);

  const onChange = useCallback(
    debounce(() => {
      const query = inputRef.current.value;
      console.log(query);
      typeheadToken?.cancel("MULTIPLE_REQUESTS");

      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      const [promise, token] = suggest(query);
      setTypeheadToken(token);
      promise.then(setSuggestions).catch(console.warn);
    }, 300),
    [typeheadToken]
  );

  const [suggestions, setSuggestions] = useState([]);
  const onSuggestionSelect = useCallback((value) => {
    inputRef.current.value = value;
    onSubmit(value);
    setSuggestions([]);
  }, []);

  const typeheadListRef = useRef(undefined);
  useEffect(() => {
    const eventHandler = (e: any) => {
      if (!typeheadListRef?.current?.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", eventHandler);
    return () => document.removeEventListener("mousedown", eventHandler);
  }, [typeheadListRef]);

  return (
    <section className="search-section text-center my-5 w-100">
      <h1 className="display-3">
        Expo<span className="text-primary">Themes</span>
      </h1>
      <p className="lead font-weight-normal">
        Search Engine for Windows Themes
      </p>

      <div className="row justify-content-center my-5">
        <form className="col-md-6" onSubmit={onFormSubmit}>
          <input
            type="text"
            className="w-100 shadow"
            autoFocus={true}
            ref={inputRef}
            onChange={(e) => {
              e.persist();
              onChange();
            }}
          />
        </form>
      </div>
      {suggestions.length > 0 && (
        <div className="row mt-n5 d-flex justify-content-center position-relative">
          <div className="col-md-6">
            <ul className="suggestions w-100 list-group" ref={typeheadListRef}>
              {suggestions.map((s) => (
                <TypeHeadItem
                  item={s}
                  key={s.value}
                  onClick={onSuggestionSelect}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
