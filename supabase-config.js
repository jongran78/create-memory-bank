import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://fstijdrbzwtfeshtbriv.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_yF2Wnq5aSbyJxlcehIIOdQ_C2ruRkuq';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
