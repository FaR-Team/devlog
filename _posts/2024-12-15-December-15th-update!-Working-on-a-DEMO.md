---
layout: post
title: "December 15th update! Working on a DEMO"
date: 2024-12-15
project: farmoxel
tags: [Devlog]
---

Last time we ever updated you about the state of our games was back in June 15th- _phew_ that was long ago. Worry not! I'm sure this may not be the first time I say this, but we are not gone. We've been dealing with some administrative issues **while** assisting to some events **while** working on The Farmoxel Project's DEMO. Yes, you've read that right. **DEMO.**

Yup, the game doesn't even have an official name yet (Despite what some of my teammates may say about it) and we're already working on a DEMO. There’s a saying in the industry: to predict how long something will take, estimate the time and then multiply it by two or three. This being said, I can't make promises, but we're planning to release a DEMO sometime between 2025 Q1, sooooo... until April 1st 2025 I'm not lying.

With all that said, let's read the huge bullet-point list of changes for both Farmoxel and Room Makers:

### FARMOXEL

*   The clock is not scene-dependant anymore
*   The bed no longer handles ending and starting the day; this is now managed by a SleepHandler. The bed only interacts with the SleepHandler and attempts to end the day, allowing the handler to always exist and be called from anywhere.
*   Adjusted all references to the bed to point to the SleepHandler (currently, the component is located in the GameManager).
*   The SleepHandler checks if it's 2 AM or 6 AM to sleep or wake up, using the functions FinishDay and StartDay. If it's 2 AM and you're already sleeping, it skips.
*   The bed had many references to components, objects, and dependencies; now, several of these are events triggered when sleeping or waking up.
*   Now the game saves after sleeping.
*   Cleaned up some debugging code.
*   Fixed the bug that caused carrots to duplicate when loading.
*   Fixed weird lines on shader when reloading the scene.
*   Fixed shader's shadows.
*   Fixed chest slots not showing.
*   Fixed chests duplicating on load.
*   Fixed sun misplacement when changing scenes.
*   Fixed a bug that caused you to not be able to plow when reloading scenes.
*   Fixed commands losing references.
*   Fixed a few issues with the ClockManager and several object references in the scene.
*   Fixed a bug that allowed you to leave items on blocked slots.
*   Fixed an error when teleporting from one scene to another.
*   Fixed a bug that caused the user to plant two trees at once.
*   Fixed the save and load of each scene's last datetime.
*   Changed player's starting gold amount.
*   **Added the farm map, consisting of a series of tiles and chunks.**
*   **Added a house model.**
*   **Added the new chest model plus its animations.**
*   **Added a selling stand only for the DEMO**
*   **Added Ragout. The stand needed Ragout.**
*   Added GameStateData, GameStateLoader, and GameStateSaver.
*   Added catching up when the player has slept for multiple days without going to the farm.
*   Added a command to delete the saves.
*   Added post-processing (Bloom, DoF).
*   Added stars at night time.
*   Added a functional skill tree, for now it's accessed with H.
*   **Added a (Demo-use-only) skill fruit**.
*   Added a new kind of item: Special.
*   Added soundClips to Items.
*   Added a debug menu.
*   Added global lighting to the water shader.
*   Added back the date to the clock.
*   Added a command for testers to export their logs and saves.
*   Added the ability to press F1 to toggle the UI.
*   Added the ability to press F2 to take a screenshot.
*   Reorganized some folders and added a new song (Placeholder).
*   Improved the bed 3D model
*   Improved the bedroom 3D model
*   Improved some aspects of the MusicManager so that when we use it properly, it works better, as well as the volume slider (I think it works better since it’s somewhat logarithmic, but I didn’t notice much difference lol).
*   Improved skill tree (Now it's actually tree-like), made it easier to set up.
*   Improved the lighting system.
*   Improved the shader to tint depending on the light.
*   Improved chest animation timing.
*   Improved the weather system, now each season has its own possible weathers.
*   Improved player location handling for scene transitions.
*   Improved player's gravity (They were defying it).  
    
*   Updated discord logging.
*   Remade part of the saveload system.
*   Remade the Options Menu's backend.
*   Remade the Outline's implementation, now it's tied to the shader.  
    

### ROOM MAKERS

*   Corrected doors price location.
*   Translated the game to spanish.
*   Improved the startup screen.
*   Startup parity.
*   Reduced the timer to half.
*   Added a reminder for players that don't read the tutorial.
*   Added a "Coming soon on google play" sign to the main menu.
*   Added flicking when there's only 30 seconds left in the timer.
*   Fixed the location of the combo popup.
*   Fixed a bug where the Coming soon sign would appear over the controls.
*   Fixed a bug where all the top items duplicated endlessly.
*   Fixed a bug where combo items would duplicate if done in rooms that aren't the main one.
*   Fixed a bug where the timer would become invisible when resetting it.
*   Fixed a bug where the combo star would not appear on items that already were part of a combo.
*   Fixed bug where you could use the same object multiple times in combos.
*   Fixed a bug mid-event, where the game would soft-lock if the player triggered the tutorial reminder while in edit mode.

Ah, I missed that! Now let's talk about the highlighted parts, shall we?

  

### **Added the farm map, consisting of a series of tiles and chunks.**

As we hinted in **[this blog post](https://blog.farteam.com.ar/2024/06/may-15th-update.html),** we've been working on a full tile set to build the map piece by piece, this way making it easier to load and unload huge chunks of terrain. This system went through tons of testing, some related to performance, buggy hitboxes, interaction, design and more. And now, we've got this:

  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5eR59QP1l2eM8WtGBx5JEyLbS5bR7T0GPCXHbq8JZV1EozItH-auHkBvGCPxmvyXAHhpjfpn5fnE4ydvgRPgBH9pSb-7P8THtY3anih0AvkIsqrEP5Y8r2t_1xkDRtCjTmZ6CpdImQY9Pgs4ZKmcbD57VzklqhUNhSKDEIFwse-mOGyk-0QjL_P7u6NXE/w640-h304/image.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5eR59QP1l2eM8WtGBx5JEyLbS5bR7T0GPCXHbq8JZV1EozItH-auHkBvGCPxmvyXAHhpjfpn5fnE4ydvgRPgBH9pSb-7P8THtY3anih0AvkIsqrEP5Y8r2t_1xkDRtCjTmZ6CpdImQY9Pgs4ZKmcbD57VzklqhUNhSKDEIFwse-mOGyk-0QjL_P7u6NXE/s1919/image.png)

  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAcM8LiDaQHraPr1fimLQLcsqsKHsCEzw5sNcv8ybaE3KNozsRZpZ1T1r7IVWVpIV_eYtNGklCmyrIqnnA8lx98iN2yXsAcBdqMLthlGfQb1_Kg0xX4Ik2dFZDNlCGYQu80RGjaIHuxurFiAvgVjblm2E-kxJim7gIidrphqLXUwAsxlTjPZconHeWb3Ru/w640-h306/as.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAcM8LiDaQHraPr1fimLQLcsqsKHsCEzw5sNcv8ybaE3KNozsRZpZ1T1r7IVWVpIV_eYtNGklCmyrIqnnA8lx98iN2yXsAcBdqMLthlGfQb1_Kg0xX4Ik2dFZDNlCGYQu80RGjaIHuxurFiAvgVjblm2E-kxJim7gIidrphqLXUwAsxlTjPZconHeWb3Ru/s1919/as.png)

  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPmV6TSNc4-bY4poWOw-7we2HtzOFnV7MFro2WdM7gZECUTYJgRNdBX15dBvLireZp5cvCMPcH9r7Gq04HC3pqkbRE7GeenzVHUtByHASwMNkAouNlS-m4KSnyoQtGDLjyQz-xWVFjyCZFXcwow51dnqX6XmQa7VT4c-AuOLzX9Vfq4nwWw1lp9oJaVQ9L/w640-h304/asdfghjhgfdsa.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPmV6TSNc4-bY4poWOw-7we2HtzOFnV7MFro2WdM7gZECUTYJgRNdBX15dBvLireZp5cvCMPcH9r7Gq04HC3pqkbRE7GeenzVHUtByHASwMNkAouNlS-m4KSnyoQtGDLjyQz-xWVFjyCZFXcwow51dnqX6XmQa7VT4c-AuOLzX9Vfq4nwWw1lp9oJaVQ9L/s1917/asdfghjhgfdsa.png)

  

If it still feels empty it's because… it is, indeed, empty. More decoration such as bushes, trees and background plains are planed to be added in the future.

  

It is not **that** empty though…

### **Added a house model.**

For months now, the house was a weird PNG with a teleport spot at the front door. But now it is a weird OBJ with a teleport spot at the front door! :D

  

Check it out!

  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIX6M-Z1FMlqWew0qkKR91AeM3Ga-Voxw1ysAoUg5_lXihYsL5l_sV8-DI2cQHbM5Kz1lKdHtI32yR4uMBytchGR5PwKWWliMwHrxOYs7yB8RRopNkRnIggHxduRZYHRmfGkxtSC9mj9mlE_TINn9xQbRhMFLviQoVQr50xlgCqQgRRzv0103qfsQZGKM8/w640-h306/image.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIX6M-Z1FMlqWew0qkKR91AeM3Ga-Voxw1ysAoUg5_lXihYsL5l_sV8-DI2cQHbM5Kz1lKdHtI32yR4uMBytchGR5PwKWWliMwHrxOYs7yB8RRopNkRnIggHxduRZYHRmfGkxtSC9mj9mlE_TINn9xQbRhMFLviQoVQr50xlgCqQgRRzv0103qfsQZGKM8/s1918/image.png)

  

Isn't it cute!? I'm just so proud of how it looks, cause I've never made something like this before, and in such a timely manner. It only took me around a week and a half to make, which may be a good omen for the future of this game's development.

  

BUT that is not the only model I've made pretty fast…

### **Added the new chest model plus its animations.**

After a long time using a placeholder chest that I don't even remember where it came from, we finally have our own chest model. In fact, we've had it for a while now,  but we wanted to add it once we had the needed animations for it. Our animator was, pretty fast in fact, we just forgot to ask him to do it… yikes.

  

Anyway, look at it!  
  

  

As of now, the chest will be in the middle of the farm. In the future, it ill be inside a storage house once the model is done.

### **Added a selling stand only for the DEMO and** **Added Ragout. The stand needed Ragout.**

Remember Ragout? We talked about him in [**this devlog**](https://blog.farteam.com.ar/2023/09/character-design-on-farmoxel-project.html). In the full game, Ragout will serve as the cleric for most of the stores. However, in the DEMO, only a single shop—"The Store"—will be available.

  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMFJUC8uwMwpavGe8R92LbX7w6nCxyXbv2erT3ChXow0nTDATAVSKFkpUtH1L9zHYNTN7DVRFJ_GHW0vu2tVlWGvul12RsdoVqWji5ruVhpR_nEjNM0LVrRIKole6pHcP5Nv0ZKQTvven68SPJxU_bYJE1Vritleq5wy3m67TDizRPbwe0sVKgAMG_Md3V/w640-h304/image.webp)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMFJUC8uwMwpavGe8R92LbX7w6nCxyXbv2erT3ChXow0nTDATAVSKFkpUtH1L9zHYNTN7DVRFJ_GHW0vu2tVlWGvul12RsdoVqWji5ruVhpR_nEjNM0LVrRIKole6pHcP5Nv0ZKQTvven68SPJxU_bYJE1Vritleq5wy3m67TDizRPbwe0sVKgAMG_Md3V/s1439/image.webp)

  

Look! He even painted the sign himself!   
  
Since in the DEMO there is only one scene, you won't be able to go to the town. Worry not! Ragout, being the business man he is, brought his store to you. He is so clever, OMG.

#### **Added a (Demo-use-only) skill fruit**.

In the final game, you'll be able to train Marco to gain new abilities though the skill tree once you reach certain amount of XP... None of that will be on the DEMO cause it will require a whole new scene. So, as a solution, we added the Demo Fruit, a fruit that gives one level to use on the skill tree. Ragout will sell it on his store (Clever guy, huh?).

  

Right now the fruit uses... a model from a different game. So showing it is VERY illegal… ANYWAY

That's everything we have to say about the development of our games. It's been two great years, and I can't believe how close we are to finally post a DEMO.   

In the near future, we'll add two music tracks on the game. We also have two new core features on the works and various 3D models that will spice the environment.  
Everything is coming together. 

  

**Bye! Have a great time!**