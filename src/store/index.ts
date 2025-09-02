import { create } from "zustand";

interface StoreState {
  showCustomCursor: boolean;
  setShowCustomCursor: (showCustomCursor: boolean) => void;

  showDragCursor: boolean;
  setShowDragCursor: (showDragCursor: boolean) => void;

  loadingComplete: boolean;
  setLoadingComplete: (loadingComplete: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  showCustomCursor: true,
  setShowCustomCursor: (showCustomCursor: boolean) => set({ showCustomCursor }),

  showDragCursor: false,
  setShowDragCursor: (showDragCursor: boolean) => set({ showDragCursor }),

  loadingComplete: false,
  setLoadingComplete: (loadingComplete: boolean) => set({ loadingComplete }),
}));
