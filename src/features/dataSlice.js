import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    boards: [],
    isLoading: false,
    error: ''
}

export const fetchBoards = createAsyncThunk(
    'boards/fetchBoards',
    async () => {
      try {
        const response = await fetch('http://localhost:9000/boards');
        if (!response.ok) {
          throw new Error('Fetch failed, status: ' + response.status);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
      } catch (error) {
        console.error('Error fetching boards:', error);
        throw error; // Rethrow the error to be caught by the rejected action handler
      }
    }
);


const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addBoard: (state, action) => {
            state.boards.push({
              name: action.payload.name,
              columns: action.payload.columns
            })
        },
        deleteBoard: (state, action) => {
            const updatedBoards = state.boards.filter(board => board.name !== action.payload.name);
            return { ...state, boards: updatedBoards };
        },
        updateBoard: (state, action) => {
            const { updatedBoard, activeBoard } = action.payload;
      
            const updatedBoards = state.boards.map((board) =>
              board.name === activeBoard.name ? updatedBoard : board
            );
      
            state.boards = updatedBoards;
        },
    },
    extraReducers(builder) {
      builder
      .addCase(fetchBoards.pending, (state) => {
          state.isLoading = true
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = ''
        state.boards = action.payload
      })
      .addCase(fetchBoards.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error ? action.error.message : 'Fetch failed'
      })
    }

})

export const { addBoard, deleteBoard, updateBoard } = dataSlice.actions

export default dataSlice.reducer