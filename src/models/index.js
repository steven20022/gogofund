// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Fundraiser, Donation } = initSchema(schema);

export {
  Fundraiser,
  Donation
};