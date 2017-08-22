import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreService } from './score-service.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SlotComponent } from './slot/slot.component';
import { SettingsComponent } from './settings/settings.component';

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
    SlotComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
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
