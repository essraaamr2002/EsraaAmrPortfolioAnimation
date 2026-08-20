import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SubmittedProject = {
  id: string;
  title: string;
  description: string | null;
  link: string | null;
  image_url: string | null;
  submitter_name: string | null;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};
