import { useCallback, useState } from 'react';

export default (initialValue = null, condition) => {
  const [file, setFile] = useState(initialValue);
  const [error, setError] = useState(false);
  const handler = useCallback(
    (e) => {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
      if (!condition(e.target.files[0])) {
        setError(true);
      }
      if (condition(e.target.files[0])) {
        setError(false);
      }
    },
    [condition],
  );
  return [file, handler, error];
};
