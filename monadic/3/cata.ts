import { constant } from 'fp-ts/lib/function';
import { Functor, Functor1, Functor2, Functor3 } from 'fp-ts/lib/Functor';
import { Type, Type2, Type3, URIS, URIS2, URIS3 } from 'fp-ts/lib/HKT';

import { match } from './match';

import { Algebra, Fix, unfix } from './Fix';
import { functorNat, Nat, NatF, succ, zero } from './Nat';