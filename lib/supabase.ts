import { createBrowserClient } from "@supabase/ssr";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { CookieOptions } from "@supabase/ssr";
import type {
  Character,
  GameSession,
  GameSection,
  UserProfile,
  Item,
  Enemy,
} from "@/types/game";

// ─── Database Schema Types ────────────────────────────────────────────────────

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: UserProfile;
        Insert: Omit<UserProfile, "createdAt"> & { createdAt?: string };
        Update: Partial<UserProfile>;
      };
      characters: {
        Row: Character;
        Insert: Omit<Character, "id" | "createdAt" | "updatedAt">;
        Update: Partial<Character>;
      };
      game_sessions: {
        Row: GameSession;
        Insert: Omit<GameSession, "id" | "createdAt" | "updatedAt">;
        Update: Partial<GameSession>;
      };
      game_sections: {
        Row: GameSection;
        Insert: GameSection;
        Update: Partial<GameSection>;
      };
      items: {
        Row: Item;
        Insert: Item;
        Update: Partial<Item>;
      };
      enemies: {
        Row: Enemy;
        Insert: Enemy;
        Update: Partial<Enemy>;
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
