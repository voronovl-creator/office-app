"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Role } from "@/lib/nav";

export type AuthState = {
  loading: boolean;
  email: string | null;
  role: Role | null;
};

export function useRole(): AuthState {
  const [state, setState] = useState<AuthState>({
    loading: true,
    email: null,
    role: null,
  });

  useEffect(() => {
    const supabase = createClient();
    let cancelled = false;

    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        if (!cancelled) {
          setState({ loading: false, email: null, role: null });
        }
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (!cancelled) {
        setState({
          loading: false,
          email: user.email ?? null,
          role: (profile?.role as Role) ?? "guest",
        });
      }
    }

    load();

    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      load();
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}