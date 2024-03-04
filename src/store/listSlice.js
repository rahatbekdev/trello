import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload);
      console.log(state.list);
    },
    addCard: (state, action) => {
      console.log(action, state.list);
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.prototype.hasOwnProperty.call(item, "children")) {
            item.children.push(action.payload);
            action.payload;
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
  },
});

export const { addList, addCard } = listSlice.actions;
export default listSlice.reducer;
