import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
  isLoading: true,
  error: ''
}

export const fetchBoards = createAsyncThunk(
  'boards/fetchBoards',
  async () => {
    const response = await fetch('http://localhost:9000/boards')
    if (!response.ok) {
      return Promise.reject('Fetch failed, status: ' + response.status)
    }
    const data = await response.json()
    return data
  }
)

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push({
        name: action.payload.name,
        columns: action.payload.columns
      })
    },
    updateBoard: (state, action) => {
        const { updatedBoard, activeBoard } = action.payload;
  
        const updatedBoards = state.boards.map((board) =>
          board.name === activeBoard.name ? updatedBoard : board
        );
  
        state.boards = updatedBoards;
    },
    deleteBoard: (state, action) => {
      const updatedBoards = state.boards.filter(board => board.name !== action.payload.name);
      return { ...state, boards: updatedBoards };
    },
    addColumn: (state, action) => {
      const { updatedBoard, activeBoard } = action.payload

      const updatedBoards = state.boards.map((board) => 
        board.name === activeBoard.name ? updatedBoard : board
      )

      state.boardsArray = updatedBoards;
    },
    switchColumn: (state, action) => {
        const updatedBoard = action.payload;

        const boardIndex = state.boards.findIndex(
          (board) => board.name === updatedBoard.name
        );

        if (boardIndex !== -1) {
          state.boards[boardIndex] = updatedBoard;
        }
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchBoards.pending, (state) => {
        state.isLoading = true
    })
    .addCase(fetchBoards.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = ''
      state.boards = action.payload.boards
    })
    .addCase(fetchBoards.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error ? action.error.message : 'Fetch failed'
    })
  }
})

export const { addBoard, deleteBoard, updateBoard, addColumn, switchColumn } = boardsSlice.actions
export default boardsSlice.reducer