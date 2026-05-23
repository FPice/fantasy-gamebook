import { createBrowserClient } from "@supabase/ssr";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { CookieOptions } from "@supabase/ssr";
import type {
  Personaggio,
  SessioneGioco,
  NodoStoria,
  Oggetto,
} from "@/types/game";

// ─── Database Schema Types ────────────────────────────────────────────────────
// Allineato con /lib/supabase-schema.sql

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          nome: string;
          cognome: string;
          nickname_battaglia: string | null;
          consenso_gdpr: boolean;
          consenso_gdpr_at: string | null;
          marketing_opt_in: boolean;
          marketing_opt_in_at: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          username: string;
          nome?: string;
          cognome?: string;
          nickname_battaglia?: string | null;
          consenso_gdpr?: boolean;
          consenso_gdpr_at?: string | null;
          marketing_opt_in?: boolean;
          marketing_opt_in_at?: string | null;
        };
        Update: {
          username?: string;
          nome?: string;
          cognome?: string;
          nickname_battaglia?: string | null;
          consenso_gdpr?: boolean;
          consenso_gdpr_at?: string | null;
          marketing_opt_in?: boolean;
          marketing_opt_in_at?: string | null;
        };
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

// ─── Client-side Supabase (browser) ──────────────────────────────────────────

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// ─── Server-side Supabase (RSC / Route Handlers) ─────────────────────────────

export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options: CookieOptions }>) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );
}

// ─── Server-side Supabase (admin / service role) ─────────────────────────────

export async function createAdminSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options: CookieOptions }>) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
      auth: { persistSession: false },
    }
  );
}
