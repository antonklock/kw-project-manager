import { createClient } from '@supabase/supabase-js'

const projectUrl = "https://yyqahamdtqrwhkidlxrj.supabase.co";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5cWFoYW1kdHFyd2hraWRseHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxODk2NTEsImV4cCI6MTk4MTc2NTY1MX0.6pb9GtD5E1CbI-l0IXBccEnOZyytU-O0W2bUJbGmc3c";

const supabase = createClient(projectUrl, apiKey);

export default supabase;