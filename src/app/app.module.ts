import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreService } from './score-service.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SlotComponent } from './slot/slot.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'pan': {threshold: 5},
      'swipe': {
           velocity: 0.4,
           threshold: 20,
           direction: 31 // /!\ ugly hack to allow swipe in all direction
      }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    SlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ScoreService,
    {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
