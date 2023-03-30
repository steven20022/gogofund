// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Donations } = initSchema(schema);

export {
  Donations
};