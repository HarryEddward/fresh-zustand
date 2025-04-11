// src/hooks/useClientStore.ts (en tu librería)
import { useState, useEffect } from "preact/hooks";
import type { StoreApi, UseBoundStore } from "zustand";

/**
 * Hook para usar stores de Zustand en Fresh, seguro para SSR y CSR.
 * En SSR, devuelve el estado inicial del store sin hooks.
 * En CSR, sincroniza el estado con hooks de Preact.
 *
 * @template T - Tipo del estado del store.
 * @param store - Store de Zustand creado con `create`.
 * @returns Estado actual del store.
 */
export function useClientStore<T>(store: UseBoundStore<StoreApi<T>>): T {
  const initialState = store.getState();
  const isClient = typeof window !== "undefined";

  if (!isClient) {
    return initialState; // SSR: solo estado inicial
  }

  const [state, setState] = useState<T>(initialState);
  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => setState(newState));
    setState(store.getState()); // Sincroniza tras hidratación
    return () => unsubscribe();
  }, [store]);

  return state;
}