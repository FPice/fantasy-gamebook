-- ═══════════════════════════════════════════════════════════════════════════
-- FANTASY GAMEBOOK — Schema Supabase (PostgreSQL)
-- ═══════════════════════════════════════════════════════════════════════════

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── Funzioni di utilità ─────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ─── Profiles ────────────────────────────────────────────────────────────────
-- Estende auth.users di Supabase

CREATE TABLE profiles (
  id         UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username   TEXT        UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Utenti leggono il proprio profilo"
  ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Utenti aggiornano il proprio profilo"
  ON profiles FOR UPDATE USING (auth.uid() = id);

-- Crea il profilo automaticamente al sign-up
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, username)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ─── Item Sets (Set Leggendari) ───────────────────────────────────────────────

CREATE TABLE item_sets (
  id            TEXT        PRIMARY KEY,
  nome          TEXT        NOT NULL,
  bonus_2_pezzi JSONB       NOT NULL,
  bonus_3_pezzi JSONB       NOT NULL,
  bonus_4_pezzi JSONB       NOT NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE item_sets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tutti leggono i set"
  ON item_sets FOR SELECT USING (true);

-- Seed: 3 Set Leggendari

INSERT INTO item_sets (id, nome, bonus_2_pezzi, bonus_3_pezzi, bonus_4_pezzi) VALUES

('corona_alba_eterna', 'Corona dell''Alba Eterna',
  '{"stats":{"attacco":15,"difesa":10},"descrizione":"+15 attacco, +10 difesa: la luce avvolge il guerriero"}'::jsonb,
  '{"stats":{"punti_vita_max":30},"descrizione":"+30 vita massima, rigenerazione 5 HP per turno","effetto_speciale":{"nome":"Rigenerazione Solare","chiave":"rigenerazione_solare","tipo":"passivo","descrizione":"Rigenera 5 HP alla fine di ogni turno","valore":5}}'::jsonb,
  '{"stats":{},"descrizione":"Torna a 1 HP invece di morire, una volta per battaglia","effetto_speciale":{"nome":"Resurrezione dell''Alba","chiave":"resurrezione_alba","tipo":"trigger","descrizione":"Annulla la morte una volta per scontro","valore":1}}'::jsonb),

('velo_ombre_eterne', 'Velo delle Ombre Eterne',
  '{"stats":{"attacco":20},"descrizione":"+20 attacco, probabilità critico +15%","effetto_speciale":{"nome":"Critico Amplificato","chiave":"critico_amplificato","tipo":"passivo","descrizione":"Aumenta la probabilità di colpo critico del 15%","valore":15}}'::jsonb,
  '{"stats":{},"descrizione":"Schivata automatica ogni 3 turni","effetto_speciale":{"nome":"Passo d''Ombra","chiave":"passo_ombra","tipo":"trigger","descrizione":"Schiva automaticamente un attacco ogni 3 turni","valore":3}}'::jsonb,
  '{"stats":{},"descrizione":"Ruba il 10% dei danni inflitti come HP","effetto_speciale":{"nome":"Furto d''Anima","chiave":"furto_anima","tipo":"passivo","descrizione":"Recupera il 10% di ogni danno inflitto come punti vita","valore":10}}'::jsonb),

('patto_drago_primordiale', 'Patto del Drago Primordiale',
  '{"stats":{"difesa":25},"descrizione":"+25 difesa, resistenza al fuoco 50%","effetto_speciale":{"nome":"Resistenza al Fuoco","chiave":"resistenza_fuoco","tipo":"passivo","descrizione":"Riduce i danni da fuoco del 50%","valore":50}}'::jsonb,
  '{"stats":{},"descrizione":"30% di probabilità di soffio di drago ogni turno","effetto_speciale":{"nome":"Soffio di Drago","chiave":"soffio_drago","tipo":"trigger","descrizione":"30% di probabilità di infliggere danno bonus pari al 50% dell''attacco","valore":30}}'::jsonb,
  '{"stats":{},"descrizione":"Ogni 5 turni attacco triplicato","effetto_speciale":{"nome":"Furia Draconica","chiave":"furia_draconica","tipo":"trigger","descrizione":"Ogni 5 turni l''attacco viene triplicato per quel turno","valore":5}}'::jsonb);

-- ─── Items ────────────────────────────────────────────────────────────────────

CREATE TABLE items (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  nome                TEXT        NOT NULL,
  descrizione         TEXT        NOT NULL DEFAULT '',
  rarità              TEXT        NOT NULL CHECK (rarità IN ('comune','non_comune','raro','leggendario')),
  slot                TEXT        NOT NULL CHECK (slot IN ('arma','testa','corpo','gambe','anello','amuleto')),
  bonus_attacco       INTEGER     NOT NULL DEFAULT 0,
  bonus_difesa        INTEGER     NOT NULL DEFAULT 0,
  bonus_punti_vita_max INTEGER    NOT NULL DEFAULT 0,
  effetto_speciale    JSONB,
  set_id              TEXT        REFERENCES item_sets(id),
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_items_rarità  ON items(rarità);
CREATE INDEX idx_items_slot    ON items(slot);
CREATE INDEX idx_items_set_id  ON items(set_id);

ALTER TABLE items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tutti leggono gli oggetti"
  ON items FOR SELECT USING (true);

-- ── Seed: Set 1 — Corona dell'Alba Eterna ────────────────────────────────────

INSERT INTO items (id, nome, descrizione, rarità, slot, bonus_attacco, bonus_difesa, bonus_punti_vita_max, set_id) VALUES
('a1000000-0000-0000-0000-000000000001',
 'Elmo dell''Alba',
 'Un elmo dorato che irradia la luce dell''alba. Protegge mente e spirito.',
 'leggendario', 'testa', 15, 5, 20, 'corona_alba_eterna'),
('a1000000-0000-0000-0000-000000000002',
 'Corazza del Sole Nascente',
 'Forgiata con i raggi del primo sole, questa corazza è impenetrabile e radiosa.',
 'leggendario', 'corpo', 8, 12, 30, 'corona_alba_eterna'),
('a1000000-0000-0000-0000-000000000003',
 'Gambali dell''Aurora',
 'Tessuti con fili di luce aurora, leggeri come l''alba stessa.',
 'leggendario', 'gambe', 5, 10, 15, 'corona_alba_eterna'),
('a1000000-0000-0000-0000-000000000004',
 'Amuleto della Prima Luce',
 'Cattura la luce del primo istante del giorno, infondendo forza sovrumana.',
 'leggendario', 'amuleto', 10, 8, 25, 'corona_alba_eterna');

-- ── Seed: Set 2 — Velo delle Ombre Eterne ────────────────────────────────────

INSERT INTO items (id, nome, descrizione, rarità, slot, bonus_attacco, bonus_difesa, bonus_punti_vita_max, effetto_speciale, set_id) VALUES
('a2000000-0000-0000-0000-000000000001',
 'Mantello del Vuoto',
 'Tessuto dall''oscurità più profonda: assorbe la luce e silenzia ogni passo.',
 'leggendario', 'corpo', 18, 3, 10,
 NULL, 'velo_ombre_eterne'),
('a2000000-0000-0000-0000-000000000002',
 'Maschera dell''Oscurità',
 'Nasconde l''identità del portatore anche agli spiriti e alle divinità.',
 'leggendario', 'testa', 8, 5, 15,
 NULL, 'velo_ombre_eterne'),
('a2000000-0000-0000-0000-000000000003',
 'Stivali dell''Ombra',
 'Non producono suono. Non lasciano tracce. Non esistono agli occhi dei nemici.',
 'leggendario', 'gambe', 10, 2, 10,
 NULL, 'velo_ombre_eterne'),
('a2000000-0000-0000-0000-000000000004',
 'Anello del Nulla',
 'Un anello di ossidiana pura che pulsa con energia oscura.',
 'leggendario', 'anello', 12, 3, 5,
 '{"nome":"Drenaggio Vitale","chiave":"drenaggio_vitale","tipo":"passivo","descrizione":"Ogni attacco drena 2 HP dal nemico","valore":2}'::jsonb,
 'velo_ombre_eterne');

-- ── Seed: Set 3 — Patto del Drago Primordiale ────────────────────────────────

INSERT INTO items (id, nome, descrizione, rarità, slot, bonus_attacco, bonus_difesa, bonus_punti_vita_max, effetto_speciale, set_id) VALUES
('a3000000-0000-0000-0000-000000000001',
 'Squame del Drago Antico',
 'Armatura ricavata dalle squame di un drago millenario: dura come la roccia primordiale.',
 'leggendario', 'corpo', 5, 20, 40,
 NULL, 'patto_drago_primordiale'),
('a3000000-0000-0000-0000-000000000002',
 'Artiglio del Drago Primordiale',
 'Arma affilata ricavata dall''artiglio di un drago leggendario. Brucia chi la tocca senza permesso.',
 'leggendario', 'arma', 20, 3, 15,
 '{"nome":"Bruciatura","chiave":"bruciatura","tipo":"trigger","descrizione":"20% di probabilità di infliggere 5 danni da fuoco aggiuntivi","valore":5}'::jsonb,
 'patto_drago_primordiale'),
('a3000000-0000-0000-0000-000000000003',
 'Corona Draconica',
 'Forgiata con le corna di un drago. Chi la indossa comanda il rispetto delle bestie.',
 'leggendario', 'testa', 8, 12, 35,
 NULL, 'patto_drago_primordiale'),
('a3000000-0000-0000-0000-000000000004',
 'Amuleto della Fiamma Eterna',
 'Custodisce una fiamma che non si spegne mai, nemmeno sott''acqua o nel vuoto.',
 'leggendario', 'amuleto', 10, 8, 20,
 '{"nome":"Resistenza al Fuoco (oggetto)","chiave":"resistenza_fuoco_item","tipo":"passivo","descrizione":"Riduce i danni da fuoco del 25%","valore":25}'::jsonb,
 'patto_drago_primordiale');

-- ── Seed: Oggetti Rari ────────────────────────────────────────────────────────

INSERT INTO items (id, nome, descrizione, rarità, slot, bonus_attacco, bonus_difesa, bonus_punti_vita_max, effetto_speciale) VALUES
('b1000000-0000-0000-0000-000000000001',
 'Spada del Destino',
 'Forgiata nel fuoco di una stella cadente. Ogni taglio sembra guidato da una forza superiore.',
 'raro', 'arma', 8, 2, 0,
 '{"nome":"Colpo del Destino","chiave":"colpo_destino","tipo":"trigger","descrizione":"5% di probabilità di critico triplo","valore":3}'::jsonb),
('b1000000-0000-0000-0000-000000000002',
 'Elmo del Guardiano',
 'Indossato dai guardiani dell''ultima città, protegge la mente dagli attacchi psichici.',
 'raro', 'testa', 0, 8, 20,
 '{"nome":"Volontà di Ferro","chiave":"volonta_ferro","tipo":"passivo","descrizione":"Immunità agli effetti di stordimento","valore":1}'::jsonb),
('b1000000-0000-0000-0000-000000000003',
 'Anello della Fortuna',
 'Chi lo porta trova sempre la via d''uscita, anche nel labirinto più oscuro.',
 'raro', 'anello', 3, 3, 10,
 '{"nome":"Fortuna del Viandante","chiave":"fortuna_viandante","tipo":"passivo","descrizione":"Aumenta la probabilità di loot raro del 5%","valore":5}'::jsonb);

-- ── Seed: Oggetti Non Comuni ──────────────────────────────────────────────────

INSERT INTO items (id, nome, descrizione, rarità, slot, bonus_attacco, bonus_difesa, bonus_punti_vita_max) VALUES
('c1000000-0000-0000-0000-000000000001', 'Spada del Mercenario',     'Robusta e affidabile, preferita dai mercenari di lungo corso.',      'non_comune', 'arma',    4, 1,  0),
('c1000000-0000-0000-0000-000000000002', 'Corazza dell''Avventuriero','Armatura leggera che bilancia protezione e mobilità.',               'non_comune', 'corpo',   0, 4, 15),
('c1000000-0000-0000-0000-000000000003', 'Stivali del Viandante',    'Calzari resistenti per chi percorre strade senza fine.',              'non_comune', 'gambe',   1, 3,  5),
('c1000000-0000-0000-0000-000000000004', 'Amuleto del Coraggio',     'Un talismano che scaccia la paura e infonde determinazione.',         'non_comune', 'amuleto', 3, 2,  8),
('c1000000-0000-0000-0000-000000000005', 'Elmo dell''Esploratore',   'Leggero e pratico, con visiera ampia per terreni sconosciuti.',       'non_comune', 'testa',   0, 5, 10),
('c1000000-0000-0000-0000-000000000006', 'Anello della Forza',       'Un anello di acciaio temperato che amplifica la potenza dei colpi.',  'non_comune', 'anello',  4, 1,  0);

-- ── Seed: Oggetti Comuni ──────────────────────────────────────────────────────

INSERT INTO items (id, nome, descrizione, rarità, slot, bonus_attacco, bonus_difesa, bonus_punti_vita_max) VALUES
('d1000000-0000-0000-0000-000000000001', 'Daga Arrugginita',   'Vecchia ma ancora tagliente. Meglio di niente.',       'comune', 'arma',    2, 0, 0),
('d1000000-0000-0000-0000-000000000002', 'Armatura di Cuoio',  'Cuoio indurito a mano. Protezione basica ma solida.',  'comune', 'corpo',   0, 2, 5),
('d1000000-0000-0000-0000-000000000003', 'Calzari di Cuoio',   'Semplici calzari in cuoio grezzo.',                    'comune', 'gambe',   0, 1, 3),
('d1000000-0000-0000-0000-000000000004', 'Elmetto di Ferro',   'Grezzo ma efficace contro le frecce di fortuna.',      'comune', 'testa',   0, 2, 4),
('d1000000-0000-0000-0000-000000000005', 'Anello di Rame',     'Un anello di rame inciso con rune semplici.',          'comune', 'anello',  1, 0, 0),
('d1000000-0000-0000-0000-000000000006', 'Amuleto di Legno',   'Intagliato nel legno di quercia da un druido errante.','comune', 'amuleto', 0, 1, 5);

-- ─── Characters ───────────────────────────────────────────────────────────────

CREATE TABLE characters (
  id                   UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id              UUID        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  nome                 TEXT        NOT NULL,
  attacco              INTEGER     NOT NULL DEFAULT 10 CHECK (attacco > 0),
  difesa               INTEGER     NOT NULL DEFAULT 5  CHECK (difesa >= 0),
  punti_vita_max       INTEGER     NOT NULL DEFAULT 100,
  punti_vita_correnti  INTEGER     NOT NULL DEFAULT 100,
  oro                  INTEGER     NOT NULL DEFAULT 50 CHECK (oro >= 0),
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT chk_hp CHECK (punti_vita_correnti >= 0 AND punti_vita_correnti <= punti_vita_max)
);

CREATE INDEX idx_characters_user_id ON characters(user_id);

ALTER TABLE characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Utenti vedono i propri personaggi"
  ON characters FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Utenti creano i propri personaggi"
  ON characters FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Utenti aggiornano i propri personaggi"
  ON characters FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Utenti eliminano i propri personaggi"
  ON characters FOR DELETE USING (auth.uid() = user_id);

CREATE TRIGGER update_characters_updated_at
  BEFORE UPDATE ON characters
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── User Items (Inventario + Equipaggiamento) ────────────────────────────────
-- equipaggiato_in_slot NULL  → oggetto in inventario
-- equipaggiato_in_slot valorizzato → oggetto equipaggiato in quel slot

CREATE TABLE user_items (
  id                    UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  character_id          UUID        NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  item_id               UUID        NOT NULL REFERENCES items(id),
  equipaggiato_in_slot  TEXT        CHECK (equipaggiato_in_slot IN ('arma','testa','corpo','gambe','anello','amuleto')),
  acquisito_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (character_id, equipaggiato_in_slot)
);

CREATE INDEX idx_user_items_character_id ON user_items(character_id);

ALTER TABLE user_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Utenti vedono i propri oggetti"
  ON user_items FOR SELECT
  USING (EXISTS (SELECT 1 FROM characters WHERE id = character_id AND user_id = auth.uid()));
CREATE POLICY "Utenti aggiungono oggetti ai propri personaggi"
  ON user_items FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM characters WHERE id = character_id AND user_id = auth.uid()));
CREATE POLICY "Utenti aggiornano i propri oggetti"
  ON user_items FOR UPDATE
  USING (EXISTS (SELECT 1 FROM characters WHERE id = character_id AND user_id = auth.uid()));
CREATE POLICY "Utenti eliminano i propri oggetti"
  ON user_items FOR DELETE
  USING (EXISTS (SELECT 1 FROM characters WHERE id = character_id AND user_id = auth.uid()));

-- ─── Story Nodes ──────────────────────────────────────────────────────────────

CREATE TABLE story_nodes (
  id               TEXT        PRIMARY KEY,
  testo_it         TEXT        NOT NULL,
  testo_en         TEXT        NOT NULL,
  tipo             TEXT        NOT NULL CHECK (tipo IN ('storia','combattimento','tesoro','morte','vittoria')),
  probabilità_loot TEXT        NOT NULL DEFAULT 'niente'
                               CHECK (probabilità_loot IN ('comune_non_comune','raro_leggendario','niente')),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE story_nodes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tutti leggono i nodi storia"
  ON story_nodes FOR SELECT USING (true);

-- ─── Story Choices ────────────────────────────────────────────────────────────
-- Ogni nodo non-finale ha esattamente 4 scelte (ordine 0–3)

CREATE TABLE story_choices (
  id                   UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  nodo_id              TEXT        NOT NULL REFERENCES story_nodes(id) ON DELETE CASCADE,
  testo_it             TEXT        NOT NULL,
  testo_en             TEXT        NOT NULL,
  nodo_successivo_id   TEXT        NOT NULL REFERENCES story_nodes(id),
  ordine               INTEGER     NOT NULL CHECK (ordine BETWEEN 0 AND 3),
  condizione           TEXT,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (nodo_id, ordine)
);

CREATE INDEX idx_story_choices_nodo_id ON story_choices(nodo_id);

ALTER TABLE story_choices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tutti leggono le scelte"
  ON story_choices FOR SELECT USING (true);

-- ─── Game Sessions ────────────────────────────────────────────────────────────

CREATE TABLE game_sessions (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID        NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  character_id      UUID        NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  nodo_corrente_id  TEXT        NOT NULL REFERENCES story_nodes(id),
  completata        BOOLEAN     NOT NULL DEFAULT FALSE,
  vittoria          BOOLEAN,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_game_sessions_user_id      ON game_sessions(user_id);
CREATE INDEX idx_game_sessions_character_id ON game_sessions(character_id);

ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Utenti vedono le proprie sessioni"
  ON game_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Utenti creano le proprie sessioni"
  ON game_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Utenti aggiornano le proprie sessioni"
  ON game_sessions FOR UPDATE USING (auth.uid() = user_id);

CREATE TRIGGER update_game_sessions_updated_at
  BEFORE UPDATE ON game_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── Migration: Profilo esteso (consensi GDPR e dati anagrafici) ──────────────

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS nome                TEXT        NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS cognome             TEXT        NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS nickname_battaglia  TEXT        UNIQUE,
  ADD COLUMN IF NOT EXISTS consenso_gdpr       BOOLEAN     NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS consenso_gdpr_at    TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS marketing_opt_in    BOOLEAN     NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS marketing_opt_in_at TIMESTAMPTZ;

-- Aggiorna il trigger di creazione profilo per gestire i nuovi campi
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (
    id, username, nome, cognome, nickname_battaglia,
    consenso_gdpr, consenso_gdpr_at,
    marketing_opt_in, marketing_opt_in_at
  )
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'nickname_battaglia',
      split_part(NEW.email, '@', 1)
    ),
    COALESCE(NEW.raw_user_meta_data->>'nome', ''),
    COALESCE(NEW.raw_user_meta_data->>'cognome', ''),
    NEW.raw_user_meta_data->>'nickname_battaglia',
    COALESCE((NEW.raw_user_meta_data->>'consenso_gdpr')::boolean, false),
    CASE
      WHEN (NEW.raw_user_meta_data->>'consenso_gdpr')::boolean
      THEN NOW() ELSE NULL
    END,
    COALESCE((NEW.raw_user_meta_data->>'marketing_opt_in')::boolean, false),
    CASE
      WHEN (NEW.raw_user_meta_data->>'marketing_opt_in')::boolean
      THEN NOW() ELSE NULL
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
