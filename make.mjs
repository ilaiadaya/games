// Generates a support page + privacy policy per game: <slug>/index.html, <slug>/privacy.html
import { mkdirSync, writeFileSync } from 'node:fs';
const games = [
  ['mahjong','Mahjong Solitaire','a mahjong solitaire tile-matching game','Match pairs of free tiles to clear the board. A tile is free when nothing covers it and its left or right side is open.'],
  ['glowpour','Glowpour','a water sort puzzle','Tap a tube, then tap another to pour. You can pour onto the same colour or into an empty tube. Sort every tube into one colour.'],
  ['hexbloom','Hexbloom','a hexa sort puzzle','Place stacks on the board. Neighbouring stacks with the same top colour merge, and ten of a colour bloom away.'],
  ['trinkettrio','Trinket Trio','a triple tile-match puzzle','Tap tiles to move them into the tray. Three alike clear. Don’t let the tray fill up.'],
  ['skedaddle','Skedaddle','an arrow escape puzzle','Tap a block and it slides out in its arrow’s direction if the way is clear. Clear the whole board.'],
  ['twinstone','Twinstone','a number merge puzzle','Swipe to slide every stone. Two stones of the same value merge into the next one.'],
  ['paperlark','Paperlark','a classic sudoku game','Fill the grid so every row, column and 3×3 box contains 1 to 9 exactly once.'],
  ['saffron','Saffron Solitaire','a Klondike solitaire game','Build the four foundations from Ace to King by suit. Drag or tap cards to move them.'],
  ['letterwood','Letterwood','a word search game','Swipe across letters in any direction to find every word on the list.'],
  ['fizzpop','Fizzpop','a bubble shooter game','Aim and shoot. Match three or more bubbles of a colour to pop them; bubbles left hanging fall too.'],
  ['boltwise','Boltwise','a nuts and bolts sort puzzle','Tap a bolt, then another, to move the top nuts. Sort every bolt into one colour.'],
];
const head = (t) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n<title>${t}</title><link rel="stylesheet" href="../style.css"></head><body><main>\n`;
const foot = `</main></body></html>\n`;
const index = ['<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Maracuya Labs Games</title><link rel="stylesheet" href="style.css"></head><body><main><h1>Maracuya Labs Games</h1>'];
for (const [slug, name, what, how] of games) {
  mkdirSync(slug, { recursive: true });
  const logo = `<a class="logo" href="./">${name.toUpperCase()}</a>\n`;
  writeFileSync(`${slug}/index.html`, head(`${name} – Support`) + logo +
`<h1>Support</h1><p>${name} is ${what} for iPhone and Android, published by Maracuya Labs.</p>
<h2>Frequently asked</h2>
<div class="card"><b>How do I play?</b><p>${how}</p></div>
<div class="card"><b>Does it work offline?</b><p>Yes. The game works fully without internet.</p></div>
<div class="card"><b>I lost my progress</b><p>Progress is saved on your device. Deleting the app deletes it, and it can’t be restored.</p></div>
<div class="card"><b>Why do I see ads?</b><p>Some versions show ads to keep the game free. Full-screen ads only appear between levels or games, never while you play, and videos for hints or extra moves are always your choice.</p></div>
<h2>Contact</h2><p>Questions or problems? Email <a href="mailto:info@maracuyalabs.com">info@maracuyalabs.com</a>.</p>
<p><a href="privacy.html">Privacy Policy</a></p>
` + foot);
  writeFileSync(`${slug}/privacy.html`, head(`${name} – Privacy Policy`) + logo +
`<h1>Privacy Policy</h1><small>Last updated: 16 November 2026</small>
<p>${name} (“the app”) is ${what} published by Maracuya Labs. This policy explains what data the app handles.</p>
<h2>What we collect</h2>
<p>We don’t ask for or store any account, name, email or contact details. Your progress, scores and settings are saved only on your device.</p>
<h2>Advertising</h2>
<p>Versions of the app without ads collect no data at all. Versions with ads show them through third-party ad networks (Google AdMob and/or AppLovin). To show and measure ads, these networks may collect:</p>
<ul><li>Your device’s advertising identifier (on iPhone only if you allow tracking in Apple’s prompt)</li>
<li>Your IP address and approximate location derived from it</li><li>Device type, operating system and app version</li>
<li>Information about the ads you see and tap</li></ul>
<p>If you’re in the EEA, the UK or Switzerland, the app asks for your consent before showing personalized ads. You can change your choice from the game’s settings. On iPhone you can also turn tracking off in Settings › Privacy &amp; Security › Tracking; on Android you can reset or delete your advertising ID in Settings › Privacy › Ads.</p>
<p>See <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from apps that use its services</a> and <a href="https://www.applovin.com/privacy/">AppLovin’s privacy policy</a>.</p>
<h2>Children</h2>
<p>The app isn’t directed at children under 13 and we don’t knowingly collect data from them.</p>
<h2>Your rights</h2>
<p>Because we don’t store personal data ourselves, there is nothing for us to export or delete. For data held by ad networks you can use their own tools, such as <a href="https://myadcenter.google.com/">My Ad Center</a>. Deleting the app removes all game data on your device.</p>
<h2>Changes</h2><p>We’ll update this page if anything changes and change the date above.</p>
<h2>Contact</h2><p>Email <a href="mailto:info@maracuyalabs.com">info@maracuyalabs.com</a> or see the <a href="./">${name} support page</a>.</p>
` + foot);
  index.push(`<div class="card"><b>${name}</b><p><a href="${slug}/">Support</a> · <a href="${slug}/privacy.html">Privacy</a></p></div>`);
}
writeFileSync('index.html', index.join('\n') + '</main></body></html>\n');
console.log('pages for', games.length, 'games');
