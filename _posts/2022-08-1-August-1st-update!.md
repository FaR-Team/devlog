---
layout: post
title: "August 1st Update!"
date: 2022-08-01
project: farmoxel
tags: [Devlog]
---

It has been a long while since the last time we updated this blog, but we can ensure that we are making progress on the game! Sometimes we make **HUGE** improvements, and sometimes we fix a couple tiny details.

Anyway! Let's jump to the boring bullet-point-list of all the changes, and later I'll explain some of them:

- _Added a save/load system (still indev)._
- _Added a pause menu._
- _Added the new customized font._
- _Changed the sprites of the carrot._
- _Added a system that'll make adding new crops easier._
- _Added a new hotbar design._
- _From now on, the dirt models will dynamically update themselves when detecting another dirt model next to them._
- _Updated the GUI design._
- _Updated the explosion animation with new particles._
- _Slightly modified the FOV and size of the character to adjust the player's view._
- _Replaced all in game 3D models with new more optimized 3D models._
- _Fixed bug that allowed you to pick up items under you to [fly away with them](https://imgur.com/a/dTgS1LL)._
- _Fixed bug that created client-only 'ghost' items in the inventory while interacting with a chest (I really cannot word this better)._
- _Fixed bug that made the energy bar enter animation repeat itself over and over with every action._
- _Fixed bug that caused the GUI to be on screen while opening the inventory._
- _The game now identifies 8 seasons (Early Spring, Late Spring, Early Summer, Late Summer, Early Fall, Late Fall, Early Winter and Late Winter.) This does not serve any function just yet since nothing changes from season to season, but it is a big step to the weather and climate system the game needs._
- _The game now keeps track of the year._

### Now, let's talk about some of them on detail:

### **"Changed the sprites of the carrot"**

The old sprite for the carrot was just a pixel art drawing used for reference to create the 3D model. It was plain, it was boring, and most importantly, it was ugly. So now, we have a new sprite, that setted how the game's artstyle is going to be in the future.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv4qlFc_38hJbgwNoxGSN9lyvmA-fVOR2q4iES3EEGqSK8NOnX4taH2k0kMmtOON9hq0f2aG5oRAP55AT4WSPKwZtHHD-zv5OAXRDNhh96fEKq5acgr6ld9d3jeMBL0BoxUdG-nryb9lSymahi5BBvZ3ha1tVJ7I8UPXj88_S5RAFDwQSuPPNWMkxytw/s320/Sprite-0001.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv4qlFc_38hJbgwNoxGSN9lyvmA-fVOR2q4iES3EEGqSK8NOnX4taH2k0kMmtOON9hq0f2aG5oRAP55AT4WSPKwZtHHD-zv5OAXRDNhh96fEKq5acgr6ld9d3jeMBL0BoxUdG-nryb9lSymahi5BBvZ3ha1tVJ7I8UPXj88_S5RAFDwQSuPPNWMkxytw/s560/Sprite-0001.png)

### **"From now on, the dirt models will dynamically update themselves when detecting another dirt model next to them"**

Before this update, planting a crop next to the other generated piles of dirt disconected one from the other. As of now, the models will change it's shape to [conect with all the models next to it](https://imgur.com/a/2ZWlYMk). This change in particular makes me really happy, cause with the team we thought that it was going to be a huge pain in the lower back to add it, but it ended up being easier than expected and it looks really good!

As a piece of trivia, I (lead artist) solved and explained how to code this in the game with a lil sticky note and a pencil, have fun guessing what any of this means:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEi_S-KPilaQNX5H3vPOjJ8nzPTLut-ua54u-kCLDbrSgZMBWXrasHKUjrmNqp3-_yJ__0e2a-E_dKTFYD97LxtK5Ll-9jRkHgoIBINHnfazyg5Frd3HxhYfc2mG4aOmoP9T1fbAob2vwPr7qcGplmxxHdgDUjqXTA7nqLUmTOSk0lTcux9JGoPM5tq1mQ)](https://blogger.googleusercontent.com/img/a/AVvXsEi_S-KPilaQNX5H3vPOjJ8nzPTLut-ua54u-kCLDbrSgZMBWXrasHKUjrmNqp3-_yJ__0e2a-E_dKTFYD97LxtK5Ll-9jRkHgoIBINHnfazyg5Frd3HxhYfc2mG4aOmoP9T1fbAob2vwPr7qcGplmxxHdgDUjqXTA7nqLUmTOSk0lTcux9JGoPM5tq1mQ)

Haha, numbers go brrrr

### "Updated the GUI design"

Tired of the old Unity-created placeholder GUI, we decided to create what could be the final version of it. To be honest, I'm pretty proud of the result EXCEPT for the energy bar... it looks so off. I'm probably changing that in the future. The truth is, I have ZERO experience with GUI design, so this was a blind attempt.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjlgccv_PLoOvIvZe02jaLtOBcNYCYavchA1k8H0ump-f8rBMA5f7Wq3OHUl7jEWBoVWjXKyDPV31fK9RL1dTjLWrh5-CyK2otj8Eh3TeZqbX50RI0Lwsw-YXE-p96RMCZjKwUH4A2mXFUP96EWKGrCjwuAsPU7VOfZ-vGw-wmFRgvaa5bzCU6Qs-NX6Q=w517-h291)](https://blogger.googleusercontent.com/img/a/AVvXsEjlgccv_PLoOvIvZe02jaLtOBcNYCYavchA1k8H0ump-f8rBMA5f7Wq3OHUl7jEWBoVWjXKyDPV31fK9RL1dTjLWrh5-CyK2otj8Eh3TeZqbX50RI0Lwsw-YXE-p96RMCZjKwUH4A2mXFUP96EWKGrCjwuAsPU7VOfZ-vGw-wmFRgvaa5bzCU6Qs-NX6Q)

GUI sheet

### "Replaced all in game 3D models with new more optimized 3D models"

You might be wondering why that is crossed out... well... I screwed up.

The old 3D models are created with a program dedicated to voxel models (I'm not dropping names), thing is, these models had 6 times more vertex and 3 times more edges than needed, which will eventually cause issues for the game's performance. I decided to use a different program that rendered more optimized models, but when we dropped those models into the game... it destroyed the project. Lucky enough, we made a back-up a couple days before that incident so we were able to rescue the project.

Right now, I'm learning how to use Blender (which I should've done since the beginning), and probably for the next update we'll have better models for the game.

And that's basically it! It might not seem like a LOT of progress taking into account all the time that passed since the last post, but we at FaR Team are more than proud of the game's trajectory.

### What to expect?

Right now, we are working on the new improved models, a customized shader, and character design. Also, recently we received an animator and a producer in the team, so you can expect music and quality animations coming soon.

And that's it! Hopefully we'll be updating this blog during the month, and if not, there is going to be a September 1st update anyways.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiLuvZ54NdaEyNFvn4lZZbX1RwHmghJ-8kBb9AwJQrYuQKBK_LYIUG-DgOBovnhTm1_T3o_4zcAcvRFtCQV6FI2hsCIWT2nXNrtbJow3Uj7jm8yriK_2xopUyujJ8Pv-k0G-3s2BJFermPIW6r4qXZpzXeoYotVBPWF7qb_TjlIYc-Wous2arZj7g803g=w640-h358)](https://blogger.googleusercontent.com/img/a/AVvXsEiLuvZ54NdaEyNFvn4lZZbX1RwHmghJ-8kBb9AwJQrYuQKBK_LYIUG-DgOBovnhTm1_T3o_4zcAcvRFtCQV6FI2hsCIWT2nXNrtbJow3Uj7jm8yriK_2xopUyujJ8Pv-k0G-3s2BJFermPIW6r4qXZpzXeoYotVBPWF7qb_TjlIYc-Wous2arZj7g803g)

A message from our lead programmer who I forced to create the connected textures :D
