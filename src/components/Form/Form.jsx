import { useSearchParams } from 'react-router-dom';
import { FormSearch, Input, Button } from './Form.styled';

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = event => {
    event.preventDefault();
    const search = event.target.search.value.trim().toLowerCase();
    if (!search) return;
    setSearchParams({ query: search });
  };

  const search = searchParams.get('query') ?? '';

  return (
    <FormSearch onSubmit={handleSubmit}>
      <label>
        <Input
          type="text"
          name="search"
          placeholder="Search movies"
          defaultValue={search}
        />
      </label>
      <Button type="submit">Search</Button>
    </FormSearch>
  );
};

export default Form;
