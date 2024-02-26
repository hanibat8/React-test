import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getData } from '../../service';

const initialState={
    users:[],
    loading:false,
    error:{}
}

export const fetchUser=createAsyncThunk(
    'users/fetchUsers',
    async (endpoint)=>{
        const res= await getData(endpoint);
        return res.data
    }
)

const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            if(Array.isArray(action.payload))
                state.users=action.payload
            else
                state.users=[action.payload]

                state.loading=false
                state.error={}
        })
        .addCase(fetchUser.pending,(state,action)=>{
            state.users=[]
            state.loading=true;
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.payload
        })
    }
})

export const {getAllUsers,getSingleUser}=usersSlice.actions
export const selectAllUsers=(state)=>state.users
export default usersSlice.reducer