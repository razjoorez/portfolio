import { createAction , props } from '@ngrx/store';
import { IAddress } from '../../models/iaddress';

export const update = createAction('[Address Component] Update', props<{address: IAddress}>() ) ;
