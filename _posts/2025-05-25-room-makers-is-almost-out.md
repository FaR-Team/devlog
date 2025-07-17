---
layout: post
title: "Room Makers is (almost) out!"
date: 2025-05-25
project: roommakers
tags: [Devlog]
---

The title is not a lie. The title is not click bait. The title is COMPLETELY true.

The past few weeks we resume work on Room Makers since we've been invited to participate in an indie game showcase here in our country. Technically we had a working DEMO, but we wanted to bring a full game, ready to download on the day of the showcase. We're talking about new mechanics, bug fixing, QoL changes, new furniture sets, and some surprises-

Of course, none of this means that Farmoxel has been left on a side. Since December **[the last time we updated you,](https://blog.farteam.digital/2024/12/15/December-15th-update!-Working-on-a-DEMO.html)** we've been working on improving Farmoxel as much as we could. Yes, the project is pause, but we are excited to show you all the things that changed since then.

There is a whole story to tell here, in fact, some of our team members don't have some of the specifics I'm about to share with you here, so... surprise? 

On April 3rd, our Lead Programmer received an email from Google Play. Our developer account had been inactive for a long time and we were given a 60 days deadline to either update one of our published games (We only have KTA) or publish a game to fix the issue. The solution was very simple, we just had to update [**KTA's**](https://farteam.digital/kta.html?lang=en) logo and push that as an update and everything would be fine, in fact, we were actually planning to do that sooner or later. But then our LP had an idea; let's pretend this does not fix the issue and, therefore, we were forced to finish Room Makers in a record time. No crunch was intended, just a challenge to see how creative our team will be to sort this obstacle.

But then, something happened… the lie turned into a reality. For some reason our LP couldn't compile a build for KTA, making our swift update impossible. Karma, I guess. We actually had a 60 days deadline to finish Room Makers. Not much was ins stakes. If they closed out developer account we could just pay 25USD to get another… but they were going to be MY 25USD! I couldn't let that happen!

That same day I jumped on my desk and started planning a whole roadmap for the development of Room Makers 1.0.0. And here we are.

Interesting story, right? It had everything! Love, treason, action! By the end of April, everything was going very smooth, we were sure we'd have a release way before the deadline. That's when we were invited to this showcase, taking place on May 25th. So we prepared everything for it.

Now you might be wondering "why does the title says the game is ALMOST out?" "didn't you just say everything went smoothly?" "are you a liar?". The answer is yes, but that's not related to this. The thing is, the game is fully playable, but Google Play integrations takes time and, unfortunately, that's something we cannot control. So now, we can only wait. I'll edit this post as soon as the game is available to download to let you know.

EDIT: THE GAME IS OUT! YOU CAN DOWNLOAD IT [**HERE**](https://play.google.com/store/apps/details?id=com.FaRTeam.RoomMakers)!

Now for the fun part! Let's jump into the bullet-point-list! This time it will be divided in three categories; Changes for both Room Makers DEMO and Room Makers Mobile, Changes only for Room Makers Mobile and Changes for Farmoxel. After that, as always, we'll se some of the changes in detail.

#### Changes for both Room Makers DEMO and Room Makers Mobile:

*   Balanced room’s prices.
*   Balanced scoring in general.
*   **Added a Gym furniture set.**
*   Fixed a transition bug.
*   Fixed a tutorial UI bug, there was an incorrect exclamation sign in Spanish.
*   Fixed the probabilities of rare items.
*   Fixed a bug where the furniture's name would change languages when picking it back up.
*   Fixed a movement animation bug, the player would keep walking when you were in edit mode in some occasions.
*   Now objects shake a bit when you can’t place them.
*   We made a tool to import and export the objects list as a .CSV for easier editing.
*   We made a tool to create new furniture easily.
*   We made an entire devtool webfront with:
    *   An editor for the objects list, and their specifics (Price, Name, etc).
    *   An editor for the probabilities per tag, also using an .CSV file.
    *   A tool to create and edit 4-color palettes.
*   Revamped the spawn system, now using probabilities per tag.

#### Changes only for Room Makers Mobile:

*   **RELEASED THE GAME ON GOOGLE PLAY STORE!**
*   **Added the tag system, together with little icon indicators for the current room’s tag.**
*   **Added the labeler, an item to change the current room’s tag, together with its UI.**
*   Added a sledgehammer, used to destroy and open locked doors without using money.
*   Added some feedback for the minimap. (“Map” text at the side, as placeholder, and blinking to the current room).
*   Added a popup that says "Room Match!" when you match the room’s tag.
*   Added shops!
*   Added items that can only be placed next to walls.
*   Added around 20 new items!
*   Added 3x1 furniture to the system.
*   Added a “music tension” system. The music will go faster if you are running out of time.
*   Added the ability to place a little piece of tape over the speaker, muffling the sound.
*   Added an entire new mechanic: Kits!
*   Added a box for each size of furniture, used when a furniture that requires a kit or to be placed next to a wall doesn't meet it's requirements.
*   Added indicators over the boxes that show what they need.
*   Added the kits to the shop, and a 3% possibility of getting a kit instead of a furniture.
*   Added an entire new mechanic: Stacking! As of the first version of the game, the only stackable item is the book, over the bookshelf. You may stack up to 4 books.
*   Added non-intrusive ads! (Yeah, we have to eat too, yk?).
*   Added a restock machine to the shop.
*   Added sound effects for the restock machine.
*   Added the ability to skip the tutorial by pressing start at the beginning.
*   Changed the gameplay music! Now we have three tracks that can loop up to three times each!
*   Fixed a bug caused by using the labeler in the shop.
*   Fixed the shop’s rug collision.
*   Fixed a bug that caused the pizza box and the raygun to render behind containers.
*   Fixed a rotation bug with the box kit indicators.
*   The kits are now visible when you’re in edit mode if your current furniture needs that kit.
*   Localization depending on the device’s language.
*   Redone the tutorial on its entirety.
*   Redone how the items work, an entire under the hood change.
*   Removed ??? from the furniture rotation.

#### Changes for Farmoxel:

*   Added a catch up for the sell system.
*   Added a command to make the tick rate configurable.
*   Added functionality for crops to die and rot.
*   Added a multiply texture to the shader to use when the crops rot.
*   Added a loading screen.
*   **Added Apple Tree Models.**
*   **Added Water Bucket Model.**
*   **Added Hoe Model.**
*   **Added Beet and it's models**
*   **Added an animation for harvesting the apple tree.**
*   **Added an animation for the “Tree Harvesting Basket” and implemented it with the tree’s animation.**
*   Added an animation for when the dirt is initially plowed.
*   **Added the Hoe’s animation when using the hoe.**
*   Added a collider to the carrot’s sell box.
*   Added a submenu in options for audio sliders.
*   Added idle animation for the Beet.
*   Added functionality on our logger, now we can individually toggle the logs of each script using the in-game console.
*   Added an in-game file manager from github to replace an issue caused by EditorUtility. Credits to [**Yasirkula**](https://github.com/yasirkula/UnitySimpleFileBrowser)
*   Added saving for the “Player Stats” (This includes most of the data from the skill tree).
*   **Replaced the store GUI placeholder with an actual asset.**
*   Refactored scene loading to use a loading manager.
*   Refactored the sell system.
*   Refactored the sound system.
*   Changed the water shader a bunch. (Yet it is still broken :( )
*   Changed the compression of the project to avoid weird looking models.
*   Changed how the shovel works, now you can actually get rid of plowed land by using it.
*   Modified HurryPotter command.
*   Modified DeleteSave Command.
*   Modified the debug menu interface.
*   Updated House’s Texture and Model. It was broken in some details.
*   Updated Beet’s textures.
*   Updated the interactor, now you interact with right click.
*   Updated how the sensitivity worked, now using integers in the UI.
*   We made an editor extension to make the process of adding new crops easier, although it still needs further work to be fully automated.
*   Now the Gold UI updates using an event.
*   Moved a bit the house’s spawn points. Before this, the player would spawn slightly under the floor and make a tiny bump when walking.
*   Fixed a weird issue caused by the new outline, that made every backface have its alpha replaced by the outline color.
*   Fixed a bug where the user could subtract items they didn’t have in the basket from the basket, giving them a negative “bonus” of cash to use.
*   Fixed the explosion’s materials.
*   Fixed a bug that caused the game to not recognize a change of day if the user blacked out.
*   Fixed a bug that caused dirt overlapping.
*   Fixed a bug where plants wouldn’t save and load their dead state properly.
*   Fixed a bug where it subtracted items without selling them.
*   Fixed a bug on the apple’s OnEnable.
*   Fixed a bug where you could still harvest the apples and carrot when they were dead.
*   Fixed a bug in the store UI. While using any multiplier, it would only add one item to the basket but charge the correct amount of money.
*   Fixed a bug where the game could add items to locked slots in your backpack.
*   Fixed a bug where the player’s inventory would override itself internally when coming back to the main scene, causing several issues.
*   Fixed a bug where the apples would fall through the ground.
*   Fixed the grid ghost disappearing instead of turning red when you couldn’t place something.
*   Fixed mass selling with control.
*   Fixed the name display for tools.
*   Fixed carrot animations.
*   Fixed a bug that caused “bluetooth” watering of crops.
*   **Fixed a bug that caused a... Whack-a-mole minigame. We'll talk about that later.**
*   Removed Herobrine.

Those are, I think, about 150 changes. I don't know, I don't want to count them. Now let's talk about the highlights.

#### **Added a Gym furniture set.**

As well as most of the changes for the DEMO, this set was added thanks to the awesome feedback we received when we went to **[FIJA](https://blog.farteam.digital/2024/10/01/We-took-Room-Makers-to-a-festival!.html).** I am... not entirely sure why so many people wanted this but HURRAY!

Okay, maybe it's not a big deal, but I drew them and they look cute 🥺

[![](https://blogger.googleusercontent.com/img/a/AVvXsEik0Fjot2z4mxk4faDw67Rz2wfEUGEpjU4gRf-ahr4ogqT4Fqr_MeUa4z49RzHrdDn4zvyDfYPYf5TtCNukBC_wVMVE4LlskQq0lwgTBazuLBwoOR8Eg_mljPxjfAdeBTnqvkgQXlwziTKvvyd4omFe11GbUCytyd6-_GBqsL9a9Ks8EkbnOpXge7JG3Itf=w640-h573)](https://blogger.googleusercontent.com/img/a/AVvXsEik0Fjot2z4mxk4faDw67Rz2wfEUGEpjU4gRf-ahr4ogqT4Fqr_MeUa4z49RzHrdDn4zvyDfYPYf5TtCNukBC_wVMVE4LlskQq0lwgTBazuLBwoOR8Eg_mljPxjfAdeBTnqvkgQXlwziTKvvyd4omFe11GbUCytyd6-_GBqsL9a9Ks8EkbnOpXge7JG3Itf)

RELEASED THE GAME ON GOOGLE PLAY STORE!**

Okay, MAYBE this one should've come first since it is a tad bit more important, but you've already read about it at the beginning. Anyway, ROOM MAKERS IS AVAILABLE TO DOWNLOAD! [**GO PLAY IT NOW!**](https://play.google.com/store/apps/details?id=com.FaRTeam.RoomMakers)

[![](https://blogger.googleusercontent.com/img/a/AVvXsEixFE7YK1S5Okj5EiAdh0WLLM3MrnLV5jzDAnwvSAiXplL7pWl1RTXbK5bA4f0ucePNi76SMHmKmNm52WxIaB1zaL_GT9iUefzyHFvImdcUkBgYElvMkN6B5OqkqZsIoyGWso9zbY_9ETKO2CWM3b-9myETeZg8OdTcepefYN6y0QXU6L3RYDI2cOC3Mj6v=w640-h130)](https://blogger.googleusercontent.com/img/a/AVvXsEixFE7YK1S5Okj5EiAdh0WLLM3MrnLV5jzDAnwvSAiXplL7pWl1RTXbK5bA4f0ucePNi76SMHmKmNm52WxIaB1zaL_GT9iUefzyHFvImdcUkBgYElvMkN6B5OqkqZsIoyGWso9zbY_9ETKO2CWM3b-9myETeZg8OdTcepefYN6y0QXU6L3RYDI2cOC3Mj6v)

#### **Added the tag system, together with little icon indicators for the current room’s tag AND** **Added the labeler, an item to change the current room’s tag, together with its UI.**

Although the system is perfectly explained in the tutorial, I'm guessing that there is gonna be some people that skipped it so here I go again.  
  
This system is a complement for the combo system, the way it works is very simple; The first object you place inside a room will determine it's category. For example, if I place a fridge, the room will have a KITCHEN tag. Every single kitchen furniture you place in that room will receive extra points, that's a ROOM MATCH!

If you want to change the room tag, you can buy a labeler at the shops that spawn randomly. Just by placing it, like a normal object, you'll see a tag selection screen.

The icons are... the best I could do. If you have any idea of how would you improve them, let me know please ;-;

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhdVj4JY8Dlzux7N9l0rVlG9VsEJwmXmGY3yXkOONqDL9yNwBPIrtYmJlCR99TeaLv_ln_-CufFMnnmIr_HpsAXUQol_j0iDYP-hhXltcpkTa1Jqq-iAovPfeE85QWi2aUx1p3iLia4xdDcGbfjxE6yXjOR8_hHFTrboyT0ksw0pZdJjM26Jf1MVdlixMpc=w640-h577)](https://blogger.googleusercontent.com/img/a/AVvXsEhdVj4JY8Dlzux7N9l0rVlG9VsEJwmXmGY3yXkOONqDL9yNwBPIrtYmJlCR99TeaLv_ln_-CufFMnnmIr_HpsAXUQol_j0iDYP-hhXltcpkTa1Jqq-iAovPfeE85QWi2aUx1p3iLia4xdDcGbfjxE6yXjOR8_hHFTrboyT0ksw0pZdJjM26Jf1MVdlixMpc)

#### **Added Apple Tree Models,** **Added Water Bucket Model,** **Added Hoe Model and** **Added Beet and it's models.**

I'm so happy to talk about all this. Lately, we've been reworking a couple of stuff related to the 3D modeling workflow cause I realized I was going WAY too slow and far behind the programmer team. Allow me to tell you that that rework was a complete success! I've been able to drop new models in just a few days of work. Let's see some of them~

Some time ago I told you I've made the first and last stage of the apple's growth. Now the full sequence is done:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgEQSUyXirhhe89aXAO8NyQ9IDNnGZ2FKJrgEy-HrImJBipBqLAS--QOC8AfAq3yB2cnqz3gjX_XiTPIUwF1nyBOdgrMQWF8Z4KLfGkspumg4-E6oh_U2FDCaVwYsQlvN4e1XXUA9AZfjNYPsczUguPoeOKJvsyosnW-2SZeCdXJaHSlU6rpIF7NcMmZxhQ=w640-h252)](https://blogger.googleusercontent.com/img/a/AVvXsEgEQSUyXirhhe89aXAO8NyQ9IDNnGZ2FKJrgEy-HrImJBipBqLAS--QOC8AfAq3yB2cnqz3gjX_XiTPIUwF1nyBOdgrMQWF8Z4KLfGkspumg4-E6oh_U2FDCaVwYsQlvN4e1XXUA9AZfjNYPsczUguPoeOKJvsyosnW-2SZeCdXJaHSlU6rpIF7NcMmZxhQ)

Also, after almost a year of working with a mediocre placeholder, we finally have the full growth sequence for the tree:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgpelpR49JUc-axw2kpZ1dWhJjVprOV3SpDSnetntp-ZRN--H5TMRDwn6Whz-pB755UAFV8EyJg5CnhPVRxns2ht8GYJkDatJt6lCq3cIizoxn1yy9AMvfMbp_QDY4fpAXk8TfFHNZdfOfDf1NrQUzv1-ftkPmFJOIjFn0toevauN52YNVF8-YKKKb22V2R=w640-h396)](https://blogger.googleusercontent.com/img/a/AVvXsEgpelpR49JUc-axw2kpZ1dWhJjVprOV3SpDSnetntp-ZRN--H5TMRDwn6Whz-pB755UAFV8EyJg5CnhPVRxns2ht8GYJkDatJt6lCq3cIizoxn1yy9AMvfMbp_QDY4fpAXk8TfFHNZdfOfDf1NrQUzv1-ftkPmFJOIjFn0toevauN52YNVF8-YKKKb22V2R)

After that, I started working on the tools. So I've made the water bucket and the hoe:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgsN0VdBrO3PJ93V_GZPuqVLkPq_eS0DkCGHRFRUUKtJ5c_pbZydrhli0UBxnypM0BmYfvA0tQTlbMKhA_j1K57Eq7KMiyUkbfW_NaMTwmXQfj2V68WF_OA4K9R8rGM8dqkprjYLfZpcKI-nwplllXbPC0n58WzgwMi_eRHr2M5o8zEMCzZrxDMXf5nSaVR=w589-h640)](https://blogger.googleusercontent.com/img/a/AVvXsEgsN0VdBrO3PJ93V_GZPuqVLkPq_eS0DkCGHRFRUUKtJ5c_pbZydrhli0UBxnypM0BmYfvA0tQTlbMKhA_j1K57Eq7KMiyUkbfW_NaMTwmXQfj2V68WF_OA4K9R8rGM8dqkprjYLfZpcKI-nwplllXbPC0n58WzgwMi_eRHr2M5o8zEMCzZrxDMXf5nSaVR)

[![](https://blogger.googleusercontent.com/img/a/AVvXsEh15O4FNLjHE1cvOoekUcbl75jkwO4TEHQQaBj65kfa4U8hvGaeVli5K3aqcm8HIWxExKlc4BVbINS3pkqEtyhOPE7LMTjZTotJyzw1v_CynbmvHRZKWYop875nJeFNZgMTy_c9kPhp8o1H4cWPEOZN8nwP6EFddAPM6nLsVzDx7EvtqHIhaeH-UbU3qFnP=w640-h502)](https://blogger.googleusercontent.com/img/a/AVvXsEh15O4FNLjHE1cvOoekUcbl75jkwO4TEHQQaBj65kfa4U8hvGaeVli5K3aqcm8HIWxExKlc4BVbINS3pkqEtyhOPE7LMTjZTotJyzw1v_CynbmvHRZKWYop875nJeFNZgMTy_c9kPhp8o1H4cWPEOZN8nwP6EFddAPM6nLsVzDx7EvtqHIhaeH-UbU3qFnP)
  
The shovel is also on the works, but I had to stop working on it when the 60 days lie started.

Last but not least, we received the assets from a volunteer for a new tuber; the Beet! After some polishing, this is how it looks like:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjYrObBQu7ht9sZIKuDNvZi8owO-zfsrx8X3SRnQSf9AsGwiI0NXXt3enon54SJWIVRgi095uqkXzCp_eWRSRdrlf2rU9R5D4d61oh2loySA8Qd69mAgTA1j7KnJzaSt8Kle3RMQ5lacZj4LL5ACxkOnn30ZAyDpgOiSH6HYi0XKkLEh_dLXaNLvvt3p0ln)](https://blogger.googleusercontent.com/img/a/AVvXsEjYrObBQu7ht9sZIKuDNvZi8owO-zfsrx8X3SRnQSf9AsGwiI0NXXt3enon54SJWIVRgi095uqkXzCp_eWRSRdrlf2rU9R5D4d61oh2loySA8Qd69mAgTA1j7KnJzaSt8Kle3RMQ5lacZj4LL5ACxkOnn30ZAyDpgOiSH6HYi0XKkLEh_dLXaNLvvt3p0ln)

#### **Added an animation for harvesting the apple tree and** **Added an animation for the “Tree Harvesting Basket” and implemented it with the tree’s animation.**

The animation is not done yet since it needs some tweaking and a pixel art animation for the smearing. But it is taking shape and I LOVE IT!

[![](https://blogger.googleusercontent.com/img/a/AVvXsEj5Gl02_WXAzhvOvinbexfT9UwdaaVXKzdJd7fuOHKc6ENpMPGBYhCsljVoUHpMJcHEs-2_nE46pxJSGzt2sIcYesHk3XI_sbzg2l--nY9wbVB2dKP6yxYaMJ0P5ZjZOp_ZPxqB-VmLuJfAeM-D7hkTzIzHMGGj5ZcXPsKo5UX2tlNI-Jn0XH9NM9o0-9Db=w640-h360)](https://blogger.googleusercontent.com/img/a/AVvXsEj5Gl02_WXAzhvOvinbexfT9UwdaaVXKzdJd7fuOHKc6ENpMPGBYhCsljVoUHpMJcHEs-2_nE46pxJSGzt2sIcYesHk3XI_sbzg2l--nY9wbVB2dKP6yxYaMJ0P5ZjZOp_ZPxqB-VmLuJfAeM-D7hkTzIzHMGGj5ZcXPsKo5UX2tlNI-Jn0XH9NM9o0-9Db)
wiggle wiggle wiggle

#### **Replaced the store GUI placeholder with an actual asset.**

Long ago I've made a draft in Medibang for this GUI and, since then, my programmers decided to use that. So... I kinda forgot that was a thing. But now, we have a new and Improved GUI:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjaCPetT4qyHt_bcfIZyt9phFTaa3I0tSg57mVcfVDtwJMywErKUc3ZDxDAjBOOYcksHXtUCDT3rQ7DTDwl9SgkShmIbxH9eVzDrZvLsf3ZyZr26ubkwSF2SClZ15D-LOnEefKTpDZ9v1jeKI1WTPPobTRi2lyyCUxgScKqh4ZDTlgvQuMw1XCCtCRe_GPm=w640-h360)](https://blogger.googleusercontent.com/img/a/AVvXsEjaCPetT4qyHt_bcfIZyt9phFTaa3I0tSg57mVcfVDtwJMywErKUc3ZDxDAjBOOYcksHXtUCDT3rQ7DTDwl9SgkShmIbxH9eVzDrZvLsf3ZyZr26ubkwSF2SClZ15D-LOnEefKTpDZ9v1jeKI1WTPPobTRi2lyyCUxgScKqh4ZDTlgvQuMw1XCCtCRe_GPm)
Ragout looks so cute in this one!

#### **Fixed a bug that caused a... Whack-a-mole minigame.**

I have NO IDEA.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjS0jNhgIgCyFWFdcJSlrFrs0JuPVJcsABirT1JgTpAsZqJB4r6OjsSNsgCBt9j3W4pDZ7syo6GZqC2PpEaM7EFzJ-AUepoIVgsPs_y_2JBqqS8mpoJRc_vl41Y-_tRaBmqjAVS9rJ6vtF01frQtLsWwgqBhcmyFuAcLfG-Wo8M6YXco6_ELRMkSaTNXyy_=w640-h324)](https://blogger.googleusercontent.com/img/a/AVvXsEjS0jNhgIgCyFWFdcJSlrFrs0JuPVJcsABirT1JgTpAsZqJB4r6OjsSNsgCBt9j3W4pDZ7syo6GZqC2PpEaM7EFzJ-AUepoIVgsPs_y_2JBqqS8mpoJRc_vl41Y-_tRaBmqjAVS9rJ6vtF01frQtLsWwgqBhcmyFuAcLfG-Wo8M6YXco6_ELRMkSaTNXyy_)
There's that…

Phew… I can't believe it. We finished a game… WE FINISHED A GAME! And we did it before GTA VI!

Obviously, this is not the end for Room Makers. We already planned the next steps after its release. In fact, we have a whole roadmap related to the next few updates it will receive.

But for now our attention will return almost exclusively to Farmoxel. We have new members to train and a lot of work to do. This is not the end but just a huge beginning.

Thank you very much for following the development of Room Makers and we hope you are there for our next projects.

**Bye! Have a great time!**
