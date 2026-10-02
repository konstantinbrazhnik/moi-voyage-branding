# MoiVoyage — the brand book

**The pitch in one line:** a house that makes a world for every trip. The
passport is the product; each voyage is a page in it, with its own look and its
own narrator; the house is the cover.

The analogy is Penguin. The bird sits on every book and no two covers match.
MoiVoyage's stamp sits on every voyage and no two voyages look alike. What they
share is the care: facts you can always read, a clear line between what is
settled and what is still open, someone to look after the loose ends, and at
least one drawn thing.

This book is the house level. What a template may and may not change is in
[`TEMPLATES.md`](./TEMPLATES.md). How the house and its narrators speak is in
[`VOICE.md`](./VOICE.md). The tokens are in [`house/tokens.css`](./house/tokens.css)
and the visual sheet is [`house/house-sheet.html`](./house/house-sheet.html).

Decisions this book rests on (from the discovery questions, 1–2 October 2026):

| Question | Decision |
|---|---|
| First traveller | The two of you. Friends and paying strangers later. |
| One brand or a house | A house that makes a world per trip. |
| The assistant | A feature. The passport is the product; the narrator makes it fluid. |
| Autonomy | Notice and suggest now. Act and report later (deals, bookings). |
| Says "I" | Yes, inside a voyage. The house does not. |
| Physical or digital | The middle. The house is physical (a passport). Each template decides for itself. |
| Templates | A visual language a trip can choose and extend; the house and partners make new ones; nothing is offered until it passes the gate. |

Everything not listed keeps the working assumptions in
[`discovery/QUESTIONS.md`](./discovery/QUESTIONS.md).

---

## 1. The idea

**Travel should be about the adventure, and somebody else should hold the
loose ends.** MoiVoyage makes a small, private app for one trip: your places,
your dates, your people, dressed in a world chosen for that trip, with a named
narrator who knows what is settled and what is still a maybe, and who says so.

Three things are always true, whatever the voyage looks like:

1. **You can always tell settled from maybe.** Ink and pencil in The Green
   Road, tickets and scribbles in Daren's Last Ride. Each template picks its
   own materials for the distinction, but the distinction is never a label
   alone and never only a colour.
2. **Facts are legible.** Every time, place, name and price is set in a book
   face at a readable size with measured contrast. Decoration is loud
   wherever it likes and never carries information.
3. **Nobody guesses.** The narrator answers from what is known and says, in
   character, when it does not know.

## 2. Architecture: house, template, voyage

| Layer | What it is | Owns | Example |
|---|---|---|---|
| **The house** | MoiVoyage itself. The passport cover. | The mark, the name, the house palette and type, the house screens (welcome, passport, choosing a world, making, invite, settings, credits, receipt, souvenir frame), the house voice, the rules every template obeys, the validation gate. | The stamp, "Your passport", "Making The Green Road…" |
| **A template** | A visual language and a narrator archetype that a trip can choose and that grows to fit the trip. | Palette, type, materials and metaphors, components' skins, drawing style and asset library, the narrator's name and character, vocabulary, loudness, light/dark. | The Storybook (from The Green Road), The Tour (from Daren's Last Ride) |
| **A voyage** | One trip, in one template, for these people. | Places, dates, people, plans, what is inked and what is pencilled, the drawings made for its places, its stamp. | The Green Road, 6–27 October 2026 |

The house never speaks inside a voyage. A template never touches a house
screen. A voyage never changes a rule. This mirrors the four layers the
engine already has (function, capability profile, skin, trip configuration):
the template is the skin, the voyage is the trip configuration, and the house
is what wraps them.

### Template tiers

| Tier | Who makes it | What it is |
|---|---|---|
| **House template** | The house (generated, validated, looked at once by a person) | A finished world anyone may choose. |
| **Extended** | The house, for one voyage, automatically | A house template grown to fit the trip: new places drawn in the same style, existing drawings reused, the narrator told the trip. This is what choosing a template does. |
| **Bespoke** | The house, with the traveller, for one voyage | A new world with its own metaphor, palette and narrator. The Green Road began this way. May become a house template later, with the travellers' consent. |
| **Partner** | A business (a travel agency, a tour operator, a wedding planner) for its group trips | Its own world and narrator, carrying its mark inside the voyage, under the co-branding rules in §8. |

Every tier passes the same gate before a traveller can choose it. See
`TEMPLATES.md` §5.

## 3. The name

**MoiVoyage.** One word in prose. Said *mwah vwa-YAHZH*.

- In French it would be *mon voyage*. *Moi, voyage* reads as "me, travel":
  a wink, slightly theatrical, a little self-centred in a good way. The trip
  is about you. The house embraces the wink and does not explain it.
- The name is the only French in the product. No *bon voyage*, no *en route*
  in the interface. A template may use French if its world calls for it; the
  house does not.
- The wordmark splits the word: **MOI VOYAGE**, Jost 500, capitals, tracked
  0.3em. It is a title-card, the same voice that heads a place in The Green
  Road. In running text the wordmark form is never used; write MoiVoyage.
- Never: Moi-Voyage, MoiVoyage.ai, moivoyage in lower case as a brand name,
  or a tagline attached to the wordmark with a dash or colon.
- Domain and trademark have not been checked. Do that before anything public.

## 4. The mark: the stamp

The house mark is a passport stamp. A double ring, **MOI · VOYAGE** running
round it, and the monogram **MV** in the middle. It is drawn, not typeset, in
the sense that it is always slightly rotated, like a stamp that was pressed
by hand, with one exception below.

| | Rule |
|---|---|
| Construction | Outer ring stroke 3 units on a 120-unit circle; inner ring 1 unit at 50; ring text Jost 500, 10 units, tracked, fitted to the inner circumference; monogram Jost 600, 28 units, optically centred. The reference drawing is in `house/house-sheet.html`. |
| Rotation | −8° on the cover and on house screens. The app icon is upright. |
| Colour | `stamp` red on light surfaces; `stamp-light` on the cover and any dark surface. The red ring measures 2.6:1 on the cover, below the 3:1 a graphic needs; that is why the light tint exists. Single-colour versions in `ink` or `cream` are allowed. Never a gradient, never a shadow, never a fill behind the ring. |
| Minimum size | 24px: ring and monogram only. Ring text appears from 48px. |
| Clear space | Four stroke widths all round. Nothing overlaps the stamp. |
| Where it appears | The passport cover. The app icon. The welcome. The making screen. The souvenir at the end of every voyage. **Nowhere else inside a voyage**: a template's world is never watermarked. |

### The voyage stamp

Each voyage gets a stamp of its own: a rounded rectangle, 2px stroke, the
voyage's name in the hand (Caveat), its dates in Jost capitals, rotated
between −6° and +6°. It is pressed in the **voyage's own accent**, not in house
red, the way a real passport collects inks from different countries. It is
pressed on the voyage's page in the passport when the voyage is made, and
again on the souvenir when it ends. The stamp is the only house component
that takes a template's colour.

## 5. The passport

The passport is the house's one object and the product's main feature. It has a
cover and pages.

**The cover** is dark: `cover` ink, the stamp in `stamp-light`, the wordmark in
`cream`. It is the first thing you see, the app icon, and the frame for every
house screen that is not a page.

**The pages** are light: `field` off-white, `ink` text, a thin `line` between
entries. One voyage per page, with its stamp, its name, its dates, its
template's name in small capitals, and the next thing that needs you, if
anything does. A page is tapped to enter the voyage, and from there the
template owns the whole screen.

House screens, in the order a new traveller meets them:

| Screen | Job | Owned by |
|---|---|---|
| Welcome | Say what this is in three lines; make the first voyage. | House |
| Choose a world | Show the templates as covers with a one-line pitch each. | House, cards rendered by each template |
| Making your voyage | Show the world being made: places being drawn, letters being written. About a minute. | House |
| Your passport | The pages. | House |
| Invite your companion | One link, same page, same narrator. | House |
| Inside a voyage | Everything. | Template |
| Settings, credits, receipt | Plain pages. Credits list every licensed photograph and font. | House |
| Souvenir | The end of a voyage: the template's farewell inside the house's frame, both stamps pressed. | Shared |

## 6. Colour

The house owns a small palette and never borrows a template's colour except on
the voyage stamp.

| Token | Hex | Job |
|---|---|---|
| `field` | `#F6F4EF` | pages: the ground |
| `raised` | `#ECE9E1` | pages: sheets, cards |
| `paper` | `#FFFEFB` | pages: a touchable surface |
| `ink` | `#1E2430` | pages: all primary text; also the cover ground |
| `inksoft` | `#575C68` | pages: secondary text |
| `pencil` | `#6A645E` | pages: a maybe, a not-yet |
| `stamp` | `#B8322F` | pages: the mark; the one accent, once per screen |
| `line` | `#D8D4CA` | pages: rules and borders, decorative only |
| `cover` | `#1E2430` | cover: the ground |
| `cover-raised` | `#283040` | cover: a sheet on the cover |
| `cream` | `#F6F4EF` | cover: all primary text |
| `cream-dim` | `#B9BEC9` | cover: secondary text |
| `stamp-light` | `#E8766E` | cover: the mark |
| `cover-line` | `#3B4455` | cover: rules, decorative only |

### Contrast, measured

Measured by `node scripts/contrast.mjs`, WCAG 2.x. The threshold is 4.5:1 for
text and 3:1 for graphics that carry meaning. Re-run it whenever a token moves
and paste the table here.

#### Pages (light)

| Text | on field | on raised | on paper |
|---|---|---|---|
| `ink` #1E2430 | 14.1 ✓ | 12.8 ✓ | 15.4 ✓ |
| `inksoft` #575C68 | 6.1 ✓ | 5.5 ✓ | 6.6 ✓ |
| `stamp` #B8322F | 5.4 ✓ | 4.9 ✓ | 5.9 ✓ |
| `pencil` #6A645E | 5.3 ✓ | 4.8 ✓ | 5.8 ✓ |
| `line` #D8D4CA (non-text) | 1.3 | 1.2 | 1.5 |

#### Cover (dark)

| Text | on cover | on cover-raised |
|---|---|---|
| `cream` #F6F4EF | 14.1 ✓ | 12.0 ✓ |
| `cream-dim` #B9BEC9 | 8.3 ✓ | 7.1 ✓ |
| `stamp-light` #E8766E | 5.4 ✓ | 4.6 ✓ |
| `cover-line` #3B4455 (non-text) | 1.6 | 1.4 |

#### The stamp as a graphic

| Ring | on field | on cover |
|---|---|---|
| `stamp` #B8322F | 5.4 ✓ | 2.6 ✗ |
| `stamp-light` #E8766E | 2.6 ✗ | 5.4 ✓ |

Three rules follow from the table:

1. **Lines are decorative.** `line` and `cover-line` fail 3:1 on purpose; they
   separate, they never mean. Anything that must be seen to be used (an input
   border, a focus ring, a toggle's track) uses `inksoft` on pages and
   `cream-dim` on the cover.
2. **The stamp changes tint with the surface**, never the surface with the
   stamp. Red on light, light on dark.
3. **State the text colour wherever you state a background** (carried from
   Last Ride). The cover and the pages invert; a component that sets a
   background and lets the text inherit will ship invisible.

## 7. Type

The house uses the three faces The Green Road already uses, so the house and
its first template agree. Templates may bring their own.

| Role | Face | Size | Used for |
|---|---|---|---|
| Title | **Jost** 500/600, capitals, tracked .14–.3em | 13–40px | the wordmark, screen titles, buttons, tabs, template names |
| Fact | **Lora** 400/500 | 17–20px, never below 17 | everything that is true: a date, a place, a price, a sentence |
| Hand | **Caveat** 500 | 24px and up | the voyage's name on its stamp, and nothing else at house level |

Running text stays near 65 characters wide. Numbers that line up use tabular
figures. A heading balances its lines. Uppercase labels are tracked. Nothing
is dimmed with opacity to make it recede; a secondary colour is a token.

## 8. Co-branding for partner templates

A partner template keeps the passport and gets the voyage.

- **The cover is the house's.** A traveller's passport has one cover and it is
  MoiVoyage's. A partner's mark does not appear on the cover, the welcome, or
  the passport pages. The partner's voyage page carries the partner's name in
  small capitals under the voyage's name, where a template's name goes.
- **Inside the voyage, the partner's world is the partner's.** Its mark, its
  narrator, its materials, its colours, its drawings. No house stamp, like any
  other template.
- **The souvenir carries both.** The house stamp and the voyage stamp, in the
  partner's accent, with "made with MoiVoyage" in the house wordmark at the
  bottom, in Jost capitals, small.
- **The gate is the same.** Contrast, type minimums, the settled-versus-maybe
  test, the narrator rules, offline weight, credits. A partner's brand does not
  buy an exception; a template that fails is not offered.
- **The narrator rules are not negotiable** (see `VOICE.md` §2). A partner's
  narrator may have any character and may recommend the partner's own
  properties, but it says so, it never invents a fact, and it never sells
  unasked.

## 9. What is not decided

- Price and packaging per tier, and whether "bespoke" has a price or a waiting
  list.
- Whether the house ever has a public website, and what the cover looks like
  at desktop width.
- The app icon's exact drawing (upright stamp on cover ink is the rule; the
  pixel work is not done).
- Domain and trademark.

## 10. What happens next

1. Build the house screens as a theme package the engine can run: tokens from
   `house/tokens.css`, copy from `VOICE.md` §3, the stamp from the sheet.
2. Write the Storybook and the Tour as template manifests (`TEMPLATES.md` §3)
   and run them through the gate, so the first two worlds are real.
3. Make the first extended voyage from a template without hand work: choose
   the Storybook, name three new cities, and see them drawn in its style.
