import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerFundraiser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fundraiser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly endDate: string;
  readonly fundGoal: number;
  readonly Donations?: (Donation | null)[] | null;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFundraiser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fundraiser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly endDate: string;
  readonly fundGoal: number;
  readonly Donations: AsyncCollection<Donation>;
  readonly sub: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fundraiser = LazyLoading extends LazyLoadingDisabled ? EagerFundraiser : LazyFundraiser

export declare const Fundraiser: (new (init: ModelInit<Fundraiser>) => Fundraiser) & {
  copyOf(source: Fundraiser, mutator: (draft: MutableModel<Fundraiser>) => MutableModel<Fundraiser> | void): Fundraiser;
}

type EagerDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donationAmount: number;
  readonly donatorName: string;
  readonly sub: string;
  readonly fundraiserID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly donationAmount: number;
  readonly donatorName: string;
  readonly sub: string;
  readonly fundraiserID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donation = LazyLoading extends LazyLoadingDisabled ? EagerDonation : LazyDonation

export declare const Donation: (new (init: ModelInit<Donation>) => Donation) & {
  copyOf(source: Donation, mutator: (draft: MutableModel<Donation>) => MutableModel<Donation> | void): Donation;
}