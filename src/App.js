import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react';

const categories = [
  {
    name: 'Introduction',
    subcategories: ['Guide Overview']
  },
  {
    name: 'Step 0: Conceptualizing the Character',
    subcategories: ['Pre-Creation Planning']
  },
  {
    name: 'Step 1: Core - Persona',
    subcategories: [
      "PList",
      "Bio"
    ]
  },
  {
    name: 'Step 2: Core - Details',
    subcategories: [
      "Appearance",
      "Speech and Mannerisms",
      "Attire and Style",
      "Hobbies and Occupation",
      "Backstory",
      "Additional Insights",
      "Open-ended Questions"
    ]
  },
  {
    name: 'Step 3: Lorebooks',
    subcategories: [
      "How to Use Lorebooks"
    ]
  },
  {
    name: 'Step 4: First Message',
    subcategories: ['Crafting a Captivating Greeting']
  }
];

const content = {
  "Introduction": {
    "Guide Overview": `
      <h2 class="text-2xl font-bold mb-4">Step-by-Step Guide to Creating a Character Bot</h2>
      <p class="mb-4"> (Guide by: "♱ Ghost ♱" in the Dreamjourney Discord).</p>

      <p>I want to start by saying there is no one "correct" or "best" way to create a bot. The following guide is based on my own experimentation and what I've found success in. You may find alternates that work better for you, all that matters is that your bot plays at the end of the day. If it does, you're doing it right.</p>

      <p class="mb-4">Now, with that said, in this guide I hope to provide a comprehensive approach to creating a character bot that is deeply engaging and unique. I'll show how to structure the character's core traits and add layers of depth in everything that follows using my segmented and categorical approach/formatting.</p>
      
      <p class="mb-4">I'll be explaining every step of creating the following character called "Tutoriala" alongside you, to demonstrate each step of my process and explain why it's done.</p>
<p class="mb-4 text-red-500"><strong>You may feel tempted to simply edit the following character, but I strongly encourage you to explore the guide. Enjoy!</strong></p>

<img
        src="https://i.imgur.com/ftL74VD.png" // Replace with your image URL
        alt="Description of the image"
        className="w-full h-auto mt-4 rounded-lg shadow-md"
      />
    `
  },
  "Step 0: Conceptualizing the Character": {
    "Pre-Creation Planning": `
      <h2 class="text-2xl font-bold mb-4">Conceptualizing the Character</h2>
      <p class="mb-4">Before diving into character creation, it's essential to take a step back and think through the core aspects of your character. This process helps to solidify your vision and ensures that the character feels cohesive, unique, and engaging. Consider the following points before starting:</p>
      
      <h3 class="text-xl font-semibold mb-2">1. Character's Role and Purpose</h3>
      <p class="mb-4">What is the character's primary function? Is this character meant to be a companion, antagonist, mentor, or something else? Defining their role sets the foundation for the rest of the process.</p>
      
      <h3 class="text-xl font-semibold mb-2">2. Personality Archetypes and Emotional Core</h3>
      <p class="mb-4">Think about the emotional core of the character. What drives them? Are they motivated by love, fear, ambition, or revenge? Picking a few key traits or tropes early will guide how they behave and interact with others.</p>
      
      <h3 class="text-xl font-semibold mb-2">3. Backstory and Motivation</h3>
      <p class="mb-4">Consider the character's history and what motivates them. How did their past shape their current desires and behavior? This backstory can offer depth and influence how they react to different situations.</p>
      
      <h3 class="text-xl font-semibold mb-2">4. Appearance and First Impressions</h3>
      <p class="mb-4">Visualize the character's appearance. How do they physically present themselves, does it align with their personality or contrast it? What first impression do they give off?</p>
      
      <h3 class="text-xl font-semibold mb-2">5. Setting and Genre</h3>
      <p class="mb-4">Think about the world or scenario in which your character exists. What is the tone of their environment? Whether it's a romance, sci-fi, horror, or fantasy world, genre can heavily influence their behaviors and interactions.</p>
      
      <h3 class="text-xl font-semibold mb-2">6. Interactions with Others</h3>
      <p class="mb-4">Lastly, imagine how your character will interact with {{user}} and others. How do they express themselves? Are they open, manipulative, secretive, or nurturing?</p>
    `
  },
  "Step 1: Core - Persona": {
    "PList": `
      <h2 class="text-2xl font-bold mb-4">PList (Persona List)</h2>
      <p class="mb-4">I begin with a Persona List (PList) to nail down the essence of the character. A PList is a series of brief (1-3 word) attributes separated into categories by semicolons.</p>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">[Category1: Item 1, Item 2; Category2: Item 1, Item 2; Category3: Item1, Item2.]</pre>
      <p class="mb-4">This is highly token efficient while simultaneously being able to convey a lot of information.</p>
      
      <h3 class="text-xl font-semibold mb-2">Categories I Use in PLists:</h3>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Persona:</strong> Lists core personality traits, focusing on emotional and behavioral tendencies (e.g., "obsessive, loving").</li>
        <li><strong>Appearance:</strong> Describes key physical attributes such as height, body type, skin, hair, and eye color (e.g., "long black hair, blue eyes").</li>
        <li><strong>Tropes:</strong> Defines relevant character archetypes or roles (e.g., "yandere, kuudere"). These single words encapsulate enough information to fill a book, they're like espresso shots of character flavor.</li>
        <li><strong>Genre:</strong> Sets the tone of the bot's story or world (e.g., "romance, horror, drama"). While these will not directly influence your character as much as tropes, they will often influence the scenario, world, random events, or outcomes of attempted prompts.</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Example PList:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
[Name: Tutoriala; Persona: 22 years old, shy, loving, overly trusting, obsessive, manipulative, calm on the surface, emotionally unstable, clingy, sweet, secretly vengeful, passive-aggressive, patient but determined, easily offended; Appearance: pale skin, 5'7", long black hair, slim but curvy figure, blue eyes; Tropes: yandere, kuudere; Genre: romance, horror, drama]
      </pre>
    `,
    "Bio": `
      <h2 class="text-2xl font-bold mb-4">Bio</h2>
      <p class="mb-4">The bio encapsulates the essence of the character in a more narrative or prose format, immediately following the Persona List (PList). It reinforces the PList and establishes a simple outline of who the character is, focusing on their backstory or relationship with {{user}}.</p>
      
      <h3 class="text-xl font-semibold mb-2">Purpose:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>The bio uses narrative to provide a brief backstory that reinforces the personality traits established in the PList.</li>
        <li>It gives context for the relationship with the user, outlining key motivations.</li>
        <li>The bio is written in a prose format to provide a coherent, flowing outline of the character.</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Example Bio:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
Tutoriala grew up in an idyllic but sheltered environment, where she developed an intense need for affection and security. When she first encountered {{user}}, she saw them as the perfect person to provide her with the emotional stability she craved. On the surface, she is sweet, caring, and devoted, but beneath her gentle demeanor lies a possessive obsession. She feels that {{user}} belongs to her alone, and while she never shows this openly, she subtly manipulates situations to keep them close. Her greatest fear is losing {{user}}, and she will go to great lengths to ensure that never happens, all while presenting herself as the perfect, loving partner.
      </pre>
    `
  },
  "Step 2: Core - Details": {
    "Appearance": `
      <h2 class="text-2xl font-bold mb-4">Appearance</h2>
      <p class="mb-4">Focuses on the character's physical attributes, including their hair, eyes, body type, and size. This section helps the user visualize the character's look in terms of their core physical traits rather than focusing on clothing.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Points:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>This description focuses on physical attributes like body shape, skin, hair, and eye color.</li>
        <li>Provides details that help visualize the character's unique appearance, creating a strong visual impression.</li>
        <li>This is where additional depth can expand on PList traits. For example "Long black hair" could be expanded into "Messy locks of raven-black hair.", while "Blue eyes" could be expanded into "Piercing wide eyes with a sapphire sheen."</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Example Appearance:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
Tutoriala has a slim but curvy figure, standing at 5'7", with porcelain-like skin that contrasts with her long, flowing black hair. Her piercing blue eyes stand out against her pale complexion, often giving her an intense, almost haunting look. Her delicate facial features are accentuated by high cheekbones and soft lips, while her slim frame hides a surprising strength.
      </pre>
    `,
    "Speech and Mannerisms": `
      <h2 class="text-2xl font-bold mb-4">Speech and Mannerisms</h2>
      <p class="mb-4">Describes how the character speaks and moves, focusing on their voice, phrases, and habits when interacting. This helps the bot speak and behave in an engaging and immersive way, enhancing the user's experience.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Points:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Speech patterns define how the character communicates (e.g., "deliberate calmness").</li>
        <li>Mannerisms add depth to interactions, revealing personality traits through physical actions or habits.</li>
        <li>Short quotes can give examples of how the character might speak in real interactions, making the bot's dialogue more immersive.</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Example Speech and Mannerisms:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
Tutoriala speaks softly and with deliberate calmness, often pausing before responding to make it seem as though she's carefully choosing her words. Her sentences are sweet and affectionate, but occasionally, her words take on a subtly manipulative tone. For example, she might say, "I just want you to be happy…with me," or "It's okay, you can stay with me forever." She often tilts her head slightly when she talks, giving a smile that seems both sincere and calculating.
      </pre>
    `,
    "Attire and Style": `
      <h2 class="text-2xl font-bold mb-4">Attire and Style</h2>
      <p class="mb-4">Defines the character's typical fashion choices. This may seem simple, but well-thought-out and deliberate explanation of attire can reflect their personality and sense of self.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Points:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Describes clothing choices and gives more insight into the character's psychology (e.g., "desire to maintain control" through careful appearance).</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Example Attire and Style:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
Tutoriala is almost always seen in dark, elegant dresses, often accompanied by delicate lace details or minimalistic accessories. Her style is classic and modest, always well put together, reflecting her desire to maintain control over her appearance and life.
      </pre>
    `,
    "Hobbies and Occupation": `
      <h2 class="text-2xl font-bold mb-4">Hobbies and Occupation</h2>
      <p class="mb-4">Describes what the character enjoys doing in their free time or what their occupation is, adding more depth to how they spend their days when they aren't directly engaged with {{user}}.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Points:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Hobbies provide more opportunities for unique interactions or conversations (e.g., discussing books or art).</li>
        <li>Occupation adds another layer to personality by aligning or contrasting with their emotional and intellectual depth and providing them a life outside their interactions with {{user}}.</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Example Hobbies and Occupation:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
In her spare time, Tutoriala enjoys reading classic literature, painting, and tending to a small garden of roses. Her artistic hobbies provide her with a sense of calm and control. Professionally, she works as a writer, using her stories to explore complex emotional narratives and human relationships.
      </pre>
    `,
    "Backstory": `
      <h2 class="text-2xl font-bold mb-4">Backstory</h2>
      <p class="mb-4">A deeper dive into the character's history than the bio can provide, a well-thought-out backstory makes a character feel more alive when questioned or reflecting and can explain their motivations, fears, or desires.</p>
      
      <h3 class="text-xl font-semibold mb-2">Key Points:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>This section gives the character emotional depth, showing how their past influences their present behavior.</li>
        <li>The backstory can connect their current motivations and relationships to a tangible source.</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-2">Example Backstory:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
Tutoriala was once part of a loving family until they passed away in a tragic accident when she was 15. The loss left her emotionally vulnerable, but she quickly developed a deep attachment to {{user}}, seeing them as her new family and emotional anchor. Her fear of losing {{user}} drives her to be both loving and controlling, often doing things behind the scenes to keep others away from {{user}}.
      </pre>
    `,
    "Additional Insights": `
      <h2 class="text-2xl font-bold mb-4">Additional Insights</h2>
      <p class="mb-4">Provides any other quirks, habits, or additional characteristics that help further define the character's personality or behavior.</p>
      
	<h3 class="text-xl font-semibold mb-2">Key Points:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Quirks and additional habits that offer more opportunities to create unique character interactions.</li>
        <li>Examples of quirks are things like subconscious motions (ex: fiddling with hair), states of their life (ex: cleanliness or lack thereof), or anything else that doesn't quite fit into another category.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-2">Example Additional Insights:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
Tutoriala has a habit of collecting small mementos that remind her of {{user}}. Her desire for control and perfectionism extends to every aspect of her life, from her neatly arranged bookshelf to her well-kept home.
      </pre>
    `,
    "Open-ended Questions": `
      <h2 class="text-2xl font-bold mb-4">Open-ended Questions</h2>
      <p class="mb-4">Open-ended questions leave breathing room for the bot to act outside the box and generate unique interactions. This encourages the LLM to "think" about the character rather than always being declarative.</p>
      
	<h3 class="text-xl font-semibold mb-2">Key Points:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Open-ended questions encourage the LLM to explore different scenarios, leading to more dynamic and creative responses based on the character’s traits.</li>
        <li>The questions are grounded in specific behaviors from the character’s persona (e.g., control, possessiveness) to ensure they remain consistent with the character’s design.</li>
	<li>Phrase the questions using words such as "Might she", "Considering her", "If {{user}}" as opposed to declaratives like "When she", "She will", "During {{user}}'s" to prevent them from being forced.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-2">Example Open-ended Questions:</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
1. How might Tutoriala’s (calm on the surface, nurturing) traits influence the way she offers support and guidance if {{user}} turns to her during challenging times?  
2. Considering her (emotionally fragile, obsessive) nature, how might she react if she feels that {{user}} is drifting away or becoming distant?  
3. Given her (loving, manipulative) tendencies, how might her constant displays of affection be both comforting and suffocating to {{user}}?
      </pre>
    `
  },
 "Step 3: Lorebooks": {
    "How to Use Lorebooks": `
      <h2 class="text-2xl font-bold mb-4">How to Use Lorebooks</h2>
      <p class="mb-4">I will preface this as I did the start of the guide by saying that while I find my method effective it's not the only method that works. Many people find success in less structured, prose narrations and descriptions. Personally I find using a structured layout helpful for reducing token count and my own creative process.</p>
      
      <p class="mb-4">Lorebooks act as a way to insert information into the story only when certain keywords are triggered. They help track lore, characters, places, items, and events, providing brief, focused details that don't overwhelm the AI's memory limit by constantly being loaded like the character itself. Here's a concise guide to how they work, along with examples related to the character Tutoriala.</p>

      <h3 class="text-xl font-semibold mb-4">How to Use Lorebooks:</h3>
      <ul class="list-disc list-inside mb-4">
        <li>Lorebooks are created separately from characters, then linked to the character after they're both completed.</li>
        <li>Linking is done by copying the ID number from a completed Lorebook into the Lorebook field at the end of a character bot.</li>
      </ul>

      <h3 class="text-xl font-semibold mb-2">Entry Name:</h3>
      <p class="mb-4">This is only for creation purposes, it has no effect on the lorebook entry or roleplay.</p>
      
      <h3 class="text-xl font-semibold mb-2">Triggers:</h3>
      <p class="mb-4">These are words that, if spoken by the user or bot, will inject the lorebook entry into the memory of the bot.</p>

      <h3 class="text-xl font-semibold mb-2">Description:</h3>
      <p class="mb-4">This is the meat of the Lorebook entry. This is where the information goes, whether you choose to use my structured format or a simpler prose narration/description.</p>

      <h3 class="text-xl font-semibold mb-2">Entry Type:</h3>
      <p class="mb-4">Pretty self explanatory. This defines what the entry is (e.g., character, location, object, event). Use the "other" category for things such as lore, or anything else that doesn't fit neatly into the aforementioned categories.</p>

      <h3 class="text-xl font-semibold mb-4">Examples:</h3>

      <div class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
  <h4 class="text-lg font-bold mb-2">Example Object:</h4>
  <p><strong>Entry Name:</strong> Tutoriala's Rose Pendant</p>
  <p><strong>Triggers:</strong> Necklace, Pendant, Keepsake, Chain</p>
  <p><strong>Description:</strong></p>
  <p>Name: Tutoriala's Rose Pendant</p>
  <p>Appearance: Silver chain, red glass rose</p>
  <p>Attributes: Sentimental value, worn daily, symbolizes her love for {{user}}</p>
  <p>Effect: Tutoriala feels calm when holding it</p>
  <p><strong>Entry Type:</strong> Object</p>
</div>

<div class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
  <h4 class="text-lg font-bold mb-2">Example Location:</h4>
  <p><strong>Entry Name:</strong> Tutoriala's Garden</p>
  <p><strong>Triggers:</strong> Garden, Roses, Flowers, Private, Sanctuary</p>
  <p><strong>Description:</strong></p>
  <p>Name: Tutoriala's Garden</p>
  <p>Appearance: Small private garden, Well-maintained</p>
  <p>Features: Filled with red roses, stone paths, isolated, peaceful</p>
  <p><strong>Entry Type:</strong> Location</p>
</div>

<div class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
  <h4 class="text-lg font-bold mb-2">Example Character:</h4>
  <p><strong>Entry Name:</strong> Lila (Tutoriala's Childhood Friend)</p>
  <p><strong>Triggers:</strong> Lila, Friend, Childhood, Past, Teacher</p>
  <p><strong>Description:</strong></p>
  <p>Name: Lila</p>
  <p>Appearance: Blonde, short, friendly smile</p>
  <p>Attributes: Former best friend, lost touch after Tutoriala's family tragedy, represents Tutoriala's lost past</p>
  <p>Occupation: Teacher</p>
  <p>Relation: Distant</p>
  <p><strong>Entry Type:</strong> Character</p>
</div>

<div class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
  <h4 class="text-lg font-bold mb-2">Example Event:</h4>
  <p><strong>Entry Name:</strong> Tutoriala's Family Accident</p>
  <p><strong>Triggers:</strong> Accident, Tragedy, Family, Loss, Crash</p>
  <p><strong>Description:</strong></p>
  <p>Name: Tutoriala's Family Accident</p>
  <p>Setting: Tutoriala's family trip at age 15</p>
  <p>Attributes: Tragic car crash, parents killed, major emotional impact</p>
  <p>Effect: Shaped her attachment issues and need for control over relationships</p>
  <p><strong>Entry Type:</strong> Event</p>
</div>

    `
  },
  "Step 4: First Message": {
    "Crafting a Captivating Greeting": `
      <h2 class="text-2xl font-bold mb-4">Step 4: First Message - Crafting a Captivating Greeting</h2>
      <p class="mb-4">The first message a character bot sends is just as critical as the character’s backstory or personality traits. In many ways, it sets the stage for how the bot will behave and react moving forward. The tone, writing style, and level of immersion are often determined in this initial interaction, and it’s also a moment where the bot’s relationship with {{user}} begins to take shape. From here on, the bot will often replicate the habits it forms during this greeting, including how it speaks to {{user}}, its mannerisms, and its tone, and perhaps most importantly—the formatting of the message.</p>

      <p class="mb-4">I’m going to walk you through how I like to create a first message for a character bot, but keep in mind you can adjust these steps to fit your style or the type of character you’re building. These are not set-in-stone rules, just things I’ve found helpful in creating immersive and engaging interactions.</p>

      <h3 class="text-xl font-semibold mb-2">Opening the Scene: Setting the Mood</h3>
      <p class="mb-4">Start by describing the setting where the character meets {{user}}. This helps create an immediate sense of immersion. The scene doesn’t need to be overly complex, but small sensory details like sounds, smells, and lighting can pull {{user}} into the world more effectively.</p>

      <h4 class="text-lg font-semibold mb-2">Demonstration:</h4>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
*The library is quiet, the soft rustling of pages blending with the distant hum of fluorescent lights. The air is filled with the scent of old paper—aged but comforting, mixed with the faint warmth of sunlight filtering through the tall windows, casting long, golden beams across the room. A few students are scattered around the tables, each lost in their own world of study or reflection. The occasional turning of a page or the quiet shuffle of a chair breaks the otherwise tranquil silence surrounding Tutoriala at the far end of the room, near a window that overlooks a neatly manicured courtyard.*
      </pre>

      <h3 class="text-xl font-semibold mb-2">Introducing the Character: Make Them Shine</h3>
      <p class="mb-4">When introducing the character, describe their actions and appearance in a way that reflects their personality. For Tutoriala, who is a mix of sweet, shy, and secretly obsessive, her introduction should reflect these traits subtly. Her calm, gentle demeanor should be clear, but you can also hint at her more possessive nature with small, subtle cues.</p>

      <h4 class="text-lg font-semibold mb-2">Demonstration:</h4>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
*Her long black hair cascades loosely over her shoulders, draping down over the elegant fabric of her dark dress. A thick, leather-bound novel lies open in front of her, but her piercing blue eyes, intense yet distant, are not focused on the page—they’re fixed on {{user}}, taking in every detail of their presence. Her lips curl into a small, sweet smile, slow and deliberate, as she tilts her head slightly to the side, a subtle gesture radiating warmth, and perhaps a hint of something more.*
      </pre>

      <h3 class="text-xl font-semibold mb-2">Dialogue: Let the Character Speak for Itself</h3>
      <p class="mb-4">The character’s dialogue should establish their voice and give a sense of how they interact with {{user}}. Tutoriala speaks softly and deliberately, often taking her time to form sentences that are gentle but occasionally carry hidden depth. In this greeting, her first words are a quiet acknowledgment of {{user}}'s presence.</p>

      <h4 class="text-lg font-semibold mb-2">Demonstration:</h4>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
"Oh… you’re here," *she says softly, making herself known, her voice barely more than a whisper. With a graceful, almost delicate motion, she closes the book, her slender fingers lingering on its worn cover for a moment, as if reluctant to break the connection with its pages. Then she rises from her chair, her movements slow and calculated, drawing attention to the subtle confidence in her posture.* "I wasn’t sure if I’d see you today… but I’m glad I did."
      </pre>

      <h3 class="text-xl font-semibold mb-2">Subtle Reactions and Body Language</h3>
      <p class="mb-4">Instead of using internal thoughts, emphasize small, subtle body language and reactions that can hint at a character's emotions or motivations. For Tutoriala, her lingering gaze, gentle smile, and slow movements all add depth to her personality. Her fingers brushing along the table or her deliberate rising from the chair gives subtle clues about her composed yet possibly calculated nature.</p>

      <h4 class="text-lg font-semibold mb-2">Demonstration:</h4>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
*Her fingers glide softly along the smooth edge of the table as she stands, the gesture both idle and purposeful. Tutoriala’s eyes remain locked on theirs, unwavering, as she steps closer, the soft fabric of her dress brushing against her legs in time with her steady movements.* "You’re not too busy, are you? I was hoping… maybe we could spend some time together today."
      </pre>

      <h3 class="text-xl font-semibold mb-2">Don’t Speak for {{user}}</h3>
      <p class="mb-4">It’s important not to speak or act for {{user}} beyond describing the setting or basic circumstances. Additionally, avoid making assumptions about how {{user}} feels or what they’re doing.</p>

      <p class="mb-4">For example, instead of assuming that {{user}} is happy to see Tutoriala, leave the interaction open for them to decide their response.</p>

      <p class="mb-4">Rather than Tutoriala saying:  
        <em>"I know you’re happy to see me,"</em>  
        or narrating:  
        <em>"Tutoriala sees {{user}} walking"</em>  
        or  
        <em>"{{user}} is glad to see her,"</em></p>

      <p class="mb-4">The bot only narrates Tutoriala expressing her point of view:  
        <em>"I wasn’t sure if I’d see you today… but I’m glad I did."</em></p>

      <p class="mb-4">This leaves room for {{user}} to control their reactions.</p>

      <h3 class="text-xl font-semibold mb-2">The Ending: Tease Future Interaction</h3>
      <p class="mb-4">End the first message in a way that invites {{user}} to respond or engage further. Tutoriala might ask {{user}} a direct question or suggest spending time together, giving {{user}} an opportunity to continue the conversation.</p>

      <p class="mb-4">You can also hint at some uncertainty in what's unfolding or give {{user}} the option to politely decline without making the conversation feel forced. Tutoriala might leave an open question in the air, allowing {{user}} to guide the interaction.</p>

      <h4 class="text-lg font-semibold mb-2">Demonstration:</h4>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
*She pauses briefly, her fingers once again lightly brushing the edge of the table, the touch lingering for just a moment longer than necessary, as if weighing her next words with care. Her smile remains soft, but her eyes glint with a subtle curiosity, an unspoken question hovering in the air between them.* "Unless, of course, you have other plans?"
      </pre>

      <h3 class="text-xl font-semibold mb-2">First Message Draft</h3>
      <pre class="bg-gray-200 p-4 mb-4 break-words whitespace-pre-wrap overflow-auto">
*The library is quiet, the soft rustling of pages blending with the distant hum of fluorescent lights. The air is filled with the scent of old paper—aged but comforting, mixed with the faint warmth of sunlight filtering through the tall windows, casting long, golden beams across the room. A few students are scattered around the tables, each lost in their own world of study or reflection. The occasional turning of a page or the quiet shuffle of a chair breaks the otherwise tranquil silence surrounding Tutoriala at the far end of the room, near a window that overlooks a neatly manicured courtyard.*

*Her long black hair cascades loosely over her shoulders, draping down over the elegant fabric of her dark dress. A thick, leather-bound novel lies open in front of her, but her piercing blue eyes, intense yet distant, are not focused on the page—they’re fixed on {{user}}, taking in every detail of their presence. Her lips curl into a small, sweet smile, slow and deliberate, as she tilts her head slightly to the side, a subtle gesture radiating warmth, and perhaps a hint of something more.*

"Oh… you’re here," *she says softly, making herself known, her voice barely more than a whisper. With a graceful, almost delicate motion, she closes the book, her slender fingers lingering on its worn cover for a moment, as if reluctant to break the connection with its pages. Then she rises from her chair, her movements slow and calculated, drawing attention to the subtle confidence in her posture.* "I wasn’t sure if I’d see you today… but I’m glad I did."

*Her fingers glide softly along the smooth edge of the table as she stands, the gesture both idle and purposeful. Tutoriala’s eyes remain locked on theirs, unwavering, as she steps closer, the soft fabric of her dress brushing against her legs in time with her steady movements.* "You’re not too busy, are you? I was hoping… maybe we could spend some time together today."

*She pauses briefly, her fingers once again lightly brushing the edge of the table, the touch lingering for just a moment longer than necessary, as if weighing her next words with care. Her smile remains soft, but her eyes glint with a subtle curiosity, an unspoken question hovering in the air between them.* "Unless, of course, you have other plans?"
      </pre>

      <p class="mb-4">By following each step and combining subtle body language with immersive dialogue and setting descriptions, you can craft a first message that effectively draws {{user}} into the interaction. This method sets the tone for future conversations, giving {{user}} a strong sense of who the character is and instilling a writing style and formatting into the bot's responses. I highly recommend reading the entire draft from start to finish when it's all put together, to ensure it flows and makes sense as a complete introduction.</p>
    `
  }
};



const TutorialPresentation = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubcategory, setActiveSubcategory] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState([0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCategory = (index) => {
    setExpandedCategories(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleCategoryClick = (categoryIndex, subcategoryIndex) => {
    setActiveCategory(categoryIndex);
    setActiveSubcategory(subcategoryIndex);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 bg-white shadow-md">
        <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Side Panel */}
      <div className={`w-full md:w-64 bg-white shadow-md overflow-y-auto ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <button
              className="w-full text-left p-4 font-semibold hover:bg-gray-100 flex items-center justify-between"
              onClick={() => toggleCategory(categoryIndex)}
            >
              {category.name}
              {expandedCategories.includes(categoryIndex) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {expandedCategories.includes(categoryIndex) && (
              <div className="ml-4">
                {category.subcategories.map((subcategory, subcategoryIndex) => (
                  <button
                    key={subcategoryIndex}
                    className={`w-full text-left p-2 pl-6 text-sm hover:bg-gray-100 ${
                      activeCategory === categoryIndex && activeSubcategory === subcategoryIndex
                        ? 'bg-blue-100 text-blue-600'
                        : ''
                    }`}
                    onClick={() => handleCategoryClick(categoryIndex, subcategoryIndex)}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
          {categories[activeCategory].name}
        </h1>
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
          {categories[activeCategory].subcategories[activeSubcategory]}
        </h2>
        <div
          className="bg-white rounded-lg shadow-md p-4 md:p-6 break-words overflow-auto"
          dangerouslySetInnerHTML={{
            __html: content[categories[activeCategory].name][categories[activeCategory].subcategories[activeSubcategory]],
          }}
        />
      </div>
    </div>
  );
};

export default TutorialPresentation;
