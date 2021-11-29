import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  mathForm = new FormGroup(
    {
      a: new FormControl(''),
      b: new FormControl(''),
      answer: new FormControl(''),
    },
    [CustomValidators.addition('answer', 'a', 'b')]
  );

  constructor() {
    this.mathForm.controls['a'].setValue(this.randomNumber());
    this.mathForm.controls['b'].setValue(this.randomNumber());
  }

  get a(): number {
    return this.mathForm.get('a').value;
  }

  get b(): number {
    return this.mathForm.get('b').value;
  }

  ngOnInit(): void {}

  randomNumber = (): number => {
    return Math.floor(Math.random() * 10);
  };
}
