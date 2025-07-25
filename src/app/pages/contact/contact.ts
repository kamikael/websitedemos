import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  form: FormGroup;
  isSubmitted = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        console.log('Form submitted:', this.form.value);
        this.isSubmitted = true;
        this.isSubmitting = false;
        this.form.reset();
      }, 1500);
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetForm() {
    this.isSubmitted = false;
    this.form.reset();
  }
} 