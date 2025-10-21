*HAIII OOMFS!!* This will be the project where I simulate realistic tissue damage for SH recov, education, fun, or just whatever you want! This place is a GitHub repoisitory to let you guys see my progress.

## Regarding this repository

My commit messages probably won't be very descriptive in these early stages!! But if anyone wants to make suggestions or anything, I am fully open to pull requests. This project has no license as of now, do whatever you want with it lol. If you do not like my code style, please give me feedback on what to improve! I'm not a web developer, so I barely know JavaScript/TypeScript. I am actively learning more as I make this project. I come from a C++/Rust background. *meoow*

## Plan

> IMPORTANT! I do NOT have a way to compile TypeScript as of writing this. I will find one as soon as I need.

Below, I will go over the plan for implementation! This is just a little summary of my idea, and I may refine it.

We will have these layers of tissue (in this list, from deepest to most shallow):
- epidermis
- papillary dermis
- reticular dermis
- hypodermis (subcutaneous fat/adipose)
- deep fascia (fascia surrounding skeletal muscle)
- skeletal muscle (muscles surrounding the bone)
- periosteum (connective tissues around the bone)
- bone

Each will behave as realistic as I can make them, and they will have separate textures all of the same dimensions--as of writing this, 886x500 pixels--and will be drawn using separate `<canvas>`s layered on top of each other.

For tissue destruction, I will adjust the alpha channels of each pixel. It will be a challenge to do this in a realistic way, but I will try my best to figure this out with math :D

For blood physics, my plan is to have an adjustable gravity vector, and blood will pool inside of wounds from the edges of an incision, leak down into lower layers, and drip out according to the simulated gravity.

## Meow

meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow 