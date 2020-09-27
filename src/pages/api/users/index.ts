import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '@utils/sample-data';
import sleep from '@utils/sleep';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data');
    }

    await sleep(1000);
    res.status(200).json(sampleUserData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
