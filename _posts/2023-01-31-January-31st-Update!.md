---
layout: post
title: "January 31st Update!"
date: 2023-01-31
project: farmoxel
tags: [Devlog]
---

We know it's been a while since the last time we updated you about the game, but with the holidays we weren't able to have a proper development schedule. Good thing is that, right now, we are finally back on track to work on the game. Today's update is one of the largest with a total of 34 changes since the last update. 

Additionally, we are happy to announce that the development team grew a lot in the last few months. I'm going to introduce you to the new members at the end of the blog.

Without further ado, let's go to the bullet-point-list:

**BUT WAIT A MINUTE!**

Hi, my name is Sasha, and, as you'll learn later in the blog, I'm the Design Director of the Farmoxel Project. Why am I telling you this? Well, even tho I have basic knowledge of coding, there are some points of this list I literally have no idea what they mean. I could call one of the programmers and ask them about it... OR, I could divide the list in two parts: What I understand and What I hope you guys understand by yourselves. Okay? Okay. lets go.

Things that I understand:

- _Added new art for the seasons indicator in the GUI!_
- _Added language localization for both days and season._
- _Added the possibility to hold the right button while selling._
- _Added the possibility to hold shift while selling to sell all._
- _Added a rng-based music system (For now it only use a placeholder song)._
- _Added Discord Rich Presence._
- _Added a button in the pause menu to reset your character's position._
- _Added a Developer Console._
- _Added the following commands to the Console:_
    - add_gold: Gives you the amount of gold you write.
    - give: Gives you an item with the ID you write.
    - hurrypotter: Changes game's ticks to the value you write.
    - relaxpotter: Sets game's ticks back to normal.
    - logs.sasve: Saves logs to Persistent Data Path.
    - prefs.clear/.delete/.float/.int/.string: various playerprefs related commands.
    - rosebud: gives you 1000 gold. (hehe, get it?)
    - scene.load/loadasync/restart/unload: various scene related commands.
    - sysinfo: Shows system's info.
    - time.scale shows/changes time.timescale value.
    - noclip: Source's noclip feature :D... Are we even allowed to drop names?
- _Added placeholder 2D art for the player's house._
- _Now the item's name displays when you select it in your hotbar._
- _Now you can sell apples!_
- _Music now Pauses while in pause menu._
- _Changed Hoe's key-binding._
- _Changed how tools receive input (And applied it to the Hoe)._
- _Changed dirt animations._
- _Changed all of the 3D models for dirt and carrots (We tried to do this back in the **[August 1st update!](https://farteamdev.blogspot.com/2022/08/august-1st-update.html)** but we had issues with the new models)_
- _Changed clock's placeholder art!_
- _Fixed bug where apples would stop generating after the second harvest._
- _Fixed T-shape connector bug._
- _Fixed a lot of bugs that appeared when we started using Plastic SCM._
- _Cleaned up some leftover code._

Things I do not understand:

- _Added a "DontDestroyOnLoad" system._
- _Modified UniqueID's script._
- _Fixed Unique ID related issues._

 Do you know what any of that means? Great! I don't.

**Now let's talk about highlights!**

#### "Added new art for the seasons indicator in the GUI!"

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhXLYfRUHeKkqObEgHOeYzsuHhoLeoMk6jCsjK-MkSXVOTIj5SFFT-lNXL8EEzWi_3XaDwHwVuCTv1hDTl2hA7nO8xoiGhlzguFmt3KD8TtZE8yO4Bk_idLzNmkHeFvvebihyvw3uEUoMxAkvhte2xRX_JI-fYnLdGiVdHJRJX7R_s74ASbfW-OzrrBIQ=w293-h320)](https://blogger.googleusercontent.com/img/a/AVvXsEhXLYfRUHeKkqObEgHOeYzsuHhoLeoMk6jCsjK-MkSXVOTIj5SFFT-lNXL8EEzWi_3XaDwHwVuCTv1hDTl2hA7nO8xoiGhlzguFmt3KD8TtZE8yO4Bk_idLzNmkHeFvvebihyvw3uEUoMxAkvhte2xRX_JI-fYnLdGiVdHJRJX7R_s74ASbfW-OzrrBIQ)

Seasons are an important factor in the game, therefore, giving the player a good input for them to understand what season they are currently in is very important. 

  
That's why, from now on, these tiny rectangles will appear next to the info frame of the GUI. I hope you like how this looks, cause I love it.

#### "Added Discord Rich Presence."

**![](https://blogger.googleusercontent.com/img/a/AVvXsEgBB7djvTxz6vsWdy75fS35Upjq7O1nkbGv5AerP6yakNB6iGSQwZwaYFSveSfFXh3lWxFZNW_fvIPxYSJqC_kIq-pexLAcNER6_FgN33Dhjt9h8XfdIO9ljMBWr2enmUxFgh2ZAyy91AKtsMUidY-hxATvDm_a6Js0SYodanqK-mHYgXtKN9ne6ft6mw)**

From now on, when you play our game instead of spending precious time with your friends, Discord will tell everybody that you are not 'working on something important' as you tell people to avoid them... You're welcome! :D

#### "Added a button in the pause menu to reset your character's position."

Before this update, there was plenty of ways to get soft locked while testing features, and being forced to restart the game to fix this was tedious. That's why we added this feature... but it had... an [issue](https://imgur.com/a/nDxEHVI).

No, that is not a beta build for a multiplayer mode, it is just the weirdest bug we have ever encounter. It is fixed by now, but I thought it would be funny to show it to you.

**"Added a Developer Console."**

![](https://blogger.googleusercontent.com/img/a/AVvXsEgtpR_1v-QC3pfQW9k3dNxCXHX8-WEAm9r5CZnVfHfcYh7wCGJJ_i0dVnSIleLyoK92zTPc_AifDAxPZW2jXMU_T0ZXvY_id3roBeQjWsLKpHC4fDyah2xcK_zqeQjGXXFEtWsi6M1tk6V9K8zMMHI28J22EsaiJg36tCY44P35No_C_Em6JELYPCGj3w)

  
Ah, don't you love that vintage Counter Strike 1.6 like aesthetic? Well I hate it. But since it'll only be accessible to us the devs, I won't waste a single second into making it look beautiful. It is useful and that's what counts.

**"Added placeholder 2D art for the player's house."**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgB88XUWcq2aWGMtsf5kP-vcotNKkoyQQK35G2cVjUnZ5D5xDMiz6ZcP_6mEsEWM0rleRDjKbTfBzmvpH_e9_zBc1ZBv4D4lRij-A42w04x-3fYPCDUY70LRPwG3DZB9kYwvPUKDTvgA1v7Xd1ch2dMGfUndload24T-3kRveHBN2xnQbLi4NeTquoXgw)](https://blogger.googleusercontent.com/img/a/AVvXsEgB88XUWcq2aWGMtsf5kP-vcotNKkoyQQK35G2cVjUnZ5D5xDMiz6ZcP_6mEsEWM0rleRDjKbTfBzmvpH_e9_zBc1ZBv4D4lRij-A42w04x-3fYPCDUY70LRPwG3DZB9kYwvPUKDTvgA1v7Xd1ch2dMGfUndload24T-3kRveHBN2xnQbLi4NeTquoXgw)

  
This one needs a good explanation. No, the game is not going to have 2D flat models all around, the style will still be a hybrid voxel art. 

Ok then, why was this added? Well, as you will know soon at the end of this blog, FaR Team does not have an official 3D modeler, I am the one who makes them... I am also the one who makes concept art, and GUI design, and character designs, and basically monitor every single aspect of the game. I don't have enough time to make the models fast enough, but the programmers need to test the features they are working on.

This is the solution I came up with. I'm really fast creating pixel art, and, in the future, when we add LoD to the game, we will need this pixel art models anyway, so if I make them right now, programmers may use them as placeholders until the 3D models are ready and the reuse the pixel art for the LoD. It's a win-win situation!

#### "Changed clock's placeholder art!"

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgkyq85p_lcp56kh_lenRbmC6hNFShspPm1F8c9TmgFrIv8cAv6ynaCgqNUCQxMIw6xhKHy7_jstd5tNZVWnnuLNmvv5-1zkiGUCSmy2kd8XJ0thHfC34m45fxn0iUAUZJ8Qh6FW1aHmK2M7BP9txcszqRTyyMFB5RSUUtaypIxLVOor1pSM9ycog8vyw)](https://blogger.googleusercontent.com/img/a/AVvXsEgkyq85p_lcp56kh_lenRbmC6hNFShspPm1F8c9TmgFrIv8cAv6ynaCgqNUCQxMIw6xhKHy7_jstd5tNZVWnnuLNmvv5-1zkiGUCSmy2kd8XJ0thHfC34m45fxn0iUAUZJ8Qh6FW1aHmK2M7BP9txcszqRTyyMFB5RSUUtaypIxLVOor1pSM9ycog8vyw)

Look at it! Isn't it beautiful! ah- I'm so proud of my baby... anyway

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhDuo0TLf2Rlb7j5sv3TGiFJcFGJIHYF_-SFuhLvUOt5BVch78ilQ0UbEJKvI_kdm0vxWOCOzFtLRK5s-DcFvWezrqsG-x6hwsIc0cerP3IzC3MBHsuKKDyaVoReTgL3IKy-842yxCLmY15SNSlF8sR0CHAr05lGlwSVb_0PZF_SDKycDesRBK1TxbHow)](https://blogger.googleusercontent.com/img/a/AVvXsEhDuo0TLf2Rlb7j5sv3TGiFJcFGJIHYF_-SFuhLvUOt5BVch78ilQ0UbEJKvI_kdm0vxWOCOzFtLRK5s-DcFvWezrqsG-x6hwsIc0cerP3IzC3MBHsuKKDyaVoReTgL3IKy-842yxCLmY15SNSlF8sR0CHAr05lGlwSVb_0PZF_SDKycDesRBK1TxbHow)

This is how the info GUI looks with the new clock and the seasons space. Now we can finally say that the info GUI is fully functional. But... what does 'Altacoter' mean???  
  

And that's basically all the highlights for today's update. Now lets talk about FaR Team. For a long time since the beginning of the development we were only two persons (humans?) in the whole team, but now we are a bigger team with a couple of new talents. Check them out!

Design Director: Sasha Englebert (**[LinkTree](https://linktr.ee/sai_it_again)**)

Lead Programmer: Santiago Fisela (**[Webpage](https://justneki.com/)**)

Programmer: Ulysses Alvarenga (**[LinkedIn](https://www.linkedin.com/in/alvarenga-ulises/)**)

Programmer: Franco Rosatti ([**GitHub**](https://github.com/franrosatti9))

3D Animations: Yowi (**[YouTube](https://www.youtube.com/channel/UCyLCPl-GMRSj30KuYjcNS0Q) and [Instagram](https://www.instagram.com/yowi.ive/)**)

2D Artist: McPanquesitoSan ([**Instagram**](https://instagram.com/mcpanquesitosan))

2D Artist: Elian Mercado (**[Instagram](https://www.instagram.com/elic_.m/)**)

As you can see, we still need a music producer and a 3D modeler (even tho we received some help from volunteers in the past). But I'm glad to see how the team is slowly growing and I hope it keeps going like this.  
  
That's all I wanted to share about the Farmoxel Project development. In the next couple of months you can expect more updates and some blogs analyzing the games that worked as a reference for the game. Also, soon enough we will be announcing the game's official name. And a couple more secrets...

**Bye! Have a great time! **