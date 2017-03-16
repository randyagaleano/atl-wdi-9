// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 10; 
    if (this.millisecs === 1000) {
      this.millisecs = 0;
      this.secs += 1;
      if (this.secs === 60) {
        this.secs = 0;
        this.mins += 1;
      }
    }
  },
  reset: function(){
    // Your Code Here
    this.mins === 0;
    this.secs === 0;
    this.millisecs === 0;
  },
  start: function(){
    // Your Code Here
    if (!this.isRunning) {
      this.isRunning = true;
      this.tickClock();
    }
  },
  stop: function(){
    // Your Code Here
      this.isRunning === false;
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs, 3);
    
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
    var string = number.toString();
    for ( var i = 0; i < (length-string.length); i++) {
      string = "0" + string;
    } 
    return string;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs)

  },
  handleClickStart: function() {
    // Your Code Here
    if ( !Stopwatch.isRunning ) {
      Stopwatch.start();
    }
  },
  handleClickStopReset: function(){
    // Your Code Here
    if (Stopwatch.isRunning) {
      Stopwatch.stop;
    } else {
      Stopwatch.reset;
      ViewEngine.updateTimeDisplay(0, 0, 0);
    }
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;

};






































































