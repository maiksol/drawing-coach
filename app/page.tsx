"use client";

import { useState, useEffect, useRef } from "react";

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

interface Drawing {
  url: string;
  title: string;
  artist: string;
  objectUrl: string;
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

const MET_API = "https://collectionapi.metmuseum.org/public/collection/v1";

async function fetchDrawings(searchTerms: string): Promise<Drawing[]> {
  // Try Drawings & Prints department first, fall back to all departments
  const queries = [
    `${MET_API}/search?q=${encodeURIComponent(searchTerms)}&isPublicDomain=true&hasImages=true&departmentId=9`,
    `${MET_API}/search?q=${encodeURIComponent(searchTerms)}&isPublicDomain=true&hasImages=true`,
  ];

  let ids: number[] = [];
  for (const url of queries) {
    const res = await fetch(url);
    const data = await res.json();
    if (data.objectIDs?.length) {
      ids = data.objectIDs.slice(0, 12);
      break;
    }
  }
  if (!ids.length) return [];

  const details = await Promise.all(
    ids.map((id) =>
      fetch(`${MET_API}/objects/${id}`)
        .then((r) => r.json())
        .catch(() => null)
    )
  );

  return details
    .filter((d) => d?.primaryImageSmall)
    .slice(0, 4)
    .map((d) => ({
      url: d.primaryImageSmall,
      title: d.title ?? "Untitled",
      artist: d.artistDisplayName ?? "",
      objectUrl: d.objectURL ?? "",
    }));
}

function getDailyIndex() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return dayOfYear % challenges.length;
}

export default function Home() {
  const [index, setIndex] = useState(getDailyIndex);
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [loadingDrawings, setLoadingDrawings] = useState(false);
  const [lightboxDrawing, setLightboxDrawing] = useState<Drawing | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const challenge = challenges[index];

  useEffect(() => {
    abortRef.current?.abort();
    setDrawings([]);
    setLoadingDrawings(true);

    fetchDrawings(challenge.searchTerms).then((results) => {
      setDrawings(results);
      setLoadingDrawings(false);
    });
  }, [challenge.searchTerms]);

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
      <header
        className="flex items-center justify-between px-8 py-4"
        style={{ borderBottom: "1px solid var(--ink-faint)" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center"
            style={{ border: "1.5px solid var(--ink)", borderRadius: 8 }}
          >
            <PenIcon />
          </div>
          <div>
            <div className="font-bold text-xl leading-tight" style={{ fontFamily: "var(--font-serif)", color: "var(--ink)" }}>
              InkWork
            </div>
            <div className="text-xs tracking-widest uppercase" style={{ color: "var(--ink-muted)", letterSpacing: "0.14em" }}>
              Daily Drawing Challenges
            </div>
          </div>
        </div>
        <p className="text-sm italic" style={{ color: "var(--ink-muted)" }}>
          Grab your fineliners &amp; paper
        </p>
      </header>

      {/* ── Hero ── */}
      <section className="py-12 px-8 text-center" style={{ borderBottom: "1px solid var(--ink-faint)" }}>
        <blockquote className="text-3xl italic leading-snug mb-5" style={{ fontFamily: "var(--font-serif)", color: "var(--ink)" }}>
          &ldquo;Every line you draw is a line you&apos;ve practiced.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-5">
          <div className="h-px w-16" style={{ background: "var(--ink-muted)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "var(--ink-muted)", letterSpacing: "0.16em" }}>
            Daily Fineliner Challenges
          </span>
          <div className="h-px w-16" style={{ background: "var(--ink-muted)" }} />
        </div>
      </section>

      {/* ── Main ── */}
      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        {/* Challenge card */}
        <div style={{ border: "1px solid #cec9c0", borderRadius: 12, background: "var(--paper)" }}>
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--ink-muted)", letterSpacing: "0.14em" }}>
                Today&apos;s Challenge
              </span>
              <button
                onClick={shuffle}
                title="Try a different challenge"
                className="w-9 h-9 flex items-center justify-center transition-colors hover:bg-black/5"
                style={{ border: "1px solid #cec9c0", borderRadius: 8 }}
              >
                <ShuffleIcon />
              </button>
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--ink)" }}>
              {challenge.prompt}
            </h1>
            <p className="text-base leading-relaxed mb-7" style={{ color: "#4a4a4a" }}>
              {challenge.description}
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <DifficultyMeter level={challenge.difficulty} label={challenge.difficultyLabel} />
              <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--ink-muted)" }}>
                <ClockIcon />
                <span>{challenge.time}</span>
              </div>
              <span
                className="text-xs tracking-widest uppercase px-3 py-1.5"
                style={{ border: "1px solid var(--ink)", borderRadius: 4, color: "var(--ink)", letterSpacing: "0.12em" }}
              >
                {challenge.technique}
              </span>
            </div>
          </div>
        </div>

        {/* Two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tips */}
          <div style={{ border: "1px solid #cec9c0", borderRadius: 12, background: "var(--paper)" }} className="p-7">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-serif)", color: "var(--ink)" }}>
              <LightbulbIcon />
              Tips &amp; Techniques
            </h2>
            <ol className="space-y-4">
              {challenge.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{ border: "1px solid var(--ink)", color: "var(--ink)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#4a4a4a" }}>{tip}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Inspiration gallery */}
          <div style={{ border: "1px solid #cec9c0", borderRadius: 12, background: "var(--paper)" }} className="p-7">
            <h2
              className="text-xs tracking-widest uppercase font-medium mb-5 flex items-center gap-2"
              style={{ color: "var(--ink-muted)", letterSpacing: "0.14em" }}
            >
              <GalleryIcon />
              Inspiration Gallery
            </h2>

            {loadingDrawings ? (
              <div className="grid grid-cols-2 gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse"
                    style={{ aspectRatio: "4/3", borderRadius: 6, background: "var(--paper-dark)" }}
                  />
                ))}
              </div>
            ) : drawings.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center gap-2"
                style={{ aspectRatio: "4/3", background: "var(--paper-dark)", borderRadius: 8, border: "1px solid #cec9c0" }}
              >
                <GalleryIcon size={28} />
                <span className="text-sm" style={{ color: "var(--ink-muted)" }}>No drawings found</span>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {drawings.map((drawing, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxDrawing(drawing)}
                    className="group relative overflow-hidden"
                    style={{ aspectRatio: "4/3", borderRadius: 6, background: "var(--paper-dark)" }}
                    title={drawing.title}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={drawing.url}
                      alt={drawing.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity p-2"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
                    >
                      <span className="text-white text-xs leading-tight line-clamp-2">{drawing.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <p className="text-xs italic mt-3" style={{ color: "var(--ink-muted)" }}>
              Works from The Metropolitan Museum of Art · Public domain
            </p>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxDrawing && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightboxDrawing(null)}
        >
          <button
            onClick={() => setLightboxDrawing(null)}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center"
            style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8 }}
          >
            <CloseIcon />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightboxDrawing.url.replace("primaryImageSmall", "primaryImage")}
            alt={lightboxDrawing.title}
            className="max-w-full max-h-[80vh] object-contain"
            style={{ borderRadius: 4, boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-white text-sm font-medium">{lightboxDrawing.title}</p>
            {lightboxDrawing.artist && (
              <p className="text-white/60 text-xs mt-1">{lightboxDrawing.artist}</p>
            )}
            {lightboxDrawing.objectUrl && (
              <a
                href={lightboxDrawing.objectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-xs mt-1 underline inline-block hover:text-white/70"
              >
                View on metmuseum.org
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────

function PenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

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

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
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

function GalleryIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

// ── Difficulty meter ───────────────────────────────────

function DifficultyMeter({ level, label }: { level: Difficulty; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--ink-muted)" }}>
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
      <span className="text-sm" style={{ color: "var(--ink-muted)" }}>{label}</span>
      <div className="flex gap-1 ml-1">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: dot <= level ? "var(--ink)" : "transparent",
              border: `1px solid ${dot <= level ? "var(--ink)" : "#aaa"}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
