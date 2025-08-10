import { create } from "zustand";

const useStore = create((set) => ({
  showDragCursor: false,
  showDragText: false,
  setShowDragCursor: (showDragCursor: boolean) => set({ showDragCursor }),
  setShowDragText: (showDragText: boolean) => set({ showDragText }),
}));
