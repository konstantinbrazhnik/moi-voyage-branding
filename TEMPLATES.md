# MoiVoyage — templates

A template is a world a trip can wear: a visual language, a set of materials, a
vocabulary, a drawing style with an asset library, and a narrator archetype.
Choosing one for a voyage extends it: new places are drawn in its style,
existing drawings are reused, and the narrator is told the trip.

The house makes templates, travellers commission bespoke ones, and partners
build their own. None is offered to a traveller until it passes the gate in §5.

## 1. What a template may change

Everything inside a voyage, including:

- **Palette**, including a per-chapter or per-mode switch (The Green Road
  changes field, ink, accent and flourish on the day the train crosses into
  Scotland).
- **Type**: its own display, fact and hand faces, within the minimums in §2.
- **Materials and metaphors**: letters and envelopes, tickets and laminates,
  cards and sheets, or none at all. A template may be fully physical, fully
  digital-native, or in between.
- **Components' skins**: what a day, a stay, a saved idea, the map and the
  narrator's button look like.
- **Vocabulary**: what the timeline, stays, saved ideas, countdown and
  narrator are called. "The Road", "Lodgings", "The Little List", "the
  Seanchaí". "Setlist", "Laminates", "Lester".
- **The narrator's name and character**, within the rules in `VOICE.md` §2.
- **Drawing style** and the asset library that goes with it.
- **Loudness**: maximalist (Last Ride) to quiet (The Green Road).
- **Modes**: light, dark, one committed look, or per-chapter.
- **Special days**: a toast, an invitation, a headline show.

## 2. What a template may not change

These are the house's rules. The gate checks each one, and a partner's brand
does not buy an exception.

1. **Settled versus maybe is visible without colour.** Ink and pencil, ticket
   and scribble, solid and dashed: whatever the materials, a traveller must be
   able to tell a commitment from a maybe with the colour removed. A label
   alone is not enough.
2. **Decoration never carries information.** Photos, drawings, stickers, tape
   and stamps are `aria-hidden` or labelled as a view. No fact lives only in
   a decoration.
3. **Contrast is measured, not eyeballed.** Every text token on every surface
   it can sit on: 4.5:1, or 3:1 at 24px and above (18.66px bold). Graphics
   that carry meaning: 3:1. Worst case over a photograph is measured against
   a black pixel at the photo's maximum strength. Text colour is stated
   wherever a background is stated.
4. **Facts are set in a book face at 17px or more.** A handwriting or display
   face never carries a fact, and handwriting never appears below 24px.
5. **Tap targets are 44px or more**, and press-and-hold never raises the
   platform's selection or context menu.
6. **Motion respects `prefers-reduced-motion`.** One orchestrated moment beats
   scattered effects; a template may have none.
7. **Offline is complete.** The whole shell and every asset the voyage needs
   are precached; the voyage's assets fit the weight budget (photographs
   under about 600 KB in total, drawings as SVG).
8. **Licensed assets are credited** on the house's credits page, with the
   licence named. Generated drawings carry no licence; photographs do.
9. **The narrator obeys `VOICE.md` §2**, whatever its character.
10. **The house screens are untouched.** A template renders its own card on
    "Choose a world" and its farewell inside the souvenir frame, and nothing
    else outside the voyage.
11. **The house stamp appears inside a voyage only on the souvenir.** No
    watermark, no "powered by".
12. **The core jobs keep their jobs.** The timeline, stays, map, saved ideas
    and narrator may be renamed and restyled; none may be removed by a
    template. Removing a mechanic is a capability profile's job, not a skin's.

## 3. The manifest

A template is a data package. It contains no code, no SQL, no routes and no
permissions; the engine's skill generates it and the gate validates it. The
shape, as it stands:

```yaml
id: storybook
name: The Storybook
pitch: Your days as letters, your places as drawings.
tier: house            # house | extended | bespoke | partner
family: physical       # physical | digital | hybrid
loudness: quiet        # quiet | medium | loud
partner: null          # or { name, mark, contact }

narrator:
  name: the Seanchaí
  said: SHAN-uh-key
  archetype: the storyteller who writes in pencil until one of you inks it in
  character: gentle, specific, leans toward natural wine bars, small neighbourhoods and real cultural experiences
  refusals: never guesses a time; never inks anything itself
  materials: { settled: ink, maybe: pencil }

vocabulary:
  timeline: The Road
  stays: Lodgings
  ideas: The Little List
  countdown: "sleeps till …"
  narrator_button: a paper disc with the chapter's flower

modes:
  - id: romance        # chapters, switched by chapterFor(day)
    field: "#F8F7F4"
    raised: "#EFEDE7"
    paper: "#FFFEFB"
    ink: "#25304A"
    inksoft: "#565B6B"
    pencil: "#6A645E"
    accent: "#2F5A8A"
    rose: "#A83A5E"
    flourish_face: Bodoni Moda italic
  - id: green
    field: "#F4F7F1"
    ink: "#1F3326"
    accent: "#2F6B45"
    flourish_face: Fraunces italic
    # unlisted tokens inherit from the first mode

type:
  title: { face: Jost, weights: [500, 600], case: upper, tracking: [0.14, 0.3] }
  fact: { face: Lora, size: 20, pitch: 34 }
  hand: { face: Caveat, min: 24, used_for: [datelines, margins, status notes] }
  flourish: { per_mode: true }

drawing:
  canvas: [400, 260]
  style: symmetrical, mirrored about the centre; flat pastels; 1.3px navy outline; double navy frame with a name plate; soft risograph grain
  palette: [sky "#CFE2F0", powder "#A9C8E8", mint "#A9DCC9", sage "#B8D3A2", butter "#F6DE9A", lavender "#C9B8E0", pink "#F2B8C6", line "#2E3552"]
  recurring_props: [lollipop and cone topiary, lampposts, striped awnings, bunting, flags, the travellers centre stage]
  motifs: [rose, thistle, shamrock, heather, lavender, wine, coupe, train, plane, the couple]
  assets:
    vistas: [paris, london, york, edinburgh, glasgow, dublin, kilkea]   # reused, never redrawn
    photos: { source: Wikimedia Commons, licences: [CC BY, CC BY-SA], credited: true, budget_kb: 600 }
  extend: a new place is drawn on the same canvas, in the same style, with the same props and palette, and added to the library

components:
  day: a letter on ruled paper, drawing held by washi tape, times in the margin, ink lines and pencil lines, a sign-off
  stay: an envelope addressed c/o the hotel, the place's drawing as the stamp, a dated postmark
  idea: an index card taped to the page
  special_days: [the Toast, the Invitation]

validation:
  gate_version: 1
  measured_at: null
  contrast: null          # the table the gate produces
  worst_over_photo: null
  reduced_motion: null
  offline_weight_kb: null
  narrator_moments: null  # the 20 moments rendered and checked
  settled_vs_maybe_no_colour: null
  human_looked: null      # name and date
```

The second existing world, **The Tour** (from Daren's Last Ride), is the same
shape with different values: `family: physical`, `loudness: loud`, one
committed dark mode (tolex ground, setlist paper, brass, canyon sunset, Penny
Lane pink once per screen, Chavez Ravine blue as the one cool note), narrator
Lester (the critic who got roped in), vocabulary Setlist / Laminates / The
Gauntlet / Dispatch, materials ticket / scribble, special day the headline
show. Its drawing style is collage: stickers, rubber stamps, tape strips,
rotation and overlap on the decoration layer only, with the information layer
on the grid.

## 4. Extending a template for a voyage

Choosing a template does this, automatically, in about a minute:

1. **Reads the trip**: places, dates, people, special days, chapters if the
   template has them.
2. **Reuses what exists.** Every place already in the asset library is used as
   is. The Green Road's seven vistas never get redrawn.
3. **Draws what is missing**, in the template's style, from the manifest's
   `drawing` block: same canvas, same outline, same palette, same recurring
   props, the travellers centre stage. New drawings go back into the library
   for the next voyage that visits that place.
4. **Tells the narrator the trip**: the names, the dates, the special days, the
   things it must never say (the groom never sees the deck), the taste it
   should lean toward.
5. **Runs the gate** on the result, since a new drawing can fail contrast and
   a new place name can break a layout.
6. **Presses the voyage stamp** in the template's accent and writes the page.

A bespoke template is the same process starting from a blank manifest, with
the traveller in the loop on the metaphor, the palette and the narrator, and a
partner template is a bespoke template whose `partner` block is filled and
whose co-branding follows `BRAND.md` §8.

## 5. The gate

Nothing is offered to a traveller until every check passes and a person has
looked once. The gate is automatic up to the last line.

| Check | How | Pass |
|---|---|---|
| Contrast | Every text token × every surface it can sit on, each mode; worst case over any photograph at its maximum strength against a black pixel | 4.5:1 text, 3:1 large text and meaningful graphics; nothing inherits a text colour |
| Settled versus maybe | Render a day with colour removed | A reader can tell a commitment from a maybe |
| Decoration carries nothing | Strip every `aria-hidden` and decorative layer | Every fact still present |
| Type minimums | Scan the stylesheet and the rendered screens | Facts ≥ 17px in the fact face; hand ≥ 24px; hand never on a fact |
| Tap targets and gestures | Rendered screens at phone width; press-and-hold guards present | ≥ 44px; no selection handles or context menu on hold |
| Motion | `prefers-reduced-motion` honoured | No required motion; nothing left at opacity 0 |
| Offline | Precache manifest and asset sizes | Shell complete; photos under budget; drawings as SVG |
| Credits | Every photograph and font has a licence line | Credits page complete |
| Narrator | The twenty moments of `VOICE.md` §3 rendered in character, with the trip's facts | Every rule in `VOICE.md` §2 holds; every fact in the output exists in the data |
| Vocabulary | Interface strings | No engine words (theme, skin, assistant, AI, bot) |
| House screens | Diff against the house | Untouched |
| Stamp | Search the voyage's screens | House stamp only on the souvenir |
| Both themes, if claimed | Light and dark rendered | Every token defined in both; no literal colour that reads in one theme only |
| A person looks once | Phone, in sunlight and at night | Signed with a name and a date in the manifest |

A template that fails is not patched by hand; the manifest is corrected and the
gate runs again, so that the next extension inherits the fix.

## 6. The first two

| | The Storybook | The Tour |
|---|---|---|
| From | The Green Road (`konstantinbrazhnik/2026-kk-uk`) | Daren's Last Ride (`konstantinbrazhnik/Daren-bach`) |
| Pitch | Your days as letters, your places as drawings. | Your weekend as a rock tour. |
| Family, loudness | Physical, quiet | Physical, loud |
| Narrator | The Seanchaí | Lester |
| Settled / maybe | Ink / pencil | Ticket / setlist scribble |
| Modes | Two chapters, light | One committed dark look |
| Signature | The letter with its margin line and washi tape | The laminate and the sold-out stamp |
| Status | Theme and drawings done; no manifest yet | Shipped as an app; theme not yet lifted out |

Both go through the gate as the first proof that the gate works. The Storybook
is the first to be extended: name three cities it has never drawn and watch it
draw them.
