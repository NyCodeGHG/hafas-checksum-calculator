import { Card, Title } from '@mantine/core';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { calculateChecksum, calculateMicMacChecksum } from '../checksum';
import { Provider } from '../providers';

const ChecksumCalculator: FC<{ provider: Provider, input: string, className?: string }> = ({ provider, input, className }) => {
  const checksum = useChecksum(provider, input);
  return <Card className={`flex flex-col justify-between min-w-fit${className ? ' ' + className : ''}`}>
    <div className="flex justify-between">
      <>
        <Title className="text-sm">{provider.name}</Title>
        {provider.icon}
      </>
    </div>
    <div className="flex gap-5">
      <Checksum>{checksum}</Checksum>
    </div>
    <Link href={provider.url}>
      <a className="no-underline text-gray-500">{provider.url}</a>
    </Link>
  </Card>;
};

const Checksum: FC<{ children: string | [string, string] }> = ({ children }) => {
  if (typeof children === 'string') {
    return <div>
      <pre>{children}</pre>
    </div>;
  } else {
    return <div>
      <pre>Mic: {children[0]}</pre>
      <pre>Mac: {children[1]}</pre>
    </div>;
  }
};

function useChecksum(provider: Provider, input: string): string | [string, string] {
  return useMemo(() => {
    if (provider.useMicMac) {
      return calculateMicMacChecksum(input, provider.salt);
    } else {
      return calculateChecksum(input, provider.salt);
    }
  }, [provider.salt, input, provider.useMicMac]);
}

export default ChecksumCalculator;
