export interface GeneratedDrawing {
  title: string;
  svg: string;
  steps: string[];
}

export const drawingsData: Record<string, GeneratedDrawing[]> = {
  "Crumpled Paper Study": [
    {
      title: "Overhead Folds",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="80" ry="75" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="100" y2="175" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="30" y2="140" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="170" y2="140" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="22" y2="90" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="178" y2="90" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="55" y2="165" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="145" y2="165" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="30" y1="140" x2="55" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="35" y1="145" x2="60" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="150" x2="65" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="170" y1="140" x2="148" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="165" y1="145" x2="143" y2="93" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="160" y1="148" x2="138" y2="96" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="100" cy="30" r="2.5" fill="#111" stroke="none"/>
</svg>`,
      steps: [
        "Draw a large oval shape to represent the paper boundary viewed from above.",
        "Mark a center point near the top-center of the oval — this is the peak of the crumple.",
        "Draw 7-8 straight lines radiating outward from the center point to the oval edge, spacing them unevenly to look natural.",
        "Add 3-4 short parallel hatching lines between pairs of fold lines in the shadowed wedge sections to suggest depth.",
        "Place a small filled circle at the center peak point to emphasize the highest point of the crumple."
      ]
    },
    {
      title: "Peak and Shadow",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,160 L80,60 L160,110 L180,160 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80,60 L160,110" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="160" y1="110" x2="180" y2="160" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="110" y1="115" x2="130" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="118" y1="112" x2="138" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="126" y1="110" x2="146" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="134" y1="110" x2="154" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="142" y1="110" x2="162" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="150" y1="112" x2="170" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="160" x2="180" y2="160" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="25" y1="155" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="140" x2="90" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a horizontal baseline across the lower portion of the paper for the table surface.",
        "From a point on the left, draw a diagonal line rising to a sharp peak near the upper-center — this is the main fold ridge.",
        "From the peak, draw a line descending to the right side, creating the lit face of the crumple.",
        "Draw the shadow face on the right side: add 6 parallel diagonal lines close together filling the right-facing plane.",
        "Add 2-3 lighter diagonal lines on the left lit face to suggest gentle curvature without heavy shadow."
      ]
    },
    {
      title: "Corner Detail",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M40,30 L160,30 L160,170 L40,170 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M40,30 Q100,80 130,130 L160,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M40,30 Q60,90 80,140 L40,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M160,30 Q140,80 120,120 L100,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="55" y1="60" x2="75" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="68" x2="80" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="65" y1="76" x2="85" y2="96" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="70" y1="84" x2="90" y2="104" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="75" y1="92" x2="95" y2="112" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="100" x2="100" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="60" x2="130" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="115" y1="68" x2="135" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="120" y1="76" x2="140" y2="96" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="125" y1="84" x2="145" y2="104" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="50" y1="130" x2="80" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="132" x2="85" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="66" y1="134" x2="90" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a large rectangle filling most of the frame — this is your close-up view of the paper corner.",
        "Draw 3 curved crease lines that converge toward the lower-left corner of the rectangle, like spokes toward a hub.",
        "Add dense parallel hatching (6 lines, about 7px apart) in the darkest triangular wedge between two crease lines.",
        "Add a second group of 4-5 hatching lines in a lighter wedge area, spaced slightly wider to show mid-tone shadow.",
        "Sketch 3 more hatching lines near the bottom corner to show the deepest shadow where the paper folds under itself."
      ]
    },
    {
      title: "Flat Planes",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,30 170,90 140,170 60,170 30,90" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="60" y2="170" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="140" y2="170" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="30" y1="90" x2="140" y2="170" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="38" y1="115" x2="62" y2="125" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="34" y1="123" x2="62" y2="134" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="31" y1="131" x2="61" y2="142" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="32" y1="139" x2="60" y2="150" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="35" y1="147" x2="58" y2="158" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="115" y1="90" x2="138" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="118" y1="98" x2="142" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="120" y1="106" x2="143" y2="116" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="122" y1="114" x2="143" y2="122" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw an irregular pentagon outline — not perfectly regular — to suggest a crumpled sheet seen from a slight angle.",
        "Draw two lines from the top vertex down through the shape, dividing it into three distinct facets.",
        "Add one more line cutting across the lower portion to create a fourth plane at a different angle.",
        "Fill the left-side facet with 5 horizontal hatching lines to make it the darkest plane.",
        "Add 4 diagonal hatching lines in the right-side facet at a different angle, leaving the top-center plane completely white as the lightest surface."
      ]
    }
  ],

  "Twisted Roots": [
    {
      title: "Twin Roots",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M60,20 C55,60 70,80 65,120 C63,140 60,155 55,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M75,20 C80,60 65,80 70,120 C72,140 75,155 80,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M120,20 C115,55 130,75 125,115 C123,138 120,155 115,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M135,20 C140,55 125,75 130,115 C132,138 135,155 140,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="20" y1="160" x2="180" y2="160" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M20,160 Q100,150 180,160" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="90" x2="75" y2="90" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="120" y1="85" x2="135" y2="85" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="63" y1="70" x2="72" y2="68" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="77" x2="73" y2="75" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="123" y1="65" x2="132" y2="63" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="122" y1="72" x2="133" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="122" y1="79" x2="133" y2="77" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the soil line as a slightly undulating horizontal line about two-thirds down the page.",
        "Draw the left root as two parallel curved lines that twist toward each other in the middle and diverge again above the soil.",
        "Draw the right root the same way, slightly offset in timing so the twist happens at a different height than the left root.",
        "Add short horizontal texture lines between each pair of root outlines to show the cylindrical surface catching light.",
        "Sketch 3-4 small wispy lines below the soil line and a subtle horizon curve to suggest loose earth."
      ]
    },
    {
      title: "Single Spiral",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,15 C130,15 155,40 155,70 C155,100 130,120 100,120 C70,120 50,100 50,75 C50,55 65,42 80,42" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80,42 C90,42 100,50 100,60 C100,70 92,78 82,78" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M82,78 L75,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,15 L95,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="20" y1="165" x2="180" y2="165" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="110" y1="50" x2="140" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="112" y1="58" x2="142" y2="68" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="114" y1="66" x2="143" y2="76" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="112" y1="74" x2="140" y2="84" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="108" y1="82" x2="134" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="85" y1="105" x2="105" y2="115" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="82" y1="113" x2="102" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a thick vertical root coming down from the top of the frame, then curving into a large spiral coil that loops forward toward you.",
        "Draw the outer edge of the coil as a wide C-shape curving from upper-right, around the bottom, and back up on the left.",
        "Add the inner spiral line running parallel inside, terminating before the root descends again on the left side.",
        "Hatch the inner-shadow area of the coil with 5 parallel lines following the curve to make it look three-dimensional.",
        "Draw the soil line near the bottom with the root emerging from it, and add a few short earth-texture strokes around it."
      ]
    },
    {
      title: "Root Network",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="120" x2="180" y2="120" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,20 L100,118" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,50 C80,60 50,70 20,80" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,50 C120,60 150,70 180,80" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,75 C70,85 40,100 15,118" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,75 C130,85 160,100 185,118" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M50,70 C40,85 30,100 25,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M150,70 C160,85 170,100 175,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M20,80 C15,92 12,105 10,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M180,80 C185,92 188,105 190,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,95 C85,105 70,112 55,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,95 C115,105 130,112 145,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="130" x2="170" y2="130" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="140" x2="180" y2="140" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a single thick root descending straight down from the top center — this is the taproot.",
        "At about one-third down, branch two roots left and right in gentle curves, like arms spreading outward.",
        "From the same point a bit lower, add two more branches at a steeper downward angle.",
        "Continue branching: from each of the four main branches, draw 1-2 thinner curving sub-roots spreading further.",
        "Draw the soil line crossing the page and add two horizontal texture lines below it to suggest packed earth around the roots."
      ]
    },
    {
      title: "Ground Break",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,130 C50,125 70,115 85,100 L100,80 L115,100 C130,115 150,125 180,130" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M20,138 C50,133 70,123 85,108 L100,88 L115,108 C130,123 150,133 180,138" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M85,100 C82,70 78,40 75,15" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M115,100 C118,70 122,40 125,15" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="75" y1="15" x2="125" y2="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="80" y1="40" x2="90" y2="38" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="79" y1="50" x2="89" y2="48" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="60" x2="88" y2="58" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="77" y1="70" x2="87" y2="68" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="145" x2="170" y2="145" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="158" x2="180" y2="158" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="15" y1="170" x2="185" y2="170" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M60,125 C55,130 50,138 48,148" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M140,125 C145,130 150,138 152,148" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the soil surface as a curved line that dips down in the center — as if being pushed up and broken by something below.",
        "Add a second parallel line just below it, slightly offset, to show the thickness of the broken earth.",
        "Draw the thick root emerging upward through the broken gap: two parallel vertical lines rising from the dip to the top of the frame.",
        "Add 4 short horizontal texture lines on the root surface to show its cylindrical bark texture.",
        "Sketch 3-4 horizontal earth-texture lines below the soil surface and two small cracked-earth lines spreading outward from the break point."
      ]
    }
  ],

  "Weathered Door": [
    {
      title: "Full Door",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="35" y="20" width="130" height="175" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="45" y="30" width="110" height="165" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="55" y="40" width="40" height="55" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="105" y="40" width="40" height="55" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="55" y="110" width="90" height="70" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="148" cy="148" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="148" y1="143" x2="148" y2="138" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M33,195 L167,195" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="57" y1="42" x2="63" y2="48" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="93" y1="42" x2="87" y2="48" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="57" y1="93" x2="63" y2="87" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="93" y1="93" x2="87" y2="87" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="57" y1="112" x2="63" y2="118" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="143" y1="112" x2="137" y2="118" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="57" y1="178" x2="63" y2="172" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="143" y1="178" x2="137" y2="172" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the outer door frame as a tall rectangle, slightly wider at the top, with the right edge very slightly not-vertical to suggest an old lean.",
        "Add the inner door face rectangle inset about 10mm inside the frame on all sides.",
        "Draw two raised panels in the upper half and one large panel in the lower half using inset rectangles.",
        "Add a door handle as a small circle with a short vertical line extending upward for the lever.",
        "Mark small diagonal lines in each panel corner to suggest the beveled molding shadow, and draw a doorstep line at the base."
      ]
    },
    {
      title: "Door Handle",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="30" width="80" height="140" rx="5" ry="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="85" rx="18" ry="18" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="85" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M82,85 L40,85 C35,85 30,88 30,93 C30,98 35,102 40,102 L82,102" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="80" y1="130" x2="120" y2="130" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="88" y="120" width="24" height="40" rx="12" ry="12" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="133" rx="5" ry="8" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="62" y1="40" x2="68" y2="46" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="48" x2="68" y2="54" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="56" x2="68" y2="62" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="132" y1="40" x2="126" y2="46" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="132" y1="48" x2="126" y2="54" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the escutcheon plate as a tall rounded rectangle centered in the frame — this is the metal backing plate.",
        "Draw the round door knob as a circle in the upper portion of the plate, with a smaller concentric circle inside it.",
        "Draw the handle lever extending to the left from the knob: a horizontal bar that curves slightly downward at the end.",
        "Below the knob, draw the keyhole escutcheon: a small rounded rectangle with an oval keyhole shape inside it.",
        "Add 3 short parallel diagonal lines in the upper corners of the plate and along the lever to show worn metal reflections."
      ]
    },
    {
      title: "Paint Peeling",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="160" height="160" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M60,80 C55,70 65,60 75,65 C80,55 90,58 88,68 C95,65 100,75 93,80 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M110,60 C108,50 118,45 125,52 C130,45 140,48 138,58 C145,56 148,66 140,70 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M70,120 C65,110 80,105 85,115 C90,108 100,112 96,122 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="50" y1="90" x2="100" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="45" y1="97" x2="98" y2="97" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="42" y1="104" x2="95" y2="104" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="111" x2="92" y2="111" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="118" x2="65" y2="118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M80,140 C85,150 90,155 80,160" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,135 C108,143 112,152 105,158" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M120,130 C130,140 133,150 126,157" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M140,125 C152,135 155,147 147,155" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the door panel outline as a rectangle taking up most of the frame.",
        "Draw 3 curling paint chip shapes — each one is a small irregular closed curve with one edge lifting away from the surface like a peeling edge.",
        "Add 4-5 crack lines radiating from the base of the largest paint chip, tapering to fine points.",
        "Fill the shadow under the largest peeling chip with 4 parallel horizontal hatching lines.",
        "Add 4 long vertical crack lines across the lower portion of the panel to show the weathered wood grain beneath."
      ]
    },
    {
      title: "Step and Threshold",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="80" x2="170" y2="80" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="30" y1="80" x2="30" y2="200" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="170" y1="80" x2="170" y2="200" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="20" y1="130" x2="180" y2="130" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="20" y1="130" x2="20" y2="200" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="180" y1="130" x2="180" y2="200" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="20" y1="200" x2="180" y2="200" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="30" y1="83" x2="170" y2="83" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="32" y1="88" x2="168" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="35" y1="94" x2="165" y2="94" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="38" y1="100" x2="162" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="106" x2="160" y2="106" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="42" y1="112" x2="158" y2="112" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="120" x2="60" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="120" x2="160" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="82" x2="55" y2="130" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="145" y1="82" x2="145" y2="130" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="25" y1="135" x2="175" y2="135" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="22" y1="145" x2="178" y2="145" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="22" y1="155" x2="178" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="22" y1="165" x2="178" y2="165" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the bottom edge of the door as a horizontal line about one-third from the top of the frame, with the two door-side vertical lines dropping from it.",
        "Draw the doorstep below as a wider rectangle protruding slightly beyond the door width on both sides.",
        "Add 6 close horizontal hatching lines in the vertical face of the step to show its worn front surface.",
        "Draw 2 vertical lines on the door face suggesting the door panel joints, and a small gap line at the very base of the door.",
        "Fill the step top surface with 4 horizontal lines spaced slightly wider, and add a few scuff-mark curves near the center where feet land."
      ]
    }
  ],

  "Old Hands": [
    {
      title: "Knuckles Down",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M40,140 C40,100 50,80 65,75 L80,72 L100,70 L120,72 L140,75 C155,80 160,100 160,140 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M65,75 C63,60 65,45 68,35 C70,28 78,25 83,30 C86,20 94,18 100,22 C106,18 114,20 117,30 C122,25 130,28 132,35 C135,45 137,60 135,75" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="70" cy="75" rx="7" ry="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="90" cy="72" rx="7" ry="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="110" cy="72" rx="7" ry="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="130" cy="75" rx="7" ry="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="60" y1="80" x2="150" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="90" x2="155" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="52" y1="100" x2="158" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M55" y1="115" x2="85" y2="115" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="115" x2="85" y2="115" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="115" y1="115" x2="145" y2="115" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="125" x2="80" y2="125" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="120" y1="125" x2="140" y2="125" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="155" x2="180" y2="155" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the overall back-of-hand shape as a wide dome, widest across the knuckles and tapering toward the wrist.",
        "Draw 4 finger outlines rising from the knuckle line, each slightly curved, with rounded tips.",
        "Draw 4 knuckle bumps as small horizontal ovals sitting on top of the hand where each finger meets.",
        "Add 3 horizontal lines below the knuckles to show the tendons running down the back of the hand.",
        "Sketch 2 short parallel lines across each knuckle oval and a few wiggly wrinkle lines near the wrist."
      ]
    },
    {
      title: "Open Palm",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M60,175 C55,145 52,110 55,90 C58,70 70,65 80,70 L80,35 C80,28 88,25 93,30 L93,20 C93,13 107,13 107,20 L107,30 C112,25 120,28 120,35 L120,50 C125,44 135,46 137,55 L137,80 C145,75 155,80 155,95 C155,115 145,135 140,155 C138,165 135,175 130,180" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M60,175 L130,180" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M65,130 C80,125 120,125 140,130" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M62,145 C80,140 122,140 142,145" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M60,158 C75,155 125,155 138,158" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M70,100 C90,95 110,95 130,100" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M72,108 C88,105 112,105 132,108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="83" y1="55" x2="88" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="97" y1="50" x2="100" y2="62" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="52" x2="112" y2="64" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="122" y1="58" x2="124" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the palm outline: a rounded rectangle for the hand body, with four finger outlines rising from the top at slightly different heights.",
        "Add the thumb on the right side curving outward and slightly forward.",
        "Draw three curved palm lines across the palm — the head line, heart line, and life line — each one a gentle arc.",
        "Add 2 short horizontal crease lines across each finger at the two knuckle joints.",
        "Sketch 2-3 faint lines across the wrist area and a small oval fingernail at the tip of each finger."
      ]
    },
    {
      title: "Grasping",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,80 C45,90 48,105 55,115 L70,130 C80,142 95,148 110,145 L145,138 C160,133 168,120 165,105 C163,95 155,88 145,88 L130,88" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M130,88 C130,75 122,65 112,65 L95,65 C82,65 75,72 75,83 C75,90 80,95 87,95 L107,95 C114,95 118,100 116,108" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M55,115 C52,125 55,137 63,142" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="90" y1="68" x2="88" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="67" x2="98" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="67" x2="110" y2="91" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="135" y1="92" x2="150" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="133" y1="100" x2="148" y2="103" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="133" y1="108" x2="147" y2="110" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="115" y1="118" x2="128" y2="122" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="126" x2="123" y2="130" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Sketch the basic curved grip shape — the hand forms a C-curve as if gripping a ball, with the palm facing left.",
        "Draw 4 fingers curling inward: each finger is a tube shape that bends at two points, with the fingertips meeting the palm.",
        "Draw the thumb curling from below, opposing the fingers, creating the closing grip.",
        "Add 2 crease lines across each visible finger joint — these curve slightly following the cylindrical form of the finger.",
        "Hatch the deep shadow inside the curled fingers and in the palm hollow with 4-5 parallel lines."
      ]
    },
    {
      title: "Finger Study",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M45,185 L45,90 C45,70 60,55 75,55 C90,55 100,70 100,90 L100,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M105,185 L105,100 C105,80 118,65 130,65 C142,65 152,80 152,100 L152,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M157,185 L157,120 C157,100 168,90 177,90 C186,90 195,100 195,120 L195,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M45,90 Q72,85 100,90" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M45,115 Q72,110 100,115" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M45,140 Q72,135 100,140" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M105,105 Q128,100 152,105" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M105,130 Q128,125 152,130" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M105,155 Q128,150 152,155" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M157,130 Q176,125 195,130" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M157,150 Q176,145 195,150" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M50,60 Q72,52 97,60" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M110,70 Q130,62 148,70" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M162,95 Q176,88 192,95" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw three fingers side by side, each as a pair of parallel lines that taper slightly toward the tip and widen at the base.",
        "Cap each fingertip with a rounded curve, then draw the U-shaped nail plate just below the tip on each finger.",
        "Add the first knuckle crease line across each finger — a slightly curved horizontal line about one-third up from the base.",
        "Add the second crease line at two-thirds up each finger, curving the opposite direction for natural form.",
        "Sketch 2-3 short wrinkle lines radiating from each crease, and add a small shadow hatch on the right side of each finger."
      ]
    }
  ],

  "Tangled Wire": [
    {
      title: "Headphone Tangle",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M60,30 C60,20 140,20 140,30 C140,45 155,50 160,60 C165,70 160,85 150,88" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="140" y="88" width="20" height="30" rx="8" ry="8" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M50,88 C40,85 35,70 40,60 C45,50 60,45 60,30" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="40" y="88" width="20" height="30" rx="8" ry="8" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,118 L100,130 C100,140 85,145 80,155 C75,162 80,170 80,178" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80,145 C90,145 100,148 105,155 C112,165 108,175 115,180" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80,155 C75,160 78,168 85,170 C92,172 98,168 100,162 C102,155 108,155 115,160" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80,178 C82,185 90,188 95,185 C102,182 104,175 100,170" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the headphone headband as a large arc across the top of the frame, with a rectangular ear cushion hanging from each end.",
        "Draw the cable dropping from the bottom of the left ear cup — follow it as it loops and crosses over itself at least twice.",
        "Where the cord crosses itself, draw the top strand completely, then draw the bottom strand with a small gap where it passes under.",
        "Add a loop knot partway down where the cord has tied itself: a small oval loop with the cord passing through it.",
        "Continue the cable to the plug at the bottom — a small rectangular jack shape — leaving the path slightly irregular and organic."
      ]
    },
    {
      title: "Spring Coil",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="15" x2="100" y2="35" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="50" rx="45" ry="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="72" rx="45" ry="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="94" rx="45" ry="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="116" rx="45" ry="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="138" rx="45" ry="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="160" rx="45" ry="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="55" y1="50" x2="55" y2="160" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="145" y1="50" x2="145" y2="160" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="175" x2="100" y2="190" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="58" y1="58" x2="65" y2="63" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="80" x2="65" y2="85" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="102" x2="65" y2="107" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="124" x2="65" y2="129" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="146" x2="65" y2="151" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a straight vertical line at the top and bottom of the frame — these are the wire ends before and after the coil.",
        "Draw the first coil as a flat horizontal ellipse near the top of the frame.",
        "Draw 5 more ellipses below the first, each the same size and evenly spaced, stacking them to suggest the coil receding slightly.",
        "Connect the left side and right side of all ellipses with two straight vertical lines to complete the 3D coil shape.",
        "Add a short diagonal shadow line inside the left edge of each coil ellipse to give them cylindrical volume."
      ]
    },
    {
      title: "Earbuds",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="55" cy="45" rx="18" ry="22" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="55" cy="42" r="8" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="55" y1="67" x2="55" y2="80" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="148" cy="48" rx="18" ry="22" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="148" cy="45" r="8" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="148" y1="70" x2="148" y2="83" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M55,80 C55,95 65,100 80,105 C95,110 100,115 100,125 C100,135 95,140 80,145 C65,150 55,155 55,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M148,83 C148,98 138,103 123,108 C108,113 100,118 100,128 C100,138 108,143 123,148 C138,153 148,158 148,173" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="55" y1="170" x2="148" y2="173" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="101" cy="127" r="4" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the left earbud as an oval with a smaller driver circle inside it, then a short cable stub dropping from the bottom.",
        "Draw the right earbud the same way, positioned in the upper-right area of the frame.",
        "Draw the left cable dropping from the earbud, then making a large S-curve across the center of the frame.",
        "Draw the right cable making the opposite S-curve, the two cables meeting at a Y-split junction in the middle.",
        "Draw a small oval at the junction to represent the cable splitter, and continue a single cable dropping from it."
      ]
    },
    {
      title: "Loop Knot",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="15" x2="100" y2="60" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,60 C100,80 120,90 130,110 C140,130 130,155 110,160 C90,165 70,150 70,130 C70,110 85,100 100,100 C115,100 125,110 122,125" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M122,125 C120,140 110,148 100,145 C88,142 82,130 85,118 C88,108 100,100 100,85" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,85 C100,70 92,65 88,75 C85,82 90,92 100,95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="165" x2="130" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="85" y1="70" x2="80" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="83" y1="78" x2="76" y2="73" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="82" y1="86" x2="74" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a vertical wire coming down from the top, then loop it into a large oval loop that goes to the right and comes back up.",
        "Where the wire crosses itself to start the loop, leave a small gap so one wire appears to pass over the other.",
        "Continue the wire through and around the loop — it exits through the center of the loop going downward.",
        "Draw the wire tail exiting the knot heading diagonally down and to the right.",
        "Add 3 short parallel lines on the concave inside of the loop curve to suggest the wire's cylindrical shadow."
      ]
    }
  ],

  "Rope Knot": [
    {
      title: "Overhand Knot",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="15" x2="100" y2="50" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,50 C100,65 115,75 130,75 C145,75 155,65 155,50 C155,35 145,25 130,25 C115,25 105,35 100,50" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,50 C95,60 88,68 80,72 L65,78" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M65,78 C55,82 48,90 50,100 C52,110 62,115 72,112 C82,109 88,100 85,90" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M85,90 C83,80 75,73 68,73" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="50" y1="125" x2="40" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="95" y1="118" x2="130" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="58" y1="82" x2="62" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="54" y1="92" x2="58" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="54" y1="102" x2="58" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a length of rope coming down from the top of the frame, then looping to the right in a large C-shape.",
        "Bring the rope back across, passing over the incoming strand to create the overhand cross.",
        "Thread the rope end through the loop from underneath — draw a small gap where it passes behind the existing strand.",
        "Draw the two tails hanging down from the knot body at the bottom.",
        "Add short parallel lines along the rope curves to suggest its twisted fiber texture."
      ]
    },
    {
      title: "Figure-Eight",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="15" x2="100" y2="45" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,45 C100,60 115,70 130,65 C145,60 150,45 140,35 C130,25 115,28 105,38" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M105,38 C95,48 82,50 72,45" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M72,45 C58,40 52,55 58,68 C64,80 80,85 93,78" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M93,78 C105,70 110,78 108,90 C106,102 95,110 83,108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="75" y1="110" x2="55" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="95" y1="115" x2="120" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="125" y1="48" x2="130" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="128" y1="56" x2="133" y2="63" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="58" x2="60" y2="68" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="70" x2="60" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the rope coming down from the top, then looping to the right to form the upper circle of the figure-eight.",
        "Cross the rope back over itself at the center crossing point, leaving a visible gap where one strand passes behind.",
        "Continue the rope looping downward and to the left to form the lower, slightly larger circle.",
        "Thread the rope end back up through the lower loop and draw it emerging as a tail from the center.",
        "Add texture lines at each curved section: 3 short parallel lines following the rope's curve on the outer edge."
      ]
    },
    {
      title: "Bowline Loop",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="15" x2="100" y2="40" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,40 C100,55 118,65 118,65 L100,80 C82,65 82,65 82,50 C82,35 95,30 100,40" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,80 C100,105 80,120 65,120 C50,120 40,108 40,93 C40,78 50,65 65,65 C80,65 90,75 100,80" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M65,65 L65,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="80" x2="130" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="45" y1="80" x2="50" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="43" y1="90" x2="48" y2="98" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="43" y1="100" x2="48" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="86" y1="48" x2="88" y2="56" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="86" y1="58" x2="88" y2="66" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the standing rope coming down from the top into the knot body.",
        "Draw a small rabbit-hole loop at the knot center — a small oval where the working end will pass through.",
        "Draw the working end coming up from below through the rabbit hole, looping around behind the standing rope.",
        "Show the large permanent loop dropping down from the knot and going off the bottom of the frame.",
        "Add parallel lines on the rope curves to indicate texture, and a gap where strands cross each other."
      ]
    },
    {
      title: "Twisted Rope",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M30,30 C50,28 70,32 90,30 C110,28 130,32 150,30 C165,28 175,30 180,32" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,45 C50,43 70,47 90,45 C110,43 130,47 150,45 C165,43 175,45 180,47" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,30 C28,35 28,40 30,45" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M180,32 C182,37 182,42 180,47" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M45,30 C45,37 45,43 45,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M60,30 C62,37 62,43 60,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M75,30 C73,37 73,43 75,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M90,30 C90,37 90,43 90,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M105,30 C107,37 107,43 105,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M120,30 C118,37 118,43 120,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M135,30 C135,37 135,43 135,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M150,30 C152,37 152,43 150,45" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M30,80 C50,78 70,82 90,80 C110,78 130,82 150,80 C165,78 175,80 180,82" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,95 C50,93 70,97 90,95 C110,93 130,97 150,95 C165,93 175,95 180,97" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,80 C28,85 28,90 30,95" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M180,82 C182,87 182,92 180,97" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,140 C50,138 70,142 90,140 C110,138 130,142 150,140 C165,138 175,140 180,142" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,155 C50,153 70,157 90,155 C110,153 130,157 150,155 C165,153 175,155 180,157" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,140 C28,145 28,150 30,155" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M180,142 C182,147 182,152 180,157" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw two parallel horizontal lines across the top of the frame — these define the full width cross-section of the rope.",
        "Connect the ends with short curved lines to cap each end of the rope.",
        "Draw 8 short curved lines at regular intervals between the two outline lines — these S-curves suggest the twist of the rope strands.",
        "Repeat the same three-strand rope pattern in two more rows below, each at a slightly different horizontal position to show the rope angling.",
        "Connect the rows with short diagonal lines on each side to show the rope is one continuous twisted length."
      ]
    }
  ],

  "Feather Study": [
    {
      title: "Whole Feather",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="185" x2="100" y2="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,15 C85,30 60,50 50,75 C40,100 50,130 65,150 C78,168 100,175 100,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,15 C115,30 140,50 150,75 C160,100 150,130 135,150 C122,168 100,175 100,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="30" x2="65" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="40" x2="60" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="50" x2="57" y2="77" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="60" x2="55" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="70" x2="55" y2="98" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="80" x2="57" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="90" x2="60" y2="118" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="100" x2="63" y2="128" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="110" x2="68" y2="136" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="120" x2="75" y2="145" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="30" x2="135" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="40" x2="140" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="50" x2="143" y2="77" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="60" x2="145" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="70" x2="145" y2="98" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="80" x2="143" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="90" x2="140" y2="118" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="100" x2="137" y2="128" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="110" x2="132" y2="136" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="120" x2="125" y2="145" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the central rachis (spine) as a slightly curved line running the full height of the paper.",
        "Draw the left vane edge curving gently from the tip down to the calamus, widest at mid-feather.",
        "Draw the right vane edge mirroring it, making the right side slightly narrower for a natural asymmetry.",
        "Draw barb lines angling from the rachis outward: 10-12 lines on each side, each angling at about 45 degrees and curving slightly toward the tip.",
        "Draw the lower calamus (quill) section below the vane as a slightly wider, smooth-sided tube shape."
      ]
    },
    {
      title: "Feather Tip",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="10" x2="100" y2="190" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,10 C88,20 70,40 65,65" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,10 C112,20 130,40 135,65" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="20" x2="72" y2="38" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="30" x2="68" y2="50" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="40" x2="66" y2="62" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="50" x2="65" y2="73" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="60" x2="65" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="20" x2="128" y2="38" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="30" x2="132" y2="50" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="40" x2="134" y2="62" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="50" x2="135" y2="73" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="60" x2="135" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="72" y1="38" x2="68" y2="42" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="68" y1="50" x2="64" y2="54" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="66" y1="62" x2="62" y2="66" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="65" y1="73" x2="61" y2="77" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="128" y1="38" x2="132" y2="42" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="132" y1="50" x2="136" y2="54" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="134" y1="62" x2="138" y2="66" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="135" y1="73" x2="139" y2="77" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="65" y1="82" x2="58" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="135" y1="82" x2="142" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw just the top third of the feather's rachis as a thin vertical line filling the frame — you're zoomed into the tip.",
        "Draw the two outer vane edges converging sharply to a point at the very top.",
        "Draw 5 barb lines on each side of the rachis, angling toward the tip at about 45 degrees.",
        "At the end of each barb line, draw 2-3 tiny fork lines — these are the individual barbule tips separating slightly.",
        "The barbs near the very tip should be shortest; make each successive barb a little longer as you move down the frame."
      ]
    },
    {
      title: "Ruffled Barbs",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="10" x2="100" y2="190" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="20" x2="60" y2="50" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="35" x2="55" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="50" x2="52" y2="78" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="20" x2="140" y2="50" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="35" x2="145" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="50" x2="148" y2="78" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,65 C90,70 72,68 58,80 C50,87 52,95 60,95" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,65 C110,70 128,68 142,80 C150,87 148,95 140,95" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,75 C88,78 72,85 60,95 C52,102 48,112 55,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,75 C112,78 128,85 140,95 C148,102 152,112 145,118" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M55,118 C45,125 42,135 50,140" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M145,118 C155,125 158,135 150,140" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="145" x2="65" y2="165" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="155" x2="60" y2="175" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="165" x2="65" y2="182" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="145" x2="135" y2="165" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="155" x2="140" y2="175" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="165" x2="135" y2="182" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the rachis as a full-length vertical line with 3 normal, tidy barbs at the top and bottom sections.",
        "In the middle section, draw 4 barbs that curve dramatically away from their normal angle — as if caught by wind.",
        "Add 2 detached barb-groups floating slightly apart from the main vane, one on each side, to show broken barbules.",
        "Draw 2-3 curving stray barb filaments that have bent back toward the rachis on the wrong side.",
        "Leave a visible gap in the vane outline on both sides at the ruffled section to emphasize the torn appearance."
      ]
    },
    {
      title: "Quill End",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M85,10 C80,10 75,20 75,30 L75,140 C75,150 80,160 85,165 L100,175 L115,165 C120,160 125,150 125,140 L125,30 C125,20 120,10 115,10 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M85,10 C88,15 95,18 100,18 C105,18 112,15 115,10" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="18" x2="100" y2="175" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="35" rx="20" ry="8" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="60" rx="22" ry="8" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="85" rx="23" ry="8" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="110" rx="23" ry="8" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="135" rx="22" ry="8" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="30" x2="82" y2="38" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="55" x2="82" y2="63" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="80" x2="82" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="105" x2="82" y2="113" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="130" x2="82" y2="138" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the calamus as a tall narrow oval tapered at the top and bottom — like a hollow pointed tube filling most of the frame.",
        "Draw a vertical center line from top to bottom suggesting the hollow interior channel.",
        "Add 5 horizontal ellipses inside the shape at regular intervals — these show the translucent interior rings visible in a real quill.",
        "Draw the outer surface edge on the left side with short diagonal lines to show the slightly ridged surface texture.",
        "Taper the bottom to a sharp point and add a subtle curved highlight line parallel to the right edge to show the hollow tube catching light."
      ]
    }
  ],

  "Dried Flower": [
    {
      title: "Dried Rose",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="185" x2="100" y2="105" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,105 C88,100 78,90 75,80 C72,70 78,60 88,60 C82,55 83,45 90,43 C96,41 103,46 105,53 C110,45 120,43 126,48 C132,53 130,63 124,68 C132,65 140,70 140,80 C140,90 132,98 122,102 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M88,60 C90,70 95,78 100,80" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M90,43 C92,50 95,58 100,62" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M124,68 C118,72 110,75 105,78" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M80,145 C90,140 100,138 110,140 C120,142 125,148 120,152" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80,145 L75,155" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="95" y1="78" x2="90" y2="85" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="103" y1="76" x2="100" y2="83" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="78" x2="108" y2="85" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the stem as a gently curving vertical line, then the top where it meets the flower head.",
        "Draw the outer rose petals as a roughly circular cluster, but make each petal edge slightly curled inward rather than open — dried roses collapse.",
        "Add inner petal lines spiraling toward the center, tighter than a fresh rose, with some petals folded over each other.",
        "Draw a leaf partway down the stem: a small pointed oval with a central vein and one or two lateral veins.",
        "Add 3 short parallel lines inside the darkest petal folds to suggest deep shadow between the desiccated petals."
      ]
    },
    {
      title: "Poppy Seed Head",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,185 C98,160 95,140 92,125 C89,112 85,105 84,95 C100,75 100,75 100,75" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,75 C115,95 116,105 115,118 C113,133 110,148 102,165 L100,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="65" rx="28" ry="33" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M78,48 C85,40 100,38 115,45" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="83" y1="42" x2="80" y2="35" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="91" y1="39" x2="90" y2="32" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="38" x2="100" y2="30" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="109" y1="39" x2="110" y2="32" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="117" y1="43" x2="120" y2="36" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="78" y1="55" x2="72" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="63" x2="72" y2="66" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="71" x2="72" y2="73" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="79" x2="74" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="84" y1="86" x2="78" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the stem as a long curved line that bends slightly — dried poppy stems have a characteristic nod.",
        "At the top, draw a rounded oval pod — wider in the middle, narrowing at the top and bottom.",
        "Draw the crown of the pod: a flat disc shape at the top with 5-7 short radiating lines pointing upward like a tiny crown.",
        "Add 4-5 vertical ridges running down the pod surface from crown to base.",
        "Add short hatching lines on the shadowed left side of the pod and a few texture lines on the curved stem."
      ]
    },
    {
      title: "Thistle",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="185" x2="100" y2="115" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="85" r="35" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="50" x2="100" y2="40" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="112" y1="53" x2="116" y2="44" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="121" y1="60" x2="128" y2="53" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="126" y1="72" x2="135" y2="68" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="127" y1="85" x2="136" y2="85" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="88" y1="53" x2="84" y2="44" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="79" y1="60" x2="72" y2="53" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="74" y1="72" x2="65" y2="68" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="73" y1="85" x2="64" y2="85" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="126" y1="98" x2="135" y2="102" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="74" y1="98" x2="65" y2="102" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M75,145 C80,135 85,128 88,118" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M70,148 L65,158" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="82" y1="68" x2="90" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="88" y1="65" x2="95" y2="78" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="94" y1="63" x2="100" y2="77" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="63" x2="105" y2="77" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="106" y1="65" x2="110" y2="79" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="112" y1="68" x2="115" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the stem as a straight vertical line with a spiny leaf branching off at an angle partway down.",
        "Draw the thistle head as a large circle sitting on top of the stem.",
        "Add 8-10 short spike lines radiating outward all around the circle edge — these are the bracts.",
        "Inside the top half of the circle, draw 6 short vertical lines bunched together to suggest the fluffy florets.",
        "Add 4 parallel hatching lines on the shadowed right side of the globe head."
      ]
    },
    {
      title: "Lavender Spike",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="185" x2="100" y2="20" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M93,115 C90,108 88,100 90,93 C92,86 97,83 100,85" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M107,115 C110,108 112,100 110,93 C108,86 103,83 100,85" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M90,125 C87,118 84,109 86,100 C88,93 94,90 100,92" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M110,125 C113,118 116,109 114,100 C112,93 106,90 100,92" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M88,135 C84,127 82,118 84,108 C86,100 92,97 100,99" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M112,135 C116,127 118,118 116,108 C114,100 108,97 100,99" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M86,145 C82,136 80,126 82,115" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M114,145 C118,136 120,126 118,115" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="95" y1="88" x2="93" y2="83" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="86" x2="100" y2="81" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="105" y1="88" x2="107" y2="83" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="93" y1="97" x2="91" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="96" x2="100" y2="91" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="107" y1="97" x2="109" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the long straight stem running nearly the full height of the paper.",
        "Starting about halfway up, draw small paired floret shapes on alternating sides of the stem — each floret is a tiny curved bracket shape.",
        "Work your way up the stem adding 6-8 pairs of florets, making them slightly smaller as you approach the tip.",
        "Add tiny spike tips above the topmost florets to complete the spike shape.",
        "Draw 2 narrow leaf shapes near the base of the stem, each with a single central vein."
      ]
    }
  ],

  "Street Lamp at Night": [
    {
      title: "Full Post",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="93" y="85" width="14" height="100" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M93,85 C93,75 88,68 85,60 C90,55 110,55 115,60 C112,68 107,75 107,85" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="58" rx="20" ry="10" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="55" rx="15" ry="6" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="70" y1="185" x2="130" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="75" y1="65" x2="55" y2="85" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="70" y1="68" x2="48" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="65" y1="72" x2="42" y2="96" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="80" x2="36" y2="105" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="90" x2="30" y2="118" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="125" y1="65" x2="145" y2="85" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="130" y1="68" x2="152" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="135" y1="72" x2="158" y2="96" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="80" x2="164" y2="105" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="145" y1="90" x2="170" y2="118" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="120" x2="50" y2="130" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="130" x2="44" y2="140" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="120" x2="150" y2="130" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="145" y1="130" x2="156" y2="140" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the lamp post shaft as a narrow rectangle running from near the top to the bottom of the page.",
        "Draw the lamp head at the top: a half-dome shape with a flat bottom and two ellipses to show the glass globe.",
        "Leave the immediate area around the lamp head clear of any marks — the glow radiates outward from here.",
        "Draw hatching lines in the upper corners of the frame, getting progressively denser away from the lamp to show night darkness.",
        "Add a ground line at the base and a few hatching lines near the bottom corners to suggest the dark pavement far from the light."
      ]
    },
    {
      title: "Lamp Head",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M40,80 C40,40 60,20 100,20 C140,20 160,40 160,80 L160,110 C160,125 150,135 100,135 C50,135 40,125 40,110 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="110" rx="60" ry="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M55,80 C55,55 72,42 100,42 C128,42 145,55 145,80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="95" x2="140" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="90" y1="20" x2="90" y2="135" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="20" x2="110" y2="135" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="48" y1="50" x2="55" y2="58" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="44" y1="65" x2="52" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="42" y1="80" x2="50" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="152" y1="50" x2="145" y2="58" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="156" y1="65" x2="148" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="158" y1="80" x2="150" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="135" x2="100" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="135" rx="12" ry="5" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the lamp globe from below at a slight angle: a large dome shape wider than tall, viewed from underneath.",
        "Add the flat bottom rim as a wide ellipse under the dome.",
        "Draw 2 vertical division lines on the dome surface to suggest the glass panels of the lantern.",
        "Add a horizontal division line around the mid-section of the dome.",
        "Add short diagonal reflection lines on the upper-left panels to show glass catching the light, and draw the post emerging from the bottom center."
      ]
    },
    {
      title: "Puddle Glow",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="92" y="10" width="16" height="80" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="10" rx="18" ry="9" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="92" y1="90" x2="100" y2="115" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="108" y1="90" x2="100" y2="115" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="145" rx="45" ry="18" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="78" y1="138" x2="83" y2="152" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="84" y1="135" x2="88" y2="152" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="90" y1="134" x2="93" y2="152" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="97" y1="133" x2="100" y2="152" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="103" y1="134" x2="107" y2="152" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="135" x2="112" y2="152" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="116" y1="138" x2="117" y2="152" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="160" x2="68" y2="160" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="168" x2="62" y2="168" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="15" y1="176" x2="60" y2="176" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="132" y1="160" x2="170" y2="160" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="138" y1="168" x2="180" y2="168" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="176" x2="185" y2="176" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the base of the lamp post: just the lower section of the shaft coming down from the top.",
        "Draw the ground line and the puddle as a wide flat ellipse on the cobblestone surface.",
        "Inside the puddle ellipse, draw short vertical reflection lines — parallel vertical strokes suggesting the lamp's reflection shimmering in the water.",
        "Leave the center of the puddle lighter (fewer lines) and increase hatching density toward the puddle edges to show the glow fading.",
        "Add horizontal texture lines outside the puddle on the dark wet pavement surface."
      ]
    },
    {
      title: "Two Lamps",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="50" width="12" height="140" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="36" cy="50" rx="16" ry="8" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="36" cy="44" rx="11" ry="5" stroke="#111" fill="none" stroke-width="0.7"/>
  <rect x="115" y="85" width="9" height="105" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="120" cy="85" rx="12" ry="6" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="120" cy="80" rx="8" ry="4" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="190" x2="180" y2="190" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="20" y1="190" x2="15" y2="195" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="180" y1="190" x2="185" y2="195" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="10" y1="70" x2="25" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="8" y1="85" x2="24" y2="105" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="8" y1="100" x2="24" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="8" y1="115" x2="24" y2="135" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="70" x2="70" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="80" x2="73" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="90" x2="155" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="145" y1="100" x2="160" y2="110" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="148" y1="112" x2="165" y2="122" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="165" y1="110" x2="185" y2="125" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="168" y1="125" x2="188" y2="142" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="170" y1="140" x2="190" y2="158" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the foreground lamp post large on the left side of the frame, with its lamp head clearly visible.",
        "Draw a second lamp post smaller on the right side of the frame, positioned further back — smaller size creates perspective recession.",
        "Draw a street/pavement line converging toward the right from both sides of the frame.",
        "Add hatching lines filling the sky area at top right and bottom corners, leaving halos around both lamp heads.",
        "Add small horizontal marks on the pavement between the two posts to suggest wet cobblestones."
      ]
    }
  ],

  "Spider Web": [
    {
      title: "Orb Web",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="20" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="170" y1="20" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="20" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="100" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="170" y1="100" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="170" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="145" y1="170" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="170" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M80,80 C90,75 110,75 120,80 C125,90 125,110 120,120 C110,125 90,125 80,120 C75,110 75,90 80,80 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M65,65 C78,58 122,58 135,65 C142,78 142,122 135,135 C122,142 78,142 65,135 C58,122 58,78 65,65 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M45,45 C63,35 137,35 155,45 C165,63 165,137 155,155 C137,165 63,165 45,155 C35,137 35,63 45,45 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="20" x2="10" y2="10" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="170" y1="20" x2="190" y2="10" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="100" r="2" fill="#111" stroke="none"/>
</svg>`,
      steps: [
        "Mark the center of the web and draw 8 radial lines (spokes) radiating outward to the edges of the frame.",
        "Draw the innermost spiral ring as a roughly circular shape connecting the spokes close to the center.",
        "Draw two more concentric spiral rings at increasing distances from the center, each connecting all 8 spokes.",
        "Draw anchor lines extending from 2-3 spoke ends to the frame edge, representing the attachment threads.",
        "Place a small filled circle at the center where the spider would sit, and optionally add tiny water droplet circles on 3-4 strand intersections."
      ]
    },
    {
      title: "Corner Web",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="10" x2="190" y2="10" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="10" y1="10" x2="10" y2="190" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="10" y1="10" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="10" y1="10" x2="160" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="10" y1="10" x2="80" y2="160" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="10" y1="10" x2="130" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="10" y1="10" x2="60" y2="130" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M60,10 L40,40 L10,60" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M100,10 L70,55 L40,70 L10,100" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M140,10 L100,70 L65,100 L30,120 L10,140" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M170,10 L130,80 L90,115 L55,140 L30,160 L10,170" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="10" cy="10" r="2" fill="#111" stroke="none"/>
</svg>`,
      steps: [
        "Draw two wall edges meeting at a corner in the upper-left of the frame — these are the anchor surfaces.",
        "Draw 5-6 spoke lines radiating from the corner point outward into the frame at varying angles.",
        "Draw the first arc connecting all spokes near the corner — this arc is quite tight to the corner.",
        "Add 3 more arcs progressively further from the corner, each one slightly irregular rather than perfectly smooth.",
        "Draw a small spider near the outer edge of the web — a small oval body with 8 short leg lines."
      ]
    },
    {
      title: "Dewy Web",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="15" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="45" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="170" y1="45" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="15" y1="130" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="185" y1="130" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="185" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="185" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M82,82 C90,78 110,78 118,82 C122,90 122,110 118,118 C110,122 90,122 82,118 C78,110 78,90 82,82 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M67,67 C80,60 120,60 133,67 C140,80 140,120 133,133 C120,140 80,140 67,133 C60,120 60,80 67,67 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M48,48 C65,38 135,38 152,48 C162,65 162,135 152,152 C135,162 65,162 48,152 C38,135 38,65 48,48 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="100" cy="79" r="2.5" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="118" cy="82" r="2" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="82" cy="118" r="2.5" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="73" cy="73" r="2" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="127" cy="73" r="2.5" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="52" cy="100" r="2" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="148" cy="100" r="2.5" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="133" cy="133" r="2" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="67" cy="133" r="2" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="100" cy="148" r="2.5" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a standard orb web with 7 spoke lines and 3 concentric spiral rings.",
        "At each intersection where a spiral ring meets a spoke, draw a small hollow circle — this represents a water droplet.",
        "Make the droplets slightly different sizes (not all identical) for a natural look.",
        "Add 2-3 extra droplets hanging from the lowest spiral arc, slightly elongated downward like drops about to fall.",
        "Leave the lines themselves thin and delicate to contrast with the bolder water drop circles."
      ]
    },
    {
      title: "Broken Strand",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="15" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="40" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="15" y1="115" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="180" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="145" y1="180" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="185" y1="115" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="170" y1="40" x2="100" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="15" x2="62" y2="22" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M80,80 C88,76 112,76 120,80 C124,88 124,112 120,120 C112,124 88,124 80,120 C76,112 76,88 80,80 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M60,60 C73,53 127,53 140,60 C147,73 147,127 140,140 C127,147 73,147 60,140 C53,127 53,73 60,60 Z" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M40,40 L55,30 L100,25" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M40,40 L35,70 L15,115" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="40" x2="50" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M50,55 C48,70 52,90 55,110 C57,125 55,145 50,165" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="40" cy="40" r="2" fill="#111" stroke="none"/>
</svg>`,
      steps: [
        "Draw a complete orb web with all radii and 2-3 concentric spiral rings.",
        "Choose one spoke/radius and erase (leave undrawn) the outer half of it — where it would connect to the frame edge.",
        "Draw the broken strand hanging down from the break point, curving loosely away from the web structure.",
        "Add a small curl or loop at the end of the broken strand to show the elasticity of the silk.",
        "Draw a small spider at the hub center and add a second spiral ring segment missing near the break to show how the web has collapsed inward."
      ]
    }
  ],

  "Worn Boot": [
    {
      title: "Side View",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M30,170 C30,165 32,160 35,158 L35,60 C35,50 42,40 55,38 L75,38 C85,38 90,45 90,55 L90,90 C95,88 110,87 125,90 L155,92 C168,94 172,102 172,115 L172,158 C172,163 168,167 163,168 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M30,170 L163,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M163,168 L172,168" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="55" y1="60" x2="68" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="53" y1="70" x2="67" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="52" y1="80" x2="66" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="37" y1="40" x2="38" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="43" y1="38" x2="44" y2="53" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="49" y1="38" x2="50" y2="53" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="38" x2="56" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="61" y1="38" x2="62" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="67" y1="38" x2="68" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M90,115 C110,112 135,113 155,115" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M88,125 C110,122 138,123 160,125" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M88,140 C110,137 140,138 163,140" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the overall boot silhouette from the side: a tall shaft tapering to the ankle, then a wide toe box pointing forward.",
        "Draw the sole as a slightly thicker line along the bottom, with a small heel block at the back.",
        "Draw 6 lace holes on the shaft as small circles or rectangles, evenly spaced vertically.",
        "Add crease lines across the toe cap: 3 curved horizontal lines showing where the leather has bent repeatedly.",
        "Add hatching lines inside the ankle area and under the toe to show the deepest worn shadows."
      ]
    },
    {
      title: "Top Down",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="60" ry="80" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="100" rx="45" ry="65" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M70,40 L130,40" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M68,50 L132,50" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="40" x2="100" y2="175" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="55" x2="63" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="65" x2="63" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="75" x2="63" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="85" x2="63" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="95" x2="63" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="142" y1="55" x2="137" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="142" y1="65" x2="137" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="142" y1="75" x2="137" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="142" y1="85" x2="137" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="142" y1="95" x2="137" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="155" rx="30" ry="15" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="135" x2="120" y2="135" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="145" x2="122" y2="145" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the boot opening from above as a large oval, widest side-to-side at the top of the boot shaft.",
        "Draw a second, smaller oval inside it to show the inner lining edge.",
        "Add the tongue of the boot as a rounded rectangular shape visible at the front (top) of the opening.",
        "Draw 5 lace holes on each side of the tongue as small circles, and sketch a loose X-pattern for the lacing.",
        "Add light hatching lines inside the boot shaft to show the dark interior descending into shadow."
      ]
    },
    {
      title: "Worn Sole",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M40,80 C38,60 50,30 70,22 C85,16 100,18 115,22 C135,28 155,50 158,80 L160,130 C162,155 150,175 130,180 C110,185 90,185 70,180 C50,175 38,155 40,130 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M52,80 C50,62 60,38 75,30 C88,24 112,24 125,30 C140,38 150,62 148,80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="52" y1="80" x2="148" y2="80" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="50" y1="100" x2="150" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="50" y1="112" x2="150" y2="112" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="50" y1="124" x2="150" y2="124" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="50" y1="136" x2="150" y2="136" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M55,148 C70,143 130,143 145,148" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="42" x2="75" y2="42" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="52" x2="73" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="125" y1="42" x2="138" y2="42" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="127" y1="52" x2="140" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M80,160 C90,157 110,157 120,160" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M75,170 C88,167 112,167 125,170" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the sole outline from below: an elongated oval with a wider rounded toe at the top and narrower heel at the bottom.",
        "Draw a horizontal line separating the heel block from the rest of the sole.",
        "Add 4-5 horizontal grooves across the toe area to show the tread pattern.",
        "Draw 2 small worn smooth patches: one at the heel edge (where it hits first) and one at the outer toe — areas with fewer/no tread lines.",
        "Add the manufacturer's logo area as a rectangular border in the arch area with a few horizontal text-hint lines inside it."
      ]
    },
    {
      title: "Lace Detail",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="60" y1="20" x2="60" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="140" y1="20" x2="140" y2="185" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="60" cy="40" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="60" cy="70" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="60" cy="100" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="60" cy="130" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="60" cy="160" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="140" cy="40" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="140" cy="70" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="140" cy="100" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="140" cy="130" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="140" cy="160" r="5" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="40" x2="135" y2="70" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="70" x2="135" y2="40" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="70" x2="135" y2="100" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="100" x2="135" y2="70" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="100" x2="135" y2="130" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="130" x2="135" y2="100" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="130" x2="135" y2="160" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="160" x2="135" y2="130" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw two vertical lines for the two front edges of the boot, with lace holes spaced evenly along each edge.",
        "Draw each lace hole as a small circle with a slightly worn outer ring.",
        "Draw the lace crossing diagonally from the bottom-left hole to the second hole on the right — this is the first X.",
        "Continue the lacing pattern upward: each lace section goes diagonally across to the next hole on the opposite side.",
        "At the top two holes, show the lace emerging and making a loose half-bow shape where it trails off the top."
      ]
    }
  ],

  "Ink Bottle": [
    {
      title: "Full Bottle",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M65,165 L65,90 C65,82 72,75 80,72 L80,55 C80,48 86,42 95,42 L105,42 C114,42 120,48 120,55 L120,72 C128,75 135,82 135,90 L135,165 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="165" x2="135" y2="165" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="88" y="35" width="24" height="10" rx="3" ry="3" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="125" x2="135" y2="125" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="72" y="130" width="56" height="25" rx="2" ry="2" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="136" x2="122" y2="136" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="141" x2="122" y2="141" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="78" y1="146" x2="122" y2="146" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="67" y1="90" x2="73" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="67" y1="100" x2="73" y2="110" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="67" y1="110" x2="73" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="133" y1="90" x2="127" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="133" y1="100" x2="127" y2="110" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the bottle body as a wide rectangle with slightly curved sides, tapering gently toward the neck.",
        "Draw the narrow neck rising from the body, then widen into the cap as a small rectangle on top.",
        "Add a horizontal line across the bottle about one-quarter from the bottom for the ink level.",
        "Draw the label area as a rectangle in the center of the body, with 3 horizontal lines inside for text.",
        "Add glass reflection lines: 2-3 short diagonal lines on the upper-left side of the body."
      ]
    },
    {
      title: "Three-Quarter",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M55,170 L55,95 C55,85 63,77 72,74 L72,57 C72,48 79,42 88,42 L108,42 C117,42 125,48 125,57 L125,74 C134,77 142,85 142,95 L142,170 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M55,170 C55,175 68,178 98,178 C128,178 142,175 142,170" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M55,95 C55,90 68,87 98,87 C128,87 142,90 142,95" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M55,130 C55,126 68,123 98,123 C128,123 142,126 142,130" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="84" y="35" width="28" height="10" rx="3" ry="3" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="57" y1="100" x2="65" y2="105" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="57" y1="110" x2="65" y2="115" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="57" y1="120" x2="65" y2="124" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="72" y1="60" x2="78" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="72" y1="68" x2="78" y2="73" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M62,140 C62,138 68,137 80,137" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M62,148 C62,146 70,145 85,145" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M62,156 C62,154 72,153 90,153" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M62,164 C62,162 75,161 98,161" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the bottle from a three-quarter front angle — the body is a slightly trapezoidal form, wider at the bottom.",
        "Add the bottom ellipse visible from this angle, showing the base is slightly rounded.",
        "Draw the neck and cap from this angle: the cap appears as a slightly skewed rectangle.",
        "Add the ink level line as a curved horizontal line (elliptical, not flat) to show the liquid surface in perspective.",
        "Draw 3-4 glass reflection lines diagonally on the upper-left face, tapering to nothing at both ends."
      ]
    },
    {
      title: "From Above",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="70" ry="70" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="100" rx="55" ry="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="100" rx="35" ry="35" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="100" cy="100" rx="25" ry="25" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="75" y1="88" x2="82" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="75" y1="94" x2="82" y2="93" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="75" y1="100" x2="82" y2="99" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="75" y1="106" x2="82" y2="106" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="75" y1="112" x2="82" y2="112" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="45" y1="75" x2="52" y2="75" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="43" y1="85" x2="50" y2="83" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="42" y1="95" x2="49" y2="93" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="42" y1="105" x2="49" y2="107" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="43" y1="115" x2="50" y2="117" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="45" y1="125" x2="52" y2="128" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="100" cy="100" r="4" fill="#111" stroke="none"/>
</svg>`,
      steps: [
        "Draw a large circle for the outer rim of the open bottle mouth as seen from directly above.",
        "Draw a slightly smaller concentric circle for the inner rim of the glass.",
        "Draw the ink surface as another circle inside — this is the dark liquid, so fill it with a few concentric rings to suggest depth.",
        "Add 4-5 short hatching lines on the left arc between the two rim circles for the glass thickness.",
        "Place a small filled dot at the very center to represent the darkest deepest point of the ink pool."
      ]
    },
    {
      title: "Drip",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M60,50 L60,140 C60,148 67,155 75,158 L125,158 C133,155 140,148 140,140 L140,50" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M60,50 C60,45 70,40 100,40 C130,40 140,45 140,50" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M60,140 C60,145 68,148 80,150 C80,150 95,155 100,165 C105,155 120,150 120,150 C132,148 140,145 140,140" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100,165 C100,170 98,175 97,180 C97,185 100,188 103,185 C105,182 104,177 102,172" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M96,185 C96,190 100,192 104,190 L103,185" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="62" y1="55" x2="68" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="65" x2="68" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="75" x2="68" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="85" x2="68" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M75,55 C73,65 73,85 75,100" stroke="#111" fill="none" stroke-width="0.7"/>
  <rect x="85" y="35" width="30" height="8" rx="3" ry="3" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the ink bottle tipped at a slight angle — the body is a rotated rectangle, angled forward.",
        "Draw the open neck at the lower end — no cap — with the opening visible as a small ellipse.",
        "Draw the drip forming at the bottle mouth: a teardrop shape with the wide top attached to the opening and a point hanging down.",
        "Extend a thin line from the drip tip downward to show the thread of ink about to fall.",
        "Add a few hatching lines on the side of the bottle body to show how the ink has pooled inside toward the open end."
      ]
    }
  ],
  "Forest Floor": [
    {
      title: "Leaf Scatter",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 120 C30 80 60 50 80 70 C90 55 110 55 120 70 C140 50 165 75 150 115 C140 135 110 145 80 130 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="85" y1="130" x2="130" y2="65" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="98" y1="120" x2="80" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="108" y1="108" x2="130" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M120 158 C100 145 108 122 130 118 C142 113 162 125 165 148 C167 164 154 176 135 172 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="130" y1="170" x2="155" y2="122" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="172" x2="100" y2="145" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="58" y1="158" x2="48" y2="143" stroke="#111" fill="none" stroke-width="1"/>
  <path d="M25 88 C18 68 42 48 58 62 C62 52 78 57 73 78 C68 98 42 104 27 92 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="30" y1="90" x2="68" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a diagonal twig across the lower third of the page — this anchors the composition.",
        "Draw a large irregular leaf overlapping the twig using a gentle oval with slightly lobed edges.",
        "Add the central vein and 4–5 side veins branching off at 45 degrees, tapering to the leaf edge.",
        "Draw a second, smaller leaf partly overlapping the first — leaves behind look smaller and darker.",
        "Add a third partial leaf near the corner and scatter a few tiny debris marks around the scene."
      ]
    },
    {
      title: "Mossy Pebbles",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="70" cy="120" rx="50" ry="38" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="140" cy="130" rx="38" ry="30" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="105" cy="75" rx="30" ry="22" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="45" cy="72" rx="22" ry="16" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="50" y1="115" x2="55" y2="107" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="60" y1="112" x2="65" y2="104" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="70" y1="113" x2="75" y2="105" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="115" x2="85" y2="107" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="125" y1="124" x2="130" y2="116" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="135" y1="122" x2="140" y2="114" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="145" y1="124" x2="150" y2="116" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="95" y1="70" x2="100" y2="62" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="105" y1="68" x2="110" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="115" y1="70" x2="120" y2="62" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="135" x2="155" y2="150" stroke="#111" fill="none" stroke-width="0.8"/>
</svg>`,
      steps: [
        "Draw 4–5 smooth rounded ellipses of varying sizes — these are your pebbles.",
        "Overlap them naturally; avoid even spacing.",
        "Add a faint ground line where the pebbles sit.",
        "For moss, draw tiny upward tick marks clustered on the upper surface of each pebble.",
        "Add light shadow hatching under each pebble — a few short horizontal lines just below the outline."
      ]
    },
    {
      title: "Detailed Leaf",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 178 C70 158 30 122 35 82 C38 57 60 30 100 20 C140 30 162 57 165 82 C170 122 130 158 100 178 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="178" x2="100" y2="20" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="100" y1="52" x2="60" y2="78" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="52" x2="140" y2="78" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="82" x2="50" y2="102" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="82" x2="150" y2="102" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="112" x2="55" y2="128" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="112" x2="145" y2="128" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="142" x2="68" y2="150" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="142" x2="132" y2="150" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="62" y1="78" x2="48" y2="90" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="138" y1="78" x2="152" y2="90" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="52" y1="102" x2="38" y2="114" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="148" y1="102" x2="162" y2="114" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw a symmetrical leaf outline, widest at the center, tapering to points at top and bottom.",
        "Draw the midrib as a single confident stroke from tip to stem.",
        "Add primary veins branching off the midrib at 45 degrees, curving toward the edge.",
        "Add secondary veins off the primary veins at shallower angles.",
        "On the shadow side, add fine parallel hatching between veins to show tonal difference."
      ]
    },
    {
      title: "Forest Mushroom",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M75 118 C60 88 65 55 100 45 C135 55 140 88 125 118 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="75" y1="118" x2="125" y2="118" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="78" y1="111" x2="122" y2="111" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="81" y1="104" x2="119" y2="104" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="85" y1="97" x2="115" y2="97" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="89" y1="90" x2="111" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <rect x="91" y="118" width="18" height="38" rx="4" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="156" x2="100" y2="168" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M68 158 C82 150 92 160 100 155 C108 150 118 162 132 156" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="60" y1="168" x2="140" y2="168" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the cap as a dome — wider than it is tall, with a curved underside.",
        "Under the cap, add 5–7 thin curved gill lines fanning outward from the stem.",
        "Draw the stem as a short tapering rectangle below the cap center.",
        "Widen the base slightly where it meets the ground.",
        "Add 2–3 fallen leaves around the base and a ground line to anchor it."
      ]
    }
  ],
  "Bare Tree Against Sky": [
    {
      title: "Full Silhouette",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="190" x2="100" y2="105" stroke="#111" fill="none" stroke-width="3"/>
  <line x1="100" y1="105" x2="52" y2="58" stroke="#111" fill="none" stroke-width="2"/>
  <line x1="100" y1="105" x2="148" y2="62" stroke="#111" fill="none" stroke-width="2"/>
  <line x1="52" y1="58" x2="28" y2="30" stroke="#111" fill="none" stroke-width="1.3"/>
  <line x1="52" y1="58" x2="55" y2="25" stroke="#111" fill="none" stroke-width="1.3"/>
  <line x1="148" y1="62" x2="168" y2="32" stroke="#111" fill="none" stroke-width="1.3"/>
  <line x1="148" y1="62" x2="152" y2="28" stroke="#111" fill="none" stroke-width="1.3"/>
  <line x1="28" y1="30" x2="18" y2="18" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="28" y1="30" x2="30" y2="15" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="55" y1="25" x2="48" y2="12" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="55" y1="25" x2="62" y2="12" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="168" y1="32" x2="160" y2="18" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="168" y1="32" x2="178" y2="18" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="118" x2="75" y2="95" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="75" y1="95" x2="58" y2="78" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="100" y1="118" x2="125" y2="95" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="125" y1="95" x2="142" y2="78" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="100" y1="155" x2="80" y2="140" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="155" x2="118" y2="140" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the trunk: a vertical stroke thickest at the base, narrowing as it rises.",
        "From the upper trunk branch two main limbs angling outward — each about half the trunk thickness.",
        "Each main limb forks again into two thinner secondary branches.",
        "Keep branching — each split produces thinner pairs — until twigs are hair-thin.",
        "At every fork, let one branch be slightly longer than the other for natural asymmetry."
      ]
    },
    {
      title: "Branch Fork",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="200" x2="100" y2="125" stroke="#111" fill="none" stroke-width="3.5"/>
  <line x1="100" y1="125" x2="45" y2="55" stroke="#111" fill="none" stroke-width="2.5"/>
  <line x1="100" y1="125" x2="162" y2="58" stroke="#111" fill="none" stroke-width="2.5"/>
  <line x1="45" y1="55" x2="20" y2="22" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="45" y1="55" x2="62" y2="18" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="162" y1="58" x2="140" y2="20" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="162" y1="58" x2="182" y2="22" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="92" y1="140" x2="88" y2="160" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="96" y1="140" x2="93" y2="162" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="104" y1="140" x2="107" y2="162" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="108" y1="140" x2="112" y2="160" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the lower trunk wide and solid coming up from the bottom edge.",
        "At the fork point near center-page, split into two branches diverging about 60 degrees apart.",
        "Make each branch slightly thinner than the trunk at the split point.",
        "Add short parallel bark-texture hatching on the shaded side of the trunk.",
        "Continue each limb off the page edge, adding one more fork per branch."
      ]
    },
    {
      title: "Twin Trees",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="68" y1="190" x2="70" y2="108" stroke="#111" fill="none" stroke-width="2.5"/>
  <line x1="70" y1="108" x2="35" y2="55" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="70" y1="108" x2="105" y2="60" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="35" y1="55" x2="15" y2="28" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="35" y1="55" x2="42" y2="25" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="105" y1="60" x2="88" y2="28" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="105" y1="60" x2="118" y2="30" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="132" y1="190" x2="130" y2="98" stroke="#111" fill="none" stroke-width="2.5"/>
  <line x1="130" y1="98" x2="95" y2="48" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="130" y1="98" x2="165" y2="52" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="95" y1="48" x2="82" y2="20" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="95" y1="48" x2="108" y2="22" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="165" y1="52" x2="150" y2="22" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="165" y1="52" x2="180" y2="26" stroke="#111" fill="none" stroke-width="1.2"/>
</svg>`,
      steps: [
        "Draw two trunks side by side, about one-third of the page width apart.",
        "Let the trunks lean very slightly toward each other — they grew together.",
        "Branch each tree independently but let some branches cross at the top.",
        "Where branches cross, leave a tiny gap on the one passing 'behind'.",
        "Vary each silhouette — one taller, one wider — so they read as individual trees."
      ]
    },
    {
      title: "Single Twig",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="18" y1="145" x2="182" y2="78" stroke="#111" fill="none" stroke-width="2"/>
  <line x1="78" y1="118" x2="62" y2="88" stroke="#111" fill="none" stroke-width="1.4"/>
  <line x1="62" y1="88" x2="48" y2="68" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="62" y1="88" x2="72" y2="66" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="122" y1="100" x2="110" y2="72" stroke="#111" fill="none" stroke-width="1.4"/>
  <line x1="110" y1="72" x2="98" y2="52" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="110" y1="72" x2="124" y2="55" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="152" y1="90" x2="144" y2="64" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="144" y1="64" x2="135" y2="45" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="144" y1="64" x2="156" y2="48" stroke="#111" fill="none" stroke-width="0.9"/>
  <path d="M46 70 C40 60 48 50 56 56 C52 46 62 43 66 53" stroke="#111" fill="none" stroke-width="1"/>
  <path d="M96 54 C90 44 98 34 106 40 C102 30 112 28 116 38" stroke="#111" fill="none" stroke-width="1"/>
  <path d="M133 47 C128 38 136 28 143 34 C140 24 150 22 153 32" stroke="#111" fill="none" stroke-width="1"/>
</svg>`,
      steps: [
        "Draw the main twig diagonally across the page, tapering from left to right.",
        "Add 3 smaller side twigs branching upward along the main twig — each one thinner.",
        "Each side twig forks into two even thinner sub-twigs at its tip.",
        "Attach 2–3 small dead leaves at the tips: pointed ovals slightly crumpled, on thin petioles.",
        "Mark bark texture on the main twig with 2–3 short crosswise lines at intervals."
      ]
    }
  ],
  "Eye Close-up": [
    {
      title: "Front View",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 100 C50 60 150 60 180 100 C150 140 50 140 20 100 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="100" r="30" stroke="#111" fill="none" stroke-width="1.2"/>
  <circle cx="100" cy="100" r="14" stroke="#111" fill="none" stroke-width="1"/>
  <circle cx="100" cy="100" r="14" stroke="none" fill="#111"/>
  <circle cx="108" cy="93" r="3" stroke="none" fill="white"/>
  <line x1="55" y1="68" x2="50" y2="55" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="68" y1="62" x2="65" y2="48" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="82" y1="60" x2="80" y2="46" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="60" x2="100" y2="45" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="118" y1="60" x2="120" y2="46" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="132" y1="62" x2="136" y2="48" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="145" y1="68" x2="150" y2="55" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="75" y1="132" x2="70" y2="148" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="90" y1="138" x2="88" y2="154" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="138" x2="112" y2="154" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="125" y1="132" x2="130" y2="148" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M20 100 C22 88 28 82 35 80" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="88" y1="84" x2="92" y2="78" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="82" x2="100" y2="76" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="112" y1="84" x2="108" y2="78" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the almond-shaped eye outline — upper lid arcs higher, lower lid curves gently.",
        "Draw the iris as a circle; the upper eyelid should cut across the top of it.",
        "Fill the pupil solid black in the center of the iris, leaving a small white catchlight dot.",
        "Add radial lines from pupil outward to suggest the iris texture.",
        "Draw upper lashes as short angled strokes from the upper lid, fanning outward."
      ]
    },
    {
      title: "Three-Quarter View",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 105 C55 68 140 65 175 100 C148 132 55 138 30 105 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <ellipse cx="110" cy="100" rx="26" ry="28" stroke="#111" fill="none" stroke-width="1.2"/>
  <ellipse cx="112" cy="101" rx="12" ry="13" stroke="#111" fill="#111" stroke-width="0"/>
  <circle cx="120" cy="94" r="3" stroke="none" fill="white"/>
  <line x1="60" y1="72" x2="55" y2="58" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="75" y1="66" x2="73" y2="52" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="95" y1="64" x2="95" y2="50" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="115" y1="64" x2="118" y2="50" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="135" y1="66" x2="140" y2="53" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="150" y1="72" x2="156" y2="60" stroke="#111" fill="none" stroke-width="0.8"/>
  <path d="M30 105 C32 95 38 88 46 86" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="84" y1="68" x2="95" y2="64" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="126" x2="98" y2="142" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="118" y1="128" x2="120" y2="144" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="134" y1="124" x2="138" y2="138" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the eye outline slightly compressed horizontally — at 3/4 view the far corner is hidden.",
        "The iris appears as a slightly flattened oval rather than a perfect circle.",
        "Fill the pupil solid; place the catchlight slightly off-center toward the light source.",
        "The inner corner tear duct is visible on this side — draw a small curved notch.",
        "Upper lashes fan outward following the upper lid curve, shorter near the inner corner."
      ]
    },
    {
      title: "Closed Eye",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 100 C60 68 140 68 175 100" stroke="#111" fill="none" stroke-width="1.8"/>
  <path d="M25 100 C60 110 140 110 175 100" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="48" y1="80" x2="42" y2="65" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="62" y1="72" x2="58" y2="56" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="78" y1="68" x2="76" y2="52" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="95" y1="68" x2="94" y2="52" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="112" y1="68" x2="114" y2="52" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="128" y1="72" x2="132" y2="57" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="145" y1="78" x2="150" y2="64" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="158" y1="88" x2="164" y2="76" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="62" y1="108" x2="58" y2="122" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="110" x2="78" y2="125" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="110" x2="100" y2="126" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="120" y1="110" x2="122" y2="125" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="138" y1="108" x2="142" y2="122" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="98" x2="25" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="170" y1="98" x2="175" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the upper eyelid as a single arching curve — it is the dominant line of a closed eye.",
        "Draw the lower lid as a flatter, gentler curve just below, leaving a thin sliver of space.",
        "Upper lashes grow from the upper lid and fan outward and downward — they angle below the lid line.",
        "Lower lashes are shorter and sparser, angling down from the lower lid.",
        "Add a very light shadow arc just above the closed lid to suggest the orbital bone above."
      ]
    },
    {
      title: "Iris Study",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="78" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="100" r="35" stroke="#111" fill="none" stroke-width="1"/>
  <circle cx="100" cy="100" r="35" stroke="none" fill="#111"/>
  <circle cx="115" cy="86" r="6" stroke="none" fill="white"/>
  <line x1="100" y1="22" x2="100" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="135" x2="100" y2="178" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="22" y1="100" x2="65" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="135" y1="100" x2="178" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="45" y1="45" x2="72" y2="72" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="128" y1="128" x2="155" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="155" y1="45" x2="128" y2="72" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="72" y1="128" x2="45" y2="155" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="32" x2="68" y2="60" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="32" y1="55" x2="60" y2="68" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="145" y1="32" x2="132" y2="60" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="168" y1="55" x2="140" y2="68" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="55" y1="168" x2="68" y2="140" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="32" y1="145" x2="60" y2="132" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw a large circle for the iris border — it should nearly fill the page.",
        "Draw a smaller circle at center for the pupil and fill it solid black.",
        "Leave a small white dot (catchlight) in the upper-right of the pupil.",
        "Draw radial lines from the pupil edge outward to the iris border — these are the iris fibres.",
        "Add a second ring of shorter radial marks between the first set for a denser, more textured look."
      ]
    }
  ],
  "Stone Wall Section": [
    {
      title: "Wall Section",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="18" width="164" height="164" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="18" y1="70" x2="182" y2="70" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="18" y1="122" x2="182" y2="122" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="55" y1="18" x2="55" y2="70" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="115" y1="18" x2="115" y2="70" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="38" y1="70" x2="38" y2="122" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="88" y1="70" x2="88" y2="122" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="148" y1="70" x2="148" y2="122" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="58" y1="122" x2="58" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="120" y1="122" x2="120" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="20" y1="22" x2="20" y2="68" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="22" y1="22" x2="22" y2="68" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="58" y1="22" x2="58" y2="68" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="60" y1="22" x2="60" y2="68" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="20" y1="125" x2="36" y2="125" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="20" y1="127" x2="36" y2="127" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw the outer border of your wall section first to contain the composition.",
        "Draw horizontal mortar lines dividing the wall into rows — vary the spacing slightly.",
        "Add vertical joints within each row, offset between rows so stones never line up vertically.",
        "Vary stone widths: some wide, some narrow, none identical.",
        "Add a shadow line under the top edge of each stone and light texture marks on stone faces."
      ]
    },
    {
      title: "Single Stone Face",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 55 C30 48 60 40 100 38 C140 36 168 44 175 55 C178 80 172 148 165 158 C148 168 55 170 35 160 C22 152 20 80 25 55 Z" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="25" y1="56" x2="175" y2="56" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="26" y1="60" x2="174" y2="60" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="35" y1="80" x2="45" y2="75" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="90" x2="68" y2="84" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="100" x2="95" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="105" x2="52" y2="100" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="120" y1="118" x2="138" y2="112" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="148" y1="90" x2="162" y2="84" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="28" y1="130" x2="40" y2="124" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="160" y1="130" x2="172" y2="124" stroke="#111" fill="none" stroke-width="0.6"/>
  <path d="M80 140 C90 132 115 135 125 142" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw an irregular quadrilateral — the stone face — with no perfectly straight or parallel sides.",
        "Add a shadow line along the top edge just inside the outline to show the overhang catching light.",
        "Suggest surface texture with a few short diagonal marks scattered across the face.",
        "One side of the stone is lighter; leave it bare. The opposite side gets light hatching.",
        "Add a thin mortar line at the bottom to show it sits in the wall."
      ]
    },
    {
      title: "Wall Corner",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="18" x2="100" y2="182" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="18" x2="18" y2="18" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="182" x2="18" y2="182" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="18" y1="18" x2="18" y2="182" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="18" y1="65" x2="100" y2="65" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="18" y1="115" x2="100" y2="115" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="48" y1="18" x2="48" y2="65" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="72" y1="65" x2="72" y2="115" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="40" y1="115" x2="40" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="75" y1="115" x2="75" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="65" x2="182" y2="65" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="115" x2="182" y2="115" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="140" y1="18" x2="140" y2="65" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="162" y1="65" x2="162" y2="115" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="128" y1="115" x2="128" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="158" y1="115" x2="158" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
</svg>`,
      steps: [
        "Draw the corner as an L-shape — a vertical line meeting a horizontal line at center-page.",
        "The stones on each face alternate at the corner — one face's stone extends to the corner, the other butts against it.",
        "Draw horizontal mortar lines on each face independently, offset at the corner.",
        "Add vertical joints within each row, staggered as in a normal wall.",
        "Hatch the right-facing wall more densely — it receives less light than the front face."
      ]
    },
    {
      title: "Mossy Gap",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="18" width="164" height="70" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="18" y="112" width="164" height="70" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="18" y1="88" x2="182" y2="88" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="18" y1="112" x2="182" y2="112" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="22" y1="88" x2="22" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="88" x2="30" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="38" y1="88" x2="38" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="48" y1="88" x2="48" y2="93" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="88" x2="58" y2="91" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="68" y1="88" x2="68" y2="94" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="88" x2="80" y2="92" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="92" y1="88" x2="92" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="104" y1="88" x2="104" y2="91" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="118" y1="88" x2="118" y2="94" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="132" y1="88" x2="132" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="148" y1="88" x2="148" y2="93" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="162" y1="88" x2="162" y2="91" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="175" y1="88" x2="175" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="112" x2="20" y2="110" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="28" y1="112" x2="28" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="36" y1="112" x2="36" y2="110" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="48" y1="112" x2="48" y2="107" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="62" y1="112" x2="62" y2="109" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="112" x2="80" y2="107" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="112" x2="100" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="120" y1="112" x2="120" y2="106" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="112" x2="140" y2="109" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="160" y1="112" x2="160" y2="107" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="178" y1="112" x2="178" y2="110" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the lower edge of the top stone and the upper edge of the bottom stone — these frame the mortar gap.",
        "The gap is roughly 8–12mm wide on your page; vary its width slightly along the length.",
        "For moss, draw tiny upward-pointing tick marks clustered along the bottom edge of the gap.",
        "Mirror this with downward ticks along the top edge — moss clings to both surfaces.",
        "Add a few dark horizontal scratches in the mortar gap itself to suggest depth and age."
      ]
    }
  ],
  "Keyhole": [
    {
      title: "Ornate Plate",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="65" y="25" width="70" height="150" rx="10" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="72" y="32" width="56" height="136" rx="7" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="100" cy="88" r="22" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M88 108 L88 140 L112 140 L112 108" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="88" y1="108" x2="82" y2="108" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="112" y1="108" x2="118" y2="108" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="72" y1="95" x2="78" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="122" y1="95" x2="128" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="32" x2="100" y2="38" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="160" x2="100" y2="166" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="65" y1="100" x2="72" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="128" y1="100" x2="135" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="74" y1="40" x2="74" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="126" y1="40" x2="126" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="74" y1="155" x2="74" y2="165" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="126" y1="155" x2="126" y2="165" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the escutcheon plate as a tall rounded rectangle filling the center of your page.",
        "Add an inner border line just inside the outer edge for the decorative frame.",
        "Draw the round part of the keyhole: a circle in the upper half of the plate.",
        "Below the circle, draw the rectangular slot: two parallel vertical lines meeting a horizontal base.",
        "The slot's width matches the diameter of the circle — they should connect seamlessly."
      ]
    },
    {
      title: "Simple Keyhole",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="18" width="164" height="164" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="20" y1="20" x2="80" y2="20" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="20" y1="20" x2="20" y2="80" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="120" y1="20" x2="180" y2="20" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="180" y1="20" x2="180" y2="80" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="20" y1="120" x2="20" y2="180" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="20" y1="180" x2="80" y2="180" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="120" y1="180" x2="180" y2="180" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="180" y1="120" x2="180" y2="180" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="22" y1="22" x2="35" y2="22" stroke="#111" fill="none" stroke-width="3"/>
  <line x1="22" y1="22" x2="22" y2="35" stroke="#111" fill="none" stroke-width="3"/>
  <line x1="22" y1="25" x2="32" y2="35" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="28" y1="22" x2="38" y2="32" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="100" cy="88" r="28" stroke="#111" fill="none" stroke-width="2"/>
  <path d="M84 114 L84 150 L116 150 L116 114" stroke="#111" fill="none" stroke-width="2"/>
  <line x1="84" y1="114" x2="76" y2="114" stroke="#111" fill="none" stroke-width="2"/>
  <line x1="116" y1="114" x2="124" y2="114" stroke="#111" fill="none" stroke-width="2"/>
  <line x1="22" y1="50" x2="35" y2="60" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="28" y1="48" x2="40" y2="58" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="35" y1="22" x2="45" y2="32" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Fill the background with dense cross-hatching — the keyhole is defined by what you don't draw.",
        "Draw the round top of the keyhole as a clean circle, leaving it white paper.",
        "Below the circle, draw the slot: two parallel sides meeting a flat bottom.",
        "Make the slot slightly wider at the meeting point with the circle.",
        "Add scratch lines radiating from the keyhole edges — marks from missed keys."
      ]
    },
    {
      title: "Key Inserted",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="62" y="22" width="76" height="156" rx="10" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="90" r="24" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M86 112 L86 144 L114 144 L114 112" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="86" y1="112" x2="80" y2="112" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="114" y1="112" x2="120" y2="112" stroke="#111" fill="none" stroke-width="1.2"/>
  <ellipse cx="100" cy="58" rx="22" ry="16" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="58" r="8" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="100" y1="74" x2="100" y2="144" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="110" x2="112" y2="120" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="100" y1="125" x2="112" y2="132" stroke="#111" fill="none" stroke-width="1.2"/>
</svg>`,
      steps: [
        "Draw the escutcheon plate in the background — the housing for the keyhole.",
        "Draw the key bow (the round grip part) at the top: an oval with a smaller oval hole inside.",
        "Draw the shaft as a straight line descending from the bow into the keyhole.",
        "Add 1–2 rectangular cuts ('bitting') along the lower edge of the shaft.",
        "Show the depth of insertion — the shaft disappears into the plate at the keyhole opening."
      ]
    },
    {
      title: "Scratch Marks",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="90" r="70" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="90" r="32" stroke="#111" fill="none" stroke-width="1.8"/>
  <path d="M84 120 L84 155 L116 155 L116 120" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="84" y1="120" x2="76" y2="120" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="116" y1="120" x2="124" y2="120" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="100" y1="22" x2="96" y2="58" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="22" x2="103" y2="57" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="155" y1="55" x2="128" y2="72" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="157" y1="58" x2="130" y2="74" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="170" y1="110" x2="133" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="168" y1="114" x2="132" y2="104" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="45" y1="55" x2="72" y2="72" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="43" y1="58" x2="70" y2="74" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="110" x2="68" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="32" y1="114" x2="70" y2="104" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw the circular escutcheon plate as the main shape — a large circle filling the frame.",
        "Place the keyhole in the lower-center of the circle: round top, rectangular slot below.",
        "Draw scratch lines radiating outward from the keyhole in all directions.",
        "Make scratches at various angles — they record every missed key attempt.",
        "Near the keyhole opening, make scratches denser and shorter; farther out, longer and more faint."
      ]
    }
  ],
  "Hands Holding": [
    {
      title: "Clasped Hands",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M60 140 C55 120 58 90 65 75 C68 68 75 65 80 70 L82 95" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80 70 C82 62 90 60 93 66 L94 92" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M93 66 C95 58 103 57 106 63 L107 90" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M106 63 C108 55 116 55 118 62 L118 88" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M65 75 C65 105 68 125 72 140" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M118 88 C122 95 125 105 125 120 C125 132 118 142 108 145 C95 148 75 145 65 140" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M140 140 C145 120 142 90 135 75 C132 68 125 65 120 70 L118 95" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M120 70 C118 62 110 60 107 66" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M135 75 C135 105 132 125 128 140" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="80" y1="90" x2="82" y2="100" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="93" y1="88" x2="94" y2="98" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="107" y1="87" x2="107" y2="97" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="118" y1="88" x2="118" y2="98" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the overall mass of both hands together as a single soft rectangle before any detail.",
        "Draw the fingers of one hand as parallel curved shapes emerging from the top.",
        "Interweave the other hand's fingers between them — each finger sits above or below alternating fingers.",
        "Show knuckle bumps on the gripping hand with small curved lines across each finger.",
        "Add tendon lines on the back of each hand radiating from knuckle to wrist."
      ]
    },
    {
      title: "Side Grip",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 90 C50 70 60 55 80 52 C110 48 150 55 155 75 C158 90 150 105 130 108 C110 110 70 108 60 115 C55 120 55 135 60 145" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M50 90 C48 105 52 120 60 145" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M60 145 C65 155 75 158 80 152 L85 138" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M80 152 C84 158 93 158 95 150 L98 136" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M95 150 C98 157 108 156 109 148 L110 135" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M109 148 C112 155 120 153 120 145 L120 132" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="75" y1="60" x2="70" y2="52" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="95" y1="55" x2="92" y2="46" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="115" y1="55" x2="115" y2="46" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="135" y1="58" x2="138" y2="50" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="72" y1="100" x2="72" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="90" y1="100" x2="90" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="100" x2="110" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the forearm being gripped as a rounded cylinder form — two slightly converging lines.",
        "Draw the gripping hand wrapped around: thumb on one side, fingers curving under.",
        "Show the four finger tips appearing below the forearm as small rounded projections.",
        "Add knuckle marks on the gripping fingers where they bend around the forearm.",
        "Use hatching on the underside of the forearm where the grip creates shadow."
      ]
    },
    {
      title: "Fingertip Touch",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M55 30 C52 20 62 15 66 22 L68 75" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M70 25 C68 15 78 12 82 20 L82 75" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M87 25 C85 15 96 13 98 22 L97 75" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M55 30 C50 55 52 80 55 100 C58 110 65 112 72 112 C80 112 85 108 85 100 L85 90" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M145 30 C148 20 138 15 134 22 L132 75" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M130 25 C132 15 122 12 118 20 L118 75" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M113 25 C115 15 104 13 102 22 L103 75" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M145 30 C150 55 148 80 145 100 C142 110 135 112 128 112 C120 112 115 108 115 100 L115 90" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="68" y1="75" x2="132" y2="75" stroke="#111" fill="none" stroke-width="0.5"/>
  <circle cx="100" cy="75" r="2" fill="#111" stroke="none"/>
</svg>`,
      steps: [
        "Draw the left hand from the side: 3 visible fingers extended upward, palm below.",
        "Draw the right hand mirrored on the right side, fingers pointing toward the left fingers.",
        "Bring just the fingertips together at center — they should barely touch.",
        "Add fingernail suggestions at each fingertip: a short curved line across the tip.",
        "Leave a gap of white paper between the two palms — only the fingertips make contact."
      ]
    },
    {
      title: "Prayer Hands",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 22 C95 20 88 28 88 38 L88 155 C88 162 94 168 100 168" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100 22 C105 20 112 28 112 38 L112 155 C112 162 106 168 100 168" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M88 55 C80 53 74 60 76 70 L88 80" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M112 55 C120 53 126 60 124 70 L112 80" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M88 75 C78 73 72 80 74 90 L88 100" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M112 75 C122 73 128 80 126 90 L112 100" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M88 95 C80 93 76 100 78 110 L88 118" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M112 95 C120 93 124 100 122 110 L112 118" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="100" y1="22" x2="100" y2="168" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="90" y1="35" x2="110" y2="35" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="90" y1="50" x2="110" y2="50" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw both hands as a single mirrored form — seen from the side, they form one pointed diamond shape.",
        "The thumbs run along the outer edges; fingers point upward from the center.",
        "Draw a center line where the two palms press together — this is the key dividing axis.",
        "Add horizontal knuckle crease lines across each finger where they bend.",
        "The wrists and base of the hands flare slightly outward from the pressed center."
      ]
    }
  ],
  "Match Flame": [
    {
      title: "Lit Match",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="175" x2="100" y2="95" stroke="#111" fill="none" stroke-width="2"/>
  <ellipse cx="100" cy="90" rx="6" ry="7" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100 83 C96 70 90 58 92 45 C93 35 100 28 100 28 C100 28 107 35 108 45 C110 58 104 70 100 83 Z" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="96" y1="60" x2="93" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="98" y1="55" x2="95" y2="47" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="104" y1="60" x2="107" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="102" y1="55" x2="105" y2="47" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="88" y1="100" x2="82" y2="108" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="86" y1="108" x2="80" y2="116" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="112" y1="100" x2="118" y2="108" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="114" y1="108" x2="120" y2="116" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="96" y1="175" x2="92" y2="178" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="104" y1="175" x2="108" y2="178" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the match stick: a single straight line, slightly thicker at the head end.",
        "At the top, draw the match head as a small rounded oval — it is charred black just below the flame.",
        "Draw the flame above the head: a teardrop shape, wider at the base and pointed at the top.",
        "Hatch the outer edges of the flame densely; leave the center white — flame is brightest at the core.",
        "Suggest glow by leaving the area around the flame blank and hatching more heavily farther from it."
      ]
    },
    {
      title: "Smoke Trail",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="100" y1="175" x2="100" y2="105" stroke="#111" fill="none" stroke-width="2"/>
  <ellipse cx="100" cy="100" rx="6" ry="7" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M100 93 C98 85 102 78 100 70 C98 62 96 55 100 48 C104 42 100 35 100 35" stroke="#111" fill="none" stroke-width="1"/>
  <path d="M100 90 C104 82 98 74 103 65 C108 56 104 47 108 40" stroke="#111" fill="none" stroke-width="0.6"/>
  <path d="M100 90 C96 82 102 74 97 65 C92 56 96 47 92 40" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="96" y1="175" x2="92" y2="178" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="104" y1="175" x2="108" y2="178" stroke="#111" fill="none" stroke-width="1.5"/>
</svg>`,
      steps: [
        "Draw the match stick vertically with the burnt head at the top.",
        "The head is very dark — fill it with dense hatching, it is all carbon.",
        "From the head, draw a thin sinuous smoke line rising upward, curving gently left then right.",
        "Add two fainter parallel lines alongside the main smoke line, diverging slightly as they rise.",
        "Let the smoke lines fade and spread apart near the top of the page."
      ]
    },
    {
      title: "Matchbox",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="35" y="65" width="130" height="80" rx="4" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="35" y="145" width="130" height="12" rx="2" stroke="#111" fill="none" stroke-width="1"/>
  <rect x="35" y="53" width="130" height="12" rx="2" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="38" y1="147" x2="162" y2="147" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="38" y1="149" x2="162" y2="149" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="38" y1="151" x2="162" y2="151" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="38" y1="153" x2="162" y2="153" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="38" y1="55" x2="162" y2="55" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="38" y1="57" x2="162" y2="57" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="38" y1="59" x2="162" y2="59" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="38" y1="61" x2="162" y2="61" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="60" y1="70" x2="60" y2="140" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="140" y1="70" x2="140" y2="140" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="68" x2="100" y2="142" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="65" y1="22" x2="100" y2="53" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="135" y1="22" x2="100" y2="53" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="65" y1="22" x2="135" y2="22" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="68" y1="25" x2="100" y2="52" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="90" y1="22" x2="97" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="22" x2="103" y2="52" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the box as a slightly foreshortened rectangle — it is seen from a slight angle.",
        "Add the striking strip as a narrow rectangle along the long bottom edge, with dense horizontal hatching.",
        "Draw the sleeve opening at the top, showing a few match heads poking out.",
        "Add a label area in the center of the box face with text-suggestion lines.",
        "Show the box corner edges with parallel lines to give the flat rectangle dimensional depth."
      ]
    },
    {
      title: "Candle Flame",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="82" y="120" width="36" height="60" rx="3" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M82 130 C75 128 70 132 72 138 C74 144 82 145 82 145" stroke="#111" fill="none" stroke-width="0.8"/>
  <path d="M118 130 C125 128 130 132 128 138 C126 144 118 145 118 145" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="85" y1="125" x2="82" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="90" y1="122" x2="88" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="110" y1="122" x2="112" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="115" y1="125" x2="118" y2="120" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="120" x2="100" y2="115" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M100 115 C96 100 90 88 93 74 C95 62 100 55 100 55 C100 55 105 62 107 74 C110 88 104 100 100 115 Z" stroke="#111" fill="none" stroke-width="1.2"/>
  <line x1="95" y1="82" x2="92" y2="73" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="97" y1="76" x2="94" y2="67" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="105" y1="82" x2="108" y2="73" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="84" y1="140" x2="88" y2="140" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="84" y1="150" x2="88" y2="150" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="84" y1="160" x2="88" y2="160" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the candle body as a short, wide rectangle — it is a squat stub, almost burned down.",
        "Add wax drip marks on the sides: gentle teardrop-shaped drips running down.",
        "Draw the wick as a thin line from the top center, slightly curved.",
        "Draw the flame above the wick: a teardrop shape, narrowing to a point at the top.",
        "Hatch the candle body with vertical lines; leave the wax drip areas lighter."
      ]
    }
  ],
  "Cobblestone Path": [
    {
      title: "Vanishing Point",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="18" y1="182" x2="100" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="182" y1="182" x2="100" y2="55" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="18" y1="182" x2="182" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="28" y1="162" x2="172" y2="162" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="42" y1="140" x2="158" y2="140" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="58" y1="118" x2="142" y2="118" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="72" y1="98" x2="128" y2="98" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="82" y1="82" x2="118" y2="82" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="182" x2="65" y2="55" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="90" y1="182" x2="95" y2="55" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="110" y1="182" x2="105" y2="55" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="145" y1="182" x2="135" y2="55" stroke="#111" fill="none" stroke-width="0.6"/>
  <path d="M18 170 C35 168 52 172 55 170 C58 168 75 165 90 162" stroke="#111" fill="none" stroke-width="0.8"/>
  <path d="M55 170 C60 165 75 168 90 162 C105 158 110 160 130 158" stroke="#111" fill="none" stroke-width="0.8"/>
</svg>`,
      steps: [
        "Mark a vanishing point near the top center of the page — all perspective lines radiate from here.",
        "Draw the path edges as two lines converging toward the vanishing point.",
        "Add horizontal lines crossing the path at intervals — these define the stone rows and compress as they recede.",
        "Draw vertical joint lines between stones in each row, also converging slightly toward the vanishing point.",
        "Stones near the viewer are large; stones far away are tiny compressed rectangles."
      ]
    },
    {
      title: "Curved Lane",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M35 182 C55 155 80 140 100 120 C120 100 140 80 155 55" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M80 182 C95 155 115 140 130 120 C145 100 158 80 168 55" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M38 170 C58 168 75 162 85 158" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M40 155 C60 153 78 147 90 142" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M50 140 C68 138 85 132 98 128" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M60 125 C76 123 92 118 105 114" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M75 110 C88 108 102 103 115 100" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M90 95 C102 93 115 88 126 85" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M105 80 C115 78 125 74 135 71" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="54" y1="182" x2="62" y2="155" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="68" y1="182" x2="73" y2="155" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="78" y1="168" x2="85" y2="140" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw two curved path-edge lines that bend in an S-curve from the foreground to the background.",
        "The path narrows as it recedes — perspective still applies even on a curved path.",
        "Draw stone-row lines as short curves crossing the path, always perpendicular to the path direction.",
        "Add joint lines within each row, curved to follow the path's direction.",
        "Irregular stones at the path edges are rougher and more weathered — suggest this with broken outlines."
      ]
    },
    {
      title: "Single Cobble",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M32 90 C35 55 65 28 100 25 C135 28 168 55 170 88 C172 118 148 168 100 172 C52 168 28 122 32 90 Z" stroke="#111" fill="none" stroke-width="1.8"/>
  <line x1="32" y1="92" x2="170" y2="90" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="34" y1="98" x2="168" y2="96" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="40" y1="78" x2="55" y2="72" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="55" y1="55" x2="70" y2="48" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="80" y1="35" x2="100" y2="30" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="42" y1="115" x2="58" y2="108" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="45" y1="130" x2="62" y2="122" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="52" y1="145" x2="70" y2="136" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="155" y1="78" x2="145" y2="70" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="158" y1="110" x2="148" y2="102" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the cobble as an irregular rounded shape — no right angles, slightly lumpy.",
        "The top face catches the light; leave it mostly bare.",
        "The front face angles slightly away from the viewer — add horizontal hatching lines here.",
        "The mortar gap surrounds the stone: leave a thin white border, then add a thin shadow line.",
        "Worn surface texture: a few curved scratches following the stone's convex surface."
      ]
    },
    {
      title: "Rainy Puddle",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="18" y1="182" x2="100" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="182" y1="182" x2="100" y2="65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="18" y1="182" x2="182" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="30" y1="165" x2="170" y2="165" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="45" y1="145" x2="155" y2="145" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="58" y1="125" x2="142" y2="125" stroke="#111" fill="none" stroke-width="0.8"/>
  <ellipse cx="100" cy="158" rx="35" ry="10" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="72" y1="156" x2="128" y2="156" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="70" y1="158" x2="130" y2="158" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="72" y1="160" x2="128" y2="160" stroke="#111" fill="none" stroke-width="0.6"/>
  <circle cx="95" cy="156" r="3" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="110" cy="159" r="2" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="88" cy="160" r="1.5" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the cobblestone path in perspective as usual, with rows receding to a vanishing point.",
        "Leave an irregular elliptical gap in the stones — this is your puddle.",
        "Fill the puddle area with close horizontal lines — reflections in still water are horizontal.",
        "Add 2–3 small concentric ring circles in the puddle where raindrops are hitting.",
        "The cobblestones immediately around the puddle are darker — add hatching to show wetness."
      ]
    }
  ],
  "Bicycle Wheel": [
    {
      title: "Full Wheel Front",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="82" stroke="#111" fill="none" stroke-width="2"/>
  <circle cx="100" cy="100" r="72" stroke="#111" fill="none" stroke-width="0.7"/>
  <circle cx="100" cy="100" r="12" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="100" cy="100" r="5" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="100" y1="88" x2="100" y2="18" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="112" x2="100" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="88" y1="100" x2="18" y2="100" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="112" y1="100" x2="182" y2="100" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="91" y1="91" x2="43" y2="43" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="109" y1="109" x2="157" y2="157" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="109" y1="91" x2="157" y2="43" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="91" y1="109" x2="43" y2="157" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="95" y1="88" x2="78" y2="20" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="105" y1="88" x2="122" y2="20" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="88" y1="95" x2="20" y2="78" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="88" y1="105" x2="20" y2="122" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="105" y1="112" x2="122" y2="180" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="95" y1="112" x2="78" y2="180" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="112" y1="105" x2="180" y2="122" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="112" y1="95" x2="180" y2="78" stroke="#111" fill="none" stroke-width="0.8"/>
</svg>`,
      steps: [
        "Draw two concentric circles for the outer tire — a thick outer ring representing the tire cross-section.",
        "Draw a small circle at the center for the hub.",
        "Lightly sketch spoke lines from hub to rim — space them evenly, like clock hands.",
        "Spokes come in pairs: each pair crosses at the hub and attaches at different rim points.",
        "Add a subtle shadow line on the inside of the rim's lower arc to suggest the wheel's cylinder form."
      ]
    },
    {
      title: "Hub Detail",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="20" stroke="#111" fill="none" stroke-width="2"/>
  <circle cx="100" cy="100" r="10" stroke="#111" fill="none" stroke-width="1.2"/>
  <circle cx="100" cy="100" r="5" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="100" y1="80" x2="100" y2="15" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="100" y1="120" x2="100" y2="185" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="80" y1="100" x2="15" y2="100" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="120" y1="100" x2="185" y2="100" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="86" y1="86" x2="35" y2="35" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="114" y1="114" x2="165" y2="165" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="114" y1="86" x2="165" y2="35" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="86" y1="114" x2="35" y2="165" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="90" y1="82" x2="65" y2="18" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="110" y1="82" x2="135" y2="18" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="82" y1="90" x2="18" y2="65" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="82" y1="110" x2="18" y2="135" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="110" y1="118" x2="135" y2="182" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="90" y1="118" x2="65" y2="182" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="118" y1="110" x2="182" y2="135" stroke="#111" fill="none" stroke-width="0.9"/>
  <line x1="118" y1="90" x2="182" y2="65" stroke="#111" fill="none" stroke-width="0.9"/>
</svg>`,
      steps: [
        "Draw three concentric circles for the hub: outer flange, inner flange, and axle hole.",
        "From the outer flange, draw spokes radiating in all directions to the page edge.",
        "Spokes alternate slightly — one pair angled one way, the next pair slightly different.",
        "Add small bump marks on the hub flange where spokes attach — spoke nipple detail.",
        "The axle hole at center should be very dark — hatch it solidly to suggest depth."
      ]
    },
    {
      title: "Spoke Fan",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 182 C60 160 100 145 145 100 C165 80 175 55 182 18" stroke="#111" fill="none" stroke-width="2"/>
  <path d="M18 182 C55 170 90 162 125 145 C150 132 168 112 182 18" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="18" cy="182" r="15" stroke="#111" fill="none" stroke-width="1.5"/>
  <circle cx="18" cy="182" r="6" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="18" y1="167" x2="100" y2="15" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="18" y1="167" x2="45" y2="15" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="18" y1="167" x2="155" y2="15" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="33" y1="182" x2="182" y2="100" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="33" y1="182" x2="182" y2="145" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="33" y1="182" x2="182" y2="55" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="24" y1="170" x2="170" y2="24" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="24" y1="170" x2="182" y2="70" stroke="#111" fill="none" stroke-width="0.8"/>
</svg>`,
      steps: [
        "Draw a partial arc for the rim — just a quarter circle sweeping from lower left to upper right.",
        "Place the hub in the lower-left corner where the arc would center.",
        "Draw spokes radiating from the hub out to the arc — they fan across the page.",
        "Space them evenly by angle, not by distance along the rim.",
        "Add the hub detail: three concentric circles and a few small marks for spoke attachments."
      ]
    },
    {
      title: "Wheel at Angle",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="82" ry="28" stroke="#111" fill="none" stroke-width="2"/>
  <ellipse cx="100" cy="100" rx="72" ry="22" stroke="#111" fill="none" stroke-width="0.7"/>
  <ellipse cx="100" cy="100" rx="12" ry="4" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="96" x2="100" y2="18" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="100" y1="104" x2="100" y2="182" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="88" y1="100" x2="18" y2="100" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="112" y1="100" x2="182" y2="100" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="92" y1="97" x2="38" y2="72" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="108" y1="103" x2="162" y2="128" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="108" y1="97" x2="162" y2="72" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="92" y1="103" x2="38" y2="128" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="96" y1="96" x2="72" y2="20" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="104" y1="96" x2="128" y2="20" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="96" y1="104" x2="72" y2="180" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="104" y1="104" x2="128" y2="180" stroke="#111" fill="none" stroke-width="0.8"/>
</svg>`,
      steps: [
        "Draw the rim as an ellipse — a wheel seen at angle looks oval, not circular.",
        "The flatter the ellipse, the more the wheel is tilted toward you.",
        "Draw the hub as a small ellipse at center, matching the same degree of foreshortening.",
        "Spokes radiate from the hub ellipse to the rim ellipse — they look shorter on the near and far sides.",
        "The tire thickness is visible on the top and bottom of the ellipse — add a second parallel ellipse for it."
      ]
    }
  ],
  "Stack of Books": [
    {
      title: "Three Books",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="35" y="48" width="128" height="32" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="28" y="80" width="140" height="36" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="32" y="116" width="135" height="42" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="50" y1="48" x2="50" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="50" y1="80" x2="43" y2="80" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="48" y1="116" x2="48" y2="158" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="48" y1="158" x2="32" y2="158" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="45" y1="80" x2="45" y2="116" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="35" y1="58" x2="163" y2="58" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="35" y1="63" x2="163" y2="63" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="35" y1="68" x2="100" y2="68" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="28" y1="92" x2="168" y2="92" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="28" y1="98" x2="168" y2="98" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="28" y1="104" x2="120" y2="104" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="32" y1="130" x2="167" y2="130" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="32" y1="137" x2="167" y2="137" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="32" y1="144" x2="140" y2="144" stroke="#111" fill="none" stroke-width="0.5"/>
</svg>`,
      steps: [
        "Draw the top book as a rectangle; add a thin spine strip on the left side.",
        "Draw the second book below, slightly wider and taller, extending a bit to the left.",
        "Draw the third book at the bottom, the widest of the three.",
        "Offset each book slightly — a perfectly aligned stack looks unnatural.",
        "Add title-suggestion lines (horizontal stripes) on each spine and a few on the cover faces."
      ]
    },
    {
      title: "Leaning Stack",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M72 25 L128 25 L128 62 L72 62 Z" stroke="#111" fill="none" stroke-width="1.5" transform="rotate(-8,100,44)"/>
  <path d="M65 62 L138 62 L142 100 L62 100 Z" stroke="#111" fill="none" stroke-width="1.5" transform="rotate(-3,100,81)"/>
  <path d="M60 100 L145 100 L148 145 L58 145 Z" stroke="#111" fill="none" stroke-width="1.5" transform="rotate(2,100,122)"/>
  <path d="M55 145 L150 145 L152 182 L53 182 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="75" y1="145" x2="75" y2="182" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="95" y1="145" x2="95" y2="182" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="115" y1="145" x2="115" y2="182" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="58" y1="155" x2="152" y2="155" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="58" y1="162" x2="152" y2="162" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="58" y1="170" x2="110" y2="170" stroke="#111" fill="none" stroke-width="0.5"/>
</svg>`,
      steps: [
        "Draw the bottom book first — it sits flat and anchors the stack.",
        "Each book above leans slightly in a different direction — none are perfectly level.",
        "Lean some left, some right — the overall impression is an unstable but charming pile.",
        "Show page edges on at least one book: thin parallel lines along the non-spine edges.",
        "The spine of each book should face the viewer — add title lines on each one."
      ]
    },
    {
      title: "Open Book",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 65 C20 60 28 55 100 55 C172 55 180 60 180 65 L180 160 C180 165 172 168 100 168 C28 168 20 165 20 160 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="100" y1="55" x2="100" y2="168" stroke="#111" fill="none" stroke-width="1.2"/>
  <path d="M20 65 C40 68 80 70 100 68 C120 70 160 68 180 65" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="82" x2="95" y2="82" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="90" x2="95" y2="90" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="98" x2="95" y2="98" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="106" x2="92" y2="106" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="114" x2="95" y2="114" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="122" x2="88" y2="122" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="130" x2="95" y2="130" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="138" x2="92" y2="138" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="82" x2="170" y2="82" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="90" x2="170" y2="90" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="98" x2="170" y2="98" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="106" x2="168" y2="106" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="114" x2="170" y2="114" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="122" x2="165" y2="122" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="130" x2="170" y2="130" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="105" y1="138" x2="168" y2="138" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw the open book as a wide, low rectangle — seen from a slight angle above.",
        "Draw the spine as a vertical center line; the pages curve gently away from it on both sides.",
        "Show page curvature: lines of text (horizontal stripes) curve slightly toward the spine.",
        "The outer page edges at top arc upward slightly — an open book is never perfectly flat.",
        "Add a shadow in the gutter (along the spine) with close hatching to show depth."
      ]
    },
    {
      title: "Spine View",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="28" y="25" width="22" height="155" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="52" y="30" width="30" height="150" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="84" y="22" width="18" height="158" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="104" y="28" width="35" height="152" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <rect x="141" y="32" width="25" height="148" rx="2" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="28" y1="168" x2="166" y2="168" stroke="#111" fill="none" stroke-width="1"/>
  <line x1="28" y1="175" x2="166" y2="175" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="30" y1="40" x2="48" y2="40" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="30" y1="47" x2="48" y2="47" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="54" y1="45" x2="80" y2="45" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="54" y1="53" x2="80" y2="53" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="86" y1="38" x2="100" y2="38" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="106" y1="42" x2="137" y2="42" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="106" y1="50" x2="137" y2="50" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="143" y1="45" x2="164" y2="45" stroke="#111" fill="none" stroke-width="0.6"/>
</svg>`,
      steps: [
        "Draw books standing upright side by side, seen from the page-edge side.",
        "Each book is a tall thin rectangle — vary the heights and widths.",
        "The page edges facing you are a solid straight line; suggest pages with very faint parallel lines.",
        "On each spine face (the thin rectangular strip), add title-suggestion lines.",
        "Draw a shelf line beneath all books and a faint shadow under each book on the shelf."
      ]
    }
  ],
  "Rain on Glass": [
    {
      title: "Window Streaks",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="18" width="164" height="164" stroke="#111" fill="none" stroke-width="2"/>
  <line x1="100" y1="18" x2="100" y2="182" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="18" y1="100" x2="182" y2="100" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M40 20 C38 35 42 42 40 55 C38 68 36 75 38 90" stroke="#111" fill="none" stroke-width="1"/>
  <path d="M38 58 C35 65 33 72 35 80" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M65 20 C64 38 68 48 66 62 C64 76 62 85 64 98 C66 112 65 125 63 140" stroke="#111" fill="none" stroke-width="1"/>
  <path d="M64 98 C60 108 58 118 60 130" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M120 20 C118 32 122 40 120 52 C118 64 116 75 118 90 C120 105 119 118 117 132" stroke="#111" fill="none" stroke-width="1"/>
  <path d="M120 52 C116 60 114 68 116 78" stroke="#111" fill="none" stroke-width="0.7"/>
  <path d="M150 20 C148 42 152 52 150 68 C148 82 146 95 148 110" stroke="#111" fill="none" stroke-width="1"/>
  <circle cx="40" cy="30" r="2.5" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="66" cy="28" r="3" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="120" cy="25" r="2" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="150" cy="32" r="2.5" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="20" y1="158" x2="180" y2="158" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="20" y1="162" x2="180" y2="162" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw the window frame as a rectangle with a cross-bar dividing it into four panes.",
        "Draw rain streaks as slightly wavy vertical lines descending through the panes.",
        "Each streak pauses briefly at a round drop before continuing down — draw the drop as a small circle.",
        "Streaks fork: a drop sometimes splits into two thinner channels below it.",
        "At the bottom of the pane, add 2 horizontal lines for collected condensation."
      ]
    },
    {
      title: "Drop Close-up",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M55 60 C52 50 60 40 68 46 C66 36 78 32 82 42 C86 36 96 36 96 46 C102 38 114 40 112 52 C118 48 125 56 120 64 C124 62 128 70 122 76 L55 76 C50 70 50 64 55 60 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="62" y1="52" x2="68" y2="48" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="72" y1="48" x2="78" y2="44" stroke="#111" fill="none" stroke-width="0.6"/>
  <path d="M80 140 C76 125 82 112 90 118 C88 108 100 105 104 115 C108 108 118 110 116 120 C120 115 128 122 124 130 L80 140 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <path d="M130 105 C127 95 135 85 143 91 C141 81 153 78 157 88 C162 82 168 88 165 96 L130 105 Z" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="58" y1="76" x2="56" y2="95" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="85" y1="140" x2="83" y2="162" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="135" y1="105" x2="133" y2="125" stroke="#111" fill="none" stroke-width="0.7"/>
</svg>`,
      steps: [
        "Draw a large water drop: a rounded top and a pointed bottom, like a slightly squashed teardrop.",
        "Inside the drop, leave most of the interior white — water is transparent.",
        "Add a highlight area: a small white patch in the upper-left of the drop, outlined with a fine curved line.",
        "Draw the shadow along the lower-right inside edge of the drop with close hatching.",
        "Below each drop, draw a short thin streak showing water running down from the drop's lowest point."
      ]
    },
    {
      title: "Framed View",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="18" width="164" height="164" stroke="#111" fill="none" stroke-width="3"/>
  <rect x="30" y="30" width="140" height="140" stroke="#111" fill="none" stroke-width="0.7"/>
  <line x1="100" y1="18" x2="100" y2="182" stroke="#111" fill="none" stroke-width="2.5"/>
  <line x1="18" y1="100" x2="182" y2="100" stroke="#111" fill="none" stroke-width="2.5"/>
  <line x1="40" y1="32" x2="50" y2="98" stroke="#111" fill="none" stroke-width="0.6"/>
  <path d="M50 50 C48 62 52 72 50 82" stroke="#111" fill="none" stroke-width="0.8"/>
  <path d="M70 32 C68 48 72 60 70 74 C68 88 68 95 70 98" stroke="#111" fill="none" stroke-width="0.8"/>
  <path d="M70 74 C66 82 64 88 66 96" stroke="#111" fill="none" stroke-width="0.6"/>
  <path d="M115 102 C113 115 117 126 115 138 C113 150 113 158 115 168" stroke="#111" fill="none" stroke-width="0.8"/>
  <path d="M140 102 C138 118 142 130 140 145 C138 158 138 165 140 168" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="38" y1="130" x2="45" y2="130" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="55" y1="140" x2="95" y2="140" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="38" y1="150" x2="95" y2="150" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="38" y1="160" x2="70" y2="160" stroke="#111" fill="none" stroke-width="0.5"/>
</svg>`,
      steps: [
        "Draw the window frame with bold lines — it is the structural anchor of the scene.",
        "Draw rain streaks in two or three panes; leave one pane nearly clear to vary the density.",
        "In the lower panes, suggest the blurry street scene below with loose horizontal hatching.",
        "The window frame itself is thick and dark; add shadow on its inner face.",
        "Leave the upper panes lighter — rain is heaviest where it collects near the bottom."
      ]
    },
    {
      title: "Condensation Line",
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="18" y="100" width="164" height="82" stroke="#111" fill="none" stroke-width="1.5"/>
  <line x1="18" y1="100" x2="182" y2="100" stroke="#111" fill="none" stroke-width="2"/>
  <path d="M18 100 C35 92 50 98 65 90 C80 82 95 95 110 88 C125 82 140 94 155 86 C168 80 175 92 182 88" stroke="#111" fill="none" stroke-width="1"/>
  <circle cx="28" cy="102" r="2.5" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="45" cy="100" r="3" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="62" cy="103" r="2" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="80" cy="100" r="3.5" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="98" cy="102" r="2.5" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="115" cy="100" r="3" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="132" cy="103" r="2" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="150" cy="100" r="3" stroke="#111" fill="none" stroke-width="0.8"/>
  <circle cx="168" cy="102" r="2.5" stroke="#111" fill="none" stroke-width="0.8"/>
  <line x1="20" y1="112" x2="180" y2="112" stroke="#111" fill="none" stroke-width="0.6"/>
  <line x1="20" y1="118" x2="180" y2="118" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="20" y1="125" x2="180" y2="125" stroke="#111" fill="none" stroke-width="0.5"/>
  <line x1="20" y1="132" x2="90" y2="132" stroke="#111" fill="none" stroke-width="0.4"/>
  <line x1="20" y1="140" x2="50" y2="140" stroke="#111" fill="none" stroke-width="0.4"/>
</svg>`,
      steps: [
        "Draw the bottom edge of the window pane as a thick horizontal line.",
        "Just below it, draw a wavy line following the bottom edge of the glass — this is the condensation boundary.",
        "Along this wavy line, draw small circles or teardrops — water beads collecting along the bottom.",
        "The largest drops are in the center where they pool most; tiny drops gather at the edges.",
        "Below the condensation line, add a few short downward streaks where drops overflow and run down."
      ]
    }
  ],
};
