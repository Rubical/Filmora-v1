import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jdcbrbtfhykwfqsuukms.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkY2JyYnRmaHlrd2Zxc3V1a21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA3Njc0NTksImV4cCI6MTk5NjM0MzQ1OX0.hLCJSbHWwKz8qAMBSC7qz3bnaZ1mg5Bd09hph17HhV8"
);
