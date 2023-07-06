import Button from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

export const BugButton = () => {
  const [error, setError] = useState(false);

  const throwErrorHandler = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={throwErrorHandler}
      // eslint-disable-next-line i18next/no-literal-string
    >
      THROW ERROR!
    </Button>
  );
};

export default BugButton;
