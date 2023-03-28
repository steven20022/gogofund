// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Donations, Fundraisers } = initSchema(schema);

export {
  User,
  Donations,
  Fundraisers
};