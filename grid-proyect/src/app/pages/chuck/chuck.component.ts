import { Component } from '@angular/core';
import { ChuckService } from '../../services/chuck.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chuck',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chuck.component.html',
  styleUrl: './chuck.component.css'
})

export class ChuckComponent {
  randomJoke: string = '';
  jokeCategories: string[] = [];
  selectedCategory: string = '';
  jokeByCategory: string = '';

  constructor(private chuckService: ChuckService) { }

  ngOnInit(): void {
    this.getRandomJoke();
    this.getJokeCategories();
  }

  getRandomJoke(): void {
    this.chuckService.getRandomJoke().subscribe(
      (response: any) => {
        this.randomJoke = response.value;
      },
      (error: any) => {
        console.error('Error fetching random joke:', error);
      }
    );
  }

  getJokeCategories(): void {
    this.chuckService.getJokeCategories().subscribe(
      (response: string[]) => {
        this.jokeCategories = response;
      },
      (error: any) => {
        console.error('Error fetching joke categories:', error);
      }
    );
  }

  getJokeBySelectedCategory(category: string): void {
      if (category) {
        this.chuckService.getJokeByCategory(category).subscribe(
          (response: any) => {
            this.jokeByCategory = response.value;
          },
          (error: any) => {
            console.error('Error fetching joke by category:', error);
          }
        );
      } else {
        console.error('Please select a category first.');
      }
    }
}