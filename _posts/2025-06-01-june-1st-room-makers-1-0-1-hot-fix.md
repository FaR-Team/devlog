---
layout: post
title: "June 1st Room Makers 1.0.1 hot fix"
date: 2025-06-01
project: roommakers
tags: [Devlog]
---

Last week we took the announcement of Room Makers' release to an event and, even though reviews were mostly possitive, we gotta admit the final result did not meet our expectaitons of quality. We imagined something like this could happen but we weren't prepared for the kind of things we were going to face. 
To give you a perfect example, during the last two weeks prior to release, about thirty people tested the game, reporting bugs and issues; every single report was addressed in time for realease. During the first five minutes of the event, three persons found a game breaking bug that would've to force them to restart their run. We were ASHAMED to say the least.

Due to this, we've been collecting feedback from everyone who tried our game and set our goals into making it as enjoyable and fun as we imagined it in the first place. As of now, we have this hotfix update which is already live! So if you've been having issues, go ahead and update your game!

Let's jump to the bullet-point list of changes:

* Now you can place every kit **OVER** the furniture.
* Fixed a bug that caused items to be completely obliterated if the player had a kit in their inventory while interacting with them.
* Fixed an infinite point exploit cause by removing an placing back an item from a combo
* Added sprite updates to items already placed when a kit is placed over them
* Changed the inventory font for one more legible. 

Since these are not many changes, I can talk about them all in detail, you know? Let's do it;

##### **Now you can place every kit OVER the furniture.**
Almost everyone who tested the game in the event got stuck during the tutorial when it explained how to use the kits. This was due to two things; the tutorial was poorly explained and the mechanics was overly complicated for no reason. Even though we made this feature to add difficulty to the game, this level of complexity for a simple puzzle removes the fun, and games are meant to be fun.
The tutorial put it in a way that resulted both confusing and tedious, because it maked the player place a TV first, then place the TV table, pick up the TV and put it under the table, and then place the kit, remove the TV, pick up the table, place it over the kit, pick up the TV and then place it on the table. Notice the ammount of steps they had to follow to finish a tutorial? This step was like a huge wooden door keeping the player away from the fun. That's a huge no-no.
From now on, the player only has to place the TV, place the table, pick up the TV and place it over the table and then add the kit. Way simpler! And I have good news; it will be simpler-er in the future.

##### **Fixed a bug that caused items to be completely obliterated if the player had a kit in their inventory while interacting with them.**
I already talked about this at the begining of the post, and it is exactly as it sounds. I have no idea how this sliped through our hands... well... I kinda have.

See, when you hire testers, you have to be as scarse as possible with information. They have to play as blindly as possible in order to find every single desing flaw in the game. Just as if they were new players enjoying your game. 
In the beggining, this was the case. The thing is, after their reports, we would update the game and send it back to them. From update to update, they were growing more and more informed, which made their reports lack this ignorance needed to emulate the experience of a new player. Big companies avoid this by rotating testers from time to time, but we are not a big complany. Actually, we are VERY lucky we even had testers in the first place.

##### **Fixed an infinite point exploit cause by removing an placing back an item from a combo**
Pretty self explanatory and caused by the same thing as the last issue, our testers and us never even thought about that as a possibility.

Basically, this was an issue months ago when we introduced the combos' rework. But since we fixed at that time, we didn't think it could happen again and we skipped it from testing.

##### **Added sprite updates to items already placed when a kit is placed over them**
Adding the possibility to place the kit whenever you want came with a new problem: Objects that need electricity would update their sprite from a box to their actual look once they were placed over a kit, not the other way around. If you placed the kit over a, let's say, TV, this would add points but it would still look like a box.
This is not the case anymore :D

##### **Changed the inventory font for one more legible. **
Many people had issues understanding the font and, therefore, what object they ahd in their inventory. This, of course, slightly ruined the experience.
Allow me to ilustrate you~

![](https://raw.githubusercontent.com/FaR-Team/devlog/main/images/June%201st%20Room%20Makers%201.0.1%20hot%20fix-qzyvw6.png)

The old font, 3x3 mono was an eye sore, but we were convinced that anything bigger would not fit in the GUI. Now we use 3x4 mono, we couldn't make the font thicker, but we can make it taller.
Now it looks way better.

---

And what's next? We already developed a road map with the next few updates coming for Room Makers, but, of course, we cannot show you everything just yet. Our next steps would be to make this version as stable as possible, so it is possible you'll se a 1.0.2 soon. After that, we'll work in a 1.1.0 QoL update, where we will address all of the feedback we've been receiving these weeks. Once that update is live and stable, we'll shift back to work on Farmoxel for a while, but we'll come back soon after for the 1.2.0. I am very excited to show you what we are planning for the future of this game.

That should be everything for now. **Bye! Have a great time!**