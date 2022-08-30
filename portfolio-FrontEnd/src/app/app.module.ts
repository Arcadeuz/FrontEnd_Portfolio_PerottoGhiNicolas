
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/edition/login/login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule }   from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EditComponent } from './components/edition/edit/edit.component';
import { DeleteComponent } from './components/edition/delete/delete.component';
import { AddComponent } from './components/edition/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularyPageComponent } from './components/formulary-page/formulary-page.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { GoComponent } from './components/edition/go/go.component';
import { MyListComponent } from './components/edition/my-list/my-list.component';
import { SingUpComponent } from './components/edition/sing-up/sing-up.component';
import { MypeoplesPageComponent } from './components/mypeoples-page/mypeoples-page.component';
import { AllListComponent } from './components/edition/all-list/all-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    HomePageComponent,
    EditComponent,
    DeleteComponent,
    AddComponent,
    FormularyPageComponent,
    HabilidadesComponent,
    ListPageComponent,
    GoComponent,
    MyListComponent,
    SingUpComponent,
    MypeoplesPageComponent,
    AllListComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      showSubtitle: false,
      showUnits:false,
      imageHeight:10,
      imageWidth:10,
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      renderOnClick:false,
      animationDuration: 300
    })
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }