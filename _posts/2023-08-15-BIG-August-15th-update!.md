The past three monts were very important for our team, since we used them to reorgnize the development and to rework mechanics that were flawed and caused performance issues. By reworking these mechanics, many new bugs showed up, and we didn't want to make a blog about a totally glitched update. 

  
While working on those reworks and bug fixing, new assets and animations were created for the game, so adding and testing them was added to our tasks. Also, since the team was divided between fixing bugs and adding new things, these three months gave us time to add meaningful features for the game.  
After all, we ended up with the biggest bullet-point list of chages yet! So why don't you read it?:

- _Replaced some flawed models._
- _Replaced all of the strawberry plant and fruit's models._
- _Updated several textures to fit more the final game's art style._
- _Now you can harvest in area._
- _Added a water bucket._
- _You can now water crops._
- _When watered, dirt will change its color._
- _Added random rotation when planting crops._
- _Changed bed's placeholder model to the final one_
- _Added a fully modeled room scene! (Will add furniture in the future)_
- _Finished the node-based Dialogue System, the only thing remaining is to make it usable in-game_
- _Changed GridGhost's color and texture_
- _Now GridGhost turns red while hovering over a tree._
- _Now bushes drop their fruits on the ground when they are harvested._
- _Now trees drop their fruits on the ground when they are harvested._
- _Added some dev commands:_

    - SetAreaHarvestLevel: In the final game, you will be able to level up your abilities, as of now, the skill tree is your parents in disguise, so, we need this to test out the feature.
    - GivePants: Your character is naked, sorry to give the news like this.
    - GiveShirt: Actually, both of these commands give the player an expansion of the inventoryand, in the final game, they will be some sort of clothing item you'll have to buy.
    - imsleepy: Speeds up time until you can sleep.

- _Modified commands:_

    - HurryPotter now also makes dirt switch to "Testing" mode, making it so you don't need water them while it's active.

- _Added the ability to move the selected hotbar with the upper triggers of a gamepad._  
- _Added the ability to look around with a gamepad (Thanks to the remade controller)._  
- _Now you can hold to plow and plant!_  
- _Added an ability hotbar, now you have to hold CTRL and scroll in the eleventh slot to change the tool you're using, instead of picking it up from the ground, and wasting precious crop-related space._  
- _Blocked the hotbar scroll for a couple of seconds after moving an object with telekinesis to avoid janky controls._

- _Backend changes:_

    - Split Dirt in the Dirt class and DirtHarvest class
    - Energy variables now are Static
    - TimeManager variables now are Static
    - Added base class for tubers, trees, bushes.
    - Apples and strawberry bushes were refactorized.
    - A pooling system was added for dirt.
    - Changed Energy's inner-workings.
    - Changed TimeManager's inner-working, making crop's growth non-update-dependent.
    - Improved greatly most of Crop's Growth scripts.
    - Added a variable for ToolItemData to know its own energy usage.
    - Completely remade player's controller.
    - Added a new inventory system that will allow us to expand it in the future.
    - Remade GameInput's script to not depend on an object in scene, making it just a class to be called/accessed by other scripts.
    - Lots of backend stuff regarding bushes and trees.

- _Fixed bug that caused area harvest to harvest different kinds of crops._  
- _Fixed bug that caused the GridGhost to clip over an already plowed dirt._  
- _Fixed Carrot's explosion._  
- _Fixed bug that caused dirt models to be invisible on a playable build._  
- _Fixed Hotbar's Slot width and height._  
- _Fixed regrow and strawberry's growth to make it wait a while before instantiating the fruits._  
- _Fixed bug that caused the scroll wheel to not function after buying something._  
- _Fixed a bug that allowed players to plow in the same place where there is a tree._  
- _Fixed tree's GridGhost._  
- _Fixed trees (Yes, we broke them.)_  
- _Fixed trees (Yes, **again.**)_  
- _Fixed tree's interaction. **(AGAIN)**_  
- _Fixed bug where the character's camera will malfunction after using the debug noclip command. Our tester called it "Drunk Camera"._  
- _Fixed Wet Dirt Model._  
- _Fixed an error that caused game's input to stop working completely._
- _Fixed lots of bugs related to changing the character controller to a new one._  
- _Removed Herobrine._

**And now let's go to our tradition of reading the highlights of this build!**

#### **Replaced some flawed models.**

Since the beggining of the development of this game, we have been transitioning between many different 3D modeling softwares. First we tried MagicaVoxel, but, even tho it is a very good program to make renders, the models are not very optimized and there is nothing the user can do about it; Then we tried Blender, but faced many issues related to UV mapping planes and such; After that we tried BlockBench, but the models in that software are meant for Minecraft, so the size of the voxel was very different from the one we use in the game, which will imply a lot of resizing nobody wanted to go through. In the end, we finally found the perfect software, which was, **drumroll please**... Blender.  

  

Yeah, we went back to Blender, since we learn a lot of new things to make our job way easier. It is not the perfect software, in fact it is FULL of flaws, but at least we caan find a way to fix them and not just watch them happen like we did with MV.  
  
With all that said, look how funny it looked when I remade an old MV model:

  

#### **Replaced all of the strawberry plant and fruit's models.**

The old strawberry plant model was made with MagicaVoxel, and it was limited by it, which made it look... weird:

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgvSRkHymsNsve4iZE4dIm-I5ZJ_vYxQROceIJ-ENsr2Y0aKD3ZC8b4D6Zk4WwgSNcpikGt8_r2CYFeLi3d9aYL_bjWFzJ24VCJmenhloFdEM_9Stt41wZ4oAtBbUZbtPz0yk-26wGtrfHhfJM7gMxY0WK4lBjWzFlYEQ7R1UrbotkLWGcmMeWneeZbKVnC=w640-h197)](https://blogger.googleusercontent.com/img/a/AVvXsEgvSRkHymsNsve4iZE4dIm-I5ZJ_vYxQROceIJ-ENsr2Y0aKD3ZC8b4D6Zk4WwgSNcpikGt8_r2CYFeLi3d9aYL_bjWFzJ24VCJmenhloFdEM_9Stt41wZ4oAtBbUZbtPz0yk-26wGtrfHhfJM7gMxY0WK4lBjWzFlYEQ7R1UrbotkLWGcmMeWneeZbKVnC)

  

Now, with a better understanding of the software and the style we are aiming for, this is the final result:

  

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjGkeifoZPQS7mdo1FNODccar-10MUja_lMm1dE21oBl7lW5KZlZLLVxp-VkeRKMix9npN7zoacSrSQYKhBDXGQYF6801joFYp034zmUAwxjz7LoWjWKKDucJ2F6QOTEzjEC56aInImbAAubPxc4k41VjuXKDO6U4JcVvp-L3Gns15V5UvjASuhiGcvVohb=w640-h196)](https://blogger.googleusercontent.com/img/a/AVvXsEjGkeifoZPQS7mdo1FNODccar-10MUja_lMm1dE21oBl7lW5KZlZLLVxp-VkeRKMix9npN7zoacSrSQYKhBDXGQYF6801joFYp034zmUAwxjz7LoWjWKKDucJ2F6QOTEzjEC56aInImbAAubPxc4k41VjuXKDO6U4JcVvp-L3Gns15V5UvjASuhiGcvVohb)

  
There was a HUGE improvement and I love it!

#### Updated several textures to fit more the final game's art style.

The old colors looked... bland and boring. Soooo, in a total sane state of mind I decided to grab every single texture that was in the game and reworked them all :D  
...

...

Don't judge me, my mother already does.  
  
Here you can see a side by side of the old and new carrot texture as an example:  
  

![](https://blogger.googleusercontent.com/img/a/AVvXsEjZLPza9JXfYKpZguMNXCh35QLipE5-aezsKWbKuS3geugzUs2k4GMmT60Njxvu3MueFhLoycmJqgsjyAMpkx1Na1Z_JlbMjG8rHWDL6dMquMLbhOd640xUHnkn6cQG290-vBsOruRYHItqdo0V1X7XBq-U3aoz111JGoJrY6O_Cwy0_xgAaAMh2nxpm59x)[![](https://blogger.googleusercontent.com/img/a/AVvXsEgUhgmzm-WUlKwCLDlBhNXYjEGK-Ab9-UK_DRoLk0FzVySapZkFSlWZeOEDWtvk8lzj8wNBn5hKEEAsW1eLZXsSToziSU4CruY_Sq42eZawXNXndX5BRD0cY0wcub8X7WMBPJt_6cpNLYE6BzHI_AP7Sfz2GkRVYOI9occygS3na_nA9Q0qC-eclxGl52Db)](https://blogger.googleusercontent.com/img/a/AVvXsEgUhgmzm-WUlKwCLDlBhNXYjEGK-Ab9-UK_DRoLk0FzVySapZkFSlWZeOEDWtvk8lzj8wNBn5hKEEAsW1eLZXsSToziSU4CruY_Sq42eZawXNXndX5BRD0cY0wcub8X7WMBPJt_6cpNLYE6BzHI_AP7Sfz2GkRVYOI9occygS3na_nA9Q0qC-eclxGl52Db)

  

#### **Now you can harvest in area.  
  
**

Back in the [About the game](https://farteamdev.blogspot.com/2022/05/about-game.html) blog, I mentioned that an important feature would be a light version of a skill tree. One of the skills that you would be able to learn and level up would be the ability to harvest crops in area. We finally received the animations to work on it so it is done!

  

  
As of now, the player can only access this ability through debug commands since the skill tree and the learning feature are not in the game just yet. But it is an incredible beggining!

#### **Added a water bucket. You can now water crops. & When watered, dirt will change its color.**

Back in the [November 1st: The Hoe Update!](https://farteamdev.blogspot.com/2022/11/november-1st-hoe-update.html) we added the first tool to the game, and now we finally have the second one! Take a look:

  

  

Seedless to nay, the bucket's model (As well as the hoe's model) is just a placeholder. In the future it will have it's own model and animation to water the plants. ALSO, we are planning to add watering in area!  

#### **Changed bed's placeholder model to the final one. ****Added a fully modeled room scene! **

During these three monts, our 3D modeler (hehe me) had enough time to model the protagonist's whole bedroom interior!  And even a bed model (Since we were using a placeholder 'till now). As of now, both models are in the farm scene since we don't have a proper save/load system between scenes, but in the future it'll have it's very own scene.

  

|     |
| --- |
| [![](https://blogger.googleusercontent.com/img/a/AVvXsEim0sV6_GUxPRfY1JpkU-XKmZRVLZ5PZlpaAXSLYOacAHGP3icTyFYIyDIq84s-5tYPHZNY_e39CeH1rsM3dkPWxSpWsn34mnpZMT3acx6FS38MsUOMXJbiSbpoCh_b9OnEwrEg7Yl6btv6FgitADo0zD-XEYWmcQ4dJ8RvksS9RQgnOaqUS5X05PoP0v-e=w640-h360)](https://blogger.googleusercontent.com/img/a/AVvXsEim0sV6_GUxPRfY1JpkU-XKmZRVLZ5PZlpaAXSLYOacAHGP3icTyFYIyDIq84s-5tYPHZNY_e39CeH1rsM3dkPWxSpWsn34mnpZMT3acx6FS38MsUOMXJbiSbpoCh_b9OnEwrEg7Yl6btv6FgitADo0zD-XEYWmcQ4dJ8RvksS9RQgnOaqUS5X05PoP0v-e) |
| Please ignore the placeholder hand ;-; |

  
It looks really cute! And it feels really good to have our on models in the game!

#### Fixed bug where the character's camera will malfunction after using the debug noclip command. Our tester called it "Drunk Camera".

Well... ugh... just look at it.

  

  

Yeah...  
  

Anyway, that should be it. As a last note, we have a new 3D animator in our team! He is Germán Lambaré ([**Instagram**](https://www.instagram.com/german_l_c_/)) who made it way easier for us to work on the game~

  

See you in the next update, which hopefully won't take three full monts to come.

  

**Bye! Have a great time!**