import { createHash } from 'crypto';

export function calculateChecksum(input: string | Buffer, salt: Buffer): string {
  if (typeof input === 'string') {
    input = Buffer.from(input, 'utf-8');
  }
  return createHash('md5')
    .update(Buffer.concat([input, salt])).digest('hex');
}

export function calculateMicMacChecksum(input: string | Buffer, salt: Buffer): [string, string] {
  if (typeof input === 'string') {
    input = Buffer.from(input, 'utf-8');
  }
  const mic = createHash('md5').update(input).digest();
  const micAsHex = Buffer.from(mic.toString('hex'), 'utf8');
  const mac = createHash('md5').update(Buffer.concat([micAsHex, salt]));
  return [mic.toString('hex'), mac.digest('hex')];
}
