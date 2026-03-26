"use client";

import { useState } from "react";
import { drawingsData, type GeneratedDrawing } from "../lib/drawings-data";

type Difficulty = 1 | 2 | 3;

interface Challenge {
  prompt: string;
  searchTerms: string;
  description: string;
  technique: string;
  difficulty: Difficulty;
  difficultyLabel: string;
  time: string;
  tips: string[];
}

const challenges: Challenge[] = [
  {
    prompt: "Crumpled Paper Study",
    searchTerms: "paper still life white",
    description: "Crumple a piece of paper, smooth it slightly, and draw it. A deceptively challenging exercise in rendering complex light and shadow.",
    technique: "Form & Shading",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "20–30 min",
    tips: [
      "The folds create sharp geometric shadows — great for practicing tonal range",
      "Each facet of the crumpled paper is a flat plane catching light differently",
      "Simplify what you see into light, mid-tone, and dark zones first",
      "Use parallel hatching for flat planes, cross-hatching for shadow transitions",
      "This exercise trains you to see value, not objects",
    ],
  },
  {
    prompt: "Twisted Roots",
    searchTerms: "tree roots landscape",
    description: "Find a tree with exposed roots or a gnarled branch and draw the twisting forms. Focus on the rhythm and energy in organic shapes.",
    technique: "Cross-hatching",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "30–45 min",
    tips: [
      "Follow the direction of the wood grain with your hatching lines",
      "Vary line weight — heavier where forms turn away from the light",
      "Look for the negative space between roots, it defines the shapes",
      "Layered cross-hatching builds rich dark tones without muddiness",
      "Let some areas breathe — not everything needs full detail",
    ],
  },
  {
    prompt: "Weathered Door",
    searchTerms: "door architectural old",
    description: "Draw an old door with peeling paint, worn handle, or cracked wood. Every mark of age is a drawing opportunity.",
    technique: "Line Weight Variation",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "40–60 min",
    tips: [
      "Thick lines anchor the structure; thin lines describe surface texture",
      "Peeling paint edges can be drawn with quick, flicking strokes",
      "Don't draw every crack — select the most expressive ones",
      "The shadow under a door frame is one of the darkest areas; hatch it densely",
      "Step back often. Details only work when the big shapes are right",
    ],
  },
  {
    prompt: "Old Hands",
    searchTerms: "hands figure study",
    description: "Draw aged hands — your own, or from a reference. The map of tendons and wrinkles is one of the richest subjects in fineliner work.",
    technique: "Contour Lines",
    difficulty: 3,
    difficultyLabel: "Advanced",
    time: "45–60 min",
    tips: [
      "Start with the largest forms: the palm and main finger shapes",
      "Wrinkles follow the direction of the skin's stretch — observe carefully",
      "Use contour lines to describe the roundness of knuckles",
      "The spaces between fingers define the hand as much as the fingers themselves",
      "Avoid outlining every finger with the same weight — vary pressure",
    ],
  },
  {
    prompt: "Tangled Wire",
    searchTerms: "wire coil abstract lines",
    description: "Draw a coil of wire, a set of headphones, or tangled earbuds. Follow the line in space with your fineliner.",
    technique: "Negative Space",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "20–30 min",
    tips: [
      "Draw the shapes between the wires — the holes — before the wires themselves",
      "Where wire crosses over itself, one side gets a heavier shadow",
      "Keep your line consistent: this subject rewards a steady, even stroke",
      "Try a continuous line approach — don't lift the pen",
      "Notice how the wire changes thickness as it curves toward you or away",
    ],
  },
  {
    prompt: "Feather Study",
    searchTerms: "feather bird natural history",
    description: "Find a feather or use a close-up reference. The delicate parallel structure of barbs is perfect for fineliner techniques.",
    technique: "Fine Parallel Lines",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "20–30 min",
    tips: [
      "Draw the central shaft (rachis) first — it sets the curve of the whole feather",
      "Barbs fan outward from the shaft at a consistent angle — use a light guide line",
      "Broken barbs at the tip add character and believability",
      "The underside of a feather is lighter; leave more white paper there",
      "Try hatching along the barbs for the shadow side to add depth",
    ],
  },
  {
    prompt: "Rope Knot",
    searchTerms: "rope knot nautical",
    description: "Tie a knot and draw it — or find a knotted rope, net, or macramé. Tracking the path of a single strand is an excellent spatial exercise.",
    technique: "Continuous Line",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "25–40 min",
    tips: [
      "Trace the path of one strand with your eye before you draw anything",
      "Where the rope passes under, add a shadow line to clarify depth",
      "The twist of twisted rope can be shown with diagonal parallel lines",
      "Knots are symmetric — if something looks wrong, check the other side",
      "Cross-hatch the deepest shadow areas where strands overlap tightly",
    ],
  },
  {
    prompt: "Dried Flower",
    searchTerms: "botanical flower illustration",
    description: "Draw a dried flower — rose, poppy seed head, or thistle. The fragile, papery quality of dried botanicals suits delicate fineliner work.",
    technique: "Delicate Cross-hatching",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "25–35 min",
    tips: [
      "Dried petals have a translucent quality — keep hatching light and airy",
      "The shriveled edges of dried petals curl and crinkle; follow these lines",
      "Contrast: a densely hatched center against barely-touched outer petals",
      "Stems are often wiry and bent — don't make them too straight or rigid",
      "Leave the lightest areas completely white, no lines at all",
    ],
  },
  {
    prompt: "Street Lamp at Night",
    searchTerms: "street lamp night city",
    description: "Draw a lamp post with radiating light. This is a study in depicting glow and brightness using only black lines on white paper.",
    technique: "Radiating Lines",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "30–45 min",
    tips: [
      "Light radiates outward — hatch densely far from the source, leave white near it",
      "The light source itself should be nearly blank paper surrounded by dark",
      "Wet cobblestones beneath a lamp can be shown with short horizontal strokes",
      "Don't outline the glow — let it dissolve into lighter hatching",
      "Silhouette elements (branches, railings) against the light for strong contrast",
    ],
  },
  {
    prompt: "Spider Web",
    searchTerms: "spider web insect",
    description: "Draw a spider web — ideally from observation with backlighting to see the threads. A study in geometry, repetition, and delicacy.",
    technique: "Flowing Fine Lines",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "20–30 min",
    tips: [
      "Start with the anchor lines (radii) from the center outward",
      "The spiral silk lines follow a gentle curve between each radius",
      "Vary thickness: the structural radii are slightly thicker than the spiral",
      "Where droplets cling to the web, add tiny circles or oval clusters",
      "The context — twig, window frame — anchors the web. Don't skip it",
    ],
  },
  {
    prompt: "Worn Boot",
    searchTerms: "boot shoe still life",
    description: "Draw an old, worn-in boot or shoe. The creases, scuffs, and lace-holes are a map of lived experience.",
    technique: "Layered Hatching",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "35–50 min",
    tips: [
      "The deepest creases in leather are your darkest zones — hatch them first",
      "The toe and heel catch the most light; leave these areas sparse",
      "Lace holes are small cylinders — show the inside shadow with a few curved lines",
      "Leather has a slight sheen — a thin highlight line along the toe ridge reads instantly",
      "Worn soles have uneven wear; slightly tilt or distort the shape",
    ],
  },
  {
    prompt: "Ink Bottle",
    searchTerms: "bottle glass still life",
    description: "Draw an ink bottle — the ideal subject for a fineliner. Glass, ink level, label, and the reflection of light all present different challenges.",
    technique: "Reflective Surfaces",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "30–40 min",
    tips: [
      "Glass is defined by what it reflects and distorts, not a uniform outline",
      "The ink inside is darker at the base, lighter near the surface",
      "Keep a sharp highlight on the glass — leave it as pure white paper",
      "The label is a flat plane; any text on it should follow the curve of the bottle",
      "The shadow cast by the bottle is often more interesting than the bottle itself",
    ],
  },
  {
    prompt: "Forest Floor",
    searchTerms: "forest leaves nature landscape",
    description: "Look down — draw what's on the ground: leaves, twigs, moss, pebbles. A study in layering, overlap, and texture variety.",
    technique: "Overlapping Planes",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "35–50 min",
    tips: [
      "Overlap is the simplest way to show depth — draw the top layer first",
      "Each leaf type has its own vein pattern; just a few lines suggest the whole",
      "Vary texture marks: short dashes for moss, circles for pebbles, curves for leaves",
      "Don't draw everything. Select a focal area and let the edges fade",
      "Shadows under leaves are small and sharp — a few bold marks go a long way",
    ],
  },
  {
    prompt: "Bare Tree Against Sky",
    searchTerms: "bare tree winter landscape",
    description: "Draw a leafless tree against a light background. Focus on the rhythm of branches and the character of the silhouette.",
    technique: "Varied Line Weight",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "20–35 min",
    tips: [
      "The trunk is thickest at the base and tapers toward the top — don't make it uniform",
      "Branches divide and each division gets slightly thinner",
      "Draw the negative space (sky between branches) to check your shapes",
      "A few dead leaves clinging to a twig add narrative",
      "Bark texture: short vertical hatching on the shaded side of the trunk",
    ],
  },
  {
    prompt: "Eye Close-up",
    searchTerms: "eye portrait figure study",
    description: "Draw an eye in close-up. This intimate subject demands precision and rewards careful observation of every crease and lash.",
    technique: "Contour & Detail",
    difficulty: 3,
    difficultyLabel: "Advanced",
    time: "40–60 min",
    tips: [
      "The iris is not a flat circle — the eyelid covers the top arc; show this",
      "Eyelashes grow in clusters, not evenly spaced individual hairs",
      "The white of the eye (sclera) is rarely pure white — shade it lightly",
      "A bright catchlight (white dot) in the iris makes the eye come alive",
      "Cross-hatch the pupil very densely, leaving the iris lighter and more varied",
    ],
  },
  {
    prompt: "Stone Wall Section",
    searchTerms: "stone wall architecture",
    description: "Draw a section of a dry stone wall or brick facade. Repetition with variation — every stone is the same, yet different.",
    technique: "Broken Lines & Texture",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "25–40 min",
    tips: [
      "No two stones are the same size — vary them deliberately",
      "The mortar lines (gaps) define the wall more than the stones themselves",
      "Shadow under each stone's top edge makes them look three-dimensional",
      "Rough texture can be suggested with broken, slightly wobbly outlines",
      "Dense hatching in the gaps gives depth without overcomplicating the surfaces",
    ],
  },
  {
    prompt: "Keyhole",
    searchTerms: "door lock key interior",
    description: "Draw a vintage keyhole — just the keyhole, centered on the page. Use the surrounding darkness to create intrigue and depth.",
    technique: "Negative Space",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "15–25 min",
    tips: [
      "The keyhole is defined by what surrounds it — the dark metal plate",
      "The circular part at the top is not a perfect circle; it has dimension",
      "Dense cross-hatching around the keyhole makes it recede into darkness",
      "The scratches from years of missed keys tell a story — add a few fine lines",
      "Try filling the entire background to make the keyhole glow white",
    ],
  },
  {
    prompt: "Hands Holding",
    searchTerms: "hands clasped figure study",
    description: "Draw two hands clasped together — your own, or from reference. A subject about connection that requires careful study of interlocking forms.",
    technique: "Gesture & Proportion",
    difficulty: 3,
    difficultyLabel: "Advanced",
    time: "45–60 min",
    tips: [
      "Establish the overall mass of both hands together before individual fingers",
      "Where fingers interlock, one always sits on top of the other — show this clearly",
      "The knuckles of the gripping hand are prominent and angular",
      "Tendons on the back of the hand become visible under light grip tension",
      "Don't draw each finger the same width — they taper and foreshorten",
    ],
  },
  {
    prompt: "Match Flame",
    searchTerms: "flame candle light fire",
    description: "Draw a lit match or candle flame. A minimal subject that is all about light, warmth, and contrast in black and white.",
    technique: "Flowing Lines & Contrast",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "15–25 min",
    tips: [
      "The flame itself is nearly all white — the surrounding dark makes it glow",
      "Flame edges are soft and irregular; avoid a hard, even outline",
      "The match head is charred black just below the flame",
      "Light reflected on the match stick below is a thin bright stripe",
      "Smoke, if present, rises in a faint sinuous curve above the flame",
    ],
  },
  {
    prompt: "Cobblestone Path",
    searchTerms: "cobblestone street pavement",
    description: "Draw a section of cobblestone street in perspective. Repetitive pattern with perspective foreshortening and aged surface texture.",
    technique: "Repetitive Mark-making",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "30–45 min",
    tips: [
      "Establish the vanishing point before drawing any cobblestones",
      "Stones get smaller and more compressed as they recede — follow the perspective lines",
      "The gaps (joints) between stones are more important than the stones themselves",
      "Worn, central stones are smoother; edge stones are rougher and more textured",
      "Rain puddles between stones can be rendered with horizontal reflection lines",
    ],
  },
  {
    prompt: "Bicycle Wheel",
    searchTerms: "wheel circular mechanical",
    description: "Draw a bicycle wheel — the hub, spokes, rim, and tire. A precise geometric subject that rewards patience and careful construction.",
    technique: "Geometric Precision",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "30–45 min",
    tips: [
      "Lightly sketch the ellipse of the wheel rim before committing with ink",
      "Spokes radiate from the hub — they're evenly spaced but perspective affects them",
      "The tire has a slight cross-section depth; show the inner and outer edges",
      "A shadow line on the underside of the rim suggests its cylindrical form",
      "Spokes behind the rim are slightly lighter — they're seen through the dark tire",
    ],
  },
  {
    prompt: "Stack of Books",
    searchTerms: "books still life",
    description: "Draw a stack of books — horizontal, with varied thicknesses and worn spines. A still life that rewards attention to proportion and texture.",
    technique: "Perspective & Planes",
    difficulty: 1,
    difficultyLabel: "Beginner",
    time: "20–35 min",
    tips: [
      "Each book is a box — establish the simple box before adding spine details",
      "Books in a stack are rarely perfectly aligned; slight misalignment adds life",
      "Worn spine text can be hinted at with simple marks, not fully rendered",
      "The top edges of pages are excellent for showing cross-hatched paper texture",
      "Shadows between stacked books are thin and dark — a few close parallel lines",
    ],
  },
  {
    prompt: "Rain on Glass",
    searchTerms: "rain window atmosphere",
    description: "Draw a rain-covered window pane from the inside. Streaks, drops, and the blurred world beyond make for a compelling atmospheric study.",
    technique: "Flowing Lines",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    time: "25–40 min",
    tips: [
      "Rain streaks run vertically, but each has its own slight curve and interruptions",
      "Drops lower on the glass are larger; they've collected as they ran down",
      "The scene outside is blurred — suggest shapes with loose, impressionistic hatching",
      "Window frame edges give the composition a strong containing structure",
      "Condensation at the bottom of the pane can be shown with short horizontal smear marks",
    ],
  },
];


function getDailyIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return dayOfYear % challenges.length;
}

export default function Home() {
  const [index, setIndex] = useState(getDailyIndex);
  const [lightboxDrawing, setLightboxDrawing] = useState<GeneratedDrawing | null>(null);

  const challenge = challenges[index];
  const drawings = drawingsData[challenge.prompt] ?? [];

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).toUpperCase();

  function shuffle() {
    setIndex((prev) => {
      let next = prev;
      while (next === prev) next = Math.floor(Math.random() * challenges.length);
      return next;
    });
    setLightboxDrawing(null);
  }

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <header style={{ borderBottom: "1px solid var(--accent-dim)" }}>
        <div
          className="flex items-center justify-between px-6 md:px-10 py-4"
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: "var(--foreground)",
                letterSpacing: "-0.01em",
              }}
            >
              InkWork
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                color: "var(--ink-muted)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Fineliner Challenges
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                color: "var(--ink-muted)",
                letterSpacing: "0.08em",
              }}
            >
              {dateStr}
            </span>
            <button
              onClick={shuffle}
              title="Try a different challenge"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid var(--accent-dim)",
                borderRadius: 3,
                padding: "0.35rem 0.75rem",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "transparent",
              }}
            >
              <ShuffleIcon />
              Shuffle
            </button>
          </div>
        </div>
      </header>

      {/* ── Challenge Hero — dark, full-width ── */}
      <section
        className="rise"
        style={{
          padding: "5rem 1.5rem 4.5rem",
          maxWidth: 1100,
          margin: "0 auto",
          animationDelay: "0ms",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: "var(--accent)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "1.75rem",
          }}
        >
          Today&apos;s Challenge
        </p>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            color: "var(--foreground)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            marginBottom: "2rem",
          }}
        >
          {challenge.prompt}
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.65,
            color: "var(--ink-muted)",
            maxWidth: "48ch",
            marginBottom: "2.5rem",
          }}
        >
          {challenge.description}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <DifficultyMeter level={challenge.difficulty} label={challenge.difficultyLabel} />
          <div
            style={{ width: 1, height: 18, background: "var(--accent)", opacity: 0.35, flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--ink-muted)",
            }}
          >
            {challenge.time}
          </span>
          <div
            style={{ width: 1, height: 18, background: "var(--accent)", opacity: 0.35, flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              borderRadius: 2,
              padding: "0.22rem 0.65rem",
            }}
          >
            {challenge.technique}
          </span>
        </div>
      </section>

      {/* ── Amber rule ── */}
      <div style={{ borderTop: "1px solid var(--accent-dim)", margin: "0 1.5rem" }} />

      {/* ── Paper cards on dark desk ── */}
      <section style={{ padding: "3.5rem 1.5rem 5rem" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "2rem", maxWidth: 1100, margin: "0 auto" }}
        >

          {/* Tips — paper card, slight tilt left */}
          <div
            className="paper-card rise"
            style={{
              borderRadius: 3,
              transform: "rotate(-0.4deg)",
              animationDelay: "120ms",
            }}
          >
            <div style={{ padding: "2rem 2.25rem 2.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  color: "var(--card-muted)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Technique Notes
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "var(--card-ink)",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0d8c8",
                }}
              >
                Tips &amp; Techniques
              </h2>
              <ol style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {challenge.tips.map((tip, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: "var(--accent)",
                        flexShrink: 0,
                        paddingTop: "0.2rem",
                        minWidth: "1.5rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        color: "var(--card-muted)",
                      }}
                    >
                      {tip}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Gallery — paper card, slight tilt right */}
          <div
            className="paper-card rise"
            style={{
              borderRadius: 3,
              transform: "rotate(0.35deg)",
              animationDelay: "220ms",
            }}
          >
            <div style={{ padding: "2rem 2.25rem 2.5rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  color: "var(--card-muted)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Interpretations
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "var(--card-ink)",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e0d8c8",
                }}
              >
                How it can look
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                {drawings.map((drawing, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxDrawing(drawing)}
                    className="group"
                    style={{
                      position: "relative",
                      aspectRatio: "1/1",
                      borderRadius: 2,
                      background: "#fff",
                      border: "1px solid #ddd5c4",
                      overflow: "hidden",
                    }}
                    title={drawing.title}
                  >
                    <div
                      style={{ width: "100%", height: "100%" }}
                      dangerouslySetInnerHTML={{
                        __html: drawing.svg.replace("<svg ", '<svg width="100%" height="100%" '),
                      }}
                    />
                    <div
                      className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        padding: "0.5rem",
                        background: "linear-gradient(to top, rgba(249,245,236,0.97) 0%, transparent 65%)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.55rem",
                          color: "var(--card-ink)",
                          lineHeight: 1.3,
                        }}
                      >
                        {drawing.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.56rem",
                  color: "#b8af9e",
                  letterSpacing: "0.04em",
                  marginTop: "1rem",
                }}
              >
                AI-generated &middot; click any drawing to see the step-by-step guide
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxDrawing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(8,6,3,0.94)" }}
          onClick={() => setLightboxDrawing(null)}
        >
          <div
            className="paper-card"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 680,
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              maxHeight: "90vh",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Amber top bar */}
            <div style={{ height: 3, background: "var(--accent)", flexShrink: 0 }} />

            <div style={{ display: "flex", flexDirection: "row", overflow: "hidden", flex: 1 }}>
              {/* SVG panel */}
              <div
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2.5rem 1.5rem",
                  minWidth: 220,
                  background: "#fff",
                  borderRight: "1px solid #e0d8c8",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: lightboxDrawing.svg.replace("<svg ", '<svg width="200" height="200" '),
                  }}
                />
              </div>

              {/* Steps panel */}
              <div style={{ flex: 1, overflowY: "auto", padding: "2rem 1.75rem 2rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.56rem",
                    color: "var(--card-muted)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}
                >
                  How to draw this
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "var(--card-ink)",
                    lineHeight: 1.2,
                    marginBottom: "1.5rem",
                  }}
                >
                  {lightboxDrawing.title}
                </h3>
                <ol style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {lightboxDrawing.steps.map((step, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--accent)",
                          flexShrink: 0,
                          paddingTop: "0.15rem",
                          minWidth: "1.5rem",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <span style={{ fontSize: "0.88rem", lineHeight: 1.6, color: "var(--card-muted)" }}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <button
              onClick={() => setLightboxDrawing(null)}
              style={{
                position: "absolute",
                top: "0.85rem",
                right: "0.85rem",
                zIndex: 10,
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #ddd5c4",
                borderRadius: 2,
                background: "var(--paper)",
                color: "var(--card-muted)",
              }}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────

function ShuffleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.5-.6-3.3-1.7l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Difficulty meter ───────────────────────────────────

function DifficultyMeter({ level, label }: { level: Difficulty; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--ink-muted)",
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", gap: "0.3rem" }}>
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: dot <= level ? "var(--accent)" : "transparent",
              border: `1px solid ${dot <= level ? "var(--accent)" : "rgba(201,107,26,0.3)"}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
