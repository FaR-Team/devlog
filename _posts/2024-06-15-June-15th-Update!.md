---
layout: post
title: "June 15th Update!"
date: 2024-06-15
project: farmoxel
tags: [Devlog]
---

Last time we actually updated you about the contents of our games was August 15th 2023. It's been a LONG time, but I can promise that none of our projects have been abandoned. In fact, we've made tons of progress on all of them, but not much worth to be shown.

  
For the Farmoxel project (name pending) for example, we were waiting to finally be able to showcase the farm map on its entirety. Sadly, as you'll see later on this blogpost, we run into a lot of problems with it. Most of them are fixed, so we may have that done for the next post.

  
This time, the blog will have 3 bullet-point lists of changes so... buckle up!

### FARMOXEL:

Since last update, on farmoxel we've been working on a proper save/load system between scenes so we can start working on our next milestone: Scenes. Our plan is to test all of this with the protagonist's room (Later to be turned into a whole house) and then use all of that to work on the town, which will force us to work on NPCs and AIs... the fun part, I hope.  
Meanwhile, we've been working on some little QoL changes and polishment, besides the map update I told you before.

  

- _Added a placeholder pickup sound._
- _Added a Weather system._
- _Added a fullscreen toggle._
- _Added a resolution dropdown._
- _Replaced old apple model (Only for last growth stage)._  
- _Added first growth stage model for the apple._
- _Added mouse shortcuts for inventory sorting:_
    - R-Click on an stack: Divide a stack in half. 
    - R-Click with a stack: Place one item of the stack in a slot.  
    - Shift + R-Click to transfer a stack from the inventory to a crate and vice versa.  
    - Pressing 1 to 0 while hovering over a stack will transfer it to its respective position on the hotbar.
- _Now crops get watered when it rains._
- _Now you can't plow dirt nor plant in a 3x3 grid below a tree._
- _Finished reworking the Save-Load system! Now;_
    - Dirts Save & Load.     
    - Tubers Save & Load.  
    - Player inventory and Chest inventories Save & Load.
- _Work on the farm map has begun with around 27 tile models to create it._
- _Made a bunch of improvements performance-wise:_
    - Updated to URP (and rewrote shaders)  
    - Updated the map to use chunks instead of individual tiles, lowering the amount of gameobjects in scene.  
    - Replaced placeholder trash bin model for a lower quality placeholder that won't burn our CPU  
-Finished the dialogue system!_
- _Positioned strawberry's spawnpoints._
- _Updated Discord's Rich Presence to show the actual build of the game._
- _Fixed the game's shader._
- _Fixed bug where the dialogue skipped instead of autocompleting when pressing a key._
- _Fixed a weird sensitivity bug._
- _Fixed bug where strawberries couldn't be harvested on a build._
- _Fixed a bug where all harvested crops looked like... hoes???_
- _Fixed a pickup sound related bug._
- _Fixed a bug the caused that, when dividing a stack in half inside the inventory without clicking on the object before, one of the halves will disappear until you click on the stack once again. That was... certainly hard to word out._
- _Fixed a bug where you could see through cliffs._

**With that said, let's talk about the highlights which... are not many.**

#### **Added a Weather system.**

As of now, it can rain, snow or be sunny. None of them depend on the season and only one of them, the rain, has an effect, which is to water the crops. The particle textures are completely glitched and sometimes you get rain and snow at the same time. The only reason we put this on the game at this point was to test one of the last features related to planting and harvesting before moving to another part of the game.

#### Replaced old apple model (Only for last growth stage).

Apples only had one growth stage: Apple. At first it was a realistic model, so at some point I decided to replace it with a voxel model made in minutes. Since neither the tree or the apples had a growth system, they were TINY:

  

|     |
| --- |
| [![](https://blogger.googleusercontent.com/img/a/AVvXsEhzNLWXAdOqq-Im0Xz26dhuZNBCv5hIaHy3iZAyUQTnToYMuU-nWLHeao9yyyDCJvBfjiAxU1qFko39w67M4ULGrwuOO9xHp6EBZqfYYhDjGmaOZNaCnrPf89TKIW2CvE9DG8Zby6J1EcnUhjUavBou8pFLv_3x0enIfjRD89STTunK83qHEEDqqz0nxAPh)](https://blogger.googleusercontent.com/img/a/AVvXsEhzNLWXAdOqq-Im0Xz26dhuZNBCv5hIaHy3iZAyUQTnToYMuU-nWLHeao9yyyDCJvBfjiAxU1qFko39w67M4ULGrwuOO9xHp6EBZqfYYhDjGmaOZNaCnrPf89TKIW2CvE9DG8Zby6J1EcnUhjUavBou8pFLv_3x0enIfjRD89STTunK83qHEEDqqz0nxAPh) |
| They were so cute! |

  

Now they grew up, learnt to drive, got a job and rented their first apartment:  

  

|     |
| --- |
| [![](https://blogger.googleusercontent.com/img/a/AVvXsEidXHGZwpF84F3DI3agKOVGLMGIGDdrdRRS32z7hoHgcJDaE8uKHXHHK53sflqwpJxHH_HZyR6AA294xP7NMbOVkiIdMYg_i07x6UgD-4tmv9jyEUDV2rsyJO4ZndKlZ589_WMFmpiG548jP2S6Xv8eKyWdnuG01tfLkfYu2NNJ7hC04nuHomfcpP8FdsM8)](https://blogger.googleusercontent.com/img/a/AVvXsEidXHGZwpF84F3DI3agKOVGLMGIGDdrdRRS32z7hoHgcJDaE8uKHXHHK53sflqwpJxHH_HZyR6AA294xP7NMbOVkiIdMYg_i07x6UgD-4tmv9jyEUDV2rsyJO4ZndKlZ589_WMFmpiG548jP2S6Xv8eKyWdnuG01tfLkfYu2NNJ7hC04nuHomfcpP8FdsM8) |
| Oooh, so mature! |

  
But that's not all about apples!

#### Added first growth stage model for the apple.

When making the model above, I investigated and found out that the apple flower is of a beautiful pink shade, so I decided to make that model too~

  

|     |
| --- |
| [![](https://blogger.googleusercontent.com/img/a/AVvXsEgeKkAbELO87VWSCrXCyrTE2KS5i64XAXp7liXJdXsvvd1VeiYd_nBMQl9s1fuRwfygdaF6--fypZ2Em-L3sEKkV0Gy26WYrzctk-hKLaSDIq5zmgRyESVFx2ekD-HVNoStJpaKzy3wSJeifT0_f4HmsWtej92fQn3cWeqJexWUiZ3q2Mom9Rbctu9Tz0dh)](https://blogger.googleusercontent.com/img/a/AVvXsEgeKkAbELO87VWSCrXCyrTE2KS5i64XAXp7liXJdXsvvd1VeiYd_nBMQl9s1fuRwfygdaF6--fypZ2Em-L3sEKkV0Gy26WYrzctk-hKLaSDIq5zmgRyESVFx2ekD-HVNoStJpaKzy3wSJeifT0_f4HmsWtej92fQn3cWeqJexWUiZ3q2Mom9Rbctu9Tz0dh) |
| Fancy~ |

  
As of now, it is not in the game. We first wanna add a new tree model, all of it's stages and all of the apple's stages. But it is low in the priority list.

#### Work on the farm map has begun with around 27 tile models to create it.

As I mentioned above, the plan was to have the full map done for this update. The idea was to build the whole map with 3D tiles, as building a puzzle. When not even half of the tiles were placed, my CPU almost exploded. I had no idea of what was going on, so my team of overqualified programmers had to clean up the disaster.  
  
The first thing I had to do was to merge tiles into bigger chunks to avoid overloading the scene with objects. The rest will be explained on the next point.  
  
Here, some showcases of the models:

  

|     |
| --- |
| [![](https://blogger.googleusercontent.com/img/a/AVvXsEi222IhVtazpEYIGNdWb_oXqcSKO8-93J0XCLcA65c09BwSgkEW2qdVPzQT_s5_sxe8AxA7Ind7g3KCwVGFuEYGF23zSAv_HeHwfHD5musmM23ephwF3eCU2o6qG9R3USIIOwWjj3ES5TT4wQwTaEchiHavr1bk6ye1S9eL-4lIPC__53dDG73EA1X3HG_C)](https://blogger.googleusercontent.com/img/a/AVvXsEi222IhVtazpEYIGNdWb_oXqcSKO8-93J0XCLcA65c09BwSgkEW2qdVPzQT_s5_sxe8AxA7Ind7g3KCwVGFuEYGF23zSAv_HeHwfHD5musmM23ephwF3eCU2o6qG9R3USIIOwWjj3ES5TT4wQwTaEchiHavr1bk6ye1S9eL-4lIPC__53dDG73EA1X3HG_C) |
| Oooh |

  

|     |
| --- |
| [![](https://blogger.googleusercontent.com/img/a/AVvXsEhoF47g89ZZGcekhOQ1aO3IpooLTBxT4gHG4d5RL06UMgT9qYkhM0n3R-eCG6rngK18UOKGiFcPiy9FenYuSKjLennacYBhbBB_bTRmaCeWC9sZINWAfxYlvit3dpLfJYAF4iNvdsqvHK_F5CM9gwITc9Lu0MWxlYSkn-mFoyEgU3syE0JXHjoETzTzKtwf)](https://blogger.googleusercontent.com/img/a/AVvXsEhoF47g89ZZGcekhOQ1aO3IpooLTBxT4gHG4d5RL06UMgT9qYkhM0n3R-eCG6rngK18UOKGiFcPiy9FenYuSKjLennacYBhbBB_bTRmaCeWC9sZINWAfxYlvit3dpLfJYAF4iNvdsqvHK_F5CM9gwITc9Lu0MWxlYSkn-mFoyEgU3syE0JXHjoETzTzKtwf) |
| Aaah |

  

|     |
| --- |
| [![](https://blogger.googleusercontent.com/img/a/AVvXsEhsNJShnmu9_Lom43zup1t-N6yPbbvCP2zCG5qY_E2kuCRSD3SfPiVxoYLMOamYqXZ_DP3XsOMtJ4jfjq_A6RWRaQV9ulmP5Jt1XcmaJ2qnU5LxdkCm7RJ1m41bl6ptojb6vPi_XCRolr_nvgrauQqNqNF4-zGaegsi1-BeHibydh3MVwv8wY9dUNVe95dz)](https://blogger.googleusercontent.com/img/a/AVvXsEhsNJShnmu9_Lom43zup1t-N6yPbbvCP2zCG5qY_E2kuCRSD3SfPiVxoYLMOamYqXZ_DP3XsOMtJ4jfjq_A6RWRaQV9ulmP5Jt1XcmaJ2qnU5LxdkCm7RJ1m41bl6ptojb6vPi_XCRolr_nvgrauQqNqNF4-zGaegsi1-BeHibydh3MVwv8wY9dUNVe95dz) |
| Uuuh |

  
Textures may be tied to changes.

#### Made a bunch of improvements performance-wise:

When looking at the whole map, we noticed the vertex count was... off.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgvfQB_xmiCQGhGtCHLmCBqiTbGU2b3SZKKZSz1bT6zL7fgDmwZ-zX09m2wXrSrnOnehgHUcEkaYerWs04QV6G_e6RynLwGubLkvJU0YE-rnQz6vtszTzkTf9IAl5VpDoFYCV4zRdhI-KBB_YwfRLZhb1e-CpoGECYPF8HtFDnj7alG1u3zt9T5CX0WGwCS)](https://blogger.googleusercontent.com/img/a/AVvXsEgvfQB_xmiCQGhGtCHLmCBqiTbGU2b3SZKKZSz1bT6zL7fgDmwZ-zX09m2wXrSrnOnehgHUcEkaYerWs04QV6G_e6RynLwGubLkvJU0YE-rnQz6vtszTzkTf9IAl5VpDoFYCV4zRdhI-KBB_YwfRLZhb1e-CpoGECYPF8HtFDnj7alG1u3zt9T5CX0WGwCS)

  
There were 5k tiles placed, which were al planes. We're talking about 4 vertex each, so, doing the maths, there were 100k vertex with no explanation.

  

No explanation until...

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgZ6EhNgzUGOeP3UgUM74AAOx8OSLkE0YOBoccP9yTPRxuydptSrr0OWsEm1yTrh3r_luzzeMuZxT_YHLOMdgASUS6gparxhkAt_ghIE0ZAWaxUHoLOugrCPeHAMlQXf-RLQ5KCWy-iyVjUtr5GQ1ijNFDN3Qqc6aDL8R2gyu6sIpEc7faEBZtVv52WY0a2)](https://blogger.googleusercontent.com/img/a/AVvXsEgZ6EhNgzUGOeP3UgUM74AAOx8OSLkE0YOBoccP9yTPRxuydptSrr0OWsEm1yTrh3r_luzzeMuZxT_YHLOMdgASUS6gparxhkAt_ghIE0ZAWaxUHoLOugrCPeHAMlQXf-RLQ5KCWy-iyVjUtr5GQ1ijNFDN3Qqc6aDL8R2gyu6sIpEc7faEBZtVv52WY0a2)

  

22k vertex were only on this mesh. Don't get me wrong, using placeholders in a project is perfectly normal, but it was clear that this model was not meant to be placed in a game. So we replaced it right away with a low poly one.

  

"But what about the other 78k vertex?" Yeah... about that. That's just how Unity works. If you add the colliders, the shaders and the simulations the meshes go through, you multiply the number by a lot. So yeah, the game was playable... at 20 FPS and the map was not done yet.

  

That's when one of the programmers suggested we update the obsolete shader system Unity had. This changed A LOT. The game went from 20FPS to some unstable 60FPS. There was still some work to do.

  

That is when we replaced the tiles for chunks of tiles (And we still have to do this with more models, so things can only get better from here), which took the game from some unstable 60FPS up to a good 148 FPS.

  

As I said, there was not much to show, in fact, some of it is not in the game just yet. To compensate, here, the half-baked texture of the apple tree I've been working on:

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEglDFRFj8Hxx6drmSoIz_Y3DC_cJyefua3-WGa4iQi6jxKNILYtq0-VwL5OQq3jjnPJYIB414ubIyZT7uNWouqzdCahdesReSFSPqNcE0PmmUy_eK0OUc8EFeRnDaM8VPgQNHtPQpvBp_Ht5v4aELBxMRmww06xFvbGgSR0AYbeaOEtI7LXOW9ZM78yaZS8)](https://blogger.googleusercontent.com/img/a/AVvXsEglDFRFj8Hxx6drmSoIz_Y3DC_cJyefua3-WGa4iQi6jxKNILYtq0-VwL5OQq3jjnPJYIB414ubIyZT7uNWouqzdCahdesReSFSPqNcE0PmmUy_eK0OUc8EFeRnDaM8VPgQNHtPQpvBp_Ht5v4aELBxMRmww06xFvbGgSR0AYbeaOEtI7LXOW9ZM78yaZS8)

  
MOVING ON!

### ROOM MAKERS:

You remember Room Makers, an arcade tetris-like gameboy style game about placing furniture in different rooms. As of now, the game is pretty simple, you place furniture, some of them can make combos, you unlock new rooms with the points you've made and once you run out of space, you lose.

  

We've been thinking for months about balancing the itch.io version and, once that's done, port it on mobile. These are all the changes we've made so far:

  

- _Made a functional mobile version._
- _Worked through the hassle of making an UI for the mobile version._
- _Changed all input to the new input system._
- _Changed the font, and made it pixel perfect._
- _Math stuff. something about local and global position._
- _Updated the combo UI._
- _Slightly moved the clock one pixel upwards._
- _Balanced the combo and points system._
- _Added an icon to identify bottom tiles that have been on a combo._
- _Added an icon to identify top objects that have been on a combo._

  

Now let's go for the highlights, which are not many either~  

#### Worked through the hassle of making an UI for the mobile version.

Since we are talking about a game that is meant to emulate the vibe of a Game Boy game, we decided that the best way to port it was to give everybody a royalty-free version of the console for their phones!

  

Here is how it looks:

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEj5-_2ZFoaGJOQ-cYn1VzCqqzzFj3sCrqEzDaV2yUj-NH8xW91SlqA-fQS8OehRYFTXb-dzGPrZ3i90TZUX7Yo0IPD1hVJcurgMue4_66Kjrj_KsrzuCvWGSel-OWB_CopXlR5A3IhdhBNa3G8cbmR2j_dqNzOoKwh7KyiWnfGmETuEhYDoyYwS5X4c9oz1=w360-h640)](https://blogger.googleusercontent.com/img/a/AVvXsEj5-_2ZFoaGJOQ-cYn1VzCqqzzFj3sCrqEzDaV2yUj-NH8xW91SlqA-fQS8OehRYFTXb-dzGPrZ3i90TZUX7Yo0IPD1hVJcurgMue4_66Kjrj_KsrzuCvWGSel-OWB_CopXlR5A3IhdhBNa3G8cbmR2j_dqNzOoKwh7KyiWnfGmETuEhYDoyYwS5X4c9oz1)

  

The blue part under it is for an Ad banner, cause, yes, the mobile port will have ads. But worry not, we want them to be as little intruding as possible. No full-screen gameplay-interrupting auto-play ads or anything similar.

  

Added to this, out artist made a whole banner to cover for different screen sizes:

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEghPNb2QWOf3HyWz3Adw4W8HpgrHq7cggNZzlCTZbKsQ666QyEW748qeeJbpLMlEyUA9gLqRnNEUKqM_k7cyPgkWDxwVhBhSvIC9ZQStHXgHQtWYtT5IIW7d67GA76Q5tUTjzJjakTDErLRUgV9QrZVhnAaUGt7yM4CHP0oCEqLEx0mz9-XsbGNICYF4YRm=w400-h164)](https://blogger.googleusercontent.com/img/a/AVvXsEghPNb2QWOf3HyWz3Adw4W8HpgrHq7cggNZzlCTZbKsQ666QyEW748qeeJbpLMlEyUA9gLqRnNEUKqM_k7cyPgkWDxwVhBhSvIC9ZQStHXgHQtWYtT5IIW7d67GA76Q5tUTjzJjakTDErLRUgV9QrZVhnAaUGt7yM4CHP0oCEqLEx0mz9-XsbGNICYF4YRm)

  
It is incredible what our talented team is capable to do!

#### Balanced the combo and points system.

A huge overlook the previous version had was that, if you placed an item in a combo, gain the points from that combo, remove the item and placed it somewhere else, your points may result in a negative number.

  

From now on, the game remembers two important things:

  

- When an item has been placed in a container and, therefore, participated on a combo  

- Which tiles of a container have been part of a combo  

  

Added to this, now you get points for the object placed PLUS the combo points, making it easy for the game to keep track of the points you're making.

  

This may seem like not much, but keep in mind that this game is not our top priority. Also, only the new combo system required a lot of design from my side, discussion in the team and work for the programmers.

  

NEXT!

### BIG CITY LIFE

Big City Life is a Minecraft gamemode we are working on. Get a job, rent a house, you remember all that. Until now, you were able to work as a miner, there were different tiers and, depending on your rank, you were able to mine different materials. There were 4 locations: The Spawn building, The Windham building, The Grayhouse building and the mines. All 3 buildings had working elevators.

  

Now for the things we added:

  

- _Welcome message has been updated._
- _Players without the correct rank are now unable to place, remove or interact with blocks inside the mines._

- _Added an events hall next to The Windham building._
- _Added a message explaining why a player can't get inside a mine._
- _Fixed bug that allowed players to break blocks inside mines from the outside._
- _Two new admin commands have been added:_
    - /getjob {username}  
    - /setjob {username} \[job\] \[rank\]  
- _NPCs now uses the Citizens API._

#### Added an events hall next to The Windham building.

How do I say this?

MAYBE or MAYBE NOT there is lore related as to why this building is so important or why does it have such huge glass dome. So yeah. It is not fully furnished just yet, but the most important part of it is there! A... table with 3 chairs... hmm

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiLN5ciGeehMDujjY1oNi-svjE3xfw3soIFJkkp2LRWC_I9AVSctSVZV7sxSyaKHdw3tkWrQRPgDWUmpShMMYn7t5HDTg3UtafESTseKkZZ-YthgpJ3d6Ggsk0R2OrIxOJj_9Ay2eugf39HtVSlqYTBsiImrXnX67D90trOBMyL3SGG-9Ao8ehJFIPiRAYx)](https://blogger.googleusercontent.com/img/a/AVvXsEiLN5ciGeehMDujjY1oNi-svjE3xfw3soIFJkkp2LRWC_I9AVSctSVZV7sxSyaKHdw3tkWrQRPgDWUmpShMMYn7t5HDTg3UtafESTseKkZZ-YthgpJ3d6Ggsk0R2OrIxOJj_9Ay2eugf39HtVSlqYTBsiImrXnX67D90trOBMyL3SGG-9Ao8ehJFIPiRAYx)

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjv23EsZcfRSPh54ULUMVQ2Ye_KH8gioFR-g_yd8hvTUA73P-egkD-ZldCub5hY7eQXn0KfBNae8ytT3EHQvpXQGfh9bn2YD8OSASVIQY1nqYGzfpNrpP97J7dDExRpz6wMetBshXNS-I-TQI91giLcAZSgSGWB1QG-53aupGc3U550YBGHfSGOUcVN2wNY)](https://blogger.googleusercontent.com/img/a/AVvXsEjv23EsZcfRSPh54ULUMVQ2Ye_KH8gioFR-g_yd8hvTUA73P-egkD-ZldCub5hY7eQXn0KfBNae8ytT3EHQvpXQGfh9bn2YD8OSASVIQY1nqYGzfpNrpP97J7dDExRpz6wMetBshXNS-I-TQI91giLcAZSgSGWB1QG-53aupGc3U550YBGHfSGOUcVN2wNY)

  
That is everything we have to show this update. We really hope you- **WHAT HAPPENED TO KTA?** Oh... yeah... that one. We did nothing about it yet :D

  

See you next time. We hope this lack of show and tell is not disappointing to you.

  

**Bye! Have a great time!**