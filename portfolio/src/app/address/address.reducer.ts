import { Action, createReducer, on, State } from '@ngrx/store';
import * as AddressActions from './address.actions';
import { IAddress } from '../models/iaddress';

export interface AddressState {
    address: IAddress;
}

export const initialState: AddressState = {
    address: null
};

const addressReducer = createReducer(
    initialState, 
    on(AddressActions.update, state => (
                                       { ...state, firstLine: state.address.firstLine,
                                        secondLine: state.address.secondLine,
                                        postCode: state.address.postCode,
                                        country: state.address.country,
                                        town: state.address.town})
                                        )
                                         );



export function reducer(state: AddressState | undefined, action: Action) {
            return addressReducer(state, action);
                                          }
