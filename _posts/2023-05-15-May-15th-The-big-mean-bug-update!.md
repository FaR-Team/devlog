It feels like we've been gone for 3 and a half months... and we've been. I'm gonna explain what we've done these past months but before let me tell you, this blog is all about bug fixing and technical issues, so it could get kinda boring next to the other ones.

First, the good ol' bullet-point-list:

- _FINALLY fixed the big mean bug that allowed the player to plant in the air._
- _From now on you run by default and you walk by pressing 'Shift'._
- _From now on you sell in bulk by pressing 'Control' instead of 'Shift'._  
- _Refactored pause and unpause, making it useful for inventory and UI stuff._  
- _Completely revamped dirt's connection system to make it more efficient._  
- _Remade the dialogue system from the ground up (Not the final one, but a proof of concept)_  
- _Added an Scriptable Object Editor._  
- _Added the ability to close the inventory with Escape._  
- _Added more debug commands._
- _Added sound volume options._  
- _Added **MULTIPLE** optimizations to the code._  
- _Added a farm scene._  
- _Added a debug teleport to the farm scene._  
- _Fixed bug that prevented the 'Buy' button from working properly._  
- _Fixed bug that prevented the 'Softlock fix' debug button from working properly._  
- _Fixed bug that allowed the player to open the pause menu once again while in the options menu._   
- _Fixed bug that allowed the player to open the inventory while in the pause menu._  
- _Fixed bug that prevented the player from closing the pause menu with Escape. (Seems like this went unnoticed for a while)._  
- _Fixed bug that caused music to play more than once while you sleep._  
- _Fixed bug that allowed the player to plow land while on the pause menu._
- _Fixed bug that allowed the player to plow land while on the inventory menu._
- _Fixed bug that prevented the player from opening the inventory after closing a chest._
- _Fixed bug that prevented the player from opening the inventory after closing the sell menu._
- _Fixed bug that caused both midday and midnight to be "12PM"_
- _Fixed bug that misplaced the player when changing scenes._
- _Fixed bug that avoided the seed amount number to update if you moved a certain seed from the hotbar to the inventory, buy a couple more seeds of the same kind and then opened a chest... pretty specific one..._
- _Fixed a bug that allowed the player to skip a whole day by spamming the 'Sleep' action._
- _Fixed bug that allowed the player to sleep at any given time._
- _Fixed bug that prevented the player from moving after sleeping._
- _Removed bowling minigame._

With that said, let's talk about the oldest bug in the game...  

#### **The big mean bug.**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgFvzhGIxIVfRBjQylXWvLYU_6MWz3QEaq46XH8co4h0p7kTTPj_1lTGo_sIeWtm_aDPOE6QqSqBZQIqT_yxGYxFlxoovp0TxfMGZvFLlqmvTz1gsfjWmVwvFMuJwjW47tJieRhaP3n9EBmmiKAbTru__VwcDDgKGYHC6IfLAdMNHNEbCPoJIKR1LtMdQ)](https://blogger.googleusercontent.com/img/a/AVvXsEgFvzhGIxIVfRBjQylXWvLYU_6MWz3QEaq46XH8co4h0p7kTTPj_1lTGo_sIeWtm_aDPOE6QqSqBZQIqT_yxGYxFlxoovp0TxfMGZvFLlqmvTz1gsfjWmVwvFMuJwjW47tJieRhaP3n9EBmmiKAbTru__VwcDDgKGYHC6IfLAdMNHNEbCPoJIKR1LtMdQ)

What you see there was our biggest nightmare since may 2022 when we added the conected textures features to the game. The video is enough explanation; for some reason, you are able to plant a seed in mid air if you look at a plowed land from certain angles.

Okay but... why does this happen?

We had a couple theories at the beggining; our first suspect was the raycast. You see, in simple terms, a raycast is a fine line that comes out of the player's face (in this case) and precisely calculates and identifies the place you are looking at. We use a raycast to allow the player to interact with stuff.

We were afraid that the raycast was rounding numbers to fix them on integers, causing this bug. Thing is, What was the range? Where can we change this range? Is it even modifiable?

Who cares!? That wasn't the issue at all.

After a whole year and 5 different programmers, someone found the issue.

**But first some context...**

Hi, I'm Sasha, once again. Even tho I'm the Desing Director, since we don't have a 3D modeler for the game, I am the one who created all of the 3D models in the game. Let's be honest, before the beggining of the development of this game, I had NO experience on 3D modeling. Never even opened a modeling program such as Blender or Maya. IN FACT, in the begining, the models were made in MagicaVoxel (and we all know how that ended up).

Given this context, the issue was...

[![](https://blogger.googleusercontent.com/img/a/AVvXsEh-tSgWgttoSWlzgV5XtqQNyheaUs-H2nzlS8FkGsFwv1yxosuzYsyDNUYVaGyEq0T6DsUsaTfZPzBYYvlJcK0QwBk0Yf541WHphCuoH8oarihbIPS6-KcmRbe_Oop_7Qr0cJZGYdrhaitv_uDZpp55MvqVUQuNzqNsHIch2fdmpNmEaGjVBdGLkWOLyg)](https://blogger.googleusercontent.com/img/a/AVvXsEh-tSgWgttoSWlzgV5XtqQNyheaUs-H2nzlS8FkGsFwv1yxosuzYsyDNUYVaGyEq0T6DsUsaTfZPzBYYvlJcK0QwBk0Yf541WHphCuoH8oarihbIPS6-KcmRbe_Oop_7Qr0cJZGYdrhaitv_uDZpp55MvqVUQuNzqNsHIch2fdmpNmEaGjVBdGLkWOLyg)

  
For someone as unexperienced as I was, this might look normal, Where is the issue?

See that point where the green and red line meet? That is the X0 Y0 Z0 coord. My models were... offcentered.

THIS WHOLE TIME the issue was because the models were offcentered.

I had to manually fix every single 3D model in the game to fix this. Which caused their animations to stop working. And, since our animator will be busy for a while, all the animations will be gone for a long while.

That was... bittersweet, but at least the bug is gone.

And that is one of the many reasons why we were gone for so long. After [January 31st Update!](https://farteamdev.blogspot.com/2023/01/juanuary-31st-update.html#more) I've made a big 'To-do list' with some of the most annoying bugs I and the testers found and asked the programmers to concentrate on those before releasing a new devlog. I really thought this would be done for February 28th but certainly it wasn't that way at all. We also had some other personal issues in the middle, but nothing that couldn't be solved.

#### Okay, cool. Nice bugfixing blog. Anything interesting to share?

First of all, you are a very aggressive voice in my head. 

Second of all, we've been working in a couple new things such as:

  

#### New models!

On [November 1st: The Hoe Update!](https://farteamdev.blogspot.com/2022/11/november-1st-hoe-update.html) I said that the next month will be about replacing placeholders. Of course, we've been working on that too!

  

For a long time now we've been using placeholders for the selling boxes

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEihqEARI9pOZoGCdtG0qozJAR-yBE49rLy8bGYh_05kcYSZ8Fp2vqum00whWt8FAyPqs2c-bDtQ0CLsdRFVEh6e1FN5B2BfdK7m2hSYHj33NCHai94YFvq2XeYNCGKMkyjVgYxHXii-sXNhTS1P8gaS4VkSKtZL6NbwRVlMGZ4KNLOdOX26TM5DyQniQQ)](https://blogger.googleusercontent.com/img/a/AVvXsEihqEARI9pOZoGCdtG0qozJAR-yBE49rLy8bGYh_05kcYSZ8Fp2vqum00whWt8FAyPqs2c-bDtQ0CLsdRFVEh6e1FN5B2BfdK7m2hSYHj33NCHai94YFvq2XeYNCGKMkyjVgYxHXii-sXNhTS1P8gaS4VkSKtZL6NbwRVlMGZ4KNLOdOX26TM5DyQniQQ)

  

Some said they thought these were from Crash Bandicoot... I do not see it.

Soon, we'll have our own models.

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhWCGCy0L5zojv-IH0mTCC_CA3GhiNUvObfgbiddKeuhnErP5ef2tkNMTS70l8Qgz_HuDM4VYwMoQbiuMAPuO61ajapvGXOIox-z9PARgIK85H0RpcOkPYQHhbpzBVXTQ_ftwxz_9HD_-VOddS2QvpxAOJvNNKoYcyL95JXX2Sn1725803AZCE5QqvTdQ)](https://blogger.googleusercontent.com/img/a/AVvXsEhWCGCy0L5zojv-IH0mTCC_CA3GhiNUvObfgbiddKeuhnErP5ef2tkNMTS70l8Qgz_HuDM4VYwMoQbiuMAPuO61ajapvGXOIox-z9PARgIK85H0RpcOkPYQHhbpzBVXTQ_ftwxz_9HD_-VOddS2QvpxAOJvNNKoYcyL95JXX2Sn1725803AZCE5QqvTdQ)

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiEQerLgOsonYWNYC0u3jzdOy8HlfEtnXq-ziNZWSgjleUmr956v0oSU8HyjVF-pqTzyLDwhZKUDaaj2jw3KABhHNZN_C6w64XCDHl3VKw5oyYKlA_nhrw54mDAxgJwPUXNR6reS4yv8FLJTWeylQT2Gw8qCoUO5Ge6itb8xdyxMpKo_vuZamupENFXDw=w275-h320)](https://blogger.googleusercontent.com/img/a/AVvXsEiEQerLgOsonYWNYC0u3jzdOy8HlfEtnXq-ziNZWSgjleUmr956v0oSU8HyjVF-pqTzyLDwhZKUDaaj2jw3KABhHNZN_C6w64XCDHl3VKw5oyYKlA_nhrw54mDAxgJwPUXNR6reS4yv8FLJTWeylQT2Gw8qCoUO5Ge6itb8xdyxMpKo_vuZamupENFXDw)

  

Aren't they cute?

#### Map layout!

Remember this from the bullet-point-list?

- "_Added a farm scene._  
- _Added a debug teleport to the farm scene._"

Well, that means this:  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEirj0iWCv2TekHcbK1-6dbf9U6PuccnrfPdE_3stFns_bz_51R1p7BAQhypGzKoqb36RRufY-GIDVd0IwjnGrvF_T-XN5Jur-jyLFghSWTmGASJF8QzCZQhjLCP2VjuRtkhpUhSzxs5aO9aPWUqSp-Kt_SM8pRNSKq_eHSaKk2-Lf2bqH6_9l2Ro3_3jA=w400-h196)](https://blogger.googleusercontent.com/img/a/AVvXsEirj0iWCv2TekHcbK1-6dbf9U6PuccnrfPdE_3stFns_bz_51R1p7BAQhypGzKoqb36RRufY-GIDVd0IwjnGrvF_T-XN5Jur-jyLFghSWTmGASJF8QzCZQhjLCP2VjuRtkhpUhSzxs5aO9aPWUqSp-Kt_SM8pRNSKq_eHSaKk2-Lf2bqH6_9l2Ro3_3jA)

  

This may not look like much, the floor has a texture, there are a couple cubes and a flat house. But this is just the beginning for the whole farm level! You may not understand how important this is now, but soon it'll all make sense. 

#### What about the game's name?

Shut up!

  

And that's basically it. We sure hope we don't disappear for this much time again, and that we have more to show next time. 

  

Also! Check out the January 31st Update! blog again, our staff list has been updated!

  

**Bye! Have a great time!**