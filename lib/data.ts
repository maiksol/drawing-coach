export type Difficulty = "beginner" | "intermediate" | "advanced";
export type Category = "animals" | "people" | "landscapes" | "objects" | "still life";

export interface Prompt {
  id: number;
  text: string;
  category: Category;
  difficulty: Difficulty;
  tips: string[];
}

export interface GuideStep {
  step: number;
  instruction: string;
  hint: string;
}

export interface Guide {
  id: number;
  title: string;
  difficulty: Difficulty;
  timeEstimate: string;
  intro: string;
  steps: GuideStep[];
}

export interface Tip {
  id: number;
  title: string;
  category: string;
  body: string;
  keyPoints: string[];
}

export const prompts: Prompt[] = [
  {
    id: 1,
    text: "Draw a sleeping cat curled into a ball",
    category: "animals",
    difficulty: "beginner",
    tips: ["Start with a simple oval for the body", "Add the tail wrapping around", "Use soft curved lines for fur"],
  },
  {
    id: 2,
    text: "Draw a mug of coffee with steam rising",
    category: "objects",
    difficulty: "beginner",
    tips: ["Draw the mug as a cylinder", "Add an oval at the top for the opening", "Use wavy lines for steam"],
  },
  {
    id: 3,
    text: "Draw a simple house with a tree beside it",
    category: "landscapes",
    difficulty: "beginner",
    tips: ["Use basic shapes: rectangle for house, triangle for roof", "Trees can start as a lollipop shape", "Add a path leading to the door"],
  },
  {
    id: 4,
    text: "Draw a pair of worn sneakers",
    category: "objects",
    difficulty: "intermediate",
    tips: ["Study the shape of the sole first", "Notice how the laces create a pattern", "Add shading under the tongue for depth"],
  },
  {
    id: 5,
    text: "Draw a human hand holding a pencil",
    category: "people",
    difficulty: "intermediate",
    tips: ["Block out the palm as a rough square first", "Draw fingers as cylinders, then refine", "Pay attention to the knuckle joints"],
  },
  {
    id: 6,
    text: "Draw a bowl of fruit with at least three different fruits",
    category: "still life",
    difficulty: "beginner",
    tips: ["Sketch the bowl shape first", "Place the largest fruit first, then fill in", "Add cast shadows for realism"],
  },
  {
    id: 7,
    text: "Draw a bird in flight from the front",
    category: "animals",
    difficulty: "intermediate",
    tips: ["Start with a teardrop for the body", "Wings curve up from the body then taper", "The tail fans out like a wedge"],
  },
  {
    id: 8,
    text: "Draw a cityscape with at least five buildings",
    category: "landscapes",
    difficulty: "intermediate",
    tips: ["Establish a horizon line first", "Vary building heights for interest", "Windows can be simple rectangles"],
  },
  {
    id: 9,
    text: "Draw a face in three-quarter view",
    category: "people",
    difficulty: "advanced",
    tips: ["The far eye is smaller due to perspective", "The nose points slightly to the far side", "The mouth follows the curve of the face"],
  },
  {
    id: 10,
    text: "Draw a tree with visible bark texture and roots",
    category: "landscapes",
    difficulty: "advanced",
    tips: ["Roots flare out from the base", "Bark lines follow the trunk's cylinder shape", "Vary line weight — heavier at the base"],
  },
  {
    id: 11,
    text: "Draw a stack of three books",
    category: "still life",
    difficulty: "beginner",
    tips: ["Draw each book as a flat box shape", "Angle them slightly for interest", "Add titles on the spines"],
  },
  {
    id: 12,
    text: "Draw a horse in a walking pose",
    category: "animals",
    difficulty: "advanced",
    tips: ["Start with the ribcage and hip as two ovals", "Connect with the spine curve", "Legs are long — use stick figures first"],
  },
  {
    id: 13,
    text: "Draw a lit candle with wax drips",
    category: "objects",
    difficulty: "beginner",
    tips: ["The flame is an elongated teardrop", "Light comes from the flame — shade accordingly", "Wax drips follow gravity"],
  },
  {
    id: 14,
    text: "Draw a person sitting cross-legged",
    category: "people",
    difficulty: "intermediate",
    tips: ["Block in the torso as a rectangle first", "Crossed legs form a diamond shape", "The feet tuck under the opposite knee"],
  },
  {
    id: 15,
    text: "Draw a lighthouse on a rocky cliff",
    category: "landscapes",
    difficulty: "intermediate",
    tips: ["The lighthouse is a tapered cylinder", "Rocks are irregular — avoid perfect shapes", "Add the light beam as radiating lines"],
  },
  {
    id: 16,
    text: "Draw a glass of water with ice cubes",
    category: "still life",
    difficulty: "intermediate",
    tips: ["Glass is transparent — draw what's inside too", "Ice cubes are irregular rectangles", "Reflections show as white highlights"],
  },
  {
    id: 17,
    text: "Draw a dragon head in profile",
    category: "animals",
    difficulty: "advanced",
    tips: ["Start with a basic skull shape", "Add the snout as a protruding box", "Horns grow back and curve slightly"],
  },
  {
    id: 18,
    text: "Draw a bicycle",
    category: "objects",
    difficulty: "intermediate",
    tips: ["Two circles for wheels first", "The frame forms a diamond between them", "The handlebars are a curved T shape"],
  },
  {
    id: 19,
    text: "Draw a person running",
    category: "people",
    difficulty: "advanced",
    tips: ["The body leans forward when running", "Opposite arm and leg swing together", "One foot is always off the ground"],
  },
  {
    id: 20,
    text: "Draw a mushroom in a forest setting",
    category: "landscapes",
    difficulty: "beginner",
    tips: ["Cap is a dome, stem is a cylinder", "Add spots to the cap for detail", "Grass and leaves frame the base"],
  },
];

export const guides: Guide[] = [
  {
    id: 1,
    title: "How to Draw a Face (Front View)",
    difficulty: "beginner",
    timeEstimate: "20–30 min",
    intro:
      "The key to drawing faces is understanding their underlying structure. Faces are more symmetrical and proportional than we think. Follow these steps to build a solid foundation.",
    steps: [
      {
        step: 1,
        instruction: "Draw an oval",
        hint: "Make it slightly wider at the top than the bottom. This is the skull and face outline.",
      },
      {
        step: 2,
        instruction: "Add a vertical center line",
        hint: "Draw a light vertical line down the middle. This ensures symmetry throughout.",
      },
      {
        step: 3,
        instruction: "Add horizontal guidelines",
        hint: "Draw a line halfway down (eye line), halfway between eyes and chin (nose line), and halfway between nose and chin (mouth line).",
      },
      {
        step: 4,
        instruction: "Place the eyes",
        hint: "Eyes sit on the eye line, spaced one eye-width apart. The average face is five eye-widths wide.",
      },
      {
        step: 5,
        instruction: "Draw the nose",
        hint: "The nose base sits on the nose line. The nostrils are roughly as wide as the inner corners of the eyes.",
      },
      {
        step: 6,
        instruction: "Add the mouth",
        hint: "The mouth center sits on the mouth line. The corners of the mouth align with the center of each eye.",
      },
      {
        step: 7,
        instruction: "Draw the ears",
        hint: "Ears sit between the eye line and nose line on each side of the head.",
      },
      {
        step: 8,
        instruction: "Add hair and refine",
        hint: "Erase guidelines, refine your lines, and add hair starting from the hairline (about one eye-height above the eye line).",
      },
    ],
  },
  {
    id: 2,
    title: "How to Draw a Hand",
    difficulty: "intermediate",
    timeEstimate: "25–35 min",
    intro:
      "Hands are notoriously difficult but become much easier once you understand their basic geometry. Think of a hand as simple shapes before adding detail.",
    steps: [
      {
        step: 1,
        instruction: "Draw the palm as a rough square or rectangle",
        hint: "The palm is not a flat slab — it's slightly wider at the knuckles. Keep it loose.",
      },
      {
        step: 2,
        instruction: "Mark the knuckle positions",
        hint: "Draw small dots or a curved arc where each finger begins. The middle finger starts highest, with index and ring slightly lower, and pinky lowest.",
      },
      {
        step: 3,
        instruction: "Sketch the fingers as simple cylinders",
        hint: "Each finger has three segments. The first segment (from palm) is the longest, the tip is the shortest.",
      },
      {
        step: 4,
        instruction: "Add the thumb",
        hint: "The thumb connects lower on the palm and has two segments. It can rotate much more than fingers.",
      },
      {
        step: 5,
        instruction: "Add knuckle detail",
        hint: "Knuckles are slightly flat when fingers are relaxed, more prominent when fist is made. Add a subtle curved line at each joint.",
      },
      {
        step: 6,
        instruction: "Refine and add nails",
        hint: "Nails are roughly rectangular and sit on the top of the fingertip. They don't cover the whole tip.",
      },
    ],
  },
  {
    id: 3,
    title: "How to Draw a Tree",
    difficulty: "beginner",
    timeEstimate: "15–20 min",
    intro:
      "Trees seem complex but follow a simple branching logic. Learning to draw a convincing tree teaches you to see organic structure in nature.",
    steps: [
      {
        step: 1,
        instruction: "Draw the trunk",
        hint: "Start wide at the base and narrow as it rises. Trunks are not perfectly straight — a subtle curve adds life.",
      },
      {
        step: 2,
        instruction: "Add main branches",
        hint: "Branches split from the top of the trunk. Each branch is thinner than the trunk. They spread upward and outward.",
      },
      {
        step: 3,
        instruction: "Add secondary branches",
        hint: "Smaller branches split off the main ones. Remember: branches always get thinner as they split.",
      },
      {
        step: 4,
        instruction: "Sketch the canopy outline",
        hint: "Draw a loose, irregular cloud shape around the outer branches. Avoid making it perfectly round.",
      },
      {
        step: 5,
        instruction: "Add foliage texture",
        hint: "Use small curved lines or clusters of C-shapes inside the canopy outline. Leave some gaps — light passes through leaves.",
      },
      {
        step: 6,
        instruction: "Add roots and ground detail",
        hint: "Roots flare out from the base. Add a shadow on the ground beneath the canopy.",
      },
    ],
  },
  {
    id: 4,
    title: "How to Draw a Cat",
    difficulty: "beginner",
    timeEstimate: "15–20 min",
    intro:
      "Cats have a distinctive rounded, compact body. Breaking them into simple shapes first makes capturing their form much easier.",
    steps: [
      {
        step: 1,
        instruction: "Draw a circle for the head",
        hint: "Cats have large, round heads relative to their body. Keep this circle fairly large.",
      },
      {
        step: 2,
        instruction: "Draw an oval for the body",
        hint: "Position it below and slightly to the side of the head. The body oval is larger than the head.",
      },
      {
        step: 3,
        instruction: "Add ear triangles",
        hint: "Ears are wide triangles sitting on top of the head. They have a slight inner triangle for the inside of the ear.",
      },
      {
        step: 4,
        instruction: "Place the face features",
        hint: "Eyes are large ovals sitting on the upper half of the face. The nose is a tiny triangle. Mouth is a small Y-shape below.",
      },
      {
        step: 5,
        instruction: "Add legs and paws",
        hint: "Front legs are short columns below the chest. Back legs fold at a sharp angle. Paws are simple oval clusters.",
      },
      {
        step: 6,
        instruction: "Add the tail",
        hint: "The tail is long and tapers to a point. It can wrap around the body or curve upward.",
      },
      {
        step: 7,
        instruction: "Refine with fur texture",
        hint: "Use short, light strokes following the body's form. Fur is denser around the cheeks and chest.",
      },
    ],
  },
  {
    id: 5,
    title: "How to Draw a Simple Room in Perspective",
    difficulty: "intermediate",
    timeEstimate: "30–40 min",
    intro:
      "One-point perspective lets you draw convincing 3D spaces. A room interior is the perfect first perspective exercise.",
    steps: [
      {
        step: 1,
        instruction: "Draw a rectangle for the back wall",
        hint: "This rectangle represents the far wall of the room. Place it roughly in the center of your page.",
      },
      {
        step: 2,
        instruction: "Mark a vanishing point",
        hint: "Place a dot in the center of the back wall rectangle. This is where all perspective lines will meet.",
      },
      {
        step: 3,
        instruction: "Draw lines from corners to vanishing point",
        hint: "Connect each corner of the back wall to the vanishing point. These become the walls, floor, and ceiling edges.",
      },
      {
        step: 4,
        instruction: "Define the room boundaries",
        hint: "Draw vertical and horizontal lines across the perspective lines to define where the room ends — creating the side walls, floor, and ceiling.",
      },
      {
        step: 5,
        instruction: "Add a door or window to the back wall",
        hint: "Keep them rectangular and centered. Their top edges should be at the same height.",
      },
      {
        step: 6,
        instruction: "Add simple furniture",
        hint: "All furniture edges must go toward the vanishing point. A box in perspective works for any piece of furniture.",
      },
      {
        step: 7,
        instruction: "Add floor lines and details",
        hint: "Floor boards or tiles all converge at the vanishing point. Add these last for a polished look.",
      },
    ],
  },
];

export const tips: Tip[] = [
  {
    id: 1,
    title: "Line Weight Variation",
    category: "Line Work",
    body:
      "Line weight is the variation in thickness of your lines. Using a single uniform line weight makes drawings look flat. Varying your line weight adds depth, emphasis, and a sense of light.",
    keyPoints: [
      "Use heavier lines for outlines and foreground objects",
      "Use lighter lines for background details and interior form lines",
      "Pressed harder lines tend to come forward; lighter lines recede",
      "Lines closest to a light source should be thinnest",
    ],
  },
  {
    id: 2,
    title: "Basic Shading: Hatching & Cross-Hatching",
    category: "Shading",
    body:
      "Hatching is drawing parallel lines to create the illusion of shadow and tone. Cross-hatching adds a second layer of lines at an angle to deepen shadow. These are core pencil skills.",
    keyPoints: [
      "Hatch lines should follow the form of the object (e.g., curve around a sphere)",
      "Closer lines = darker shadow; spaced lines = lighter shadow",
      "Cross-hatch at 45° or 90° to your first set of lines",
      "Avoid pressing hard — build up tone with layers",
    ],
  },
  {
    id: 3,
    title: "Drawing Proportions with Measuring",
    category: "Proportions",
    body:
      "Artists use their pencil as a measuring tool to compare sizes and angles in their subject. This technique — called sight-sizing — dramatically improves accuracy.",
    keyPoints: [
      "Hold your pencil at arm's length, close one eye, and align the tip with the top of your subject",
      "Slide your thumb to mark the bottom — this is your unit of measurement",
      "Compare other parts of the subject to this unit",
      "Transfer these ratios to your drawing",
    ],
  },
  {
    id: 4,
    title: "Understanding Light and Shadow",
    category: "Shading",
    body:
      "Every object has a light side, a shadow side, and a cast shadow. Understanding these three zones lets you make any drawing look three-dimensional.",
    keyPoints: [
      "Identify your light source before shading anything",
      "The light side is the brightest — leave this mostly unshaded",
      "The shadow side is the darkest part of the object itself",
      "The cast shadow falls on the ground or nearby surfaces",
      "There's often a reflected light on the edge of the shadow side",
    ],
  },
  {
    id: 5,
    title: "Gesture Drawing",
    category: "Figure Drawing",
    body:
      "Gesture drawing is drawing quickly to capture the movement, energy, and flow of a pose rather than the details. It's one of the most important skills for drawing people and animals.",
    keyPoints: [
      "Draw with your whole arm, not just your wrist",
      "Focus on the line of action — the main curve running through the body",
      "30-second to 2-minute gestures train your eye and hand speed",
      "Don't worry about accuracy — worry about energy",
      "Practice daily, even if just 10 minutes",
    ],
  },
  {
    id: 6,
    title: "One-Point Perspective Basics",
    category: "Perspective",
    body:
      "Perspective is how we represent 3D space on a flat surface. One-point perspective uses a single vanishing point on the horizon line. Almost all interior scenes and road/street views use this.",
    keyPoints: [
      "The horizon line is always at the viewer's eye level",
      "All lines going 'into' the scene meet at the vanishing point",
      "Vertical lines stay vertical; horizontal lines stay horizontal",
      "Objects closer to the horizon appear smaller",
    ],
  },
  {
    id: 7,
    title: "The Importance of Negative Space",
    category: "Observation",
    body:
      "Negative space is the space around and between subjects. Learning to draw the negative shapes (instead of the object itself) is a powerful technique that improves accuracy dramatically.",
    keyPoints: [
      "Instead of drawing the chair, draw the shapes of space between the legs",
      "Negative space helps you see what's actually there vs. what you expect to see",
      "It's especially useful for complex or unfamiliar shapes",
      "Alternate between drawing the subject and the negative space",
    ],
  },
  {
    id: 8,
    title: "Using Basic Shapes as Building Blocks",
    category: "Construction",
    body:
      "Every complex object can be broken down into basic shapes: spheres, cylinders, boxes, and cones. Professional artists think in these forms, not in outlines.",
    keyPoints: [
      "Sketch the basic shapes first, lightly, before adding detail",
      "A head is a sphere, a torso is a box, limbs are cylinders",
      "Build complex objects by combining simpler forms",
      "Don't erase the underlying shapes — refine over them",
    ],
  },
  {
    id: 9,
    title: "Composition: The Rule of Thirds",
    category: "Composition",
    body:
      "The rule of thirds divides your page into a 3x3 grid. Placing key elements along these lines or at their intersections creates a more visually interesting composition than centering everything.",
    keyPoints: [
      "Imagine your page divided by two horizontal and two vertical lines",
      "Place your main subject at one of the four intersection points",
      "Horizons look best on the top or bottom third line, not the middle",
      "Leading lines (roads, fences) can guide the eye toward the subject",
    ],
  },
  {
    id: 10,
    title: "Warm Up Before Drawing",
    category: "Practice",
    body:
      "Just like a musician does scales, drawing warm-ups build muscle memory and loosen your hand. Spending 5 minutes on exercises before your main drawing improves quality significantly.",
    keyPoints: [
      "Draw straight lines from point to point without a ruler",
      "Draw circles and ellipses freehand — repeat many times",
      "Practice curves in both directions",
      "Draw parallel lines evenly spaced across the page",
    ],
  },
];

export function getDailyPrompt(): Prompt {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return prompts[dayOfYear % prompts.length];
}
