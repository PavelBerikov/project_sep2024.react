import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";
import {IUser} from "../../../interfaces/userInterface.ts";
import {loadSearchUser, loadUser, loadUsers} from "../../../services/usersService.ts";
import {IUsersResponse} from "../../../interfaces/usersResponseInterface.ts";

type initialStateType = {
    users: IUser[],
    user: IUser | null,
    response: IUsersResponse | null

}
const initialState:initialStateType = {
    users: [],
    user: null,
    response: null
}

const getUsers = createAsyncThunk(
    'usersSlice/getUsers',
    async ({ limit, skip }: { limit: number; skip: number }, thunkAPI) => {
        try {
            const response = await loadUsers(limit, skip);
            return thunkAPI.fulfillWithValue(response)
        }catch (e){
            console.log(e)
            return thunkAPI.rejectWithValue('some error')
        }
    }
);
const getUser = createAsyncThunk(
    'usersSlice/getUser',
    async (id:string, thunkAPI) => {
        try {
            const user = await loadUser(id);
            return thunkAPI.fulfillWithValue(user)
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
);
const getUserBySearch = createAsyncThunk(
    'usersSlice/getUserBySearch',
    async (word:string, thunkAPI) => {
        try {
            const users = await loadSearchUser(word);
            return thunkAPI.fulfillWithValue(users)
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('some error')
        }
    }
);
export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: initialState,
    reducers:{
        resetUser: (state) => {
            state.user = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            console.log(action.payload)
            state.users = action.payload.users
            state.response = action.payload
        })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(getUserBySearch.fulfilled, (state, action) => {
                state.users = action.payload.users
            })

    }
});

export const usersSliceActions = {
    ...usersSlice.actions, getUsers, getUser, getUserBySearch
}