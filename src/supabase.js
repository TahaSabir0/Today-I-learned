import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sgxozbtgpxlhrctsowmf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNneG96YnRncHhsaHJjdHNvd21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MzkzNDQsImV4cCI6MjA3MDExNTM0NH0.SFCH6GKszy2h6Obkf8Hoh87Z_AC2byZ0ZP3NOHkD_Ac";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
