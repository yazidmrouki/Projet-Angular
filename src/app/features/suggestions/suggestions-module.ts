import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing-module';
import { Suggestions } from './suggestions';
import { SuggestionList } from './suggestion-list/suggestion-list';
import { SuggestionDetails } from './suggestion-details/suggestion-details';


@NgModule({
  declarations: [
    Suggestions,
    SuggestionList,
    SuggestionDetails
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
