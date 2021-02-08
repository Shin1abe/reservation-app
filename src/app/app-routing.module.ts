import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

const routes: Routes = [
{path:'', redirectTo:'products', pathMatch:'full'},
{path:'auth', redirectTo:'auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ProductModule,
            AuthModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
