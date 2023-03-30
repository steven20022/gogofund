import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDonations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Donation?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Donation?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donations = LazyLoading extends LazyLoadingDisabled ? EagerDonations : LazyDonations

export declare const Donations: (new (init: ModelInit<Donations>) => Donations) & {
  copyOf(source: Donations, mutator: (draft: MutableModel<Donations>) => MutableModel<Donations> | void): Donations;
}