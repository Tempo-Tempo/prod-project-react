import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

// type ActionCreaterType<Return, Arg, RejectedValue> = (arg: Arg) =>
// AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue } >

// export class AsyncThunkTest<Return, Arg, RejectedValue> {
//     dispatch: jest.MockedFn<any>;

//     getState: () => StateSchema;

//     actionCreator: ActionCreaterType<Return, Arg, RejectedValue>;

//     constructor(actionCreator: ActionCreaterType<Return, Arg, RejectedValue>) {
//         this.actionCreator = actionCreator;
//         this.dispatch = jest.fn();
//         this.getState = jest.fn();
//     }

//     async callThunk(arg: Arg) {
//         const action = this.actionCreator(arg);
//         const reuslt = action(this.dispatch, this.getState, undefined);
//         return reuslt;
//     }
// }

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) =>
AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue } >

export class AsyncThunkTest<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = action(this.dispatch, this.getState, undefined);
        return result;
    }
}