import { useCallback, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useStore } from "store/use-store";
import { debounce } from "utils/debounce";

export function Filters() {
  const sortType = useStore((store) => store.sortType);
  const setSortType = useStore((store) => store.setSortType);
  const setDebouncedSearchValue = useStore((store) => store.setSearchValue);
  const [searchValue, setSearchValue] = useState("");

  const handleSetDebouncedSearchValue = useCallback(
    debounce((value: string) => setDebouncedSearchValue(value)),
    []
  );

  const handleSetSearchValue = (value: string) => {
    handleSetDebouncedSearchValue(value);
    setSearchValue(value);
  };

  return (
    <>
      <Col xs={10}>
        <Form.Control placeholder="Disabled input" value={searchValue} onChange={(event) => handleSetSearchValue(event.target.value)} />
      </Col>
      <Col>
        <Form.Select value={sortType} onChange={(event) => setSortType(event.target.value as "asc" | "desc")} aria-label="Default select example">
          <option value="asc">По убыванию цены</option>
          <option value="desc">По возрастанию цены</option>
        </Form.Select>
      </Col>
    </>
  );
}
