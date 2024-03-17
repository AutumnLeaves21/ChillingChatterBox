
const paragraphs = [
  "'My children. From the very beginning, it was the children who gave me my power. The Springwood Slasher, that's what they called me. My reign of terror was legendary. Dozens of children would fall by my blades. Then the parents of Springwood came for me. Taking justice into their own hands. When I was alive, I might have been a little naughty, but after they killed me, I became something much, much worse. The stuff nightmares are made of. The children still feared me and their fear gave me the power to invade their dreams. And that's when the fun REALLY began.' - Freddy Krueger",
  "'No tears, please. It's a waste of good suffering'. - Pinhead",
  "'Explorers in the further regions of experience. Demons to some, angels to others' - Pinhead",
  "'Welcome to my nightmare.' -	Freddy Krueger fighting Jason Voorhees in the dream world",
  "'No, no. It's changed now. You see, the knowledge of death changes everything. If I were to tell you the exact date and time of your own death, it would shatter your world completely. I know. Can you imagine what it feels like to have someone sit you down and tell you that you're dying, hmm? The gravity of that, hmm? That the clock's ticking for you. In a split second your world is cracked open. You look at things differently, you smell things differently. You savor everything, be it a glass of water or a walk in the park. But most people have the luxury of not knowing when that clock's gonna go off. And the irony of it is that that keeps them from really living their life. It keeps them drinking that glass of water, but never really tasting it.' - John Kramer",
  "'Those that don't appreciate life, do not deserve life.' -	John kramer",
  "'I want to play a game.'	- John Kramer",
  "'Get off my knife.'	- Chucky",
  "'What's your favorite scary movie?'	- Ghostface",
  "'Hi, I'm Chucky. And I'm your friend to the end. Hidey-Ho. Ha ha ha.'	- Chucky",
  "'Game over!' - John Kramer",
  "'Do you like scary movies?' - Ghostface",
  "'It's time to cut out the cancer.' - Gabriel May",
  "'7 days...' - Samara Morgan",
  "'It is not hands that summon us. It is desire.' - Pinhead",
  "'I wanted you to see… what you made me. A monster.' - Gabriel May",
  "'I'm fucking infamous! I'm one of the most notorious slashers in history, and I don't wanna give that up. I am Chucky, the Killer Doll, and I dig it!' - Chucky",
  "'Your suffering will be legendary, even in hell!' - Pinhead",
  "'Give me the power, I beg of you!' - Chucky",
  "'You think I asked to be tethered to you, Madison? Think I asked to be some wretch locked in your body? Everyone I killed had it coming, I'm owed this! This body, this life, everything that's yours? I can do it all better. I deserve it!' - Gabriel May",
  "'The box, you opened it. We came.'	- Pinhead",
  "'I'm gonna get you for it! I'm gonna get you! One of me's gonna get you! No matter what!' - Chucky",
  "'We'll tear your soul apart!' - Pinhead",
  "'I can't think of a thing to say. Fuck it!' - Chucky",
  "'Welcome to my world, bitch!' - Freddy Krueger",
  "'Tell 'em Freddy sent ya!' - Freddy Krueger after Roland Kincaid said he would see him in Hell",
  "'Go ahead and shoot! I'll be back! I always come back! (groans) But dying is such a bitch.' - Chucky",
  "'How's this for a wet dream?' - Freddy Krueger drowning Joey Crusel in his water bed",
  "'♪1, 2, Freddy's coming for you.♪ ♪3, 4, better lock your door.♪ ♪5, 6, grab your crucifix.♪ ♪7, 8, gonna stay up late.♪ ♪9, 10, never sleep again.♪' - Freddy Krueger's haunting nursery rhyme, as sung by his countless dead",
  "'It ain't the size that counts, asshole. It's what you do with it.' - Chucky",
  "'You are all my children now.' - Freddy Krueger",
  "'I had to search the bowels of Hell. But I've found someone. Someone who'll make them remember. He may the blood and I'll get the glory. And that fear is my ticket home.' - Freddy Krueger after he finds Jason Voorhees",
  "'Don't fuck with the Chuck! (laughing evilly)' - Chucky",
  "'They will say that I have shed innocent blood… What's blood for, if not for shedding?' - Candyman",
  "'You shouldn't have buried me. I'm not dead.' - Freddy Krueger",
  "'Nobody leaves me. Nobody.' - Chucky",
  "'Be my victim.' - Candyman",
  "'You have your mother's eyes. And they were always too FUCKING CLOSE TOGETHER!' - Chucky",
  "'Not strong enough yet. Oh, I will be soon enough. Until then... (chuckles) I'll let Jason have some fun.' - Freddy Krueger explaining his plan to get people to fear him again",
  "'I am the writing on the wall, the sweet smell of blood. Be my victim.' - Candyman",
  "'Aww, how sweet. (Pulls off Jason's mask) You ugly little shit. Now there's a face...(Shows the head of Pamela Voorhees) only a mother could love! (laughs) Yeah! Now we're getting somewhere. Let's see what really scares you. And dig a little deeper.' - Freddy Krueger torturing Jason Voorhees",
  "'Rise and shine, Adam. You're probably wondering where you are. I'll tell you where you might be. You might be in the room you die in. Up until now you simply sat in the shadows watching others live out their lives. But what do others see when they look into the mirror? Now, I see you as a strange mix of someone angry, yet apathetic. But mostly just pathetic. So are you going to watch yourself die today, Adam, or do something about it?' - John Kramer",
  "'Why won't you DIE?!' - Freddy Krueger questioning how Jason Voorhees is still alive after all the abuse he put him through",
  "'Hello, Mark. If you are so sick, then why do I have so many photos of you up and about? Let's put your so-called 'illness' to the test. Right now, there's a slow acting poison in your veins. The antidote is inside the safe; the combination to the safe is written on the wall. Hurry up and program it in, but watch your step. By the way, that's a flammable substance smeared on your body, so I would be careful with that candle if I were you... or all the people you've burned with your act just might have their revenge.' - John Kramer",
  "'Oh, that's right! Everyone forgot! That's why they weren't afraid anymore! That's why I needed Jason to kill for me to get them to remember. But now he just won't stop! That hockey puck!' - Freddy Krueger explaining his plan before he murders Mark Davis",
  "'Hello, Amanda. You don't know me, but I know you. I want to play a game. Here's what happens if you lose. The device you are wearing is hooked into your upper and lower jaw. When the timer in the back goes off, your mouth will be permanently ripped open. Think of it like a reverse bear trap. Here, I'll show you. [on videotape, a mannequin's head is destroyed by the device] There is only one key to open the device. It's in the stomach of your dead cell mate. Look around, Amanda. Know that I'm not lying. You better hurry up. Live or die. Make your choice.' - John Kramer",
  "'Don't you understand, Rachel? She never sleeps.' - Aidan describing Samara's neverending curse",
  "'Here's Johnny!' - Jack Torrance appears after chopping down the door that Wendy was hiding behind",
  "'Suffer the little children to come unto me. Your words, Nazarene. Not mine.' - Damien Thorn	",
  "'Your mother sucks c--ks in hell, Karras, you faithless slime!' - Pazuzu baiting Karras during the exorcism.",
  "'Nazarene...You have won nothing.' - Damien Thorn",
  "'You again... You interrupted me... Have you come to save God's servant? Well, I must save mine, my son: The Gemini. He has work to do, much more... But come in, Father Morning... Enter, knight... This time you're going to lose.' - Pazuzu possesses Damien Karras after sensing Father Morning's presence.",
  "'She just goes a little mad sometimes. We all go a little mad sometimes.' ~ Norman Bates on his mother, foreshadowing his true nature.",
  "'Let go. Be afraid. You all taste so much better when you're afraid.' - It to the Losers.",
  "'Well, a boy's best friend is his mother.' - Norman Bates' most famous quote",
  "'There is no life in this body. I am nothing, lifeless, soulless, hated and feared. I am dead to all the world. Hear me! I am the Monster that Breathing Men Would Kill. I am Dracula!' - Count Dracula revealing his true nature to Mina.",
  "'Yes. Born in the image of the greatest power in the world: the Desolate One. Desolate because his greatness was taken from him and he was cast down. But he has risen, Mark... in me!' - Damien Thorn to his terrified cousin.",
  "'I was betrayed. Look what your God has done to me!' - Dracula",
  "'I am eternal, child. I am the Eater of Worlds, and of children!' - It",
  "'I have crossed oceans of time to find you.' - Dracula",
  "'Give me peace.' - Dracula",
  "'You'll float too!' - It's most famous quote, referring to causing their victims to 'float'.",
  "'I'll kill you all! Aha! I'll drive you crazy and I'll kill you all! I'm every nightmare you ever had, I am your worst dream come true. I'm EVERYTHING you ever were afraid of!' ~ It as Pennywise to the Loser's Club.",
  "'I shall rise from my own death, to avenge hers with all the powers of darkness.' - Dracula",
  "'Then the clown's face changed. And what little George Denbrough saw next was terrible enough to make his worst imaginings of the things in the basement look like sweet, angelic dreams; what he saw destroyed his sanity in one clawing stroke.' ~ Stephen King on It during Its murder of Georgie.",
  "'Oh yes, they float. Georgie, they float. And when you're down here with me, YOU'LL FLOAT TOO!' ~ It before killing Georgie Denbrough.",
  "'Do you believe in destiny? That even the powers of time can be altered for a single purpose? That the luckiest man who walks on this earth is the one who finds... true love?' - Dracula",
  "'The pain, I can assure you, will be exquisite. As for our deaths, there is nothing to fear. Our names will be written on a thousand walls. Our crimes told and retold by our faithful believers. We shall die together in front of their very eyes and give them something to be haunted by. Come with me and be immortal.' - Candyman while dancing with Helen.",
];



const item = document.getElementById("items");
const dataContainer = document.getElementById("data");


function shuffle(array){

let currentIndex = array.length;
let randomIndex;

while(currentIndex!=0){
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  [array[currentIndex],array[randomIndex]] = [
    array[randomIndex], array[currentIndex]
  ];
}

return array;

}

function generate() {

if (item.value == 0) {
  alert("The value cannot be zero");
}else if (item.value > paragraphs.length){
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  dataContainer.innerHTML = `${paragraphs[randomIndex]}`;
}else{

  const shuffleParagraphs = paragraphs;
  shuffle(paragraphs);

  const selectedParagraphs = shuffleParagraphs.slice(0,item.value);
  const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
  dataContainer.innerHTML = paragraphsHTML;

}
}
