import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Suggestions } from './suggestions';
import { SuggestionList } from './suggestion-list/suggestion-list';
import { SuggestionDetails } from './suggestion-details/suggestion-details';

const routes: Routes = [

  { path: '', component: SuggestionList },

  { path: ':id', component: SuggestionDetails }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
