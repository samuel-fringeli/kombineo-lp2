import { create } from "zustand";

interface BillingState {
    isMonthly: boolean;
    toggleBilling: () => void;
}

export const useBillingStore = create<BillingState>((set) => ({
    isMonthly: true,
    toggleBilling: () => set((state) => ({ isMonthly: !state.isMonthly })),
}));
