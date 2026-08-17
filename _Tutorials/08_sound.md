---
layout: page
title: Sound
permalink: /Tutorials/08_sound/
---
<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/p5.sound.min.js"></script>
<script src="/assets/sketches/code_08/code_08_01.js"></script>
<script src="/assets/sketches/code_08/code_08_02.js"></script>
<script src="/assets/sketches/code_08/code_08_03.js"></script>
<script src="/assets/sketches/code_08/code_08_04.js"></script>
<script src="/assets/sketches/code_08/code_08_05.js"></script>
<script src="/assets/sketches/code_08/code_08_06.js"></script>
<script src="/assets/sketches/code_08/code_08_07.js"></script>

# Sound 

## Loading Sound

Similar to loading in fonts and images, we can load in sound in p5.js by using the `preload()` function. After you upload your sound file, you can use the function `loadSound()`.

This tutorial will make use of the song *Freight Train* by Elizabeth Cotton, featuring Pete Seeger. This song was downloaded from the [Internet Archive](https://archive.org/details/RainbowQuest0312):

<audio controls>
    <source src="/assets/images/8/Elizabeth_Cotten_Freight_Train_Pete_Seeger.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

## Playing, Pausing and Stopping Sound.

To play a sound, you can use the function on a sound object` .play()`.

```js
music.play();
```

To pause or stop a sound, use the sound object functions `.pause()` or `.stop()`.

You can check if a sound is playing by using the sound object function `.isPlaying()`. This will return either a `true` or `false` value depending if the sound is playing.


```js
function mousePressed() {
if (!music.isPlaying()) {
    music.play();
} else {
    music.pause();
 }
}
```

In the below example, pressing the mouse will play or pause the song:


<div id="01"></div>

```js
let music;

function preload() {
  music = loadSound("Elizabeth_Cotten_Freight_Train_Pete_Seeger.mp3");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (music.isPlaying()) {
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Pause", 200, 200);
  } else {
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Play", 200, 200);
  }
}

function mousePressed() {
  if (!music.isPlaying()) {
    music.play();
  } else {
    music.stop();
  }
}
```


## Editing Playback

### loop

To loop a sound file, use the sound object function `.loop() `instead of `.play()`.

```js
music.loop();
```
### Volume

You can change the volume the sound file plays at by using the sound object function `.setVolume()`. The function takes values between 0 and 1 with 1 being full volume.

```js
music.setVolume(0.5);
```

### Rate

You can change the playback rate of your sound file by using the sound object function` .rate()`. This function takes in number values. Values between 0 and 1 will slow down the track with 0.5, for example, being half speed. Numbers above 1 will multiply the playback rate with 2, for example, playing the track at double speed. Numbers less than 0 will reverse the track.

```js
music.rate(2)
```

---
### Example:

In this example, the rate is controlled by the `mouseX` position, and the volume is controlled by the `mouseY` position:

<div id="02"></div>

```js
let music;

function preload() {
  music = loadSound("Elizabeth_Cotten_Freight_Train_Pete_Seeger.mp3");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (music.isPlaying()) {
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Pause", 200, 200);
    let r = map(mouseX, 0, width, 0, 2);
    music.rate(r);

    let v = map(mouseY, height, 0, 0, 1);

    music.setVolume(v);
    text("Volume =" + v, 200, 300);
    text("Rate =" + r, 200, 350);
  } else {
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Play", 200, 200);
  }
}

function mousePressed() {
  if (!music.isPlaying()) {
    music.loop();
  } else {
    music.stop();
  }
}
```


## Sound analysis and Lerp

We analyze the volume of a sound file in p5.js by using `p5.Amplitude`. Amplitude will measure the volume for all sounds playing in a p5 sketch.

To use Amplitude in a p5 sketch, we need to make a new Amplitude object:

```js
let amp;

setup(){
	amp = new p5.Amplitude();
}
```

After we create an Amplitude object, we can get the volume level of our p5.js sketch by using the Amplitude object function, `.getLevel()`. The `getLevel()` function will return a value between 0 and 1.

```js
let volume = amp.getLevel();
```

After we have the volume level, we can map this value onto other objects in our sketch. For example, we could map our level to the size of a circle:

```js
let volume = amp.getLevel();
let s = map(volume,0,01,50,400);
circle(200,200,s);
```
Example:

This example uses a beat by CVLTIV8R from [freesound.org](https://freesound.org/people/CVLTIV8R/sounds/791735/):

<audio controls>
    <source src="/assets/images/8/791744__cvltiv8r__now-we-cookin-beat-by-cvltiv8r-217bpm-8.wav" type="audio/wav">
    Your browser does not support the audio element.
</audio>

<div id="03"></div>

```js
let music;
let amp;
let lastS = 0;

function preload() {
  music = loadSound(
    "791744__cvltiv8r__now-we-cookin-beat-by-cvltiv8r-217bpm-8.wav"
  );
}
function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude();
}

function draw() {
  background(100);
  if (music.isPlaying()) {
    let v = amp.getLevel();
    let s = map(v, 0, 0.5, 50, 400);
    circle(200, 200, s);
    lastS = s;

    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Pause", 200, 350);
  } else {
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Play", 200, 200);
  }
}

function mousePressed() {
  if (!music.isPlaying()) {
    music.loop();
  } else {
    music.stop();
  }
}
```


### lerp()

This mapping, by default, will give us harsh transitions between values. To smooth out the change between different sizes, we can use the `lerp()` function.The `lerp()` function will return a number that is somewhere between the two numbers we provide based on an amount value we provide.

The first two parameters of the `lerp()` function are the numbers we want to interpolate between. The last parameter is the amount we want to interpolate by. The interpolation amount is a value between 0 and 1. 0 will return the first number, while 1 will return the second number. Any value in between 0 and 1 will return a number between our two specified values. For example the statement `lerp(0,2,0.5)` will return a value of 1. The interpolation amount of 0.5 is half way between 0 and 1 so the `lerp()` function will return a value half way between 0 and 2 which is 1.

We can use the `lerp()` function to interpolate between the current size of our circle and the last size of our circle. To do this, we’ll need to make a variable that holds our last size and assign it our current size at the end of our draw loop. We can then replace our circle’s size with an interpolated value between our last size and our new size:

```js
    let v = amp.getLevel();
    let s = map(v, 0, 0.5, 50, 400);
    s = lerp(s, lastS, 0.8);
    circle(200, 200, s);
    lastS = s;
```

<div id="04"></div>

```js
let music;
let amp;
let lastS = 0;

function preload() {
  music = loadSound(
    "791744__cvltiv8r__now-we-cookin-beat-by-cvltiv8r-217bpm-8.wav"
  );
}
function setup() {
  createCanvas(400, 400);
  amp = new p5.Amplitude();
}

function draw() {
  background(100);
  if (music.isPlaying()) {
    let v = amp.getLevel();
    let s = map(v, 0, 0.5, 50, 400);
    s = lerp(s, lastS, 0.8);
    circle(200, 200, s);
    lastS = s;

    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Pause", 200, 350);
  } else {
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Play", 200, 200);
  }
}

function mousePressed() {
  if (!music.isPlaying()) {
    music.loop();
  } else {
    music.stop();
  }
}
```


## Microphone Input

To get input from a microphone, we can use `p5.AudioIn`. To get the audio from the microphone, we need to make a new AudioIn object.

```js
let mic;

 function setup(){
  mic = new p5.AudioIn();
}
```

After we get the mic audio, we can tell p5.js to start the microphone with `.start()`.

```js
mic.start();
```

Just like with Amplitude, we use `.getLevel()` on an AudioIn object and map this value to other objects.

```js
let v = mic.getLevel();
```

For example, we can map the level of our microphone to the height of a square in our canvas:

<div id="07"></div>

```js
let mic;
lastH = 0;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0, 60);

  let v = mic.getLevel();
  let h = map(v, 0, 1, height, 0);
  h = lerp(lastH, h, 0.5);
  lastH = h;

  fill(255);
  rectMode(CENTER);
  rect(width / 2, h, 50);
}
```


## Generating Sound

[Oscillator Reference ](https://p5js.org/reference/p5.sound/p5.Oscillator/)

We can also generate sound in p5.js using Oscillators. Oscillators will generate a signal. We can change the oscillation per second, or Hertz, of an Oscillator to create different pitches. 440 oscillations per second, or 440 Hz, for example, will generate a tone with the pitch of “A”.

To make an oscillator, we need to make a new Oscillator object.

```js
let osc;

function setup() {
  osc = new p5.Oscillator('sine');
}
```
We can change the frequency of our oscillator by using the `.freq()` function. 

```js
osc.freq(440);
```

We can change the volume of our oscillator by using the `.amp()` function.

```js
osc.amp(0.5);
```

Both `.freq()` and `.amp()` take a second parameter that is treated as the ramp up time in seconds to change the frequency or volume:

```js
    osc.freq(300, 0.1);
    osc.amp(0.5, 0.1);
```

Example:

Basic 2D instrument with frequency mapped to `mouseX` and amplitude mapped to `mouseY`:

<div id="05"></div>

```js
let osc;
let playing;
let freq;
let amp;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator("sine");
}

function draw() {
  background(0);
  freq = map(mouseX, 0, width, 100, 500);
  amp = map(mouseY, height, 0, 0, 1);

  noStroke();

  circle(mouseX, mouseY, 40);

  if (playing) {
    fill(255);
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  } else {
    fill(0);
  }
}

function mousePressed() {
  playOsc();
}

function playOsc() {
  osc.start();
  playing = true;
}

function mouseReleased() {
  osc.amp(0, 0.5);
  playing = false;
}
```


## Midi Values

Musical Instrument Digital Interface or MIDI is a standard for communicating between electronic musical instruments, computers and other digital devices.

The MIDI standard contains numerical values that represent certain notes. You can find the MIDI number value of these notes using this [resource](https://computermusicresource.com/midikeys.html) from computermusicresource.com.



In p5.js we can convert a midi value to a frequency by using the function `midiToFreq()`. The function takes in a MIDI value such as 60 which corresponds to middle C.

```js
osc.freq(midiToFreq(60));
```

Example:

Using `midiToFreq()` to create a simple digital instrument, played with the 1 through 8 keys on your keyboard:

<div id="06"></div>

```js
let notes = [];
let midi = [48, 50, 52, 53, 55, 57, 59, 60];
let keys = [49, 50, 51, 52, 53, 54, 55, 56];
let noteNames = ["C", "D", "E", "F", "G", "A", "B", "C"];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < midi.length; i++) {
    let osc = new p5.Oscillator("sine");
    osc.start();
    osc.amp(0);
    osc.freq(midiToFreq(midi[i]));
    notes.push(osc);
  }
}

function draw() {
  let radius = 20;
  background(220);
  for (let i = 0; i < notes.length; i++) {
    let x = map(i, 0, notes.length - 1, radius, width - radius);
    soundButton(x, 200, radius, notes[i], i);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(noteNames[i], x, 160);
  }
}

function soundButton(x, y, radius, osc, keyNumber) {
  fill(0);
  if (keyIsDown(keys[keyNumber])) {
    fill(255);
    osc.amp(1, 0.1);
  } else {
    fill(0);
    osc.amp(0, 0.1);
  }

  circle(x, y, radius * 2);
}
```

 ## Further References

There are a wide variety of sound options within p5.js - explore the below links:

 - [p5.Envelope](https://p5js.org/reference/p5.sound/p5.Envelope/) - Use to set the Attack, Decay, Sustain, and Release of Audio
 - [reverb()](https://p5js.org/reference/p5.sound/p5.Reverb/) - Use to add reverb to your sound
- [monoSynth()](https://p5js.org/reference/p5.sound/p5.MonoSynth/) and [PolySynth()](https://p5js.org/reference/p5.sound/p5.PolySynth/) - use for single and multi voice sound synthesis


[Twelve Tone Bouncing Ball Example](https://editor.p5js.org/pickpanpuck/sketches/cw3TiR56c)


