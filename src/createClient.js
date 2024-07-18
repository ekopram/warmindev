import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://drkktokcafsrjqgruyff.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRya2t0b2tjYWZzcmpxZ3J1eWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNTM1NjksImV4cCI6MjAzNjYyOTU2OX0.yKxCDmGPYLTGTvj5kEWlr4WQecpz3ZN1V0yaQp4_5YM"
);
