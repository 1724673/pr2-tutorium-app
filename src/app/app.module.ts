import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './components/body/login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/body/dashboard/calendar/calendar.component';
import { MessageBoardComponent } from './components/body/dashboard/message-board/message-board.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { ComposeMessageComponent } from './components/body/compose-message/compose-message.component';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
import { ComposeDateComponent } from './components/body/compose-date/compose-date.component';
import { ValidateSlotComponent } from './components/body/validate-slot/validate-slot.component';
import { DateService } from './services/date.service';
import { AuthService } from './services/auth.service';
import { SlotoverviewComponent } from './components/body/dashboard/slotoverview/slotoverview.component';
import { AdminViewComponent } from './components/body/dashboard/admin-view/admin-view.component';
import { CreateDateComponent } from './components/body/dashboard/admin-view/create-date/create-date.component';
import { ShowBookingsComponent } from './components/body/dashboard/admin-view/show-bookings/show-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MessageBoardComponent,
    FooterComponent,
    HeaderComponent,
    ComposeMessageComponent,
    DashboardComponent,
    ComposeDateComponent,
    ValidateSlotComponent,
    LoginComponent,
    SlotoverviewComponent,
    AdminViewComponent,
    CreateDateComponent,
    ShowBookingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    AppRoutingModule,
    MatBadgeModule,
    MatSliderModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    FlexLayoutModule,
    NgbTimepickerModule,
    MatRadioModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [MessageService, DateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
