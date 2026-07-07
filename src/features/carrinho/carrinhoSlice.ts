import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Produto } from "../../types/Produto";
import type { ItemCarrinho } from "../../types/Carrinho";

export const initialState: ItemCarrinho[] = [];

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<Produto>) {
      const produtoExistente = state.find((produto) => {
        return produto.id === action.payload.id;
      });
      if (!produtoExistente) {
        state.push({
          ...action.payload,
          quantidade: 1,
        });
      } else {
        produtoExistente.quantidade++;
      }
    },
    minusOne(state, action:PayloadAction<ItemCarrinho>) {
        const produtoExistente = state.find((item) => {
            return item.id === action.payload.id
        })
        if (produtoExistente) {
            if (produtoExistente.quantidade <= 1) {
                return state.filter((item) => item.id !== action.payload.id)
            }
            produtoExistente.quantidade -= 1
        }
      }
  },
});

export const { addCart, minusOne } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
