import { createBrowserClient } from "@supabase/ssr";
import type {
  Personaggio,
  SessioneGioco,
  NodoStoria,
  Oggetto,
} from "@/types/game";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: { id: string; username: string; created_at: string };
        Insert: { id: string; username: string };
        Update: { username?: string };
      };
      characters: {
        Row: Omit<Personaggio, "equipaggiamento" | "inventario"> & {
          attacco: number; difesa: number;
          punti_vita_max: number; punti_vita_correnti: number;
          oro: number; created_at: string; updated_at: string;
        };
        Insert: Omit<Personaggio, "id" | "equipaggiamento" | "inventario">;
        Update: Partial<Personaggio>;
      };
      items: {
        Row: Omit<Oggetto, "bonus"> & {
          bonus_attacco: number; bonus_difesa: number;
          bonus_punti_vita_max: number; set_id: string | null;
          created_at: string;
        };
        Insert: Omit<Oggetto, "bonus"> & {
          bonus_attacco?: number; bonus_difesa?: number; bonus_punti_vita_max?: number;
        };
        Update: Partial<Oggetto>;
      };
      user_items: {
        Row: {
          id: string; character_id: string; item_id: string;
          equipaggiato_in_slot: string | null; acquisito_at: string;
        };
        Insert: Omit<{ id: string; character_id: string; item_id: string; equipaggiato_in_slot?: string | null }, "id">;
        Update: { equipaggiato_in_slot?: string | null };
      };
      story_nodes: {
        Row: Omit<NodoStoria, "scelte"> & { created_at: string };
        Insert: Omit<NodoStoria, "scelte">;
        Update: Partial<Omit<NodoStoria, "scelte">>;
      };
      game_sessions: {
        Row: SessioneGioco;
        Insert: Omit<SessioneGioco, "id" | "created_at" | "updated_at">;
        Update: Partial<SessioneGioco>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
