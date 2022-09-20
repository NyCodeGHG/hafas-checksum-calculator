import { NextApiRequest, NextApiResponse } from 'next';
import { providers } from '../../../providers';
import { calculateChecksum, calculateMicMacChecksum } from '../../../checksum';
import getRawBody from 'raw-body';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { provider } = req.query;
  if (typeof provider !== 'string') {
    return res.status(400).json({ error: 'invalid provider' });
  }
  const foundProvider = providers.find(p => p.id === provider);

  if (!foundProvider) {
    res.status(400).json({ error: `provider ${provider} was not found.` });
    return;
  }

  const body = await getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
  });
  console.log(body);

  if (foundProvider.useMicMac) {
    const [mic, mac] = calculateMicMacChecksum(body, foundProvider.salt);
    res.status(200).json({ mic, mac });
  } else {
    const checksum = calculateChecksum(body, foundProvider.salt);
    res.status(200).json({ checksum });
  }
}
