import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yseozmctkahaaxecwmyn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzZW96bWN0a2FoYWF4ZWN3bXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NTk2OTEsImV4cCI6MjA1NTIzNTY5MX0.pOF3tUTP_fN3JO-6CJ3kr1eke70CGGBs-9Uq_y2h-SQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
