/***************** 
 * Mousepos Test *
 *****************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'mousePos';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions1RoutineBegin());
flowScheduler.add(instructions1RoutineEachFrame());
flowScheduler.add(instructions1RoutineEnd());
flowScheduler.add(fixation1RoutineBegin());
flowScheduler.add(fixation1RoutineEachFrame());
flowScheduler.add(fixation1RoutineEnd());
const trials1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials1LoopBegin, trials1LoopScheduler);
flowScheduler.add(trials1LoopScheduler);
flowScheduler.add(trials1LoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructions1Clock;
var instr1;
var instr1Resp;
var fixation1Clock;
var fix1;
var trial1Clock;
var trial1Mouse;
var targetAngles;
var trial1Target;
var trial1Home;
var trial1Cursor;
var trial1Num;
var endClock;
var thanks;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions1"
  instructions1Clock = new util.Clock();
  instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr1',
    text: 'Use your mouse to move the cursor between the middle start position and the outward targets.\n\nAlways try to move as straight and smooth as possible. Once you settle into your pace, do not slow down: whenever you make an error, just do better on the next trial. Pace is key.\n\nPress SPACE to start!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instr1Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation1"
  fixation1Clock = new util.Clock();
  fix1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial1"
  trial1Clock = new util.Clock();
  trial1Mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial1Mouse.mouseClock = new util.Clock();
  //win.mouseVisible = false;
  document.documentElement.style.cursor = 'none';
  targetAngles = [30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60, 30, 60];
  
  trial1Target = new visual.Polygon ({
    win: psychoJS.window, name: 'trial1Target', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trial1Home = new visual.Polygon ({
    win: psychoJS.window, name: 'trial1Home', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  trial1Cursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trial1Cursor', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  trial1Num = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial1Num',
    text: '45',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Thanks',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _instr1Resp_allKeys;
var instructions1Components;
function instructions1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions1'-------
    t = 0;
    instructions1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr1Resp.keys = undefined;
    instr1Resp.rt = undefined;
    _instr1Resp_allKeys = [];
    // keep track of which components have finished
    instructions1Components = [];
    instructions1Components.push(instr1);
    instructions1Components.push(instr1Resp);
    
    for (const thisComponent of instructions1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instructions1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr1* updates
    if (t >= 0.0 && instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1.tStart = t;  // (not accounting for frame time here)
      instr1.frameNStart = frameN;  // exact frame index
      
      instr1.setAutoDraw(true);
    }

    
    // *instr1Resp* updates
    if (t >= 0.0 && instr1Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1Resp.tStart = t;  // (not accounting for frame time here)
      instr1Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr1Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr1Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr1Resp.clearEvents(); });
    }

    if (instr1Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr1Resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr1Resp_allKeys = _instr1Resp_allKeys.concat(theseKeys);
      if (_instr1Resp_allKeys.length > 0) {
        instr1Resp.keys = _instr1Resp_allKeys[_instr1Resp_allKeys.length - 1].name;  // just the last key pressed
        instr1Resp.rt = _instr1Resp_allKeys[_instr1Resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions1'-------
    for (const thisComponent of instructions1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr1Resp.keys', instr1Resp.keys);
    if (typeof instr1Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr1Resp.rt', instr1Resp.rt);
        routineTimer.reset();
        }
    
    instr1Resp.stop();
    // the Routine "instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixation1Components;
function fixation1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation1'-------
    t = 0;
    fixation1Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixation1Components = [];
    fixation1Components.push(fix1);
    
    for (const thisComponent of fixation1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function fixation1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix1* updates
    if (t >= 0.0 && fix1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix1.tStart = t;  // (not accounting for frame time here)
      fix1.frameNStart = frameN;  // exact frame index
      
      fix1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation1'-------
    for (const thisComponent of fixation1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trials1;
var currentLoop;
function trials1LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 45, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials1'
  });
  psychoJS.experiment.addLoop(trials1); // add the loop to the experiment
  currentLoop = trials1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials1 of trials1) {
    const snapshot = trials1.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trial1RoutineBegin(snapshot));
    thisScheduler.add(trial1RoutineEachFrame(snapshot));
    thisScheduler.add(trial1RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials1LoopEnd() {
  psychoJS.experiment.removeLoop(trials1);

  return Scheduler.Event.NEXT;
}


var gotValidClick;
var targetangle;
var targetangle_rad;
var targetPos;
var targetOpacity;
var homeOpacity;
var homeStart;
var reachOut;
var trial1Step;
var steps;
var trial1Components;
function trial1RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial1'-------
    t = 0;
    trial1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the trial1Mouse
    // current position of the mouse:
    trial1Mouse.x = [];
    trial1Mouse.y = [];
    trial1Mouse.leftButton = [];
    trial1Mouse.midButton = [];
    trial1Mouse.rightButton = [];
    trial1Mouse.time = [];
    gotValidClick = false; // until a click is received
    trial1Mouse.mouseClock.reset();
    targetangle = targetAngles[trials1.thisN];
    targetangle_rad = (/*pi*/Math.PI * (targetangle / 180));
    targetPos = [(/*cos*/Math.cos(targetangle_rad) * 0.4), (/*sin*/Math.sin(targetangle_rad) * 0.4)];
    targetOpacity = 0;
    homeOpacity = 0;
    homeStart = false;
    reachOut = false;
    trial1Step = 1;
    steps = [];
    trial1Num.text = (trials1.thisN + 1).toString();
    trial1Cursor.pos = [0.5, 0.5];
    trial1Mouse.pos = [0.5, 0.5];
    
    // keep track of which components have finished
    trial1Components = [];
    trial1Components.push(trial1Mouse);
    trial1Components.push(trial1Target);
    trial1Components.push(trial1Home);
    trial1Components.push(trial1Cursor);
    trial1Components.push(trial1Num);
    
    for (const thisComponent of trial1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var CursorTargetDistance;
var CursorHomeDistance;
function trial1RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trial1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trial1Mouse* updates
    if (t >= 0.0 && trial1Mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Mouse.tStart = t;  // (not accounting for frame time here)
      trial1Mouse.frameNStart = frameN;  // exact frame index
      
      trial1Mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trial1Mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = trial1Mouse.getPressed();
      const xys = trial1Mouse.getPos();
      trial1Mouse.x.push(xys[0]);
      trial1Mouse.y.push(xys[1]);
      trial1Mouse.leftButton.push(buttons[0]);
      trial1Mouse.midButton.push(buttons[1]);
      trial1Mouse.rightButton.push(buttons[2]);
      trial1Mouse.time.push(trial1Mouse.mouseClock.getTime());
    }
    CursorTargetDistance = Math.sqrt((Math.pow((trial1Cursor.pos[0] - trial1Target.pos[0]), 2) + Math.pow((trial1Cursor.pos[1] - trial1Target.pos[1]), 2)));
    CursorHomeDistance = Math.sqrt((Math.pow(trial1Cursor.pos[0], 2) + Math.pow(trial1Cursor.pos[1], 2)));
    //steps.append(trial1Step);
    steps.push(step)
    if ((! homeStart)) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial1Step = 1;
        if ((CursorHomeDistance < 0.025)) {
            homeStart = true;
            console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (((! reachOut) && homeStart)) {
        homeOpacity = 0;
        targetOpacity = 1;
        trial1Step = 2;
        if ((CursorTargetDistance < 0.025)) {
            reachOut = true;
            console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (reachOut) {
        homeOpacity = 1;
        targetOpacity = 0;
        trial1Step = 3;
        if ((CursorHomeDistance < 0.025)) {
            console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
            continueRoutine = false;
        }
    }
    
    
    // *trial1Target* updates
    if (t >= 0.0 && trial1Target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Target.tStart = t;  // (not accounting for frame time here)
      trial1Target.frameNStart = frameN;  // exact frame index
      
      trial1Target.setAutoDraw(true);
    }

    
    if (trial1Target.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial1Target.setOpacity(targetOpacity);
      trial1Target.setPos(targetPos);
    }
    
    // *trial1Home* updates
    if (t >= 0.0 && trial1Home.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Home.tStart = t;  // (not accounting for frame time here)
      trial1Home.frameNStart = frameN;  // exact frame index
      
      trial1Home.setAutoDraw(true);
    }

    
    if (trial1Home.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial1Home.setOpacity(homeOpacity);
    }
    
    // *trial1Cursor* updates
    if (t >= 0.0 && trial1Cursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Cursor.tStart = t;  // (not accounting for frame time here)
      trial1Cursor.frameNStart = frameN;  // exact frame index
      
      trial1Cursor.setAutoDraw(true);
    }

    
    if (trial1Cursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trial1Cursor.setPos([trial1Mouse.getPos()[0], trial1Mouse.getPos()[1]]);
    }
    
    // *trial1Num* updates
    if (t >= 0.0 && trial1Num.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial1Num.tStart = t;  // (not accounting for frame time here)
      trial1Num.frameNStart = frameN;  // exact frame index
      
      trial1Num.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial1RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial1'-------
    for (const thisComponent of trial1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trial1Mouse.x', trial1Mouse.x);
    psychoJS.experiment.addData('trial1Mouse.y', trial1Mouse.y);
    psychoJS.experiment.addData('trial1Mouse.leftButton', trial1Mouse.leftButton);
    psychoJS.experiment.addData('trial1Mouse.midButton', trial1Mouse.midButton);
    psychoJS.experiment.addData('trial1Mouse.rightButton', trial1Mouse.rightButton);
    psychoJS.experiment.addData('trial1Mouse.time', trial1Mouse.time);
    
    //thisExp.addData("step", steps);
    //thisExp.addData("targetangle_deg", targetangle);
    psychoJS.experiment.addData('trial1Step', steps)
    psychoJS.experiment.addData('targetangle_deg', targetangle)
    
    // the Routine "trial1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(thanks);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  //win.mouseVisible = true;
  psychoJS.window.mouseVisible = true;
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
