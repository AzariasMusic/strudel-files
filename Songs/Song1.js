//clock
const setbpm = t => setcps(t/4/60)
setbpm(90)

//common sections
let bass1 = stack(
    note("<c2*8 eb2*8 ab1*8 f1*8>").sound("sawtooth").lpf(500).room(2).pan(sine.slow(2)).attack(0.001).decay(0.1).sustain(.3).release(.2).gain(2),
)
let arps1 = stack(
  note("<[c3 eb3 g3]*4 [c3 eb3 f3]*4 [c3 eb3 g3]*4 [[c3 eb3 bb3]*2 [c3 eb3 ab3]*2]>").trans(24).gain(.4).lpf(500).sound("gm_epiano1").room(1).jux(rev).delay(1).pan(sine.slow(2)),
  note("<[c3 eb3 g3]*4 [c3 eb3 f3]*4 [c3 eb3 g3]*4 [[c3 eb3 bb3]*2 [c3 eb3 ab3]*2]>").trans(24).gain(.4).lpf(500).sound("gm_epiano1").room(1).delay(1).pan(sine.slow(2)),
)

//section stacks
let section1 = stack(
  s("<bd [bd bd] sd bd>").fast(4).bank("RolandTR808").room(1).lpf(1800).gain(2)
)

let section2 = stack(
  s("<bd [bd bd] sd bd>").fast(4).bank("RolandTR808").room(1).lpf(1800).gain(2),
  s("bd bd bd bd").fast(1).bank("RolandTR808").room(1).lpf(1800).gain(1).delay(1),
)

let section3 = stack(
  s("<bd [bd bd] sd bd>").fast(4).bank("RolandTR808").room(1).lpf(1800).gain(2),
  s("bd bd bd bd").fast(1).bank("RolandTR808").room(1).lpf(1800).gain(1).delay(1),
  //s("<bd bd [bd bd] sd ~ ~ [bd bd]>").fast(8).bank("RolandTR808").room(1).lpf(1800).gain(1),
  s("[sd ~ ~ [sd sd ~ ~]]/2").bank("RolandTR808").room(1).delay(2).juxBy("<0 .5 1>/2", rev),
  s("hh hh hh hh hh hh hh [hh hh]").bank("RolandTR808").room(1).lpf(1800).gain(5).jux(rev),
  bass1
)

let section4 = stack(
  s("<bd [bd bd] sd bd>").fast(4).bank("RolandTR808").room(1).lpf(1800).gain(2),
  s("bd bd bd bd").fast(1).bank("RolandTR808").room(1).lpf(1800).gain(1).delay(1),
  //s("<bd bd [bd bd] sd ~ ~ [bd bd]>").fast(8).bank("RolandTR808").room(1).lpf(1800).gain(1),
  s("[sd ~ ~ [sd sd ~ ~]]/2").bank("RolandTR808").room(1).delay(2).juxBy("<0 .5 1>/2", rev),
  s("hh hh hh hh hh hh hh [hh hh]").bank("RolandTR808").room(1).lpf(1800).gain(5).jux(rev),
  bass1,
  arps1,
)

let section5 = stack(
  note("<c4 bb4 c4 ab4>").delay(2).trans(12).gain(.2).lpf(500).sound("gm_epiano1").trans(-12).juxBy("<0 .5 1>/2",rev).room(1),
  note("<c5 bb4 ab4 g4 f4 g4 d4 eb4>*4").trans(0).gain(.2).sound("gm_glockenspiel").pan(sine.slow(4)).room(1),
  note("<c3 g2 ab2 f2>").sound("gm_pad_warm").lpf(500).gain(.7).attack(.2).decay(.4).sustain(.4).release(.2).room(1)
)

let section6 = stack(
  section4,
  section5
)

//arrangment
arrange(
  [4, section1],
  [4, section2],
  [4, section3],
  [4, section4],
  [4, section5],
  [4, section6]
)