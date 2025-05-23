---
layout: post
title: "We Took Room Makers to a Festival!"
date: 2024-10-01
project: roommakers
tags: [Event]
---

**TOP NOTE: Since this festival took place in Argentina, the post will be in Spanish. But worry not! For an English version scroll down past a duck picture.**

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhnQHeUHblFNywlL6HbN06W-XmSyF4YDqwyvGazEVaLowCqMoodmse05DUHd-l6_nTJjz9IE6kk-vLkmSEjR8hkdVm3Yn7VxD2_goY8nuCSuEI1RmdzJEh1W7ZsmY70TimlOKVr8wRTxbCxUj2nE1XM-xm7aqiaJYbUFurRsOVu-X4VplLR-phTFDUQOoUf=w640-h262)](https://blogger.googleusercontent.com/img/a/AVvXsEhnQHeUHblFNywlL6HbN06W-XmSyF4YDqwyvGazEVaLowCqMoodmse05DUHd-l6_nTJjz9IE6kk-vLkmSEjR8hkdVm3Yn7VxD2_goY8nuCSuEI1RmdzJEh1W7ZsmY70TimlOKVr8wRTxbCxUj2nE1XM-xm7aqiaJYbUFurRsOVu-X4VplLR-phTFDUQOoUf)

  
Ya hablamos de Room Makers en el pasado, pero ante la posibilidad de nuevos lectores, no está de más contarles de nuevo de qué trata;

Room Makers es un juego arcade de estética Game Boy en el cual el protagonista deberá gestionar el espacio de las habitaciones de las que dispone mientras recibe nuevos muebles periódicamente. Algunos de estos muebles pueden combinarse para hacer combos, y es trabajo del jugador ir probando las diferentes combinaciones posibles. 

Colocar muebles da puntos, pero hacer combos ¡Da aún más puntos! Con estos, el jugador puede ir desbloqueando nuevas habitaciones que se generan al azar seleccionadas de un amplio catálogo predefinido, que juega con diferentes formas y obstáculos. 

El objetivo del juego es hacer tantos puntos cuanto sea posible antes de quedarte sin tiempo o sin espacio.

#### El evento.

Hace un tiempo nuestro equipo de desarrollo sufrió un percance. Nada fuera de lo común, le ocurre a todos los equipos tarde o temprano y casi nunca significa el fin del mundo. Pero eso no significa que sea sencillo evitar la frustración que deja. Somos humanos. 

Una vez superada la situación, como equipo nos dimos cuenta de que era hora de comenzar a trabajar nuestra imagen pública. Si bien disponemos de este devlog y en Twitter prácticamente en estado de abandono [**\[Sígannos\]**](https://twitter.com/FaRTeamStudio) , la realidad es que siempre fuimos relativamente reservados y, aunque en primera instancia era conveniente, comienza a ser un problema el no trabajar el networking. 

Fue entonces que nos enteramos de [FIJA](https://x.com/FIJA_vj), el Festival Independiente de Juegos Argentinos.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEi12D_IZg4k0tGwSpzROws9c0eRt4Xipt803dHpt6_uqRIgNHLwS5MdZzi_yTgbCRbPEP3rPvsPLvg3QZpYoM-5lEIFKhN-HWLW7YQEiewlQfrAK5kPjZ952Vj8i678m0luvR5igAyDboXtLyrWP1nOY0x-r8atgoQe2gyB7s_NAH3AoEgPRqr9PkbaGCRU=w640-h640)](https://blogger.googleusercontent.com/img/a/AVvXsEi12D_IZg4k0tGwSpzROws9c0eRt4Xipt803dHpt6_uqRIgNHLwS5MdZzi_yTgbCRbPEP3rPvsPLvg3QZpYoM-5lEIFKhN-HWLW7YQEiewlQfrAK5kPjZ952Vj8i678m0luvR5igAyDboXtLyrWP1nOY0x-r8atgoQe2gyB7s_NAH3AoEgPRqr9PkbaGCRU)

Y... bueno, nos anotamos, no tiene mucho más.

#### La DEMO.

Se conoce que nuestro proyecto principal es el Proyecto Farmoxel, aún sin nombre oficial (UPS), del cual hablamos [acá](https://farteamdev.blogspot.com/2022/05/about-game.html), [acá](https://farteamdev.blogspot.com/2022/05/features-that-are-already-partially-in.html) y [acá](https://farteamdev.blogspot.com/2024/01/more-characters.html). Sin embargo... no es cierto que esté lo suficientemente presentable como para llevarlo a un evento. Si queremos darnos a conocer, lo peor que podemos hacer es darle a probar a la gente una Dev Build con un loop jugable limitadísimo que no ofrece casi nada. Por lo que no podíamos llevar nuestra insignia.

Nuestra segunda opción, en ese caso, era Room Makers. Ya teníamos "prácticamente" una DEMO. Sólo faltaba pulirla un poco. Así que dedicamos una buena semana a trabajar en el juego. Sin muchos cambios extraordinarios.

Lo primero fue probarlo a fondo para encontrar cuanto bug sea posible. Para esto hicimos un stream donde impulsamos a los viewers a probar el juego **[\[Shameless Plug\]](https://www.twitch.tv/sai_it_again)** lo cual fue un éxito. Además, hicimos un mínimo de balanceo, aunque el juego necesita bastante más y es algo de lo que vamos a hablar más adelante. Por último, nos dimos cuenta de que mucha gente se quedaba atascada en el tutorial porque se lo saltaba. No podemos culpar al jugador de esto, así que se nos ocurrió una idea; si el jugador se quedaba atascado, cada 30s el juego le recordaría qué es lo que tiene que hacer para avanzar... Y ese fue nuestro más grande error.

#### El bug.

!["Sarcastic error message from Room Makers game: Veo que me ignoraste. Pon tu TV encima de la mesa."](https://blogger.googleusercontent.com/img/a/AVvXsEg3pYeNik9SbjSIxDePZgX2FkRAqlUp5ZAHWxxZwU3zQh_YukmfT5SE3TdTj-DfWciiKaZ1bFtf2z8aWTRuiUH2iN_2hYydo4M_h_l4s15aoKnGjuVXQI26u_qimxtLXwGp-FldYBl7pbU64YkYNTl4UDpePqQF7l4PtcQBB0Zzd1eccp_kSoEAULP67OBL)
*"Veo que me ignoraste. Pon tu TV encima de la mesa."*

Ese sarcástico cartel, que luce tan inocente, nos causó muchos problemas. 

La verdad sea dicha, lo agregamos rápidamente a último minuto la noche anterior al evento y ni siquiera lo probamos. No se nos ocurrió que algo tan sencillo pudiese causar ningún tipo de problema.

Si el cartel se presenta mientras el jugador está en modo construcción, el juego se bloquea y se vuelve injugable, por lo que hay que reiniciar. Si, a efectos prácticos no es nada grave, le das al F5 y ya está. Pero que un bug TAN sencillo de detectar sea de las primeras cosas con las que el jugador se encuentra no es muy lindo. A ver, no creo que a nadie le haya importado en absoluto, pero a mi me comía la cabeza. De hecho los conté, de toda la gente que jugó, a 17 les salió el bug y tuve que reiniciarles el juego.

#### Publicidad agresiva

La industria del juego es una selva salvaje donde es comer o ser comido... excepto en el ámbito indie. Sabíamos que, por muy mal que nuestro juego luzca, la gente iba a poner buena cara a la hora de jugarlo porque las buenas intenciones jamás faltan en este ámbito. Además, si hubiésemos llevado Farmoxel, hubiéramos preparado más merch; remeras del equipo, posters, stickers, pines. Tratándose de Room Makers, hicimos lo mínimo indispensable, un ploteo en hoja A5 y un QR para jugarlo en móvil... "UN" QR.

![El ploteo de Room Makers en el evento FIJA](https://blogger.googleusercontent.com/img/a/AVvXsEikuwKbUS1tPMZZzugQL8zoKOxAoTab1RKawfuAPKKil_2lYchB6Aua9vazayHKqYEKpOrSy7f9vTEJ_7aEEf1yzD9eXg1uvW20KHa7PPNAKRhclHqc0p-l8ZJxQY4Nj7TuehsAl_ch5AL6OHP31R58oQs-5BO1kBVEdZ2ts6z9vBiqtVfA4yE4zR9fAZT9=w640-h442)
*El ploteo quedó rebonito!*

  
El tema es que no podés mandar a hacer un QR en una hoja gigante, por lo que nos mandaron... quince QR. Pusimos un QR bajo el ploteo, otro sobre la mesa, incluso regalamos algunos a las personas más interesadas en el juego, pero sobraban MUCHOS. Así que yo \[Lead Developer\] tomé a los tres programadores, les pegué un QR a cada uno y los mandé a explorar el evento, en busca de gente interesada en jugar el juego.

Funcionó.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhA3HkRYH2eXZ7i9fhfQv-Izzuyx4-WYkW3oElja43UzdGSXpT0TlRfMg-0HSUNkMYMmxDwPfTF20jYedVGr_0KEEHoxL506hsUfiJua-gwIZtNI9JR5TiqQHcxyLOaviYOwyoY_R3TVxOpW68cU0_S_qJcBnlGq6Ptj3LsWkdKC1SQTtSq4LfpOM1yXQ9y=w640-h258)](https://blogger.googleusercontent.com/img/a/AVvXsEhA3HkRYH2eXZ7i9fhfQv-Izzuyx4-WYkW3oElja43UzdGSXpT0TlRfMg-0HSUNkMYMmxDwPfTF20jYedVGr_0KEEHoxL506hsUfiJua-gwIZtNI9JR5TiqQHcxyLOaviYOwyoY_R3TVxOpW68cU0_S_qJcBnlGq6Ptj3LsWkdKC1SQTtSq4LfpOM1yXQ9y)

  

La campaña fue tan agresiva que, a donde sea que mirases, había gente en su teléfono y, casi siempre, eso significaba que estaban jugando a nuestro juego.

Al final del día revisamos las analíticas y, sin contar a las personas que jugaron en nuestro stand, que no fueron pocas, al rededor de DOSCIENTAS PERSONAS probaron Room Makers!

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjPzp8S0_gQbmdTSgrGXZjvliFdJRJg_hffPyIrkpyqs6G3y8h6zfMJVDi5Cq3UAFNIOrbN3eDiPH1V1kEbjOx22XyZtbzMMqedlIF0b3zJD4_-D64wl76n3rET9JPcuCdZazNrMPsKlRo6BVZRi1n6OgWxcrMLQ3CCmrAHp1LBxanrm1R8lCO_4gBg9xCf=w640-h180)](https://blogger.googleusercontent.com/img/a/AVvXsEjPzp8S0_gQbmdTSgrGXZjvliFdJRJg_hffPyIrkpyqs6G3y8h6zfMJVDi5Cq3UAFNIOrbN3eDiPH1V1kEbjOx22XyZtbzMMqedlIF0b3zJD4_-D64wl76n3rET9JPcuCdZazNrMPsKlRo6BVZRi1n6OgWxcrMLQ3CCmrAHp1LBxanrm1R8lCO_4gBg9xCf)

  
Lamento mucho si alguno de ustedes desarrolló alguna especie de EPT luego de que mis programadores lo acosen por todo el evento pidiéndoles que les escaneen la espalda, pero entiendan que fue por un bien mayor :D.

#### La conclusión.

El juego logró abarcar un público muy amplio, tanto adultos como jóvenes, que era este último grupo con el que más dudas teníamos teniendo en cuenta las últimas tendencias de la industria, así que eso fue una sorpresa agradable.

Además descubrimos que hay tres tipos de jugadores: 1. Los que simplemente sueltan los muebles donde encajen, 2. Los que usan una habitación como almacén y van depositando lo que no les sirve mientras decoran las demás habitaciones a gusto, y 3. Los más tryhards que no desperdician un sólo mueble pero intentan que cada habitación quede perfectamente decorada.

Para estos dos últimos grupos es que tenemos en desarrollo dos features que pueden llegar a gustarles;

Por un lado, una vez el juego sea lanzado para móviles, va a constar con una galería, cuya función va a ser como la de una red social simple donde los jugadores van a poder compartir fotos de sus creaciones en incluso reaccionar a ellas.

Por el otro, diseñamos una feature a la que llamamos "sistema de etiquetado". Es sencilla, cada mueble tiene una categoría (ej.: el inodoro es de baño, el horno es de cocina, la cama es de cuarto, etc.) y, cuando se coloca el primer mueble en una habitación, determina a esta con la categoría del mueble. Con esto, el jugador recibiría puntos extra si coloca muebles en habitaciones que coincidan con su etiqueta, sistema que impulsa a la decoración coherente.

También recibimos bastante feedback relacionado a una fuente de texto que es difícil de leer, además de una paleta de colores que resultaba molesta a la vista. Algunos nos recomendaron diferentes muebles y combos que podíamos implementar que, la verdad, eran muy buenas ideas.

Siendo MUY sincero, no le tenía nada de fe a esto. Hicimos todo a último minuto y llevamos un juego por el que no dábamos ni medio centavo, sin embargo parece que capturó un público amplio. Por esto mismo queremos agradecerles por todo el apoyo que recibió y está recibiendo el equipo, y esperamos poder seguir creando cosas que gusten tanto.

Si quieren probar el juego, pueden hacerlo [**ACÁ.**](https://justneki.com/RoomMakersWeb/)

Bye! Have a... ¿Eso es un pato?

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhXTglpW2pLGKNhaBtksGWqpXwFEv2H4FFNGGgJEqKfE0cJwHM7qJZYsYeI24J-D5q6zdBKG-P8GzvVfXgMGF8mcnmnCXNAsv85IDfksvKq6QkoKoAbj5zUfo1Yv69SkWbAEvt8lCpAPqTJdV4SUVUqmEhCu9md13PNv3iLRIlJAbspJ2hWF4u-KbK_fZck)](https://blogger.googleusercontent.com/img/a/AVvXsEhXTglpW2pLGKNhaBtksGWqpXwFEv2H4FFNGGgJEqKfE0cJwHM7qJZYsYeI24J-D5q6zdBKG-P8GzvVfXgMGF8mcnmnCXNAsv85IDfksvKq6QkoKoAbj5zUfo1Yv69SkWbAEvt8lCpAPqTJdV4SUVUqmEhCu9md13PNv3iLRIlJAbspJ2hWF4u-KbK_fZck)

### ENGLISH VERSION:

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgD7PjnyxafcTnuJsgBxfeW28niBOIJU_GQp6SuA5D8wM2WwX4VLMxJ4fdRuW5DgxDyV2wxK2pxqBsvnuxk0vZUAMqyx5rwrDDKIYpmk64T4JjKgO5tnBwEAANZMQ3F00cW7wNABpO3MUrW3ENMOH7cSqJfy0PGCX-suUm9bZiDKOzFJYzteLSGyGN4mNNa=w640-h262)](https://blogger.googleusercontent.com/img/a/AVvXsEgD7PjnyxafcTnuJsgBxfeW28niBOIJU_GQp6SuA5D8wM2WwX4VLMxJ4fdRuW5DgxDyV2wxK2pxqBsvnuxk0vZUAMqyx5rwrDDKIYpmk64T4JjKgO5tnBwEAANZMQ3F00cW7wNABpO3MUrW3ENMOH7cSqJfy0PGCX-suUm9bZiDKOzFJYzteLSGyGN4mNNa)

  
We’ve talked about Room Makers in the past, but considering the possibility of new readers, it’s worth explaining again what it’s all about.

Room Makers is an arcade game with a Game Boy aesthetic where the protagonist must manage the space in the rooms they have while receiving new furniture periodically. Some of these pieces of furniture can be combined to create combos, and it’s up to the player to experiment with different possible combinations.

Placing furniture earns points, but making combos gives even more points! With these points, the player can unlock new randomly generated rooms selected from a vast predefined catalog, playing with different shapes and obstacles.

The goal of the game is to score as many points as possible before running out of time or space.

#### **The Event**

A while back, our development team hit a snag. Nothing out of the ordinary—it happens to every team sooner or later, and it almost never means the end of the world. But that doesn’t make it easy to shake off the frustration it leaves behind. We’re only human, after all.

Once we got through the situation, we realized as a team that it was time to start working on our public image. While we have this devlog and our Twitter, which is practically abandoned at this point [**\[Follow us\]**](https://twitter.com/FaRTeamStudio), the reality is that we've always been somewhat reserved. Though this was convenient at first, it's starting to become a problem that we’re not investing in networking.

That’s when we found out about [FIJA](https://x.com/FIJA_vj), the Argentine Independent Games Festival.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiD7lvmTdxFANC36xhPn-67xwTmvDiqBQxz5Sm8cL9WRSjV1hYKWpztOTIwQoyccfFD09UrkBphpMC9CN3pcR41KoBaJ8dVjF0fB0afb-12y0PWUMm7H7SLMf4Pabxn3LxymGFrm3Y9e6FwBXLJtJ1twSWPw5QxSz9Mitc3jfFmrpoW1FBo4wMq7T8xA8Pb=w640-h640)](https://blogger.googleusercontent.com/img/a/AVvXsEiD7lvmTdxFANC36xhPn-67xwTmvDiqBQxz5Sm8cL9WRSjV1hYKWpztOTIwQoyccfFD09UrkBphpMC9CN3pcR41KoBaJ8dVjF0fB0afb-12y0PWUMm7H7SLMf4Pabxn3LxymGFrm3Y9e6FwBXLJtJ1twSWPw5QxSz9Mitc3jfFmrpoW1FBo4wMq7T8xA8Pb)

Well... we signed up. There's not much more to it.

#### **The DEMO**

As many of you know, our main project is Project Farmoxel, still without an official name (oops), which we've talked about [here](https://farteamdev.blogspot.com/2022/05/about-game.html), [here](https://farteamdev.blogspot.com/2022/05/features-that-are-already-partially-in.html), and [here](https://farteamdev.blogspot.com/2024/01/more-characters.html). However... it’s not exactly in a presentable state to showcase at an event. If we want to make a good first impression, the worst thing we could do is give people a dev build with a severely limited gameplay loop that offers almost nothing. So, we couldn’t bring our flagship project.

Our second option, in that case, was Room Makers. We already had “practically” a DEMO. It just needed a bit of polishing. So, we dedicated a solid week to working on the game. Nothing too extraordinary.

The first thing we did was test it thoroughly to find as many bugs as possible. For this, we held a stream encouraging viewers to try out the game **[\[Shameless Plug\]](https://www.twitch.tv/sai_it_again)**, and it was a success. Additionally, we made some minor balancing adjustments, although the game needs a lot more, which we’ll talk about later. Finally, we noticed that many people were getting stuck in the tutorial because they skipped it. We can’t blame players for that, so we came up with an idea: if the player got stuck, every 30 seconds the game would remind them of what they needed to do to progress... And that was our biggest mistake.

#### The bug.

!["Sarcastic error message from Room Makers game: I've noticed you ignored me. Put the TV over the table."](https://blogger.googleusercontent.com/img/a/AVvXsEjHIW3RB5ywBjEW-bcrTTx5VuAWk7Sd-nVNp2h8wXpoGQpll_6KlSy9JOnuclY08qwH5ueuTj65NLy0sOiRRM5vjG2UAdIen4CP8KibpejQwc0a8-DH2SMBsABMfnBOottdb7gA1RzLI98CKvl5FQkWC7GmG3GHuKYFbvJQ_OEONXQpE8ns1cIde_sjsjFx=w640-h504)
*"I've noticed you ignored me. Put the TV over the table."*

That seemingly innocent, sarcastic pop-up caused us a lot of trouble.

Truth be told, we added it hastily at the last minute the night before the event and didn’t even test it. We didn’t think something so simple could cause any issues at all.

If the pop-up appears while the player is in build mode, the game freezes and becomes unplayable, forcing a restart. Yes, practically speaking, it's not a huge deal—you just hit F5, and that’s it. But having such an obvious bug be one of the first things players encounter? Not great. Look, I don’t think anyone really cared, but it was driving me crazy. In fact, I kept count—out of everyone who played, 17 people hit the bug, and I had to restart the game for them.

#### **Aggressive Advertising**

The game industry is a ruthless jungle where it’s eat or be eaten... except in the indie scene. We knew that, no matter how rough our game looked, people would still be kind and put on a good face while playing it because good intentions are never in short supply in this community. Also, if we had brought Farmoxel, we would’ve prepped more merch—team t-shirts, posters, stickers, pins. But for Room Makers, we did the bare minimum: an A5 printed poster and a QR code so people could play it on their phones... "ONE" QR code.

![The Room Makers poster for FIJA event](https://blogger.googleusercontent.com/img/a/AVvXsEh98S9VjxSeWnT9bx6gFRoUBWKK6y2ff6slvUE25wzMVOC5EgmL3RKVG6_emDE_wJMYtcSOXNYXO2-WfIuWE0KY5eym_QGu51kBr-wWXtlFOliCL5N-3kGWbxsX0Xbe0vvMK0B5xXebPe0XGh5fxEQ1VUG3F8RBexSo_OZH5XdutGaDZrjWh0UIuTVZcIyb=w640-h442)
*The poster looks so cute!*

The thing is, you can’t just print one giant QR code, so they sent us... fifteen of them. We put one under the poster, another on the table, and even gave a few away to the people most interested in the game, but we still had a LOT left over. So, I \[Lead Developer\] grabbed the three programmers, slapped a QR code on each of them, and sent them out to explore the event, looking for people interested in playing the game.

It worked.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjxCkFqApL8RinWzz-cYsZ4mxkQiML6fjWK56hzqaAhLIm8BVJ3yPfIOEBMlsFNF6OavCDH5r4Hr8n3KpSubMChDkjpuWhrw-tnEt9biXryUQPhlAQRk7vy4yJiJChBwXgAQICcKwO5zh2UpTejvCGit6OrJhm_QdH0g83iP2o4doEBbcVku2PUpokIdXNP=w640-h258)](https://blogger.googleusercontent.com/img/a/AVvXsEjxCkFqApL8RinWzz-cYsZ4mxkQiML6fjWK56hzqaAhLIm8BVJ3yPfIOEBMlsFNF6OavCDH5r4Hr8n3KpSubMChDkjpuWhrw-tnEt9biXryUQPhlAQRk7vy4yJiJChBwXgAQICcKwO5zh2UpTejvCGit6OrJhm_QdH0g83iP2o4doEBbcVku2PUpokIdXNP)

  

Our campaign was so aggressive that, no matter where you looked, there were people on their phones, and almost every time, it meant they were playing our game.

At the end of the day, we checked the analytics, and excluding the people who played at our booth—which was quite a few—around TWO HUNDRED PEOPLE tried Room Makers!

[![](https://blogger.googleusercontent.com/img/a/AVvXsEh83s8_tLxDw4wqt6se8lc4kbNjoLBnHWEDMczAbP75Os2QMUn0RCv6ky2l92ZcD3Kv1MBHjQqeOrlV4SK0NTwdDv9f9LATl3IdFe5okFO1wZUn_RZTi21ucMrFsPADmNqppzlVk055hu4OVy4d_iGxmZYVIKkuJPgIfUq4ySjoYHaW9SgG1gLMv8nTfKnt=w640-h180)](https://blogger.googleusercontent.com/img/a/AVvXsEh83s8_tLxDw4wqt6se8lc4kbNjoLBnHWEDMczAbP75Os2QMUn0RCv6ky2l92ZcD3Kv1MBHjQqeOrlV4SK0NTwdDv9f9LATl3IdFe5okFO1wZUn_RZTi21ucMrFsPADmNqppzlVk055hu4OVy4d_iGxmZYVIKkuJPgIfUq4ySjoYHaW9SgG1gLMv8nTfKnt)

  

I deeply apologize if any of you developed PTSD after my programmers harassed you throughout the event, asking you to scan their backs, but please understand—it was all for a greater good.

#### **The Conclusion**

The game reached a very broad audience, from adults to younger players, and the latter group was the one we were most uncertain about, given the latest industry trends. So, that was a pleasant surprise.

We also discovered there are three types of players: 1. Those who simply drop furniture wherever it fits, 2. Those who use one room as storage and put aside pieces they don’t need while decorating the other rooms to their liking, and 3. The more hardcore players who don’t waste a single piece and try to make every room perfectly decorated.

For the last two groups, we’re working on two features that we think they’ll really enjoy.

First, once the game is released for mobile, it will include a gallery, functioning like a simple social network where players can share photos of their creations and even react to them.

Second, we’ve designed a feature called the "tagging system." It’s simple: each piece of furniture has a category (e.g., a toilet is for the bathroom, an oven is for the kitchen, a bed is for the bedroom, etc.), and when the first piece is placed in a room, it determines that room’s category. Players will receive bonus points for placing furniture that matches the room’s tag, encouraging coherent decoration.

We also received a lot of feedback about a font that was hard to read, as well as a color palette that strained the eyes. Some people suggested new furniture and combo ideas, which, honestly, were great suggestions.

To be VERY honest, I had zero faith in this. We threw everything together at the last minute and brought a game we didn’t have much confidence in, yet it seems to have captured a wide audience. Because of this, we want to thank you all for the incredible support the team has received, and we hope to keep creating things that you enjoy just as much.

If you wanna play the game, you may do so **[HERE.](https://justneki.com/RoomMakersWeb/)**

Bye! Have a great time!