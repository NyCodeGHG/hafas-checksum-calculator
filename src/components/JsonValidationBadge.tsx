import { Badge } from '@mantine/core';
import { FC } from 'react';

const JsonValidationBadge: FC<{ isValid: boolean }> = ({ isValid }) => {
  const text = isValid ? 'Valid JSON' : 'Invalid JSON';
  const color = isValid ? 'green' : 'red';
  return <div className="w-28 flex justify-center">
    <Badge color={color}>{text}</Badge>
  </div>;
};

export default JsonValidationBadge;
