import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProblemComponent} from './components/problem/problem.component';
import {TopicComponent} from './components/topic/topic.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NonEditableComponent} from './components/non-editable/non-editable.component';
import {AuthComponent} from './components/auth/auth.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {DynamicHooksModule, HookParserEntry} from "ngx-dynamic-hooks";
import {AssignmentComponent} from './components/assignement/assignment.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CertifyComponent} from './components/certify/certify.component';
import {CertifyResultComponent} from './components/certify-result/certify-result.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./helper/jwt.interceptor";
import {TimeLeftPipe} from "./pipe/TimeLeftPipe";
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { CertificationsComponent } from './components/certifications/certifications.component';

const componentParsers: Array<HookParserEntry> = [
    {component: NonEditableComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ProblemComponent,
        TopicComponent,
        ProfileComponent,
        NonEditableComponent,
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        AssignmentComponent,
        CertifyComponent,
        CertifyResultComponent,
        TimeLeftPipe,
        OverlayLoadingComponent,
        CertificationsComponent,
    ],
    imports: [
        DynamicHooksModule.forRoot({
            globalParsers: componentParsers
        }),
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        CodemirrorModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
