import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SkytableComponent } from './skytable/skytable.component';
import { SkyimageComponent } from './skyimage/skyimage.component';
import { SkyheaderComponent } from './skyheader/skyheader.component';
import { SkycontainerComponent } from './skycontainer/skycontainer.component';
import { SkybuttonComponent } from './skybutton/skybutton.component';
import { SkybadgesComponent } from './skybadges/skybadges.component';
import { SkyprogressbarComponent } from './skyprogressbar/skyprogressbar.component';
import { SkyspinnerComponent } from './skyspinner/skyspinner.component';
import { SkypaginationComponent } from './skypagination/skypagination.component';
import { SkylistgroupComponent } from './skylistgroup/skylistgroup.component';
import { SkycardComponent } from './skycard/skycard.component';
import { SkydropdownComponent } from './skydropdown/skydropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SkycollapseComponent } from './skycollapse/skycollapse.component';
import { SkynavComponent } from './skynav/skynav.component';
import { SkynavbarComponent } from './skynavbar/skynavbar.component';
import { SkyformComponent } from './skyform/skyform.component';
import { SkyforminputComponent } from './skyforminput/skyforminput.component';
import { SkycarouselComponent } from './skycarousel/skycarousel.component';
import { SkymodalComponent } from './skymodal/skymodal.component';
import { SkytooltipComponent } from './skytooltip/skytooltip.component';
import { SkytoastComponent } from './skytoast/skytoast.component';
import { SkyspyscrollComponent } from './skyspyscroll/skyspyscroll.component';
import { SkyspyutilitiesComponent } from './skyspyutilities/skyspyutilities.component';
import { SkyutilitiesComponent } from './skyutilities/skyutilities.component';
import { SkyflexComponent } from './skyflex/skyflex.component';
import { SkyiconsComponent } from './skyicons/skyicons.component';
import { SkymediaobjectComponent } from './skymediaobject/skymediaobject.component';
import { SkyfilterComponent } from './skyfilter/skyfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    SkytableComponent,
    SkyimageComponent,
    SkyheaderComponent,
    SkycontainerComponent,
    SkybuttonComponent,
    SkybadgesComponent,
    SkyprogressbarComponent,
    SkyspinnerComponent,
    SkypaginationComponent,
    SkylistgroupComponent,
    SkycardComponent,
    SkydropdownComponent,
    SkycollapseComponent,
    SkynavComponent,
    SkynavbarComponent,
    SkyformComponent,
    SkyforminputComponent,
    SkycarouselComponent,
    SkymodalComponent,
    SkytooltipComponent,
    SkytoastComponent,
    SkyspyscrollComponent,
    SkyspyutilitiesComponent,
    SkyutilitiesComponent,
    SkyflexComponent,
    SkyiconsComponent,
    SkymediaobjectComponent,
    SkyfilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
