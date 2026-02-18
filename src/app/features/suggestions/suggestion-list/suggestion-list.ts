import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-list',
  standalone: false,
  templateUrl: './suggestion-list.html',
  styleUrl: './suggestion-list.css',
})
export class SuggestionList implements OnInit {
  suggestions: Suggestion[] = [];

  constructor() {}

  ngOnInit(): void {
    // TODO: Fetch suggestions from a service
    // For now, initialize with empty array
    this.suggestions = [];
  }
}