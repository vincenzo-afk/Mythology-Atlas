// ══════════════════════════════════════════════════════════════════
// 🏛️ MYTHOLOGY ATLAS — script.js
// ══════════════════════════════════════════════════════════════════

// ── 1. MYTHOLOGY DATA ─────────────────────────────────────────────

const MYTHOLOGY_DATA = {

  greek: {
    id: 'greek', name: 'Greek', color: '#3a7bd5',
    region: 'Mediterranean Europe',
    mapCenter: [37.97, 23.73], mapZoom: 6,
    gods: [
      { name: 'Zeus', role: 'King of Gods', domain: 'Sky, Thunder, Justice', description: 'Supreme ruler of Mount Olympus, god of the sky and thunder. Zeus overthrew his father Cronus and established order among the gods. He is known for his countless love affairs and for dispensing justice to both gods and mortals.', parents: ['Cronus', 'Rhea'], children: ['Athena', 'Apollo', 'Artemis', 'Ares', 'Hermes', 'Dionysus', 'Hephaestus', 'Persephone'], spouse: 'Hera', power: 10, symbol: 'Lightning Bolt', epithets: ['Thunderer', 'Cloud-gatherer', 'Father of Gods', 'Olympian'], emoji: '⚡' },
      { name: 'Hera', role: 'Queen of Olympus', domain: 'Marriage, Women, Birth', description: 'Queen of the Olympian gods and wife of Zeus. Hera is the protector of marriage and childbirth. Though regal and powerful, she is often depicted as jealous of Zeus\'s many affairs, taking vengeance on his lovers and illegitimate children.', parents: ['Cronus', 'Rhea'], children: ['Ares', 'Hephaestus', 'Eileithyia'], spouse: 'Zeus', power: 9, symbol: 'Peacock', epithets: ['Queen of Heaven', 'Cow-eyed', 'White-armed'], emoji: '👑' },
      { name: 'Poseidon', role: 'God of the Sea', domain: 'Sea, Earthquakes, Horses', description: 'Lord of the seas and brother of Zeus. Poseidon wields his trident to calm or enrage the seas. He also causes earthquakes by striking the ground with his trident, earning him the title "Earth-Shaker." He competed with Athena for patronage of Athens.', parents: ['Cronus', 'Rhea'], children: ['Cyclops', 'Theseus', 'Triton'], spouse: 'Amphitrite', power: 9, symbol: 'Trident', epithets: ['Earth-Shaker', 'Lord of the Deep', 'Horse-Tamer'], emoji: '🔱' },
      { name: 'Athena', role: 'Goddess of Wisdom', domain: 'Wisdom, Warfare, Crafts', description: 'Goddess of wisdom, strategic warfare, and crafts. Athena sprang fully formed and armored from the head of Zeus. She is the patron deity of Athens and the protector of heroes. Unlike Ares, she represents the intellectual and strategic aspects of war.', parents: ['Zeus', 'Metis'], children: [], spouse: null, power: 9, symbol: 'Owl', epithets: ['Grey-eyed', 'Pallas', 'Tritogeneia', 'Virgin Goddess'], emoji: '🦉' },
      { name: 'Apollo', role: 'God of the Sun', domain: 'Sun, Music, Prophecy, Healing', description: 'God of the sun, music, poetry, and prophecy. Twin brother of Artemis, Apollo is associated with the Oracle at Delphi where he spoke through the Pythia. He is also the god of healing and the arts, often depicted with a lyre and a silver bow.', parents: ['Zeus', 'Leto'], children: ['Asclepius', 'Orpheus'], spouse: null, power: 9, symbol: 'Lyre', epithets: ['Far-shooter', 'Phoebus', 'Silver-bowed', 'Lord of Delphi'], emoji: '☀️' },
      { name: 'Artemis', role: 'Goddess of the Hunt', domain: 'Hunt, Moon, Wilderness', description: 'Virgin goddess of the hunt, the moon, and wilderness. Twin sister of Apollo, Artemis roams the forests with her band of nymphs, hunting with a silver bow and arrows. She is protector of young women and presides over childbirth despite being a virgin deity.', parents: ['Zeus', 'Leto'], children: [], spouse: null, power: 8, symbol: 'Silver Bow', epithets: ['Lady of the Wild Things', 'Phoebe', 'Huntress'], emoji: '🌙' },
      { name: 'Ares', role: 'God of War', domain: 'War, Violence, Bloodshed', description: 'God of war, violence, and bloodshed. Unlike Athena, who represents strategic warfare, Ares embodies the brutal, physical aspect of battle. He is often depicted as impulsive and chaotic. Despite being a war god, he was defeated by mortal heroes on several occasions.', parents: ['Zeus', 'Hera'], children: ['Phobos', 'Deimos', 'Harmonia'], spouse: null, power: 8, symbol: 'Spear & Shield', epithets: ['Man-Slayer', 'City-Sacker', 'Mighty'], emoji: '⚔️' },
      { name: 'Aphrodite', role: 'Goddess of Love', domain: 'Love, Beauty, Desire', description: 'Goddess of love, beauty, pleasure, and procreation. Born from sea foam near Cyprus, Aphrodite possesses the power to make any god or mortal fall in love. She wore a magical girdle that made her irresistible. Her involvement in the Trojan War began with the Judgment of Paris.', parents: ['Uranus (sea foam)'], children: ['Eros', 'Harmonia', 'Aeneas'], spouse: 'Hephaestus', power: 8, symbol: 'Rose & Dove', epithets: ['Golden', 'Laughter-loving', 'Foam-born', 'Cyprian'], emoji: '💕' },
      { name: 'Hephaestus', role: 'God of the Forge', domain: 'Fire, Forge, Craftsmanship', description: 'God of fire, forge, and craftsmanship. The divine blacksmith of Olympus, Hephaestus crafted weapons and armor for the gods, including Achilles\'s armor, Hermes\'s winged sandals, and Zeus\'s thunderbolts. Though lame and considered ugly among gods, his skill was unmatched.', parents: ['Zeus', 'Hera'], children: ['Erichthonius'], spouse: 'Aphrodite', power: 7, symbol: 'Hammer & Anvil', epithets: ['Lame God', 'Celestial Craftsman', 'Fire-God'], emoji: '🔨' },
      { name: 'Hermes', role: 'Messenger of the Gods', domain: 'Messages, Travel, Commerce, Thieves', description: 'Messenger of the gods and guide of souls to the underworld. Hermes is the cleverest and most cunning of the Olympians, associated with travel, commerce, thieves, and eloquence. He wears winged sandals and carries the caduceus, a staff with entwined serpents.', parents: ['Zeus', 'Maia'], children: ['Pan', 'Hermaphroditus'], spouse: null, power: 8, symbol: 'Caduceus', epithets: ['Swift-footed', 'Argus-Slayer', 'Guide of Souls', 'Trickster'], emoji: '🪽' },
      { name: 'Demeter', role: 'Goddess of Harvest', domain: 'Grain, Harvest, Fertility', description: 'Goddess of grain, harvest, and the fertility of the earth. Demeter\'s grief over the abduction of her daughter Persephone by Hades caused the first winter, when she refused to let anything grow. Her joy at Persephone\'s return brings spring.', parents: ['Cronus', 'Rhea'], children: ['Persephone'], spouse: null, power: 8, symbol: 'Wheat Sheaf', epithets: ['Earth Mother', 'Thesmophoros', 'Bringer of Seasons'], emoji: '🌾' },
      { name: 'Dionysus', role: 'God of Wine', domain: 'Wine, Ecstasy, Theater', description: 'God of wine, festivity, and ecstasy. Dionysus was twice-born — first from his mother Semele, then from Zeus\'s thigh after Semele was destroyed by Zeus\'s divine form. He traveled the world spreading viticulture and became associated with theater and the cycle of life and death.', parents: ['Zeus', 'Semele'], children: ['Deianira'], spouse: 'Ariadne', power: 8, symbol: 'Thyrsus & Grapevine', epithets: ['Twice-Born', 'Liberator', 'Bull-Horned', 'Ivy-Crowned'], emoji: '🍇' },
      { name: 'Hades', role: 'God of the Underworld', domain: 'Death, Underworld, Riches', description: 'God of the dead and king of the underworld. Though often feared, Hades is not evil — he is a stern but fair ruler who maintains balance. He rarely leaves his realm. The name "Hades" was considered unlucky to speak, so he was often called Pluto, meaning "the wealthy one."', parents: ['Cronus', 'Rhea'], children: ['Macaria', 'Melinoe'], spouse: 'Persephone', power: 9, symbol: 'Helm of Darkness', epithets: ['Rich One', 'Pluto', 'Chthonian Zeus', 'Unseen One'], emoji: '💀' },
      { name: 'Persephone', role: 'Queen of the Underworld', domain: 'Spring, Underworld, Death & Rebirth', description: 'Daughter of Demeter and queen of the underworld. Abducted by Hades, Persephone spends part of the year in the underworld (causing winter) and part with her mother (causing spring and summer). She is worshipped as both a goddess of spring and a powerful queen of the dead.', parents: ['Zeus', 'Demeter'], children: [], spouse: 'Hades', power: 7, symbol: 'Pomegranate', epithets: ['Kore (the Maiden)', 'Dread Persephone', 'Iron Queen'], emoji: '🌸' }
    ],
    monsters: [
      { name: 'Medusa', type: 'monster', description: 'The only mortal Gorgon, whose gaze turned all who looked upon her into stone. Once a beautiful priestess of Athena, she was cursed by the goddess. Perseus slew her by using a mirrored shield to avoid her gaze, and from her blood sprang the winged horse Pegasus.', threat: 9, emoji: '🐍', origin: 'Cursed Priestess', weakness: 'Mirrored Shield' },
      { name: 'Minotaur', type: 'monster', description: 'Half-man, half-bull creature imprisoned in the Labyrinth of Crete. Born of the unnatural union of Queen Pasiphaë and the Cretan Bull, the Minotaur was fed Athenian youths as tribute until Theseus slew it with the help of Ariadne\'s thread.', threat: 8, emoji: '🐂', origin: 'Crete', weakness: 'Labyrinth confined' },
      { name: 'Hydra', type: 'monster', description: 'The Lernaean Hydra was a serpentine water monster with many heads. For each head severed, two more grew back. Heracles defeated it as his second labor by having his nephew cauterize each stump after cutting, preventing regrowth. Its blood was used to poison arrows.', threat: 9, emoji: '🐲', origin: 'Lerna swamp', weakness: 'Fire to cauterize stumps' },
      { name: 'Cerberus', type: 'monster', description: 'The three-headed dog who guards the entrance to the Underworld, preventing the dead from leaving and the living from entering. His mane of serpents and lion\'s claws make him terrifying. Heracles captured him as his twelfth labor, and Orpheus lulled him to sleep with music.', threat: 8, emoji: '🐕', origin: 'Underworld Gates', weakness: 'Music and honey cakes' },
      { name: 'Cyclops', type: 'monster', description: 'Giant one-eyed creatures, sons of Poseidon. The most famous, Polyphemus, trapped Odysseus and his men in his cave and ate them one by one. Odysseus blinded him with a sharpened stake and escaped by hiding under the bellies of the Cyclops\'s sheep.', threat: 8, emoji: '👁️', origin: 'Sicily', weakness: 'Cunning and fire' },
      { name: 'Sphinx', type: 'monster', description: 'A creature with the head of a woman, body of a lion, and wings of an eagle. The Sphinx guarded Thebes and devoured all who could not answer her riddle: "What walks on four legs in the morning, two at noon, and three in the evening?" Oedipus answered "Man" and the Sphinx destroyed herself.', threat: 7, emoji: '🦁', origin: 'Thebes', weakness: 'Correct riddle answer' },
      { name: 'Chimera', type: 'monster', description: 'A fire-breathing monster with the head of a lion, body of a goat, and tail of a serpent. It ravaged Lycia until the hero Bellerophon, riding the winged horse Pegasus, slew it by driving a lead-tipped spear into its throat, where the fire melted the metal and suffocated it.', threat: 8, emoji: '🔥', origin: 'Lycia', weakness: 'Aerial attack on Pegasus' }
    ],
    artifacts: [
      { name: 'Aegis', owner: 'Zeus / Athena', type: 'Shield/Breastplate', description: 'The divine shield of Zeus, often loaned to Athena. Bearing the head of Medusa (Gorgoneion) at its center, the Aegis could produce storm clouds, thunder, and dread terror in all who beheld it. When Athena shook it, even the gods trembled.', power: 'Terror & Divine Protection', emoji: '🛡️' },
      { name: 'Trident', owner: 'Poseidon', type: 'Weapon', description: 'The three-pronged spear of Poseidon, forged by the Cyclopes. With it, Poseidon can calm or rouse the seas, cause earthquakes by striking the earth, and split rock. It is his symbol of authority over all water domains.', power: 'Sea Control & Earthquakes', emoji: '🔱' },
      { name: 'Caduceus', owner: 'Hermes', type: 'Staff', description: 'The winged staff of Hermes, entwined with two serpents. The Caduceus can induce sleep or wakefulness, guide souls to the underworld, and is the symbol of Hermes\'s role as divine messenger. It is often confused with the Rod of Asclepius, symbol of medicine.', power: 'Sleep Induction & Soul Guidance', emoji: '⚕️' },
      { name: 'Golden Fleece', owner: 'Colchis (sought by Jason)', type: 'Relic', description: 'The fleece of the golden-wooled winged ram, hung in a sacred grove in Colchis and guarded by a sleepless dragon. Jason and the Argonauts sailed to retrieve it, aided by the sorceress Medea. The fleece represented kingship and the authority to rule.', power: 'Legitimacy of Kingship', emoji: '🐏' },
      { name: "Pandora's Box", owner: 'Pandora', type: 'Vessel', description: 'A sealed jar (pithos) given to Pandora by the gods, containing all the evils of the world: disease, sorrow, poverty, and strife. When Pandora opened it out of curiosity, these evils escaped into the world. Only Hope (Elpis) remained trapped inside.', power: 'Source of All Evil & Hope', emoji: '📦' },
      { name: 'Helm of Darkness', owner: 'Hades', type: 'Helmet', description: 'The cap of invisibility gifted to Hades by the Cyclopes during the Titanomachy. Whoever wears it becomes completely invisible. Perseus borrowed it to slay Medusa, and Hermes used it during the Gigantomachy. It is one of the most powerful artifacts in Greek mythology.', power: 'Complete Invisibility', emoji: '🪖' }
    ],
    stories: [
      { title: 'The Odyssey', era: '-800 BCE', summary: 'The ten-year journey of Odysseus from Troy back to his home of Ithaca after the fall of Troy. He encounters Cyclopes, Sirens, Scylla and Charybdis, the witch Circe, the land of the dead, and countless trials before reuniting with his wife Penelope.', characters: ['Odysseus', 'Poseidon', 'Athena', 'Circe', 'Cyclops', 'Hermes'] },
      { title: 'The Iliad', era: '-800 BCE', summary: 'The tale of the Trojan War\'s final weeks, centering on the rage of Achilles. After Agamemnon takes his prize Briseis, Achilles withdraws from battle, leading to Greek losses. His companion Patroclus is killed by Hector, driving Achilles to return and slay Hector.', characters: ['Achilles', 'Hector', 'Zeus', 'Athena', 'Apollo', 'Ares', 'Aphrodite'] },
      { title: 'Theogony', era: '-700 BCE', summary: 'Hesiod\'s account of the origin of the gods. Starting from Chaos, it traces the birth of Gaia, Uranus, the Titans, and ultimately the Olympians. It chronicles the Titanomachy — the ten-year war between the Olympians and Titans — and Zeus\'s ultimate victory.', characters: ['Zeus', 'Cronus', 'Gaia', 'Uranus', 'Hera', 'Poseidon', 'Hades'] },
      { title: 'Perseus & Medusa', era: '-1000 BCE', summary: 'The hero Perseus, son of Zeus and Danae, is sent on an impossible quest to slay the Gorgon Medusa. Armed with gifts from Athena, Hermes, and the Nymphs, he slays Medusa using a mirrored shield, then uses her head to rescue Andromeda and defeat the sea monster Cetus.', characters: ['Perseus', 'Medusa', 'Athena', 'Hermes', 'Andromeda', 'Zeus'] },
      { title: 'Theseus & the Minotaur', era: '-1100 BCE', summary: 'The hero Theseus volunteers as Athenian tribute to Crete, where King Minos demands fourteen youths be fed to the Minotaur in the Labyrinth. With Ariadne\'s thread to navigate the maze, Theseus slays the Minotaur and escapes, though he forgets to change his black sails, causing his father Aegeus to leap to his death.', characters: ['Theseus', 'Minotaur', 'Ariadne', 'King Minos', 'Poseidon', 'Aegeus'] }
    ],
    timeline: [
      { id: 'g1', content: 'Creation — Chaos & Titans', start: '-3000', group: 'greek' },
      { id: 'g2', content: 'Titanomachy — War of Gods', start: '-2800', group: 'greek' },
      { id: 'g3', content: 'Golden Age of Mortals', start: '-2500', group: 'greek' },
      { id: 'g4', content: 'Trojan War', start: '-1200', group: 'greek' },
      { id: 'g5', content: 'Odyssey begins', start: '-1190', group: 'greek' },
      { id: 'g6', content: 'Heracles\'s Twelve Labors', start: '-1250', group: 'greek' }
    ],
    links: [
      { source: 'Cronus', target: 'Zeus', type: 'parent' },
      { source: 'Cronus', target: 'Poseidon', type: 'parent' },
      { source: 'Cronus', target: 'Hades', type: 'parent' },
      { source: 'Cronus', target: 'Hera', type: 'parent' },
      { source: 'Cronus', target: 'Demeter', type: 'parent' },
      { source: 'Zeus', target: 'Athena', type: 'parent' },
      { source: 'Zeus', target: 'Apollo', type: 'parent' },
      { source: 'Zeus', target: 'Artemis', type: 'parent' },
      { source: 'Zeus', target: 'Ares', type: 'parent' },
      { source: 'Zeus', target: 'Hermes', type: 'parent' },
      { source: 'Zeus', target: 'Dionysus', type: 'parent' },
      { source: 'Zeus', target: 'Hephaestus', type: 'parent' },
      { source: 'Zeus', target: 'Persephone', type: 'parent' },
      { source: 'Demeter', target: 'Persephone', type: 'parent' },
      { source: 'Zeus', target: 'Hera', type: 'spouse' },
      { source: 'Hades', target: 'Persephone', type: 'spouse' },
      { source: 'Hephaestus', target: 'Aphrodite', type: 'spouse' },
      { source: 'Poseidon', target: 'Cyclops', type: 'parent' }
    ]
  },

  norse: {
    id: 'norse', name: 'Norse', color: '#7b5ea7',
    region: 'Scandinavia',
    mapCenter: [59.91, 10.75], mapZoom: 5,
    gods: [
      { name: 'Odin', role: 'Allfather', domain: 'Wisdom, War, Death, Magic', description: 'The supreme deity of the Norse pantheon, Odin sacrificed one eye to drink from Mimir\'s well of wisdom and hung himself from Yggdrasil for nine days to learn the secret of runes. He leads the Einherjar (heroic dead) in Valhalla, preparing for Ragnarök.', parents: ['Borr', 'Bestla'], children: ['Thor', 'Baldur', 'Tyr', 'Vidar', 'Vali'], spouse: 'Frigg', power: 10, symbol: 'Valknut & Ravens', epithets: ['Allfather', 'One-Eye', 'Wanderer', 'Raven-God', 'Hanged God'], emoji: '🔮' },
      { name: 'Thor', role: 'God of Thunder', domain: 'Thunder, Strength, Protection of Mankind', description: 'The mightiest warrior among the gods, Thor protects Asgard and humanity with his hammer Mjolnir. Son of Odin and Jörð (the Earth), he is the champion against the giants (Jotnar). At Ragnarök, he and Jormungandr kill each other.', parents: ['Odin', 'Jörð'], children: ['Magni', 'Modi', 'Thrud'], spouse: 'Sif', power: 9, symbol: 'Mjolnir', epithets: ['Thunderer', 'Protector of Mankind', 'Charioteer', 'Enemy of Serpents'], emoji: '⚡' },
      { name: 'Freya', role: 'Goddess of Love & War', domain: 'Love, War, Fertility, Magic (Seiðr)', description: 'The most celebrated Norse goddess, Freya is associated with love, fertility, war, and magic. She chooses half of all warriors slain in battle (Odin takes the other half) for her hall Fólkvangr. She taught Odin the art of Seiðr magic and wears the precious Brísingamen necklace.', parents: ['Njord'], children: [], spouse: 'Óðr (missing)', power: 9, symbol: 'Brísingamen Necklace', epithets: ['Lady', 'She-Wolf', 'Vanadis', 'Mistress of Cats'], emoji: '💛' },
      { name: 'Loki', role: 'Trickster God', domain: 'Mischief, Shape-shifting, Fire', description: 'The shape-shifting trickster of Asgard, Loki is at once the gods\' greatest helper and most dangerous enemy. He is blood-brother to Odin yet father of the world-serpent, the wolf Fenrir, and Hel. After engineering Baldur\'s death, he is bound beneath the earth until Ragnarök.', parents: ['Fárbauti', 'Laufey'], children: ['Fenrir', 'Jormungandr', 'Hel', 'Sleipnir', 'Narfi', 'Vali'], spouse: 'Sigyn', power: 8, symbol: 'Serpent', epithets: ['Sly One', 'Sky Traveller', 'Shape-Changer', 'Lie-Smith'], emoji: '🐍' },
      { name: 'Tyr', role: 'God of Justice', domain: 'Justice, Law, War', description: 'The one-handed god of justice and war. Tyr sacrificed his right hand to bind the wolf Fenrir — placing it in Fenrir\'s mouth as pledge that the gods would release the wolf, knowing they never would. This act of sacrifice embodied the Norse value of courage in service of law.', parents: ['Odin', 'Frigg'], children: [], spouse: null, power: 7, symbol: 'Single Gauntlet', epithets: ['One-Handed', 'Bold', 'Victory-God'], emoji: '⚖️' },
      { name: 'Baldur', role: 'God of Light & Purity', domain: 'Light, Purity, Beauty, Rebirth', description: 'The most beloved of the gods, radiant Baldur was made nearly invulnerable when his mother Frigg extracted oaths from all things not to harm him. Loki discovered the one exception — mistletoe — and guided blind Hodr to throw a mistletoe dart that killed Baldur, casting the world into grief.', parents: ['Odin', 'Frigg'], children: [], spouse: 'Nanna', power: 8, symbol: 'White Flower', epithets: ['Shining God', 'Most Beautiful', 'The Pure'], emoji: '✨' },
      { name: 'Frigg', role: 'Goddess of Foresight', domain: 'Marriage, Prophecy, Motherhood', description: 'Queen of Asgard and wife of Odin, Frigg can see the future but never reveals it. She attempted to protect her son Baldur by extracting oaths of harmlessness from every object in the world, but missed the mistletoe. She weeps perpetually for Baldur.', parents: [], children: ['Baldur', 'Hodr'], spouse: 'Odin', power: 8, symbol: 'Spinning Distaff', epithets: ['Beloved', 'Foreknowing', 'Queen of Asgard'], emoji: '🕯️' },
      { name: 'Heimdall', role: 'Watchman of the Gods', domain: 'Vigilance, Light, Dawn', description: 'The ever-vigilant watchman of Asgard who stands guard at the Bifrost bridge. Heimdall requires little sleep and can hear grass growing and wool growing on sheep. He carries Gjallarhorn, whose blast can be heard throughout the nine worlds. At Ragnarök, he and Loki kill each other.', parents: ['Odin', 'Nine Mothers'], children: [], spouse: null, power: 7, symbol: 'Gjallarhorn', epithets: ['Whitest of Gods', 'Gold-Toothed', 'He Who Illuminates the World'], emoji: '📯' },
      { name: 'Skadi', role: 'Goddess of Winter', domain: 'Winter, Hunting, Mountains', description: 'The giantess-goddess of winter, skiing, hunting, and mountains. Daughter of the giant Thiazi, Skadi demanded compensation from the gods for her father\'s death. She chose a husband from the gods by seeing only their feet, aiming for Baldur but choosing Njord. Their marriage failed due to their incompatible homelands.', parents: ['Thiazi (giant)'], children: [], spouse: 'Njord', power: 7, symbol: 'Skis & Bow', epithets: ['Snowshoe Goddess', 'Damage', 'Winter Goddess'], emoji: '🎿' },
      { name: 'Njord', role: 'God of the Sea', domain: 'Sea, Wind, Fish, Wealth', description: 'God of the seas, wind, fishing, and prosperity. Father of Freya and Freyr, Njord is a Vanir god who came to Asgard as a hostage after the Aesir-Vanir War. He lives at Nóatún (Ship-Enclosure) by the sea. His marriage to the mountain giantess Skadi ended because each longed for their home environment.', parents: [], children: ['Freya', 'Freyr'], spouse: 'Skadi', power: 7, symbol: 'Ship', epithets: ['Wealthy', 'Lord of the Sea-Shore', 'Father of Freya'], emoji: '⚓' }
    ],
    monsters: [
      { name: 'Fenrir', type: 'wolf', description: 'The monstrous wolf, son of Loki, prophesied to kill Odin at Ragnarök. The gods tried three times to bind him; he broke free of iron chains until they used Gleipnir — a magical ribbon made of impossible things (sound of a cat\'s footfall, mountain roots, beard of a woman). Tyr lost his hand in the bargain.', threat: 10, emoji: '🐺', origin: 'Son of Loki', weakness: 'Gleipnir ribbon' },
      { name: 'Jormungandr', type: 'serpent', description: 'The World Serpent, son of Loki, so vast it encircles all of Midgard and bites its own tail (ouroboros). The eternal enemy of Thor — they are destined to kill each other at Ragnarök. Thor once nearly lifted the serpent while it was disguised as a cat, shaking the cosmos.', threat: 10, emoji: '🐍', origin: 'Son of Loki', weakness: 'Thor (mutual death)' },
      { name: 'Nidhogg', type: 'dragon', description: 'The corpse-gnawing dragon that chews at the roots of Yggdrasil, the World Tree, and feasts on the corpses of murderers and oath-breakers in Náströnd. Its constant gnawing is part of the cosmic cycle, threatening to destroy the world tree and cause the universe\'s collapse.', threat: 9, emoji: '🐉', origin: 'Niflheim', weakness: 'Yggdrasil binds it' },
      { name: 'Kraken', type: 'sea monster', description: 'A colossal sea monster of legendary proportions, said to dwell off the coasts of Norway. So massive it was sometimes mistaken for an island by sailors who anchored to it. Its thrashing when it submerged created deadly whirlpools. Later traditions conflate it with the Norse hafgufa.', threat: 9, emoji: '🦑', origin: 'Norwegian Sea', weakness: 'Sunlight & Size' },
      { name: 'Draugr', type: 'undead', description: 'Undead creatures that rise from their graves with superhuman strength and the ability to increase their size at will. They guard their burial mounds and treasures, and spread disease. They can enter the dreams of the living and drive them mad. Only a hero can permanently defeat a draugr.', threat: 7, emoji: '💀', origin: 'Norse Burial Mounds', weakness: 'Fire & Decapitation' },
      { name: 'Fafnir', type: 'dragon', description: 'Originally a dwarf or giant who killed his father for the cursed gold of Andvari. The greed of the gold transformed him into a dragon. He was slain by the hero Sigurd (Siegfried), who bathed in his blood to become invulnerable, though a linden leaf on his shoulder left one weak spot.', threat: 9, emoji: '🔥', origin: 'Cursed by Gold', weakness: 'Sigurd\'s sword Gram' }
    ],
    artifacts: [
      { name: 'Mjolnir', owner: 'Thor', type: 'Hammer', description: 'The legendary hammer of Thor, forged by the dwarven brothers Sindri and Brokkr. When thrown, it always returns to Thor\'s hand. It can level mountains and slay giants, but its short handle — caused by Loki sabotaging the forging — means it must be gripped with iron gauntlets. It is also used to hallow marriages and funerals.', power: 'Thunder & Destruction', emoji: '🔨' },
      { name: 'Gungnir', owner: 'Odin', type: 'Spear', description: 'The magical spear of Odin, crafted by the Sons of Ivaldi. Gungnir never misses its mark and always returns to Odin\'s hand. Odin threw it over his enemies to claim victory. The spear is associated with Odin\'s role as god of war and sacrifice — he hung himself on Yggdrasil pierced by Gungnir.', power: 'Perfect Aim & Death Magic', emoji: '🗡️' },
      { name: 'Gleipnir', owner: 'The Gods (used on Fenrir)', type: 'Fetter', description: 'The magical ribbon that bound the wolf Fenrir, created by the dwarves of Svartalfheim from six impossible things: the sound of a cat\'s footstep, the beard of a woman, the roots of a mountain, the sinews of a bear, the breath of a fish, and the spittle of a bird. Though it looks like a silk ribbon, it is unbreakable.', power: 'Unbreakable Binding', emoji: '🎗️' },
      { name: 'Brisingamen', owner: 'Freya', type: 'Necklace', description: 'The magnificent necklace of Freya, forged by the four dwarves of Svartalfheim. Freya spent four nights with each dwarf to obtain it. The necklace enhances her powers of love and war magic. Loki once stole it but was forced to return it. It is the most precious ornament in Asgard.', power: 'Love Enhancement & Magic', emoji: '✨' },
      { name: 'Draupnir', owner: 'Odin', type: 'Ring', description: 'The golden arm ring of Odin, forged by the dwarves Sindri and Brokkr. Every nine nights, eight rings of equal weight drip from it, representing endless wealth and abundance. Odin placed it on the funeral pyre of Baldur, and Baldur sent it back from the realm of the dead as a gift.', power: 'Endless Wealth Generation', emoji: '💍' },
      { name: 'Gjallarhorn', owner: 'Heimdall', type: 'Horn', description: 'The great horn of Heimdall, the watchman of the gods. Its sound can be heard in all nine worlds. Heimdall will blow it at the onset of Ragnarök, summoning all the gods to the final battle. It is said Odin himself hid it under the roots of Yggdrasil, filled with mead of wisdom.', power: 'World-Spanning Sound', emoji: '📯' }
    ],
    stories: [
      { title: 'Ragnarök', era: 'Fate of the Gods', summary: 'The Norse apocalypse — a series of catastrophic events that will lead to the death of many gods, including Odin, Thor, Tyr, Freyr, and Heimdall. The world will be submerged in water. Afterwards, the world will resurface, and two human survivors will repopulate the earth.', characters: ['Odin', 'Thor', 'Loki', 'Fenrir', 'Jormungandr', 'Freyr', 'Heimdall'] },
      { title: 'Creation of the World', era: 'Before Time', summary: 'In the beginning was Ginnungagap, the primordial void. Ice from Niflheim and fire from Muspelheim met, creating Ymir, the first giant. Odin and his brothers slew Ymir and used his body to form the world: his flesh became earth, his blood the seas, his skull the sky.', characters: ['Odin', 'Vili', 'Vé', 'Ymir', 'Audhumla'] },
      { title: "Baldur's Death", era: '-500 CE (mythic)', summary: 'Baldur, beloved of all gods, began to have prophetic dreams of his death. His mother Frigg extracted oaths from all things not to harm him. Loki discovered the mistletoe had been overlooked and guided blind Hodr to throw a dart of it at Baldur, killing him instantly. The gods\' grief plunged the world into darkness.', characters: ['Baldur', 'Loki', 'Frigg', 'Odin', 'Hodr', 'Hermod'] },
      { title: 'Thor vs Jormungandr', era: 'Ragnarök', summary: 'The eternal enmity between Thor and the World Serpent. Thor once fished for Jormungandr with an ox head, nearly pulling it from the ocean. At Ragnarök, the two face each final battle: Thor kills the serpent with Mjolnir, but then stumbles nine paces and dies from the serpent\'s venom.', characters: ['Thor', 'Jormungandr', 'Odin', 'Hymir'] }
    ],
    timeline: [
      { id: 'n1', content: 'Creation of Yggdrasil', start: '-5000', group: 'norse' },
      { id: 'n2', content: 'Aesir-Vanir War', start: '-3000', group: 'norse' },
      { id: 'n3', content: 'Odin learns the Runes', start: '-2000', group: 'norse' },
      { id: 'n4', content: 'Binding of Fenrir', start: '-1000', group: 'norse' },
      { id: 'n5', content: "Baldur's Death", start: '-500', group: 'norse' },
      { id: 'n6', content: 'Ragnarök', start: '1000', group: 'norse' }
    ],
    links: [
      { source: 'Odin', target: 'Thor', type: 'parent' },
      { source: 'Odin', target: 'Baldur', type: 'parent' },
      { source: 'Odin', target: 'Tyr', type: 'parent' },
      { source: 'Frigg', target: 'Baldur', type: 'parent' },
      { source: 'Frigg', target: 'Hodr', type: 'parent' },
      { source: 'Loki', target: 'Fenrir', type: 'parent' },
      { source: 'Loki', target: 'Jormungandr', type: 'parent' },
      { source: 'Njord', target: 'Freya', type: 'parent' },
      { source: 'Odin', target: 'Frigg', type: 'spouse' },
      { source: 'Njord', target: 'Skadi', type: 'spouse' },
      { source: 'Thor', target: 'Sif', type: 'spouse' }
    ]
  },

  egyptian: {
    id: 'egyptian', name: 'Egyptian', color: '#e8b86d',
    region: 'North Africa',
    mapCenter: [29.97, 31.13], mapZoom: 6,
    gods: [
      { name: 'Ra', role: 'God of the Sun', domain: 'Sun, Creation, Kingship', description: 'The supreme solar deity and king of the gods. Ra travels across the sky in his solar barque each day, and through the underworld (Duat) each night, battling the chaos serpent Apep. At noon he is most powerful; by evening he becomes the ram-headed god Auf. He merged with Amun to become Amun-Ra.', parents: ['Nun (primordial waters)'], children: ['Shu', 'Tefnut', 'Thoth', 'Bastet', 'Sekhmet'], spouse: null, power: 10, symbol: 'Solar Disc', epithets: ['Lord of All', 'King of Gods', 'Great Illuminator', 'Eye of Day'], emoji: '☀️' },
      { name: 'Osiris', role: 'God of the Dead', domain: 'Death, Resurrection, Agriculture', description: 'God of the dead, the afterlife, and resurrection. A legendary king of Egypt, Osiris was murdered by his jealous brother Set, who dismembered his body and scattered the pieces. His wife Isis reassembled him (missing his phallus), and he was resurrected to become king of the dead and judge of souls.', parents: ['Geb', 'Nut'], children: ['Horus'], spouse: 'Isis', power: 9, symbol: 'Djed Pillar & Crook', epithets: ['Lord of the Dead', 'Green One', 'Eternally Good', 'Foremost of Westerners'], emoji: '🌿' },
      { name: 'Isis', role: 'Goddess of Magic', domain: 'Magic, Healing, Motherhood, Protection', description: 'The most powerful goddess of ancient Egypt, mistress of magic and protector of the dead. She reassembled and resurrected Osiris after Set dismembered him, and magically conceived Horus. She is the divine mother, protector of the pharaoh, and her magic surpassed even Ra himself.', parents: ['Geb', 'Nut'], children: ['Horus'], spouse: 'Osiris', power: 10, symbol: 'Throne Headdress', epithets: ['Great Magic', 'Divine Mother', 'Queen of the Gods', 'Lady of Ten Thousand Names'], emoji: '👸' },
      { name: 'Horus', role: 'God of the Sky', domain: 'Sky, Kingship, Protection', description: 'The falcon-headed sky god and divine son of Osiris and Isis. Horus fought his uncle Set for the throne of Egypt in an 80-year struggle. The conflict was ruled in Horus\'s favor, and he became the divine symbol of the living pharaoh (Set represented the pharaoh\'s strength). His right eye is the sun; his left the moon.', parents: ['Osiris', 'Isis'], children: [], spouse: 'Hathor', power: 9, symbol: 'Eye of Horus', epithets: ['Lord of the Sky', 'Avenger of His Father', 'Golden Falcon', 'He Who is Above'], emoji: '🦅' },
      { name: 'Anubis', role: 'God of Embalming', domain: 'Death, Embalming, Judgment', description: 'The jackal-headed god of embalming and guardian of the scales in the Hall of Two Truths. Anubis guides souls through the Duat (underworld) and oversees the weighing of the heart against the feather of Ma\'at. He was originally the god of the dead before Osiris took that role.', parents: ['Osiris', 'Nephthys'], children: [], spouse: null, power: 8, symbol: 'Jackal', epithets: ['Guardian of the Scales', 'He Who is on his Mountain', 'Lord of the Sacred Land'], emoji: '⚖️' },
      { name: 'Thoth', role: 'God of Wisdom', domain: 'Wisdom, Writing, Moon, Magic', description: 'The ibis-headed god of wisdom, writing, and the moon. Thoth recorded the verdict of the weighing of souls in the Hall of Judgment. He is credited with inventing writing (hieroglyphs) and is associated with all knowledge, science, magic, and the measurement of time.', parents: ['Ra', 'Hathor'], children: [], spouse: 'Ma\'at', power: 9, symbol: 'Ibis', epithets: ['Scribe of the Gods', 'Lord of the Divine Words', 'Measurer of Time'], emoji: '📝' },
      { name: 'Seth', role: 'God of Chaos', domain: 'Chaos, Storms, Desert, War', description: 'God of chaos, storms, and the desert. Set murdered his brother Osiris out of jealousy and usurped the throne of Egypt. In his 80-year conflict with Horus, he committed many violent acts before the gods judged against him. Despite his villainous role, he was also worshipped as the necessary force of chaos that kept the universe in balance.', parents: ['Geb', 'Nut'], children: ['Sobek', 'Anubis (some traditions)'], spouse: 'Nephthys', power: 9, symbol: 'Set Animal', epithets: ['Lord of Upper Egypt', 'Trickster', 'Red Lord', 'Lord of the Storm'], emoji: '🌪️' },
      { name: 'Bastet', role: 'Goddess of Protection', domain: 'Cats, Protection, Music, Dance', description: 'The cat-headed (or lioness-headed) goddess of protection, pleasure, and good health. Originally a fierce lioness goddess of war, Bastet became gentler over time, associated with domestic cats, music, and dance. She protected the home and family from evil spirits and disease.', parents: ['Ra'], children: ['Maahes'], spouse: null, power: 7, symbol: 'Cat', epithets: ['Lady of the East', 'Devouring Lady', 'Eye of Ra', 'Mistress of Bubastis'], emoji: '🐱' },
      { name: 'Hathor', role: 'Goddess of Love', domain: 'Love, Beauty, Music, Motherhood, Sky', description: 'The cow-headed goddess of love, beauty, music, and joy. One of the oldest and most important deities, Hathor was "mother of mothers" and was associated with the Milky Way. She represents the power of feminine sexuality and motherhood. In her destructive aspect as Sekhmet, she nearly destroyed humanity.', parents: ['Ra'], children: [], spouse: 'Horus', power: 8, symbol: 'Cow Horns & Solar Disc', epithets: ['Lady of the West', 'Mistress of Joy', 'Golden One', 'Mother of Ra'], emoji: '🐄' },
      { name: 'Nut', role: 'Goddess of the Sky', domain: 'Sky, Stars, Heaven, Cosmos', description: 'The sky goddess, depicted as a woman arched over the earth (Geb), her body studded with stars. Each night Nut swallows the setting sun, and each morning gives birth to the rising sun. She also swallows the stars at dawn and gives birth to them again at dusk. She is the mother of Osiris, Isis, Set, and Nephthys.', parents: ['Shu', 'Tefnut'], children: ['Osiris', 'Isis', 'Seth', 'Nephthys', 'Horus the Elder'], spouse: 'Geb', power: 8, symbol: 'Star-covered body', epithets: ['The Great Protectress', 'Mother of Stars', 'Lady of Heaven'], emoji: '⭐' }
    ],
    monsters: [
      { name: 'Apep', type: 'chaos serpent', description: 'The enormous serpent of chaos and darkness, the arch-enemy of Ra. Every night as Ra traveled through the underworld, Apep would attempt to swallow his solar barque. The gods would battle Apep each night, and Ra\'s crew would chop him to pieces — but Apep could never truly die, regenerating each night.', threat: 10, emoji: '🐍', origin: 'Primordial Chaos', weakness: 'Ra\'s light & divine magic' },
      { name: 'Ammit', type: 'composite beast', description: 'The "Devourer of the Dead" — a terrifying creature with the head of a crocodile, front quarters of a lion, and hindquarters of a hippopotamus. Ammit waits beside the scales in the Hall of Judgment; if a soul\'s heart is heavier than the feather of Ma\'at (due to sin), Ammit devours it, condemning the soul to non-existence.', threat: 8, emoji: '🦛', origin: 'Hall of Two Truths', weakness: 'A pure heart' },
      { name: 'Sobek', type: 'crocodile god', description: 'The crocodile god of the Nile, associated with the pharaoh\'s power and military prowess. Both feared and worshipped, Sobek embodied the unpredictable, dangerous nature of the Nile. Sacred crocodiles were kept in his temples and mummified after death. He could also be a protector against evil.', threat: 7, emoji: '🐊', origin: 'Nile River', weakness: 'Divine authority' },
      { name: 'Sphinx', type: 'guardian', description: 'The great sphinx of Egypt — a creature with the body of a lion and the head of a human (or ram or falcon). Unlike the Greek sphinx that asked riddles, Egyptian sphinxes were guardians of sacred spaces and symbols of royal power. The Great Sphinx of Giza represents Pharaoh Khafre as a divine guardian.', threat: 6, emoji: '🦁', origin: 'Giza', weakness: 'Royal Authority' },
      { name: 'Bennu', type: 'divine bird', description: 'The sacred heron-like bird of Egyptian mythology, the Ba (soul) of Ra and associated with the primordial moment of creation. The Bennu rested on the ben-ben stone in Heliopolis and is the inspiration for the Greek phoenix myth. It represents the cycle of death and resurrection.', threat: 2, emoji: '🦢', origin: 'Heliopolis', weakness: 'N/A (benevolent)' }
    ],
    artifacts: [
      { name: 'Ankh', owner: 'All Major Deities', type: 'Symbol', description: 'The key of life, the symbol of eternal life in ancient Egypt. Gods are depicted carrying the ankh by its loop, and offering it to pharaohs as the breath of life. It combines the male and female symbols (cross and circle), representing the union that creates life. Often called the "key of the Nile."', power: 'Life Force & Immortality', emoji: '☥' },
      { name: 'Eye of Ra', owner: 'Ra / Hathor', type: 'Divine Eye', description: 'The powerful eye of Ra that acts as his instrument of vengeance. When Ra was insulted by humanity, he sent his eye (in the form of Sekhmet/Hathor) to destroy them. She nearly annihilated all humans before Ra tricked her by dyeing beer red to look like blood, causing her to become drunk and stop.', power: 'Divine Vengeance & Solar Power', emoji: '👁️' },
      { name: 'Book of the Dead', owner: 'All Egyptians (funerary)', type: 'Sacred Text', description: 'A collection of spells, prayers, and instructions to help the deceased navigate the afterlife. The most famous spell is the "Negative Confession" in which the soul claims to have committed no sins before Osiris and the 42 Assessors. Wealthy Egyptians had personalized copies placed in their tombs.', power: 'Afterlife Navigation & Protection', emoji: '📖' },
      { name: 'Djed Pillar', owner: 'Osiris', type: 'Symbol', description: 'The djed is one of the most ancient Egyptian symbols, representing stability and the backbone of Osiris. Pharaohs performed the "raising of the djed" ceremony to symbolize the resurrection of Osiris and ensure the stability of Egypt. It appears on amulets, temple walls, and funerary equipment.', power: 'Stability & Resurrection', emoji: '🏛️' },
      { name: 'Was Scepter', owner: 'Pharaohs & Gods', type: 'Scepter', description: 'The scepter of power topped with an animal head (possibly a stylized dog or the Set animal). The Was scepter represents dominion and was carried by pharaohs to represent their divine power. Gods are frequently depicted carrying it, and it appears in the hieroglyph for "power" or "dominion."', power: 'Divine Dominion & Power', emoji: '🪄' }
    ],
    stories: [
      { title: 'Creation by Ra', era: '-4000 BCE', summary: 'In the beginning was Nun, the primordial ocean of chaos. Ra-Atum emerged from Nun on the first mound of earth (the ben-ben stone) and created the universe through thought and the spoken word. He created Shu (air) and Tefnut (moisture) from himself, and they created Geb (earth) and Nut (sky).', characters: ['Ra', 'Nun', 'Shu', 'Tefnut', 'Geb', 'Nut'] },
      { title: 'Osiris Resurrection', era: '-3000 BCE', summary: 'Set, jealous of Osiris\'s rule, killed him and scattered his body across Egypt. Isis searched the land, gathering the pieces. She used magic to reassemble Osiris and briefly resurrected him long enough to conceive their son Horus. Osiris then descended to rule the underworld as king of the dead.', characters: ['Osiris', 'Isis', 'Seth', 'Nephthys', 'Thoth', 'Anubis'] },
      { title: 'Horus vs Set', era: '-3000 BCE', summary: 'The 80-year war between Horus and Set for the throne of Egypt. Set tore out Horus\'s eye; Horus castrated Set. The gods debated endlessly. Finally, Osiris threatened from the underworld that the decision must be made. The tribunal ruled for Horus, and Set was exiled to the desert to thunder as storms.', characters: ['Horus', 'Seth', 'Isis', 'Ra', 'Thoth', 'Osiris'] },
      { title: 'Judgment of the Dead', era: 'Eternal', summary: 'Every soul, after death, travels to the Hall of Two Truths where the heart is weighed against the feather of Ma\'at. Anubis operates the scales while Thoth records the verdict. If the heart is lighter, the soul passes to paradise (Aaru). If heavier with sin, Ammit devours it and the soul is annihilated forever.', characters: ['Anubis', 'Thoth', 'Osiris', 'Ammit', "Ma'at", '42 Assessors'] }
    ],
    timeline: [
      { id: 'e1', content: 'Creation by Ra', start: '-4000', group: 'egyptian' },
      { id: 'e2', content: 'Osiris becomes King', start: '-3500', group: 'egyptian' },
      { id: 'e3', content: 'Set kills Osiris', start: '-3200', group: 'egyptian' },
      { id: 'e4', content: 'Horus vs Set — 80 year war', start: '-3100', group: 'egyptian' },
      { id: 'e5', content: 'Great Sphinx built', start: '-2500', group: 'egyptian' },
      { id: 'e6', content: 'Amun-Ra cult rises', start: '-2000', group: 'egyptian' }
    ],
    links: [
      { source: 'Ra', target: 'Bastet', type: 'parent' },
      { source: 'Ra', target: 'Thoth', type: 'parent' },
      { source: 'Ra', target: 'Hathor', type: 'parent' },
      { source: 'Geb', target: 'Osiris', type: 'parent' },
      { source: 'Nut', target: 'Osiris', type: 'parent' },
      { source: 'Geb', target: 'Isis', type: 'parent' },
      { source: 'Nut', target: 'Isis', type: 'parent' },
      { source: 'Geb', target: 'Seth', type: 'parent' },
      { source: 'Nut', target: 'Seth', type: 'parent' },
      { source: 'Osiris', target: 'Horus', type: 'parent' },
      { source: 'Isis', target: 'Horus', type: 'parent' },
      { source: 'Osiris', target: 'Isis', type: 'spouse' },
      { source: 'Seth', target: 'Nephthys', type: 'spouse' },
      { source: 'Horus', target: 'Hathor', type: 'spouse' },
      { source: 'Geb', target: 'Nut', type: 'spouse' },
      { source: 'Osiris', target: 'Anubis', type: 'parent' }
    ]
  },

  hindu: {
    id: 'hindu', name: 'Hindu', color: '#e05c2a',
    region: 'South Asia',
    mapCenter: [20.59, 78.96], mapZoom: 5,
    gods: [
      { name: 'Brahma', role: 'Creator of the Universe', domain: 'Creation, Knowledge, Vedas', description: 'The four-faced creator god of the Hindu Trimurti (divine trinity). Brahma created the universe, the Vedas, and all living beings. Despite his importance, he is rarely worshipped today — owing to a curse by Shiva — and has only one major temple in all of India at Pushkar. He holds the Vedas, a lotus, a water pot, and a rosary.', parents: ['Vishnu (from his navel lotus)'], children: ['Manu', 'Saraswati (some traditions)'], spouse: 'Saraswati', power: 9, symbol: 'Four Faces & Lotus', epithets: ['Svayambhu', 'Prajapati', 'Vishwakarma', 'Creator'], emoji: '🌸' },
      { name: 'Vishnu', role: 'Preserver of the Universe', domain: 'Preservation, Protection, Dharma', description: 'The all-pervading preserver of the cosmos in the Hindu Trimurti. Vishnu descends to earth as various avatars whenever evil threatens dharma (cosmic order). His ten principal avatars (Dashavatara) include Rama, Krishna, and Narasimha. He reclines on the cosmic serpent Ananta Shesha in the Kshira Sagara (ocean of milk).', parents: [], children: [], spouse: 'Lakshmi', power: 10, symbol: 'Sudarshana Chakra & Conch', epithets: ['Narayana', 'Hari', 'Madhava', 'All-Pervading', 'Lord of the Universe'], emoji: '💙' },
      { name: 'Shiva', role: 'Destroyer of the Universe', domain: 'Destruction, Transformation, Yoga, Time', description: 'The destroyer and transformer in the Hindu Trimurti. Shiva is both the destroyer and the regenerator — his destruction enables creation. He meditates eternally on Mount Kailash, performs the cosmic dance (Tandava) that both creates and destroys, and is the supreme lord of yoga. The third eye on his forehead can destroy the cosmos.', parents: [], children: ['Ganesha', 'Kartikeya'], spouse: 'Parvati', power: 10, symbol: 'Trishul & Crescent Moon', epithets: ['Mahadeva', 'Nataraja', 'Shankara', 'Bhola', 'Adiyogi', 'The Auspicious One'], emoji: '🔱' },
      { name: 'Lakshmi', role: 'Goddess of Wealth', domain: 'Wealth, Fortune, Beauty, Prosperity', description: 'The goddess of wealth, fortune, power, beauty, and prosperity, and the divine consort of Vishnu. Lakshmi emerged from the churning of the cosmic ocean (Samudra Manthan) and was immediately claimed as Vishnu\'s consort. Lotus flowers bloom wherever she steps. She accompanies Vishnu in all his avatars.', parents: ['Ocean (Kshira Sagara)'], children: [], spouse: 'Vishnu', power: 8, symbol: 'Golden Lotus & Coins', epithets: ['Shri', 'Padmavathi', 'Vaishnavi', 'Fortune', 'Mother of the World'], emoji: '💰' },
      { name: 'Saraswati', role: 'Goddess of Knowledge', domain: 'Knowledge, Arts, Music, Wisdom', description: 'The goddess of knowledge, music, arts, wisdom, and learning. She is depicted in white, seated on a lotus, playing the veena. Saraswati is revered by students and artists; the goddess Vac (speech) is often identified with her. She is associated with rivers (the Saraswati River) and the flow of consciousness.', parents: ['Brahma'], children: [], spouse: 'Brahma', power: 8, symbol: 'Veena & White Lotus', epithets: ['Vac', 'Bharati', 'Sharada', 'Goddess of Learning', 'River Goddess'], emoji: '🎵' },
      { name: 'Durga', role: 'Warrior Goddess', domain: 'War, Strength, Protection, Good over Evil', description: 'The fierce warrior goddess created from the combined energy (shakti) of all the gods to destroy the buffalo demon Mahishasura, whom no god could kill. Durga rides a lion or tiger, wields ten weapons, and embodies the divine feminine power (Shakti) in its most formidable aspect. She fought a nine-day battle before beheading Mahishasura.', parents: ['Collective energy of all gods'], children: [], spouse: null, power: 9, symbol: 'Lion & Ten Weapons', epithets: ['Mahishasuramardini', 'Amba', 'Chandika', 'Invincible', 'The Inaccessible'], emoji: '🦁' },
      { name: 'Kali', role: 'Goddess of Time and Death', domain: 'Time, Death, Change, Destruction of Evil', description: 'The fierce goddess of time, change, and destruction. Kali emerged from Durga\'s forehead during battle with the demon army. She went on a blood-drunk rampage, killing demons and drinking their blood, threatening to destroy the world. Shiva lay in her path; when she stepped on him, she realized her error and stopped.', parents: ['Durga (manifested from her brow)'], children: [], spouse: 'Shiva (in some traditions)', power: 10, symbol: 'Severed Head & Skull Necklace', epithets: ['Dark One', 'She Who is Time', 'Dakshina Kali', 'The Great Mother'], emoji: '💀' },
      { name: 'Ganesha', role: 'Remover of Obstacles', domain: 'Beginnings, Wisdom, Intellect, Luck', description: 'The elephant-headed son of Shiva and Parvati, Ganesha is the most widely worshipped deity in Hinduism. He is propitiated at the beginning of all endeavors as the remover of obstacles and the god of beginnings and intellect. His elephant head came from Shiva mistakenly cutting off his son\'s human head and replacing it with the first animal found.', parents: ['Shiva', 'Parvati'], children: [], spouse: 'Riddhi & Siddhi', power: 8, symbol: 'Elephant Head & Modak', epithets: ['Ganapati', 'Vinayaka', 'Pillaiyar', 'Vighnesha', 'Obstacle Remover'], emoji: '🐘' },
      { name: 'Hanuman', role: 'Divine Devotee', domain: 'Devotion, Strength, Wisdom, Loyalty', description: 'The divine monkey-warrior and devoted servant of Lord Rama. Son of the wind god Vayu, Hanuman possesses immense strength, the ability to fly, change size, and is immortal. His devotion to Rama is absolute — he crossed the ocean to Lanka alone, burned the city with his blazing tail, and carried a mountain of healing herbs to save Lakshmana.', parents: ['Vayu', 'Anjana'], children: [], spouse: null, power: 9, symbol: 'Mace & Mountain', epithets: ['Anjaneya', 'Bajrang Bali', 'Pavanputra', 'Mahabali', 'Devotee Supreme'], emoji: '🐒' },
      { name: 'Indra', role: 'King of the Gods', domain: 'Thunder, Lightning, Rain, War', description: 'The king of the Devas and ruler of Svarga (heaven). Indra wields the vajra (thunderbolt) and rides the white elephant Airavata. Once the supreme god of the Vedas, his prominence diminished over time. He killed the dragon Vritra to release the cosmic waters. He is associated with monsoons and is the divine warrior.', parents: ['Kashyapa', 'Aditi'], children: ['Arjuna (Mahabharata)'], spouse: 'Shachi (Indrani)', power: 8, symbol: 'Vajra (Thunderbolt)', epithets: ['Shakra', 'Mahendra', 'Vasava', 'King of Gods', 'Cloud-Rider'], emoji: '⚡' },
      { name: 'Krishna', role: 'Avatar of Vishnu', domain: 'Love, Devotion, Dharma, Cosmic Wisdom', description: 'The eighth avatar of Vishnu and one of the most beloved Hindu deities. As a child he performed miracles and defeated demons. As a young man, his divine love with Radha is celebrated. In the Mahabharata, as Arjuna\'s charioteer, he revealed the Bhagavad Gita — the supreme scripture of divine wisdom and duty.', parents: ['Vasudeva', 'Devaki'], children: ['Pradyumna', 'Samba'], spouse: 'Rukmini', power: 10, symbol: 'Flute & Peacock Feather', epithets: ['Govinda', 'Madhava', 'Kanha', 'Murari', 'Yogeshvara'], emoji: '🪈' },
      { name: 'Rama', role: 'Avatar of Vishnu', domain: 'Virtue, Dharma, Righteousness, Honor', description: 'The seventh avatar of Vishnu, Rama is the embodiment of virtue, duty, and righteousness. Exiled from his kingdom for fourteen years, his wife Sita was abducted by the demon king Ravana of Lanka. Rama, with his devoted brother Lakshmana and the monkey army led by Hanuman, crossed the sea and waged war on Lanka to rescue Sita.', parents: ['Dasharatha', 'Kaushalya'], children: ['Lava', 'Kusha'], spouse: 'Sita', power: 9, symbol: 'Bow & Arrow', epithets: ['Maryada Purushottam', 'Ramachandra', 'Kosala King', 'Supreme Man'], emoji: '🏹' },
      { name: 'Varuna', role: 'God of the Cosmic Ocean', domain: 'Cosmic Order, Water, Moral Law', description: 'One of the oldest Vedic deities, Varuna was once the supreme god of cosmic and moral order (Rita). He oversees the celestial ocean and the night sky, binding the guilty with his noose (pasha). His role declined as Indra rose to prominence, but he remains the god of all waters.', parents: ['Kashyapa', 'Aditi'], children: [], spouse: 'Varuni', power: 8, symbol: 'Noose (Pasha)', epithets: ['Lord of the Waters', 'Guardian of Rita', 'All-Seeing'], emoji: '🌊' },
      { name: 'Yama', role: 'God of Death', domain: 'Death, Dharma, Justice, Afterlife', description: 'The god of death and the first mortal to die, now serving as the judge of the dead. Yama rides a black buffalo and carries a mace and noose. He records the deeds of all mortals in the Book of Fate (Chitragupta\'s ledger) and determines their fate after death — heaven, hell, or reincarnation based on their karma.', parents: ['Vivasvat (Sun god)', 'Saranya'], children: [], spouse: null, power: 8, symbol: 'Black Buffalo & Noose', epithets: ['Dharmaraj', 'Yamraj', 'Lord of Dharma', 'First Mortal', 'Judge of Souls'], emoji: '💀' }
    ],
    monsters: [
      { name: 'Ravana', type: 'demon king', description: 'The ten-headed, twenty-armed demon king of Lanka. A scholar, musician, and devotee of Shiva, Ravana was granted near-invulnerability in battle. His arrogance led him to abduct Sita, wife of Rama, precipitating the great war of the Ramayana. Despite his evil deeds, he was also a great devotee of Shiva who could shake mountains.', threat: 10, emoji: '👹', origin: 'Lanka', weakness: 'His navel (source of immortality)' },
      { name: 'Mahishasura', type: 'buffalo demon', description: 'The powerful buffalo demon who could not be killed by any god or man. He conquered the three worlds and drove the gods from heaven. The gods combined their shakti (divine energy) to create the goddess Durga, who fought Mahishasura for nine days before finally beheading him. The festival of Navratri celebrates this victory.', threat: 9, emoji: '🐃', origin: 'Underworld', weakness: 'Goddess Durga' },
      { name: 'Vritra', type: 'cosmic serpent', description: 'The enormous dragon or serpent of cosmic drought that blocked the flow of all the world\'s rivers and waters. Indra, armed with Vishnu\'s assistance and the vajra, battled and killed Vritra, releasing the cosmic waters. Vritra represents the forces of chaos that obstruct the natural order.', threat: 9, emoji: '🐉', origin: 'Primordial Chaos', weakness: 'Indra\'s Vajra' },
      { name: 'Tarakasura', type: 'demon', description: 'A powerful demon who obtained a boon from Brahma that he could only be killed by a son of Shiva. Since Shiva was in eternal meditation after Sati\'s death, the gods seemed doomed. They caused Shiva to fall in love with Parvati, and their son Kartikeya (Murugan) was born to kill Tarakasura.', threat: 9, emoji: '👿', origin: 'Demon Realm', weakness: 'Kartikeya (son of Shiva)' },
      { name: 'Narakasura', type: 'demon', description: 'The demon king of Pragjyotisha who kidnapped 16,100 women and kept them imprisoned. He obtained a boon making him nearly invulnerable. Krishna, accompanied by his wife Satyabhama (who dealt the killing blow), defeated Narakasura and freed the captive women. The eve of Diwali (Naraka Chaturdashi) celebrates this victory.', threat: 8, emoji: '😈', origin: 'Pragjyotisha', weakness: 'Krishna (or Satyabhama)' }
    ],
    artifacts: [
      { name: 'Trishul', owner: 'Shiva', type: 'Trident', description: 'The divine trident of Shiva, one of the most powerful weapons in Hindu mythology. The three prongs represent the three aspects of consciousness (waking, dreaming, deep sleep), the three gunas (qualities), and Shiva\'s three roles as creator, preserver, and destroyer. It is forged from the divine essence of the sun.', power: 'Cosmic Destruction & Balance', emoji: '🔱' },
      { name: 'Sudarshana Chakra', owner: 'Vishnu', type: 'Disc Weapon', description: 'The spinning disc weapon of Vishnu, with 108 serrated edges that spin at incomprehensible speed. It returns to Vishnu\'s finger after striking. The Sudarshana Chakra represents the mind of Vishnu — ever-active, all-powerful, and unerring in cutting through ignorance and evil. It slays demons and protects the righteous.', power: 'Invincible Destruction of Evil', emoji: '💿' },
      { name: 'Vajra', owner: 'Indra', type: 'Thunderbolt', description: 'The thunderbolt weapon of Indra, crafted from the bones of the sage Dadhichi (who sacrificed himself). The vajra has the properties of both a diamond (unbreakable) and a thunderbolt (irresistible force). It killed the cosmic dragon Vritra and represents divine lightning. In Buddhism, it became a symbol of the indestructible truth.', power: 'Lightning & Invincible Force', emoji: '⚡' },
      { name: 'Gandiva', owner: 'Arjuna', type: 'Bow', description: 'The divine bow of Arjuna, a gift from the god Varuna. The Gandiva was created by Brahma and held by various gods before being given to Arjuna for the Kurukshetra War. It could produce hundred of arrows simultaneously, never missed its target, and its twang could shake the earth.', power: 'Unerring Divine Archery', emoji: '🏹' },
      { name: 'Brahmastra', owner: 'Brahma (wielded by heroes)', type: 'Celestial Weapon', description: 'The most powerful divine weapon in Hindu mythology, invoked by mantras. The Brahmastra never misses and, once invoked, cannot be stopped except by a greater mantra. It can destroy the entire universe. Only the most righteous warriors could invoke it, and both Drona and Ashwatthama wielded it in the Mahabharata.', power: 'Universal Annihilation', emoji: '☄️' }
    ],
    stories: [
      { title: 'Ramayana', era: '-5000 BCE (mythic)', summary: 'The epic story of Prince Rama, exiled for 14 years by palace intrigue. His wife Sita is abducted by the demon king Ravana of Lanka. With his brother Lakshmana and the monkey army led by Hanuman, Rama crosses the ocean, fights the demon armies, and rescues Sita, ultimately returning to rule Ayodhya as the ideal king.', characters: ['Rama', 'Sita', 'Ravana', 'Hanuman', 'Lakshmana', 'Vishnu'] },
      { title: 'Mahabharata', era: '-3000 BCE (mythic)', summary: 'The great war between the Pandavas and Kauravas for the throne of Hastinapura. The Pandavas\' eighteen-day battle on Kurukshetra is recorded. Before battle, Arjuna despairs; Krishna reveals the Bhagavad Gita. The Pandavas win but at great cost. The war marks the transition from the Dwapara to the Kali Yuga (current age).', characters: ['Arjuna', 'Krishna', 'Yudhishthira', 'Duryodhana', 'Bhima', 'Drona', 'Karna'] },
      { title: 'Samudra Manthan', era: 'Primordial', summary: 'The churning of the cosmic ocean by gods and demons using Mount Mandara as a churning rod and the cosmic serpent Vasuki as a rope. From the ocean emerged: the moon, the divine physician Dhanvantari with amrita (immortality nectar), the goddess Lakshmi, the poison halahala (drunk by Shiva), and many other treasures.', characters: ['Vishnu', 'Shiva', 'Indra', 'Lakshmi', 'Dhanvantari', 'Vasuki'] },
      { title: 'Narasimha Avatar', era: 'Mythic Past', summary: 'The demon Hiranyakashipu could not be killed by any god, man, weapon, indoors or outdoors, day or night. When he threatened to kill his own son Prahlada (a devotee of Vishnu), Vishnu emerged from a pillar at twilight as Narasimha — half-man, half-lion — and killed Hiranyakashipu on a doorstep with his bare claws.', characters: ['Vishnu', 'Narasimha', 'Hiranyakashipu', 'Prahlada'] }
    ],
    timeline: [
      { id: 'h1', content: 'Creation of the Universe (Brahma)', start: '-5000', group: 'hindu' },
      { id: 'h2', content: 'Samudra Manthan — Churning of the Ocean', start: '-4000', group: 'hindu' },
      { id: 'h3', content: 'Ramayana — Battle of Lanka', start: '-3500', group: 'hindu' },
      { id: 'h4', content: 'Mahabharata — Kurukshetra War', start: '-3000', group: 'hindu' },
      { id: 'h5', content: 'Bhagavad Gita Revealed', start: '-3000', group: 'hindu' },
      { id: 'h6', content: 'End of Dwapara Yuga', start: '-3000', group: 'hindu' }
    ],
    links: [
      { source: 'Brahma', target: 'Saraswati', type: 'spouse' },
      { source: 'Vishnu', target: 'Lakshmi', type: 'spouse' },
      { source: 'Shiva', target: 'Parvati', type: 'spouse' },
      { source: 'Shiva', target: 'Ganesha', type: 'parent' },
      { source: 'Parvati', target: 'Ganesha', type: 'parent' },
      { source: 'Vishnu', target: 'Krishna', type: 'parent' },
      { source: 'Vishnu', target: 'Rama', type: 'parent' },
      { source: 'Rama', target: 'Sita', type: 'spouse' },
      { source: 'Indra', target: 'Arjuna', type: 'parent' }
    ]
  },

  japanese: {
    id: 'japanese', name: 'Japanese', color: '#d45555',
    region: 'East Asia',
    mapCenter: [35.68, 139.69], mapZoom: 5,
    gods: [
      { name: 'Amaterasu', role: 'Goddess of the Sun', domain: 'Sun, Universe, Heaven', description: 'The goddess of the sun and the universe, the highest deity in Shinto and direct ancestor of the Japanese imperial family. When her brother Susanoo\'s rampage devastated the heavens, Amaterasu hid in a cave, plunging the world into darkness. The gods tricked her out with a raucous celebration, restoring light to the world.', parents: ['Izanagi (from his left eye)'], children: ['Ame-no-Oshido-Mimi'], spouse: null, power: 10, symbol: 'Rising Sun', epithets: ['Great Divinity Illuminating Heaven', 'Heaven-Shining-Great-August-Deity', 'Ōhirume-no-muchi-no-kami'], emoji: '☀️' },
      { name: 'Susanoo', role: 'God of Storms', domain: 'Storms, Sea, Agriculture', description: 'The impetuous storm god and brother of Amaterasu. Exiled from heaven after his destructive tantrum, Susanoo descended to earth where he slew the eight-headed dragon Yamata-no-Orochi, discovering the divine sword Kusanagi in its tail. He then became a culture hero, writing the first poem (tanka) in Japanese literature.', parents: ['Izanagi (from his nose)'], children: ['Ōkuninushi', 'Isotakeru'], spouse: 'Kushinadahime', power: 9, symbol: 'Storm Clouds & Sword', epithets: ['Impetuous Male', 'Take-Haya-Susanoo-no-Mikoto', 'Lord of the Sea'], emoji: '⛈️' },
      { name: 'Tsukuyomi', role: 'God of the Moon', domain: 'Moon, Night, Death', description: 'The moon god and brother of Amaterasu, born from Izanagi\'s right eye. Tsukuyomi killed the food goddess Uke Mochi when she prepared food in a disgusting manner. Amaterasu was so offended by this act that she declared she would never face him again — explaining why the sun and moon are on opposite sides of the sky.', parents: ['Izanagi (from his right eye)'], children: [], spouse: null, power: 7, symbol: 'Crescent Moon', epithets: ['Moon Reader', 'Tsukiyomi-no-Mikoto', 'Counting of the Months'], emoji: '🌙' },
      { name: 'Izanagi', role: 'God of Creation', domain: 'Creation, Life, Heaven', description: 'One of the two creator deities of Japan. With his wife Izanami, Izanagi stirred the primordial ocean with the divine spear Amenonuhoko, creating the islands of Japan. When Izanami died giving birth to the fire god Kagutsuchi, Izanagi descended to Yomi (the underworld) to retrieve her, but she had already eaten the food of the dead.', parents: [], children: ['Amaterasu', 'Tsukuyomi', 'Susanoo', 'Kagutsuchi'], spouse: 'Izanami', power: 10, symbol: 'Divine Spear', epithets: ['He Who Invites', 'Lord of Heaven', 'Creator God'], emoji: '🌊' },
      { name: 'Izanami', role: 'Goddess of Death', domain: 'Death, Creation, Underworld', description: 'The goddess of both creation and death, wife of Izanagi. She died giving birth to the fire god Kagutsuchi. In the underworld Yomi, she became a rotting corpse. When Izanagi fled in horror, she threatened to kill 1000 humans per day; Izanagi countered he would create 1500 per day, creating the balance of life and death.', parents: [], children: ['Amaterasu', 'Tsukuyomi', 'Susanoo'], spouse: 'Izanagi', power: 9, symbol: 'Rotting Form', epithets: ['She Who Invites', 'Lady of Yomi', 'Goddess of Death'], emoji: '💀' },
      { name: 'Fujin', role: 'God of Wind', domain: 'Wind, Air, Storms', description: 'The god of wind, one of the oldest Shinto deities. Fujin is depicted as a terrifying demon carrying a large bag of winds over his shoulder. Along with his companion Raijin (god of thunder), he was present at the creation of the world and helped create the first morning mist and the breath of life for the islands of Japan.', parents: ['Izanami (created in Yomi)'], children: [], spouse: null, power: 7, symbol: 'Wind Bag', epithets: ['Wind Master', 'Futen', 'Wind God'], emoji: '💨' },
      { name: 'Raijin', role: 'God of Thunder', domain: 'Thunder, Lightning, Storms', description: 'The god of thunder, lightning, and storms. Raijin is depicted as a demon-like figure surrounded by drums that he beats to create thunder. He and Fujin (wind god) together represent the forces of storms. Raijin is associated with rice planting as rain is vital for agriculture. He is one of the most feared Shinto deities.', parents: ['Izanami (created in Yomi)'], children: ['Raijū'], spouse: null, power: 7, symbol: 'Drums & Lightning', epithets: ['Kaminari-sama', 'Thunder God', 'Lord of the Storm'], emoji: '⚡' },
      { name: 'Inari', role: 'God of Agriculture & Foxes', domain: 'Rice, Agriculture, Industry, Foxes, Success', description: 'One of the most widely venerated Shinto deities, Inari is the god (or goddess in some traditions) of rice, fertility, agriculture, industry, and foxes. Inari\'s messengers are white foxes (kitsune), and over one-third of all Shinto shrines in Japan are dedicated to Inari. The famous Fushimi Inari shrine\'s thousands of torii gates are a testament to this worship.', parents: [], children: [], spouse: null, power: 8, symbol: 'White Fox & Rice Sheaf', epithets: ['Great Deity of Inari', 'Fox God', 'Provider of Rice'], emoji: '🦊' },
      { name: 'Benzaiten', role: 'Goddess of Everything That Flows', domain: 'Water, Music, Time, Knowledge, Beauty', description: 'The only female deity among the Seven Lucky Gods (Shichi Fukujin). Benzaiten (derived from the Hindu goddess Saraswati) is associated with everything that flows: water, music, time, words, and knowledge. She is depicted playing the biwa (Japanese lute) and is worshipped by artists, musicians, and those seeking eloquence.', parents: [], children: [], spouse: null, power: 7, symbol: 'Biwa Lute & Dragon', epithets: ['Lady of Fortune', 'Saraswati of Japan', 'Goddess of Flow'], emoji: '🎵' },
      { name: 'Ebisu', role: 'God of Fishermen', domain: 'Fishing, Commerce, Good Luck, Prosperity', description: 'One of the Seven Lucky Gods, Ebisu is the patron of fishermen, merchants, and working people. He is depicted as a happy, portly fisherman holding a large fish (sea bream) and a fishing rod. Unlike other Shinto deities, Ebisu is thought to be deaf, explaining why he seems oblivious to prayers — but he brings good fortune regardless.', parents: ['Izanagi', 'Izanami (or Hiruko)'], children: [], spouse: null, power: 6, symbol: 'Fishing Rod & Sea Bream', epithets: ['Yebisu', 'God of the Sea', 'Patron of Commerce'], emoji: '🎣' }
    ],
    monsters: [
      { name: 'Oni', type: 'demon', description: 'Fearsome supernatural ogres of Japanese folklore, with wild hair, horns, fangs, and hulking bodies. They carry iron clubs (kanabō) and are typically red or blue in color. Oni are associated with pestilence, calamity, and the underworld. During Setsubun (Bean Throwing Festival), Japanese people throw roasted soybeans to drive away Oni.', threat: 8, emoji: '👹', origin: 'Underworld/Human Spirits', weakness: 'Soybeans & Sacred Arrows' },
      { name: 'Tengu', type: 'spirit', description: 'Mountain spirits with avian features — beaks (or long noses in later traditions), wings, and supernatural martial skill. The greatest Tengu are depicted with red faces and long noses. They are the teachers of swordsmanship; the legendary warrior Minamoto no Yoshitsune was reportedly taught swordsmanship by a Tengu.', threat: 7, emoji: '🐦', origin: 'Mountain Forests', weakness: 'Buddhist prayers' },
      { name: 'Kappa', type: 'water creature', description: 'Mischievous water creatures with a humanoid body, reptilian skin, and a water-filled dish on their head — the source of their power. If the dish dries, they become weak. Kappa drag victims into rivers and are said to eat cucumbers, which is why cucumber sushi rolls are called "kappa maki." They must bow and spill their water if bowed to.', threat: 6, emoji: '🐢', origin: 'Rivers & Ponds', weakness: 'Bowing (spills head water)' },
      { name: 'Kitsune', type: 'fox spirit', description: 'Intelligent fox spirits with magical powers. As they age, they gain more tails (up to nine), becoming more powerful. Nine-tailed foxes (kyūbi no kitsune) are the most powerful and are associated with the god Inari. Kitsune can shapeshift into human form, often as beautiful women, and can be either benevolent or mischievous.', threat: 7, emoji: '🦊', origin: 'Forests', weakness: 'Weakness to dogs & sacred ritual' },
      { name: 'Yamata-no-Orochi', type: 'dragon', description: 'The eight-headed, eight-tailed dragon (or serpent) that terrorized the land, demanding one young maiden per year to eat. Susanoo defeated it by getting all eight heads drunk on sake, then cut off all the heads. In the middle tail, he discovered the divine sword Kusanagi no Tsurugi, which became one of the imperial regalia.', threat: 10, emoji: '🐉', origin: 'Shimane Province', weakness: 'Sake & Cunning' },
      { name: 'Yuki-onna', type: 'spirit', description: 'The snow woman — a spirit that appears on snowy nights as a beautiful woman with white robes and icy blue lips. She lures travelers into blizzards and either kills them by breathing on them (freezing them) or sucking their life energy. In some tales she falls in love with a mortal and shows mercy; in others she is purely deadly.', threat: 8, emoji: '❄️', origin: 'Snowy Mountains', weakness: 'Love & Warmth' }
    ],
    artifacts: [
      { name: 'Kusanagi-no-Tsurugi', owner: 'Imperial House of Japan', type: 'Sacred Sword', description: 'The Grass-Cutting Sword, one of the three Imperial Treasures of Japan. Found by Susanoo in the tail of Yamata-no-Orochi, it was given to Amaterasu and eventually passed down as an imperial regalia. Prince Yamato Takeru used it to cut down the grass around him when enemies set a field on fire, turning the flames on his enemies.', power: 'Grass-Cutting & Wind Control', emoji: '⚔️' },
      { name: 'Yata no Kagami', owner: 'Imperial House of Japan', type: 'Sacred Mirror', description: 'The Eight-Hand Mirror, one of the three Imperial Treasures. It was created to lure Amaterasu from her cave and hung in the tree outside. When Amaterasu peered at her own reflection, she was so fascinated she stepped forward enough for the gods to grab her. The mirror represents wisdom and honesty.', power: 'Truth & Cosmic Light', emoji: '🪞' },
      { name: 'Yasakani no Magatama', owner: 'Imperial House of Japan', type: 'Sacred Jewel', description: 'The Jewel of Yasakani, one of the three Imperial Treasures. The curved jewel (magatama) is associated with the soul and represents the completeness of the cosmos. These curved comma-shaped stones have been made in Japan since prehistoric times and are found in ancient burial mounds. The jewel is kept at the Imperial Palace, Tokyo.', power: 'Soul Completeness & Divine Authority', emoji: '💎' }
    ],
    stories: [
      { title: 'Creation of Japan', era: '-7000 BCE (mythic)', summary: 'Izanagi and Izanami, standing on the Floating Bridge of Heaven, dipped the divine spear Amenonuhoko into the primordial ocean and stirred. The drops that fell from the spear formed the island of Onogoro. The two gods descended and gave birth to the eight islands of Japan, then to the gods of wind, sea, mountains, and nature.', characters: ['Izanagi', 'Izanami'] },
      { title: 'Amaterasu in the Cave', era: 'Mythic', summary: 'After Susanoo\'s rampage destroyed the heavenly rice paddies and caused Amaterasu\'s weaving maiden to die, Amaterasu hid in the Ama-no-Iwato (Rock Cave of Heaven), plunging the world into darkness. Eight million gods assembled outside and threw a wild party with dancing and laughter, coaxing a curious Amaterasu out to restore the sun.', characters: ['Amaterasu', 'Susanoo', 'Amenouzume', 'Eight Million Gods'] },
      { title: 'Susanoo vs Yamata-no-Orochi', era: 'Mythic', summary: 'Exiled from heaven, Susanoo descended to earth and encountered a weeping old couple. Their daughter Kushinadahime was to be the dragon Yamata-no-Orochi\'s next victim. Susanoo devised a plan: he brewed eight vats of sake and lured the eight-headed dragon to drink from them. Once all heads were drunk and sleeping, he slew them all.', characters: ['Susanoo', 'Yamata-no-Orochi', 'Kushinadahime', 'Amaterasu'] },
      { title: 'Journey to Yomi', era: 'Mythic', summary: 'After Izanami died giving birth to the fire god, Izanagi descended to Yomi (the underworld) to retrieve her. She asked him not to look at her. Unable to resist, Izanagi lit a torch and saw her rotting, maggot-covered form. He fled in terror. Izanami, enraged and humiliated, sent demons to pursue him. He escaped and blocked the entrance with a great boulder.', characters: ['Izanagi', 'Izanami', 'Shikome (Ugly Women)', 'Yomotsu-Hirasaka'] }
    ],
    timeline: [
      { id: 'j1', content: 'Creation of Japan by Izanagi & Izanami', start: '-7000', group: 'japanese' },
      { id: 'j2', content: "Amaterasu's Birth", start: '-6000', group: 'japanese' },
      { id: 'j3', content: 'Amaterasu hides in the Cave', start: '-5000', group: 'japanese' },
      { id: 'j4', content: 'Susanoo slays Yamata-no-Orochi', start: '-4000', group: 'japanese' },
      { id: 'j5', content: 'Three Imperial Treasures given', start: '-3000', group: 'japanese' },
      { id: 'j6', content: 'Emperor Jimmu — first Emperor', start: '-660', group: 'japanese' }
    ],
    links: [
      { source: 'Izanagi', target: 'Amaterasu', type: 'parent' },
      { source: 'Izanagi', target: 'Tsukuyomi', type: 'parent' },
      { source: 'Izanagi', target: 'Susanoo', type: 'parent' },
      { source: 'Izanami', target: 'Amaterasu', type: 'parent' },
      { source: 'Izanagi', target: 'Izanami', type: 'spouse' },
      { source: 'Susanoo', target: 'Kushinadahime', type: 'spouse' }
    ]
  },

  celtic: {
    id: 'celtic', name: 'Celtic', color: '#4a9e6b',
    region: 'Northwestern Europe',
    mapCenter: [53.41, -8.24], mapZoom: 5,
    gods: [
      { name: 'Dagda', role: 'Father God', domain: 'Earth, Agriculture, Wisdom, Magic', description: 'The "Good God" and father figure of the Tuatha Dé Danann. The Dagda is a powerful earth deity associated with the seasons, agriculture, masculine strength, and druidic wisdom. He owns a magic cauldron that never empties (one of the Four Treasures of Ireland), a great club that kills with one end and resurrects with the other, and a harp that controls emotions.', parents: ['Elatha (Fomorian) or Ethliu'], children: ['Angus Mac Og', 'Brigid', 'Bodb Derg', 'Cermait'], spouse: 'Morrigan (sometimes)', power: 10, symbol: 'Magic Cauldron & Club', epithets: ['The Good God', 'All-Father', 'Eochaid Ollathair', 'Ruad Rofhessa'], emoji: '🪄' },
      { name: 'Morrigan', role: 'Goddess of Fate & War', domain: 'War, Death, Fate, Prophecy', description: 'The terrifying phantom queen, a triple goddess of war, death, and fate. The Morrigan appears as a crow on the battlefield, prophesying doom and inciting warriors to battle. She is a shapeshifter — raven, crow, wolf, eel, or beautiful woman. She attempted to seduce Cú Chulainn, and when he rejected her, she became his enemy and foretold his death.', parents: ['Ernmas', 'Elcmar'], children: [], spouse: 'Dagda (sometimes)', power: 10, symbol: 'Crow & Raven', epithets: ['Phantom Queen', 'Great Queen', 'Badb', 'Macha', 'Nemain'], emoji: '🐦‍⬛' },
      { name: 'Lugh', role: 'God of Light & Skill', domain: 'Sun, Light, Craftsmanship, Skill, War', description: 'The "Many-Skilled One" and solar deity. Lugh was master of all arts and crafts — no skill he attempted was beyond him. He led the Tuatha Dé Danann against the Fomorians in the Second Battle of Magh Tuireadh, killing his own grandfather Balor (the evil-eyed Fomorian king) with his magical spear. The festival Lughnasadh is named for him.', parents: ['Cian (Tuatha Dé Danann)', 'Ethniu (Fomorian)'], children: ['Cú Chulainn (mortal son)'], spouse: 'Nás', power: 9, symbol: 'Magical Spear & Sun', epithets: ['Lámhfhada (Long-Arm)', 'Samildánach (Many-Skilled)', 'The Shining One'], emoji: '☀️' },
      { name: 'Brigid', role: 'Goddess of the Hearth', domain: 'Fire, Poetry, Healing, Smithcraft', description: 'The beloved triple goddess of poetry, healing, and smithcraft. Daughter of the Dagda, Brigid is associated with the sacred fire and the hearth. The Christianized Brigid became Saint Brigit of Kildare, where the sacred flame was kept burning for centuries. Her festival, Imbolc (February 1), marks the beginning of spring.', parents: ['Dagda', 'Morrigan'], children: ['Ruadán'], spouse: 'Bres', power: 8, symbol: 'Flame & Cross', epithets: ['Bright One', 'The Exalted One', 'Bride', 'Holy Fire'], emoji: '🔥' },
      { name: 'Cernunnos', role: 'God of Wild Things', domain: 'Nature, Animals, Fertility, Underworld, Wealth', description: 'The horned god of the forest, associated with wild animals, fertility, and the underworld. Cernunnos is typically depicted sitting cross-legged with antlers on his head, wearing a torque, holding a serpent, and surrounded by animals. He represents the wild, untamed nature and the cycle of life. His name means "The Horned One."', parents: [], children: [], spouse: null, power: 8, symbol: 'Antlers & Serpent', epithets: ['Horned One', 'Lord of Wild Things', 'Lord of the Animals', 'Green God'], emoji: '🦌' },
      { name: 'Danu', role: 'Mother Goddess', domain: 'Wisdom, Fertility, Earth, Wind', description: 'The mother goddess of the Tuatha Dé Danann (Peoples of the Goddess Danu). Though rarely mentioned directly in surviving texts, she is considered the divine mother of the Irish gods, giving her name to the entire divine race. She is associated with rivers, particularly the Danube, and with earth and wisdom.', parents: [], children: ['Dagda', 'Nuada', 'Lir'], spouse: null, power: 9, symbol: 'River & Earth', epithets: ['Great Mother', 'Divine Waters', 'Mother of Gods'], emoji: '🌊' },
      { name: 'Nuada', role: 'First King of the Tuatha Dé Danann', domain: 'Kingship, War, Law', description: 'The first king of the Tuatha Dé Danann, who lost his hand in the First Battle of Magh Tuireadh. A king with a physical blemish could not rule, so he stepped aside. After being fitted with a silver hand by the physician Dian Cecht, he was called Nuada Airgeadlámh (Silver-Handed). He later recovered his kingship and was slain by Balor\'s evil eye.', parents: [], children: [], spouse: 'Macha', power: 8, symbol: 'Silver Hand & Sword', epithets: ['Silver-Handed', 'Cloud-Maker', 'First King of Ireland'], emoji: '🤚' },
      { name: 'Manannán mac Lir', role: 'God of the Sea', domain: 'Sea, Otherworld, Weather, Magic', description: 'The sea god and ruler of the Otherworld (Tír na nÓg — Land of the Young). Manannán travels on a magical horse across the sea and uses his cloak to create mist and illusions. He is the keeper of the treasures of the Otherworld, including the Feast of Goibhniu (which grants immortality) and the Otherworld apples.', parents: ['Lir'], children: ['Mongán'], spouse: 'Fand', power: 9, symbol: 'Magic Cloak & Sea', epithets: ['Son of the Sea', 'Lord of the Land of Promise', 'The Weather-God'], emoji: '🌊' }
    ],
    monsters: [
      { name: 'Fomorians', type: 'chaos beings', description: 'The primordial forces of chaos and darkness who inhabited Ireland before the gods. Supernatural beings associated with blight, death, and the sea. The Fomorians were led by Balor of the Evil Eye, whose gaze could kill thousands. After two great battles (the Battles of Magh Tuireadh), they were driven from Ireland by the Tuatha Dé Danann.', threat: 9, emoji: '👁️', origin: 'Ancient Ireland', weakness: 'Tuatha Dé Danann magic' },
      { name: 'Banshee', type: 'spirit', description: 'The "woman of the fairy mound" — a supernatural female spirit whose wailing is an omen of death. The Banshee attaches herself to Irish noble families and her keening (mourning cry) foretells the imminent death of a family member. She appears as either a beautiful young woman or a terrifying hag, always dressed in gray or white.', threat: 6, emoji: '👻', origin: 'Irish Fairy Mounds', weakness: 'N/A (she only foretells death)' },
      { name: 'Dullahan', type: 'headless rider', description: 'The headless horseman of Irish folklore, a fairy of the Unseelie Court. The Dullahan carries its own smiling, decaying head under its arm and rides a headless black horse. Wherever it stops, a mortal dies. It carries a whip made from a human spine. If it calls your name, you die. Pouring gold coins at its feet can ward it off.', threat: 9, emoji: '🐴', origin: 'Irish Countryside', weakness: 'Gold' },
      { name: 'Cu Sith', type: 'fairy hound', description: 'The great fairy hound of Celtic mythology, typically depicted as a large dark green dog. Unlike banshees, the Cu Sith is associated with the Sídhe (fairy folk) as a dog of the supernatural hunt. In Scottish tradition, the Cu Sith would only bark three times before hunting down its prey — giving cattle and people a chance to shelter before the third bark.', threat: 7, emoji: '🐕', origin: 'Scottish Highlands', weakness: 'Sacred objects & Shelter' },
      { name: 'Selkie', type: 'seal spirit', description: 'Shape-shifting spirits that are seals in the ocean but become human when they shed their skin on land. Selkies long to return to the sea. In folklore, fishermen capture selkies by hiding their seal-skins, and the selkie is forced to live as a human spouse until they find their skin. Selkies are associated with melancholy and longing for freedom.', threat: 4, emoji: '🦭', origin: 'Orkney & Shetland Islands', weakness: 'Finding their seal skin' },
      { name: 'Leprechaun', type: 'fairy', description: 'The cobbler fairy of Irish folklore, a type of mischievous fairy (leprechaun means "small body"). They are known for their pots of gold at rainbow\'s end and their ability to grant three wishes if captured. However, they will use any trick to escape, and their wish grants often come with catches. They wear green and are known for their mischievous grins.', threat: 3, emoji: '🍀', origin: 'Ireland', weakness: 'Eye contact must be maintained' }
    ],
    artifacts: [
      { name: 'Cauldron of Dagda', owner: 'Dagda', type: 'Magical Vessel', description: 'One of the Four Treasures of the Tuatha Dé Danann, the great cauldron of the Dagda never ran empty — no company ever left it unsatisfied. It also had the power to restore the dead to life (though they could no longer speak). The cauldron represents the abundance of nature and the inexhaustible generosity of the divine father.', power: 'Endless Sustenance & Resurrection', emoji: '🪣' },
      { name: "Lugh's Spear", owner: 'Lugh', type: 'Magical Spear', description: 'The Spear of Lugh (Luin of Celtchar), one of the Four Treasures of Ireland. So eager to kill that it had to be kept submerged in a cauldron of dark liquid to prevent it from hunting on its own. When raised in battle by Lugh, no enemy could withstand it, and no battle was ever sustained against it. Lugh used it to kill the Fomorian king Balor.', power: 'Unerring Destruction', emoji: '🗡️' },
      { name: 'Lia Fáil', owner: 'Ireland', type: 'Sacred Stone', description: 'The Stone of Destiny, one of the Four Treasures of Ireland. Brought from the mythical city of Falias, the Lia Fáil would cry out when stood upon by the rightful High King of Ireland. Some traditions equate it with the Stone of Scone (used in Scottish coronations). It stands on the Hill of Tara, the ancient seat of Irish kingship.', power: 'Divine Recognition of Kingship', emoji: '🪨' },
      { name: 'Sword of Nuada', owner: 'Nuada', type: 'Sacred Sword', description: 'One of the Four Treasures of Ireland, brought from the mythical city of Findias. No enemy could escape from it once drawn. When unsheathed, it shone with the light of the sun and could cut through stone. It represents the power of light over darkness and the authority of righteous kingship.', power: 'Inescapable Divine Justice', emoji: '⚔️' },
      { name: 'Cloak of Manannán', owner: 'Manannán mac Lir', type: 'Magic Cloak', description: 'The shimmering cloak of the sea god Manannán, which could create illusions, mist, and confusion. When Manannán shook his cloak between warring parties, they forgot each other completely. It also rendered the wearer invisible. Manannán used it to bring heroes to the Otherworld and to shield the sacred islands from mortal sight.', power: 'Illusion, Mist, & Invisibility', emoji: '🌫️' }
    ],
    stories: [
      { title: 'Cú Chulainn', era: '100 BCE - 100 CE', summary: 'The epic of Ireland\'s greatest hero, the demigod son of the god Lugh and a mortal woman. The saga of Cú Chulainn\'s defense of Ulster alone against the armies of Connacht while all the men of Ulster lay under a curse. His deeds include the cattle raid of Cooley and his tragic death when his own geasa (sacred prohibitions) were turned against him.', characters: ['Cú Chulainn', 'Lugh', 'Morrigan', 'Conchobar mac Nessa', 'Medb'] },
      { title: 'Tuatha Dé Danann', era: '3000 BCE (mythic)', summary: 'The divine race who came to Ireland from four mythical cities — Falias, Gorias, Murias, and Finias — bringing four great treasures. They defeated the Fir Bolg at the First Battle of Magh Tuireadh, then defeated the Fomorians at the Second Battle. When the Milesians (mortal humans) invaded, the Tuatha retreated to the Otherworld beneath Ireland\'s fairy mounds.', characters: ['Dagda', 'Lugh', 'Nuada', 'Morrigan', 'Brigid', 'Danu'] },
      { title: 'Battle of Magh Tuireadh', era: '3000 BCE (mythic)', summary: 'Two great battles that established the order of Irish mythology. In the First, the Tuatha Dé Danann defeated the Fir Bolg. In the Second — the more famous — the Tuatha Dé Danann defeated the monstrous Fomorians. Lugh killed the Fomorian king Balor (his own grandfather) with a sling stone through his evil eye.', characters: ['Lugh', 'Balor', 'Dagda', 'Nuada', 'Morrigan', 'Fomorians'] },
      { title: 'King Arthur', era: '500 CE', summary: 'The legendary king of Britain who united the warring kingdoms after the Roman withdrawal. Arthur pulled the sword Excalibur from the stone (or received it from the Lady of the Lake), established the Round Table of equal knighthood, and sought the Holy Grail. Betrayed by Mordred, Arthur was carried to Avalon to heal and is said to await his return.', characters: ['Arthur', 'Merlin', 'Guinevere', 'Lancelot', 'Mordred', 'Morgan le Fay'] }
    ],
    timeline: [
      { id: 'c1', content: 'Tuatha Dé Danann arrive in Ireland', start: '-3000', group: 'celtic' },
      { id: 'c2', content: 'First Battle of Magh Tuireadh', start: '-2900', group: 'celtic' },
      { id: 'c3', content: 'Second Battle of Magh Tuireadh', start: '-2800', group: 'celtic' },
      { id: 'c4', content: 'Milesians invade — gods retreat underground', start: '-1000', group: 'celtic' },
      { id: 'c5', content: "Cú Chulainn's deeds", start: '-100', group: 'celtic' },
      { id: 'c6', content: 'King Arthur reigns', start: '500', group: 'celtic' }
    ],
    links: [
      { source: 'Dagda', target: 'Brigid', type: 'parent' },
      { source: 'Danu', target: 'Dagda', type: 'parent' },
      { source: 'Danu', target: 'Nuada', type: 'parent' },
      { source: 'Lugh', target: 'Morrigan', type: 'spouse' },
      { source: 'Nuada', target: 'Macha', type: 'spouse' }
    ]
  },

  aztec: {
    id: 'aztec', name: 'Aztec', color: '#c94040',
    region: 'Mesoamerica',
    mapCenter: [19.43, -99.13], mapZoom: 5,
    gods: [
      { name: 'Quetzalcoatl', role: 'Feathered Serpent', domain: 'Wind, Air, Creation, Learning, Arts', description: 'The feathered serpent, one of the most important gods of Mesoamerica, venerated across many cultures over thousands of years. Quetzalcoatl created humans by traveling to the underworld (Mictlan) and gathering the bones of the dead, bleeding himself onto them to create new life. He is the god of wind, learning, and the morning star (Venus).', parents: ['Ometecuhtli', 'Omecihuatl'], children: ['Morning Star (Venus)'], spouse: null, power: 10, symbol: 'Feathered Serpent & Wind Jewel', epithets: ['Feathered Serpent', 'Lord of the Dawn', 'Lord of the Day Wind', 'The Morning Star'], emoji: '🐍' },
      { name: 'Huitzilopochtli', role: 'God of War & Sun', domain: 'War, Sun, Sacrifice, Strength', description: 'The supreme deity of the Aztecs, god of war, the sun, and human sacrifice. Born fully formed and armored from his mother Coatlicue, Huitzilopochtli immediately used his weapon (the fire serpent Xiuhcoatl) to dismember his sister Coyolxauhqui and drive away his 400 brothers who had planned to kill their mother. He requires blood sacrifice to ensure the sun rises.', parents: ['Coatlicue'], children: [], spouse: null, power: 10, symbol: 'Hummingbird & Sun Disc', epithets: ['Blue Hummingbird of the South', 'Sun God', 'Lord of War', 'The Mighty One'], emoji: '☀️' },
      { name: 'Tlaloc', role: 'God of Rain', domain: 'Rain, Fertility, Water, Lightning', description: 'The ancient god of rain, water, and earthly fertility, one of the oldest and most venerated Aztec deities. Tlaloc controlled the life-giving rains but could also send hail, thunder, and drought. Children were sacrificed to him; their tears were seen as sympathetic magic for rain. He ruled over Tlalocan, a paradise for those who died by water.', parents: ['Tonacatecuhtli', 'Tonacacihuatl'], children: ['Tlaloque (rain deities)'], spouse: 'Xochiquetzal (then Chalchiuhtlicue)', power: 9, symbol: 'Goggle Eyes & Rain', epithets: ['He Who Makes Things Sprout', 'Lord of Rains', 'The Provider'], emoji: '🌧️' },
      { name: 'Coatlicue', role: 'Earth Mother', domain: 'Earth, Life, Death, Fertility', description: 'The terrifying earth mother goddess whose name means "She of the Serpent Skirt." Her skirt is made of writhing serpents; she wears a necklace of human hearts, hands, and skulls. Despite her horrifying appearance, she is the great mother who gave birth to the moon, stars, and the war god Huitzilopochtli. She represents the earth\'s dual nature as both creator and destroyer.', parents: [], children: ['Huitzilopochtli', 'Coyolxauhqui', '400 Huitznahua'], spouse: null, power: 9, symbol: 'Serpent Skirt & Skull Necklace', epithets: ['She of the Serpent Skirt', 'Mother of Gods', 'Earth Mother', 'Devouring Mother'], emoji: '🐍' },
      { name: 'Tezcatlipoca', role: 'God of Night Sky', domain: 'Night Sky, Earth, Sorcery, Temptation, Discord', description: 'The supreme sorcerer god and eternal rival of Quetzalcoatl. His name means "Smoking Mirror" — his obsidian mirror shows him all that happens in the world. Tezcatlipoca overthrew the world ages ruled by other gods, challenged Quetzalcoatl to contest and humiliated him, driving him into exile. He is associated with the night sky, jaguars, and manipulation.', parents: ['Ometecuhtli', 'Omecihuatl'], children: [], spouse: null, power: 10, symbol: 'Obsidian Mirror & Jaguar', epithets: ['Smoking Mirror', 'Enemy of Both Sides', 'He Who is Always Near', 'Lord of the Night'], emoji: '🪞' },
      { name: 'Xipe Totec', role: 'God of Agriculture', domain: 'Agriculture, Seasons, Renewal, Goldsmiths', description: 'The flayed god whose name means "Our Lord the Flayed One." Xipe Totec wore the skin of a sacrificed human, representing the earth shedding its old skin (like a snake) and growing a new one — symbolizing the renewal of seasons, the germination of seeds, and the renewal of vegetation each spring. He was worshipped by goldsmiths and associated with fertility.', parents: [], children: [], spouse: null, power: 8, symbol: 'Flayed Human Skin', epithets: ['Our Lord the Flayed One', 'Drinker of the Night', 'Red Tezcatlipoca'], emoji: '🌱' },
      { name: 'Tonatiuh', role: 'Sun God', domain: 'Sun, Warriors, Heaven', description: 'The sun god who rules the current (fifth) cosmic age. The Aztec Sunstone (often called the "Aztec Calendar") depicts Tonatiuh at its center. He required the blood of sacrificial victims and warriors to have the strength to rise each morning and cross the sky. Warriors who died in battle and women who died in childbirth accompanied him on his daily journey.', parents: [], children: [], spouse: null, power: 9, symbol: 'Sunstone (Aztec Calendar)', epithets: ['The Fifth Sun', 'Nahui-Ollin', 'Sun Eagle', 'Devourer'], emoji: '🌞' },
      { name: 'Mictlantecuhtli', role: 'God of the Dead', domain: 'Death, Underworld, Night', description: 'The lord of Mictlan, the lowest level of the underworld. Mictlantecuhtli is depicted as a skeleton or corpse with bulging eyes and spiders in his hair. After death, the soul must travel through nine levels of the underworld over four years, facing challenges, before reaching Mictlan. Quetzalcoatl had to descend to Mictlan to obtain the bones to create humans.', parents: ['Tonacatecuhtli', 'Tonacacihuatl'], children: [], spouse: 'Mictecacihuatl', power: 9, symbol: 'Skull & Bat', epithets: ['Lord of Mictlan', 'Lord of the Dead', 'Night Owl King', 'Ruler of the Nine Levels'], emoji: '💀' }
    ],
    monsters: [
      { name: 'Cipactli', type: 'primordial monster', description: 'The primordial crocodilian sea monster of Aztec creation myth. In the beginning, only the sea existed with Cipactli in it. Quetzalcoatl and Tezcatlipoca used themselves as bait to lure Cipactli. When it bit off Tezcatlipoca\'s foot, they tore the monster apart, and from its body made the earth, sky, mountains, and rivers.', threat: 10, emoji: '🐊', origin: 'Primordial Ocean', weakness: 'The Two Creator Gods' },
      { name: 'Tzitzimitl', type: 'star demon', description: 'Terrifying female star demons that live in the sky and threaten to descend and devour humanity during solar eclipses. The Tzitzimimeh are associated with death and the destruction of the world. During the dangerous transition times (especially the New Fire Ceremony every 52 years), Aztec priests feared the Tzitzimimeh would descend if the new fire could not be lit.', threat: 9, emoji: '⭐', origin: 'Star-filled Sky', weakness: 'New Fire Ceremony' },
      { name: 'Ahuizotl', type: 'water creature', description: 'A vicious water creature with a human-like hand on its tail, used to drag victims underwater. The Ahuizotl was associated with rain and water gods. It would use its tail-hand to snatch people near water, drown them, and eat their eyes, teeth, and nails. Those taken by Ahuizotl were considered sacrificial victims of the water gods and entered the paradise Tlalocan.', threat: 8, emoji: '🦦', origin: 'Lakes & Rivers of Mexico', weakness: 'Divine protection' },
      { name: 'Nahual', type: 'shape-shifter', description: 'A sorcerer or spirit who can transform into animal form. In Aztec belief, each person has a nahual — an animal spirit companion — determined by their birthday in the Aztec calendar. Powerful nahual sorcerers could transform themselves into jaguars, coyotes, or birds and perform both healing and harmful magic. Dark nahuales would steal children\'s life force.', threat: 7, emoji: '🐆', origin: 'Mesoamerican Sorcery', weakness: 'Counter-sorcery & sacred fire' }
    ],
    artifacts: [
      { name: 'Sunstone', owner: 'Tonatiuh / The Aztec People', type: 'Sacred Calendar Stone', description: 'The great Aztec calendar stone (often called "Aztec Calendar"), carved in the 15th century. At its center is the sun god Tonatiuh. It depicts the four previous world ages and the current fifth sun. The four previous suns (Jaguar, Wind, Rain, Water) were each destroyed; the current age began when the gods sacrificed themselves to create the fifth sun at Teotihuacan.', power: 'Cosmic Time & Creation Record', emoji: '🌀' },
      { name: 'Obsidian Mirror', owner: 'Tezcatlipoca', type: 'Divine Mirror', description: 'The smoking obsidian mirror of Tezcatlipoca, which reveals all secrets — past, present, and future. It shows him the sins of humanity and the schemes of gods. When Quetzalcoatl looked into the mirror, he was so horrified by the reflection of his aged mortal appearance that he got drunk, committed a shameful act, and fled into exile.', power: 'Omniscience & Prophecy', emoji: '🪞' },
      { name: 'Xiuhcoatl', owner: 'Huitzilopochtli', type: 'Fire Serpent Weapon', description: 'The Fire Serpent weapon of Huitzilopochtli. At birth, he used the Xiuhcoatl to dismember his sister Coyolxauhqui and scatter his 400 brothers. The fire serpent represents the solar rays of midday sun. Its burning strikes represent drought and the fierce heat of the sun at its zenith, also associated with years and time in Aztec cosmology.', power: 'Solar Fire & Destruction', emoji: '🔥' },
      { name: 'Chalchiuhtlicue\'s Jade Skirt', owner: 'Chalchiuhtlicue', type: 'Divine Garment', description: 'The jade skirt of Chalchiuhtlicue, goddess of rivers, lakes, and storms. The jade (chalchihuitl) represents the precious nature of water. Chalchiuhtlicue ruled the fourth cosmic age (sun of water) which ended when she wept and her tears flooded the world. Her skirt represents the water that surrounds and sustains life, and jade was the most precious material in Aztec culture.', power: 'Water Control & Life', emoji: '💚' }
    ],
    stories: [
      { title: 'Creation of the Fifth Sun', era: '-3000 BCE (mythic)', summary: 'After the fourth sun was destroyed, the gods gathered at Teotihuacan in darkness. They needed to create a new sun. Two gods, the proud Tecuciztecatl and the humble, sickly Nanahuatzin, were chosen. Both were to throw themselves into a great fire to become the sun. Tecuciztecatl hesitated four times; Nanahuatzin leaped fearlessly and became the sun.', characters: ['Quetzalcoatl', 'Tezcatlipoca', 'Nanahuatzin', 'Tecuciztecatl', 'Tonatiuh'] },
      { title: 'Quetzalcoatl Myth', era: '1000 BCE (mythic)', summary: 'Quetzalcoatl, the feathered serpent, lived as a great king and priest in Tula. His rival Tezcatlipoca used the obsidian mirror to show Quetzalcoatl his aged face, then tricked him into drunkenness and shame. Humiliated, Quetzalcoatl burned his palace and sailed east on a raft of serpents, promising to return on the date One Reed (which coincided with Cortés\'s arrival in 1519).', characters: ['Quetzalcoatl', 'Tezcatlipoca'] },
      { title: "Tlaloc's Rain", era: 'Mythic/Annual', summary: 'Tlaloc, the ancient rain god, brings life-giving water to the earth. But when angered by insufficient sacrifices, he sends drought, hail, and flood. The Aztecs offered child sacrifices to Tlaloc, believing that the children\'s tears would bring rain. The festival Etzalqualiztli was held in his honor, featuring communal bathing in the lake of Tenochtitlan.', characters: ['Tlaloc', 'Chalchiuhtlicue', 'Tlaloque', 'Human Sacrifices'] },
      { title: 'Huitzilopochtli\'s Birth', era: 'Mythic', summary: 'Coatlicue, the earth goddess, was impregnated by a ball of feathers while sweeping the temple. Her daughter Coyolxauhqui rallied 400 brothers (the stars) to kill their mother in shame. But at the moment of birth, Huitzilopochtli sprang forth fully armored, wielded the fire serpent Xiuhcoatl, slew Coyolxauhqui, and drove away the 400 — reenacting the sun\'s daily victory over the moon and stars.', characters: ['Huitzilopochtli', 'Coatlicue', 'Coyolxauhqui', '400 Huitznahua'] }
    ],
    timeline: [
      { id: 'a1', content: 'Creation of Cipactli — Earth formed', start: '-5000', group: 'aztec' },
      { id: 'a2', content: 'First through Fourth Suns destroyed', start: '-4000', group: 'aztec' },
      { id: 'a3', content: 'Fifth Sun created at Teotihuacan', start: '-3000', group: 'aztec' },
      { id: 'a4', content: 'Quetzalcoatl sails east', start: '-1000', group: 'aztec' },
      { id: 'a5', content: 'Aztec Empire founded — Tenochtitlan', start: '1300', group: 'aztec' },
      { id: 'a6', content: 'Cortés arrives (One Reed year)', start: '1519', group: 'aztec' }
    ],
    links: [
      { source: 'Coatlicue', target: 'Huitzilopochtli', type: 'parent' },
      { source: 'Tlaloc', target: 'Chalchiuhtlicue', type: 'spouse' },
      { source: 'Mictlantecuhtli', target: 'Mictecacihuatl', type: 'spouse' }
    ]
  }
};

// ── 2. APP STATE ──────────────────────────────────────────────────

const state = {
  activeCulture: 'greek',
  activeTab: 'map',
  map: null,
  mapMarkers: {},
  treeSimulation: null,
  timeline: null,
  sideOpen: false
};

// ── 3. INIT ───────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initCultureButtons();
  initTabButtons();
  initMap();
  initTimeline();
  initConstellations();
  initBattleSim();
  setCulture('greek');
});

// ── 4. CULTURE SWITCHING ──────────────────────────────────────────

function setCulture(cultureId) {
  state.activeCulture = cultureId;
  const culture = MYTHOLOGY_DATA[cultureId];

  // Update active button
  document.querySelectorAll('.culture-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.culture === cultureId);
  });

  // Update body class
  document.body.className = `culture-${cultureId}`;

  // Update CSS variable for active culture color
  document.documentElement.style.setProperty('--active-culture-color', culture.color);

  // Update map focus
  if (state.map) {
    state.map.flyTo(culture.mapCenter, culture.mapZoom, { animate: true, duration: 1.5 });
    highlightMapMarker(cultureId);
  }

  // Re-render all tabs
  renderMonstersTab();
  renderStoriesTab();
  renderArtifactsTab();
  renderFamilyTree();
  updateBattleSelects();
}

// ── 5. TAB SWITCHING ──────────────────────────────────────────────

function initTabButtons() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => setTab(btn.dataset.tab));
  });
}

function setTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(`tab-${tabId}`);
  if (panel) panel.classList.add('active');
  const btn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');

  if (tabId === 'map' && state.map) {
    setTimeout(() => state.map.invalidateSize(), 100);
  }
  if (tabId === 'tree') {
    renderFamilyTree();
  }
}

// ── 6. CULTURE BUTTONS ────────────────────────────────────────────

function initCultureButtons() {
  document.querySelectorAll('.culture-btn').forEach(btn => {
    btn.addEventListener('click', () => setCulture(btn.dataset.culture));
  });
}

// ── 7. LEAFLET MAP ────────────────────────────────────────────────

const cultureMapData = {
  greek:    { center: [37.97, 23.73], zoom: 6 },
  norse:    { center: [59.91, 10.75], zoom: 5 },
  egyptian: { center: [29.97, 31.13], zoom: 6 },
  hindu:    { center: [20.59, 78.96], zoom: 5 },
  japanese: { center: [35.68, 139.69], zoom: 5 },
  celtic:   { center: [53.41, -8.24], zoom: 5 },
  aztec:    { center: [19.43, -99.13], zoom: 5 }
};

function initMap() {
  const map = L.map('mapContainer', {
    center: [30, 15],
    zoom: 3,
    zoomControl: true,
    attributionControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }).addTo(map);

  state.map = map;

  Object.entries(MYTHOLOGY_DATA).forEach(([id, culture]) => {
    const mapData = cultureMapData[id];
    const marker = L.circleMarker(mapData.center, {
      radius: 16,
      fillColor: culture.color,
      color: '#c9a84c',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.85
    }).addTo(map);

    const popupHTML = `
      <div class="map-popup">
        <div class="popup-title">${culture.name} Mythology</div>
        <div class="popup-region">${culture.region}</div>
        <div class="popup-stats">
          <span>⚡ ${culture.gods.length} Gods</span>
          <span>👾 ${culture.monsters.length} Monsters</span>
        </div>
        <button class="popup-btn" onclick="setCulture('${id}'); closeModal();">Explore ${culture.name}</button>
      </div>
    `;
    marker.bindPopup(popupHTML, { className: 'custom-popup' });
    marker.on('click', () => {
      setCulture(id);
    });

    state.mapMarkers[id] = marker;
  });
}

function highlightMapMarker(cultureId) {
  Object.entries(state.mapMarkers).forEach(([id, marker]) => {
    if (id === cultureId) {
      marker.setStyle({ weight: 4, radius: 20, fillOpacity: 1 });
    } else {
      marker.setStyle({ weight: 2, radius: 16, fillOpacity: 0.85 });
    }
  });
}

// ── 8. D3 FAMILY TREE ─────────────────────────────────────────────

function renderFamilyTree() {
  const svg = d3.select('#familyTreeSvg');
  svg.selectAll('*').remove();

  const container = document.getElementById('tab-tree');
  const W = container.clientWidth || 900;
  const H = Math.max(container.clientHeight - 100, 500);

  svg.attr('width', W).attr('height', H);

  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const gods = culture.gods || [];
  const links = culture.links || [];

  if (gods.length === 0) return;

  // Build node lookup
  const nodeMap = {};
  gods.forEach(g => { nodeMap[g.name] = g; });

  // Build D3 nodes and links
  const nodesData = gods.map(g => ({ id: g.name, ...g }));
  const linksData = links
    .filter(l => nodeMap[l.source] && nodeMap[l.target])
    .map(l => ({ source: l.source, target: l.target, type: l.type }));

  const g = svg.append('g');

  // Zoom behavior
  svg.call(d3.zoom().scaleExtent([0.3, 3]).on('zoom', event => {
    g.attr('transform', event.transform);
  }));

  // Arrow markers
  svg.append('defs').selectAll('marker')
    .data(['parent', 'spouse', 'child'])
    .enter().append('marker')
      .attr('id', d => `arrow-${d}`)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 20).attr('refY', 0)
      .attr('markerWidth', 6).attr('markerHeight', 6)
      .attr('orient', 'auto')
    .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', d => d === 'spouse' ? '#f0d080' : culture.color);

  // Force simulation
  if (state.treeSimulation) state.treeSimulation.stop();

  const simulation = d3.forceSimulation(nodesData)
    .force('link', d3.forceLink(linksData).id(d => d.id).distance(110))
    .force('charge', d3.forceManyBody().strength(-320))
    .force('center', d3.forceCenter(W / 2, H / 2))
    .force('collision', d3.forceCollide(38));

  state.treeSimulation = simulation;

  // Draw links
  const link = g.append('g').selectAll('path')
    .data(linksData).enter().append('path')
      .attr('class', 'tree-link')
      .attr('stroke', d => d.type === 'spouse' ? '#f0d080' : culture.color)
      .attr('stroke-width', d => d.type === 'spouse' ? 1.5 : 1)
      .attr('stroke-dasharray', d => d.type === 'spouse' ? '6,3' : 'none')
      .attr('fill', 'none')
      .attr('opacity', 0.65)
      .attr('marker-end', d => `url(#arrow-${d.type})`);

  // Draw node groups
  const node = g.append('g').selectAll('g.node')
    .data(nodesData).enter().append('g')
      .attr('class', 'tree-node')
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      )
      .on('click', (event, d) => {
        event.stopPropagation();
        openSidePanel(d);
      });

  // Node circles
  node.append('circle')
    .attr('r', d => Math.max(18, (d.power || 5) * 2.8))
    .attr('fill', culture.color)
    .attr('fill-opacity', d => 0.4 + (d.power || 5) * 0.05)
    .attr('stroke', '#c9a84c')
    .attr('stroke-width', 2)
    .attr('class', 'node-circle');

  // Node emoji
  node.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('font-size', d => Math.max(14, (d.power || 5) * 2))
    .attr('pointer-events', 'none')
    .text(d => d.emoji || '⚡');

  // Node labels
  node.append('text')
    .attr('class', 'node-label')
    .attr('text-anchor', 'middle')
    .attr('dy', d => Math.max(18, (d.power || 5) * 2.8) + 14)
    .attr('font-family', 'Cinzel, serif')
    .attr('font-size', '10px')
    .attr('fill', '#e8d5a3')
    .attr('pointer-events', 'none')
    .text(d => d.name);

  // Hover effects
  node.on('mouseenter', function(event, d) {
    d3.select(this).select('circle')
      .attr('stroke', '#fff')
      .attr('stroke-width', 3)
      .attr('r', Math.max(22, (d.power || 5) * 3.3));

    // Highlight connected links
    link.attr('opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.15);
  }).on('mouseleave', function(event, d) {
    d3.select(this).select('circle')
      .attr('stroke', '#c9a84c')
      .attr('stroke-width', 2)
      .attr('r', Math.max(18, (d.power || 5) * 2.8));
    link.attr('opacity', 0.65);
  });

  // Tick function
  simulation.on('tick', () => {
    link.attr('d', d => {
      const dx = d.target.x - d.source.x;
      const dy = d.target.y - d.source.y;
      const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
      return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
    });
    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });

  // Legend
  const legend = svg.append('g').attr('transform', 'translate(20,20)');
  [['parent', culture.color, 'solid'], ['spouse', '#f0d080', 'dashed']].forEach(([label, color, style], i) => {
    const lg = legend.append('g').attr('transform', `translate(0,${i * 22})`);
    lg.append('line').attr('x1', 0).attr('y1', 8).attr('x2', 30).attr('y2', 8)
      .attr('stroke', color).attr('stroke-width', 1.5)
      .attr('stroke-dasharray', style === 'dashed' ? '5,3' : 'none');
    lg.append('text').attr('x', 36).attr('y', 12)
      .attr('fill', '#9a8a6a').attr('font-size', '10px')
      .attr('font-family', 'Crimson Text, serif').text(label);
  });
}

// ── 9. BATTLE SIMULATOR ───────────────────────────────────────────

function initBattleSim() {
  updateBattleSelects();
  updateCombatantCard('challenger');
  updateCombatantCard('opponent');
}

function updateBattleSelects() {
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const allEntities = [
    ...culture.gods.map(g => ({ ...g, entityType: 'God' })),
    ...culture.monsters.map(m => ({ ...m, entityType: 'Monster', power: m.threat || 5 }))
  ];

  ['challengerSelect', 'opponentSelect'].forEach((selectId, idx) => {
    const sel = document.getElementById(selectId);
    if (!sel) return;
    sel.innerHTML = '';
    allEntities.forEach((e, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${e.emoji || '⚡'} ${e.name} (${e.entityType})`;
      sel.appendChild(opt);
    });
    if (idx === 1 && allEntities.length > 1) sel.selectedIndex = 1;
    sel.onchange = () => updateCombatantCard(idx === 0 ? 'challenger' : 'opponent');
  });

  updateCombatantCard('challenger');
  updateCombatantCard('opponent');
}

function getSelectedEntity(side) {
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const allEntities = [
    ...culture.gods.map(g => ({ ...g, entityType: 'God' })),
    ...culture.monsters.map(m => ({ ...m, entityType: 'Monster', power: m.threat || 5 }))
  ];
  const sel = document.getElementById(side === 'challenger' ? 'challengerSelect' : 'opponentSelect');
  if (!sel) return allEntities[0];
  const idx = parseInt(sel.value, 10);
  return allEntities[idx] || allEntities[0];
}

function updateCombatantCard(side) {
  const entity = getSelectedEntity(side);
  const cardId = side === 'challenger' ? 'challengerCard' : 'opponentCard';
  const card = document.getElementById(cardId);
  if (!card || !entity) return;
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  card.innerHTML = `
    <div class="combatant-emoji">${entity.emoji || '⚡'}</div>
    <div class="combatant-name">${entity.name}</div>
    <div class="combatant-role">${entity.role || entity.entityType}</div>
    <div class="combatant-power">
      <span>Power:</span>
      ${getPowerBar(entity.power || entity.threat || 5)}
    </div>
    <div class="combatant-domain">${entity.domain || ''}</div>
  `;
  card.style.borderColor = culture.color;
}

function runBattle() {
  const challenger = getSelectedEntity('challenger');
  const opponent = getSelectedEntity('opponent');
  if (!challenger || !opponent) return;

  const culture = MYTHOLOGY_DATA[state.activeCulture];

  const chalScore = (challenger.power || 5) + Math.random() * 5 + (Math.random() > 0.5 ? 1 : 0);
  const oppScore = (opponent.power || 5) + Math.random() * 5 + (Math.random() > 0.5 ? 1 : 0);

  const winner = chalScore > oppScore ? challenger : opponent;
  const loser = chalScore > oppScore ? opponent : challenger;
  const margin = Math.abs(chalScore - oppScore);
  const closeCall = margin < 1.5;

  // Generate battle log
  const battleActions = [
    `${challenger.name} channels the power of ${challenger.domain ? challenger.domain.split(',')[0] : 'ancient magic'}!`,
    `${opponent.name} retaliates with ${opponent.domain ? opponent.domain.split(',')[0] : 'furious force'}!`,
    `The clash sends shockwaves through the divine realm!`,
    `${winner.name} seizes the moment and strikes decisively!`,
    closeCall
      ? `${loser.name} barely survives but ultimately yields — a legendary duel!`
      : `${loser.name} is overwhelmed and driven back!`,
    `${winner.name} stands victorious! The ${culture.name} pantheon trembles with awe!`
  ];

  const resultDiv = document.getElementById('battleResult');
  const winnerAnnounce = document.getElementById('winnerAnnounce');
  const battleLog = document.getElementById('battleLog');

  winnerAnnounce.innerHTML = `
    <div class="winner-emoji">${winner.emoji || '⚡'}</div>
    <div class="winner-label">VICTORY</div>
    <div class="winner-name">${winner.name}</div>
    <div class="score-line">Score: ${chalScore.toFixed(1)} vs ${oppScore.toFixed(1)}</div>
  `;
  winnerAnnounce.style.color = culture.color;

  battleLog.innerHTML = battleActions.map((line, i) => `
    <div class="battle-log-line" style="animation-delay:${i * 0.15}s">${line}</div>
  `).join('');

  resultDiv.style.display = 'block';
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  winnerAnnounce.classList.remove('battle-flash');
  void winnerAnnounce.offsetWidth;
  winnerAnnounce.classList.add('battle-flash');

  document.getElementById('battleAgainBtn').style.display = 'inline-block';
}

function resetBattle() {
  document.getElementById('battleResult').style.display = 'none';
  document.getElementById('battleAgainBtn').style.display = 'none';
}

// ── 10. MONSTERS TAB ──────────────────────────────────────────────

function renderMonstersTab() {
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const grid = document.getElementById('monstersGrid');
  if (!grid) return;

  grid.innerHTML = culture.monsters.map(monster => `
    <div class="monster-card" onclick="openModal('${escapeHTML(monster.name)}', getMonsterHTML('${state.activeCulture}', '${escapeHTML(monster.name)}'))">
      <div class="card-emoji">${monster.emoji || '👹'}</div>
      <div class="card-name">${monster.name}</div>
      <div class="card-type">${monster.type || 'Creature'}</div>
      <div class="card-desc">${monster.description.substring(0, 120)}...</div>
      <div class="threat-bar-wrap">
        <span>Threat:</span>
        ${getPowerBar(monster.threat || 5)}
      </div>
      <div class="card-weakness">⚔️ Weakness: <em>${monster.weakness || 'Unknown'}</em></div>
    </div>
  `).join('');
}

function getMonsterHTML(cultureId, monsterName) {
  const culture = MYTHOLOGY_DATA[cultureId];
  const monster = culture.monsters.find(m => m.name === monsterName);
  if (!monster) return '<p>Not found</p>';
  return `
    <div class="modal-entity">
      <div class="modal-emoji">${monster.emoji || '👹'}</div>
      <div class="modal-type-badge">${monster.type || 'Creature'}</div>
      <p class="modal-desc">${monster.description}</p>
      <div class="modal-stats">
        <div><strong>Threat Level:</strong> ${getPowerBar(monster.threat || 5)}</div>
        <div><strong>Origin:</strong> ${monster.origin || 'Unknown'}</div>
        <div><strong>Weakness:</strong> ${monster.weakness || 'Unknown'}</div>
      </div>
    </div>
  `;
}

function filterMonsters() {
  const query = document.getElementById('monsterSearchInput')?.value?.toLowerCase() || '';
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const grid = document.getElementById('monstersGrid');
  if (!grid) return;

  const filtered = culture.monsters.filter(m =>
    m.name.toLowerCase().includes(query) ||
    m.description.toLowerCase().includes(query) ||
    (m.type || '').toLowerCase().includes(query)
  );

  grid.innerHTML = filtered.map(monster => `
    <div class="monster-card" onclick="openModal('${escapeHTML(monster.name)}', getMonsterHTML('${state.activeCulture}', '${escapeHTML(monster.name)}'))">
      <div class="card-emoji">${monster.emoji || '👹'}</div>
      <div class="card-name">${monster.name}</div>
      <div class="card-type">${monster.type || 'Creature'}</div>
      <div class="card-desc">${monster.description.substring(0, 120)}...</div>
      <div class="threat-bar-wrap">
        <span>Threat:</span>
        ${getPowerBar(monster.threat || 5)}
      </div>
      <div class="card-weakness">⚔️ Weakness: <em>${monster.weakness || 'Unknown'}</em></div>
    </div>
  `).join('');
}

// ── 11. STORIES TAB ───────────────────────────────────────────────

function renderStoriesTab() {
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const grid = document.getElementById('storiesGrid');
  if (!grid) return;

  grid.innerHTML = culture.stories.map((story, idx) => `
    <div class="story-card" id="story-${idx}">
      <div class="story-era-badge">${story.era || 'Ancient'}</div>
      <div class="story-title">${story.title}</div>
      <div class="story-characters">
        ${(story.characters || []).map(c => `<span class="char-chip">${c}</span>`).join('')}
      </div>
      <div class="story-summary">${story.summary}</div>
      <button class="story-read-btn" onclick="openModal('${escapeHTML(story.title)}', getStoryHTML('${state.activeCulture}', ${idx}))">
        📜 Read Full Story
      </button>
    </div>
  `).join('');
}

function getStoryHTML(cultureId, storyIdx) {
  const culture = MYTHOLOGY_DATA[cultureId];
  const story = culture.stories[storyIdx];
  if (!story) return '<p>Not found</p>';
  return `
    <div class="modal-story">
      <div class="story-era-badge large">${story.era || 'Ancient'}</div>
      <p class="modal-desc">${story.summary}</p>
      <div class="story-characters-full">
        <strong>Characters:</strong><br>
        ${(story.characters || []).map(c => `<span class="char-chip">${c}</span>`).join('')}
      </div>
    </div>
  `;
}

// ── 12. ARTIFACTS TAB ─────────────────────────────────────────────

function renderArtifactsTab() {
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const grid = document.getElementById('artifactsGrid');
  if (!grid) return;

  grid.innerHTML = culture.artifacts.map(artifact => `
    <div class="artifact-card">
      <div class="artifact-inner">
        <div class="artifact-front">
          <div class="card-emoji">${artifact.emoji || '🏺'}</div>
          <div class="card-name">${artifact.name}</div>
          <div class="artifact-owner">🧙 ${artifact.owner}</div>
          <div class="artifact-type">${artifact.type}</div>
          <div class="artifact-power-label">${artifact.power}</div>
          <div class="flip-hint">Hover to reveal lore</div>
        </div>
        <div class="artifact-back">
          <div class="card-name small">${artifact.name}</div>
          <p>${artifact.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ── 13. VIS.JS TIMELINE ───────────────────────────────────────────

function initTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container || typeof vis === 'undefined') return;

  const items = new vis.DataSet();
  const groups = new vis.DataSet();

  Object.entries(MYTHOLOGY_DATA).forEach(([id, culture], i) => {
    groups.add({ id, content: `<span style="color:${culture.color};font-family:Cinzel,serif;font-size:11px">${culture.name}</span>`, style: `background:transparent` });

    (culture.timeline || []).forEach(item => {
      const yearNum = parseInt(item.start, 10);
      const dateStr = yearNum < 0
        ? `${Math.abs(yearNum)}-01-01`
        : (yearNum < 1000 ? `0${yearNum}-01-01` : `${yearNum}-01-01`);

      items.add({
        id: item.id,
        content: `<span class="tl-item">${item.content}</span>`,
        start: new Date(dateStr),
        group: id,
        style: `background:${culture.color}30;border-color:${culture.color};color:#e8d5a3`
      });
    });
  });

  const options = {
    orientation: 'top',
    stack: true,
    showMajorLabels: true,
    showMinorLabels: true,
    moveable: true,
    zoomable: true,
    selectable: true,
    groupOrder: 'content',
    height: '480px',
    zoomMin: 1000 * 60 * 60 * 24 * 365 * 50,
    zoomMax: 1000 * 60 * 60 * 24 * 365 * 15000,
    start: new Date('-004000-01-01'),
    end: new Date('2000-01-01'),
    tooltip: { followMouse: true },
  };

  const timeline = new vis.Timeline(container, items, groups, options);
  state.timeline = timeline;
}

// ── 14. CONSTELLATION MAP ─────────────────────────────────────────

const CONSTELLATIONS = [
  { name: 'Orion', myth: 'Orion the Hunter — son of Poseidon, placed in the sky by Zeus after being killed by Artemis or a scorpion.', stars: [[300,180],[340,200],[280,200],[320,240],[310,280],[330,280],[320,300],[300,320],[340,320]], lines: [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[4,6],[5,6],[6,7],[6,8]] },
  { name: 'Ursa Major', myth: 'Callisto — a nymph transformed into a bear by Hera and placed in the sky by Zeus.', stars: [[80,120],[110,130],[140,125],[165,120],[185,130],[220,140],[240,155]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
  { name: 'Perseus', myth: 'Perseus — son of Zeus who slew Medusa and saved Andromeda, immortalized in the stars.', stars: [[500,80],[530,100],[560,90],[540,130],[570,150],[590,130]], lines: [[0,1],[1,2],[2,3],[3,4],[3,5],[4,5]] },
  { name: 'Scorpius', myth: 'The Scorpion — sent by Gaia to kill Orion. Placed opposite Orion so they never meet.', stars: [[650,300],[680,290],[700,300],[720,320],[730,350],[720,380],[700,400],[680,420],[700,440]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
  { name: 'Hercules', myth: 'Heracles — the great hero of twelve labors, placed in the sky as a lasting tribute.', stars: [[430,200],[460,210],[450,240],[480,250],[500,230],[490,200]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]] },
  { name: 'Cassiopeia', myth: 'Cassiopeia — the vain Ethiopian queen chained to her throne in the sky as punishment.', stars: [[150,60],[175,45],[200,60],[225,45],[250,60]], lines: [[0,1],[1,2],[2,3],[3,4]] },
  { name: 'Cygnus', myth: 'Cygnus the Swan — associated with Zeus (who transformed into a swan), or Orpheus transformed after death.', stars: [[560,200],[590,180],[560,160],[530,150],[560,200],[590,220],[560,240]], lines: [[0,1],[1,2],[2,3],[0,4],[4,5],[5,6]] },
  { name: 'Leo', myth: 'The Nemean Lion — slain by Heracles as his first labor and placed in the heavens by Zeus.', stars: [[350,120],[370,100],[390,115],[400,140],[380,160],[360,155],[340,140]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]] },
  { name: 'Aquarius', myth: 'Ganymede — the beautiful youth abducted by Zeus (as an eagle) to serve as cup-bearer to the gods.', stars: [[700,180],[720,170],[740,185],[760,175],[720,200],[740,220]], lines: [[0,1],[1,2],[2,3],[0,4],[4,5]] },
  { name: 'Sagittarius', myth: 'Chiron — the wise centaur, teacher of heroes like Achilles and Jason, placed among the stars.', stars: [[580,350],[610,330],[630,345],[620,370],[600,380],[580,370]], lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]] },
  { name: 'Gemini', myth: 'Castor & Pollux — the divine twins, sons of Zeus (or Tyndareus), protectors of sailors.', stars: [[200,250],[220,230],[240,250],[220,280],[240,300],[260,270]], lines: [[0,1],[1,2],[2,3],[2,4],[2,5]] },
  { name: 'Aries', myth: 'Chrysomallus — the golden ram who carried Phrixus to Colchis; his fleece became the Golden Fleece.', stars: [[450,120],[475,110],[495,120],[480,140]], lines: [[0,1],[1,2],[2,3]] }
];

function initConstellations() {
  const container = document.getElementById('tab-constellations');
  const svgEl = document.getElementById('constellationSvg');
  if (!svgEl) return;

  const W = window.innerWidth;
  const H = Math.max(window.innerHeight - 180, 500);

  const svg = d3.select('#constellationSvg')
    .attr('width', W)
    .attr('height', H)
    .style('background', '#050510');

  // Draw stars (background)
  const starCount = 300;
  const starData = Array.from({ length: starCount }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.3,
    opacity: Math.random() * 0.7 + 0.3,
    delay: Math.random() * 3
  }));

  svg.selectAll('circle.bg-star')
    .data(starData).enter().append('circle')
      .attr('class', 'bg-star')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.r)
      .attr('fill', 'white')
      .attr('opacity', d => d.opacity)
      .style('animation', d => `twinkle ${2 + d.delay}s ease-in-out infinite`);

  // Tooltip
  const tooltip = d3.select('body').append('div')
    .attr('class', 'constellation-tooltip')
    .style('opacity', 0)
    .style('position', 'fixed')
    .style('pointer-events', 'none')
    .style('background', '#1a1208ee')
    .style('border', '1px solid #c9a84c')
    .style('border-radius', '8px')
    .style('padding', '12px 16px')
    .style('color', '#e8d5a3')
    .style('font-family', 'Crimson Text, serif')
    .style('font-size', '14px')
    .style('max-width', '260px')
    .style('z-index', 9999);

  // Draw constellations
  CONSTELLATIONS.forEach(constellation => {
    const g = svg.append('g').attr('class', 'constellation-group');

    // Lines
    (constellation.lines || []).forEach(([a, b]) => {
      const s1 = constellation.stars[a];
      const s2 = constellation.stars[b];
      if (!s1 || !s2) return;
      g.append('line')
        .attr('x1', s1[0]).attr('y1', s1[1])
        .attr('x2', s2[0]).attr('y2', s2[1])
        .attr('stroke', '#c9a84c')
        .attr('stroke-width', 0.8)
        .attr('opacity', 0.45)
        .attr('class', 'const-line');
    });

    // Stars
    constellation.stars.forEach((pos, i) => {
      g.append('circle')
        .attr('cx', pos[0]).attr('cy', pos[1])
        .attr('r', i === 0 ? 4 : 2.5)
        .attr('fill', i === 0 ? '#f0d080' : 'white')
        .attr('opacity', 0.9)
        .attr('class', 'const-star');
    });

    // Label at first star
    g.append('text')
      .attr('x', constellation.stars[0][0] + 8)
      .attr('y', constellation.stars[0][1] - 8)
      .attr('fill', '#c9a84c')
      .attr('font-family', 'Cinzel, serif')
      .attr('font-size', '10px')
      .attr('opacity', 0.85)
      .text(constellation.name);

    // Invisible hover overlay
    const xs = constellation.stars.map(s => s[0]);
    const ys = constellation.stars.map(s => s[1]);
    const minX = Math.min(...xs) - 20, maxX = Math.max(...xs) + 20;
    const minY = Math.min(...ys) - 20, maxY = Math.max(...ys) + 20;

    g.append('rect')
      .attr('x', minX).attr('y', minY)
      .attr('width', maxX - minX).attr('height', maxY - minY)
      .attr('fill', 'transparent')
      .attr('cursor', 'pointer')
      .on('mouseenter', function(event) {
        g.selectAll('.const-line').attr('opacity', 1).attr('stroke-width', 1.5);
        g.selectAll('.const-star').attr('r', (d, i, nodes) => {
          const r = d3.select(nodes[i]).attr('r');
          return parseFloat(r) + 2;
        });
        tooltip.style('opacity', 1)
          .html(`<strong style="font-family:Cinzel,serif;color:#c9a84c">${constellation.name}</strong><br>${constellation.myth}`);
      })
      .on('mousemove', function(event) {
        tooltip
          .style('left', (event.clientX + 16) + 'px')
          .style('top', (event.clientY - 10) + 'px');
      })
      .on('mouseleave', function() {
        g.selectAll('.const-line').attr('opacity', 0.45).attr('stroke-width', 0.8);
        g.selectAll('.const-star').each(function(d, i) {
          d3.select(this).attr('r', i === 0 ? 4 : 2.5);
        });
        tooltip.style('opacity', 0);
      })
      .on('click', function() {
        openModal(constellation.name, `
          <div class="modal-constellation">
            <div style="font-size:3rem">⭐</div>
            <p class="modal-desc">${constellation.myth}</p>
            <p style="color:#9a8a6a;font-size:0.9rem">${constellation.stars.length} stars in this constellation</p>
          </div>
        `);
      });
  });
}

// ── 15. SIDE PANEL ────────────────────────────────────────────────

function openSidePanel(entity) {
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const panel = document.getElementById('sidePanelContent');
  if (!panel) return;

  const parents = entity.parents || [];
  const children = entity.children || [];
  const epithets = entity.epithets || [];

  panel.innerHTML = `
    <div class="side-emoji">${entity.emoji || '⚡'}</div>
    <div class="side-name">${entity.name}</div>
    <div class="side-badges">
      <span class="side-badge role">${entity.role || entity.entityType || 'Deity'}</span>
      ${entity.domain ? `<span class="side-badge domain">${entity.domain.split(',')[0].trim()}</span>` : ''}
    </div>
    <div class="side-power-row">
      <span>Power:</span>
      ${getPowerBar(entity.power || entity.threat || 5)}
    </div>
    <p class="side-desc">${entity.description || ''}</p>
    ${parents.length ? `
      <div class="side-section">
        <div class="side-section-title">Parents</div>
        <div class="chip-row">${parents.map(p => `<span class="family-chip" onclick="openRelatedGod('${escapeHTML(p)}')">${p}</span>`).join('')}</div>
      </div>` : ''}
    ${children.length ? `
      <div class="side-section">
        <div class="side-section-title">Children</div>
        <div class="chip-row">${children.map(c => `<span class="family-chip" onclick="openRelatedGod('${escapeHTML(c)}')">${c}</span>`).join('')}</div>
      </div>` : ''}
    ${entity.spouse ? `
      <div class="side-section">
        <div class="side-section-title">Spouse</div>
        <span class="family-chip spouse-chip" onclick="openRelatedGod('${escapeHTML(entity.spouse)}')">${entity.spouse}</span>
      </div>` : ''}
    ${entity.symbol ? `
      <div class="side-section">
        <div class="side-section-title">Symbol</div>
        <div class="side-symbol">${entity.symbol}</div>
      </div>` : ''}
    ${epithets.length ? `
      <div class="side-section">
        <div class="side-section-title">Epithets</div>
        <div class="chip-row">${epithets.map(e => `<span class="epithet-chip">${e}</span>`).join('')}</div>
      </div>` : ''}
  `;

  document.getElementById('sidePanel').classList.add('open');
  document.getElementById('sideOverlay').classList.add('active');
  state.sideOpen = true;
}

function openRelatedGod(name) {
  const culture = MYTHOLOGY_DATA[state.activeCulture];
  const god = culture.gods.find(g => g.name === name);
  if (god) openSidePanel(god);
}

function closeSidePanel() {
  document.getElementById('sidePanel').classList.remove('open');
  document.getElementById('sideOverlay').classList.remove('active');
  state.sideOpen = false;
}

// ── 16. MODAL ─────────────────────────────────────────────────────

function openModal(title, htmlContent) {
  document.getElementById('modalBody').innerHTML = `
    <h2 class="modal-title">${title}</h2>
    ${typeof htmlContent === 'function' ? htmlContent() : htmlContent}
  `;
  document.getElementById('detailModal').classList.add('open');
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('open');
}

function closeModalOutside(event) {
  if (event.target === document.getElementById('detailModal')) closeModal();
}

// ── 17. DARK/LIGHT TOGGLE ─────────────────────────────────────────

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('themeToggle');
  body.classList.toggle('light-mode');
  btn.textContent = body.classList.contains('light-mode') ? '🌙 Dark' : '☀️ Light';
}

// ── 18. UTILITY FUNCTIONS ─────────────────────────────────────────

function getPowerBar(power) {
  const pct = Math.round((power / 10) * 100);
  const filled = Math.round(power);
  const bars = Array.from({ length: 10 }, (_, i) => `
    <div class="power-pip ${i < filled ? 'filled' : ''}"></div>
  `).join('');
  return `<div class="power-bar-wrap" title="Power: ${power}/10">${bars}<span class="power-num">${power}/10</span></div>`;
}

function getMythEmoji(type) {
  const map = {
    sky: '☀️', sun: '☀️', moon: '🌙', sea: '🌊', water: '💧',
    war: '⚔️', love: '💕', wisdom: '🦉', death: '💀', fire: '🔥',
    harvest: '🌾', forge: '🔨', messenger: '🪽', hunt: '🏹',
    thunder: '⚡', earth: '🌍', underworld: '💀', magic: '🔮',
    wind: '💨', time: '⏳', creation: '✨', chaos: '🌀'
  };
  const lower = (type || '').toLowerCase();
  for (const [key, emoji] of Object.entries(map)) {
    if (lower.includes(key)) return emoji;
  }
  return '⚡';
}

function formatEra(year) {
  const y = parseInt(year, 10);
  if (isNaN(y)) return year;
  return y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`;
}

function escapeHTML(str) {
  return String(str || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

// ── 19. WINDOW RESIZE ─────────────────────────────────────────────

window.addEventListener('resize', () => {
  if (state.activeTab === 'map' && state.map) {
    state.map.invalidateSize();
  }
  if (state.activeTab === 'tree') {
    renderFamilyTree();
  }
});