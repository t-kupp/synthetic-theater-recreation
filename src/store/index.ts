import { create } from "zustand";

interface StoreState {
  showDragCursor: boolean;
  setShowDragCursor: (showDragCursor: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  showDragCursor: false,
  setShowDragCursor: (showDragCursor: boolean) => set({ showDragCursor }),
}));
