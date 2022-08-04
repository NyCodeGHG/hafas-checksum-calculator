import { createHash } from "crypto";

export function calculateChecksum(input: string, salt: Buffer): string {
  return createHash('md5')
    .update(Buffer.concat([Buffer.from(input, 'utf-8'), salt])).digest('hex');
}

export function calculateMicMacChecksum(input: string, salt: Buffer): [string, string] {
  const mic = createHash('md5').update(Buffer.from(input, 'utf-8')).digest();
  const micAsHex = Buffer.from(mic.toString('hex'), 'utf8');
  const mac = createHash('md5').update(Buffer.concat([micAsHex, salt]));
  return [mic.toString('hex'), mac.digest('hex')];
}
