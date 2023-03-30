import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly Donations?: (Donations | null)[] | null;
  readonly Fundraisers?: (Donations | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly Donations: AsyncCollection<Donations>;
  readonly Fundraisers: AsyncCollection<Donations>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerDonations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Donations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Donation?: number | null;
  readonly fundraisersID: string;
  readonly userID: string;
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
  readonly fundraisersID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donations = LazyLoading extends LazyLoadingDisabled ? EagerDonations : LazyDonations

export declare const Donations: (new (init: ModelInit<Donations>) => Donations) & {
  copyOf(source: Donations, mutator: (draft: MutableModel<Donations>) => MutableModel<Donations> | void): Donations;
}

type EagerFundraisers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fundraisers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Goal: number;
  readonly EndDate: string;
  readonly User: string;
  readonly Donations?: (Donations | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFundraisers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fundraisers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description: string;
  readonly Goal: number;
  readonly EndDate: string;
  readonly User: string;
  readonly Donations: AsyncCollection<Donations>;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fundraisers = LazyLoading extends LazyLoadingDisabled ? EagerFundraisers : LazyFundraisers

export declare const Fundraisers: (new (init: ModelInit<Fundraisers>) => Fundraisers) & {
  copyOf(source: Fundraisers, mutator: (draft: MutableModel<Fundraisers>) => MutableModel<Fundraisers> | void): Fundraisers;
}