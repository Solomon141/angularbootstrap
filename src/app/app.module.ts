import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarousalSliderComponent } from './components/carousal-slider/carousal-slider.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { AdvancedsearchComponent } from './components/advancedsearch/advancedsearch.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarousalSliderComponent,
    TestimonialsComponent,
    AdvancedsearchComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
