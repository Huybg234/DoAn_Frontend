// import { ModuleWithProviders } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { HomeComponent } from "../components/user/home/home.component";
// import { JobDetailComponent } from "../components/user/job-detail/job-detail.component";
// import { ListJobComponent } from "../components/user/list-job/list-job.component";
// import { LoginComponent } from "../components/authen/login/login.component";
// import { PersonalInfoComponent } from "../components/user/personal-info/personal-info.component";
// import { RecruitmentComponent } from "../components/user/recruitment/recruitment.component";
// import { RegisterComponent } from "../components/authen/register/register.component";
// const routes: Routes = [
//     {
//         path: 'user',
//         loadChildren: () => import("src/app/components/user/user.module").then((m) => m.UserModule)
//     },
//     {
//         path: 'authen',
//         loadChildren: () => import("src/app/components/authen/authen.module").then((m) => m.AuthenModule)
//     },
//     {
//       path: 'employee-add', component:EmployeeAddComponent
//     },
//     {
//       path: 'employee-list', component:EmployeeListComponent
//     },
//     {
//       path: 'login', component:LoginComponent
//     },
  
//     {
//       path: 'change-password', component:ChangePasswordComponent
//     },
//     {
//       path: 'otp', component:OtpComponent
//     },
//     // {
//     //   path: '', component:HomeComponent
//     // }

// ]

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes),
//     ],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }